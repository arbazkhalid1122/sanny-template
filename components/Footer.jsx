"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl w-full space-y-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-start">Still not sure?</h2>

        {/* Subtext */}
        <div className="text-start">
          <p className="text-gray-300 mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed max-w-[470px]">
            Contact us to learn more about{" "}
            <span className="font-medium">Fractional GTM Automation Agency</span> and
            figure out how your team can change the way they work with AI
          </p>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="w-full py-8 sm:py-12 md:py-30 text-2xl sm:text-4xl md:text-6xl font-semibold rounded-4xl bg-white text-black hover:bg-gray-100"
        >
          Book call
        </Button>

        {/* Email Contact */}
        <p className="text-gray-300 text-base sm:text-lg text-center">
          or mail us at{" "}
          <Link
            href="mailto:hey@fractionalgtm"
            className="underline hover:text-white inline-flex items-center gap-1"
          >
            <Mail size={14} />
            hey@fractionalgtm
          </Link>
        </p>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-white/60 pt-6 sm:pt-8 gap-4 border-b pb-6 sm:pb-8 border-gray-900">
          <span>2025 © Fractional GTM® AI Agency Inc.</span>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <Link href="#" className="hover:text-gray-500">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Twitter
            </Link>
             <Link href="#" className="hover:text-gray-500">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
