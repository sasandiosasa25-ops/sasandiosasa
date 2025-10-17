'use client';

import { ArrowRight, MapPin, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Services() {
  const { language } = useLanguage();

  const translations = {
    en: {
      whatWeOffer: 'What We Offer',
      experiences: 'EXPERIENCES',
      culturalSafaris: 'Cultural Safaris',
      culturalSafarisDesc: 'Explore Tanzania\'s vast wilderness, from the Serengeti\'s endless plains to ancient baobabs in Tarangire, discovering nature\'s raw beauty and timeless rhythm.',
      explore: 'Explore',
      languageProgramsTitle: 'Language Programs',
      languageProgramsDesc: 'Learn English or German through immersive programs with native speakers, combining education with cultural practice and real-world conversation.',
      learnMore: 'Learn More',
    },
    de: {
      whatWeOffer: 'Was Wir Anbieten',
      experiences: 'ERLEBNISSE',
      culturalSafaris: 'Kultur-Safaris',
      culturalSafarisDesc: 'Erkunden Sie Tansanias weite Wildnis, von den endlosen Ebenen der Serengeti bis zu den uralten Baobabs in Tarangire, und entdecken Sie die raue Schönheit und zeitlose Rhythmus der Natur.',
      explore: 'Erkunden',
      languageProgramsTitle: 'Sprachprogramme',
      languageProgramsDesc: 'Lernen Sie Englisch oder Deutsch durch immersive Programme mit Muttersprachlern, die Bildung mit kultureller Praxis und realen Gesprächen verbinden.',
      learnMore: 'Mehr Erfahren',
    }
  };

  const t = translations[language];

  return (
    <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <div className="inline-block border border-white/20 px-6 py-2 mb-8">
            <span className="text-white/70 font-medium text-xs tracking-[0.2em] uppercase">{t.whatWeOffer}</span>
          </div>
          
          <h2 className="text-[4rem] md:text-[6rem] font-black mb-8 leading-[0.9] tracking-tighter">
            {t.experiences}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tours Card */}
          <Card className="group bg-stone-800 border-2 border-stone-700 hover:border-stone-500 transition-all duration-500 overflow-hidden">
            <CardHeader className="p-12">
              <div className="bg-white w-16 h-16 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
                <MapPin className="h-8 w-8 text-stone-900" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-5xl text-white mb-6 font-black leading-tight tracking-tight">
                {t.culturalSafaris}
              </CardTitle>
              <CardDescription className="text-xl text-stone-400 leading-relaxed font-light">
                {t.culturalSafarisDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-12 pt-0">
              <Button asChild className="group/btn bg-white hover:bg-stone-100 text-stone-900 px-10 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                <Link href="/destinations">
                  <span className="flex items-center">
                    {t.explore}
                    <ArrowRight className="ml-3 h-6 w-6 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Language Learning Card */}
          <Card className="group bg-stone-800 border-2 border-stone-700 hover:border-stone-500 transition-all duration-500 overflow-hidden">
            <CardHeader className="p-12">
              <div className="bg-white w-16 h-16 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
                <BookOpen className="h-8 w-8 text-stone-900" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-5xl text-white mb-6 font-black leading-tight tracking-tight">
                {t.languageProgramsTitle}
              </CardTitle>
              <CardDescription className="text-xl text-stone-400 leading-relaxed font-light">
                {t.languageProgramsDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-12 pt-0">
              <Button asChild className="group/btn bg-white hover:bg-stone-100 text-stone-900 px-10 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                <Link href="/language-learning">
                  <span className="flex items-center">
                    {t.learnMore}
                    <ArrowRight className="ml-3 h-6 w-6 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}