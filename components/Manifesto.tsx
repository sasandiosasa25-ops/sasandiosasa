'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Manifesto() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Now is your time.",
      subtitle: "Wherever you are, whatever season you're in. Your moment is now.",
      quote: "Maybe the answer is not in adding more. But in listening again to what was always there.",
      return: "is a return.",
      rhythm: "To rhythm.",
      silence: "To silence.",
      presence: "To presence.",
      movement: "It is a movement that begins within.",
      conversation: "A conversation without noise.",
      breath: "A breath you didn't know you were holding.",
      becoming: "This is not about becoming someone new. It's about recognizing and growing from within.",
    },
    de: {
      tagline: "Jetzt ist deine Zeit.",
      subtitle: "Wo immer du bist, in welcher Jahreszeit du dich befindest. Dein Moment ist jetzt.",
      quote: "Vielleicht liegt die Antwort nicht darin, mehr hinzuzufügen. Sondern darin, wieder auf das zu hören, was immer da war.",
      return: "ist eine Rückkehr.",
      rhythm: "Zum Rhythmus.",
      silence: "Zur Stille.",
      presence: "Zur Gegenwart.",
      movement: "Es ist eine Bewegung, die von innen beginnt.",
      conversation: "Ein Gespräch ohne Lärm.",
      breath: "Ein Atem, von dem du nicht wusstest, dass du ihn anhieltest.",
      becoming: "Es geht nicht darum, jemand Neues zu werden. Es geht darum, von innen heraus zu erkennen und zu wachsen.",
    },
  };

  const text = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Responsive Sizing */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: Cover to fill height */}
        <div 
          className="absolute inset-0 bg-no-repeat sm:hidden"
          style={{
            backgroundImage: "url('/kili.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundColor: '#1a1a1a',
          }}
        />
        
        {/* Tablet and Desktop: Contain to show full image */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat hidden sm:block"
          style={{
            backgroundImage: "url('/kili.jpeg')",
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundColor: '#1a1a1a',
          }}
        />
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-heading/75 via-brand-heading/65 to-brand-heading/80 sm:from-brand-heading/70 sm:via-brand-heading/60 sm:to-brand-heading/75 lg:from-brand-heading/65 lg:via-brand-heading/55 lg:to-brand-heading/70" />
      </div>

      {/* Content with Enhanced Contrast */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Brand Name */}
          <h1 className="font-comfortaa italic text-brand-primary text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide drop-shadow-2xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%)]">
            SasaNdioSasa
          </h1>

          {/* Tagline */}
          <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_70%)]">
            {text.tagline}
          </p>

          {/* Subtitle */}
          <p className="text-white/95 text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md [text-shadow:_0_2px_6px_rgb(0_0_0_/_60%)]">
            {text.subtitle}
          </p>

          {/* Quote */}
          <div className="py-8 sm:py-10 lg:py-12 px-6 sm:px-8 lg:px-12 border-l-4 border-brand-primary bg-white/10 backdrop-blur-md shadow-2xl">
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed drop-shadow-md">
              " {text.quote} "
            </p>
          </div>

          {/* Return Statement */}
          <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-8">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_70%)]">
              <span className="font-comfortaa italic text-brand-primary drop-shadow-xl">SasaNdioSasa</span> {text.return}
            </p>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
              <div className="p-6 sm:p-7 bg-white/15 backdrop-blur-md border-2 border-brand-primary/40 hover:border-brand-primary hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
                <p className="text-white text-xl sm:text-2xl font-bold drop-shadow-md">{text.rhythm}</p>
              </div>
              <div className="p-6 sm:p-7 bg-white/15 backdrop-blur-md border-2 border-brand-primary/40 hover:border-brand-primary hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
                <p className="text-white text-xl sm:text-2xl font-bold drop-shadow-md">{text.silence}</p>
              </div>
              <div className="p-6 sm:p-7 bg-white/15 backdrop-blur-md border-2 border-brand-primary/40 hover:border-brand-primary hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
                <p className="text-white text-xl sm:text-2xl font-bold drop-shadow-md">{text.presence}</p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 max-w-2xl mx-auto">
            <p className="text-white/95 text-lg sm:text-xl md:text-2xl font-light leading-relaxed drop-shadow-md [text-shadow:_0_2px_6px_rgb(0_0_0_/_60%)]">
              {text.movement}
            </p>
            <p className="text-white/95 text-lg sm:text-xl md:text-2xl font-light leading-relaxed drop-shadow-md [text-shadow:_0_2px_6px_rgb(0_0_0_/_60%)]">
              {text.conversation}
            </p>
            <p className="text-white/95 text-lg sm:text-xl md:text-2xl font-light leading-relaxed drop-shadow-md [text-shadow:_0_2px_6px_rgb(0_0_0_/_60%)]">
              {text.breath}
            </p>
          </div>

          {/* Closing Statement */}
          <div className="pt-8 sm:pt-10 lg:pt-12 px-4 sm:px-6 py-6 sm:py-8 bg-black/20 backdrop-blur-sm border border-white/20 shadow-2xl">
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              {text.becoming}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  );
}