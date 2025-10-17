'use client';

import { ArrowRight, MapPin, Users, BookOpen, Star, Globe, Award, Compass, Heart, Camera, Eye, Target, Mountain, Waves, Bird, Trees } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DestinationsGrid from '@/components/Destinations';

export default function HomePage() {
  const { language } = useLanguage();

  const translations = {
    en: {
      experienceTanzania: 'Experience Tanzania',
      heroTitle: 'TANZANIA',
      heroSubtitle: 'Where vast landscapes meet profound stillness',
      exploreDestinations: 'Explore Destinations',
      languagePrograms: 'Language Programs',
      years: 'YEARS',
      travelers: 'TRAVELERS',
      destinations: 'DESTINATIONS',
      ourPhilosophy: 'Our Philosophy',
      sustainableTravel: 'SUSTAINABLE TRAVEL',
      philosophyText1: 'Our approach aligns with the UN Sustainable Development Goals, creating journeys that restore balance, promote education, and strengthen communities through fair partnerships.',
      philosophyText2: 'Every experience is designed with conscious use of resources, respect for nature as our teacher, and collaboration that connects guests and communities in meaningful ways.',
      mission: 'MISSION',
      missionText: 'Creating journeys that restore balance, resilience, and shared strength in life. We design experiences where learning is woven into every step.',
      vision: 'VISION',
      visionText: 'Building strong collaborations that connect guests, communities, and global impact through responsible travel and meaningful partnerships.',
      whatWeOffer: 'What We Offer',
      experiences: 'EXPERIENCES',
      culturalSafaris: 'Cultural Safaris',
      culturalSafarisDesc: 'Explore Tanzania\'s vast wilderness, from the Serengeti\'s endless plains to ancient baobabs in Tarangire, discovering nature\'s raw beauty and timeless rhythm.',
      explore: 'Explore',
      languageProgramsTitle: 'Language Programs',
      languageProgramsDesc: 'Learn English or German through immersive programs with native speakers, combining education with cultural practice and real-world conversation.',
      learnMore: 'Learn More',
      featured: 'Featured',
      destinationsTitle: 'DESTINATIONS',
      destinationsDesc: 'Explore landscapes shaped by time, where nature writes in bold lines and every view reminds us of beauty\'s power and fragility.',
      viewAllDestinations: 'View All Destinations',
      testimonials: 'Testimonials',
      travelersTitle: 'TRAVELERS',
      startYourJourney: 'Start Your Journey',
      beginHere: 'BEGIN HERE',
      ctaText: 'Join travelers who have discovered Tanzania\'s profound beauty through experiences that balance adventure, education, and sustainable impact.',
      contactUs: 'Contact Us',
      viewDestinations: 'View Destinations',
      rating: 'RATING',
      awardWinning: 'AWARD WINNING',
    },
    de: {
      experienceTanzania: 'Erleben Sie Tansania',
      heroTitle: 'TANSANIA',
      heroSubtitle: 'Wo weite Landschaften auf tiefe Stille treffen',
      exploreDestinations: 'Reiseziele Erkunden',
      languagePrograms: 'Sprachprogramme',
      years: 'JAHRE',
      travelers: 'REISENDE',
      destinations: 'REISEZIELE',
      ourPhilosophy: 'Unsere Philosophie',
      sustainableTravel: 'NACHHALTIGES REISEN',
      philosophyText1: 'Unser Ansatz orientiert sich an den UN-Zielen für nachhaltige Entwicklung und schafft Reisen, die Gleichgewicht wiederherstellen, Bildung fördern und Gemeinschaften durch faire Partnerschaften stärken.',
      philosophyText2: 'Jede Erfahrung wird mit bewusstem Ressourceneinsatz, Respekt vor der Natur als unserer Lehrerin und Zusammenarbeit gestaltet, die Gäste und Gemeinschaften auf sinnvolle Weise verbindet.',
      mission: 'MISSION',
      missionText: 'Reisen schaffen, die Gleichgewicht, Widerstandsfähigkeit und gemeinsame Stärke im Leben wiederherstellen. Wir gestalten Erlebnisse, bei denen Lernen in jeden Schritt eingewoben ist.',
      vision: 'VISION',
      visionText: 'Starke Kooperationen aufbauen, die Gäste, Gemeinschaften und globale Wirkung durch verantwortungsvolles Reisen und bedeutungsvolle Partnerschaften verbinden.',
      whatWeOffer: 'Was Wir Anbieten',
      experiences: 'ERLEBNISSE',
      culturalSafaris: 'Kultur-Safaris',
      culturalSafarisDesc: 'Erkunden Sie Tansanias weite Wildnis, von den endlosen Ebenen der Serengeti bis zu den uralten Baobabs in Tarangire, und entdecken Sie die raue Schönheit und zeitlose Rhythmus der Natur.',
      explore: 'Erkunden',
      languageProgramsTitle: 'Sprachprogramme',
      languageProgramsDesc: 'Lernen Sie Englisch oder Deutsch durch immersive Programme mit Muttersprachlern, die Bildung mit kultureller Praxis und realen Gesprächen verbinden.',
      learnMore: 'Mehr Erfahren',
      featured: 'Ausgewählt',
      destinationsTitle: 'REISEZIELE',
      destinationsDesc: 'Erkunden Sie von der Zeit geformte Landschaften, wo die Natur in kühnen Linien schreibt und jede Aussicht uns an die Kraft und Zerbrechlichkeit der Schönheit erinnert.',
      viewAllDestinations: 'Alle Reiseziele Ansehen',
      testimonials: 'Erfahrungsberichte',
      travelersTitle: 'REISENDE',
      startYourJourney: 'Beginnen Sie Ihre Reise',
      beginHere: 'HIER BEGINNEN',
      ctaText: 'Schließen Sie sich Reisenden an, die Tansanias tiefgreifende Schönheit durch Erlebnisse entdeckt haben, die Abenteuer, Bildung und nachhaltige Wirkung in Einklang bringen.',
      contactUs: 'Kontaktieren Sie Uns',
      viewDestinations: 'Reiseziele Ansehen',
      rating: 'BEWERTUNG',
      awardWinning: 'PREISGEKRÖNT',
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

  const testimonials = [
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
    <>
      <Navigation />
      
      {/* Hero Section */}
 <Hero />

 

      {/* Services Section */}
  <Services /> 

      {/* Destinations Grid */}
   <DestinationsGrid />

      {/* Testimonials */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <div className="inline-block border border-white/20 px-6 py-2 mb-8">
              <span className="text-white/70 font-medium text-xs tracking-[0.2em] uppercase">{t.testimonials}</span>
            </div>
            
            <h2 className="text-[4rem] md:text-[6rem] font-black mb-8 leading-[0.9] tracking-tighter">
              {t.travelersTitle}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-stone-800 border-2 border-stone-700 hover:border-stone-500 transition-all duration-500">
                <CardContent className="p-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-white fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  
                  <p className="text-stone-300 mb-8 leading-relaxed text-lg font-light">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-stone-700 pt-6">
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-stone-500 text-sm font-medium tracking-wide">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-stone-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-16">
            <div className="inline-block border border-stone-300 px-6 py-2 mb-8">
              <span className="text-stone-600 font-medium text-xs tracking-[0.2em] uppercase">{t.startYourJourney}</span>
            </div>
            
            <h2 className="text-[4rem] md:text-[7rem] font-black text-stone-900 mb-8 leading-[0.9] tracking-tighter">
              {t.beginHere}
            </h2>
            
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              {t.ctaText}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button asChild size="lg" className="bg-stone-900 hover:bg-stone-800 text-white px-16 py-8 text-xl transform hover:scale-105 transition-all duration-300">
              <Link href="/contact">
                <span className="flex items-center">
                  <Users className="mr-4 h-6 w-6" />
                  {t.contactUs}
                  <ArrowRight className="ml-4 h-6 w-6" />
                </span>
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-2 border-stone-900 bg-transparent text-stone-900 hover:bg-stone-900 hover:text-white px-16 py-8 text-xl">
              <Link href="/destinations">
                <span className="flex items-center">
                  <MapPin className="mr-4 h-6 w-6" />
                  {t.viewDestinations}
                  <ArrowRight className="ml-4 h-6 w-6" />
                </span>
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 pt-12 border-t border-stone-200">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-stone-900 fill-current mr-2" strokeWidth={0} />
              <span className="text-stone-700 font-medium text-sm tracking-wide">4.9/5 {t.rating}</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 text-stone-900 mr-2" strokeWidth={1.5} />
              <span className="text-stone-700 font-medium text-sm tracking-wide">{t.awardWinning}</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-stone-900 mr-2" strokeWidth={1.5} />
              <span className="text-stone-700 font-medium text-sm tracking-wide">500+ {t.travelers}</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}