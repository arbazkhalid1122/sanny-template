"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export function OverlappingCircles() {
  const controls = useAnimation()
  const scrollTimeout = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       // animate circles stretching
//       controls.start({
//         rx: [80, 110],
//         ry: [80, 60],
//         transition: { duration: 1.2, ease: "easeInOut" },
//       })

//       // reset after scroll stops
//       if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
//       scrollTimeout.current = setTimeout(() => {
//         controls.set({ rx: 80, ry: 80 })
//       }, 200)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [controls])

  // 6 overlapping circles horizontally aligned
  const circles = Array.from({ length: 6 }, (_, i) => ({
    cx: 120 + i * 50, // x spacing
    cy: 200,
  }))

  return (
    <svg
      width="400"
      height="250"
      viewBox="0 0 500 400"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto my-10 flex items-center justify-center"
    >
      {circles.map((circle, i) => (
        <motion.ellipse
          key={i}
          cx={circle.cx}
          cy={circle.cy}
          rx="80"
          ry="80"
          fill="none"
          stroke="white"
          strokeWidth="1"
          animate={controls}
        />
      ))}
    </svg>
  )
}
