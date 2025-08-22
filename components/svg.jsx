"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

// 🔵 Component 1: MorphingSquares
export function MorphingSquares() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rx: [0, 20, 0], // corner rounding animation
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
    })
  }, [controls])

  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto my-10"
    >
      <motion.rect
        x="150"
        y="150"
        width="200"
        height="200"
        stroke="white"
        strokeWidth="2"
        fill="none"
        animate={controls}
      />
    </svg>
  )
}

// 🔺 Component 2: MorphingTriangles
export function MorphingTriangles() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      points: [
        "250,100 150,350 350,350", // upright triangle
        "200,150 300,150 250,350", // narrower
        "250,100 150,350 350,350", // back
      ],
      transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
    })
  }, [controls])

  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto my-10"
    >
      <motion.polygon
        stroke="white"
        strokeWidth="2"
        fill="none"
        animate={controls}
        initial={{ points: "250,100 150,350 350,350" }}
      />
    </svg>
  )
}
