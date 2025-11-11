'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Compass, Calendar, Plane, FileText, Backpack, AlertCircle, Map, ExternalLink, Check, X } from 'lucide-react';
import AirlineRecommendations from '@/components/compass/AirlineRecommendations';
import TravelPermit from '@/components/compass/TravelPermit';
import PackingLists from '@/components/compass/PackingLists';
import FAQs from '@/components/compass/FAQs';
import SeasonalAdvice from '@/components/compass/SeasonalAdvice';
import WhyChooseUs from '@/components/compass/WhyChooseUs';

const TravelCompassPage = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const airlineLogos: { [key: string]: string } = {
  'Lufthansa': '/luft.jpeg',
  'Discover Airlines': '/discover.jpeg',
  'KLM Royal Dutch Airlines': '/klm.jpeg',
  'Ethiopian Airlines': '/ethio.jpeg',
  'Turkish Airlines': '/turk.jpeg',
  'Qatar Airways': '/qatar.jpeg',
  'Emirates': '/emir.jpeg'
};

  const translations = {
    en: {
      title: 'Travel Compass',
      subtitle: 'Your Guide to Tanzania',
      whyChooseUs: {
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
      seasonalAdvice: {
        title: 'Seasonal Advice',
        subtitle: 'Finding Your Right Time',
        intro: 'There is no wrong season to visit Tanzania. Each time of year carries its own rhythm, light, and feeling. Some months invite movement, others reflection. Some bring clarity, others depth. Its less about choosing the "best" moment, and more about discovering what kind of journey you are ready for.',
        seasons: [
          {
            title: 'January – March: The Green Season',
            description: 'Warm, lush, and full of life. The landscapes are vibrant, the skies dramatic, and wildlife scenes come alive in color and contrast. Its a season for those who enjoy energy, renewal, and the calm of fewer travelers around.'
          },
          {
            title: 'April – May: The Quiet Months',
            description: 'The long rains arrive, and Tanzania slows down. Not every lodge or road is open, but those who come now experience a deep sense of authenticity. Its a beautiful time for reflection, writing, and being close to nature as it breathes and rests.'
          },
          {
            title: 'June – October: The Clear Season',
            description: 'Crisp air, open skies, and perfect visibility. Wildlife gathers around the remaining water sources, and this is the ideal time for classic safaris and Kilimanjaro climbs. Days are bright, nights cool, and the horizon feels endless.'
          },
          {
            title: 'November – December: The Reawakening',
            description: 'The short rains return, bringing freshness and new beginnings. The land feels renewed, colors deepen, and light turns golden again. Its a moment of transition. A season that gently invites you to pause, look back, and begin again.'
          }
        ]
      },

   
      faqs: {
        title: 'Dos and Don\'ts (FAQs)',
        dosTitle: 'Do\'s',
        dos: [
          'Do support local and reliable projects. If you want to give back, talk to us first, we will connect you with initiatives that truly make a difference.',
          'Do enjoy local transport safely. If you take a pikipiki (motorbike taxi), wear a helmet, choose a driver with two mirrors and a well-maintained bike.',
          "Do eat local food, including street food, but you are welcome to check in with us about safe and trusted places. Tanzania's flavors are part of your travel story.",
          "Do drink bottled or filtered water. Tap water is not safe to drink. In lodges, you'll often find recycled glass bottles, it's part of a conscious approach to reducing plastic.",
          'Do respect local culture and dress modestly (cover shoulders and knees, especially in rural or religious areas).',
          'Do use only licensed taxis or transfers, especially at night.',
          'Do listen to your guide or lodge staff. Safety rules in nature protect both you and the wildlife.',
          'Do carry a copy of your passport and visa separately, keeping the originals safe.',
          'Do stay aware of changing weather. Climate conditions can shift quickly; flexibility is part of travel here.',
          'Do pick up what you can. Leaving a place a little cleaner than you found it makes a quiet but real impact.'
        ],
        dontsTitle: 'Don\'ts',
        donts: [
          'Dont walk alone at night or in unfamiliar neighborhoods.',
          'Dont wear flashy jewelry or show large amounts of cash in public.',
          'Dont accept rides from unofficial taxis or strangers offering transport.',
          'Dont visit or donate to orphanages on your own. Support community-based projects instead. Its the ethical way to help.',
          'Dont feed or provoke wild animals, and never leave the vehicle during safaris unless your guide says its safe.',
          'Dont take or share photos of people, especially children, without permission.',
          'Dont ignore basic health precautions. Use mosquito nets, stay hydrated, and protect yourself from the sun.',
          'Dont underestimate the environment. Weather, altitude, and sun exposure can change quickly, especially when climbing Kilimanjaro.',
          'Dont accept or use plastic bags. They re banned in Tanzania. Bring reusable bags or ask us for sustainable options.'
        ]
      },
      roadMap: {
        title: 'Road Map',
        description: 'Explore our carefully curated paths and discover your journey.',
        linkText: 'View Full Road Map'
      }
    },
    de: {
      title: 'Reisekompass',
      subtitle: 'Dein Leitfaden für Tansania',
      whyChooseUs: {
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
      },
    
 
    
   
    }
  };

  const t = translations[language];

  const requirements = [
    { icon: <FileText className="w-5 h-5" />, text: language === 'en' ? 'Valid passport (minimum 6 months validity)' : 'Gültiger Reisepass (mindestens 6 Monate gültig)' },
    { icon: <FileText className="w-5 h-5" />, text: language === 'en' ? 'Recent passport-size photo' : 'Aktuelles Passfoto' },
    { icon: <FileText className="w-5 h-5" />, text: language === 'en' ? 'Travel itinerary or booking confirmation' : 'Reiseroute oder Buchungsbestätigung' },
    { icon: <FileText className="w-5 h-5" />, text: language === 'en' ? 'Yellow fever vaccination certificate (if applicable)' : 'Gelbfieberimpfbescheinigung (falls zutreffend)' },
    { icon: <FileText className="w-5 h-5" />, text: language === 'en' ? 'Payment method for visa fee (credit/debit card)' : 'Zahlungsmethode für Visagebühr (Kredit-/Debitkarte)' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80" 
          alt="Tanzania Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/80 to-amber-900/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center text-white transition-all duration-1000 px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Compass className="w-20 h-20 mx-auto mb-6 animate-pulse drop-shadow-2xl" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">{t.title}</h1>
            <p className="text-xl md:text-2xl font-light drop-shadow-lg">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        
       <WhyChooseUs />

        {/* Seasonal Advice Section */}
        <SeasonalAdvice />


{/* Airline Recommendations Section */}
    <AirlineRecommendations />

        {/* Travel Permit Section */}
        <TravelPermit />

        {/* Packing Lists Section */}
       <PackingLists />

        {/* FAQs Section */}
       <FAQs />

      </div>
    </div>
  );
};

export default TravelCompassPage;