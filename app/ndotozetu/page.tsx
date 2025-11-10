'use client';
import { useState } from 'react';
import { Heart, Leaf, Users, Globe, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type Language = 'en' | 'de';

interface Content {
  title: string;
  subtitle: string;
  intro: string;
  sections: {
    sustainability: {
      title: string;
      content: string;
    };
    awareness: {
      title: string;
      content: string;
    };
    community: {
      title: string;
      content: string;
    };
  };
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  learnMore: string;
}

type ContentMap = Record<Language, Content>;

export default function NdotoZetuPage() {
  const {language} = useLanguage();

  const content: ContentMap = {
    en: {
      title: "Ndoto Zetu",
      subtitle: "Every journey leaves a trace",
      intro: "With SasaNdioSasa, we work to make that trace a positive one for the land, for the people, and for the future.",
      sections: {
        sustainability: {
          title: "Sustainable Practices",
          content: "We use locally sourced ingredients, avoid single-use plastics, and develop sustainable concepts together with our Tanzanian partners."
        },
        awareness: {
          title: "Conscious Travel",
          content: "Impact also means awareness: understanding what it means to be a guest, a traveler, or a volunteer."
        },
        community: {
          title: "Lasting Impact",
          content: "Through projects like Ndoto Zetu, and through respectful exchange with local communities, our travelers are invited to be part of something that lasts beyond their own trip."
        }
      },
      ctaTitle: "Be Part of the Change",
      ctaText: "Ndoto Zetu brings together travelers, communities, and sustainable impact. Join us in creating meaningful connections that transform lives.",
      ctaButton: "Visit Ndoto Zetu",
      learnMore: "Learn more about our community projects"
    },
    de: {
      title: "Ndoto Zetu",
      subtitle: "Jede Reise hinterlässt eine Spur",
      intro: "Mit SasaNdioSasa arbeiten wir daran, diese Spur zu einer positiven für das Land, für die Menschen und für die Zukunft zu machen.",
      sections: {
        sustainability: {
          title: "Nachhaltige Praktiken",
          content: "Wir verwenden lokale Zutaten, vermeiden Einwegplastik und entwickeln nachhaltige Konzepte gemeinsam mit unseren tansanischen Partnern."
        },
        awareness: {
          title: "Bewusstes Reisen",
          content: "Impact bedeutet auch Bewusstsein: zu verstehen, was es bedeutet, Gast, Reisender oder Freiwilliger zu sein."
        },
        community: {
          title: "Nachhaltige Wirkung",
          content: "Durch Projekte wie Ndoto Zetu und durch respektvollen Austausch mit lokalen Gemeinschaften werden unsere Reisenden eingeladen, Teil von etwas zu sein, das über ihre eigene Reise hinaus Bestand hat."
        }
      },
      ctaTitle: "Sei Teil der Veränderung",
      ctaText: "Ndoto Zetu bringt Reisende, Gemeinschaften und nachhaltige Wirkung zusammen. Begleiten Sie uns dabei, bedeutungsvolle Verbindungen zu schaffen, die Leben verändern.",
      ctaButton: "Besuchen Sie Ndoto Zetu",
      learnMore: "Erfahren Sie mehr über unsere Gemeinschaftsprojekte"
    }
  };

  const t = content[language];

  const images = [
    {
      url: "/nz1.jpeg",
      alt: "African children smiling"
    },
    {
      url: "/nz2.jpeg",
      alt: "Community gathering"
    },
    {
      url: "/nz3.jpeg",
      alt: "Tanzanian landscape"
    },
    {
      url: "/nz4.jpeg",
      alt: "Sustainable practices"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg-light">
      {/* Language Switcher */}
    

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-primary/10 via-brand-bg-light to-brand-secondary/10 pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-brand-primary mb-6 font-comfortaa italic">
              {t.title}
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-brand-heading font-semibold mb-6 font-poppins">
              {t.subtitle}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-heading/80 max-w-4xl mx-auto leading-relaxed font-poppins">
              {t.intro}
            </p>
          </div>

         {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-heading/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Sustainability Section */}
          <div className="bg-gradient-to-br from-brand-primary/5 to-white p-8 md:p-10 border-l-8 border-brand-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-brand-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-heading font-comfortaa">
                {t.sections.sustainability.title}
              </h2>
            </div>
            <p className="text-base md:text-lg text-brand-heading/80 leading-relaxed font-poppins">
              {t.sections.sustainability.content}
            </p>
          </div>

          {/* Awareness Section */}
          <div className="bg-gradient-to-br from-white to-brand-secondary/5 p-8 md:p-10 border-l-8 border-brand-secondary shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-brand-secondary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-heading font-comfortaa">
                {t.sections.awareness.title}
              </h2>
            </div>
            <p className="text-base md:text-lg text-brand-heading/80 leading-relaxed font-poppins">
              {t.sections.awareness.content}
            </p>
          </div>

          {/* Community Section */}
          <div className="bg-gradient-to-br from-brand-primary/5 to-white p-8 md:p-10 border-l-8 border-brand-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-brand-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-heading font-comfortaa">
                {t.sections.community.title}
              </h2>
            </div>
            <p className="text-base md:text-lg text-brand-heading/80 leading-relaxed font-poppins">
              {t.sections.community.content}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 opacity-90" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-comfortaa">
            {t.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 font-poppins leading-relaxed">
            {t.ctaText}
          </p>
          <a
            href="https://ndotozetu.or.tz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-brand-primary hover:bg-brand-menu-hover px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>{t.ctaButton}</span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="mt-6 text-sm md:text-base opacity-75 font-poppins">
            {t.learnMore}
          </p>
        </div>
      </div>
    </div>
  );
}