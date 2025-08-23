"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export function BuildFoundationsShape() {
  return (
    <svg
      width="350"
      height="200"
      viewBox="0 0 450 300"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto my-10"
    >
      {/* Base layer */}
      <motion.rect
        x="60"
        y="200"
        width="300"
        height="50"
        rx="8"
        ry="8"
        stroke="white"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Middle layer */}
      <motion.rect
        x="100"
        y="140"
        width="250"
        height="50"
        rx="8"
        ry="8"
        stroke="white"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Top layer */}
      <motion.rect
        x="140"
        y="80"
        width="170"
        height="50"
        rx="8"
        ry="8"
        stroke="white"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      {/* Small horizontal "system lines" inside layers */}
      <motion.line
        x1="75"
        y1="220"
        x2="200"
        y2="220"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <motion.line
        x1="120"
        y1="160"
        x2="230"
        y2="160"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      <motion.line
        x1="160"
        y1="100"
        x2="230"
        y2="100"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      />
    </svg>
  )
}


export function TransferKnowledgeShape() {
  return (
    <svg
      width="450"
      height="250"
      viewBox="0 0 450 250"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto my-10"
    >
      {/* Left box (source of knowledge) */}
      <motion.rect
        x="40"
        y="80"
        width="120"
        height="90"
        rx="12"
        ry="12"
        stroke="white"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Right box (receiver of knowledge) */}
      <motion.rect
        x="290"
        y="80"
        width="120"
        height="90"
        rx="12"
        ry="12"
        stroke="white"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Arrow from left to right */}
      <motion.path
        d="M160 125 H280"
        stroke="white"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.polygon
        points="280,125 270,118 270,132"
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />

      {/* Small dashed lines for "flow of knowledge" */}
      <motion.line
        x1="180"
        y1="115"
        x2="200"
        y2="115"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        animate={{ x1: [180, 190, 180] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.line
        x1="220"
        y1="135"
        x2="240"
        y2="135"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        animate={{ x2: [240, 250, 240] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
      />
    </svg>
  )
}


export function EmbedShape() {
  return (
    <svg
      width="400"
      height="250"
      viewBox="0 0 400 250"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto my-10"
    >
      {/* Outer embed box */}
      <motion.rect
        x="20"
        y="20"
        width="360"
        height="210"
        rx="12"
        ry="12"
        stroke="black"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Left embed bracket < */}
      <motion.path
        d="M 100 90 L 70 125 L 100 160"
        stroke="black"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      {/* Right embed bracket > */}
      <motion.path
        d="M 300 90 L 330 125 L 300 160"
        stroke="black"
        strokeWidth="2"
        fill="none"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      {/* Middle line (like embed code) */}
      <motion.line
        x1="150"
        y1="125"
        x2="250"
        y2="125"
        stroke="black"
        strokeWidth="2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{ transformOrigin: "left center" }}
      />
    </svg>
  )
}



// 🔲 MorphingSquares
export function MorphingSquares() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rx: [0, 40, 0], // rounded corners animation
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
    })
  }, [controls])

  return (
    <svg
      width="250"
      height="250"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <motion.rect
        x="150"
        y="150"
        width="250"
        height="250"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={controls}
      />
    </svg>
  )
}

// 🔺 MorphingTriangles
export function MorphingTriangles() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      points: [
        "250,100 150,350 350,350", // upright triangle
        "200,150 300,150 250,350", // narrow triangle
        "250,100 150,350 350,350", // back
      ],
      transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
    })
  }, [controls])

  return (
    <svg
      width="250"
      height="250"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <motion.polygon
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={controls}
        initial={{ points: "250,100 150,350 350,350" }}
      />
    </svg>
  )
}

// ⚪ MorphingCircles
export function MorphingCircles() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      r: [80, 120, 80], // radius pulse
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    })
  }, [controls])

  return (
    <svg
      width="250"
      height="250"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <motion.circle
        cx="250"
        cy="250"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={controls}
        initial={{ r: 80 }}
      />
    </svg>
  )
}
