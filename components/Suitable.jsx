"use client";

import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaRobot, FaBuilding, FaChartLine } from "react-icons/fa";
import { useRef } from "react";
import { MorphingCircles } from "./MorphingCircles";
import { MorphingFlower } from "./MorphingFlower";
import { OverlappingCircles } from "./OverlappingCircles";

const cards = [
  {
    title: "Small business",
    icon: <MorphingCircles />,
    subtitle: "AI automation",
    description:
      "Looking to streamline operations and enhance customer engagement? Our tailored AI solutions can help you optimize processes, improve decision-making, and drive growth. Let us empower your small business to compete more effectively in today’s market.",
  },
  {
    title: "Active Products",
    icon: <MorphingFlower/>,
    subtitle: "Add AI features",
    description:
      "Already have an impressive, cutting-edge product? Let’s take it further. We’ll add powerful AI features to automate tasks, improve user engagement, and boost overall efficiency, making your business more effective.",
  },
  {
    title: "Startups",
    icon: <OverlappingCircles/>,
    subtitle: "AI product from scratch",
    description:
      "Got a revolutionary AI idea? With our expertise in helping startups, we’ll turn your concept into a scalable MVP ready for future success. Together, we’ll strike the perfect balance between innovation and productivity.",
  },
];


export default function SuitableSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px", amount: 0.3 })
  console.log("inView:", isInView);
  
return (
    <section className="relative bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left side - pinned */}
            <div
                className={`h-fit self-start pt-8 sm:pt-16 md:pt-32 w-full md:w-[250px] ${
                    isInView ? "md:fixed md:top-30" : "static"
                }`}
                style={{ zIndex: 10 }}
            >
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">We are suitable for</h2>
                <p className="text-gray-400 text-sm sm:text-base">
                    Because we can solve the challenges that other companies can't reach
                </p>
            </div>

            {/* Right side - cards in scroll flow */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-1 justify-end items-end w-full md:col-start-2">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.4 }}
                        className="w-full md:w-auto"
                    >
                        <Card className={`rounded-2xl shadow-lg ${i===1 ? 'bg-[#dbea39] text-black': i===2 ? 'bg-[#18191b] text-white' :'bg-white text-black'} border-0`}>
                            <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                                <h3 className="text-lg sm:text-3xl font-semibold">{card.title}</h3>
                                {card.icon}
                                
                                <div>
                                    <h4 className="font-semibold text-sm sm:text-xl">{card.subtitle}</h4>
                                    <p className=" text-sm sm:text-base leading-7">{card.description}</p>
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