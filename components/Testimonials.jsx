"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Melissa Lewis",
      role: "CEO, TechCorp",
      content: "Sanny transformed our business processes with AI automation. We've seen 40% increase in efficiency.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Jake Jake",
      role: "Founder, StartupX",
      content: "The AI integration was seamless. Our team productivity increased dramatically within weeks.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Bruce Ng",
      role: "CTO, InnovateLab",
      content: "Outstanding AI solutions that actually deliver results. Highly recommend Sanny's services.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Vincent Kapoor",
      role: "Director, GrowthCo",
      content: "The ROI from Sanny's AI implementation exceeded our expectations. Game-changing technology.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Bruce Ng",
      role: "Co-founder and CEO of SPICE AI",
      content:
        "We came to Sanny AI agency with just an idea on a piece of paper. But now we have an incredible product that has exceeded all possible expectations. And the 50 billion investment round is only proof of this.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-400 mb-12">
            Our services are loved by founders around the all world. We are proud to work with emerging talents,
            innovative startups and companies.
          </p>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonials[currentTestimonial].avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {testimonials[currentTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentTestimonial ? "bg-white" : "bg-gray-600"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
