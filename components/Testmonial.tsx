'use client';

import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  country: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  const { language } = useLanguage();

  const translations = {
    en: {
      testimonials: 'Testimonials',
      travelersTitle: 'TRAVELERS',
    },
    de: {
      testimonials: 'Erfahrungsberichte',
      travelersTitle: 'REISENDE',
    }
  };

  const t = translations[language];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      country: language === 'en' ? "United Kingdom" : "Vereinigtes Königreich",
      text: language === 'en'
        ? "The Serengeti exceeded every expectation. The vastness, the wildlife, the profound silence—it changed how I see the world."
        : "Die Serengeti übertraf jede Erwartung. Die Weite, die Tierwelt, die tiefe Stille – es veränderte meine Sicht auf die Welt.",
      rating: 5,
    },
    {
      name: "Klaus Müller",
      country: language === 'en' ? "Germany" : "Deutschland",
      text: language === 'en'
        ? "Learning with local guides while experiencing Tanzania's landscapes was transformative. A perfect blend of education and adventure."
        : "Mit lokalen Guides zu lernen und gleichzeitig Tansanias Landschaften zu erleben, war transformativ. Eine perfekte Mischung aus Bildung und Abenteuer.",
      rating: 5,
    },
    {
      name: "Emma Chen",
      country: language === 'en' ? "Australia" : "Australien",
      text: language === 'en'
        ? "From Lake Natron's dramatic beauty to Tarangire's ancient baobabs—every destination told a unique story. Unforgettable."
        : "Von Lake Natrons dramatischer Schönheit bis zu Tarangires uralten Baobabs – jedes Reiseziel erzählte eine einzigartige Geschichte. Unvergesslich.",
      rating: 5,
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-brand-heading to-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-20">
          <div className="inline-block border border-white/20 px-4 md:px-6 py-2 mb-6 md:mb-8">
            <span className="text-white/70 font-poppins font-medium text-xs tracking-[0.2em] uppercase">{t.testimonials}</span>
          </div>
          
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-comfortaa font-black mb-6 md:mb-8 leading-[0.9] tracking-tighter break-words">
            {t.travelersTitle}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-brand-border/30 hover:border-brand-primary/50 transition-all duration-500 rounded-lg"
            >
              <CardContent className="p-6 md:p-10">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 md:h-5 w-4 md:w-5 text-brand-primary fill-current" strokeWidth={0} />
                  ))}
                </div>
                
                <p className="text-white/80 mb-6 md:mb-8 leading-relaxed text-sm md:text-base font-light font-poppins">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-white/10 pt-6">
                  <p className="font-bold text-white text-base md:text-lg font-comfortaa">{testimonial.name}</p>
                  <p className="text-white/60 text-xs md:text-sm font-poppins font-medium tracking-wide">{testimonial.country}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}