'use client';

import { MapPin, Phone, Mail, Globe, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { language } = useLanguage();

  const footerSections = {
    paths: {
      title: language === 'de' ? 'Pfade' : 'Paths',
      sections: [
        {
          subtitle: language === 'de' ? 'Safaris' : 'Safaris',
          links: [
            { href: '/road-map/#flow', label: 'The Flow' },
            { href: '/road-map/#shift', label: 'The Shift' },
            { href: '/road-map/#unfolding', label: 'The Unfolding' },
            { href: '/road-map/#pause', label: 'Pause' },
            { href: '/road-map/#little-tracks', label: 'Little Tracks' },
          ]
        },
        {
          subtitle: language === 'de' ? 'Strand' : 'Beach',
          links: [
            { href: '/road-map/#exhale', label: 'The Exhale' },
            { href: '/road-map/#return', label: 'The Return' },
          ]
        },
        {
          subtitle: language === 'de' ? 'Gipfel' : 'Peaks',
          links: [
            { href: '/paths/peaks', label: language === 'de' ? 'Gipfel erkunden' : 'Explore Peaks' },
          ]
        },
      ]
    },
    experience: {
      title: language === 'de' ? 'Erfahrung' : 'Experience',
      links: [
        { href: '/experience/inner-safari', label: language === 'de' ? 'Innere Safari' : 'Inner Safari' },
        { href: '/experience/retreat', label: language === 'de' ? 'Rückzug' : 'Retreat' },
             ]
    },
    travelCompass: {
      title: language === 'de' ? 'Reisekompass' : 'Travel Compass',
      links: [
        { href: '/travel-compass/why-choose-us', label: language === 'de' ? 'Warum uns wählen' : 'Why Choose Us' },
        { href: '/travel-compass/seasonal-advice', label: language === 'de' ? 'Saisonale Beratung' : 'Seasonal Advice' },
        { href: '/travel-compass/airline-recommendations', label: language === 'de' ? 'Flugempfehlungen' : 'Airline Recommendations' },
        { href: '/travel-compass/travel-permit', label: language === 'de' ? 'Reisegenehmigung' : 'Travel Permit' },
        { href: '/travel-compass/packing-lists', label: language === 'de' ? 'Packlisten' : 'Packing Lists' },
        { href: '/travel-compass/faqs', label: language === 'de' ? 'Dos und Don\'ts (FAQs)' : 'Dos and Don\'ts (FAQs)' },
        { href: '/road-map', label: language === 'de' ? 'Routenplan' : 'Road Map' },
      ]
    },
    company: {
      title: language === 'de' ? 'Unternehmen' : 'Company',
      links: [
        { href: '/impact', label: language === 'de' ? 'Wirkung' : 'Impact' },
        { href: '/team', label: language === 'de' ? 'Team' : 'Team' },
        
      ]
    }
  };

  return (
    <footer className="bg-brand-heading text-white border-t-4 border-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <span className="font-comfortaa italic text-brand-primary text-3xl sm:text-4xl font-bold tracking-wide hover:scale-105 transition-transform duration-300 inline-block">
                SasaNdioSasa
              </span>
            </Link>
            <p className="text-brand-border/80 mb-8 text-base sm:text-lg font-light leading-relaxed">
              {language === 'de' 
                ? 'Transformative Reiseerlebnisse in Tanzania, die Kulturen verbinden und nachhaltige Auswirkungen schaffen.'
                : 'Transformative travel experiences in Tanzania that connect cultures and create sustainable impact.'}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" strokeWidth={2} />
                <p className="text-brand-border/80 group-hover:text-white transition-colors">
                  Arusha, Tanzania
                </p>
              </div>
             
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-brand-primary flex-shrink-0" strokeWidth={2} />
                <a href="mailto:Safari@sasandiosasa.co.tz" className="text-brand-border/80 group-hover:text-brand-primary transition-colors font-medium">
                  Safari@sasandiosasa.co.tz
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Globe className="h-5 w-5 text-brand-primary flex-shrink-0" strokeWidth={2} />
                <a href="https://sasandiosasa.co.tz" target="_blank" rel="noopener noreferrer" className="text-brand-border/80 group-hover:text-brand-primary transition-colors font-medium">
                  sasandiosasa.co.tz
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mt-8">
              <a 
                href="https://www.instagram.com/sasandiosasa?igsh=MTExOG1odTY4ZXh5MQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary/10 border-2 border-brand-primary/20 p-3 hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-brand-primary group-hover:text-white transition-colors" strokeWidth={2} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61579332057519" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary/10 border-2 border-brand-primary/20 p-3 hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-brand-primary group-hover:text-white transition-colors" strokeWidth={2} />
              </a>
              <a 
                href="https://www.linkedin.com/company/sasandiosasa" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary/10 border-2 border-brand-primary/20 p-3 hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-brand-primary group-hover:text-white transition-colors" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Paths - with subsections */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-6 tracking-wider uppercase text-white border-b-2 border-brand-primary pb-2">
                <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> {footerSections.paths.title}
              </h3>
              <div className="space-y-6">
                {footerSections.paths.sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-brand-primary font-semibold text-sm mb-3 uppercase tracking-wide">
                      {section.subtitle}
                    </h4>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link 
                            href={link.href} 
                            className="text-brand-border/70 hover:text-brand-primary transition-colors text-sm font-light flex items-center group"
                          >
                            <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" strokeWidth={2} />
                            <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-6 tracking-wider uppercase text-white border-b-2 border-brand-primary pb-2">
                <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> {footerSections.experience.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.experience.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-brand-border/70 hover:text-brand-primary transition-colors text-sm font-light flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" strokeWidth={2} />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Compass */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-6 tracking-wider uppercase text-white border-b-2 border-brand-primary pb-2">
                <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> {footerSections.travelCompass.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.travelCompass.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-brand-border/70 hover:text-brand-primary transition-colors text-sm font-light flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" strokeWidth={2} />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-6 tracking-wider uppercase text-white border-b-2 border-brand-primary pb-2">
                <span className="font-comfortaa italic normal-case text-brand-primary">SasaNdioSasa</span> {footerSections.company.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.company.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-brand-border/70 hover:text-brand-primary transition-colors text-sm font-light flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" strokeWidth={2} />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-brand-primary/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-brand-border/60 text-sm font-light">
            © {new Date().getFullYear()} <span className="font-comfortaa italic text-brand-primary">SasaNdioSasa</span>. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
      
        </div>
      </div>
    </footer>
  );
}