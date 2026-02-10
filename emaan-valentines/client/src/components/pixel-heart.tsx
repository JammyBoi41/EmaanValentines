"use client"

import { cn } from "../lib/utils"

interface PixelHeartProps {
  size?: number
  color?: string
  className?: string
  animated?: boolean
}

export function PixelHeart({ size = 32, color = "hsl(345, 80%, 55%)", className, animated = false }: PixelHeartProps) {
  const pixel = size / 8

  // 8x7 pixel heart pattern
  const heartPattern = [
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
  ]

  return (
    <svg
      width={size}
      height={size * 0.875}
      viewBox={`0 0 ${8 * pixel} ${7 * pixel}`}
      className={cn(animated && "animate-pixel-pulse", className)}
      aria-hidden="true"
    >
      {heartPattern.map((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect
              key={`${x}-${y}`}
              x={x * pixel}
              y={y * pixel}
              width={pixel}
              height={pixel}
              fill={color}
            />
          ) : null
        )
      )}
    </svg>
  )
}
