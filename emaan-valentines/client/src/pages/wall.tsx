import '../styles/App.css'
import { Header } from '../components/header'
import { FallingHearts } from '../components/falling-hearts'
import { HeroSection } from '../components/hero-section'
import { CoupleScene } from '../components/couple-scene'

export function Wall() {

    return (
        <main className="relative min-h-screen">
        <Header/>
        <FallingHearts/>
        <div className="relative z-10">
            
        </div>
        </main>
  )
}