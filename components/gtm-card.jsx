"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function GTMCard({ title, subtitle, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full `}
    >
      <Card className="text-card-foreground rounded-3xl relative overflow-hidden border-none h-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex h-full flex-col ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 leading-tight max-w-full">
            Closing the GTM Gap for <span className="text-[#DBEA39]">Early-Stage Startups</span>
          </h2>
          <p className="opacity-80 text-white leading-relaxed text-sm sm:text-base">{subtitle}</p>
        </motion.div>
      </Card>
    </motion.div>
  )
}
