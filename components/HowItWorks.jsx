"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { staggerContainer, scaleIn } from "@/lib/animations"
import { Starburst } from "./StartBust"
import { MorphingTriangles } from "./MorphingIcons"
import { EmbedShape } from "./MorphingIcons"
import { TransferKnowledgeShape } from "./MorphingIcons"
import { BuildFoundationsShape } from "./MorphingIcons"
import { Check } from "lucide-react"
import { FaCheckCircle } from "react-icons/fa"
import { MdOutlineCheckCircle } from "react-icons/md"

export default function HowItWorks() {
  const steps = [
    {
      title: "Embed",
      description:
        "Our small team of experienced GTM experts will embed with you for a defined period (2-4 months).",
      bg: "bg-white text-black",
      icon: <EmbedShape />,
    },
    {
      title: "Build Foundations",
      description:
        " We will work closely with you to build and implement core GTM systems, including:",
      features: [
        "Positioning & Storytelling",
        "Acquisition and Retention Pipelines",
        "GTM Strategy and Execution"
      ],
      bg: "bg-[#18191B] text-white",
      icon: <BuildFoundationsShape />,
    },
    {
      title: "Transfer Knowledge",
      description:
        "Our goal is not to be a permanent fixture. We will work to train you and your team, transferring our knowledge and a repeatable playbook to you.",
      bg: "bg-[#18191B] text-white",
      icon: <TransferKnowledgeShape />,
    },
    {
      title: "Transition & Support",
      description:
        "After the initial engagement, we will quietly remove ourselves, providing ongoing support on an as-needed basis to ensure a smooth transition.",
      bg: "bg-[#18191B] text-white",
      special: true,
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-3xl mb-2"
        >
          Fractional GTM service for early stage startups
        </motion.h2>

        <p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white opacity-80 text-sm sm:text-base mb-10 sm:mb-14 max-w-2xl"
        >
          We offer flexible engagement models designed to meet your specific needs. Even if you already have a growth and marketing team, our services can provide high-impact value by:
        </p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2 md:gap-2 items-stretch"
        >
          {steps.map((item, index) => (
            <motion.div key={index} variants={scaleIn} className="flex">
              <Card
                className={`${item.bg} rounded-4xl border-0 w-full h-full flex p-0`}
              >
                <CardContent className="p-6 sm:p-8 md:p-10 w-full flex flex-col justify-between">
                  <div className="flex justify-center items-center mb-4">
                    {item.special ? <Starburst /> : item.icon}
                  </div>
                  <div>
                  <h3 className="text-xl sm:text-2xl mb-2">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed opacity-80 text-sm sm:text-base">
                    {item.description}
                  </p>
                  {item.features && (
                    <div className="mt-2 text-sm sm:text-base opacity-80">
                      {item.features.map((feature, i) => (
                        <div key={i} className="mb-1">
                          <MdOutlineCheckCircle className="inline-block w-4 h-4 mr-2 text-white -mt-1" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
