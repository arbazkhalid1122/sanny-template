"use client"

import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-12 max-w-[800px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2">
            <span className="text-white font-bold text-lg">Sanny</span>
            <span className="text-gray-400">®</span>
            <ChevronUp className="w-4 h-4 text-gray-400" />
          </div>

          <div className="hidden md:flex items-center bg-gray-800 rounded-full pl-6 space-x-6">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
              Services
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm">
              Pricing
            </a>
            <a href="#case-studies" className="text-gray-300 hover:text-white transition-colors text-sm">
              Case studies
            </a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors text-sm">
              Team
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm">
              FAQ
            </a>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2 text-sm font-medium">
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
