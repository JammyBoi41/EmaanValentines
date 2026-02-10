import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { Header } from './components/header'
import { FallingHearts } from './components/falling-hearts'
import { HeroSection } from './components/hero-section'
import { CoupleScene } from './components/couple-scene'

function App() {

  return (
    <main className="relative min-h-screen">
      <Header/>
      <FallingHearts/>
      <div className="relative z-10">
        <HeroSection/>
        <CoupleScene/>
      </div>
    </main>
  )
}

export default App
