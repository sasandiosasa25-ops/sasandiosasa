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
      href: '/impact', 
      label: language === 'de' ? 'Wirkung' : 'Impact'
    },
    { 
      href: '/team', 
      label: language === 'de' ? 'Team' : 'Team'
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
  ];

  const toggleMobileDropdown = (href: string) => {
    setMobileDropdown(mobileDropdown === href ? null : href);
  };
return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-stone-200/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.jpeg" 
              alt="SasaNdioSasa" 
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <span className="font-bold text-lg sm:text-xl md:text-2xl text-stone-900 tracking-tight uppercase">SasaNdioSasa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center px-5 py-3 text-stone-700 hover:text-stone-900 transition-all duration-200 font-semibold text-base tracking-wide uppercase"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        openDropdown === item.href ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-stone-300 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 rounded-sm">
                    {item.dropdown.map((subItem, index) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-7 py-5 text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-all duration-200 font-medium text-base border-b border-stone-200 last:border-b-0 hover:pl-9 ${
                          index === 0 ? 'pt-5' : ''
                        } ${
                          index === item.dropdown.length - 1 ? 'pb-5' : ''
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-3 border-l border-stone-300 pl-6 ml-6">
              <Globe className="h-5 w-5 text-stone-600" />
              <button
                onClick={() => setLanguage('en')}
                className={`h-11 px-6 font-semibold text-sm tracking-widest transition-all duration-200 uppercase ${
                  language === 'en' 
                    ? 'bg-stone-900 text-white' 
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`h-11 px-6 font-semibold text-sm tracking-widest transition-all duration-200 uppercase ${
                  language === 'de' 
                    ? 'bg-stone-900 text-white' 
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                DE
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="h-11 px-5 font-semibold text-sm border-2 border-stone-400 text-stone-700 hover:bg-stone-100 hover:text-stone-900 hover:border-stone-600 transition-all duration-200 uppercase tracking-wider"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-stone-900 p-2 hover:bg-stone-100 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-stone-200 animate-in slide-in-from-top duration-200">
            <div className="px-2 pt-4 pb-4 space-y-2 bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 px-5 py-4 text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors duration-200 font-semibold text-base uppercase tracking-wide"
                      onClick={() => !item.dropdown && setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(item.href)}
                        className="px-5 py-4 text-stone-600 hover:text-stone-900 transition-colors duration-200"
                      >
                        <ChevronDown 
                          className={`h-5 w-5 transition-transform duration-200 ${
                            mobileDropdown === item.href ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && mobileDropdown === item.href && (
                    <div className="pl-10 pr-5 py-3 space-y-2 bg-stone-100 animate-in slide-in-from-top duration-150">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-5 py-4 text-base text-stone-600 hover:text-stone-900 hover:bg-white transition-colors duration-200 border-l-3 border-transparent hover:border-stone-900 font-medium"
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