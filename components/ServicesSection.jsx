"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import { staggerContainer, scaleIn } from "@/lib/animations"

export default function ServicesSection() {
  const servicesRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 25])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -15])

  const services = [
    {
      number: "1",
      title: "Business process automation",
      description:
        "Let AI handle repetitive tasks and workflows. Improve efficiency, minimize errors, and free up time for strategic work, ultimately driving cost savings.",
    },
    {
      number: "2",
      title: "Integrate AI into your company's data",
      description:
        "Our AI automation services empower you to leverage data-driven automation, and use predictive analytics to support informed decision-making.",
    },
    {
      number: "3",
      title: "AI-powered apps development",
      description:
        "We develop apps that deliver personalized, real-time insights and transform user experiences, including AI chatbots, image recognition for augmented reality, and predictive analytics for top-tier recommendations.",
    },
  ]

  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden" ref={servicesRef}>
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-20 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl z-0 rotate-12 shadow-lg"
      >
        ✦
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-32 right-20 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl z-0 -rotate-12 shadow-lg"
      >
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute top-60 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center text-2xl z-0 rotate-45 shadow-lg"
      >
        <div className="w-8 h-8 border-2 border-white rounded-full"></div>
      </motion.div>

      <motion.div
        style={{ y: y4 }}
        className="absolute bottom-20 right-32 w-16 h-16 bg-gradient-to-br from-red-400 via-pink-400 to-blue-400 rounded-2xl flex items-center justify-center text-2xl z-0 -rotate-12 shadow-lg"
      >
        <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
      </motion.div>

      <motion.div
        style={{ y: y5 }}
        className="absolute top-80 left-10 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white z-0 rotate-12 shadow-lg"
      >
        ≡
      </motion.div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Services
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={scaleIn}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-gray-500 text-sm mt-1 bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center">
                    {service.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
