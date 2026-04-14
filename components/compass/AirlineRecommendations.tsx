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
          name: 'Discover Airlines',
          description: 'Reliable full-service airline with regular flights to East Africa via Frankfurt.'
        },
        {
          name: 'Lufthansa',
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
          name: 'Discover Airlines',
          description: 'Zuverlässige Full-Service-Fluggesellschaft mit regelmäßigen Flügen nach Ostafrika über Frankfurt.'
        },
        {
          name: 'Lufthansa',
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
    <section id="airline-recommendations" className="space-y-4">

      <div 
        className="relative w-full min-h-96 rounded-3xl overflow-hidden shadow-2xl group"
        style={{
          backgroundImage: 'url(/Sunrise.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-heading/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-96 p-8 sm:p-10 lg:p-12">
          <div className="max-w-3xl text-center">
            <p className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed drop-shadow-lg font-light">
              {t.intro}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
      </div>

      {/* Airlines Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {t.airlines.map((airline, index) => {
          const card = (
            <div 
              key={index} 
              className="group relative bg-white p-6 lg:p-8 rounded-3xl border-l-4 border-brand-primary hover:border-brand-secondary transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-28 group-hover:h-28"></div>
              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-br from-brand-bg-light to-white rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 p-3 border border-brand-border">
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
                    <Plane className="w-8 h-8 text-brand-primary hidden" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-brand-heading group-hover:text-brand-primary transition-colors leading-tight">
                      {airline.name}
                    </h3>
                  </div>
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-brand-primary to-transparent transition-all duration-500 group-hover:w-20"></div>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                  {airline.description}
                </p>
              </div>
            </div>
          );
          return card;
        })}
      </div>

      {/* Note Section */}
      <div className="relative bg-gradient-to-br from-brand-bg-light to-white p-8 lg:p-10 rounded-3xl border-l-4 border-brand-primary shadow-lg overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
        
        <div className="relative z-10 flex items-start gap-4">
          <Plane className="w-8 h-8 text-brand-primary mt-1 flex-shrink-0" />
          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AirlineRecommendations;