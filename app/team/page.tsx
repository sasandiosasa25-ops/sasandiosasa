'use client';

import { Heart, Leaf, Users, ExternalLink, MapPin, Mail } from 'lucide-react';
import { useState, useEffect, FC, ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Language = 'en' | 'de';

interface TeamMember {
  section: 'guides' | 'office' | 'coaches';
  name: string;
  role: string;
  image: string;
  bio: string;
  imagePosition: 'left' | 'right';
  website?: string;
  email?: string;
}

interface Translation {
  title: string;
  subtitle: string;
  introTitle: string;
  introText1: string;
  introText2: string;
  introText3: string;
  introText4: string;
  introText5: string;
  guides: string;
  office: string;
  coaches: string;
  partner: string;
  team: TeamMember[];
}

interface Translations {
  en: Translation;
  de: Translation;
}

interface TeamBySection {
  guides: TeamMember[];
  office: TeamMember[];
  coaches: TeamMember[];
}

const BrandName: FC = () => (
  <span className="italic font-serif text-brand-primary font-bold">SasaNdioSasa</span>
);

const TeamPage: FC = () => {
  const { language } = useLanguage() as { language: Language };
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const translations: Translations = {
    en: {
      title: 'Our Team',
      subtitle: 'The People Behind SasaNdioSasa',
      introTitle: 'About Us – Who We Are',
      introText1: 'SasaNdioSasa is a collective of people who live what we offer. We are guides, facilitators, organizers, and storytellers. But above all, we are people connected through one place that keeps growing us every day: Tanzania.',
      introText2: 'Some of us were born here, some arrived and never left, and others join for a while, bringing their skills, stories, and energy into what we create together. Each person adds something unique, and together we keep learning, sharing, and growing.',
      introText3: 'Our backgrounds are diverse. From travel and hospitality to education, social impact, and coaching. Yet we share one belief: that meaningful development begins with connection. To the land, to the people, and to ourselves.',
      introText4: 'Each path we design is built on presence, awareness, and trust. Shaped by real relationships and by the rhythm of a place we deeply respect.',
      introText5: 'Click through our profiles and get to know the people behind SasaNdioSasa. A team of many paths, one purpose, and a shared love for this land we call home.',
      guides: 'Guides',
      office: 'Office',
      coaches: 'Coaches',
      partner: 'Our Trusted Partner',
      team: [
        {
          section: 'guides',
          name: 'Kilidove / Mawe Lodges',
          role: 'Our Trusted Partner',
          image: '/MaweLodgesTeam.jpg',
          bio: 'We are proud to introduce Kilidove / Mawe Lodges, a partner who shares what we value most: Tanzanian hospitality. Every detail, from carefully curated menus and locally sourced suppliers to thoughtfully designed décor and coachings, reflects their commitment to quality and authenticity. Currently working toward Travelife Sustainable Certification, Kilidove / Mawe Lodges mirror and live by the SasaNdioSasa values every day.',
          imagePosition: 'left'
        },
        {
          section: 'guides',
          name: 'Allan',
          role: 'Your SasaNdioSasa Guide',
          image: '/Allan.jpeg',
          bio: 'Allan feels most at home barefoot, close to the earth he loves so much. From the peaks of the Usambara Mountains to the quiet coast, he knows Tanzania by heart. His calm, grounded way of guiding brings travelers closer to nature, and to a slower rhythm that many didn\'t know they were missing.',
          imagePosition: 'right'
        },
        {
          section: 'office',
          name: 'Edna',
          role: 'Your SasaNdioSasa Allrounder',
          image: '/Edna.jpeg',
          bio: 'Edna is the quiet force that keeps everything flowing. A true problem-solver with a strong heart, she holds the threads together when things get busy. Her persistence, clarity, and calm presence remind us that every challenge has a way out.',
          imagePosition: 'left'
        },
        {
          section: 'coaches',
          name: 'Simone',
          role: 'Your SasaNdioSasa Coach & Facilitator',
          image: '/Simone.jpeg',
          bio: 'Simone is the creative pulse behind SasaNdioSasa. She brings ideas to life with curiosity, intuition, and a strong sense for what\'s possible. Known for her open heart and practical mind, she finds solutions where others see limits and inspires those around her to do the same.',
          website: 'watchout.co.tz',
          email: 'info@watchout.co.tz',
          imagePosition: 'right'
        },
        {
          section: 'coaches',
          name: 'Ina',
          role: 'Your SasaNdioSasa Coach & Retreat Creator',
          image: '/Ina.jpeg',
          bio: 'Ina\'s journey is rooted in transformation, in the land, in systems, and within the heart. As a coach and retreat creator, she merges her work with the ROOTED™ methodology to help sustainable change take root, in people and projects alike. Her love for Earth and people is visible in every retreat, every coaching session, and every conversation. Her work invites you to move more gently and more wisely. To make a long lasting impact.',
          website: 'inawalter.com',
          imagePosition: 'left'
        }
      ]
    },
    de: {
      title: 'Unser Team',
      subtitle: 'Die Menschen hinter SasaNdioSasa',
      introTitle: 'Über uns – Wer wir sind',
      introText1: 'SasaNdioSasa ist ein Kollektiv von Menschen, die das leben, was wir anbieten. Wir sind Guides, Moderatoren, Organisatoren und Geschichtenerzähler. Aber vor allem sind wir Menschen, die durch einen Ort verbunden sind, der uns jeden Tag wachsen lässt: Tansania.',
      introText2: 'Einige von uns wurden hier geboren, einige kamen und gingen nie, und andere kommen für eine Weile und bringen ihre Fähigkeiten, Geschichten und Energie in das ein, was wir zusammen schaffen. Jede Person trägt etwas Einzigartiges bei, und gemeinsam lernen, teilen und wachsen wir weiter.',
      introText3: 'Unsere Hintergründe sind vielfältig. Von Reisen und Gastgewerbe über Bildung und gesellschaftliche Auswirkungen bis hin zu Coaching. Aber wir teilen einen Glauben: Sinnvolle Entwicklung beginnt mit Verbindung. Mit dem Land, mit den Menschen und mit uns selbst.',
      introText4: 'Jeder Weg, den wir gestalten, basiert auf Präsenz, Bewusstsein und Vertrauen. Geprägt durch echte Beziehungen und den Rhythmus eines Ortes, den wir zutiefst respektieren.',
      introText5: 'Lesen Sie unsere Profile und lernen Sie die Menschen hinter SasaNdioSasa kennen. Ein Team mit vielen Wegen, einem Zweck und gemeinsamer Liebe zu diesem Land, das wir Heimat nennen.',
      guides: 'Guides',
      office: 'Büro',
      coaches: 'Coaches',
      partner: 'Unser vertrauensvoller Partner',
      team: [
        {
          section: 'guides',
          name: 'Kilidove / Mawe Lodges',
          role: 'Unser vertrauensvoller Partner',
          image: '/kilidove.jpeg',
          bio: 'Wir sind stolz, Kilidove / Mawe Lodges vorzustellen, einen Partner, der das teilt, was wir am meisten schätzen: tansanische Gastfreundschaft. Jedes Detail, von sorgfältig kuratierten Menüs und lokal bezogenen Lieferanten bis hin zu durchdacht gestaltetem Dekor und Coachings, spiegelt ihr Engagement für Qualität und Authentizität wider. Kilidove / Mawe Lodges arbeitet derzeit auf die Travelife-Nachhaltigkeitszertifizierung hin und verkörpert die SasaNdioSasa-Werte jeden Tag.',
          imagePosition: 'left'
        },
        {
          section: 'guides',
          name: 'Allan',
          role: 'Dein SasaNdioSasa Guide',
          image: '/Allan.jpeg',
          bio: 'Allan fühlt sich am wohlsten barfuß, in der Nähe der Erde, die er so sehr liebt. Von den Gipfeln der Usambara-Berge bis zur ruhigen Küste kennt er Tansania von Herzen. Seine ruhige, erdverbundene Art zu führen bringt Reisende der Natur näher und zu einem langsameren Rhythmus, den viele nicht kannten, dass sie ihn vermissten.',
          imagePosition: 'right'
        },
        {
          section: 'office',
          name: 'Edna',
          role: 'Dein SasaNdioSasa Allrounder',
          image: '/Edna.jpeg',
          bio: 'Edna ist die leise Kraft, die alles in Bewegung hält. Eine echte Problemlöserin mit starkem Herzen hält sie die Fäden zusammen, wenn es hektisch wird. Ihre Ausdauer, Klarheit und ruhige Präsenz erinnern uns daran, dass jede Herausforderung einen Weg hinaus hat.',
          imagePosition: 'left'
        },
        {
          section: 'coaches',
          name: 'Simone',
          role: 'Dein SasaNdioSasa Coach & Moderatorin',
          image: '/Simone.jpeg',
          bio: 'Simone ist der kreative Puls von SasaNdioSasa. Sie bringt Ideen mit Neugier, Intuition und einem starken Gefühl für das Mögliche zum Leben. Bekannt für ihr offenes Herz und ihren praktischen Verstand, findet sie Lösungen, wo andere Grenzen sehen und inspiriert alle um sie herum.',
          website: 'watchout.co.tz',
          email: 'info@watchout.co.tz',
          imagePosition: 'right'
        },
        {
          section: 'coaches',
          name: 'Ina',
          role: 'Dein SasaNdioSasa Coach & Retreat Kreatorin',
          image: '/Ina.jpeg',
          bio: 'Inas Reise ist in Transformation, im Land, in Systemen und im Herzen verwurzelt. Als Coach und Retreat-Kreatorin verbindet sie ihre Arbeit mit der ROOTED™-Methodik, um nachhaltigen Wandel in Menschen und Projekten zu bewirken. Ihre Liebe zur Erde und zu Menschen ist in jedem Retreat, jeder Coaching-Sitzung sichtbar. Ihre Arbeit lädt dich ein, sanfter und weiser zu handeln und eine nachhaltige Auswirkung zu schaffen.',
          website: 'inawalter.com',
          imagePosition: 'left'
        }
      ]
    }
  };

  const t = translations[language];

  // Group team members by section
  const teamBySection: TeamBySection = {
    guides: t.team.filter(m => m.section === 'guides'),
    office: t.team.filter(m => m.section === 'office'),
    coaches: t.team.filter(m => m.section === 'coaches')
  };

  const renderTeamMember = (member: TeamMember, idx: number): ReactNode => {
    const isImageLeft = member.imagePosition === 'left';

    return (
      <div key={idx} className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center mb-20`}>
        {/* Image */}
        <div className={`flex-shrink-0 w-full md:w-5/12 ${isImageLeft ? '' : ''}`}>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full md:w-7/12">
          <p className="font-poppins text-lg text-brand-primary font-bold mb-2">
            {member.role}
          </p>
          <h3 className="font-comfortaa text-4xl md:text-5xl text-brand-heading font-black mb-6">
            {member.name}
          </h3>
          <p className="font-poppins text-lg text-stone-700 leading-relaxed mb-6">
            {member.bio}
          </p>

          {/* Contact Links */}
          {(member.website || member.email) && (
            <div className="flex flex-col gap-3">
              {member.website && (
                <a
                  href={`https://${member.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-sm text-brand-primary hover:text-brand-secondary transition-colors flex items-center gap-2 group/link font-semibold"
                >
                  <ExternalLink className="w-4 h-4" />
                  {member.website}
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="font-poppins text-sm text-brand-primary hover:text-brand-secondary transition-colors flex items-center gap-2 font-semibold"
                >
                  <Mail className="w-4 h-4" />
                  {member.email}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-slate-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative h-[55vh] md:h-[65vh] bg-gradient-to-br from-brand-heading via-brand-secondary to-brand-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="/ele.jpeg" 
            alt="Team together" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className={`relative z-10 text-center max-w-4xl px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-comfortaa text-6xl md:text-7xl lg:text-8xl text-white mb-6 font-black tracking-tight">
            {t.title}
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-white/95 font-semibold">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-comfortaa text-4xl md:text-5xl text-brand-heading font-black mb-12 text-center">
          {t.introTitle}
        </h2>

        <div className="space-y-6 font-poppins text-lg text-stone-700 leading-relaxed">
          <p>{t.introText1}</p>
          <p>{t.introText2}</p>
          <p>{t.introText3}</p>
          <p>{t.introText4}</p>
          <p className="text-brand-primary font-semibold text-xl">{t.introText5}</p>
        </div>
      </div>

      {/* Guides Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 border-t-4 border-brand-primary">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-1 bg-brand-primary rounded-full" />
            <h2 className="font-comfortaa text-5xl text-brand-heading font-black">
              {t.guides}
            </h2>
          </div>
        </div>

        {teamBySection.guides.map((member, idx) => renderTeamMember(member, idx))}
      </div>

        {/* Coaches Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 border-t-4 border-brand-primary">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-1 bg-brand-primary rounded-full" />
            <h2 className="font-comfortaa text-5xl text-brand-heading font-black">
              {t.coaches}
            </h2>
          </div>
        </div>

        {teamBySection.coaches.map((member, idx) => renderTeamMember(member, idx))}
      </div>

      {/* Office Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 border-t-4 border-brand-primary">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-1 bg-brand-primary rounded-full" />
            <h2 className="font-comfortaa text-5xl text-brand-heading font-black">
              {t.office}
            </h2>
          </div>
        </div>

        {teamBySection.office.map((member, idx) => renderTeamMember(member, idx))}
      </div>

    
    </div>
  );
};

export default TeamPage;