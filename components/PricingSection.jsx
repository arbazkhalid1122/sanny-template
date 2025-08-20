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
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-16"
        >
          One monthly fee, no surprises. Simple pricing with no hidden costs, just ongoing AI automation support when
          you need it.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-1 max-w-4xl"
        >
          <motion.div variants={scaleIn}>
            <Card className="bg-[#18191B] border-gray-800 h-full">
              <CardContent className="p-8">
                <h3 className="text-lg font-medium mb-2 text-gray-300">Starter</h3>
                <div className="text-4xl font-bold mb-1 text-white">$3,899 USD</div>
                <div className="text-gray-300 text-sm mb-8">per month</div>

                <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 mb-8 rounded-lg">
                  Get started
                </Button>

                <ul className="space-y-3">
                  {starterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={scaleIn}>
            <Card className="bg-white text-black h-full">
              <CardContent className="p-8">
                <h3 className="text-lg font-medium mb-2 text-gray-600">Master</h3>
                <div className="text-4xl font-bold mb-1">$13,899 USD</div>
                <div className="text-gray-600 text-sm mb-8">per month</div>

                <Button className="w-full bg-lime-400 text-black hover:bg-lime-500 mb-8 rounded-lg">
                  Get started
                </Button>

                <ul className="space-y-3">
                  {masterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
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
  className="mt-2 w-full"
>
  <Card className="bg-[#18191B] border-gray-800 w-full">
    <CardContent className="p-8">
      <h3 className="text-lg font-bold mb-2 text-white">Custom offer</h3>
      <p className="text-gray-400 text-sm mb-6">
        Want fixed pricing? Tell us more about your project
      </p>

      <div className="flex gap-4 items-center">
        <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-700 rounded-lg">
          Book call
        </Button>
        <p className="text-gray-400 text-xs">
          or mail us at <span className="text-white">hey@sanny.ai</span>
        </p>
      </div>
    </CardContent>
  </Card>
</motion.div>


      </div>
    </section>
  )
}
