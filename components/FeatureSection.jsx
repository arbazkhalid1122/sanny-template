"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LuInfinity, LuArrowUp, LuSmile, LuAsterisk } from "react-icons/lu"

const features = [
  {
    icon: <LuInfinity size={70} strokeWidth={0.5}/>,
    title: "Quick onboarding",
    description: "faster than new hires",
  },
  {
    icon: <LuArrowUp size={70} strokeWidth={0.5}/>,
    title: "Updates weekly",
    description: "after agreeing on tasks",
  },
  {
    icon: <LuSmile size={70} strokeWidth={0.5}/>,
    title: "Revisions",
    description: "to your full satisfaction",
  },
  {
    icon: <LuAsterisk size={80} strokeWidth={0.5} />,
    title: "100% money-back",
    description: (
      <>
        guarantee{" "}
        <span className="underline cursor-pointer">↓</span>
      </>
    ),
  },
]

export default function FeatureSection() {
  return (
    <div className="w-full bg-black text-white p-12 z-1">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-start">
        {features.map((item, i) => (
          <Card key={i} className="bg-black border-none shadow-none">
            <CardContent className="flex flex-col items-start justify-center space-y-3 p-4">
              <div className="text-gray-400">{item.icon}</div>
              <p className="text-lg font-light text-gray-200">
                {item.title} <br /> {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
