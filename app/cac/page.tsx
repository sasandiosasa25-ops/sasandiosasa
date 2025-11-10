'use client';

import { Music, Palette, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';

type Language = 'en' | 'de';

interface Content {
  title: string;
  subtitle: string;
  description: string;
  values: {
    art: string;
    heritage: string;
    future: string;
  };
  cta: string;
  button: string;
}

type ContentMap = Record<Language, Content>;

export default function CACPage() {
  const { language } = useLanguage();

  const content: ContentMap = {
    en: {
      title: "Cultural Arts Centre",
      subtitle: "The Living Pulse of Tanzanian Culture",
      description: "Our collaboration with the Cultural Arts Centre (CAC) is built on deep respect for what they represent: the living pulse of Tanzanian culture. CAC is a place where art, music, and movement become language. Where heritage is not preserved behind glass, but carried forward with dignity and heart. It is a home for those who shape tomorrow while honouring the stories of those who came before.",
      values: {
        art: "Art, music, and movement become language",
        heritage: "Heritage carried forward with dignity and heart",
        future: "Shaping tomorrow while honouring the past"
      },
      cta: "Dive into our packages and experience yourself.",
      button: "Explore Packages"
    },
    de: {
      title: "Cultural Arts Centre",
      subtitle: "Der lebendige Puls der tansanischen Kultur",
      description: "Unsere Zusammenarbeit mit dem Cultural Arts Centre (CAC) basiert auf tiefem Respekt für das, was es repräsentiert: den lebendigen Puls der tansanischen Kultur. CAC ist ein Ort, an dem Kunst, Musik und Bewegung zur Sprache werden. Wo das Erbe nicht hinter Glas bewahrt, sondern mit Würde und Herz weitergetragen wird. Es ist eine Heimat für diejenigen, die die Zukunft gestalten und dabei die Geschichten derer ehren, die vor ihnen kamen.",
      values: {
        art: "Kunst, Musik und Bewegung werden zur Sprache",
        heritage: "Erbe mit Würde und Herz weitergetragen",
        future: "Die Zukunft gestalten und die Vergangenheit ehren"
      },
      cta: "Tauchen Sie ein in unsere Pakete und erleben Sie selbst.",
      button: "Pakete Erkunden"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-brand-bg-light">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-brand-primary mb-4 font-comfortaa">
              {t.title}
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-brand-heading font-semibold font-poppins italic">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Image Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="overflow-hidden shadow-2xl mb-8">
          <img
            src="/cac.jpeg"
            alt="African cultural dance performance"
            className="w-full h-[400px] md:h-[600px] object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-4 mb-6">
            <Music className="w-12 h-12 md:w-16 md:h-16 text-brand-primary flex-shrink-0" />
            <p className="text-lg md:text-2xl text-brand-heading font-poppins leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Art Value */}
          <div className="bg-white p-8 md:p-10 border-l-8 border-brand-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-primary flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg md:text-xl text-brand-heading font-poppins leading-relaxed">
                {t.values.art}
              </p>
            </div>
          </div>

          {/* Heritage Value */}
          <div className="bg-white p-8 md:p-10 border-l-8 border-brand-secondary shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-secondary flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg md:text-xl text-brand-heading font-poppins leading-relaxed">
                {t.values.heritage}
              </p>
            </div>
          </div>

          {/* Future Value */}
          <div className="bg-white p-8 md:p-10 border-l-8 border-brand-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-primary flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                <Music className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg md:text-xl text-brand-heading font-poppins leading-relaxed">
                {t.values.future}
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* Bottom Spacing */}
      <div className="h-16 md:h-24" />
    </div>
  );
}