'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Compass, Users, Calendar, Headphones, MessageCircle, Mountain, Sparkles } from 'lucide-react';

const ExperiencePage = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const translations = {
    en: {
      title: 'Experience',
      subtitle: 'Journey Within, Guided by Tanzania',
      innerSafari: {
        id: 'inner-safari',
        title: 'Inner Safari',
        duration: '6 months',
        welcome: 'Welcome to SasaNdioSasa. An Inner Safari rooted in Tanzania and guided by the call to live now.',
        intro: 'SasaNdioSasa is an online experience space for people ready to reconnect with their inner strength through community, storytelling, music, visual language, and grounding.',
        guide: 'We will guide you like Safari Guides, not into the distance, but home to yourself.',
        expectTitle: 'What to expect',
        expectDesc: 'SasaNdioSasa is a 6-month journey, shaped by time, depth, and a rhythm that allows growth. Across six modules, we gently explore different inner qualities, inspired by elements, landscapes, and memories.',
        rhythmTitle: 'Your rhythm along the way',
        rhythmIntro: 'To give you spaciousness while staying connected, SasaNdioSasa follows a clear rhythm:',
        rhythmItems: [
          {
            icon: 'video',
            title: 'Every two weeks',
            description: 'Live Guiding Session via Zoom (approx. 75 minutes) – A space to feel, connect, and experience together'
          },
          {
            icon: 'sunrise',
            title: 'Every week',
            description: 'Morning Impulse (audio or video), a thought, a sound, an image, or a question to walk with'
          },
          {
            icon: 'message',
            title: 'In between',
            description: 'Mini reminders or voice notes, light and simple, like a breath during the day'
          },
          {
            icon: 'community',
            title: 'Community Space',
            description: 'Connection and reflection in a protected group (e.g., private Facebook group), join as much or as little as you like.'
          }
        ],
        closing: 'The Inner Safari is a space. You are welcome to arrive, guided by the wish to connect with yourself and the curiosity to feel the ground beneath your feet when you truly pause.',
        moreInfo: 'More information loading soon',
        durationDesc: 'A six-month guided journey across six modules, paced for steady, lasting growth.'
      },
      retreat: {
        id: 'retreat',
        title: 'Retreat',
        duration: 'Several days (biannual)',
        intro: 'Twice per year, we open the space for a retreat that goes deeper than any single journey. It is an invitation for those who have travelled with us before, joined a SasaNdioSasa program – and for those who are ready to truly meet Tanzania with all its diversity and wisdom.',
        description: 'These days weave together connection, reflection, and shared experiences with local partners and landscapes. It is a meeting point between nature, culture, and personal growth – with time to explore, to create, and to simply be.',
        focus: 'Each retreat has its own focus, shaped in collaboration with experienced facilitators from within Tanzania and beyond.'
      }
    },
    de: {
      title: 'Erfahrung',
      subtitle: 'Reise nach Innen, Geleitet von Tansania',
      innerSafari: {
        id: 'inner-safari',
        title: 'Innere Safari',
        duration: '6 Monate',
        welcome: 'Willkommen bei SasaNdioSasa. Eine Innere Safari, verwurzelt in Tansania und geleitet vom Ruf, jetzt zu leben.',
        intro: 'SasaNdioSasa ist ein Online-Erfahrungsraum für Menschen, die bereit sind, sich durch Gemeinschaft, Geschichtenerzählen, Musik, visuelle Sprache und Erdung wieder mit ihrer inneren Stärke zu verbinden.',
        guide: 'Wir werden Sie wie Safari-Guides führen, nicht in die Ferne, sondern nach Hause zu sich selbst.',
        expectTitle: 'Was Sie erwartet',
        expectDesc: 'SasaNdioSasa ist eine 6-monatige Reise, geprägt von Zeit, Tiefe und einem Rhythmus, der Wachstum ermöglicht. Über sechs Module erforschen wir sanft verschiedene innere Qualitäten, inspiriert von Elementen, Landschaften und Erinnerungen.',
        rhythmTitle: 'Ihr Rhythmus auf dem Weg',
        rhythmIntro: 'Um Ihnen Raum zu geben und gleichzeitig verbunden zu bleiben, folgt SasaNdioSasa einem klaren Rhythmus:',
        rhythmItems: [
          {
            icon: 'video',
            title: 'Alle zwei Wochen',
            description: 'Live Guiding Session über Zoom (ca. 75 Minuten) – Ein Raum zum Fühlen, Verbinden und gemeinsamen Erleben'
          },
          {
            icon: 'sunrise',
            title: 'Jede Woche',
            description: 'Morgen-Impuls (Audio oder Video), ein Gedanke, ein Klang, ein Bild oder eine Frage zum Mitnehmen'
          },
          {
            icon: 'message',
            title: 'Zwischendurch',
            description: 'Mini-Erinnerungen oder Sprachnachrichten, leicht und einfach, wie ein Atemzug während des Tages'
          },
          {
            icon: 'community',
            title: 'Gemeinschaftsraum',
            description: 'Verbindung und Reflexion in einer geschützten Gruppe (z.B. private Facebook-Gruppe), schließen Sie sich so viel oder so wenig an, wie Sie möchten.'
          }
        ],
        closing: 'Die Innere Safari ist ein Raum. Sie sind willkommen anzukommen, geleitet vom Wunsch, sich mit sich selbst zu verbinden und der Neugier, den Boden unter Ihren Füßen zu spüren, wenn Sie wirklich innehalten.',
        moreInfo: 'Weitere Informationen werden bald geladen',
        durationDesc: 'Eine sechsmonatige Reise mit sechs Modulen, gestaltet für stetiges Wachstum.'
      },
      retreat: {
        id: 'retreat',
        title: 'Rückzug',
        duration: 'Mehrere Tage, zweimal jährlich',
        intro: 'Zweimal pro Jahr öffnen wir den Raum für einen Rückzug, der tiefer geht als jede einzelne Reise. Es ist eine Einladung für diejenigen, die bereits mit uns gereist sind, an einem SasaNdioSasa-Programm teilgenommen haben – und für diejenigen, die bereit sind, Tansania mit all seiner Vielfalt und Weisheit wirklich zu begegnen.',
        description: 'Diese Tage verweben Verbindung, Reflexion und gemeinsame Erfahrungen mit lokalen Partnern und Landschaften. Es ist ein Treffpunkt zwischen Natur, Kultur und persönlichem Wachstum – mit Zeit zum Erkunden, Erschaffen und einfach Sein.',
        focus: 'Jeder Rückzug hat seinen eigenen Fokus, gestaltet in Zusammenarbeit mit erfahrenen Moderatoren aus Tansania und darüber hinaus.'
      }
    }
  };

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
      {/* Hero Section */}
      <div className="relative h-[55vh] md:h-[65vh] bg-gradient-to-br from-brand-heading via-brand-secondary to-brand-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop" 
            alt="Tanzania landscape" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className={`relative z-10 text-center max-w-4xl px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-comfortaa text-6xl md:text-7xl lg:text-8xl text-white mb-6 font-black tracking-tight">
            <span className="italic text-white">{t.title}</span>
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-white/95 font-semibold">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Inner Safari Section */}
      <div id={t.innerSafari.id} className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-brand-primary rounded-full" />
              <h2 className="font-comfortaa text-4xl md:text-5xl text-brand-heading font-bold">
                <span className="italic text-brand-primary">SasaNdioSasa</span> {t.innerSafari.title}
              </h2>
              <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold">
                  {t.innerSafari.duration}
                </span>
                <p className="font-poppins text-base text-stone-700 leading-relaxed max-w-3xl">
                  {t.innerSafari.durationDesc}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="font-poppins text-xl text-brand-heading leading-relaxed font-semibold">
                {t.innerSafari.welcome}
              </p>
              
              <p className="font-poppins text-lg text-stone-700 leading-relaxed">
                {t.innerSafari.intro}
              </p>

              <p className="font-poppins text-lg text-stone-700 leading-relaxed italic">
                {t.innerSafari.guide}
              </p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-brand-border shadow-sm mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="w-6 h-6 text-brand-primary" />
              <h3 className="font-comfortaa text-3xl text-brand-heading font-bold">
                {t.innerSafari.expectTitle}
              </h3>
            </div>
            <p className="font-poppins text-lg text-stone-700 leading-relaxed">
              {t.innerSafari.expectDesc}
            </p>
          </div>

          {/* Your Rhythm */}
          <div className="mb-12">
            <div className="mb-8">
              <h3 className="font-comfortaa text-3xl text-brand-heading font-bold mb-4">
                {t.innerSafari.rhythmTitle}
              </h3>
              <p className="font-poppins text-lg text-stone-700 leading-relaxed">
                {t.innerSafari.rhythmIntro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.innerSafari.rhythmItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`group bg-white rounded-xl p-8 border border-brand-border hover:border-brand-primary transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors duration-300">
                    <div className="text-brand-primary">
                      {getIcon(item.icon)}
                    </div>
                  </div>
                  <h4 className="font-comfortaa text-xl text-brand-heading font-bold mb-3">
                    {item.title}
                  </h4>
                  <p className="font-poppins text-stone-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Message */}
          <div className="bg-gradient-to-r from-brand-menu-hover to-white rounded-2xl p-8 md:p-12 border border-brand-border mb-8">
            <p className="font-poppins text-lg text-stone-700 leading-relaxed mb-6">
              {t.innerSafari.closing}
            </p>
            <p className="font-poppins text-sm text-brand-primary font-semibold uppercase tracking-wider">
              {t.innerSafari.moreInfo}
            </p>
          </div>
        </div>
      </div>

      {/* Retreat Section */}
      <div id={t.retreat.id} className="scroll-mt-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-brand-primary rounded-full" />
              <h2 className="font-comfortaa text-4xl md:text-5xl text-brand-heading font-bold">
                <span className="italic text-brand-primary">SasaNdioSasa</span> {t.retreat.title}
              </h2>
              <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold">
                  {t.retreat.duration}
                </span>
                <p className="font-poppins text-base text-stone-700 leading-relaxed max-w-3xl">
                  {t.retreat.durationDesc}
                </p>
              </div>
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