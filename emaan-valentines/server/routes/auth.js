const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post('/login', (req, res) => {
    try {
        const {password} = req.body;
        if (password == process.env.PASSWORD) {
            const token = jwt.sign({ auth: true }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.cookie('auth_token', token, { 
            httpOnly: true, 
            secure: true,
            sameSite: 'none',
            maxAge: 86400000 
        });            
        res.json({ success: true, token });
        } else {
            res.status(401).json({ error: 'Wrong password' });
        }
    } catch(err) {
        console.log("/login error", err);
        res.status(401).json({error: err});
    }
});

router.get('/verify', (req, res) => {
  const {token} = req.body;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({ authenticated: true });
  } catch(err) {
    res.status(401).json({ error: 'Not authenticated' });
  }
});

module.exports = router;