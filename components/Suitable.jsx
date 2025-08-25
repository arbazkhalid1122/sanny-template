"use client";

import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { MorphingCircles } from "./MorphingCircles";
import { MorphingFlower } from "./MorphingFlower";
import { OverlappingCircles } from "./OverlappingCircles";
import { FaRobot, FaShieldAlt } from "react-icons/fa";
import { MorphingSquares, MorphingTriangles } from "./svg";

const cards = [
  {
    title: "Accelerated Time-to-Market",
    icon: <MorphingCircles />,
    subtitle: "AI automation",
    description:
      "Get to your target market faster and more effectively by building the right systems from day one.",
  },
  {
    title: "De-Risked Growth",
    icon: <MorphingFlower />,
    subtitle: "Add AI features",
    description:
      "Reduce the risk of GTM failure by building a proven, data-informed strategy",
  },
  {
    title: "Empowered Team",
    icon: <OverlappingCircles />,
    subtitle: "AI product from scratch",
    description:
      "Your founding team and any early hires will be equipped with the knowledge and tools they need to drive growth long after our engagement is complete.",
    theme: "dark-blue",
  },
  {
    title: "Cost-Effective Expertise",
    icon: <MorphingSquares />,
    subtitle: "Smart analytics",
    description:
      "Get access to senior-level GTM talent at a fraction of the cost of a full-time hire, allowing you to invest capital in other mission-critical areas.",
    theme: "dark-blue",
  },
  {
    title: "Enhanced Investor Confidence",
    icon: <MorphingTriangles />,
    subtitle: "Scalable solutions",
    description:
      "Showcase to investors that you have a clear, executable GTM plan, increasing your chances of securing future funding.",
    theme: "dark-neutral",
  },
];

export default function SuitableSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-150px 0px -100px 0px", amount: 0.1 });
  console.log("inView:", isInView);

  return (
    <section
      className="relative bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {/* Left side - pinned */}
        <div
          className={`h-fit self-start pt-8 sm:pt-16 md:pt-32 w-full md:w-[500px] ${isInView ? "md:fixed md:top-30" : "static"
            }`}
          style={{ zIndex: 10 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-6xl mb-2 font-bold">
            Why This Matters for You
          </h2>
          <p className="text-white opacity-80 text-sm sm:text-base max-w-md">
            Partnering with us on your GTM journey is a strategic decision that offers clear, tangible benefits
            Accelerated Time-to-Market
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
              <Card
                className={`rounded-2xl shadow-lg border-0 
                  ${i === 1
                    ? "bg-[#dbea39] text-black" // yellow
                    : card.theme === "dark-neutral"
                      ? "bg-[#18191b] text-white" // matte black-gray
                      : card.theme === "dark-blue"
                        ? " text-white" // slate/blue-gray
                        : card.theme === "dark-gradient"
                          ? "bg-gradient-to-br from-[#0f172a] via-[#1e1e1e] to-[#2c2d31] text-white" // gradient
                          : "bg-white text-black" // default white
                  }`}
                style={{
                  background: card.theme === 'dark-blue' ? 'linear-gradient(180deg,#0f1112 50.999999046325684%,#acb3b6)' : '',
                }}
              >
                <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl">
                    {card.title}
                  </h3>
                  {card.icon}

                  <div>
                    <p className=" text-sm sm:text-base leading-7">
                      {card.description}
                    </p>
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
