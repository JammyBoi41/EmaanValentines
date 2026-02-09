import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { FallingHearts } from './components/falling-hearts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="relative min-h-screen">
      <FallingHearts/>
      <div className="relative z-10">

      </div>
    </main>
  )
}

export default App
