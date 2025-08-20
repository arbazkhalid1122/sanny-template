"use client"

import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import ValueProposition from "@/components/ValueProposition"
import TrustedBy from "@/components/TrustedBy"
import HowItWorks from "@/components/HowItWorks"
import ServicesSection from "@/components/ServicesSection"
import Testimonials from "@/components/Testimonials"
import PricingSection from "@/components/PricingSection"
import SuccessStories from "@/components/SuccessStories"
import TeamSection from "@/components/TeamSection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"
import SuitableSection from "@/components/Suitable"

export default function SannyLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden cursor-custom">
      <Navigation />
      <HeroSection />
      <ValueProposition />
      <TrustedBy />
      <HowItWorks />
      <SuitableSection />
      <ServicesSection />
      <Testimonials />
      <PricingSection />
      <SuccessStories />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
