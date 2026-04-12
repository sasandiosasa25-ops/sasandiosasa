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

    let hasUserGesture = false;

    const enableAudio = () => {
      if (!hasUserGesture) {
        hasUserGesture = true;
        videoElement.muted = false;
        videoElement.volume = 1;
        videoElement.play().catch(() => {
          // Playback may still be prevented until the user interacts further.
        });

        window.removeEventListener('scroll', handleGesture);
        window.removeEventListener('touchstart', handleGesture);
        window.removeEventListener('pointerdown', handleGesture);
      }
    };

    const attemptAutoplay = () => {
      if (videoElement.readyState >= 2) {
        videoElement.play().catch((err) => {
          console.log('Initial autoplay prevented:', err);
        });
      }
    };

    const handleGesture = () => {
      enableAudio();
    };

    videoElement.addEventListener('canplay', attemptAutoplay);
    attemptAutoplay();

    window.addEventListener('scroll', handleGesture, { passive: true });
    window.addEventListener('touchstart', handleGesture, { passive: true });
    window.addEventListener('pointerdown', handleGesture, { passive: true });

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
    setTimeout(() => setIsVisible(true), 100);

    return () => {
      videoElement.removeEventListener('canplay', attemptAutoplay);
      window.removeEventListener('scroll', handleGesture);
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('pointerdown', handleGesture);
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
    <div className="w-screen overflow-x-hidden " style={{ maxWidth: '100vw' }}>
      {/* Video Section - Full video visible, especially on small screens */}
      <section 
        ref={sectionRef} 
        className="relative bg-brand-heading flex items-center justify-center"
        style={{ width: '100vw', maxWidth: '100vw', overflow: 'visible' }}
      >
        <div className="w-full overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-auto max-h-[90vh] object-contain"
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/homevideos.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Brand-themed gradient overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-heading/30 via-transparent to-transparent pointer-events-none" style={{ pointerEvents: 'none' }} />
      </section>

    
    </div>
  );
}