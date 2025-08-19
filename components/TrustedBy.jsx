"use client"

import { motion } from "framer-motion"

export default function TrustedBy() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-2 text-sm">Trusted by high-performing companies</p>
          <div className="flex flex-wrap items-center justify-start gap-4 opacity-60">
            <span className="text-2xl font-bold">Tarscase</span>
            <span className="text-2xl font-bold italic">Mine Work</span>
            <span className="text-2xl font-bold">OPJE</span>
            <span className="text-2xl font-bold">OLD YO</span>
            <span className="text-2xl font-bold">★Hamilton</span>
            <span className="text-2xl font-bold italic">then</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
