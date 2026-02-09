"use client"

import { useEffect, useRef, useState } from "react"

export function CoupleScene() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  //8-bit jam and emaan
  const sceneWidth = 240
  const sceneHeight = 120
  const px = 8

  //jam
  const char1 = [
    { x: 3, y: 6, c: "hsl(20, 35%, 25%)" }, //hair 
    { x: 4, y: 6, c: "hsl(20, 35%, 25%)" },
    { x: 3, y: 7, c: "hsl(25, 70%, 75%)" },  // head
    { x: 4, y: 7, c: "hsl(25, 70%, 75%)" },
    { x: 3, y: 8, c: "hsl(25, 70%, 75%)" },
    { x: 4, y: 8, c: "hsl(25, 70%, 75%)" },
    { x: 3, y: 9, c: "hsl(330, 45%, 70%)" },   // body
    { x: 4, y: 9, c: "hsl(330, 45%, 70%)" },
    { x: 3, y: 10, c: "hsl(330, 45%, 70%)" },
    { x: 4, y: 10, c: "hsl(330, 45%, 70%)" },
    { x: 2, y: 9, c: "hsl(330, 45%, 70%)" },   // arms
    { x: 5, y: 9, c: "hsl(330, 45%, 70%)" },
    { x: 3, y: 11, c: "hsl(340, 30%, 25%)" },  // legs
    { x: 4, y: 11, c: "hsl(340, 30%, 25%)" },
    { x: 3, y: 12, c: "hsl(340, 30%, 25%)" },
    { x: 4, y: 12, c: "hsl(340, 30%, 25%)" },
  ]

  //emaan
  const char2 = [
    { x: 26, y: 6, c: "hsl(30, 45%, 30%)" }, //hair 
    { x: 27, y: 6, c: "hsl(30, 45%, 30%)" },
    { x: 25, y: 6, c: "hsl(30, 45%, 30%)" },
    { x: 28, y: 6, c: "hsl(30, 45%, 30%)" },
    { x: 28, y: 7, c: "hsl(30, 45%, 30%)" },
    { x: 25, y: 7, c: "hsl(30, 45%, 30%)" },
    { x: 28, y: 8, c: "hsl(30, 45%, 30%)" },
    { x: 25, y: 8, c: "hsl(30, 45%, 30%)" },
    { x: 26, y: 7, c: "hsl(30, 45%, 30%)" },  // head
    { x: 27, y: 7, c: "hsl(30, 45%, 55%)" },
    { x: 26, y: 8, c: "hsl(30, 45%, 55%)" },
    { x: 27, y: 8, c: "hsl(30, 45%, 55%)" },
    { x: 26, y: 9, c: "hsl(330, 45%, 70%)" },   // body
    { x: 27, y: 9, c: "hsl(330, 45%, 70%)" },
    { x: 26, y: 10, c: "hsl(330, 45%, 70%)" },
    { x: 27, y: 10, c: "hsl(330, 45%, 70%)" },
    { x: 25, y: 9, c: "hsl(30, 45%, 30%)" },   // arms
    { x: 28, y: 9, c: "hsl(30, 45%, 30%)" },
    { x: 26, y: 11, c: "hsl(340, 30%, 25%)" },  // legs
    { x: 27, y: 11, c: "hsl(340, 30%, 25%)" },
    { x: 26, y: 12, c: "hsl(340, 30%, 25%)" },
    { x: 27, y: 12, c: "hsl(340, 30%, 25%)" },
  ]

  //big heart
  const heart = [
    { x: 13, y: 7, c: "hsl(0, 75%, 60%)" },
    { x: 14, y: 7, c: "hsl(0, 75%, 60%)" },
    { x: 16, y: 7, c: "hsl(0, 75%, 60%)" },
    { x: 17, y: 7, c: "hsl(0, 75%, 60%)" },
    { x: 12, y: 8, c: "hsl(0, 75%, 60%)" },
    { x: 13, y: 8, c: "hsl(0, 75%, 60%)" },
    { x: 14, y: 8, c: "hsl(0, 75%, 60%)" },
    { x: 15, y: 8, c: "hsl(0, 75%, 60%)" },
    { x: 16, y: 8, c: "hsl(0, 75%, 60%)" },
    { x: 17, y: 8, c: "hsl(0, 75%, 60%)" },
    { x: 18, y: 8, c: "hsl(0, 75%, 60%)" },
    { x: 12, y: 9, c: "hsl(0, 75%, 60%)" },
    { x: 13, y: 9, c: "hsl(0, 75%, 60%)" },
    { x: 14, y: 9, c: "hsl(0, 75%, 60%)" },
    { x: 15, y: 9, c: "hsl(0, 75%, 60%)" },
    { x: 16, y: 9, c: "hsl(0, 75%, 60%)" },
    { x: 17, y: 9, c: "hsl(0, 75%, 60%)" },
    { x: 18, y: 9, c: "hsl(0, 75%, 60%)" },
    { x: 13, y: 10, c: "hsl(0, 75%, 60%)" },
    { x: 14, y: 10, c: "hsl(0, 75%, 60%)" },
    { x: 15, y: 10, c: "hsl(0, 75%, 60%)" },
    { x: 16, y: 10, c: "hsl(0, 75%, 60%)" },
    { x: 17, y: 10, c: "hsl(0, 75%, 60%)" },
    { x: 14, y: 11, c: "hsl(0, 75%, 60%)" },
    { x: 15, y: 11, c: "hsl(0, 75%, 60%)" },
    { x: 16, y: 11, c: "hsl(0, 75%, 60%)" },
    { x: 15, y: 12, c: "hsl(0, 75%, 60%)" },
  ]

  //ground
  const ground = Array.from({ length: sceneWidth / px }, (_, i) => ({
    x: i,
    y: 13,
    c: "hsl(330, 45%, 85%)",
  }))

  const allPixels = [...ground, ...char1, ...char2, ...heart]

  return (
    <section ref={ref} className="py-16 flex justify-center px-4">
      <div
        className={`
          transition-all duration-700
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        `}
      >
        <svg
          width={sceneWidth}
          height={sceneHeight}
          viewBox={`0 0 ${sceneWidth} ${sceneHeight}`}
          className="pixel-render w-full max-w-md h-auto"
          role="img"
        >
          {allPixels.map((p, i) => (
            <rect
              key={i}
              x={p.x * px}
              y={p.y * px}
              width={px}
              height={px}
              fill={p.c}
              className={isVisible ? "transition-opacity duration-300" : "opacity-0"}
              style={{ transitionDelay: `${i * 10}ms` }}
            />
          ))}
        </svg>
      </div>
    </section>
  )
}
