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
      image: "https://framerusercontent.com/images/vnEwHUSslHjw9LOn8YmN51w5nE.jpg",
      alt: "Child running on playground",
    },
    {
      title: "SPICE® AI",
      description: "Development of AI generation functions for startup",
      percentage: "~27%",
      metric: "Time and resource savings",
      image: "https://framerusercontent.com/images/KQ0CP32P3qjNcnmAhAATJxIcg.jpg",
      alt: "Abstract colorful digital pattern",
    },
    {
      title: "SPICE® AI",
      description: "Development of AI generation functions for startup",
      percentage: "~27%",
      metric: "Time and resource savings",
      image: "https://framerusercontent.com/images/6DxnZY3TanozVjx4Ju047kEwv9I.jpg",
      alt: "Abstract colorful digital pattern",
    },
    {
      title: "SPICE® AI",
      description: "Development of AI generation functions for startup",
      percentage: "~27%",
      metric: "Time and resource savings",
      image: "https://framerusercontent.com/images/kMbCNCuVSOugGRMN8IWEJ1cd8WI.jpg",
      alt: "Abstract colorful digital pattern",
    },
  ]

  return (
    <section id="case-studies" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Success Stories
        </motion.h2>
        <p className="text-gray-400 text-lg mb-14 max-w-lg">
Some of our Best success stories. We invest a lot of resources and effort in our clients' projects because we want them to succeed.
        </p>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-2"
        >
          {stories.map((story, index) => (
            <motion.div key={index} variants={fadeInUp}>
             <Card className="bg-[#18191B] border-gray-800 overflow-hidden rounded-4xl flex h-full p-0 flex-row">
  {/* Text */}
  <div className="w-1/2 flex flex-col justify-between p-6">
    <div className="p-4">
      <h3 className="text-lg font-semibold text-white mb-2">
        {story.title}
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        {story.description}
      </p>
    </div>
    <div className="p-6 flex flex-col items-start border-t border-gray-700">
      <div className="text-2xl font-semi-bold text-white mb-1">
        {story.percentage}
      </div>
      <p className="text-gray-400 text-sm">{story.metric}</p>
    </div>
  </div>

  {/* Image */}
  <div className="w-1/2 h-full">
    <img
      src={story.image}
      alt={story.alt}
      className="w-full h-full object-cover"
    />
  </div>
</Card>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
