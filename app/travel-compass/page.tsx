'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Compass, Calendar, Plane, FileText, Backpack, AlertCircle, Heart, Menu, X } from 'lucide-react';
import AirlineRecommendations from '@/components/compass/AirlineRecommendations';
import TravelPermit from '@/components/compass/TravelPermit';
import PackingLists from '@/components/compass/PackingLists';
import FAQs from '@/components/compass/FAQs';
import SeasonalAdvice from '@/components/compass/SeasonalAdvice';
import WhyChooseUs from '@/components/compass/WhyChooseUs';

const TravelCompassPage = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('why-choose-us');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const [id, ref] of Object.entries(contentRefs.current)) {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      title: 'Travel Compass',
      subtitle: 'Your Guide to Tanzania',
      sections: [
        { id: 'why-choose-us', title: 'Why Choose Us', icon: Heart },
        { id: 'seasonal-advice', title: 'Seasonal Advice', icon: Calendar },
        { id: 'airlines', title: 'Airline Recommendations', icon: Plane },
        { id: 'permits', title: 'Travel Permit', icon: FileText },
        { id: 'packing', title: 'Packing Lists', icon: Backpack },
        { id: 'faqs', title: 'Dos and Don\'ts', icon: AlertCircle }
      ]
    },
    de: {
      title: 'Reisekompass',
      subtitle: 'Dein Leitfaden für Tansania',
      sections: [
        { id: 'why-choose-us', title: 'Warum uns wählen', icon: Heart },
        { id: 'seasonal-advice', title: 'Saisonale Beratung', icon: Calendar },
        { id: 'airlines', title: 'Flugempfehlungen', icon: Plane },
        { id: 'permits', title: 'Reisegenehmigung', icon: FileText },
        { id: 'packing', title: 'Packlisten', icon: Backpack },
        { id: 'faqs', title: 'Dos und Don\'ts', icon: AlertCircle }
      ]
    }
  };

  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = contentRefs.current[sectionId];
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const renderSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'why-choose-us':
        return <WhyChooseUs />;
      case 'seasonal-advice':
        return <SeasonalAdvice />;
      case 'airlines':
        return <AirlineRecommendations />;
      case 'permits':
        return <TravelPermit />;
      case 'packing':
        return <PackingLists />;
      case 'faqs':
        return <FAQs />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative h-[32vh] sm:h-[40vh] md:h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=80" 
          alt="Tanzania Landscape" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ maxHeight: '320px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-heading/90 via-brand-secondary/80 to-brand-heading/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center text-white transition-all duration-1000 px-2 sm:px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <Compass className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-2 sm:mb-4 animate-pulse drop-shadow-2xl" />
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 drop-shadow-2xl">{t.title}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light drop-shadow-lg">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-40 right-4 z-50 bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-brand-secondary transition-colors"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          {/* Sidebar Navigation */}
          <aside className={`lg:sticky lg:top-24 lg:self-start lg:w-80 transition-all duration-300 ${
            isMobileMenuOpen ? 'fixed inset-0 z-40 bg-white p-6 overflow-y-auto' : 'hidden lg:block'
          }`}>
            <div className="bg-white rounded-3xl shadow-xl border border-brand-border overflow-hidden">
              {/* Sidebar Header */}
              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-6">
                <h2 className="text-white text-2xl font-bold flex items-center gap-3">
                  <Compass className="w-7 h-7" />
                  Chapters
                </h2>
              </div>

              {/* Navigation Items */}
              <nav className="p-4 space-y-2">
                {t.sections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left group ${
                        isActive 
                          ? 'bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border-l-4 border-brand-primary shadow-md' 
                          : 'hover:bg-brand-bg-light border-l-4 border-transparent'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-br from-brand-primary to-brand-secondary shadow-lg' 
                          : 'bg-brand-bg-light group-hover:bg-brand-primary/20'
                      }`}>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-brand-primary'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-semibold ${isActive ? 'text-brand-primary' : 'text-gray-400'}`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="h-px flex-1 bg-brand-border"></div>
                        </div>
                        <p className={`font-semibold mt-1 text-sm lg:text-base ${
                          isActive ? 'text-brand-heading' : 'text-gray-600 group-hover:text-brand-heading'
                        }`}>
                          {section.title}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar Footer */}
              <div className="p-6 bg-gradient-to-r from-brand-bg-light to-white border-t border-brand-border">
                <p className="text-sm text-gray-600 text-center">
                  {t.sections.findIndex(s => s.id === activeSection) + 1} of {t.sections.length} chapters
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-brand-border overflow-hidden">
              {/* Book Spine */}
              <div className="h-2 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-heading"></div>
              {/* Content Sections */}
              <div className="divide-y divide-brand-border">
                {t.sections.map((section) => (
                  <div
                    key={section.id}
                    ref={(el) => (contentRefs.current[section.id] = el)}
                    className="p-4 sm:p-6 md:p-10 lg:p-12 scroll-mt-24"
                  >
                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                      {/* Section Title for mobile readability */}
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-heading mb-2 sm:mb-3">{section.title}</h2>
                      {/* Section Content */}
                      <div className="prose prose-sm sm:prose-base max-w-none prose-headings:font-semibold prose-p:mb-3 sm:prose-p:mb-4 prose-p:text-[15px] sm:prose-p:text-base prose-img:rounded-xl prose-img:mx-auto prose-img:max-h-[180px] sm:prose-img:max-h-[240px] prose-img:w-full prose-img:object-cover prose-img:object-center">
                        {renderSectionContent(section.id)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Book Bottom */}
              <div className="h-2 bg-gradient-to-r from-brand-heading via-brand-secondary to-brand-primary"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TravelCompassPage;