import '../styles/App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/header'
import { FallingHearts } from '../components/falling-hearts'
import { HeroSection } from '../components/hero-section'
import { CoupleScene } from '../components/couple-scene'
import { PixelHeart } from '../components/pixel-heart'
import { valentineColors } from '../constants/colors'
import { backend_url } from '../constants/urls'

export function Landing() {
    const [text, setText] = useState("");
    const [src, setSrc] = useState("inquisitive-cat.png");
    const navigate = useNavigate();
    async function authenticateUser() {
        const res = await fetch(`${backend_url}/auth/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({password: text})
        });
        const data = await res.json()
        if(res.ok) {
            setSrc("dog-successful.webp");
            setTimeout(() => {
                navigate("/home");
            }, 2000);
        } else {
            alert("no")
        }
    }

    return (
        <main className="relative min-h-screen">
        <FallingHearts/>
        <div className="relative z-10 w-full min-h-screen flex items-center justify-center flex-col">
                        
                        {/* header */}
                        <h1 className="font-mono text-lg md:text-4xxl lg:text-5xl text-primary text-center leading-relaxed tracking-wider text-balance flex items-center justify-center flex-col mb-10">
                            {"Are you meant to be here?"}
                            <img style={{width: "25%", height: "25%"}} src={src}/>
                        </h1>

                        <div className="font-mono text-lg text-primary text-center leading-relaxed tracking-wider text-balance flex flex-col">
                            <input onChange={(e) => setText(e.target.value)} placeholder="enter the password..." className="border-1 rounded border-white mb-5">
                                
                            </input>

                            <button
                                    style={{backgroundColor: valentineColors["pastelRed"]}}
                                    className="px-4 py-2 border border-pink-500 rounded hover:bg-pink-100"
                                    onClick={() => authenticateUser()}
                                  >
                                    Enter???
                            </button>
                        </div>
            
                        {/* row of hearts */}
                        <div className="flex items-center gap-3 mt-6 mb-6" aria-hidden="true">
                            <PixelHeart size={16} color="hsl(330, 45%, 70%)" />
                            <PixelHeart size={20} color="hsl(345, 80%, 55%)" />
                            <PixelHeart size={24} color="hsl(0, 75%, 60%)" />
                            <PixelHeart size={20} color="hsl(345, 80%, 55%)" />
                            <PixelHeart size={16} color="hsl(330, 45%, 70%)" />
                        </div>
            
        </div>
        </main>
  )
}