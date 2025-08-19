"use client"

import { motion } from "framer-motion"

import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function TeamSection() {
  const teamMembers = [
    { name: "Rich Purnell", role: "AI Strategist", image: "https://framerusercontent.com/images/vsqaVVSOt24ZjOHD92GX1UlOk.jpg" },
    { name: "Beth Johanssen", role: "Lead Developer", image: "https://framerusercontent.com/images/Cj52wiyjVMP2WjhpeFuPbvAlA.jpg" },
    { name: "Chris Beck", role: "Data Scientist", image: "https://framerusercontent.com/images/Uf0aLKyvoAM6NzaszJ4FdqH0.jpg" },
    { name: "Mindy Park", role: "UX Designer", image: "https://framerusercontent.com/images/wP8LhRlUFlIdZq32oaXMYvymZA.jpg" },
    { name: "Mitch Henderson", role: "Project Manager", image: "https://framerusercontent.com/images/yQASPf1jpSHPX5roGXM8eOLdE.jpg" },
  ]

  return (
    <section id="team" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
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
          className="flex flex-wrap gap-1 justify-start space-y-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="text-center min-w-[200px] max-w-[250px]"
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
