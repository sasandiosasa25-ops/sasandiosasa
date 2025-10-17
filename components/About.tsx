'use client';

import { Eye, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { language } = useLanguage();

  const translations = {
    en: {
      ourPhilosophy: 'Our Philosophy',
      sustainableTravel: 'SUSTAINABLE TRAVEL',
      philosophyText1: 'Our approach aligns with the UN Sustainable Development Goals, creating journeys that restore balance, promote education, and strengthen communities through fair partnerships.',
      philosophyText2: 'Every experience is designed with conscious use of resources, respect for nature as our teacher, and collaboration that connects guests and communities in meaningful ways.',
      mission: 'MISSION',
      missionText: 'Creating journeys that restore balance, resilience, and shared strength in life. We design experiences where learning is woven into every step.',
      vision: 'VISION',
      visionText: 'Building strong collaborations that connect guests, communities, and global impact through responsible travel and meaningful partnerships.',
    },
    de: {
      ourPhilosophy: 'Unsere Philosophie',
      sustainableTravel: 'NACHHALTIGES REISEN',
      philosophyText1: 'Unser Ansatz orientiert sich an den UN-Zielen für nachhaltige Entwicklung und schafft Reisen, die Gleichgewicht wiederherstellen, Bildung fördern und Gemeinschaften durch faire Partnerschaften stärken.',
      philosophyText2: 'Jede Erfahrung wird mit bewusstem Ressourceneinsatz, Respekt vor der Natur als unserer Lehrerin und Zusammenarbeit gestaltet, die Gäste und Gemeinschaften auf sinnvolle Weise verbindet.',
      mission: 'MISSION',
      missionText: 'Reisen schaffen, die Gleichgewicht, Widerstandsfähigkeit und gemeinsame Stärke im Leben wiederherstellen. Wir gestalten Erlebnisse, bei denen Lernen in jeden Schritt eingewoben ist.',
      vision: 'VISION',
      visionText: 'Starke Kooperationen aufbauen, die Gäste, Gemeinschaften und globale Wirkung durch verantwortungsvolles Reisen und bedeutungsvolle Partnerschaften verbinden.',
    }
  };

  const t = translations[language];

  return (
    <section className="py-32 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <div className="inline-block border border-stone-300 px-6 py-2 mb-8">
              <span className="text-stone-600 font-medium text-xs tracking-[0.2em] uppercase">{t.ourPhilosophy}</span>
            </div>
            
            <h2 className="text-[4rem] md:text-[6rem] font-black text-stone-900 mb-12 leading-[0.9] tracking-tighter">
              {t.sustainableTravel}
            </h2>
            
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed font-light">
              <p>{t.philosophyText1}</p>
              <p>{t.philosophyText2}</p>
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className="border-l-2 border-stone-900 pl-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-stone-900 mr-4" strokeWidth={1.5} />
                <h3 className="text-3xl font-black text-stone-900 tracking-tight">
                  {t.mission}
                </h3>
              </div>
              <p className="text-stone-700 font-light leading-relaxed text-lg">
                {t.missionText}
              </p>
            </div>

            <div className="border-l-2 border-stone-900 pl-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-stone-900 mr-4" strokeWidth={1.5} />
                <h3 className="text-3xl font-black text-stone-900 tracking-tight">
                  {t.vision}
                </h3>
              </div>
              <p className="text-stone-700 font-light leading-relaxed text-lg">
                {t.visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}