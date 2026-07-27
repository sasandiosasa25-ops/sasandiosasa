'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { focusAreaMap, FocusAreaData } from '../focusAreas';

export default function AnimalWelfarePage() {
  const { language } = useLanguage();
  const area: FocusAreaData = focusAreaMap['animal-welfare'];
  const title = area.title[language];
  const description = area.description[language];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-heading font-comfortaa">{title}</h1>
            <div className="mt-6 lg:hidden">
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-brand-border/30 bg-brand-primary/10 p-4 shadow-xl">
                <Image
                  src={area.image}
                  alt={title}
                  width={720}
                  height={520}
                  className="h-[280px] sm:h-[320px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
            <p className="mt-6 text-base sm:text-lg text-brand-heading/80 leading-relaxed max-w-2xl font-poppins whitespace-pre-line">{description}</p>
            <Link
              href="/impact"
              className="inline-flex items-center justify-center mt-10 rounded-full border border-brand-primary bg-brand-primary/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary transition duration-300 hover:bg-brand-primary hover:text-white"
            >
              {language === 'de' ? 'Zurück zur Wirkung' : 'Back to Impact'}
            </Link>
          </div>
          <div className="relative hidden w-full max-w-xl overflow-hidden rounded-[2rem] border border-brand-border/30 bg-brand-primary/10 p-4 shadow-xl lg:block">
            <Image
              src={area.image}
              alt={title}
              width={720}
              height={520}
              className="h-[360px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
