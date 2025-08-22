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
        "https://framerusercontent.com/images/TaqY8Xv55oL11NawZDD2ZWT0PQ.jpg",
    },
    {
      name: "Bruce Ng",
      role: "Co-founder and CEO of SPICE AI",
      content:
        "We came to Fractional GTM agency with just an idea on a piece of paper. They helped us turn it into reality.",
      avatar:
        "https://framerusercontent.com/images/v4sk80ioxCwonE6GI6DEo9CMH4.jpg",
    },
    {
      name: "Sophie Tan",
      role: "Founder of BloomTech",
      content:
        "Their team gave us the tools and guidance to scale much faster. Couldn’t have done it without them!",
      avatar:
        "https://framerusercontent.com/images/rpQllM97VuwSi50MereUoX8ZA.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length)

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl leading-snug max-w-md">
            Real Stories from the Frontlines
          </h2>
          <p className="text-gray-400 mt-3 max-w-md ">
            Our services are loved by founders around the all world. We are
            proud to work with innovative startups and companies.
          </p>
        </div>

        <div className="flex gap-3 mt-4 sm:mt-0 justify-end mb-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonial Content */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 items-center"
        >
          {/* Left Image */}
          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden flex">
            <Image
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Card */}
          <div className="bg-neutral-900 p-6 sm:p-10 rounded-2xl flex flex-col justify-end h-72 sm:h-96">
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              {testimonials[current].content}
            </p>
            <div>
              <h4 className="font-semibold text-white">
                {testimonials[current].name}
              </h4>
              <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
