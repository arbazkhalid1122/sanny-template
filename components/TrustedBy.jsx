"use client"

import { motion } from "framer-motion"
import { MdStarPurple500 } from "react-icons/md";

export default function TrustedBy() {
  return (
    <section className="py-8 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6 text-sm">Trusted by high-performing companies</p>
          <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Tarscase</span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold italic opacity-80">Mine Work</span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold">OPJE</span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold opacity-80">OLD YO</span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold flex items-center">
              <MdStarPurple500 className="inline-block" />
              Hamilton</span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold italic font-playwrite">then</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
