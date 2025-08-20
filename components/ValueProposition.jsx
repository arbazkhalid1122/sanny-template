"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null)

  // track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  })

  return (
    <span ref={ref} className={className} style={{ whiteSpace: "pre-wrap", display: "inline-block" }}>
      {text.split("").map((c, i) => {
        // For each character, create a slightly shifted input range
        const start = i / text.length
        const end = (i + 1) / text.length

        // map scroll progress → color
        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#6b7280", "#ffffff"] // gray → white
        )

        return (
          <motion.span
            key={i}
            style={{
              display: "inline-block",
              color,
            }}
          >
            {c === " " ? "\u00A0" : c}
          </motion.span>
        )
      })}
    </span>
  )
}

export default function ValueProposition() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 max-w-3xl">
            <AnimatedText text="Enhance your workflows to maximize performance and take effective control of your time. Focus on what truly matters to your business, while routine tasks run on autopilot with the help of our no-code and code-based solutions." />
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
