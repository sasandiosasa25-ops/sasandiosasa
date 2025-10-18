'use client';

import { ArrowRight, MapPin, Heart, Compass } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useState } from 'react';

export default function Services() {
  const { language } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white via-brand-menu-hover to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="inline-block border-2 border-brand-primary/30 bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-3 mb-6 sm:mb-8 rounded-full shadow-sm">
            <span className="text-brand-heading/70 font-semibold text-xs tracking-[0.25em] uppercase">{t.whatWeOffer}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-[0.9] tracking-tighter bg-gradient-to-br from-brand-primary via-brand-heading to-brand-secondary bg-clip-text text-transparent">
            {t.experiences}
          </h2>
          
          {/* Decorative underline */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent rounded-full" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {/* Safaris Card */}
          <Card 
            className="group bg-white border-2 border-brand-border hover:border-brand-primary/50 transition-all duration-500 overflow-hidden hover:shadow-2xl flex flex-col"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-64 sm:h-72 lg:h-56 xl:h-64 overflow-hidden flex-shrink-0">
              <img 
                src="/simbas1.jpeg" 
                alt="Safaris"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-heading/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <CardHeader className="p-6 sm:p-8 lg:p-6 xl:p-8 flex-grow">
              <CardTitle className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-brand-heading mb-3 sm:mb-4 font-black leading-tight tracking-tight">
                <span className="inline-block relative">
                  <span className="text-brand-primary bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent font-comfortaa tracking-wide">SasaNdioSasa</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary/40 to-transparent"></span>
                </span>
                {' '}
                <span className="text-brand-heading">{t.safaris}</span>
              </CardTitle>
              <CardDescription className="text-sm sm:text-base lg:text-sm xl:text-base text-brand-heading/70 leading-relaxed">
                {t.safarisDesc}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6 sm:p-8 lg:p-6 xl:p-8 pt-0">
              <Button 
                asChild 
                className="w-full group/btn relative bg-brand-primary hover:bg-brand-secondary text-white px-6 py-5 text-sm sm:text-base lg:text-sm xl:text-base font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg overflow-hidden"
              >
                <Link href="/paths/safaris">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center">
                    {t.explore}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Inner Safari Card */}
          <Card 
            className="group bg-white border-2 border-brand-border hover:border-brand-primary/50 transition-all duration-500 overflow-hidden hover:shadow-2xl flex flex-col"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-64 sm:h-72 lg:h-56 xl:h-64 overflow-hidden flex-shrink-0">
              <img 
                src="/maa1.jpeg" 
                alt="Inner Safari"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-heading/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <CardHeader className="p-6 sm:p-8 lg:p-6 xl:p-8 flex-grow">
              <CardTitle className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-brand-heading mb-3 sm:mb-4 font-black leading-tight tracking-tight">
                <span className="inline-block relative">
                  <span className="text-brand-primary bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent font-comfortaa tracking-wide">SasaNdioSasa</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary/40 to-transparent"></span>
                </span>
                {' '}
                <span className="text-brand-heading">{t.innerSafari}</span>
              </CardTitle>
              <CardDescription className="text-sm sm:text-base lg:text-sm xl:text-base text-brand-heading/70 leading-relaxed">
                {t.innerSafariDesc}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6 sm:p-8 lg:p-6 xl:p-8 pt-0">
              <Button 
                asChild 
                className="w-full group/btn relative bg-brand-primary hover:bg-brand-secondary text-white px-6 py-5 text-sm sm:text-base lg:text-sm xl:text-base font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg overflow-hidden"
              >
                <Link href="/experience/inner-safari">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center">
                    {t.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Retreats Card */}
          <Card 
            className="group bg-white border-2 border-brand-border hover:border-brand-primary/50 transition-all duration-500 overflow-hidden hover:shadow-2xl flex flex-col"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-64 sm:h-72 lg:h-56 xl:h-64 overflow-hidden flex-shrink-0">
              <img 
                src="/hema1.jpeg" 
                alt="Retreats"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-heading/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <CardHeader className="p-6 sm:p-8 lg:p-6 xl:p-8 flex-grow">
              <CardTitle className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-brand-heading mb-3 sm:mb-4 font-black leading-tight tracking-tight">
                <span className="inline-block relative">
                  <span className="text-brand-primary bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent font-comfortaa tracking-wide">SasaNdioSasa</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary/40 to-transparent"></span>
                </span>
                {' '}
                <span className="text-brand-heading">{t.retreats}</span>
              </CardTitle>
              <CardDescription className="text-sm sm:text-base lg:text-sm xl:text-base text-brand-heading/70 leading-relaxed">
                {t.retreatsDesc}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-6 sm:p-8 lg:p-6 xl:p-8 pt-0">
              <Button 
                asChild 
                className="w-full group/btn relative bg-brand-primary hover:bg-brand-secondary text-white px-6 py-5 text-sm sm:text-base lg:text-sm xl:text-base font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg overflow-hidden"
              >
                <Link href="/experience/retreat">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center">
                    {t.discover}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
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