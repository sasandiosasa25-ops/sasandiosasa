'use client';

import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DestinationsGrid() {
  const { language } = useLanguage();

  const translations = {
    en: {
      featured: 'Featured',
      destinationsTitle: 'DESTINATIONS',
      destinationsDesc: 'Explore landscapes shaped by time, where nature writes in bold lines and every view reminds us of beauty\'s power and fragility.',
      viewAllDestinations: 'View All Destinations',
    },
    de: {
      featured: 'Ausgewählt',
      destinationsTitle: 'REISEZIELE',
      destinationsDesc: 'Erkunden Sie von der Zeit geformte Landschaften, wo die Natur in kühnen Linien schreibt und jede Aussicht uns an die Kraft und Zerbrechlichkeit der Schönheit erinnert.',
      viewAllDestinations: 'Alle Reiseziele Ansehen',
    }
  };

  const t = translations[language];

  const destinations = [
    {
      name: 'Serengeti',
      image: '/serengeti1.jpeg',
      description: language === 'en' 
        ? 'Vast plains where sky and earth meet in endless openness'
        : 'Weite Ebenen, wo Himmel und Erde sich in endloser Offenheit treffen',
      highlight: language === 'en' ? 'Wilderness' : 'Wildnis',
    },
    {
      name: 'Lake Victoria',
      image: '/victoria.jpg',
      description: language === 'en'
        ? 'Africa\'s largest lake alive with rhythm and life'
        : 'Afrikas größter See voller Rhythmus und Leben',
      highlight: language === 'en' ? 'Lakeside' : 'Seeufer',
    },
    {
      name: 'Tarangire',
      image: '/tarangire.jpg',
      description: language === 'en'
        ? 'Land of giants with ancient baobabs and elephant herds'
        : 'Land der Riesen mit uralten Baobabs und Elefantenherden',
      highlight: language === 'en' ? 'Wildlife' : 'Tierwelt',
    },
    {
      name: 'Lake Natron',
      image: '/natron.jpg',
      description: language === 'en'
        ? 'Dramatic waters watched over by the Mountain of God'
        : 'Dramatische Gewässer, bewacht vom Berg Gottes',
      highlight: language === 'en' ? 'Volcanic' : 'Vulkanisch',
    },
    {
      name: 'Arusha',
      image: '/arusha.jpg',
      description: language === 'en'
        ? 'City in motion where tradition meets modern life'
        : 'Stadt in Bewegung, wo Tradition auf modernes Leben trifft',
      highlight: language === 'en' ? 'Gateway' : 'Tor',
    },
    {
      name: 'Selous',
      image: '/selous.jpg',
      description: language === 'en'
        ? 'Wilderness at its most powerful and untamed'
        : 'Wildnis in ihrer mächtigsten und ungezähmtesten Form',
      highlight: language === 'en' ? 'Reserve' : 'Reservat',
    },
  ];

  return (
    <section className="py-32 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <div className="inline-block border border-stone-300 px-6 py-2 mb-8">
            <span className="text-stone-600 font-medium text-xs tracking-[0.2em] uppercase">{t.featured}</span>
          </div>
          
          <h2 className="text-[3rem] md:text-[6rem] font-black text-stone-900 mb-8 leading-[0.9] tracking-tighter">
            {t.destinationsTitle}
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl font-light">
            {t.destinationsDesc}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-stone-200 aspect-[3/4] mb-6 group-hover:shadow-2xl transition-all duration-700">
                <div className="absolute inset-0 bg-stone-900/60 group-hover:bg-stone-900/40 transition-all duration-700" />
                
                <div className="absolute top-6 left-6">
                  <span className="bg-white text-stone-900 px-4 py-2 text-xs font-bold tracking-wider uppercase">
                    {destination.highlight}
                  </span>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-4xl font-black text-white mb-3 leading-tight tracking-tight">
                    {destination.name}
                  </h3>
                  <p className="text-stone-300 text-base font-light leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Button asChild size="lg" className="bg-stone-900 hover:bg-stone-800 text-white px-16 py-8 text-xl transform hover:scale-105 transition-all duration-300">
            <Link href="/destinations">
              <span className="flex items-center">
                {t.viewAllDestinations}
                <ArrowRight className="ml-4 h-6 w-6" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}