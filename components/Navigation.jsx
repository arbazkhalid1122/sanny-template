import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function Navigation() {
  return (
    <nav 
      className="fixed top-10 w-full z-50 "
      style={{ 
        animation: 'fadeIn 0.6s ease-out 0s forwards'
      }}
    >
      <div className="max-w-5xl mx-auto py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 rounded-full px-4 py-2.5 border"
            style={{ 
              background: '#343637',
              backdropFilter: 'blur(20px)',
              borderColor: 'hsl(0 0% 100% / 0.1)'
            }}
          >
            <span className="text-white font-bold text-lg">Sanny</span>
            <span className="text-zinc-400">®</span>
            <ChevronUp className="w-4 h-4 text-zinc-400" />
          </div>

          {/* Navigation Links */}
          <div 
            className="hidden md:flex items-center rounded-full pl-6 border"
            style={{ 
              background: '#343637',
              backdropFilter: 'blur(20px)',
              borderColor: 'hsl(0 0% 100% / 0.1)'
            }}
          >
            <div className="flex items-center space-x-4 mr-6 p-3">
              <a href="#services" className=" transition-colors text-lg font-medium">
                Services
              </a>
              <a href="#pricing" className=" transition-colors text-lg font-medium">
                Pricing
              </a>
              <a href="#case-studies" className=" transition-colors text-lg font-medium">
                Case studies
              </a>
              <a href="#team" className=" transition-colors text-lg font-medium">
                Team
              </a>
              <a href="#faq" className=" transition-colors text-lg font-medium">
                FAQ
              </a>
            </div>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2 h-12 text-lg font-semibold">
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}