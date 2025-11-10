'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';

export default function SpecialEvents() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Beyond The Map",
      viewDetails: "Learn More",
      notifyText: "Want to know when new experiences are available?",
      notifyButton: "Notify Me",
    },
    de: {
      title: "Jenseits der Karte",
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
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Fade triggerOnce duration={1000}>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-heading tracking-tight">
              {text.title}
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 sm:w-32 bg-brand-primary" />
            </div>
          </div>
        </Fade>

        {/* Events Grid with React Awesome Reveal - Two columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Slide 
              key={event.id} 
              direction={index % 2 === 0 ? 'left' : 'right'}
              triggerOnce
              duration={1200}
              delay={index * 150}
              fraction={0.3}
            >
              <Link
                href={event.link}
                className="group relative overflow-hidden bg-white border-2 border-brand-border hover:border-brand-primary transition-all duration-500 shadow-lg hover:shadow-2xl block"
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

                {/* Learn More Button - Slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-brand-primary text-white text-center py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center">
                    {text.viewDetails}
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>

                {/* Animated corner accent */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-brand-primary transition-all duration-500 group-hover:w-full" />
              </Link>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
}