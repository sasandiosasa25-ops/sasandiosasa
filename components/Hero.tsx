'use client';

import { ArrowRight, Compass } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const sectionElement = sectionRef.current;

    if (!videoElement || !sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch((err) => {
              console.log('Autoplay prevented:', err);
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const translations = {
    en: {
      experienceTanzania: 'Experience Tanzania',
      heroTitle: 'TANZANIA',
      heroSubtitle: 'Where vast landscapes meet profound stillness',
      explorePaths: 'Explore Paths',
      ourExperiences: 'Our Experiences',
      years: 'YEARS',
      travelers: 'TRAVELERS',
      destinations: 'DESTINATIONS',
    },
    de: {
      experienceTanzania: 'Erleben Sie Tansania',
      heroTitle: 'TANSANIA',
      heroSubtitle: 'Wo weite Landschaften auf tiefe Stille treffen',
      explorePaths: 'Pfade Erkunden',
      ourExperiences: 'Unsere Erfahrungen',
      years: 'JAHRE',
      travelers: 'REISENDE',
      destinations: 'REISEZIELE',
    }
  };

  const t = translations[language];

  return (
    <>
      {/* Video Section - Full screen, no overlay, no text */}
      <section ref={sectionRef} className="relative min-h-screen bg-stone-900 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-screen object-cover"
          loop
          muted={false}
          playsInline
          preload="auto"
        >
          <source src="/pro1.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Content Section - Below Video with Brand Theme */}
      <section className="relative bg-brand-menu-hover py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Button 
                asChild 
                size="lg" 
                className="group bg-brand-primary text-white hover:bg-brand-secondary px-8 sm:px-12 py-6 sm:py-7 text-lg sm:text-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Link href="/paths">
                  <span className="flex items-center">
                    {t.explorePaths}
                    <ArrowRight className="ml-3 h-5 sm:h-6 w-5 sm:w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group border-2 border-brand-primary bg-transparent text-brand-primary hover:bg-brand-primary hover:text-white px-8 sm:px-12 py-6 sm:py-7 text-lg sm:text-xl transition-all duration-300"
              >
                <Link href="/experience">
                  <span className="flex items-center">
                    {t.ourExperiences}
                    <Compass className="ml-3 h-5 sm:h-6 w-5 sm:w-6 group-hover:rotate-12 transition-transform" />
                  </span>
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center gap-12 sm:gap-20 pt-12 border-t border-brand-border">
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-heading mb-2">15+</div>
                <div className="text-brand-heading/60 font-medium tracking-wide text-sm sm:text-base uppercase">{t.years}</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-heading mb-2">500+</div>
                <div className="text-brand-heading/60 font-medium tracking-wide text-sm sm:text-base uppercase">{t.travelers}</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-heading mb-2">12</div>
                <div className="text-brand-heading/60 font-medium tracking-wide text-sm sm:text-base uppercase">{t.destinations}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}