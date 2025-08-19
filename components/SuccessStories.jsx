"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function SuccessStories() {
  const stories = [
    {
      title: "Kinder Bench",
      description: "AI automation of childcare for a kindergarten",
      percentage: "~48%",
      metric: "Time and resource savings",
      image: "https://images.pexels.com/photos/2033933/pexels-photo-2033933.jpeg",
      alt: "Child running on playground",
    },
    {
      title: "SPICE® AI",
      description: "Development of AI generation functions for startup",
      percentage: "~27%",
      metric: "Time and resource savings",
      image: "https://images.pexels.com/photos/2983226/pexels-photo-2983226.jpeg",
      alt: "Abstract colorful digital pattern",
    },
        {
      title: "SPICE® AI",
      description: "Development of AI generation functions for startup",
      percentage: "~27%",
      metric: "Time and resource savings",
      image: "https://images.pexels.com/photos/2983226/pexels-photo-2983226.jpeg",
      alt: "Abstract colorful digital pattern",
    },
        {
      title: "SPICE® AI",
      description: "Development of AI generation functions for startup",
      percentage: "~27%",
      metric: "Time and resource savings",
      image: "https://images.pexels.com/photos/2983226/pexels-photo-2983226.jpeg",
      alt: "Abstract colorful digital pattern",
    },
  ]

  return (
    <section id="case-studies" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Success Stories
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-1"
        >
          {stories.map((story, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-gray-900 border-gray-800 overflow-hidden h-80 p-0 rounded-4xl">
                <div className="flex h-full p-0">
                  {/* Left half - Text content */}
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{story.title}</h3>
                      <p className="text-gray-400 text-sm mb-6">{story.description}</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">{story.percentage}</div>
                      <p className="text-gray-400 text-sm">{story.metric}</p>
                    </div>
                  </div>
                  {/* Right half - Image */}
                  <div className="flex-1 p-0 h-full">
                    <img
                      src={story.image}
                      alt={story.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          
        </motion.div>
      </div>
    </section>
  )
}
