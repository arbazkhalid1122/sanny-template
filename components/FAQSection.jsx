"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "How quickly can you implement AI solutions?",
      answer:
        "We typically deliver initial AI implementations within 2-4 weeks, depending on the complexity of your requirements. Our quick onboarding process ensures you see results fast.",
    },
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with businesses of all sizes, from startups to enterprise companies. Our solutions are particularly effective for companies looking to automate repetitive tasks and improve operational efficiency.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we provide comprehensive ongoing support including monitoring, maintenance, updates, and optimization of your AI systems to ensure continued performance.",
    },
    {
      question: "What's included in the pricing?",
      answer:
        "Our pricing includes consultation, implementation, testing, training, and initial support. The Master plan includes additional features like unlimited revisions and dedicated account management.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely. We specialize in seamless integration with existing business systems, ensuring minimal disruption to your current workflows while maximizing the benefits of AI automation.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          FAQ
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-1">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-800 bg-[#18191b] rounded-lg px-4">
                <AccordionTrigger className="text-left text-white hover:text-yellow-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
