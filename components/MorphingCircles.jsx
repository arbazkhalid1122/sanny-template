"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export function MorphingCircles() {
  const controls = useAnimation()
  const scrollTimeout = useRef(null)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // animate circles into a blob
  //     controls.start({
  //       rx: [100, 140], // animate radius x (for ellipse-like effect)
  //       ry: [100, 80],  // animate radius y
  //       transition: { duration: 1.2, ease: "easeInOut" },
  //     })

  //     // reset after scroll stops
  //     if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
  //     scrollTimeout.current = setTimeout(() => {
  //       controls.set({ rx: 100, ry: 100 })
  //     }, 200)
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [controls])

  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto my-10"
    >
      {/* left circle */}
      <motion.ellipse
        cx="200"
        cy="200"
        rx="100"
        ry="100"
        fill="none"
        stroke="black"
        strokeWidth="2"
        animate={controls}
      />
      {/* right circle */}
      <motion.ellipse
        cx="300"
        cy="200"
        rx="100"
        ry="100"
        fill="none"
        stroke="black"
        strokeWidth="2"
        animate={controls}
      />
      {/* bottom circle */}
      <motion.ellipse
        cx="250"
        cy="300"
        rx="100"
        ry="100"
        fill="none"
        stroke="black"
        strokeWidth="2"
        animate={controls}
      />
    </svg>
  )
}
