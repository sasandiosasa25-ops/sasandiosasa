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
      {/* Video Section - Full screen with subtle gradient overlay */}
      <section ref={sectionRef} className="relative w-full h-[50vh] sm:h-[65vh] md:h-[80vh] lg:h-screen overflow-hidden bg-brand-heading">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loop
          muted={true}
          playsInline
          preload="auto"
        >
          <source src="/pro1.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-menu-hover/30 pointer-events-none" />
      </section>

      {/* Content Section - Enhanced with animations and depth */}
      <section className="relative bg-gradient-to-b from-brand-menu-hover to-white py-4 sm:py-8 md:py-16 overflow-hidden">
        {/* Decorative elements */}

        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Action Buttons with staggered animation */}
            <div className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button 
                asChild 
                size="lg" 
                className="group relative bg-brand-primary text-white hover:bg-brand-secondary px-8 sm:px-14 py-6 sm:py-8 text-base sm:text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-lg overflow-hidden"
              >
                <Link href="/paths">
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center">
                    {t.explorePaths}
                    <ArrowRight className="ml-2 sm:ml-3 h-4 sm:h-6 w-4 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group relative border-2 border-brand-primary bg-white/80 backdrop-blur-sm text-brand-primary hover:bg-brand-primary hover:text-white px-8 sm:px-14 py-6 sm:py-8 text-base sm:text-xl font-semibold transition-all duration-300 hover:shadow-xl rounded-lg"
              >
                <Link href="/experience">
                  <span className="flex items-center justify-center">
                    {t.ourExperiences}
                    <Compass className="ml-2 sm:ml-3 h-4 sm:h-6 w-4 sm:w-6 group-hover:rotate-90 transition-transform duration-500" />
                  </span>
                </Link>
              </Button>
            </div>
            
      
          </div>
        </div>
      </section>
    </>
  );
}