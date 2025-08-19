"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronUp } from "lucide-react"

import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function HeroSection() {
  return (
    <section className="pt-6 pb-20 px-6 relative">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-6xl rounded-4xl px-18 py-30 mx-auto relative bg-gradient-to-b from-[#0f1112] to-gray-500">
        <div className="max-w-[800px] text-start mx-auto ">

          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold leading-tight max-w-4xl relative">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
                AI Services
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                for your Business
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                Growth
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent blur-3xl -z-10" />
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-gray-300 max-w-2xl">
              We'll pump your company with AI. As a leading AI automation agency with 39 years of experience, we deliver
              top results.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start gap-8">
              <Button className="bg-lime-400 text-black hover:bg-lime-500 px-8 py-3 text-base font-medium rounded-lg">
                Subscribe now
              </Button>

              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-base rounded-lg bg-transparent"
              >
                Our services
              </Button>

              <div className="flex items-center space-x-4">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Loved by founders</span>
                  <span className="text-gray-400 text-sm">worldwide</span>
                </div>
                <div className="flex -space-x-2">
                  <Avatar className="w-8 h-8 border-2 border-black">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>F1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-black">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>F2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-black">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>F3</AvatarFallback>
                  </Avatar>
                </div>
                <ChevronUp className="w-4 h-4 text-gray-400 rotate-180" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
