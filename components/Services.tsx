'use client';

import { ArrowRight, MapPin, Heart, Compass } from 'lucide-react';
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
      safaris: 'Safaris',
      safarisDesc: 'Explore Tanzania\'s vast wilderness, from the Serengeti\'s endless plains to ancient baobabs in Tarangire, discovering nature\'s raw beauty and timeless rhythm.',
      innerSafari: 'Inner Safari',
      innerSafariDesc: 'Journey inward through reflection and silence. Connect with yourself while surrounded by Tanzania\'s landscapes, creating space for clarity and renewal.',
      retreats: 'Retreats',
      retreatsDesc: 'Immersive experiences that restore balance, combining nature\'s wisdom with personal growth, leadership development, and sustainable living.',
      explore: 'Explore',
      learnMore: 'Learn More',
      discover: 'Discover',
    },
    de: {
      whatWeOffer: 'Was Wir Anbieten',
      experiences: 'ERLEBNISSE',
      safaris: 'Safaris',
      safarisDesc: 'Erkunden Sie Tansanias weite Wildnis, von den endlosen Ebenen der Serengeti bis zu den uralten Baobabs in Tarangire, und entdecken Sie die raue Schönheit und zeitlose Rhythmus der Natur.',
      innerSafari: 'Innere Safari',
      innerSafariDesc: 'Reise nach innen durch Reflexion und Stille. Verbinde dich mit dir selbst, umgeben von Tansanias Landschaften, und schaffe Raum für Klarheit und Erneuerung.',
      retreats: 'Rückzüge',
      retreatsDesc: 'Immersive Erlebnisse, die das Gleichgewicht wiederherstellen, indem sie die Weisheit der Natur mit persönlichem Wachstum, Führungsentwicklung und nachhaltigem Leben verbinden.',
      explore: 'Erkunden',
      learnMore: 'Mehr Erfahren',
      discover: 'Entdecken',
    }
  };

  const t = translations[language];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block border border-white/20 px-4 sm:px-6  py-2 mb-6 sm:mb-8">
            <span className="text-white/70 font-medium text-xs tracking-[0.2em] uppercase">{t.whatWeOffer}</span>
          </div>
          
          <h2 className="text-[2.5rem] px-4 sm:text-[4rem] md:text-[6rem] font-black mb-6 sm:mb-8 leading-[0.9] tracking-tighter break-words">
            {t.experiences}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Safaris Card */}
          <Card className="group bg-stone-800 border-2 border-stone-700 hover:border-stone-500 transition-all duration-500 overflow-hidden">
            <div className="relative w-full h-96 sm:h-96 md:h-94 overflow-hidden">
              <img 
                src="/simbas1.jpeg" 
                alt="Safaris"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

            </div>
            <CardHeader className="p-8 sm:p-10 md:p-12">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 font-black leading-tight tracking-tight break-words">
                {t.safaris}
              </CardTitle>
              <CardDescription className="text-base sm:text-lg md:text-xl text-stone-400 leading-relaxed font-light">
                {t.safarisDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 sm:p-10 md:p-12 pt-0">
              <Button asChild className="w-full sm:w-auto group/btn bg-white hover:bg-stone-100 text-stone-900 px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg transform hover:scale-105 transition-all duration-300">
                <Link href="/paths/safaris">
                  <span className="flex items-center justify-center">
                    {t.explore}
                    <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Inner Safari Card */}
          <Card className="group bg-stone-800 border-2 border-stone-700 hover:border-stone-500 transition-all duration-500 overflow-hidden">
            <div className="relative w-full h-96 sm:h-96 md:h-96 overflow-hidden ">
              <img 
                src="/maa1.jpeg" 
                alt="Inner Safari"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
                         </div>
            <CardHeader className="p-8 sm:p-10 md:p-12">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 font-black leading-tight tracking-tight break-words">
                {t.innerSafari}
              </CardTitle>
              <CardDescription className="text-base sm:text-lg md:text-xl text-stone-400 leading-relaxed font-light">
                {t.innerSafariDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 sm:p-10 md:p-12 pt-0">
              <Button asChild className="w-full sm:w-auto group/btn bg-white hover:bg-stone-100 text-stone-900 px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg transform hover:scale-105 transition-all duration-300">
                <Link href="/experience/inner-safari">
                  <span className="flex items-center justify-center">
                    {t.learnMore}
                    <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Retreats Card */}
          <Card className="group bg-stone-800 border-2 border-stone-700 hover:border-stone-500 transition-all duration-500 overflow-hidden">
            <div className="relative w-full h-96 sm:h-96 md:h-96 overflow-hidden">
              <img 
                src="/hema1.jpeg" 
                alt="Retreats"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
            </div>
            <CardHeader className="p-8 sm:p-10 md:p-12">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 font-black leading-tight tracking-tight break-words">
                {t.retreats}
              </CardTitle>
              <CardDescription className="text-base sm:text-lg md:text-xl text-stone-400 leading-relaxed font-light">
                {t.retreatsDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 sm:p-10 md:p-12 pt-0">
              <Button asChild className="w-full sm:w-auto group/btn bg-white hover:bg-stone-100 text-stone-900 px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg transform hover:scale-105 transition-all duration-300">
                <Link href="/experience/retreat">
                  <span className="flex items-center justify-center">
                    {t.discover}
                    <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover/btn:translate-x-1 transition-transform" />
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