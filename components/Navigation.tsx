'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { 
      href: '/paths', 
      label: language === 'de' ? 'Pfade' : 'Paths',
      dropdown: [
        { href: '/paths/safaris', label: language === 'de' ? 'Safaris' : 'Safaris' },
        { href: '/paths/peaks', label: language === 'de' ? 'Gipfel' : 'Peaks' },
        { href: '/paths/packages', label: language === 'de' ? 'Pakete' : 'Packages' },
      ]
    },
    { 
      href: '/experience', 
      label: language === 'de' ? 'Erfahrung' : 'Experience',
      dropdown: [
        { href: '/experience/inner-safari', label: language === 'de' ? 'Innere Safari' : 'Inner Safari' },
        { href: '/experience/retreat', label: language === 'de' ? 'Rückzug' : 'Retreat' },
        { href: '/experience/living-leading-abroad', label: language === 'de' ? 'Leben und Führen im Ausland' : 'Living and Leading Abroad' },
      ]
    },
     { 
      href: '/travel-compass', 
      label: language === 'de' ? 'Reisekompass' : 'Travel Compass',
      dropdown: [
        { href: '/travel-compass/why-choose-us', label: language === 'de' ? 'Warum uns wählen' : 'Why Choose Us' },
        { href: '/travel-compass/seasonal-advice', label: language === 'de' ? 'Saisonale Beratung' : 'Seasonal Advice' },
        { href: '/travel-compass/airline-recommendations', label: language === 'de' ? 'Flugempfehlungen' : 'Airline Recommendations' },
        { href: '/travel-compass/travel-permit', label: language === 'de' ? 'Reisegenehmigung' : 'Travel Permit' },
        { href: '/travel-compass/packing-lists', label: language === 'de' ? 'Packlisten' : 'Packing Lists' },
        { href: '/travel-compass/faqs', label: language === 'de' ? 'Dos und Don\'ts (FAQs)' : 'Dos and Don\'ts (FAQs)' },
        { href: '/travel-compass/road-map', label: language === 'de' ? 'Routenplan' : 'Road Map' },
      ]
    },
    { 
      href: '/impact', 
      label: language === 'de' ? 'Wirkung' : 'Impact'
    },
    { 
      href: '/team', 
      label: language === 'de' ? 'Team' : 'Team'
    },
   
  ];

  const toggleMobileDropdown = (href: string) => {
    setMobileDropdown(mobileDropdown === href ? null : href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-brand-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28 lg:h-32">
          {/* Logo - Bigger and more prominent */}
          <Link href="/" className="flex items-center space-x-4 group relative z-10">
            <div className="relative">
              <img 
                src="/logo.jpeg" 
                alt="SasaNdioSasa" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-md"
              />
              {/* Elegant glow effect on hover */}
              <div className="absolute inset-0 bg-brand-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </Link>

          {/* Desktop Navigation - Bold and spacious */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center px-5 xl:px-6 py-3 text-brand-heading hover:text-brand-primary transition-all duration-300 font-semibold text-base xl:text-lg tracking-wide uppercase relative overflow-hidden group"
                >
                  {/* Elegant underline effect */}
                  <span className="relative z-10">
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown 
                        className={`inline-block ml-1.5 h-4 w-4 xl:h-5 xl:w-5 transition-transform duration-300 ${
                          openDropdown === item.href ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Dropdown Menu - More spacious and elegant */}
                {item.dropdown && openDropdown === item.href && (
                     <div className="absolute top-full left-0 pt-3 w-80">
                    <div className="bg-white border-2 border-brand-border/20 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-300 overflow-hidden">
                      <div className="py-3">
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="group/item relative block px-8 py-4 text-brand-heading hover:bg-brand-menu-hover hover:text-brand-primary transition-all duration-300 text-base font-medium border-b border-brand-border/10 last:border-b-0 overflow-hidden"
                        >
                          {/* Sliding background effect */}
                          <span className="absolute left-0 top-0 h-full w-1 bg-brand-primary transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-top" />
                          <span className="relative z-10 block transform transition-transform duration-300 group-hover/item:translate-x-2">
                            {subItem.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Switcher - Elegant and bold */}
            <div className="flex items-center space-x-3 border-l-2 border-brand-border/30 pl-6 xl:pl-8 ml-4 xl:ml-6">
              <Globe className="h-5 w-5 xl:h-6 xl:w-6 text-brand-heading/60" />
              <button
                onClick={() => setLanguage('en')}
                className={`h-11 xl:h-12 px-5 xl:px-6 text-sm xl:text-base font-bold tracking-wider transition-all duration-300 transform hover:scale-105 ${
                  language === 'en' 
                    ? 'bg-brand-primary text-white shadow-lg' 
                    : 'text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover border-2 border-brand-border/20'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`h-11 xl:h-12 px-5 xl:px-6 text-sm xl:text-base font-bold tracking-wider transition-all duration-300 transform hover:scale-105 ${
                  language === 'de' 
                    ? 'bg-brand-primary text-white shadow-lg' 
                    : 'text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover border-2 border-brand-border/20'
                }`}
              >
                DE
              </button>
            </div>
          </div>

          {/* Mobile menu button - Bigger and bolder */}
          <div className="lg:hidden flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="h-11 sm:h-12 px-4 sm:px-5 text-sm sm:text-base font-bold tracking-wider border-2 border-brand-border/30 text-brand-heading hover:bg-brand-menu-hover hover:text-brand-primary transition-all duration-300 transform hover:scale-105"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-heading hover:text-brand-primary p-3 hover:bg-brand-menu-hover transition-all duration-300 border-2 border-brand-border/30 hover:border-brand-primary"
            >
              {isOpen ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <Menu className="h-6 w-6 sm:h-7 sm:w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Spacious and elegant */}
        {isOpen && (
          <div className="lg:hidden border-t-2 border-brand-border/30 animate-in slide-in-from-top duration-300">
            <div className="px-3 pt-6 pb-6 space-y-2 bg-white max-h-[calc(100vh-96px)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.href} className="border-b border-brand-border/10 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 px-5 py-4 text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover transition-all duration-300 font-semibold text-base sm:text-lg uppercase tracking-wide"
                      onClick={() => !item.dropdown && setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(item.href)}
                        className="px-5 py-4 text-brand-heading/60 hover:text-brand-primary transition-all duration-300"
                      >
                        <ChevronDown 
                          className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${
                            mobileDropdown === item.href ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && mobileDropdown === item.href && (
                    <div className="pl-6 pr-4 py-3 space-y-1 bg-brand-menu-hover/50 animate-in slide-in-from-top duration-300">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-6 py-4 text-sm sm:text-base text-brand-heading/80 hover:text-brand-primary hover:bg-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}