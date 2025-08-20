"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-16 px-6">
      <div className="max-w-5xl w-full space-y-6">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-start">Still not sure?</h2>

        {/* Subtext */}
        <div className="text-start">
          <p className="text-gray-300 mb-12 text-lg leading-relaxed max-w-[470px]">
            Contact us to learn more about{" "}
            <span className="font-medium">Sanny AI Automation Agency</span> and
            figure out how your team can change the way they work with AI
          </p>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="w-full py-30 text-6xl font-semibold rounded-4xl bg-white text-black hover:bg-gray-100"
        >
          Book call
        </Button>

        {/* Email Contact */}
        <p className="text-gray-300 text-lg text-center">
          or mail us at{" "}
          <Link
            href="mailto:hey@sanny.ai"
            className="underline hover:text-white inline-flex items-center gap-1"
          >
            <Mail size={14} />
            hey@sanny.ai
          </Link>
        </p>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-base text-white/60 pt-8 gap-4 border-b pb-8 border-gray-900">
          <span>2025 © Sanny® AI Agency Inc.</span>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-500">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Twitter
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-500">
              S1
            </Link>
            <Link href="#" className="hover:text-gray-500">
              S2
            </Link>
            <Link href="#" className="hover:text-gray-500">
              404
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Terms
            </Link>
          </div>
        </div>
          <div className="text-center pt-6 text-gray-500">Powered by FRAMER Created by DEE S</div>
      </div>
    </div>
  );
}
