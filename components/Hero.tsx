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
    <div className="w-screen overflow-x-hidden mt-12" style={{ maxWidth: '100vw' }}>
      {/* Video Section - Full video visible, especially on small screens */}
      <section 
        ref={sectionRef} 
        className="relative bg-brand-heading flex items-center justify-center"
        style={{ width: '100vw', maxWidth: '100vw', overflow: 'visible' }}
      >
        <div className="w-full flex items-center justify-center">
          <video
            ref={videoRef}
            style={{ 
              width: '100%',
              height: 'auto',
              display: 'block',
              maxWidth: '100%',
              objectFit: 'contain'
            }}
            loop
            muted={true}
            playsInline
            preload="auto"
          >
            <source src="/pro1.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Brand-themed gradient overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-heading/30 via-transparent to-transparent pointer-events-none" style={{ pointerEvents: 'none' }} />
      </section>

    
    </div>
  );
}