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
    <section id="why-choose-us" className="space-y-8">
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-amber-900 rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 flex items-center gap-4 mb-8">
          <Compass className="w-12 h-12 text-amber-900" />
          {t.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
          {t.intro.map((paragraph, index) => (
            <p key={index} className="italic text-gray-600 text-sm sm:text-base">{paragraph}</p>
          ))}
        </div>
        <div className="relative h-48 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80" 
            alt="African Landscape" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="space-y-6 text-lg text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-lg">
        <p className="font-medium text-xl text-emerald-800">{t.content}</p>
        <p>{t.simone}</p>
        <p>{t.choose}</p>
        <p className="text-2xl font-semibold text-amber-800 pt-6 border-t-2 border-amber-200">{t.tagline}</p>
      </div>
    </section>
  );
};

export default WhyChooseUs;