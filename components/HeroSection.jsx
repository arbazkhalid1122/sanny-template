import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
// import avatar1 from "@/assets/avatar-1.jpg";
// import avatar2 from "@/assets/avatar-2.jpg";
// import avatar3 from "@/assets/avatar-3.jpg";
import { MdArrowDownward } from "react-icons/md";
import TrustedBy from "./TrustedBy";

export default function HeroSection() {
  return (
    <section className="pt-4 pb-20 px-4 sm:px-8 md:px-12 lg:px-20 relative">
      <div className="max-w-8xl mx-auto">
        <div 
          className="rounded-3xl px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(180deg,#0f1112 50.999999046325684%,#acb3b6)',
            // boxShadow: '0 25px 50px -12px hsl(220 25% 3% / 0.8)'
            boxShadow: 'rgba(220, 220, 220, 0.4) 0px 5px, #a5acaf 0px 10px, rgba(220, 220, 220, 0.2) 0px 15px, rgba(220, 220, 220, 0.1) 0px 20px, rgba(220, 220, 220, 0.05) 0px 25px'
            }}
          >

            {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-transparent to-transparent blur-3xl pointer-events-none" />
          
          <div className="max-w-5xl mx-auto z-10 mt-8 sm:mt-12 md:mt-16">
            {/* Main heading */}
            <div 
              className="space-y-6 sm:space-y-8"
              style={{ 
                animation: 'slideUp 0.8s ease-out 0s forwards'
              }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold leading-tight" style={{
                lineHeight: 0.9,
                letterSpacing: '-0.04em'
              }}>
                <span 
                  className="block"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(0 0% 85%) 50%, hsl(0 0% 70%) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Fractional GTM service
                </span>
                <span 
                  className="block"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(0 0% 80%) 0%, hsl(0 0% 65%) 50%, hsl(0 0% 50%) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  for Early-Stage
                </span>
                <span 
                  className="block"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(0 0% 80%) 0%, hsl(0 0% 65%) 50%, hsl(0 0% 50%) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Startups
                </span>
              </h1>

              {/* Description */}
              <p 
                className="text-base sm:text-lg md:text-xl text-[#ffffffcc] max-w-2xl"
                style={{ 
                  animation: 'fadeIn 0.6s ease-out 0.2s forwards'
                }}
              >
                We offer a result driven embedded GTM service that provides you with high-impact expertise without the long-term financial commitment of a full-time hire.
              </p>

              {/* CTA Buttons and Social Proof */}
              <div 
                className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8"
                style={{ 
                  animation: 'fadeIn 0.6s ease-out 0.3s forwards'
                }}
              >
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button size="lg" className='bg-[#dbea39] text-black hover:bg-[#dbea39]/90 cursor-pointer w-full sm:w-auto'>
                    Book call
                  </Button>
                </div>
              </div>
                    <TrustedBy />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}