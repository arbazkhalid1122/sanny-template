"use client"

import { motion } from "framer-motion"

const challenges = [
  {
    title: "Unawareness",
    description: "You're a product builder. The importance of GTM, sales, and marketing might not be top of mind until it's a critical bottleneck, too late.",
  },
  {
    title: "Vulnerability and Fear",
    description: "It's hard to admit you don't have all the answers. Asking for help can feel like showing weakness, especially to investors and early hires.",
  },
  {
    title: "High Cost of Talent",
    description: "Hiring a full-time, experienced GTM leader or expert is often out of reach for a cash-strapped startup or one managing a runway month on month.",
  },
  {
    title: "Misalignment of Needs",
    description: "Your focus needs to be on building foundational systems, not managing a full-time team. What you need is an expert to set up the playbook, not to run the day-to-day plays from the very beginning.",
  }
]

export function ChallengeSection() {
  return (
    <div className="space-y-10 mt-16">
      <div className="text-3xl max-w-3xl">Many early-stage founders face a significant challenge in building their GTM capabilities:</div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
          <h3 className="text-xl sm:text-2xl ">{challenge.title}</h3>
          <p className="text-muted-foreground text-white opacity-80 text-sm sm:text-base leading-relaxed">{challenge.description}</p>
        </motion.div>
      ))}
    </div>
      </div>
  )
}
