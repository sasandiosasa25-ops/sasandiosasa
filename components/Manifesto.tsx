'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Manifesto() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Now is your time.",
      subtitle1: "Wherever you are, whatever season you're in.",
      subtitle2: "Your moment is now.",
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
      subtitle1: "Wo immer du bist, in welcher Jahreszeit du dich befindest.",
      subtitle2: "Dein Moment ist jetzt.",
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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/front-page.jpeg')",
          }}
        />
        {/* Elegant gradient overlay — slightly darker for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/6 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Brand Name */}
          <h1 className="font-comfortaa italic text-brand-primary text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold tracking-wide drop-shadow-2xl">
            SasaNdioSasa
          </h1>


          {/* Tagline */}
          <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            {text.tagline}
          </p>
          {/* Brand Intro */}
          <p className="text-brand-heading/70 text-lg sm:text-xl md:text-2xl font-semibold max-w-3xl mx-auto leading-relaxed">
            Step into journeys through Tanzania, where safari becomes a space to reconnect.
          </p>

          {/* Subtitle */}
          <div className="text-brand-border text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            <p>{text.subtitle1}</p>
            <p className="mt-2">{text.subtitle2}</p>
          </div>

          {/* Quote - Highlighted */}
          <div className="py-8 sm:py-10 lg:py-12 px-6 sm:px-8 lg:px-12 border-l-4 border-brand-primary bg-white/5 backdrop-blur-sm">
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed">
              " {text.quote} "
            </p>
          </div>

          {/* Return Statement */}
          <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-8">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
              <span className="font-comfortaa italic text-brand-primary">SasaNdioSasa</span> {text.return}
            </p>

            {/* Three pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
              <div className="p-6 bg-white/10 backdrop-blur-sm border border-brand-primary/30 hover:border-brand-primary transition-all duration-300 hover:scale-105">
                <p className="text-white text-xl sm:text-2xl font-bold">{text.rhythm}</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm border border-brand-primary/30 hover:border-brand-primary transition-all duration-300 hover:scale-105">
                <p className="text-white text-xl sm:text-2xl font-bold">{text.silence}</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm border border-brand-primary/30 hover:border-brand-primary transition-all duration-300 hover:scale-105">
                <p className="text-white text-xl sm:text-2xl font-bold">{text.presence}</p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 max-w-2xl mx-auto">
            <p className="text-brand-border text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
              {text.movement}
            </p>
            <p className="text-brand-border text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
              {text.conversation}
            </p>
            <p className="text-brand-border text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
              {text.breath}
            </p>
          </div>

          {/* Closing Statement */}
          <div className="pt-8 sm:pt-10 lg:pt-12">
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed max-w-3xl mx-auto">
              {text.becoming}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/8 to-transparent pointer-events-none" />
    </section>
  );
}