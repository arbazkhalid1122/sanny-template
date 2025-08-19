"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations"

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      title: "Subscribe",
      description:
        "If our services is a good fit, start your subscription. Access your project board, and we'll reach out the same day for a productive discussion. Plans & Pricing →",
      bg: "bg-white text-black",
    },
    {
      step: "Step 2",
      title: "Share your vision",
      description:
        "Once we have your vision, we'll analyse your goals, business requirements and constraints, break the project into bite-sized tasks, and start implementing.",
      bg: "bg-[#18191B] text-white",
    },
    {
      step: "Step 3",
      title: "Continuous results",
      description:
        "Our team effectively covers your tasks and implements AI as a strategic asset, ensuring it becomes an integral part of your company's workflow.",
      bg: "bg-[#18191B] text-white",
    },
    {
      step: "Step 4",
      title: "Enjoy the growth",
      description:
        "Our results drive your business growth, which is our main goal. We offer detailed instructions, training, and tech support as long as you need to maximize our work's value.",
      bg: "bg-[#18191B] text-white",
      icon: "✦",
    },
  ]


  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          How it works?
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-1"
        >
          {steps.map((item, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className={`${item.bg} border-0 h-full p-0`}>
                <CardContent className="p-8">
                  <div className="text-sm font-medium mb-16 opacity-70">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="leading-relaxed opacity-80">{item.description}</p>
                  {item.icon && <div className="mt-6 text-4xl opacity-30">{item.icon}</div>}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
