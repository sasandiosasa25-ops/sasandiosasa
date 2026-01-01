'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowRight, Star, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Start your journey",
      heading: "Karibu",
           buttonText: "Explore If this Journey is for You",
      rating: "Rating",
      awardWinning: "Award-Winning Service",
      travelers: "Happy Travelers",
    },
    de: {
      tagline: "Beginnen Sie Ihre Reise",
      heading: "Karibu",
           buttonText: "Buchen Sie Ihr Entdeckungsgespräch",
      rating: "Bewertung",
      awardWinning: "Preisgekrönter Service",
      travelers: "Glückliche Reisende",
    },
  };

  const text = content[language];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-brand-menu-hover via-white to-brand-menu-hover overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-brand-primary opacity-20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-brand-primary opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          {/* Main Heading */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-heading mb-4 leading-[0.9] tracking-tighter">
            {text.heading}
          </h2> 
        </div>
        
        {/* CTA Button - Bold and Animated */}
        <div className="mb-6 sm:mb-8">
          <Button
            asChild
            size="lg"
            className="group relative bg-brand-primary hover:bg-brand-secondary text-white px-4 sm:px-8 md:px-12 py-3 sm:py-5 md:py-8 text-sm sm:text-base md:text-xl font-bold uppercase tracking-wide sm:tracking-wider transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-brand-primary/50 overflow-hidden w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto"
          >
            <Link href="https://tally.so/r/3xe74G" target="_blank" rel="noopener noreferrer" className="w-full">
              {/* Animated background shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <span className="relative flex items-center justify-center whitespace-normal text-center">
                <span className="break-words whitespace-normal leading-snug">{text.buttonText}</span>
                <ArrowRight className="ml-2 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
        </div>
        
     
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}