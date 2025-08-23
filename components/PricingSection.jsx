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
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6"
        >
          Engagement Models
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-14 max-w-2xl leading-relaxed"
        >
          We offer flexible engagement models designed to meet your specific needs. Even if you already have a growth and marketing team, our services can provide high-impact value by:
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-none"
        >
          <motion.div variants={scaleIn}>
            <Card className="bg-[#18191B] border-0 h-full w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl min-h-[400px] sm:min-h-[450px]">
              <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Foundational Sprint</div>
              
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">A 2-4 month intensive engagement focused on building and implementing a core GTM playbook. This is ideal for pre-seed and seed-stage startups.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={scaleIn}>
            <Card className="bg-white border-0 h-full w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl min-h-[400px] sm:min-h-[450px]">
              <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4 sm:mb-6">Strategic Advisory</div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed"> An ongoing, retainer-based model where we act as a strategic sounding board and provide on-demand support for your growth and marketing team.</p>
              </CardContent>
            </Card>
          </motion.div>

            <motion.div variants={scaleIn} className="md:col-span-2 lg:col-span-1">
            <Card className="bg-[#18191B] border-0 h-full w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl min-h-[400px] sm:min-h-[450px]">
              <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Project-Based</div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed"> For specific, high-priority initiatives, such as a new product launch, a new market entry, or a full GTM audit.</p>
              </CardContent>
            </Card>
          </motion.div>


          

        </motion.div>
   <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 md:mt-10 w-full"
        >
          <Card className="bg-[#18191B] border-gray-800 w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl p-0">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Custom offer</h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                Our goal is not to replace your existing team, but to empower them. We work alongside your professionals to fill knowledge gaps, accelerate learning, and provide an unbiased outside perspective.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-700 rounded-lg p-4 sm:p-6 text-sm sm:text-base md:text-lg font-semibold">
                  Book call
                </Button>
                {/* <p className="text-gray-300 text-sm sm:text-lg">
                  or mail us at <span className="text-gray-300 underline">hey@fractionalgtm</span>
                </p> */}
              </div>
            </CardContent>
          </Card>
        </motion.div>



      </div>
    </section>
  )
}
