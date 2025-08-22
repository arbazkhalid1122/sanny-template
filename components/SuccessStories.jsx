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
    <section id="case-studies" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
        >
          Success Stories
        </motion.h2>
        <p className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-14 max-w-2xl">
          Some of our Best success stories. We invest a lot of resources and effort in our clients' projects because we want them to succeed.
        </p>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-2"
        >
          {stories.map((story, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-[#18191B] border-gray-800 overflow-hidden rounded-4xl flex h-full p-0 flex-col sm:flex-row">
                {/* Text */}
                <div className="w-full sm:w-1/2 flex flex-col justify-between p-4 sm:p-6">
                  <div className="p-2 sm:p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                      {story.description}
                    </p>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col items-start border-t border-gray-700">
                    <div className="text-xl sm:text-2xl font-semi-bold text-white mb-1">
                      {story.percentage}
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm">{story.metric}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full sm:w-1/2 h-48 sm:h-full">
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
        <div className="text-center mt-14 text-lg text-gray-300 flex gap-2 item-center justify-center">...and more than <div className="border-2 w-[fit-content] rounded-full pl-2 pr-3 text-gray-300 border-gray-300">100+</div>completed projects</div>
      </div>
    </section>
  )
}
