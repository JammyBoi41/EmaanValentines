import './styles/App.css'
import { Home } from './pages/home'
import { Wall } from './pages/wall'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/wall' element={<Wall/>}/>
    </Routes>
  )
}

export default App
