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
      buttonText: "Explore If This Journey Is for You",
        rating: "Rating",
        awardWinning: "Award-Winning Service",
        travelers: "Happy Travelers",
    },
    de: {
      tagline: "Beginnen Sie Ihre Reise",
      heading: "Karibu",
        buttonText: "Explore If This Journey Is for You",
      rating: "Bewertung",
      awardWinning: "Preisgekrönter Service",
      travelers: "Glückliche Reisende",
    },
  };

  const text = content[language];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-brand-menu-hover/60 via-white to-brand-menu-hover/60 flex items-center justify-center">
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-8 text-center bg-white/90 rounded-3xl shadow-xl border border-brand-primary/10 backdrop-blur-md">
        {/* Tagline */}
        <div className="pt-10">
          <p className="text-lg sm:text-xl font-semibold text-brand-primary mb-2 tracking-wide uppercase">{text.tagline}</p>
        </div>
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-heading mb-6 leading-tight tracking-tighter">
          {text.heading}
        </h2>
        {/* CTA Button - Bold and Animated */}
        <div className="mb-10">
          <Button
            asChild
            size="lg"
            className="group relative bg-brand-primary hover:bg-brand-secondary text-white px-6 sm:px-10 md:px-16 py-4 sm:py-6 md:py-10 text-base sm:text-lg md:text-2xl font-bold uppercase tracking-wide sm:tracking-wider transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-brand-primary/50 overflow-hidden w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto"
          >
            <Link href="https://tally.so/r/3xe74G" target="_blank" rel="noopener noreferrer" className="w-full">
              {/* Animated background shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center justify-center whitespace-normal text-center">
                <span className="break-words whitespace-pre-line whitespace-normal leading-snug">{text.buttonText}</span>
                <ArrowRight className="ml-2 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 transform group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}