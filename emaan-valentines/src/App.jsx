import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { FallingHearts } from './components/falling-hearts'
import { HeroSection } from './components/hero-section'
import { CoupleScene } from './components/couple-scene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="relative min-h-screen">
      <FallingHearts/>
      <div className="relative z-10">
        <HeroSection/>
        <CoupleScene/>
      </div>
    </main>
  )
}

export default App
