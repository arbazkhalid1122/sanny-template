"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    number: "①",
    title: "Business process automation",
    description:
      "Let AI handle repetitive tasks and workflows. Improve efficiency, minimize errors, and free up time for strategic work, ultimately driving cost savings.",
  },
  {
    number: "②",
    title: "Integrate AI into your company's data",
    description:
      "Our AI automation services empower you to leverage data-driven automation, generate actionable insights, and use predictive analytics to support informed decision-making.",
  },
  {
    number: "③",
    title: "AI-powered apps development",
    description:
      "We develop apps that deliver personalized, real-time insights and transform user experiences, including AI chatbots, image recognition for augmented reality, and predictive analytics for top-tier recommendations.",
  },
];

// floating icon animation
const floating = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
      {/* Floating icons */}
      <motion.img
        src="/icons/airtable.png"
        alt="Airtable"
        className="absolute top-10 right-8 sm:right-12 w-8 sm:w-12 md:w-16"
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.img
        src="/icons/openai.png"
        alt="OpenAI"
        className="absolute top-16 sm:top-24 left-1/2 w-8 sm:w-12 md:w-16"
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.img
        src="/icons/miro.png"
        alt="Miro"
        className="absolute bottom-16 sm:bottom-20 left-8 sm:left-12 w-8 sm:w-12 md:w-16"
        initial={{ y: 0 }}
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">Services</h2>

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            variants={floating}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <Card className="bg-transparent border-0 shadow-none text-white">
              <CardHeader>
                <span className="text-gray-400 text-lg sm:text-xl mb-2">{service.number}</span>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-400 mt-2 text-sm sm:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
