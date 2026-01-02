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
    <section id="airline-recommendations" className="space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-heading rounded-full opacity-80"></div>
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-heading flex items-center gap-4">
            <Plane className="w-10 h-10 md:w-12 md:h-12 text-brand-primary flex-shrink-0" />
            {t.title}
          </h2>
        </div>
      </div>

      {/* Hero Split Layout */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
        <div className="flex flex-col lg:flex-row lg:min-h-[600px]">
          <div className="relative h-[450px] lg:h-auto lg:w-1/2 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" 
              alt="Airplane" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-heading/70 via-brand-heading/40 to-transparent"></div>
          </div>
          
          <div className="relative lg:w-1/2 flex items-center justify-center p-8 sm:p-10 lg:p-12 xl:p-16 bg-gradient-to-br from-brand-heading via-brand-secondary to-brand-heading overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-1 bg-brand-primary mb-6 rounded-full"></div>
              <p className="text-white/95 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light tracking-wide">
                {t.intro}
              </p>
              <div className="w-16 h-1 bg-brand-primary mt-6 rounded-full ml-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Airlines Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {t.airlines.map((airline, index) => {
          const isLufthansa = airline.name === 'Lufthansa';
          const isKLM = airline.name === 'KLM Royal Dutch Airlines';
          const isDiscover = airline.name === 'Discover Airlines';
          const isEthiopian = airline.name === 'Ethiopian Airlines';
          const isTurkish = airline.name === 'Turkish Airlines';
          const isQatar = airline.name === 'Qatar Airways';
          const isEmirates = airline.name === 'Emirates';
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
          if (isLufthansa) {
            return (
              <a
                key={index}
                href="https://www.lufthansa.com/xx/en/homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                style={{ textDecoration: 'none' }}
              >
                {card}
              </a>
            );
          } else if (isDiscover) {
            return (
              <a
                key={index}
                href="https://www.discover-airlines.com/xx/en/homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                style={{ textDecoration: 'none' }}
              >
                {card}
              </a>
            );
          } else if (isKLM) {
            return (
              <a
                key={index}
                href="https://www.klm.co.tz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                style={{ textDecoration: 'none' }}
              >
                {card}
              </a>
            );
          } else if (isEthiopian) {
            return (
              <a
                key={index}
                href="https://www.google.com/aclk?sa=L&pf=1&ai=DChsSEwiKpc2T8O2RAxVLkIMHHUnCPIIYACICCAEQABoCZWY&co=1&ase=2&gclid=Cj0KCQiA9t3KBhCQARIsAJOcR7xkB6WUq1B1VTVMUNnkgmhx0gGmiYVnM8Uwwc-kWw-Y3XPUWtbnm1kaAkYREALw_wcB&cid=CAAS3gHkaLEXV9R1hydEf36En8UrBTbS1ZG7PSbKNsPiwF4QlWuLOGBss6xrvySXcAV06r8ICGbYrE6_U1dV_ARhXTkiITWAdpnJv9Xk_feLS6aCr7DHNNeYJwEYHjLvtk-wgat8C1wYH9bJhS4Nn1JNPGOQsN_fqRjLBk0KciG23EfGg3XuD11U37wDAZrTMo9PrvjVghra2yfAJ5yf11XKf7G7CTzm1TuW5neVqZX6lABqFy1bNg-0WvphHI8UbmDciQ8ghanlDweODp-F08y8k-xAvQBOFyqZN_sgGG74FAM&cce=2&category=acrcp_v1_32&sig=AOD64_0MZZ6cRWqvw8HI4WLEtKg2omqHIA&q&nis=4&adurl=https://www.ethiopianairlines.com/en-tz/?gad_source%3D1%26gad_campaignid%3D22368411974%26gbraid%3D0AAAAADFhr_LYbQQIRY6ZVDPolRC9lTAsu%26gclid%3DCj0KCQiA9t3KBhCQARIsAJOcR7xkB6WUq1B1VTVMUNnkgmhx0gGmiYVnM8Uwwc-kWw-Y3XPUWtbnm1kaAkYREALw_wcB&ved=2ahUKEwiaoceT8O2RAxWvhf0HHesLMGgQ0Qx6BAgNEAE"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                style={{ textDecoration: 'none' }}
              >
                {card}
              </a>
            );
            return (
              <a
                key={index}
                href="https://www.klm.co.tz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                style={{ textDecoration: 'none' }}
              >
                {card}
              </a>
            );
          } else if (isTurkish) {
            return (
              <a
                key={index}
                href="https://www.turkishairlines.com/en-int/flights/booking/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                style={{ textDecoration: 'none' }}
              >
                {card}
              </a>
            );
          } else if (isQatar) {
            return (
              <a
                key={index}
                href="https://www.qatarairways.com/en-tz/homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                style={{ textDecoration: 'none' }}
              >
                {card}
              </a>
            );
          } else if (isEmirates) {
            return (
              <a
                key={index}
                href="https://www.emirates.com/tz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                style={{ textDecoration: 'none' }}
              >
                {card}
              </a>
            );
          } else {
            return card;
          }
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