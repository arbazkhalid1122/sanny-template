"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export function MorphingFlower() {
  const controls = useAnimation()
  const scrollTimeout = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       // animate circles into a "squished blob"
//       controls.start({
//         rx: [70, 90],
//         ry: [70, 50],
//         transition: { duration: 1.2, ease: "easeInOut" },
//       })

//       // reset after scroll stops
//       if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
//       scrollTimeout.current = setTimeout(() => {
//         controls.set({ rx: 70, ry: 70 })
//       }, 200)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [controls])

  // Circle positions (center + 6 around in hexagon)
  const circles = [
    { cx: 250, cy: 250 }, // center
    { cx: 250, cy: 150 }, // top
    { cx: 250, cy: 350 }, // bottom
    { cx: 150, cy: 200 }, // left-top
    { cx: 150, cy: 300 }, // left-bottom
    { cx: 350, cy: 200 }, // right-top
    { cx: 350, cy: 300 }, // right-bottom
  ]

  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto my-10 bg-[#dbea39]"
    >
      {circles.map((circle, i) => (
        <motion.ellipse
          key={i}
          cx={circle.cx}
          cy={circle.cy}
          rx="70"
          ry="70"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          animate={controls}
        />
      ))}
    </svg>
  )
}
