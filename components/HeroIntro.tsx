'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Play, Pause, ChevronDown } from 'lucide-react';

export default function HeroIntro() {
  const { language } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const translations = {
    en: {
      brand: 'SasaNdioSasa',
      headline: 'Now is your time.',
      brandIntro: 'Step into journeys through Tanzania, where safari becomes a space to reconnect.',
      subheadline: 'Wherever you are, whatever season you\'re in. Your moment is now.',
      quote: 'Maybe the answer is not in adding more. But in listening again to what was always there.',
      returnTitle: 'A Return',
      returnSubtitle: 'SasaNdioSasa is',
      returnLines: ['To rhythm', 'To silence', 'To presence'],
      movement: 'It is a movement that begins within.',
      conversation: 'A conversation without noise.',
      breath: 'A breath you didn\'t know you were holding.',
      closing: 'This is not about becoming someone new.',
      closingSub: 'It\'s about recognizing and growing from within.',
      scrollExplore: 'Scroll to explore'
    },
    de: {
      brand: 'SasaNdioSasa',
      headline: 'Jetzt ist deine Zeit.',
      brandIntro: 'Tauche ein in Reisen durch Tansania, wo Safari zu einem Raum wird, um sich wieder zu verbinden.',
      subheadline: 'Wo auch immer du bist, in welcher Jahreszeit auch immer. Dein Moment ist jetzt.',
      quote: 'Vielleicht liegt die Antwort nicht darin, mehr hinzuzufügen. Sondern darin, wieder auf das zu hören, was schon immer da war.',
      returnTitle: 'Eine Rückkehr',
      returnSubtitle: 'SasaNdioSasa ist',
      returnLines: ['Zum Rhythmus', 'Zur Stille', 'Zur Präsenz'],
      movement: 'Es ist eine Bewegung, die von innen beginnt.',
      conversation: 'Ein Gespräch ohne Lärm.',
      breath: 'Ein Atem, von dem du nicht wusstest, dass du ihn anhielst.',
      closing: 'Es geht nicht darum, jemand Neues zu werden.',
      closingSub: 'Es geht darum, von innen heraus zu erkennen und zu wachsen.',
      scrollExplore: 'Scrollen zum Erkunden'
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVideo = () => {
    if (videoRef) {
      if (isVideoPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Hero Section - Split Layout */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-menu-hover via-white to-brand-menu-hover" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="text-xs tracking-[0.3em] uppercase text-brand-primary/60 font-semibold mb-4">
                  Welcome to
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-comfortaa tracking-tight mb-6">
                  <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
                    {t.brand}
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-transparent rounded-full" />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-heading leading-tight">
                  {t.headline}
                </h2>
                <div className="w-full max-w-2xl">
                  <p
                    className="text-lg sm:text-xl md:text-2xl font-bold text-brand-primary bg-white/90 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-primary/10 rounded-xl px-6 py-4 mb-3 shadow-xl border-l-4 border-brand-primary/80 tracking-wide text-center"
                    style={{letterSpacing: '0.01em'}}
                  >
                    {t.brandIntro}
                  </p>
                </div>
                <p className="text-lg sm:text-xl text-brand-heading/70 leading-relaxed max-w-xl">
                  {t.subheadline}
                </p>
              </div>

              <div className="relative pt-8">
                <div className="absolute -left-4 top-8 w-1 h-full bg-gradient-to-b from-brand-primary/40 to-transparent rounded-full" />
                <blockquote className="pl-8 text-xl sm:text-2xl text-brand-primary/90 italic font-light leading-relaxed border-l-2 border-brand-primary/20">
                  {t.quote}
                </blockquote>
              </div>

              <div className="flex items-center gap-3 text-brand-heading/50 text-sm animate-bounce pt-4">
                <ChevronDown className="w-5 h-5" />
                <span>{t.scrollExplore}</span>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative lg:h-[600px] h-[400px] perspective-1000">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-3xl"
                style={{ transform: 'rotateZ(3deg)' }}
              />
              <div 
                className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-brand-border transition-transform duration-500 hover:rotate-0"
                style={{ transform: 'rotateZ(-2deg)' }}
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-menu-hover to-white flex items-center justify-center p-12">
                  <div className="text-center space-y-6" style={{ transform: 'rotateZ(2deg)' }}>
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg">
                      <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                        <span className="text-4xl font-black text-brand-primary font-comfortaa">NOW</span>
                      </div>
                    </div>
                    <p className="text-2xl font-light text-brand-heading/70 italic">Your moment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section - Compact & Elegant */}
      <div className="relative py-20 sm:py-32 bg-gradient-to-b from-white to-brand-menu-hover">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block px-6 py-2 bg-brand-primary/5 rounded-full border border-brand-primary/20 mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-brand-primary font-semibold">Watch</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-brand-heading">Experience the Journey</h3>
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-border hover:border-brand-primary/50 transition-all duration-500 aspect-video">
            <video
              ref={setVideoRef}
              className="w-full h-full object-cover"
              poster="/video-thumbnail.jpg"
              controls={false}
              onClick={toggleVideo}
            >
              <source src="/intro-video.mp4" type="video/mp4" />
            </video>
            
            {!isVideoPlaying && (
              <div className="absolute inset-0 bg-gradient-to-t from-brand-heading/60 via-brand-heading/10 to-transparent" />
            )}
            
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300"
              onClick={toggleVideo}
              style={{ opacity: isVideoPlaying ? 0 : 1, pointerEvents: isVideoPlaying ? 'none' : 'auto' }}
            >
              <button className="bg-white/95 hover:bg-white text-brand-primary rounded-full p-6 transform hover:scale-110 transition-all duration-300 shadow-xl">
                <Play className="w-10 h-10 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Message Section - Dynamic Grid Layout, Responsive Height & Proximity */}
      <div className="relative bg-white flex flex-col justify-center items-center py-14 sm:py-20 md:py-28 min-h-[80vh]">
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-12">
          {/* Return Statement */}
          <div className="mb-10 sm:mb-16 text-center">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="text-xs sm:text-sm tracking-[0.2em] uppercase text-brand-primary/60 font-semibold mb-2">
                {t.returnSubtitle}
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black">
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent font-comfortaa">
                  {t.returnTitle}
                </span>
              </h3>
            </div>
          </div>

          {/* Three Pillars Grid - closer on mobile, spaced on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
            {t.returnLines.map((line, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-white to-brand-menu-hover p-6 sm:p-8 rounded-2xl border-2 border-brand-border hover:border-brand-primary/50 transition-all duration-500 hover:shadow-xl flex flex-col items-center justify-center min-h-[120px]"
              >
                <div className="absolute top-3 right-3 text-4xl sm:text-6xl font-black text-brand-primary/5">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h4 className="text-2xl sm:text-3xl font-light text-brand-primary italic relative z-10 text-center">
                  {line}
                </h4>
              </div>
            ))}
          </div>

          {/* Movement Statements - stacked, closer on mobile */}
          <div className="flex flex-col gap-8 sm:gap-12 mb-10 sm:mb-16 w-full">
            <div className="max-w-2xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl text-brand-heading font-light leading-relaxed text-center sm:text-left">
                {t.movement}
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl text-brand-heading font-light leading-relaxed text-center sm:text-right">
                {t.conversation}
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl text-brand-heading font-light leading-relaxed text-center sm:text-left">
                {t.breath}
              </p>
            </div>
          </div>

          {/* Closing Statement - Feature Box */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white border-2 border-brand-primary/30 rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl">
              <div className="text-center space-y-3 sm:space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl text-brand-heading font-bold leading-tight">
                  {t.closing}
                </p>
                <p className="text-lg sm:text-xl text-brand-heading/70 font-light">
                  {t.closingSub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-brand-border/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </section>
  );
}