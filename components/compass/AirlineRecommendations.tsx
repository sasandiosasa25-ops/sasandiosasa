import { Plane } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AirlineRecommendations = () => {
  const { language } = useLanguage();

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
      title: 'Airline Recommendations',
      intro: 'You can fly to Tanzania with all major international airlines. Most routes from Europe connect through Frankfurt, Amsterdam, Doha, Addis Ababa, or Istanbul. With the following airlines, you are in good hands. Reliable service, solid connections, and comfortable routes.',
      airlines: [
        {
          name: 'Lufthansa',
          description: 'Reliable full-service airline with regular flights to East Africa via Frankfurt.'
        },
        {
          name: 'Discover Airlines',
          description: 'Lufthansa Group carrier offering direct flights from Frankfurt to Zanzibar.'
        },
        {
          name: 'KLM Royal Dutch Airlines',
          description: 'Frequent connections from Amsterdam to Kilimanjaro, Dar es Salaam, and Zanzibar.'
        },
        {
          name: 'Ethiopian Airlines',
          description: 'Excellent Africa network via Addis Ababa with smooth onward connections to Tanzania.'
        },
        {
          name: 'Turkish Airlines',
          description: 'Strong global network and good service with one stop in Istanbul.'
        },
        {
          name: 'Qatar Airways',
          description: 'High comfort and quality service via Doha to multiple Tanzanian destinations.'
        },
        {
          name: 'Emirates',
          description: 'Consistent service and reliable schedules via Dubai.'
        }
      ],
      note: 'For guests traveling from outside Europe, most routes connect through the same major hubs. If you would like personalized advice for your departure country, feel free to contact us directly. We are happy to help.'
    },
    de: {
      title: 'Flugempfehlungen',
      intro: 'Sie können mit allen großen internationalen Fluggesellschaften nach Tansania fliegen. Die meisten Routen von Europa verbinden über Frankfurt, Amsterdam, Doha, Addis Abeba oder Istanbul. Mit den folgenden Fluggesellschaften sind Sie in guten Händen. Zuverlässiger Service, solide Verbindungen und komfortable Routen.',
      airlines: [
        {
          name: 'Lufthansa',
          description: 'Zuverlässige Full-Service-Fluggesellschaft mit regelmäßigen Flügen nach Ostafrika über Frankfurt.'
        },
        {
          name: 'Discover Airlines',
          description: 'Lufthansa Group Carrier mit Direktflügen von Frankfurt nach Sansibar.'
        },
        {
          name: 'KLM Royal Dutch Airlines',
          description: 'Häufige Verbindungen von Amsterdam nach Kilimandscharo, Dar es Salaam und Sansibar.'
        },
        {
          name: 'Ethiopian Airlines',
          description: 'Ausgezeichnetes Afrika-Netzwerk über Addis Abeba mit reibungslosen Anschlussverbindungen nach Tansania.'
        },
        {
          name: 'Turkish Airlines',
          description: 'Starkes globales Netzwerk und guter Service mit einem Stopp in Istanbul.'
        },
        {
          name: 'Qatar Airways',
          description: 'Hoher Komfort und Qualitätsservice über Doha zu mehreren tansanischen Zielen.'
        },
        {
          name: 'Emirates',
          description: 'Konsistenter Service und zuverlässige Zeitpläne über Dubai.'
        }
      ],
      note: 'Für Gäste, die von außerhalb Europas reisen, verbinden die meisten Routen über die gleichen großen Hubs. Wenn Sie personalisierte Beratung für Ihr Abflugland wünschen, kontaktieren Sie uns gerne direkt. Wir helfen gerne.'
    }
  };

  const t = translations[language];

  return (
    <section id="airline-recommendations" className="space-y-8">
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-amber-900 rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 flex items-center gap-4">
          <Plane className="w-12 h-12 text-amber-600" />
          {t.title}
        </h2>
      </div>

      <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" 
          alt="Airplane" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-900/70 flex items-center justify-center">
          <p className="text-white text-xl px-8 text-center leading-relaxed max-w-4xl">
            {t.intro}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.airlines.map((airline, index) => (
          <div 
            key={index} 
            className="group relative bg-gradient-to-br from-amber-50/60 to-stone-100/80 p-6 rounded-2xl border border-amber-200/60 hover:border-amber-500/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
          >
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200/30 to-transparent rounded-bl-full group-hover:from-amber-300/40 transition-all"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-stone-50 to-amber-50/50 rounded-xl shadow-sm group-hover:shadow-md transition-shadow p-2 border border-amber-100/50">
                  <img 
                    src={airlineLogos[airline.name]} 
                    alt={`${airline.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback && fallback instanceof HTMLElement) fallback.style.display = 'block';
                    }}
                  />
                  <Plane className="w-8 h-8 text-amber-600 hidden" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-900 transition-colors leading-tight">
                    {airline.name}
                  </h3>
                </div>
              </div>
              
              <div className="h-px bg-gradient-to-r from-amber-300/60 via-amber-400/50 to-transparent mb-4"></div>
              
              <p className="text-gray-700 leading-relaxed text-sm">
                {airline.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative bg-gradient-to-r from-emerald-100/70 to-amber-50/70 p-8 rounded-2xl border-l-4 border-emerald-600 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-emerald-200/15 to-transparent rounded-bl-full"></div>
        
        <p className="relative z-10 text-gray-800 italic text-lg leading-relaxed">
          {t.note}
        </p>
      </div>
    </section>
  );
};

export default AirlineRecommendations;