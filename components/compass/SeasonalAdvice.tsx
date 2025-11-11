import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SeasonalAdvice = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
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
    de: {
      title: 'Saisonale Beratung',
      subtitle: 'Die richtige Zeit finden',
      intro: 'Es gibt keine falsche Jahreszeit, um Tansania zu besuchen. Jede Zeit des Jahres trägt ihren eigenen Rhythmus, ihr eigenes Licht und ihr eigenes Gefühl. Einige Monate laden zur Bewegung ein, andere zur Reflexion. Einige bringen Klarheit, andere Tiefe. Es geht weniger darum, den "besten" Moment zu wählen, sondern darum, zu entdecken, für welche Art von Reise du bereit bist.',
      seasons: [
        {
          title: 'Januar – März: Die grüne Saison',
          description: 'Warm, üppig und voller Leben. Die Landschaften sind lebendig, der Himmel dramatisch, und Wildtierszenen werden in Farbe und Kontrast lebendig. Es ist eine Jahreszeit für diejenigen, die Energie, Erneuerung und die Ruhe weniger Reisender genießen.'
        },
        {
          title: 'April – Mai: Die stillen Monate',
          description: 'Die langen Regenfälle kommen, und Tansania verlangsamt sich. Nicht jede Lodge oder Straße ist geöffnet, aber diejenigen, die jetzt kommen, erleben ein tiefes Gefühl von Authentizität. Es ist eine schöne Zeit für Reflexion, Schreiben und nahe an der Natur zu sein, während sie atmet und ruht.'
        },
        {
          title: 'Juni – Oktober: Die klare Saison',
          description: 'Frische Luft, offener Himmel und perfekte Sicht. Wildtiere versammeln sich um die verbleibenden Wasserquellen, und dies ist die ideale Zeit für klassische Safaris und Kilimandscharo-Besteigungen. Die Tage sind hell, die Nächte kühl, und der Horizont fühlt sich endlos an.'
        },
        {
          title: 'November – Dezember: Das Erwachen',
          description: 'Die kurzen Regenfälle kehren zurück und bringen Frische und neue Anfänge. Das Land fühlt sich erneuert an, Farben vertiefen sich, und das Licht wird wieder golden. Es ist ein Moment des Übergangs. Eine Jahreszeit, die dich sanft einlädt, innezuhalten, zurückzublicken und neu zu beginnen.'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="seasonal-advice" className="space-y-12 lg:space-y-16">
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-heading rounded-full opacity-80"></div>
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-heading flex items-center gap-4">
            <Calendar className="w-10 h-10 md:w-12 md:h-12 text-brand-primary flex-shrink-0" />
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-brand-primary/80 italic font-light pl-14 md:pl-16">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Split layout with enhanced design */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group">
        <div className="flex flex-col lg:flex-row lg:min-h-[650px]">
          {/* Image section with parallax effect */}
          <div className="relative h-[450px] lg:h-auto lg:w-1/2 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80" 
              alt="Tanzania Wildlife" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-heading/70 via-brand-heading/40 to-transparent"></div>
          </div>
          
          {/* Text section with elegant background */}
          <div className="relative lg:w-1/2 flex items-center justify-center p-8 sm:p-10 lg:p-12 xl:p-16 bg-gradient-to-br from-brand-heading via-brand-secondary to-brand-heading overflow-hidden">
            {/* Decorative elements */}
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

      {/* Season cards with enhanced styling */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {t.seasons.map((season, index) => (
          <div 
            key={index} 
            className="group relative bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-brand-primary hover:border-brand-secondary overflow-hidden"
          >
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-heading group-hover:text-brand-primary transition-colors duration-300">
                  {season.title}
                </h3>
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-brand-primary to-transparent mb-4 transition-all duration-500 group-hover:w-20"></div>
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                {season.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalAdvice;