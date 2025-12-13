'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface MenuItem {
  href: string;
  label: string;
  noPrefix?: boolean;
}

interface Section {
  title?: string;
  hasDropdown?: boolean;
  items: MenuItem[];
}

interface NavItem {
  href?: string;
  label: string;
  hasDropdown: boolean;
  sections?: Section[];
}

export default function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();

  const toggleDesktopDropdown = (label: string): void => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleDesktopSubDropdown = (title: string): void => {
    setOpenSubDropdown(openSubDropdown === title ? null : title);
  };

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
          hasDropdown: true,
          items: [
            { href: '/road-map/#hidden-path', label: 'The Hidden Path - Arusha City • Lake Natron • Lake Eyasi • Singida • Lake Victoria' },
            { href: '/road-map/#flow', label: 'The Flow - Lake Victoria • Selous • Mikumi NP' },
            { href: '/road-map/#shift', label: 'The Shift - Tarangire NP • Serengeti • Ngorongoro Crater' },
            { href: '/road-map/#unfolding', label: 'The Unfolding - Arusha NP • Maasai Experience • Tarangire NP • Serengeti • Ngorongoro Crater' },
            { href: '/road-map/#pause', label: 'Pause - Arusha NP • Maasai Lodge • Tarangire NP' },
            { href: '/road-map/#little-tracks', label: 'Little Tracks - Family Safari' },
          ]
        },
        {
          title: language === 'de' ? 'Strand' : 'Beach',
          hasDropdown: true,
          items: [
            { href: '/road-map/#exhale', label: 'The Exhale - Zanzibar' },
            { href: '/road-map/#return', label: 'The Return - Pangani • Maziwe Island' },
          ]
        },
        {
          title: language === 'de' ? 'Gipfel' : 'Peaks',
          hasDropdown: true,
          items: [
            { href: '/paths/peaks', label: language === 'de' ? 'Gipfel erkunden' : 'Explore Peaks - Mt Kilimanjaro • Mt Meru • Usambara' },
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
            { href: '/impact', label: language === 'de' ? 'UN-Nachhaltigkeitsziele' : 'UN Sustainability Goals' },
            { href: '/ndotozetu', label: language === 'de' ? 'Ndoto Zetu' : 'Ndoto Zetu' },
            { href: '/cac', label: language === 'de' ? 'CAC' : 'CAC' },
          ]
        }
      ]
    },
    { 
      href: '/team', 
      label: language === 'de' ? 'Team' : 'Team',
      hasDropdown: false,
    },
    { 
      label: language === 'de' ? 'Kompass' : 'Compass',
      hasDropdown: true,
      sections: [
        {
          items: [
            { href: '/travel-compass/#why-choose-us', label: language === 'de' ? 'Warum uns wählen' : 'Why Choose Us', noPrefix: true },
            { href: '/travel-compass/#seasonal-advice', label: language === 'de' ? 'Saisonale Beratung' : 'Seasonal Advice', noPrefix: true },
            { href: '/travel-compass/#airline-recommendations', label: language === 'de' ? 'Flugempfehlungen' : 'Airline Recommendations', noPrefix: true },
            { href: '/travel-compass/#travel-permit', label: language === 'de' ? 'Reisegenehmigung' : 'Travel Permit', noPrefix: true },
            { href: '/travel-compass/#packing-lists', label: language === 'de' ? 'Packlisten' : 'Packing Lists', noPrefix: true },
            { href: '/travel-compass/#faqs', label: language === 'de' ? 'Dos und Don\'ts (FAQs)' : 'Dos and Don\'ts (FAQs)', noPrefix: true },
            { href: '/compass/road-map', label: language === 'de' ? 'Routenplan' : 'Road Map', noPrefix: true },
          ]
        }
      ]
    },
  ];

  const toggleMobileDropdown = (label: string): void => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <nav className="relative bg-white z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex justify-end items-center h-12 space-x-6">
            {/* Quick Links */}
            <Link 
              href="/" 
              className="text-brand-heading hover:text-brand-primary transition-colors text-sm font-semibold uppercase tracking-wide"
            >
              <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{language === 'de' ? 'Basis' : 'Base'}</span>
            </Link>
            <Link 
              href="/team" 
              className="text-brand-heading hover:text-brand-primary transition-colors text-sm font-semibold uppercase tracking-wide"
            >
              <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{language === 'de' ? 'Team' : 'Team'}</span>
            </Link>
            {/* Language Switcher in Top Bar */}
            <div className="flex items-center space-x-2 border-l border-brand-border pl-6">
              <Globe className="h-4 w-4 text-brand-heading/60" />
              <button
                onClick={() => setLanguage('en')}
                className={`h-8 px-3 text-xs font-bold tracking-wider transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-brand-primary text-white' 
                    : 'text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`h-8 px-3 text-xs font-bold tracking-wider transition-all duration-300 ${
                  language === 'de' 
                    ? 'bg-brand-primary text-white' 
                    : 'text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover'
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-brand-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24 lg:h-28">
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

            {/* Desktop Navigation - Bold and spacious */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {navItems.filter(item => !['Base', 'Basis', 'Team'].includes(item.label)).map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                >
                  {item.hasDropdown ? (
                    <button
                      onClick={() => toggleDesktopDropdown(item.label)}
                      className="flex items-center px-5 xl:px-6 py-3 text-brand-heading hover:text-brand-primary transition-all duration-300 font-semibold text-base xl:text-lg tracking-wide uppercase relative overflow-hidden group"
                    >
                      <span className="relative z-10">
                        {item.label !== "Ndoto Zetu" && item.label !== "CAC" && (
                          <span className="font-comfortaa italic normal-case text-brand-primary">
                            SasaNdioSasa
                          </span>
                        )}{" "}
                        <span className="font-normal">{item.label}</span>
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
                        <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{item.label}</span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}

                  {/* Dropdown Menu - Elegant sections with scrolling */}
                  {item.hasDropdown && openDropdown === item.label && (
                    <div className="absolute top-10 left-0 pt-3 mt-3 w-[420px]">
                      <div className="bg-white border-2 border-brand-primary shadow-2xl animate-in fade-in slide-in-from-top-3 duration-300 overflow-hidden max-h-[calc(100vh-200px)] overflow-y-auto">
                        <div className="py-2">
                          {item.sections?.map((section, sectionIndex) => (
                            <div key={sectionIndex} className={sectionIndex > 0 ? 'border-t-2 border-brand-border pt-2 mt-2' : ''}>
                              {section.title && (
                                <>
                                  {section.hasDropdown ? (
                                    <div className="relative group/section">
                                      <button
                                        onClick={() => toggleDesktopSubDropdown(section.title!)}
                                        className="w-full px-8 py-3 text-left group/sectionbtn relative block hover:bg-brand-menu-hover hover:text-brand-primary transition-all duration-300 overflow-hidden"
                                      >
                                        <span className="absolute left-0 top-0 h-full w-1 bg-brand-primary transform scale-y-0 group-hover/sectionbtn:scale-y-100 transition-transform duration-300 origin-top" />
                                        <h3 className="text-brand-heading font-normal text-sm uppercase tracking-wider relative z-10 flex items-center justify-between">
                                          <span>
                                            <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{section.title}</span>
                                          </span>
                                          <ChevronDown 
                                            className={`h-4 w-4 transition-transform duration-300 ${
                                              openSubDropdown === section.title ? 'rotate-180' : ''
                                            }`} 
                                          />
                                        </h3>
                                      </button>
                                      
                                      {/* Sub-dropdown */}
                                      {openSubDropdown === section.title && (
                                        <div 
                                          className="bg-white border-l-4 border-brand-primary animate-in fade-in slide-in-from-left-3 duration-300 max-h-[calc(100vh-400px)] overflow-y-auto"
                                        >
                                          {section.items.map((subItem) => (
                                            <Link
                                              key={subItem.href}
                                              href={subItem.href}
                                              className="group/item relative block px-10 py-3.5 text-brand-heading hover:bg-brand-menu-hover hover:text-brand-primary transition-all duration-300 text-sm font-normal overflow-hidden"
                                            >
                                              <span className="absolute left-0 top-0 h-full w-1 bg-brand-primary transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-top" />
                                              <span className="relative z-10 block transform transition-transform duration-300 group-hover/item:translate-x-2">
                                                {subItem.noPrefix || subItem.label === "Ndoto Zetu" || subItem.label === "CAC" ? (
                                                  <span className="font-normal">{subItem.label}</span>
                                                ) : (
                                                  <>
                                                    <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{subItem.label}</span>
                                                  </>
                                                )}
                                              </span>
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <div className="px-8 py-3">
                                      <h3 className="text-brand-heading font-normal text-sm uppercase tracking-wider">
                                        <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{section.title}</span>
                                      </h3>
                                    </div>
                                  )}
                                </>
                              )}
                              {!section.hasDropdown && section.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="group/item relative block px-8 py-3.5 text-brand-heading hover:bg-brand-menu-hover hover:text-brand-primary transition-all duration-300 text-sm font-normal overflow-hidden"
                                >
                                  <span className="absolute left-0 top-0 h-full w-1 bg-brand-primary transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-top" />
                                  <span className="relative z-10 block transform transition-transform duration-300 group-hover/item:translate-x-2">
                                    {subItem.noPrefix || subItem.label === "Ndoto Zetu" || subItem.label === "CAC" ? (
                                      <span className="font-normal">{subItem.label}</span>
                                    ) : (
                                      <>
                                        <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{subItem.label}</span>
                                      </>
                                    )}
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

            {/* Mobile menu button - Bigger and bolder */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                className="h-10 px-4 text-sm font-bold tracking-wider border-2 border-brand-primary text-brand-heading hover:bg-brand-menu-hover hover:text-brand-primary transition-all duration-300"
              >
                {language.toUpperCase()}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-heading hover:text-brand-primary p-3 hover:bg-brand-menu-hover transition-all duration-300 border-2 border-brand-primary hover:border-brand-primary"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Spacious and elegant */}
          {isOpen && (
            <div className="lg:hidden border-t-2 border-brand-border animate-in slide-in-from-top duration-300 mt-6">
              <div className="px-3 pt-6 pb-6 space-y-2 bg-white max-h-[calc(100vh-96px)] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-brand-border last:border-b-0">
                    <div className="flex items-center justify-between">
                      {item.hasDropdown ? (
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="flex-1 text-left px-5 py-4 text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover transition-all duration-300 font-normal text-base sm:text-lg uppercase tracking-wide"
                        >
                          <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{item.label}</span>
                        </button>
                      ) : (
                        <Link
                          href={item.href!}
                          className="flex-1 px-5 py-4 text-brand-heading hover:text-brand-primary hover:bg-brand-menu-hover transition-all duration-300 font-normal text-base sm:text-lg uppercase tracking-wide"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{item.label}</span>
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
                      <div className="pl-6 pr-4 py-3 space-y-1 bg-brand-menu-hover animate-in slide-in-from-top duration-300">
                        {item.sections?.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            {section.title && (
                              <>
                                {section.hasDropdown ? (
                                  <div>
                                    <button
                                      onClick={() => section.title && setMobileSubDropdown(mobileSubDropdown === section.title ? null : section.title)}
                                      className="w-full flex items-center justify-between px-6 py-3 text-brand-heading hover:text-brand-primary hover:bg-white transition-all duration-300"
                                    >
                                      <h3 className="text-brand-heading font-normal text-xs uppercase tracking-wider">
                                        <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{section.title}</span>
                                      </h3>
                                      <ChevronDown 
                                        className={`h-4 w-4 transition-transform duration-300 ${
                                          mobileSubDropdown === section.title ? 'rotate-180' : ''
                                        }`} 
                                      />
                                    </button>
                                    {mobileSubDropdown === section.title && (
                                      <div className="pl-4 bg-white animate-in slide-in-from-top duration-300">
                                        {section.items.map((subItem) => (
                                          <Link
                                            key={subItem.href}
                                            href={subItem.href}
                                            className="block px-6 py-3 text-sm sm:text-base text-brand-heading/80 hover:text-brand-primary hover:bg-brand-menu-hover transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary font-normal"
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {subItem.noPrefix || subItem.label === "Ndoto Zetu" || subItem.label === "CAC" ? (
                                              <span className="font-normal">{subItem.label}</span>
                                            ) : (
                                              <>
                                                <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{subItem.label}</span>
                                              </>
                                            )}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div className="px-6 py-2">
                                    <h3 className="text-brand-heading font-normal text-xs uppercase tracking-wider">
                                      <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{section.title}</span>
                                    </h3>
                                  </div>
                                )}
                              </>
                            )}
                            {!section.hasDropdown && section.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-6 py-3 text-sm sm:text-base text-brand-heading/80 hover:text-brand-primary hover:bg-white transition-all duration-300 border-l-4 border-transparent hover:border-brand-primary font-normal"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.noPrefix || subItem.label === "Ndoto Zetu" || subItem.label === "CAC" ? (
                                  <span className="font-normal">{subItem.label}</span>
                                ) : (
                                  <>
                                    <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> <span className="font-normal">{subItem.label}</span>
                                  </>
                                )}
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