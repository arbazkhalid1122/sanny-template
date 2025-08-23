"use client"

import { GTMCard } from "@/components/gtm-card"
// import { StarburstGraphic } from "@/components/starburst-graphic"
import { ChallengeSection } from "@/components/challenge-section"
import { motion } from "framer-motion"
import { Starburst } from "./StartBust"

export default function Problems() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-50">
          <GTMCard
            title="Closing the GTM Gap for Early-Stage Startups"
            subtitle="Building a great product is only half the battle. The other half is getting it to those who need it."
            className="lg:max-w-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center w-full lg:max-w-md"
          >
            <div className=" backdrop-blur-sm rounded-3xl p-16 w-full"
            style={{
            background: 'linear-gradient(180deg,#0f1112 50.999999046325684%,#acb3b6)',
            }}>
              <Starburst className="mx-auto my-10" />
            </div>
          </motion.div>
        </div>

        {/* Challenges Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <ChallengeSection />
        </motion.div>
      </div>
    </div>
  )
}
