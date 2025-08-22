"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { staggerContainer, scaleIn } from "@/lib/animations"

export default function PricingSection() {
  const starterFeatures = [
    "Up to 2 projects at a time",
    "2-3 leading experts",
    "All services with limited code development",
    "Up to 45 min./week for calls",
    "Support on a first-come, first-served basis",
    "Monthly analytics report",
    "Slack + Asana ticketing system",
    "Pause or cancel anytime",
  ]

  const masterFeatures = [
    "Up to 6 projects at a time",
    "Entire team",
    "All services without limits",
    "Up to 120 min./week for calls",
    "Priority support in any way handy for you",
    "Weekly analytics report",
    "Slack + Asana ticketing system",
    "Pause or cancel anytime",
  ]

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
        >
          Pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-14 max-w-lg"
        >
          One monthly fee, no surprises. Simple pricing with no hidden costs, just ongoing AI automation support when
          you need it.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-1 w-full max-w-none"
        >
          <motion.div variants={scaleIn}>
            <Card className="bg-[#18191B] border-gray-800 h-full w-full rounded-4xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-medium mb-2 text-gray-300">Starter</h3>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 text-white">3,899 USD</div>
                <div className="text-gray-300 text-sm mb-6 sm:mb-8 mt-2">per month</div>

                <Button className="w-full sm:w-[fit-content] bg-white text-black mb-6 sm:mb-8 rounded-lg text-sm sm:text-md font-bold p-6 sm:p-8 mt-4 sm:mt-6">
                  Get started
                </Button>

                <ul className="space-y-3 border-t pt-6 border-gray-700">
                  {starterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 border border-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={scaleIn}>
            <Card className="bg-white border-gray-800 h-full w-full rounded-4xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-medium mb-2 text-[#050607]">Master</h3>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 text-black">3,899 USD</div>
                <div className="text-[#050607] text-sm mb-6 sm:mb-8 mt-2">per month</div>

                <Button className="w-full sm:w-[fit-content] bg-[#dbea39] text-black mb-6 sm:mb-8 rounded-lg text-sm sm:text-md font-bold p-6 sm:p-8 mt-4 sm:mt-6">
                  Get started
                </Button>

                <ul className="space-y-3 border-t pt-6 border-gray-700">
                  {masterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 border border-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#050607] text-sm sm:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-6 md:mt-2 w-full"
        >
          <Card className="bg-[#18191B] border-gray-800 w-full rounded-4xl p-0">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">Custom offer</h3>
              <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
                Want fixed pricing? Tell us more about your project
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8 sm:mt-12">
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-700 rounded-lg p-6 sm:p-7 text-base sm:text-lg font-semibold">
                  Book call
                </Button>
                <p className="text-gray-300 text-sm sm:text-lg">
                  or mail us at <span className="text-gray-300 underline">hey@fractionalgtm</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>


      </div>
    </section>
  )
}
