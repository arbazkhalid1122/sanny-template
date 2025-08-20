"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import { staggerContainer, scaleIn } from "@/lib/animations"

export default function ServicesSection() {
  const [direction, setDirection] = useState(0) // +1 = scroll down, -1 = scroll up

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDir = () => {
      const scrollY = window.scrollY
      if (Math.abs(scrollY - lastScrollY) > 2) {
        setDirection(scrollY > lastScrollY ? 1 : -1)
        lastScrollY = scrollY > 0 ? scrollY : 0
      }
    }

    window.addEventListener("scroll", updateScrollDir)
    return () => window.removeEventListener("scroll", updateScrollDir)
  }, [])

  // Example icons (replace with your own icons/images if needed)
  const icons = [
    { symbol: "✦", bg: "from-purple-500 to-pink-400" },
    { symbol: "≡", bg: "from-blue-500 to-cyan-400" },
    { symbol: "◉", bg: "from-green-500 to-lime-400" },
    { symbol: "◆", bg: "from-yellow-500 to-orange-400" },
    { symbol: "⬤", bg: "from-red-500 to-pink-400" },
    { symbol: "✿", bg: "from-teal-500 to-green-400" },
  ]

  // Pre-defined scattered positions (you can adjust)
  const positions = [
    { top: "10%", left: "45%" },
    { top: "5%", left: "70%" },
    { top: "0%", left: "35%" },
    { top: "20%", left: "20%" },
    { top: "15%", left: "55%" },
    { top: "35%", left: "40%" },
  ]


  const positions1 = [
    { bottom: "10%", left: "45%" },
    { bottom: "14%", left: "70%" },
    { bottom: "16%", left: "35%" },
    { bottom: "15%", left: "20%" },
    { bottom: "17%", left: "55%" },
    { bottom: "19%", left: "40%" },
  ]



  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden pb-32 sm:pb-40 md:pb-56">
      {/* Background floating icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            animate={{ y: direction === 1 ? -30 : 30 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className={`absolute w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${icon.bg} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}
            style={positions1[i % positions.length]}
          >
            {icon.symbol}
          </motion.div>
        ))}
      </div>

          <div className="absolute inset-0 pointer-events-none z-0">
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            animate={{ y: direction === 1 ? -30 : 30 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className={`absolute w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${icon.bg} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}
            style={positions[i % positions.length]}
          >
            {icon.symbol}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16"
        >
          Services
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12"
        >
          {["Business process automation", "Integrate AI into your company's data", "AI-powered apps development", "AI-powered apps development", "AI-powered apps development", "AI-powered apps development"].map((service, index) => (
            <motion.div key={index} variants={scaleIn}>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{service}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
