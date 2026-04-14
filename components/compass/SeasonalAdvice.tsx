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
    <section id="seasonal-advice" className="space-y-4">

      <div 
        className="relative w-full min-h-96 rounded-2xl overflow-hidden shadow-2xl group"
        style={{
          backgroundImage: 'url(/Sunrise.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Multi-layer overlay for text readability and aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-96 p-6 sm:p-10 md:p-12">
          <div className="max-w-3xl text-center">
            <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed drop-shadow-lg font-light">
              {t.intro}
            </p>
          </div>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
      </div>

      {/* Season cards with compact styling */}
      <div className="grid md:grid-cols-2 gap-4">
        {t.seasons.map((season, index) => (
          <div
            key={index}
            className="group relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-primary hover:border-brand-secondary overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-brand-heading group-hover:text-brand-primary transition-colors duration-300 mb-2">
                {season.title}
              </h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-brand-primary to-transparent mb-2 transition-all duration-300 group-hover:w-12"></div>
              <p className="text-gray-700 leading-relaxed text-sm">
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