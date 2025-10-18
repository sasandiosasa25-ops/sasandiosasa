'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Play, Pause } from 'lucide-react';

export default function HeroIntro() {
  const { language } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const translations = {
    en: {
      brand: 'SasaNdioSasa',
      headline: 'Now is your time.',
      subheadline: 'Wherever you are, whatever season you\'re in. Your moment is now.',
      quote: '"Maybe the answer is not in adding more. But in listening again to what was always there."',
      returnTitle: 'SasaNdioSasa is a return.',
      returnLines: [
        'To rhythm.',
        'To silence.',
        'To presence.'
      ],
      movement: 'It is a movement that begins within.',
      conversation: 'A conversation without noise.',
      breath: 'A breath you didn\'t know you were holding.',
      closing: 'This is not about becoming someone new. It\'s about recognizing and growing from within.',
      playVideo: 'Play Video',
      pauseVideo: 'Pause Video'
    },
    de: {
      brand: 'SasaNdioSasa',
      headline: 'Jetzt ist deine Zeit.',
      subheadline: 'Wo auch immer du bist, in welcher Jahreszeit auch immer. Dein Moment ist jetzt.',
      quote: '"Vielleicht liegt die Antwort nicht darin, mehr hinzuzufügen. Sondern darin, wieder auf das zu hören, was schon immer da war."',
      returnTitle: 'SasaNdioSasa ist eine Rückkehr.',
      returnLines: [
        'Zum Rhythmus.',
        'Zur Stille.',
        'Zur Präsenz.'
      ],
      movement: 'Es ist eine Bewegung, die von innen beginnt.',
      conversation: 'Ein Gespräch ohne Lärm.',
      breath: 'Ein Atem, von dem du nicht wusstest, dass du ihn anhielst.',
      closing: 'Es geht nicht darum, jemand Neues zu werden. Es geht darum, von innen heraus zu erkennen und zu wachsen.',
      playVideo: 'Video Abspielen',
      pauseVideo: 'Video Pausieren'
    }
  };

  const t = translations[language];

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
    <section className="relative min-h-screen bg-gradient-to-b from-white via-brand-menu-hover to-white overflow-hidden pt-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-30" />
      <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* First Section - Brand & Headline */}
        <div className="min-h-screen flex flex-col justify-center items-center text-center py-20">
          <div className="space-y-8 sm:space-y-12 max-w-5xl">
            {/* Brand Name */}
            <div className="relative inline-block">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-comfortaa tracking-tight">
                <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent animate-pulse">
                  {t.brand}
                </span>
              </h1>
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-heading leading-tight tracking-tight">
              {t.headline}
            </h2>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-brand-heading/80 leading-relaxed max-w-4xl mx-auto font-light">
              {t.subheadline}
            </p>

            {/* Quote */}
            <div className="relative py-8 sm:py-12">
              <div className="absolute left-0 top-0 text-8xl sm:text-9xl text-brand-primary/10 font-serif leading-none">"</div>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl text-brand-primary italic font-light leading-relaxed max-w-3xl mx-auto relative z-10 px-8 sm:px-16">
                {t.quote.replace(/"/g, '')}
              </blockquote>
              <div className="absolute right-0 bottom-0 text-8xl sm:text-9xl text-brand-primary/10 font-serif leading-none">"</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-brand-primary/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-brand-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="w-full max-w-6xl">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-border hover:border-brand-primary/50 transition-all duration-500">
              <video
                ref={setVideoRef}
                className="w-full h-auto aspect-video object-cover"
                poster="/video-thumbnail.jpg"
                controls={false}
                onClick={toggleVideo}
              >
                <source src="/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play/Pause overlay */}
              <div 
                className="absolute inset-0 bg-brand-heading/40 flex items-center justify-center cursor-pointer transition-opacity duration-300 group-hover:bg-brand-heading/50"
                onClick={toggleVideo}
                style={{ opacity: isVideoPlaying ? 0 : 1 }}
              >
                <button className="bg-white/90 hover:bg-white text-brand-primary rounded-full p-8 transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  {isVideoPlaying ? (
                    <Pause className="w-12 h-12 sm:w-16 sm:h-16" />
                  ) : (
                    <Play className="w-12 h-12 sm:w-16 sm:h-16 ml-2" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message Section */}
        <div className="min-h-screen flex flex-col justify-center items-center text-center py-20">
          <div className="space-y-12 sm:space-y-16 max-w-5xl">
            {/* Return Title */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent font-comfortaa">
                {t.returnTitle.split(' ')[0]}
              </span>
              <span className="text-brand-heading">
                {' ' + t.returnTitle.split(' ').slice(1).join(' ')}
              </span>
            </h3>

            {/* Return Lines */}
            <div className="space-y-4 sm:space-y-6">
              {t.returnLines.map((line, index) => (
                <p 
                  key={index}
                  className="text-3xl sm:text-4xl md:text-5xl text-brand-primary font-light italic"
                  style={{ 
                    animation: `fadeIn 0.8s ease-out ${index * 0.2}s both` 
                  }}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div className="flex justify-center py-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
            </div>

            {/* Movement Lines */}
            <div className="space-y-6 sm:space-y-8">
              <p className="text-2xl sm:text-3xl md:text-4xl text-brand-heading font-light leading-relaxed">
                {t.movement}
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl text-brand-heading font-light leading-relaxed">
                {t.conversation}
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl text-brand-heading font-light leading-relaxed">
                {t.breath}
              </p>
            </div>

            {/* Divider */}
            <div className="flex justify-center py-8">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
            </div>

            {/* Closing Statement */}
            <div className="bg-white/60 backdrop-blur-sm border-2 border-brand-primary/20 rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl">
              <p className="text-2xl sm:text-3xl md:text-4xl text-brand-heading font-medium leading-relaxed">
                {t.closing}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}