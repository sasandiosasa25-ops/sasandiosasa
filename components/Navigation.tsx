'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
        { href: '/travel-compass/why-choose-us', label: language === 'de' ? 'Warum uns wählen' : 'Why Choose Sasandiosasa' },
        { href: '/travel-compass/seasonal-advice', label: language === 'de' ? 'Saisonale Beratung' : 'Seasonal Advice' },
        { href: '/travel-compass/airline-recommendations', label: language === 'de' ? 'Flugempfehlungen' : 'Airline Recommendations' },
        { href: '/travel-compass/travel-permit', label: language === 'de' ? 'Reisegenehmigung' : 'Travel Permit' },
        { href: '/travel-compass/packing-lists', label: language === 'de' ? 'Packlisten' : 'Packing Lists' },
        { href: '/travel-compass/faqs', label: language === 'de' ? 'Dos und Don\'ts (FAQs)' : 'Dos and Don\'ts (FAQs)' },
        { href: '/travel-compass/road-map', label: language === 'de' ? 'Routenplan' : 'Road Map' },
      ]
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-stone-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-stone-900 text-white p-2">
              <span className="font-bold text-lg">SS</span>
            </div>
            <div>
              <span className="font-black text-xl text-stone-900 tracking-tight">Sasandiosasa</span>
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
                  className="flex items-center px-4 py-2 text-stone-700 hover:text-stone-900 transition-colors duration-200 font-medium"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-stone-200 shadow-xl">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-6 py-3 text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors duration-200 border-b border-stone-100 last:border-b-0"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-stone-200 pl-6 ml-4">
              <Globe className="h-4 w-4 text-stone-500" />
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="h-8 px-3 bg-stone-900 hover:bg-stone-800"
              >
                EN
              </Button>
              <Button
                variant={language === 'de' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('de')}
                className="h-8 px-3 bg-stone-900 hover:bg-stone-800"
              >
                DE
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="border-stone-300"
            >
              {language.toUpperCase()}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-stone-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors duration-200 font-medium"
                    onClick={() => !item.dropdown && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors duration-200"
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