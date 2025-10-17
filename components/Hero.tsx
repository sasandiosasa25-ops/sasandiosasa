'use client';

import { ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  const { language } = useLanguage();

  const translations = {
    en: {
      experienceTanzania: 'Experience Tanzania',
      heroTitle: 'TANZANIA',
      heroSubtitle: 'Where vast landscapes meet profound stillness',
      exploreDestinations: 'Explore Destinations',
      languagePrograms: 'Language Programs',
      years: 'YEARS',
      travelers: 'TRAVELERS',
      destinations: 'DESTINATIONS',
    },
    de: {
      experienceTanzania: 'Erleben Sie Tansania',
      heroTitle: 'TANSANIA',
      heroSubtitle: 'Wo weite Landschaften auf tiefe Stille treffen',
      exploreDestinations: 'Reiseziele Erkunden',
      languagePrograms: 'Sprachprogramme',
      years: 'JAHRE',
      travelers: 'REISENDE',
      destinations: 'REISEZIELE',
    }
  };

  const t = translations[language];

  return (
    <section className="relative min-h-screen bg-stone-900 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/95 via-stone-800/90 to-stone-900/95" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10 w-full">
        <div className="max-w-6xl">
          <div className="mb-16">
            <div className="inline-block border border-white/20 px-8 py-3 mb-12">
              <span className="text-white/70 font-medium text-sm tracking-[0.2em] uppercase">{t.experienceTanzania}</span>
            </div>
            
            <h1 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-black text-white mb-6 leading-[0.85] tracking-tighter">
              {t.heroTitle}
            </h1>
            
            <p className="text-2xl md:text-3xl text-stone-400 mb-16 leading-relaxed font-light max-w-3xl">
              {t.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button asChild size="lg" className="group bg-stone-100 text-stone-900 hover:bg-white px-12 py-7 text-xl transform hover:scale-105 transition-all duration-300">
                <Link href="/destinations">
                  <span className="flex items-center">
                    {t.exploreDestinations}
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group border-2 border-white/30 bg-transparent text-white hover:bg-white/10 px-12 py-7 text-xl">
                <Link href="/language-learning">
                  <span className="flex items-center">
                    {t.languagePrograms}
                    <BookOpen className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  </span>
                </Link>
              </Button>
            </div>
            
            <div className="flex gap-16 pt-12 border-t border-white/10">
              <div>
                <div className="text-5xl font-black text-white mb-1">15+</div>
                <div className="text-stone-500 font-medium tracking-wide text-sm">{t.years}</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-1">500+</div>
                <div className="text-stone-500 font-medium tracking-wide text-sm">{t.travelers}</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-1">12</div>
                <div className="text-stone-500 font-medium tracking-wide text-sm">{t.destinations}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}