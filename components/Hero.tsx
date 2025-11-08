'use client';

import { ArrowRight, Compass } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    const sectionElement = sectionRef.current;

    if (!videoElement || !sectionElement) return;

    let hasScrolled = false;

    // Attempt to play immediately on load if visible
    const attemptAutoplay = () => {
      if (videoElement.readyState >= 2) {
        videoElement.play().catch((err) => {
          console.log('Initial autoplay prevented:', err);
        });
      }
    };

    // Unmute after user scrolls
    const handleScroll = () => {
      if (!hasScrolled) {
        hasScrolled = true;
        videoElement.muted = false;
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Try to play as soon as video can play
    videoElement.addEventListener('canplay', attemptAutoplay);
    attemptAutoplay();

    // Listen for scroll to unmute
    window.addEventListener('scroll', handleScroll);

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
      { threshold: 0.25 }
    );

    observer.observe(sectionElement);

    // Trigger animations
    setTimeout(() => setIsVisible(true), 100);

    return () => {
      videoElement.removeEventListener('canplay', attemptAutoplay);
      window.removeEventListener('scroll', handleScroll);
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
      {/* Video Section - Full screen optimized for all devices */}
      <section ref={sectionRef} className="relative w-full h-[50vh] sm:h-[65vh] md:h-[80vh] lg:h-screen overflow-hidden bg-brand-heading">
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted={true}
            playsInline
            preload="auto"
          >
            <source src="/pro1.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Brand-themed gradient overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-heading/50 via-transparent to-brand-heading/40 pointer-events-none" />
        
        {/* Bottom fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-18 bg-gradient-to-t from-brand-bg-light to-transparent pointer-events-none" />
      </section>

      {/* Content Section - Enhanced with brand colors and premium feel */}
      <section className="relative bg-gradient-to-b from-brand-bg-light via-white to-brand-menu-hover py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
        {/* Decorative brand-colored elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Action Buttons with staggered animation and brand colors */}
            <div className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button 
                asChild 
                size="lg" 
                className="group relative bg-brand-primary text-white hover:bg-brand-secondary px-10 sm:px-14 lg:px-16 py-6 sm:py-7 lg:py-8 text-lg sm:text-xl lg:text-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-brand-primary/50 rounded-lg overflow-hidden border-2 border-brand-primary hover:border-brand-secondary"
              >
                <Link href="/road-map">
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center">
                    <span className="font-comfortaa italic normal-case text-white mr-2">SasaNdioSasa</span>
                    {t.explorePaths}
                    <ArrowRight className="ml-2 sm:ml-3 h-5 sm:h-6 lg:h-7 w-5 sm:w-6 lg:w-7 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group relative border-3 border-brand-primary bg-white hover:bg-brand-primary text-brand-heading hover:text-white px-10 sm:px-14 lg:px-16 py-6 sm:py-7 lg:py-8 text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-brand-primary/40 rounded-lg transform hover:scale-105"
              >
                <Link href="/experience">
                  <span className="flex items-center justify-center">
                    <span className="font-comfortaa italic normal-case text-brand-primary group-hover:text-white mr-2">SasaNdioSasa</span>
                    {t.ourExperiences}
                    <Compass className="ml-2 sm:ml-3 h-5 sm:h-6 lg:h-7 w-5 sm:w-6 lg:w-7 group-hover:rotate-90 transition-transform duration-500" />
                  </span>
                </Link>
              </Button>
            </div>

            {/* Optional: Tagline or subheading */}
        
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-brand-primary rounded-full" />
      </section>
    </>
  );
}