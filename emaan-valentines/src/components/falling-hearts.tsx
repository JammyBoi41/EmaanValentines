"use client"

import { useEffect, useState } from "react"
import { PixelHeart } from "./pixel-heart"

interface FallingHeart {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  color: string
}

export function FallingHearts() {
  const [hearts, setHearts] = useState<FallingHeart[]>([])

  useEffect(() => {
    const colors = [
      "hsl(345, 80%, 55%)",
      "hsl(0, 75%, 60%)",
      "hsl(330, 45%, 70%)",
      "hsl(345, 80%, 70%)",
      "hsl(350, 90%, 65%)",
    ]

    const generated: FallingHeart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 20,
      delay: Math.random() * 10,
      duration: 6 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setHearts(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-fall"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <PixelHeart size={heart.size} color={heart.color} />
        </div>
      ))}
    </div>
  )
}
