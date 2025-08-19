"use client"

import { motion } from "framer-motion"

import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function TeamSection() {
  const teamMembers = [
    { name: "Rich Purnell", role: "AI Strategist", image: "/placeholder.svg?height=200&width=200" },
    { name: "Beth Johanssen", role: "Lead Developer", image: "/placeholder.svg?height=200&width=200" },
    { name: "Chris Beck", role: "Data Scientist", image: "/placeholder.svg?height=200&width=200" },
    { name: "Mindy Park", role: "UX Designer", image: "/placeholder.svg?height=200&width=200" },
    { name: "Mitch Henderson", role: "Project Manager", image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <section id="team" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Our Team
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-white hover:text-yellow-400 transition-colors">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
