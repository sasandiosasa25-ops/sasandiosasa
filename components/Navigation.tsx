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
      href: '/', 
      label: language === 'de' ? 'Basis' : 'Base',
      hasDropdown: false,
    },
    { 
      label: language === 'de' ? 'Pfade' : 'Paths',
      hasDropdown: true,
      sections: [
        {
          title: language === 'de' ? 'Safaris' : 'Safaris',
          items: [
            { href: '/road-map/#flow', label: 'The Flow — Dar es Salaam • Selous • Mikumi NP' },
            { href: '/road-map/#shift', label: 'The Shift — Tarangire NP • Serengeti • Ngorongoro Crater' },
            { href: '/road-map/#unfolding', label: 'The Unfolding — Arusha NP • Maasai Experience • Tarangire NP • Serengeti • Ngorongoro Crater' },
            { href: '/road-map/#pause', label: 'Pause — Arusha NP • Maasai Lodge • Tarangire NP' },
            { href: '/road-map/#little-tracks', label: 'Little Tracks — Family Safari' },
          ]
        },
        {
          title: language === 'de' ? 'Strand' : 'Beach',
          items: [
            { href: '/road-map/#exhale', label: 'The Exhale — Zanzibar' },
            { href: '/road-map/#return', label: 'The Return — Pangani • Maziwe Island' },
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
            { href: '/experience/#inner-safari', label: language === 'de' ? 'Innere Safari' : 'Inner Safari' },
            { href: '/experience/#retreat', label: language === 'de' ? 'Rückzug' : 'Retreat' },
          ]
        }
      ]
    },
    { 
      label: language === 'de' ? 'Wirkung' : 'Impact',
      hasDropdown: true,
      sections: [
        {
          items: [
            { href: '/impact', label: language === 'de' ? 'Wirkung Übersicht' : 'Impact Overview' },
          ]
        },
        {
          title: language === 'de' ? 'UN-Nachhaltigkeitsziele' : 'UN Sustainability Goals',
          items: [
            { href: '/impact/#good-health', label: language === 'de' ? 'Gesundheit und Wohlbefinden' : 'Good Health and Well-being' },
            { href: '/impact/#quality-education', label: language === 'de' ? 'Hochwertige Bildung' : 'Quality Education' },
            { href: '/impact/#decent-work', label: language === 'de' ? 'Menschenwürdige Arbeit und Wirtschaftswachstum' : 'Decent Work and Economic Growth' },
            { href: '/impact/#responsible-consumption', label: language === 'de' ? 'Verantwortungsvolle Konsum- und Produktionsmuster' : 'Responsible Production and Consumption' },
            { href: '/impact/#life-on-land', label: language === 'de' ? 'Leben an Land' : 'Life on Land' },
            { href: '/impact/#partnerships', label: language === 'de' ? 'Partnerschaften zur Erreichung der Ziele' : 'Partnerships for the Goals' },
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
            { href: '/travel-compass/#why-choose-us', label: language === 'de' ? 'Warum uns wählen' : 'Why Choose Us' },
            { href: '/travel-compass/#seasonal-advice', label: language === 'de' ? 'Saisonale Beratung' : 'Seasonal Advice' },
            { href: '/travel-compass/#airline-recommendations', label: language === 'de' ? 'Flugempfehlungen' : 'Airline Recommendations' },
            { href: '/travel-compass/#travel-permit', label: language === 'de' ? 'Reisegenehmigung' : 'Travel Permit' },
            { href: '/travel-compass/#packing-lists', label: language === 'de' ? 'Packlisten' : 'Packing Lists' },
            { href: '/travel-compass/#faqs', label: language === 'de' ? 'Dos und Don\'ts (FAQs)' : 'Dos and Don\'ts (FAQs)' },
            { href: '/road-map', label: language === 'de' ? 'Routenplan' : 'Road Map' },
          ]
        }
      ]
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
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg z-50 shadow-xl">
      {/* Top Bar - More prominent */}
      <div className="bg-white/95 backdrop-blur-lg border-b-2 border-brand-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex justify-end items-center h-14 space-x-8">
            {/* Quick Links - Bolder */}
            <Link 
              href="/" 
              className="text-brand-heading hover:text-brand-primary transition-colors text-base font-black uppercase tracking-wider"
            >
              <span className="font-comfortaa italic normal-case text-brand-primary text-lg">SasaNdioSasa</span> {language === 'de' ? 'Basis' : 'Base'}
            </Link>
            <Link 
              href="/team" 
              className="text-brand-heading hover:text-brand-primary transition-colors text-base font-black uppercase tracking-wider"
            >
              <span className="font-comfortaa italic normal-case text-brand-primary text-lg">SasaNdioSasa</span> {language === 'de' ? 'Team' : 'Team'}
            </Link>
            {/* Language Switcher - More prominent */}
            <div className="flex items-center space-x-3 border-l-2 border-brand-border/40 pl-8">
              <Globe className="h-5 w-5 text-brand-heading/70" />
              <button
                onClick={() => setLanguage('en')}
                className={`h-10 px-5 text-sm font-black tracking-widest transition-all duration-300 border-2 ${
                  language === 'en' 
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/30' 
                    : 'text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover border-brand-border/30'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`h-10 px-5 text-sm font-black tracking-widest transition-all duration-300 border-2 ${
                  language === 'de' 
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/30' 
                    : 'text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover border-brand-border/30'
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/95 backdrop-blur-lg border-b-2 border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28 md:h-32 lg:h-40 xl:h-44">
            {/* Logo - Maximum impact and presence */}
            <Link href="/" className="flex items-center space-x-4 group relative z-10">
              <div className="relative">
                <img 
                  src="/logos.png" 
                  alt="SasaNdioSasa" 
                  className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-2xl"
                />
                {/* Premium glow effect on hover */}
                <div className="absolute inset-0 bg-brand-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </Link>

            {/* Desktop Navigation - Maximum impact, bold and regal */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.filter(item => !['Base', 'Basis', 'Team'].includes(item.label)).map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center px-7 xl:px-9 py-5 text-brand-heading hover:text-brand-primary transition-all duration-300 font-black text-xl xl:text-2xl tracking-wider uppercase relative overflow-hidden group border-2 border-transparent hover:border-brand-primary/40 bg-gradient-to-b from-transparent to-transparent hover:from-brand-primary/5 hover:to-brand-primary/10 shadow-sm hover:shadow-md"
                    >
                      <span className="relative z-10">
                        <span className="font-comfortaa italic normal-case text-brand-primary text-2xl xl:text-3xl">SasaNdioSasa</span> {item.label}
                        <ChevronDown 
                          className={`inline-block ml-2 h-6 w-6 xl:h-7 xl:w-7 transition-transform duration-300 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-1.5 bg-brand-primary transition-all duration-300 group-hover:w-full shadow-lg shadow-brand-primary/50" />
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className="flex items-center px-7 xl:px-9 py-5 text-brand-heading hover:text-brand-primary transition-all duration-300 font-black text-xl xl:text-2xl tracking-wider uppercase relative overflow-hidden group border-2 border-transparent hover:border-brand-primary/40 bg-gradient-to-b from-transparent to-transparent hover:from-brand-primary/5 hover:to-brand-primary/10 shadow-sm hover:shadow-md"
                    >
                      <span className="relative z-10">
                        <span className="font-comfortaa italic normal-case text-brand-primary text-2xl xl:text-3xl">SasaNdioSasa</span> {item.label}
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-1.5 bg-brand-primary transition-all duration-300 group-hover:w-full shadow-lg shadow-brand-primary/50" />
                    </Link>
                  )}

                  {/* Dropdown Menu - Ultra-regal and refined with scrolling */}
                  {item.hasDropdown && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-4 w-[520px]">
                      <div className="bg-white border-4 border-brand-primary/30 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-300 overflow-hidden max-h-[calc(100vh-200px)] overflow-y-auto">
                        <div className="py-4">
                          {item.sections?.map((section, sectionIndex) => (
                            <div key={sectionIndex} className={sectionIndex > 0 ? 'border-t-4 border-brand-border/30 pt-4 mt-4' : ''}>
                              {section.title && (
                                <div className="px-12 py-5 bg-gradient-to-r from-brand-primary/10 to-transparent border-l-4 border-brand-primary">
                                  <h3 className="text-brand-heading font-black text-lg uppercase tracking-widest">
                                    <span className="font-comfortaa italic normal-case text-brand-primary text-xl">SasaNdioSasa</span> {section.title}
                                  </h3>
                                </div>
                              )}
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="group/item relative block px-12 py-5 text-brand-heading hover:bg-gradient-to-r hover:from-brand-menu-hover hover:to-transparent hover:text-brand-primary transition-all duration-300 text-lg font-bold overflow-hidden border-l-4 border-transparent hover:border-brand-primary"
                                >
                                  <span className="relative z-10 block transform transition-transform duration-300 group-hover/item:translate-x-4">
                                   <span className="font-comfortaa italic normal-case text-brand-primary text-xl">SasaNdioSasa</span> {subItem.label}
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
            </div>

            {/* Mobile menu button - Bold and commanding */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                className="h-14 px-6 text-lg font-black tracking-widest border-3 border-brand-primary/50 text-brand-heading hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 shadow-lg"
              >
                {language.toUpperCase()}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-heading hover:text-white hover:bg-brand-primary p-5 transition-all duration-300 border-3 border-brand-primary/50 hover:border-brand-primary shadow-lg"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Commanding and elegant */}
          {isOpen && (
            <div className="lg:hidden border-t-4 border-brand-primary/40 animate-in slide-in-from-top duration-300">
              <div className="px-4 pt-10 pb-10 space-y-4 bg-gradient-to-b from-white to-brand-menu-hover/30 max-h-[calc(100vh-112px)] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b-2 border-brand-border/30 last:border-b-0 pb-4">
                    <div className="flex items-center justify-between">
                      {item.hasDropdown ? (
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="flex-1 text-left px-7 py-6 text-brand-heading hover:text-brand-primary hover:bg-gradient-to-r hover:from-brand-menu-hover hover:to-transparent transition-all duration-300 font-black text-2xl sm:text-3xl uppercase tracking-wider border-l-4 border-transparent hover:border-brand-primary"
                        >
                          <span className="font-comfortaa italic normal-case text-brand-primary text-3xl sm:text-4xl">SasaNdioSasa</span> {item.label}
                        </button>
                      ) : (
                        <Link
                          href={item.href!}
                          className="flex-1 px-7 py-6 text-brand-heading hover:text-brand-primary hover:bg-gradient-to-r hover:from-brand-menu-hover hover:to-transparent transition-all duration-300 font-black text-2xl sm:text-3xl uppercase tracking-wider border-l-4 border-transparent hover:border-brand-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="font-comfortaa italic normal-case text-brand-primary text-3xl sm:text-4xl">SasaNdioSasa</span> {item.label}
                        </Link>
                      )}
                      {item.hasDropdown && (
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="px-7 py-6 text-brand-heading/70 hover:text-brand-primary transition-all duration-300"
                        >
                          <ChevronDown 
                            className={`h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 ${
                              mobileDropdown === item.label ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      )}
                    </div>
                    {item.hasDropdown && mobileDropdown === item.label && (
                      <div className="pl-10 pr-7 py-5 space-y-3 bg-gradient-to-r from-brand-menu-hover/80 to-transparent animate-in slide-in-from-top duration-300 border-l-4 border-brand-primary mt-3">
                        {item.sections?.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            {section.title && (
                              <div className="px-7 py-4 bg-brand-primary/10">
                                <h3 className="text-brand-heading font-black text-base uppercase tracking-widest">
                                  <span className="font-comfortaa italic normal-case text-brand-primary text-xl">SasaNdioSasa</span> {section.title}
                                </h3>
                              </div>
                            )}
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-9 py-5 text-lg sm:text-xl text-brand-heading/90 hover:text-brand-primary hover:bg-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary font-black"
                                onClick={() => setIsOpen(false)}
                              >
                              <span className="font-comfortaa italic normal-case text-brand-primary text-xl sm:text-2xl">SasaNdioSasa</span>  {subItem.label}
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
      </div>
    </nav>
  );
}