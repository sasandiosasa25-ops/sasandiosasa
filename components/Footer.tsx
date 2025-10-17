'use client';

import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { language } = useLanguage();

  const footerSections = {
    paths: {
      title: language === 'de' ? 'Pfade' : 'Paths',
      links: [
        { href: '/paths/safaris', label: language === 'de' ? 'Safaris' : 'Safaris' },
        { href: '/paths/peaks', label: language === 'de' ? 'Gipfel' : 'Peaks' },
        { href: '/paths/packages', label: language === 'de' ? 'Pakete' : 'Packages' },
      ]
    },
    experience: {
      title: language === 'de' ? 'Erfahrung' : 'Experience',
      links: [
        { href: '/experience/inner-safari', label: language === 'de' ? 'Innere Safari' : 'Inner Safari' },
        { href: '/experience/retreat', label: language === 'de' ? 'Rückzug' : 'Retreat' },
        { href: '/experience/living-leading-abroad', label: language === 'de' ? 'Leben im Ausland' : 'Living Abroad' },
      ]
    },
    resources: {
      title: language === 'de' ? 'Ressourcen' : 'Resources',
      links: [
        { href: '/impact', label: language === 'de' ? 'Wirkung' : 'Impact' },
        { href: '/team', label: language === 'de' ? 'Team' : 'Team' },
        { href: '/travel-compass', label: language === 'de' ? 'Reisekompass' : 'Travel Compass' },
        { href: '/contact', label: language === 'de' ? 'Kontakt' : 'Contact' },
      ]
    }
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center space-x-2 mb-8 group">
              <div className="bg-white text-stone-900 p-2">
                <span className="font-bold text-xl">SS</span>
              </div>
              <div>
                <span className="font-black text-2xl tracking-tight">SasaNdioSasa</span>
              </div>
            </Link>
            <p className="text-stone-400 mb-8 text-lg font-light leading-relaxed max-w-md">
              {language === 'de' 
                ? 'Transformative Reiseerlebnisse in Tanzania, die Kulturen verbinden und nachhaltige Auswirkungen schaffen.'
                : 'Transformative travel experiences in Tanzania that connect cultures and create sustainable impact.'}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-stone-500 mt-1 group-hover:text-white transition-colors" strokeWidth={1.5} />
                <div>
                  <p className="text-stone-400 group-hover:text-white transition-colors">
                    Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-stone-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                <a href="tel:+255755688091" className="text-stone-400 group-hover:text-white transition-colors">
                  +255 755 688 091
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-stone-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                <a href="mailto:info@sasandiosasa.com" className="text-stone-400 group-hover:text-white transition-colors">
                  info@sasandiosasa.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Globe className="h-5 w-5 text-stone-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                <span className="text-stone-400 group-hover:text-white transition-colors">sasandiosasa.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Paths */}
            <div>
              <h3 className="font-black text-sm mb-6 tracking-wider uppercase text-white">
                {footerSections.paths.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.paths.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-stone-400 hover:text-white transition-colors font-light flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-black text-sm mb-6 tracking-wider uppercase text-white">
                {footerSections.experience.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.experience.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-stone-400 hover:text-white transition-colors font-light flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-black text-sm mb-6 tracking-wider uppercase text-white">
                {footerSections.resources.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.resources.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-stone-400 hover:text-white transition-colors font-light flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-stone-500 text-sm font-light">
            © {new Date().getFullYear()} SasaNdioSasa. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center space-x-6">
            <a 
              href="https://wa.me/255755688091" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-white transition-colors text-sm font-medium"
            >
              WhatsApp
            </a>
            <a 
              href="/privacy" 
              className="text-stone-500 hover:text-white transition-colors text-sm font-medium"
            >
              {language === 'de' ? 'Datenschutz' : 'Privacy'}
            </a>
            <a 
              href="/terms" 
              className="text-stone-500 hover:text-white transition-colors text-sm font-medium"
            >
              {language === 'de' ? 'AGB' : 'Terms'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}