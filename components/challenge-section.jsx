"use client"

import { motion } from "framer-motion"

const challenges = [
  {
    title: "Unawareness",
    description: "GTM and consultants are crucial for product builders in most businesses.",
  },
  {
    title: "Vulnerability and Fear",
    description: "Everything you lack prevents and asking investors and early hires.",
  },
  {
    title: "High Cost of Talent",
    description: "Hiring an experienced GTM leader can be too costly for cash-strapped startups.",
  },
  {
    title: "Misalignment of Needs",
    description: "Most business systems, not manage a team. An expert sets up the playbook, not runs daily plays.",
  },
  {
    title: "AI-Accelerated Challenge",
    description: "AI advances GTM efficiency and competition, raising the bar for what is expected.",
  },
]

export function ChallengeSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
      {challenges.map((challenge, index) => (
        <motion.div
          key={challenge.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="space-y-2"
        >
          <h3 className="text-2xl sm:text-3xl md:text-3xl ">{challenge.title}</h3>
          <p className="text-muted-foreground text-gray-400 text-lg leading-relaxed">{challenge.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
