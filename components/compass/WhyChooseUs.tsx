import { Compass } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Why Choose Us',
      intro: [
        'Do you sometimes lose yourself in the rhythm of everyday life? Between work, family, and everything that keeps you busy?',
        'Do the days start to feel a little grey, your energy runs low, and you long for a new perspective or a meaningful challenge?',
        'Or have you been to Tanzania before and still feel that quiet pull? The warmth, the rhythm, the wisdom of Africa that stays with you long after you ve left?',
        'Then you are in exactly the right place.'
      ],
      content: 'At SasaNdioSasa, we create journeys that reconnect you, with yourself, with others, and with the world around you.',
      simone: 'Our founder and visionary Simone is since 2012 experiencing Tanzania. During this time, she built strong relationships with local partners, guides, and communities. Connections that allow SasaNdioSasa to design journeys that are sustainable, authentic, and safe. She also walked through many highs and lows and has learned, again and again, how Tanzania, through its culture, its nature, and its quiet strength, continues to guide and ground.',
      choose: "SasaNdioSasa offers safaris, retreats, and inner journeys that go beyond travel. Each experience is created with care. Sustainable, mindful, and deeply human. It's not about escaping life, but about meeting it more fully. In nature, in conversation, and in moments that quietly shift how you see yourself and the world.",
      tagline: 'SasaNdioSasa means Your Time is Now. And every journey we create begins right there.'
    },
    de: {
      title: 'Warum uns wählen',
      intro: [
        'Verlierst du dich manchmal im Rhythmus des Alltags? Zwischen Arbeit, Familie und allem, was dich beschäftigt?',
        'Fühlen sich die Tage ein wenig grau an, läuft deine Energie zur Neige, und sehnst du dich nach einer neuen Perspektive oder einer sinnvollen Herausforderung?',
        'Oder warst du schon einmal in Tansania und spürst immer noch diese stille Anziehung? Die Wärme, den Rhythmus, die Weisheit Afrikas, die dir noch lange nach deiner Abreise bleibt?',
        'Dann bist du genau am richtigen Ort.'
      ],
      content: 'Bei SasaNdioSasa schaffen wir Reisen, die dich wieder verbinden, mit dir selbst, mit anderen und mit der Welt um dich herum.',
      simone: 'Unsere Gründerin und Visionärin Simone erlebt Tansania seit 2012. In dieser Zeit hat sie starke Beziehungen zu lokalen Partnern, Guides und Gemeinschaften aufgebaut. Verbindungen, die es SasaNdioSasa ermöglichen, Reisen zu gestalten, die nachhaltig, authentisch und sicher sind. Sie ist auch durch viele Höhen und Tiefen gegangen und hat immer wieder gelernt, wie Tansania durch seine Kultur, seine Natur und seine stille Kraft weiterhin leitet und erdet.',
      choose: 'SasaNdioSasa bietet Safaris, Retreats und innere Reisen, die über das Reisen hinausgehen. Jede Erfahrung wird mit Sorgfalt geschaffen. Nachhaltig, achtsam und zutiefst menschlich. Es geht nicht darum, dem Leben zu entkommen, sondern es voller zu begegnen. In der Natur, im Gespräch und in Momenten, die leise verändern, wie du dich selbst und die Welt siehst.',
      tagline: 'SasaNdioSasa bedeutet Deine Zeit ist jetzt. Und jede Reise, die wir schaffen, beginnt genau dort.'
    }
  };

  const t = translations[language];

  return (
    <section id="why-choose-us" className="space-y-4">

      <div 
        className="relative w-full min-h-96 rounded-2xl overflow-hidden shadow-2xl group"
        style={{
          backgroundImage: 'url(/vision.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Multi-layer overlay for text readability and aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-96 p-6 sm:p-10 md:p-12">
          <div className="max-w-3xl text-center space-y-4">
            <div className="space-y-4">
              {t.intro.map((paragraph, index) => (
                <p key={index} className="text-white text-sm sm:text-base lg:text-lg leading-relaxed drop-shadow-lg font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
      </div>

      <div className="space-y-4 text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-2xl shadow-lg">
        <p className="font-medium text-base text-emerald-800">{t.content}</p>
        <p>{t.simone}</p>
        <p>{t.choose}</p>
        <p className="text-lg font-semibold text-amber-800 pt-4 border-t-2 border-amber-200">{t.tagline}</p>
      </div>
    </section>
  );
};

export default WhyChooseUs;