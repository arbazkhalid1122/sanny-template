"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export function Starburst() {
  const controls = useAnimation()
  const scrollTimeout = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      // restart rotation every time user scrolls
      controls.start({
        rotate: [0, 360],
        transition: { ease: "linear", duration: 0.6 }, // adjust speed
      })

      // stop when scroll ends (reset to 0 so next scroll can restart)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      scrollTimeout.current = setTimeout(() => {
        controls.set({ rotate: 0 }) // reset angle for next scroll
      }, 150) // stop after 150ms of no scrolling
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [controls])

  return (
    <motion.svg
      width="250"
      height="250"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      animate={controls}
      style={{ originX: "50%", originY: "50%" }}
      className="mx-auto my-10"
    >
      <g stroke="white" strokeWidth="2">
        <line x1="200" y1="200" x2="200" y2="50" />
        <line x1="200" y1="200" x2="273" y2="73" />
        <line x1="200" y1="200" x2="327" y2="127" />
        <line x1="200" y1="200" x2="350" y2="200" />
        <line x1="200" y1="200" x2="327" y2="273" />
        <line x1="200" y1="200" x2="273" y2="327" />
        <line x1="200" y1="200" x2="200" y2="350" />
        <line x1="200" y1="200" x2="127" y2="327" />
        <line x1="200" y1="200" x2="73" y2="273" />
        <line x1="200" y1="200" x2="50" y2="200" />
        <line x1="200" y1="200" x2="73" y2="127" />
        <line x1="200" y1="200" x2="127" y2="73" />
      </g>
    </motion.svg>
  )
}
