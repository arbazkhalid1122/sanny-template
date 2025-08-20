"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-16 px-6">
      <div className="max-w-5xl w-full space-y-6">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-start">Still not sure?</h2>

        {/* Subtext */}
        <div className="text-start">
          <p className="text-gray-400 text-sm leading-relaxed max-w-[350px]">
            Contact us to learn more about{" "}
            <span className="font-medium">Sanny AI Automation Agency</span> and
            figure out how your team can change the way they work with AI
          </p>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="w-full py-20 text-2xl font-semibold rounded-2xl bg-white text-black hover:bg-gray-100"
        >
          Book call
        </Button>

        {/* Email Contact */}
        <p className="text-gray-400 text-sm text-center">
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
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-8 gap-4">
          <span>2025 © Sanny® AI Agency Inc.</span>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-white">
              Twitter
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">
              S1
            </Link>
            <Link href="#" className="hover:text-white">
              S2
            </Link>
            <Link href="#" className="hover:text-white">
              404
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
