"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: 'What is a "Fractional GTM" expert?',
      answer:
        "A fractional expert is a seasoned professional who works with companies on a part-time, project, or retainer basis, providing high-level strategic guidance and execution without the cost of a full-time hire.",
    },
    {
      question: "How long does an engagement typically last?",
      answer:
        "Engagements are flexible, but a typical foundational build-out takes 2-4 months, followed by a transition and potential on-demand support.",
    },
    {
      question: "What kind of companies are a good fit for this service?",
      answer:
        "Early-stage (pre-seed, seed) B2B or B2C startups with a working product and a clear need to define their market and growth strategy.",
    },
    {
      question: "How do you measure success?",
      answer:
        "Success is measured by key outcomes, including a clear and documented GTM strategy, established acquisition channels, repeatable sales processes, and a confident founding team with a strong understanding of their market.",
    },
    {
      question: "What's the difference between this and a regular marketing consultant?",
      answer:
        "A consultant provides recommendations. We provide hands-on, embedded support to build and implement the systems and processes, ensuring knowledge transfer and long-term sustainability.",
    },
    {
      question: "What kind of expertise does your team have?",
      answer:
        "Our team comprises individuals with extensive experience within growth, and marketing functionalities, especially in the African tech ecosystem, with a proven track record of building and scaling GTM functions from the ground up.",
    },
  ]

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semi-bold mb-4 sm:mb-6"
        >
          FAQ
        </motion.h2>
        <p className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-14 max-w-lg">
          Fractional GTM service for Early-Stage Startups
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-[2px]">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-800 bg-[#18191b] rounded-lg px-4 sm:px-6 pt-2">
                <AccordionTrigger className="text-left text-white text-base sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm sm:text-lg">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
