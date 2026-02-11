"use client"

import { useState, useEffect } from "react"
import { PixelHeart } from "./pixel-heart"

export function HeroSection() {
  const [showSubtext, setShowSubtext] = useState(false)
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; delay: number }[]>([])

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtext(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const generated = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      delay: Math.random() * 3,
    }))
    setSparkles(generated)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* blinking sparkles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute w-2 h-2 bg-primary animate-ping"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: `${s.delay}s`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* big heart */}
      <div className="animate-pixel-float mb-8">
        <PixelHeart size={96} animated />
      </div>

      {/* title */}
      <h1 className="font-mono text-2xl md:text-4xl lg:text-5xl text-primary text-center leading-relaxed tracking-wider text-balance">
        {"Happy Valentine's Day!"}
      </h1>

      {/* row o hearts */}
      <div className="flex items-center gap-3 mt-6" aria-hidden="true">
        <PixelHeart size={16} color="hsl(330, 45%, 70%)" />
        <PixelHeart size={20} color="hsl(345, 80%, 55%)" />
        <PixelHeart size={24} color="hsl(0, 75%, 60%)" />
        <PixelHeart size={20} color="hsl(345, 80%, 55%)" />
        <PixelHeart size={16} color="hsl(330, 45%, 70%)" />
      </div>

      {/* subtitle + typewriter */}
      <div className="mt-10 min-h-[3rem]">
        {(
          <p className="font-sans text-xl md:text-3xl text-foreground text-center leading-relaxed">
            I love you fat :3
          </p>
        )}
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-muted-foreground">{"scroll down"}</span>
        <div className="w-3 h-3 border-b-2 border-r-2 border-primary rotate-45" aria-hidden="true" />
      </div>
    </section>
  )
}
