"use client";

import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaRobot, FaBuilding, FaChartLine } from "react-icons/fa";
import { useRef } from "react";

const cards = [
  {
    title: "Small business",
    icon: <FaBuilding className="w-40 h-40 text-black" />,
    subtitle: "AI automation",
    description:
      "Looking to streamline operations and enhance customer engagement? Our tailored AI solutions can help you optimize processes, improve decision-making, and drive growth.",
  },
  {
    title: "Active Products",
    icon: <FaChartLine className="w-40 h-40 text-black" />,
    subtitle: "Add AI features",
    description:
      "Already have an impressive, cutting-edge product? Let’s take it further. We’ll add powerful AI features to automate tasks, improve user engagement, and boost overall efficiency.",
  },
  {
    title: "Startups",
    icon: <FaRobot className="w-40 h-40 text-black" />,
    subtitle: "AI product from scratch",
    description:
      "Got a revolutionary AI idea? With our expertise in helping startups, we’ll turn your concept into a scalable MVP ready for future success.",
  },
];

export default function SuitableSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px", amount: 0.3 })
  console.log("inView:", isInView);
  
return (
    <section className="relative bg-black text-white" ref={ref}>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left side - pinned */}
            <div
                className={`h-fit self-start pt-32 w-[250px] ${
                    isInView ? "fixed top-30" : "static"
                }`}
                style={{ zIndex: 10 }}
            >
                <h2 className="text-2xl font-semibold mb-4">We are suitable for</h2>
                <p className="text-gray-400">
                    Because we can solve the challenges that other companies can’t reach
                </p>
            </div>

            {/* Right side - cards in scroll flow */}
            <div className="flex flex-col gap-1 justify-end items-end w-full md:col-start-2">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.4 }}
                    >
                        <Card className="rounded-2xl shadow-lg bg-white text-black">
                            <CardContent className="p-8 space-y-6">
                                <h3 className="text-xl font-semibold">{card.title}</h3>
                                <div className="flex justify-center">{card.icon}</div>
                                <div>
                                    <h4 className="font-bold">{card.subtitle}</h4>
                                    <p className="text-gray-600">{card.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
}