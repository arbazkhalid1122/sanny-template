"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: "Vincent Kapoor",
      role: "CEO Bluespace insurance",
      content:
        "The Fractional team has changed our internal productivity for the better. We use automation for everything from childcare to ordering food for lunches.",
      avatar:
        "https://images.pexels.com/photos/30004325/pexels-photo-30004325.jpeg",
    },
    {
      name: "Bruce Ng",
      role: "Co-founder and CEO of SPICE AI",
      content:
        "We came to Fractional GTM agency with just an idea on a piece of paper. They helped us turn it into reality.",
      avatar:
        "https://images.pexels.com/photos/11351731/pexels-photo-11351731.jpeg",
    },
    {
      name: "Sophie Tan",
      role: "Founder of BloomTech",
      content:
        "Their team gave us the tools and guidance to scale much faster. Couldn’t have done it without them!",
      avatar:
        "https://images.pexels.com/photos/2451600/pexels-photo-2451600.jpeg",
    },
  ]


  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length)

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-3xl leading-tight max-w-md lg:max-w-lg ">
            Real Stories from the Frontlines
          </h2>
          <p className="text-white opacity-80 text-sm sm:text-base max-w-md lg:max-w-lg leading-relaxed">
            Our services are loved by founders around the all world. We are
            proud to work with innovative startups and companies.
          </p>
        </div>

        <div className="flex gap-3 justify-end mb-6 sm:mb-8">
          <button
            onClick={handlePrev}
            className="p-2 sm:p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 sm:p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Testimonial Content */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center"
        >
          {/* Left Image */}
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden flex order-2 lg:order-1">
            <Image
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Card */}
          <div className="bg-neutral-900 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl flex flex-col justify-end h-64 sm:h-72 md:h-80 lg:h-96 order-1 lg:order-2">
            <p className="text-white opacity-80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              {testimonials[current].content}
            </p>
            <div>
              <h4 className="font-semibold text-white text-base sm:text-lg">
                {testimonials[current].name}
              </h4>
              <p className="text-white opacity-80 text-sm sm:text-base">{testimonials[current].role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
