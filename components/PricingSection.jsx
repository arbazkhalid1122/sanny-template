"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { staggerContainer, scaleIn } from "@/lib/animations"

function QuickOnboardingIcon({ size = 40 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="9" cy="12" r="4" />
      <circle cx="15" cy="12" r="4" />
    </svg>
  )
}

function UpdatesWeeklyIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M6 16L6 8M6 8L4 10M6 8L8 10" />
      <path d="M12 16L12 4M12 4L10 6M12 4L14 6" />
      <path d="M18 16L18 8M18 8L16 10M18 8L20 10" />
    </svg>
  )
}

function GuaranteeIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="5" y1="19" x2="19" y2="5" />
    </svg>
  )
}


export default function PricingSection() {


  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-3xl mb-4 sm:mb-2"
        >
          Engagement Models
        </motion.h2>

        <p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white opacity-80 text-sm sm:text-base mb-8 sm:mb-10 md:mb-14 max-w-2xl leading-relaxed"
        >
          We offer flexible engagement models designed to meet your specific needs. Even if you already have a growth and marketing team, our services can provide high-impact value by:
        </p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-none "
        >
          <motion.div variants={scaleIn}>
            <Card className="bg-[#18191B] border-0 h-full w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl min-h-[400px] sm:min-h-[450px]">
              <CardContent className="p-4 sm:p-6 md:p-7 flex flex-col justify-between h-full">
                <div className="flex ">
                  <QuickOnboardingIcon size={30} />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Foundational Sprint</div>
                </div>

                <p className="text-sm sm:text-base text-white opacity-80 leading-relaxed">A 2-4 month intensive engagement focused on building and implementing a core GTM playbook. This is ideal for pre-seed and seed-stage startups.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={scaleIn}>
            <Card className="bg-white border-0 h-full w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl min-h-[400px] sm:min-h-[450px]">
              <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                <div className="flex text-black gap-2">
                  <UpdatesWeeklyIcon size={30} />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">Strategic Advisory</div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed"> An ongoing, retainer-based model where we act as a strategic sounding board and provide on-demand support for your growth and marketing team.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={scaleIn} className="md:col-span-2 lg:col-span-1">
            <Card className="bg-[#18191B] border-0 h-full w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl min-h-[400px] sm:min-h-[450px]">
              <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                <div className="flex gap-2">
                  <GuaranteeIcon size={30} />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">Project-Based</div>
                </div>
                <p className="text-sm sm:text-base text-white opacity-80 leading-relaxed"> For specific, high-priority initiatives, such as a new product launch, a new market entry, or a full GTM audit.</p>
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
          <Card className="bg-[#18191B] border-0 w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl p-0">
            <CardContent className="p-8 lg:p-12">
              {/* <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Custom offer</h3> */}
              <p className="text-white opacity-80 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Our goal is not to replace your existing team, but to empower them. We work alongside your professionals to fill knowledge gaps, accelerate learning, and provide an unbiased outside perspective.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 rounded-lg p-4 sm:p-6 text-sm sm:text-base md:text-lg font-semibold">
                  Book call
                </Button>
                <p className="text-white opacity-80 text-sm sm:text-base">
                  or mail us at <span className="text-white opacity-80 underline">hey@fractionalgtm</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
