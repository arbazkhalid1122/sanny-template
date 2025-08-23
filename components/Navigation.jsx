"use client"

import { Button } from "@/components/ui/button";
import { ChevronUp, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed ${isAtTop ? 'top-10' : 'top-5'} w-full z-500`}
      style={{ animation: 'fadeIn 0.6s ease-out 0s forwards' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 rounded-full px-4 py-2.5 border 
                       bg-white/10 backdrop-blur-lg border-white/10"
          >
            <span className="text-white font-bold text-base">Clarus</span>
            {/* <span className="text-zinc-400">®</span> */}
            {/* <ChevronUp className="w-4 h-4 text-zinc-400" /> */}
          </div>

          {/* Desktop Navigation Links */}
          <div 
            className="hidden md:flex items-center rounded-full pl-6 border 
                       bg-white/10 backdrop-blur-lg border-white/10"
          >
            <div className="flex items-center space-x-4 mr-6 p-3">
              <a href="#services" className="text-white transition-colors text-base font-medium">
                Solution
              </a>
              <a href="#pricing" className="text-white transition-colors text-base font-medium">
                Why
              </a>
              <a href="#case-studies" className="text-white transition-colors text-base font-medium">
                Pricing
              </a>
              <a href="#faq" className="text-white transition-colors text-base font-medium">
                FAQ
              </a>
            </div>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2 h-12 text-lg font-semibold">
              Book 15-min call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full 
                       border bg-white/10 backdrop-blur-lg border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden mt-4 rounded-2xl border p-6 
                       bg-white/10 backdrop-blur-lg border-white/10"
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-white text-lg font-medium py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#pricing" 
                className="text-white text-lg font-medium py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#case-studies" 
                className="text-white text-lg font-medium py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case studies
              </a>
              <a 
                href="#team" 
                className="text-white text-lg font-medium py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#faq" 
                className="text-white text-lg font-medium py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-3 h-12 text-lg font-semibold mt-4">
                Book 15-min call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
