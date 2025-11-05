'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SpecialEvents() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Beyond The Map",
      subtitle: "Extraordinary experiences that transcend the ordinary journey",
      viewDetails: "Learn More",
      notifyText: "Want to know when new experiences are available?",
      notifyButton: "Notify Me",
    },
    de: {
      title: "Jenseits der Karte",
      subtitle: "Außergewöhnliche Erlebnisse, die über die gewöhnliche Reise hinausgehen",
      viewDetails: "Mehr erfahren",
      notifyText: "Möchten Sie wissen, wann neue Erlebnisse verfügbar sind?",
      notifyButton: "Benachrichtigen Sie mich",
    },
  };

  // Event flyers - just images and links
  const events = [
    {
      id: 1,
      flyer: '/northern13.jpeg',
      alt: 'Special Event 1',
      link: '#',
    },
    {
      id: 2,
      flyer: '/northern12.jpeg',
      alt: 'Special Event 2',
      link: '#',
    },
 
   
  ];

  const text = content[language];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-brand-menu-hover to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-heading tracking-tight">
            {text.title}
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 sm:w-32 bg-brand-primary" />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-brand-heading/70 max-w-3xl mx-auto font-light leading-relaxed">
            {text.subtitle}
          </p>
        </div>

        {/* Events Grid - Flyers Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {events.map((event) => (
            <Link
              key={event.id}
              href={event.link}
              className="group relative overflow-hidden bg-white border-2 border-brand-border hover:border-brand-primary transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-3"
            >
              {/* Flyer Image - Full Display */}
              <div className="relative overflow-hidden">
                <img
                  src={event.flyer}
                  alt={event.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay on hover for interactivity */}
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Hover Action Indicator */}
              <div className="absolute bottom-0 left-0 right-0 bg-brand-primary text-white text-center py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center">
                  {text.viewDetails}
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-brand-primary transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Optional: CTA Section */}
       
      </div>
    </section>
  );
}