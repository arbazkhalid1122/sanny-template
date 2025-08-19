"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px", amount: 0.3 })

  // Parent controls staggered children
  const container = {
    hidden: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
    visible: { transition: { staggerChildren: 0.05 } },
  }

  // Each character animation
  const charVariant = {
    hidden: { color: "#6b7280" }, // gray
    visible: {
      color: "#ffffff", // white
      transition: { duration: 0.2, ease: "easeOut" },
    },
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // 👈 reset when out of view
      style={{ whiteSpace: "pre-wrap" }}
    >
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          variants={charVariant}
          style={{ display: "inline-block" }}
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function ValueProposition() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} // 👈 allow retrigger
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            <AnimatedText text="Enhance your workflows to maximize performance and take effective control of your time. Focus on what truly matters to your business, while routine tasks run on " />
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
