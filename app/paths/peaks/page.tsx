'use client';

import { Mountain, ArrowRight, Compass, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Mock useLanguage hook - replace with your actual context
type Language = 'en' | 'de';



// ===== HERO COMPONENT =====


// ===== PEAKS PAGE COMPONENT =====
const PeaksPage = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const translations = {
    en: {
      title: 'The Peaks',
      subtitle: 'Some journeys are measured in miles. Others in meters climbed. These are the ones that lift you higher and change the way you see, far beyond the summit.',
      intro1: 'From the long, steady rise of Kilimanjaro,',
      intro2: 'to the quiet, forested slopes of Mount Meru,',
      intro3: 'to the rolling green hills of the Usambara Mountains',
      intro4: 'each peak has its own rhythm, its own reward, and its own way of showing you the horizon.',
      learnMore: 'Learn More',
      peaks: [
        {
          title: 'The Ascent',
          subtitle: 'Kilimanjaro',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
          description: 'Some challenges are not about proving anything. They are about finding out who you are when the air thins and each step asks for all of you.',
          details: 'The Ascent is not one single path. There are many ways to climb, each with its own pace, its own landscapes, its own rhythm. Together, we choose the route that fits you best.'
        },
        {
          title: 'The Quiet Peak',
          subtitle: 'Mount Meru',
          image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=500&fit=crop',
          description: 'Tanzania\'s second-highest mountain. A climb that is shorter, less crowded, yet equally rewarding.',
          details: 'Over four days, the trail takes you from lush forest through alpine meadows to a sharp volcanic ridge. It\'s a journey for those who want challenge and beauty without the rush.'
        },
        {
          title: 'The Green Path',
          subtitle: 'Usambara Mountains',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop',
          description: 'A journey through winding trails that lead past terraced hills, small villages, and forests alive with bird calls.',
          details: 'Days are spent walking or cycling at a gentle pace, taking time to meet the people who live along the way. Includes 2 days in the protected Mikomazi area.'
        }
      ]
    },
    de: {
      title: 'Die Gipfel',
      subtitle: 'Einige Reisen werden in Meilen gemessen. Andere in erklommenen Metern. Dies sind diejenigen, die dich höher bringen und deine Sicht verändern, weit über den Gipfel hinaus.',
      intro1: 'Vom langen, stetigen Aufstieg des Kilimandscharo,',
      intro2: 'zu den stillen, bewaldeten Hängen des Mount Meru,',
      intro3: 'zu den sanften grünen Hügeln der Usambara-Berge',
      intro4: 'jeder Gipfel hat seinen eigenen Rhythmus, seinen eigenen Lohn und seine eigene Art, dir den Horizont zu zeigen.',
      learnMore: 'Mehr erfahren',
      peaks: [
        {
          title: 'Der Aufstieg',
          subtitle: 'Kilimandscharo',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
          description: 'Manche Herausforderungen geht es nicht um Beweise. Es geht darum herauszufinden, wer du bist, wenn die Luft dünn wird und jeder Schritt alles von dir verlangt.',
          details: 'Der Aufstieg ist nicht ein einzelner Pfad. Es gibt viele Wege zum Klettern, jeder mit seinem eigenen Tempo, seinen eigenen Landschaften, seinem eigenen Rhythmus. Gemeinsam wählen wir die Route, die zu dir passt.'
        },
        {
          title: 'Der Stille Gipfel',
          subtitle: 'Mount Meru',
          image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=500&fit=crop',
          description: 'Tanzanias zweithöchster Berg. Ein Aufstieg, der kürzer, weniger überfüllt, aber ebenso lohnend ist.',
          details: 'Über vier Tage führt der Weg dich durch Laubwälder über alpine Wiesen zu einem scharfen Vulkangrat. Es ist eine Reise für diejenigen, die Herausforderung und Schönheit ohne Eile wollen.'
        },
        {
          title: 'Der Grüne Pfad',
          subtitle: 'Usambara-Berge',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop',
          description: 'Eine Reise durch gewundene Wege vorbei an Terrassenhügeln, kleinen Dörfern und Wäldern voller Vogelgesänge.',
          details: 'Die Tage verbringst du mit Wandern oder Radfahren in gemächlichem Tempo und nimmst dir Zeit, die Menschen kennenzulernen, die am Wegesrand leben. Umfasst 2 Tage im geschützten Mikomazi-Gebiet.'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-slate-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative h-screen bg-brand-heading flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=1200&fit=crop" 
            alt="Mountain peaks" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-heading/40 via-brand-heading/50 to-brand-heading/70" />
        </div>

        {/* Animated accent elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className={`relative z-10 text-center max-w-3xl px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-comfortaa text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-bold">
            {t.title}
          </h1>
          <p className="font-poppins text-lg md:text-xl text-white/95 leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose prose-lg font-poppins text-stone-700 text-center leading-relaxed space-y-3">
          <p className="text-lg">{t.intro1}</p>
          <p className="text-lg">{t.intro2}</p>
          <p className="text-lg">{t.intro3}</p>
          <p className="text-brand-primary font-semibold text-xl">
            {t.intro4}
          </p>
        </div>
      </div>

      {/* Peak Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {t.peaks.map((peak, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-brand-border overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary">
                <img 
                  src={peak.image} 
                  alt={peak.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-heading/60 via-transparent to-transparent" />
              </div>

              {/* Content Container */}
              <div className="p-8">
                <h3 className="font-comfortaa text-2xl text-brand-heading mb-2 font-bold">
                  {peak.title}
                </h3>
                <p className="font-poppins text-sm text-brand-primary mb-4 flex items-center gap-2 font-semibold">
                  <Mountain className="w-4 h-4" />
                  {peak.subtitle}
                </p>

                <p className="font-poppins text-stone-700 leading-relaxed mb-4 text-sm">
                  {peak.description}
                </p>

                <p className="font-poppins text-stone-600 text-sm leading-relaxed mb-6">
                  {peak.details}
                </p>

             
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Export both components
export default function Page() {
  return (
    <div>
  
      <PeaksPage />
    </div>
  );
}