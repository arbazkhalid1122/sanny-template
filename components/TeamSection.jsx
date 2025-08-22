"use client"

import { motion } from "framer-motion"

import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function TeamSection() {
  const teamMembers = [
    { name: "Rich Purnell", role: "AI Strategist", image: "https://framerusercontent.com/images/vsqaVVSOt24ZjOHD92GX1UlOk.jpg" },
  ]

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
        >
          Team
        </motion.h2>
        <p className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-14 max-w-lg">
Each member of our team has a strong tech knowledge, with our principal focus on the triumph of our customers' businesses
        </p>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className=" space-y-6 sm:space-y-8 md:space-y-10"
        >
          {teamMembers.map((member, index) => (
<motion.div
  key={index}
  variants={fadeInUp}
  whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
  className="group relative w-full bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row overflow-hidden"
>
  {/* Left Image Section */}
  <div className="relative sm:w-2/5 w-full h-56 sm:h-auto flex-shrink-0 overflow-hidden">
    <img
      src={member.image || "/placeholder.svg"}
      alt={member.name}
      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
  </div>

  {/* Right Text Section */}
  <div className="flex flex-col justify-center p-6 sm:w-3/5 w-full">
    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
      {member.name}
    </h3>
    <p className="text-gray-400 text-base mt-2">{member.role}</p>
    <p className="text-gray-300 text-sm mt-4 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      facilisis nulla at lacus ullamcorper, nec pretium orci laoreet.
    </p>
  </div>
</motion.div>

          ))}
        </motion.div>
      </div>
    </section>
  )
}
