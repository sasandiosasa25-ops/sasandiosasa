          "use client";
          import React, { FC, useEffect, useState, ReactNode } from 'react';
          // import { useLanguage } from '@/lib/useLanguage';
          import { ExternalLink, Mail, Leaf, Heart, Users } from 'lucide-react';
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

interface TeamMember {
  section: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  imagePosition?: 'left' | 'right';
  website?: string;
  email?: string;
}

interface TeamBySection {
  guides: TeamMember[];
  office: TeamMember[];
  coaches: TeamMember[];
  partners: TeamMember[];
}

const BrandName: FC = () => (
  <span className="italic font-serif text-brand-primary font-bold">SasaNdioSasa</span>
);

const TeamPage: FC = () => {
  const language: keyof Translations = 'en'; // Default to English; remove useLanguage
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
                  section: 'partners',
                  name: 'Culture Arts Center (CAC)',
                  role: 'The living pulse of Tanzanian Culture',
                  image: '/cacmakumira.jpeg',
                  bio: 'Our collaboration with CAC is a celebration of Tanzanian heritage and creativity. The Culture Arts Center (CAC) at Makumira is a vibrant hub where tradition meets innovation, and where local artists, musicians, and performers share their talents with the world. Through workshops, performances, and community projects, CAC fosters cultural exchange and empowers the next generation to carry forward the rich legacy of Tanzanian arts. Together, we create opportunities for learning, connection, and inspiration ensuring that the living pulse of Tanzanian culture continues to thrive.',
                  imagePosition: 'left'
                },
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

  // Find specific members for custom order
  const kilidove = t.team.find(m => m.name.toLowerCase().includes('kilidove'));
  const cac = t.team.find(m => m.name.toLowerCase().includes('culture arts center'));
  const allan = t.team.find(m => m.name.toLowerCase() === 'allan');
  const coaches = t.team.filter(m => m.section === 'coaches');
  const edna = t.team.find(m => m.name.toLowerCase() === 'edna');

  // Group team members by section
  const teamBySection: TeamBySection = {
    guides: t.team.filter(m => m.section === 'guides'),
    office: t.team.filter(m => m.section === 'office'),
    coaches: t.team.filter(m => m.section === 'coaches'),
    partners: t.team.filter(m => m.section === 'partners'),
  };

  const renderTeamMember = (member: TeamMember, idx: number): ReactNode => {
    const isImageLeft = member.imagePosition === 'left';
    // Special handling for Allan's image to ensure full visibility on all mobile sizes
    const isAllan = member.name.toLowerCase() === 'allan';
    return (
      <div key={idx} className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 lg:gap-10 items-center mb-12 lg:mb-16`}>
        {/* Image */}
        <div className={`flex-shrink-0 w-full md:w-1/3 lg:w-1/4`}>
          <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
            <img 
              src={member.image} 
              alt={member.name}
              className={`w-full h-[320px] sm:h-[340px] md:h-[260px] object-cover hover:scale-105 transition-transform duration-500 ${isAllan ? 'object-top md:object-center' : member.name.toLowerCase() === 'edna' ? 'object-top' : ''}`}
              style={isAllan ? {objectPosition: 'top center'} : {}}
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 w-full md:w-2/3 lg:w-3/4">
          <p className="font-poppins text-base lg:text-lg text-brand-primary font-bold mb-2">
            {member.role}
          </p>
          <h3 className="font-comfortaa text-3xl md:text-4xl lg:text-4xl text-brand-heading font-black mb-4 lg:mb-6">
            {member.name}
          </h3>
          <p className="font-poppins text-base lg:text-lg text-stone-700 leading-relaxed mb-4 lg:mb-6">
            {member.bio}
          </p>
          {/* Contact Links */}
          <div className="flex gap-4 mt-2">
            {member.website && (
              <a
                href={member.website.startsWith('http') ? member.website : `https://${member.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-primary hover:underline"
              >
                <ExternalLink size={18} /> Website
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-1 text-brand-primary hover:underline"
              >
                <Mail size={18} /> Email
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> 
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Elephant image full-width with overlay and text */}
        {/* Zebra team hero section, styled like experiences, full-width but small height, all zebras visible */}
        <div className="relative w-full flex flex-col items-center justify-center mb-10">
          <div
            className="relative w-full bg-[#f5f5ef] overflow-hidden team-hero-section flex flex-col items-center justify-center"
            style={{
              height: '220px',
              maxHeight: '320px',
            }}
          >
            <img
              src="/zebraa.jpeg"
              alt="Zebra Team"
              className="w-full h-full object-contain md:object-cover object-center opacity-60 zebra-desktop-img"
              style={{position: 'absolute', top: 0, left: 0, zIndex: 0}}
            />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-2 py-6 w-full">
              <h1 className="font-comfortaa text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-1 sm:mb-2">
                {t.title}
              </h1>
              <h2 className="font-poppins text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-0 text-brand-primary subtitle-mobile-position">
                {t.subtitle}
              </h2>
            </div>
            <style>{`
              @media (max-width: 640px) {
                .subtitle-mobile-position {
                  position: absolute;
                  bottom: 12px;
                  left: 0;
                  right: 0;
                  margin: 0 auto;
                  width: 100%;
                  padding-left: 8px;
                  padding-right: 8px;
                  background: rgba(255,255,255,0.15);
                  border-radius: 0.5rem;
                }
              }
              @media (min-width: 641px) {
                .team-hero-section {
                  height: 320px !important;
                  max-height: 420px !important;
                }
                .zebra-desktop-img {
                  object-fit: cover !important;
                  width: 100vw !important;
                  height: 100% !important;
                  left: 50%;
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
        <div className="mb-10">
          <h3 className="font-comfortaa text-2xl md:text-3xl text-brand-heading font-bold mb-4">
            {t.introTitle}
          </h3>
          <p className="font-poppins text-base md:text-lg text-stone-700 mb-2">{t.introText1}</p>
          <p className="font-poppins text-base md:text-lg text-stone-700 mb-2">{t.introText2}</p>
          <p className="font-poppins text-base md:text-lg text-stone-700 mb-2">{t.introText3}</p>
          <p className="font-poppins text-base md:text-lg text-stone-700 mb-2">{t.introText4}</p>
          <p className="font-poppins text-base md:text-lg text-stone-700">{t.introText5}</p>
        </div>

        {/* 1. Our Trusted Partner: Kilidove */}
        {kilidove && (
          <div className="mb-12">
            <h3 className="font-comfortaa text-2xl md:text-3xl text-brand-heading font-bold mb-6 flex items-center gap-2">
              <Leaf size={28} className="text-brand-primary" />
              {t.partner}
            </h3>
            {renderTeamMember({ ...kilidove, role: 'Guide' }, 0)}
          </div>
        )}

        {/* 2. Cultural Arts Center (no section title) */}
        {cac && (
          <div className="mb-12">
            {renderTeamMember(cac, 0)}
          </div>
        )}

        {/* 3. Allan (no section title, role 'Your SasaNdioSasa Guide') */}
        {allan && (
          <div className="mb-12">
            {renderTeamMember({ ...allan, role: 'Your SasaNdioSasa Guide' }, 0)}
          </div>
        )}

        {/* 4. Coaches Section */}
        {coaches.length > 0 && (
          <div className="mb-12">
            <h3 className="font-comfortaa text-2xl md:text-3xl text-brand-heading font-bold mb-6 flex items-center gap-2">
              <Heart size={28} className="text-brand-primary" />
              {t.coaches}
            </h3>
            {coaches.map(renderTeamMember)}
          </div>
        )}

        {/* 5. Edna (office, last, with section title) */}
        {edna && (
          <div className="mb-12">
            <h3 className="font-comfortaa text-2xl md:text-3xl text-brand-heading font-bold mb-6 flex items-center gap-2">
              <Users size={28} className="text-brand-primary" />
              {t.office}
            </h3>
            {renderTeamMember(edna, 0)}
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamPage;