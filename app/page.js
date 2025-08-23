"use client"

import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import PricingSection from "@/components/PricingSection"
import TeamSection from "@/components/TeamSection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"
import SuitableSection from "@/components/Suitable"
import Problems from "@/components/Problems"

export default function SannyLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden cursor-custom">
      <Navigation />
      <HeroSection />
      <Problems />
      <HowItWorks />
      {/* <FeatureSection /> */}
      {/* <ServicesSection /> */}
      <SuitableSection />
      <Testimonials />
      <PricingSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
