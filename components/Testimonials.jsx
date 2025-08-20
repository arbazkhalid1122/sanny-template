"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Vincent Kapoor",
      role: "Founder of La Boulangerie",
      content:
        "According to our observations, the bakery started saving about 33 working days per quarter.",
      reply: "Good to hear. Great result.",
      replyName: "Sanny AI",
      avatar: "https://framerusercontent.com/images/TaqY8Xv55oL11NawZDD2ZWT0PQ.jpg",
      backgroundImage: "https://framerusercontent.com/images/SCTm5DcMFWv510sxMAG4sbisRAY.jpg?scale-down-to=1024",
    },
    {
      name: "Bruce Ng",
      role: "Co-founder and CEO of SPICE AI",
      replyName: "Sanny AI",
      content:
        "We came to Sanny AI agency with just an idea on a piece of paper.",
      reply: "Amazing progress! Keep it up.",
      avatar: "https://framerusercontent.com/images/v4sk80ioxCwonE6GI6DEo9CMH4.jpg",
      backgroundImage: "https://framerusercontent.com/images/zx8SH6CouNCKAphe45IT6cPgc.jpg?scale-down-to=1024",
    },
    {
      name: "Bruce Ng",
      role: "Co-founder and CEO of SPICE AI",
      replyName: "Sanny AI",
      content:
        "We came to Sanny AI agency with just an idea on a piece of paper.",
      reply: "Amazing progress! Keep it up.",
      avatar: "https://framerusercontent.com/images/rpQllM97VuwSi50MereUoX8ZA.jpg",
      backgroundImage: "https://framerusercontent.com/images/RvmvxP2U7fqKYhLfiqIwUfUH5c.jpg?scale-down-to=1024",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-400 text-lg mb-14 max-w-lg">
Our services are loved by founders around the all world. We are proud to work with emerging talents, innovative startups and companies.          </p>
          <div
            className="relative rounded-2xl min-w-3xl flex items-end"
            style={{
              backgroundImage: `url(${testimonials[currentTestimonial].backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "500px", // Increased height (was likely less before)
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-black/40" />

            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full flex flex-col justify-between p-6 md:p-10"
            >
              {/* Chat bubbles */}
              <div className="space-y-4 w-full">
                {/* Left-aligned testimonial */}
                <div className="flex justify-end">
                  <div className="bg-gray-900/80 text-white rounded-xl p-4 text-base md:text-lg leading-relaxed w-[300px]">
                    <span className="block text-sm mb-1 text-white/80">{testimonials[currentTestimonial].name}</span>
                    {testimonials[currentTestimonial].content}
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-white/50 text-white rounded-xl p-4 text-base md:text-lg leading-relaxed w-[300px]">
                    <span className="block text-sm mb-1 text-white/80">{testimonials[currentTestimonial].replyName}</span>
                    {testimonials[currentTestimonial].reply}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12 border-2 border-white">
                  <AvatarImage src={testimonials[currentTestimonial].avatar} />
                  <AvatarFallback>
                    {testimonials[currentTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-300 text-sm">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentTestimonial ? "bg-white" : "bg-gray-500"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
