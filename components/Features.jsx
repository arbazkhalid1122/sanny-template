"use client"

import { motion } from "framer-motion"

import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Quick onboarding",
      description: "Get started in less than 24 hours",
    },
    {
      icon: "💰",
      title: "Less expensive than hiring",
      description: "Save up to 70% compared to full-time hires",
    },
    {
      icon: "🎯",
      title: "Bespoke to your business",
      description: "Tailored solutions for your specific needs",
    },
    {
      icon: "💎",
      title: "100% money-back guarantee",
      description: "Risk-free investment in your growth",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
