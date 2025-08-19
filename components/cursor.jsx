"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updatePosition)
    return () => window.removeEventListener("mousemove", updatePosition)
  }, [])

  return (
    <div
      className="fixed w-5 h-5 bg-white/80 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
      style={{
        left: position.x - 10,
        top: position.y - 10,
        transform: "translate(0, 0)",
      }}
    />
  )
}
