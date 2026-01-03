'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Compass, Users, Calendar, Headphones, MessageCircle, Mountain, Sparkles } from 'lucide-react';

// Add the translations object here
const translations: Record<string, any> = {
  en: {
    title: 'Experience',
    subtitle: 'A journey of growth, connection, and discovery.',
    innerSafari: {
      id: 'inner-safari',
      title: 'Inner Safari',
      duration: '6 months, 6 modules',
      durationDesc: 'A six-month journey with six modules, designed for steady growth.',
      welcome: 'Welcome to the Inner Safari, a space to arrive, guided by the desire to connect with yourself and the curiosity to feel the ground beneath your feet when you truly pause.',
      intro: 'This is a journey for those ready to explore their inner landscapes, grow, and connect with others on a similar path.',
      guide: 'You will be guided by experienced facilitators and supported by a community of fellow travelers.',
      expectTitle: 'What to Expect',
      expectDesc: 'Inspiring sessions, reflective practices, and opportunities for deep connection.',
      rhythmTitle: 'Your Rhythm',
      rhythmIntro: 'Each module brings a new focus, blending learning, practice, and community.',
      rhythmItems: [
        { icon: 'video', title: 'Live Sessions', description: 'Interactive group sessions led by facilitators.' },
        { icon: 'sunrise', title: 'Morning Practices', description: 'Start your day with intention and clarity.' },
        { icon: 'message', title: 'Reflection', description: 'Journaling and sharing insights.' },
        { icon: 'community', title: 'Community', description: 'Connect with others and build lasting relationships.' },
      ],
      closing: 'The Inner Safari is a space. You are welcome to arrive, guided by the desire to connect with yourself and the curiosity to feel the ground beneath your feet when you truly pause.',
      moreInfo: 'More information coming soon'
    },
    retreat: {
      id: 'retreat',
      title: 'Retreat',
      duration: 'Several days, twice a year',
      durationDesc: 'A multi-day, twice-yearly experience for deeper connection and growth.',
      intro: 'Twice a year, we open the space for a retreat that goes deeper than any single journey. It is an invitation for those who have already traveled with us, participated in a SasaNdioSasa program – and for those ready to truly encounter Tanzania in all its diversity and wisdom.',
      description: 'These days weave together connection, reflection, and shared experiences with local partners and landscapes. It is a meeting point between nature, culture, and personal growth – with time to explore, create, and simply be.',
      focus: 'Each retreat has its own focus, designed in collaboration with experienced facilitators from Tanzania and beyond.'
    }
  },
  de: {
    title: 'Erfahrung',
    subtitle: 'Eine Reise des Wachstums, der Verbindung und der Entdeckung.',
    innerSafari: {
      id: 'innere-safari',
      title: 'Innere Safari',
      duration: '6 Monate, 6 Module',
      durationDesc: 'Eine sechsmonatige Reise mit sechs Modulen, gestaltet für stetiges Wachstum.',
      welcome: 'Willkommen zur Inneren Safari, einem Raum zum Ankommen, geleitet vom Wunsch, sich mit sich selbst zu verbinden und der Neugier, den Boden unter den Füßen zu spüren, wenn man wirklich innehält.',
      intro: 'Dies ist eine Reise für diejenigen, die bereit sind, ihre inneren Landschaften zu erkunden, zu wachsen und sich mit anderen auf einem ähnlichen Weg zu verbinden.',
      guide: 'Du wirst von erfahrenen Moderator:innen begleitet und von einer Gemeinschaft von Mitreisenden unterstützt.',
      expectTitle: 'Was dich erwartet',
      expectDesc: 'Inspirierende Sitzungen, reflektierende Praktiken und Möglichkeiten für tiefe Verbindung.',
      rhythmTitle: 'Dein Rhythmus',
      rhythmIntro: 'Jedes Modul bringt einen neuen Fokus, der Lernen, Praxis und Gemeinschaft verbindet.',
      rhythmItems: [
        { icon: 'video', title: 'Live-Sitzungen', description: 'Interaktive Gruppensitzungen mit Moderator:innen.' },
        { icon: 'sunrise', title: 'Morgenpraxis', description: 'Starte deinen Tag mit Intention und Klarheit.' },
        { icon: 'message', title: 'Reflexion', description: 'Journaling und Teilen von Erkenntnissen.' },
        { icon: 'community', title: 'Gemeinschaft', description: 'Vernetze dich mit anderen und baue dauerhafte Beziehungen auf.' },
      ],
      closing: 'Die Innere Safari ist ein Raum. Sie sind willkommen anzukommen, geleitet vom Wunsch, sich mit sich selbst zu verbinden und der Neugier, den Boden unter Ihren Füßen zu spüren, wenn Sie wirklich innehalten.',
      moreInfo: 'Weitere Informationen werden bald geladen'
    },
    retreat: {
      id: 'retreat',
      title: 'Rückzug',
      duration: 'Mehrere Tage, zweimal jährlich',
      durationDesc: 'Ein mehrtägiges, zweimal jährlich stattfindendes Erlebnis für tiefere Verbindung und Wachstum.',
      intro: 'Zweimal pro Jahr öffnen wir den Raum für einen Rückzug, der tiefer geht als jede einzelne Reise. Es ist eine Einladung für diejenigen, die bereits mit uns gereist sind, an einem SasaNdioSasa-Programm teilgenommen haben – und für diejenigen, die bereit sind, Tansania mit all seiner Vielfalt und Weisheit wirklich zu begegnen.',
      description: 'Diese Tage verweben Verbindung, Reflexion und gemeinsame Erfahrungen mit lokalen Partnern und Landschaften. Es ist ein Treffpunkt zwischen Natur, Kultur und persönlichem Wachstum – mit Zeit zum Erkunden, Erschaffen und einfach Sein.',
      focus: 'Jeder Rückzug hat seinen eigenen Fokus, gestaltet in Zusammenarbeit mit erfahrenen Moderatoren aus Tansania und darüber hinaus.'
    }
  }
};

