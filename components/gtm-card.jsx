"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function GTMCard({ title, subtitle, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={'w-full ' + className}
    >
      <Card className="bg-[#DBEA39] text-card-foreground p-8 rounded-3xl relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <h2 className="text-2xl font-semibold text-black mb-4 leading-tight">{title}</h2>
          <p className="text-sm opacity-80 text-black mt-50 leading-relaxed">{subtitle}</p>
        </motion.div>

        {/* Connecting line */}
        <motion.div
          className="absolute -bottom-4 left-8 w-px h-8 bg-card-foreground/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />
        <motion.div
          className="absolute -bottom-4 left-8 w-16 h-px bg-card-foreground/20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
        />
      </Card>
    </motion.div>
  )
}
