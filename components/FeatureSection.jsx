"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LuInfinity, LuArrowUp, LuSmile, LuAsterisk } from "react-icons/lu"

const features = [
  {
    icon: <LuInfinity size={80} />,
    title: "Quick onboarding",
    description: "faster than new hires",
  },
  {
    icon: <LuArrowUp size={80} />,
    title: "Updates weekly",
    description: "after agreeing on tasks",
  },
  {
    icon: <LuSmile size={80} />,
    title: "Revisions",
    description: "to your full satisfaction",
  },
  {
    icon: <LuAsterisk size={80} />,
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
    <div className="w-full bg-black text-white py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {features.map((item, i) => (
          <Card key={i} className="bg-black border-none shadow-none">
            <CardContent className="flex flex-col items-center justify-center space-y-3 p-4">
              <div className="text-gray-400">{item.icon}</div>
              <p className="text-sm font-light">
                {item.title} <br /> {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