// Define the ExperiencePage component

const ExperiencePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const { language } = useLanguage();
  const t = translations[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'video':
        return <Calendar className="w-8 h-8" />;
      case 'sunrise':
        return <Sparkles className="w-8 h-8" />;
      case 'message':
        return <MessageCircle className="w-8 h-8" />;
      case 'community':
        return <Users className="w-8 h-8" />;
      default:
        return <Compass className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Experience Title Full Background Section (no open space, larger image) */}
      <div
        className="relative flex items-center justify-center overflow-hidden w-full h-32 sm:h-40 md:h-48 lg:h-56"
        style={{
          backgroundImage: 'url(/experience11.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/30" style={{ zIndex: 1 }} />
        <div className="relative z-10 text-center w-full px-2 sm:px-4 flex flex-col items-center justify-center">
          <h1 className="font-comfortaa text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2 font-black tracking-tight drop-shadow-lg">
            <span className="italic text-white">{t.title}</span>
          </h1>
          <p className="font-poppins text-sm xs:text-base sm:text-lg md:text-xl text-white/95 font-semibold">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Hero Section removed: no extra open space or broken image */}

      {/* Inner Safari Section */}
      <div id={t.innerSafari.id} className="scroll-mt-20">
        <div className="max-w-2xl mx-auto px-3 py-10 flex flex-col gap-6">
          {/* Title and Duration */}
          <div className="flex flex-col gap-1 items-start">
            <h2 className="font-comfortaa text-3xl sm:text-4xl text-brand-heading font-bold">
              <span className="italic text-brand-primary">SasaNdioSasa</span> {t.innerSafari.title}
            </h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-1">
              {t.innerSafari.duration}
            </span>
            <p className="font-poppins text-xs sm:text-base text-stone-700 leading-relaxed mt-1">
              {t.innerSafari.durationDesc}
            </p>
          </div>

          {/* Welcome */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-sm">
            <p className="font-poppins text-lg text-brand-heading leading-relaxed font-semibold">
              {t.innerSafari.welcome}
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-sm">
            <p className="font-poppins text-base text-stone-700 leading-relaxed">
              {t.innerSafari.intro}
            </p>
          </div>

          {/* Guide (italic) */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-sm">
            <p className="font-poppins text-base text-stone-700 leading-relaxed italic mb-0">
              {t.innerSafari.guide}
            </p>
          </div>

          {/* What to Expect */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-5 h-5 text-brand-primary" />
              <h3 className="font-comfortaa text-2xl text-brand-heading font-bold">
                {t.innerSafari.expectTitle}
              </h3>
            </div>
            <p className="font-poppins text-base text-stone-700 leading-relaxed">
              {t.innerSafari.expectDesc}
            </p>
          </div>

          {/* Your Rhythm */}
          <div className="bg-white rounded-xl p-5 border border-brand-border shadow-sm">
            <h3 className="font-comfortaa text-2xl text-brand-heading font-bold mb-2">
              {t.innerSafari.rhythmTitle}
            </h3>
            <p className="font-poppins text-base text-stone-700 leading-relaxed mb-4">
              {t.innerSafari.rhythmIntro}
            </p>
            <div className="flex flex-col gap-4">
              {t.innerSafari.rhythmItems.map(
                (
                  item: { icon: string; title: string; description: string },
                  idx: number
                ) => (
                <div
                  key={idx}
                  className="flex gap-3 items-start bg-brand-primary/5 rounded-lg p-4"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mt-1">
                    <div className="text-brand-primary">
                      {getIcon(item.icon)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-comfortaa text-lg text-brand-heading font-bold mb-1">
                      {item.title}
                    </h4>
                    <p className="font-poppins text-stone-700 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Message */}
          <div className="bg-gradient-to-r from-brand-menu-hover to-white rounded-xl p-5 border border-brand-border">
            <p className="font-poppins text-base text-stone-700 leading-relaxed mb-3">
              {t.innerSafari.closing}
            </p>
            <p className="font-poppins text-xs text-brand-primary font-semibold uppercase tracking-wider">
              {t.innerSafari.moreInfo}
            </p>
          </div>
        </div>
      </div>

      {/* Retreat Section */}
      <div id={t.retreat.id} className="scroll-mt-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <div className="flex flex-col gap-1 items-start mb-8">
              <div className="w-12 h-1 bg-brand-primary rounded-full mb-2" />
              <h2 className="font-comfortaa text-3xl sm:text-4xl md:text-5xl text-brand-heading font-bold">
                <span className="italic text-brand-primary">SasaNdioSasa</span> {t.retreat.title}
              </h2>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-1">
                {t.retreat.duration}
              </span>
              <p className="font-poppins text-xs sm:text-base text-stone-700 leading-relaxed mt-1">
                {t.retreat.durationDesc}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative h-96 md:h-auto rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&h=1000&fit=crop" 
                alt="Retreat in Tanzania"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-heading/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="font-poppins text-lg text-stone-700 leading-relaxed">
                {t.retreat.intro}
              </p>

              <p className="font-poppins text-lg text-stone-700 leading-relaxed">
                {t.retreat.description}
              </p>

              <div className="bg-brand-menu-hover rounded-xl p-6 border border-brand-border">
                <p className="font-poppins text-lg text-stone-700 leading-relaxed italic">
                  {t.retreat.focus}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <Mountain className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="font-poppins text-sm text-stone-700 font-medium">
                    {language === 'en' ? 'Nature' : 'Natur'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="font-poppins text-sm text-stone-700 font-medium">
                    {language === 'en' ? 'Community' : 'Gemeinschaft'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="font-poppins text-sm text-stone-700 font-medium">
                    {language === 'en' ? 'Growth' : 'Wachstum'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <Compass className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="font-poppins text-sm text-stone-700 font-medium">
                    {language === 'en' ? 'Discovery' : 'Entdeckung'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-brand-heading text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-comfortaa text-4xl md:text-5xl mb-6 font-bold">
            <span className="italic">SasaNdioSasa</span>
          </h3>
          <p className="font-poppins text-xl md:text-2xl text-white/90 mb-4">
            {language === 'en' ? 'Your Time is Now' : 'Deine Zeit ist Jetzt'}
          </p>
          <p className="font-poppins text-lg text-white/80 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Ready to begin your journey? Connect with us to learn more about our upcoming experiences.'
              : 'Bereit, Ihre Reise zu beginnen? Kontaktieren Sie uns, um mehr über unsere kommenden Erfahrungen zu erfahren.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;