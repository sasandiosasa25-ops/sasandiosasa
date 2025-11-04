'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

type MenuItem = {
  href: string;
  label: string;
};

type Section = {
  title?: string;
  items: MenuItem[];
};

type NavItem = {
  href?: string;
  label: string;
  hasDropdown: boolean;
  sections?: Section[];
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();

  const navItems: NavItem[] = [
    { 
      label: language === 'de' ? 'Pfade' : 'Paths',
      hasDropdown: true,
      sections: [
        {
          title: language === 'de' ? 'Safaris' : 'Safaris',
          items: [
            { href: '/road-map#flow', label: 'The Flow — Dar es Salaam • Selous • Mikumi NP' },
            { href: '/road-map#shift', label: 'The Shift — Tarangire NP • Serengeti • Ngorongoro Crater' },
            { href: '/road-map#unfolding', label: 'The Unfolding — Arusha NP • Maasai Experience • Tarangire NP • Serengeti • Ngorongoro Crater' },
            { href: '/road-map#pause', label: 'Pause — Arusha NP • Maasai Lodge • Tarangire NP' },
            { href: '/road-map#little-tracks', label: 'Little Tracks — Family Safari' },
          ]
        },
        {
          title: language === 'de' ? 'Strand' : 'Beach',
          items: [
            { href: '/road-map#exhale', label: 'The Exhale — Zanzibar' },
            { href: '/road-map#return', label: 'The Return — Pangani • Maziwe Island' },
          ]
        },
        {
          title: language === 'de' ? 'Gipfel' : 'Peaks',
          items: [
            { href: '/paths/peaks', label: language === 'de' ? 'Gipfel erkunden' : 'Explore Peaks' },
          ]
        },
      ]
    },
    { 
      label: language === 'de' ? 'Erfahrung' : 'Experience',
      hasDropdown: true,
      sections: [
        {
          items: [
            { href: '/experience/inner-safari', label: language === 'de' ? 'Innere Safari' : 'Inner Safari' },
            { href: '/experience/retreat', label: language === 'de' ? 'Rückzug' : 'Retreat' },
            { href: '/experience/living-leading-abroad', label: language === 'de' ? 'Leben und Führen im Ausland' : 'Living and Leading Abroad' },
          ]
        }
      ]
    },
    { 
      label: language === 'de' ? 'Reisekompass' : 'Travel Compass',
      hasDropdown: true,
      sections: [
        {
          items: [
            { href: '/travel-compass/why-choose-us', label: language === 'de' ? 'Warum uns wählen' : 'Why Choose Us' },
            { href: '/travel-compass/seasonal-advice', label: language === 'de' ? 'Saisonale Beratung' : 'Seasonal Advice' },
            { href: '/travel-compass/airline-recommendations', label: language === 'de' ? 'Flugempfehlungen' : 'Airline Recommendations' },
            { href: '/travel-compass/travel-permit', label: language === 'de' ? 'Reisegenehmigung' : 'Travel Permit' },
            { href: '/travel-compass/packing-lists', label: language === 'de' ? 'Packlisten' : 'Packing Lists' },
            { href: '/travel-compass/faqs', label: language === 'de' ? 'Dos und Don\'ts (FAQs)' : 'Dos and Don\'ts (FAQs)' },
            { href: '/travel-compass/road-map', label: language === 'de' ? 'Routenplan' : 'Road Map' },
          ]
        }
      ]
    },
    { 
      href: '/impact', 
      label: language === 'de' ? 'Wirkung' : 'Impact',
      hasDropdown: false,
    },
    { 
      href: '/team', 
      label: language === 'de' ? 'Team' : 'Team',
      hasDropdown: false,
    },
  ];

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
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
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.hasDropdown ? (
                  <button
                    className="flex items-center px-5 xl:px-6 py-3 text-brand-heading hover:text-brand-primary transition-all duration-300 font-semibold text-base xl:text-lg tracking-wide uppercase relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> {item.label}
                      <ChevronDown 
                        className={`inline-block ml-1.5 h-4 w-4 xl:h-5 xl:w-5 transition-transform duration-300 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className="flex items-center px-5 xl:px-6 py-3 text-brand-heading hover:text-brand-primary transition-all duration-300 font-semibold text-base xl:text-lg tracking-wide uppercase relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> {item.label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}

                {/* Dropdown Menu - Elegant sections */}
                {item.hasDropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-3 w-[420px]">
                    <div className="bg-white border-2 border-brand-border/20 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-300 overflow-hidden">
                      <div className="py-2">
                        {item.sections?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className={sectionIndex > 0 ? 'border-t-2 border-brand-border/20 pt-2 mt-2' : ''}>
                            {section.title && (
                              <div className="px-8 py-3">
                                <h3 className="text-brand-heading font-bold text-sm uppercase tracking-wider">
                                  <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> {section.title}
                                </h3>
                              </div>
                            )}
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="group/item relative block px-8 py-3.5 text-brand-heading hover:bg-brand-menu-hover hover:text-brand-primary transition-all duration-300 text-sm font-medium overflow-hidden"
                              >
                                <span className="absolute left-0 top-0 h-full w-1 bg-brand-primary transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-top" />
                                <span className="relative z-10 block transform transition-transform duration-300 group-hover/item:translate-x-2">
                                  {subItem.label}
                                </span>
                              </Link>
                            ))}
                          </div>
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
                <div key={item.label} className="border-b border-brand-border/10 last:border-b-0">
                  <div className="flex items-center justify-between">
                    {item.hasDropdown ? (
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="flex-1 text-left px-5 py-4 text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover transition-all duration-300 font-semibold text-base sm:text-lg uppercase tracking-wide"
                      >
                        <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href!}
                        className="flex-1 px-5 py-4 text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover transition-all duration-300 font-semibold text-base sm:text-lg uppercase tracking-wide"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> {item.label}
                      </Link>
                    )}
                    {item.hasDropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="px-5 py-4 text-brand-heading/60 hover:text-brand-primary transition-all duration-300"
                      >
                        <ChevronDown 
                          className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${
                            mobileDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  {item.hasDropdown && mobileDropdown === item.label && (
                    <div className="pl-6 pr-4 py-3 space-y-1 bg-brand-menu-hover/50 animate-in slide-in-from-top duration-300">
                      {item.sections?.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          {section.title && (
                            <div className="px-6 py-2">
                              <h3 className="text-brand-heading font-bold text-xs uppercase tracking-wider">
                                <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> {section.title}
                              </h3>
                            </div>
                          )}
                          {section.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-6 py-3 text-sm sm:text-base text-brand-heading/80 hover:text-brand-primary hover:bg-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary font-medium"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
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