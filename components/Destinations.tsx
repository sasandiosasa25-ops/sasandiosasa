'use client';

import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function DestinationsGrid() {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      image: '/tara1.jpg',
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
    <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-white via-brand-menu-hover to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="absolute top-20 -right-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-40 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <div className="inline-block border-2 border-brand-primary/30 bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-3 mb-8 sm:mb-10 rounded-full shadow-sm">
            <span className="text-brand-heading/70 font-semibold text-xs tracking-[0.25em] uppercase">{t.featured}</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter bg-gradient-to-br from-brand-primary via-brand-heading to-brand-secondary bg-clip-text text-transparent">
            {t.destinationsTitle}
          </h2>
          
          {/* Decorative underline */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent rounded-full" />
          </div>
          
          <p className="text-lg sm:text-xl text-brand-heading/70 max-w-3xl mx-auto leading-relaxed">
            {t.destinationsDesc}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {destinations.map((destination, index) => (
            <Link 
              href="/destinatio
              ns"
              key={index} 
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden bg-brand-border aspect-[3/4] mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-700">
                {/* Image */}
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-heading via-brand-heading/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700 z-10" />
                
                {/* Highlight Badge with icon */}
             
                
                {/* Corner accent - animates on hover */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-brand-primary/20 rounded-bl-full transition-all duration-500 ${hoveredIndex === index ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`} />
                
                {/* Destination Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl font-black text-black mb-3 leading-tight tracking-tight group-hover:text-brand-menu-hover transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-black/90 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {destination.description}
                  </p>
                  
                  {/* Animated underline */}
                  <div className="mt-4 h-1 bg-brand-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Button 
            asChild 
            size="lg" 
            className="group/btn relative bg-brand-primary hover:bg-brand-secondary text-white px-14 sm:px-16 py-7 sm:py-8 text-lg sm:text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-lg overflow-hidden"
          >
            <Link href="/destinations">
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
              <span className="relative flex items-center">
                {t.viewAllDestinations}
                <ArrowRight className="ml-4 h-5 w-5 sm:h-6 sm:w-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}