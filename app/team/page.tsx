'use client';

import { Heart, Leaf, Users, ExternalLink, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BrandName = () => (
  <span className="italic font-serif text-brand-primary font-bold">SasaNdioSasa</span>
);

type Language = 'en' | 'de';

const TeamPage = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const translations = {
    en: {
      title: 'Our Team',
      subtitle: 'The People Behind SasaNdioSasa',
      whoWeAre: 'Who We Are',
      whoWeAreText: 'SasaNdioSasa is a collective of passionate, bold innovators who live what we offer. We are guides, facilitators, organizers, and storytellers. But above all, we are people connected through one place that keeps growing us every day: Tanzania.',
      diverse: 'Our backgrounds are diverse. From travel and hospitality to education, social impact, and coaching. Yet we share one belief: that meaningful development begins with connection. To the land, to the people, and to ourselves.',
      philosophy: 'Each path we design is built on presence, awareness, and the belief that transformation happens when we slow down and truly connect.',
      ourPartner: 'Our Trusted Partner',
      partnerDescription: 'We are proud to introduce Kilidove / Mawe Lodges, a partner who shares what we value most: Tanzanian hospitality. Every detail, from carefully curated menus and locally sourced suppliers to thoughtfully designed décor and coachings, reflects their commitment to quality and authenticity.',
      partnerCert: 'Currently working toward Travelife Sustainable Certification, Kilidove / Mawe Lodges mirror and live by the SasaNdioSasa values every day.',
      team: 'Meet Our Team',
      teamMembers: [
        {
          name: 'Allan',
          role: 'Your SasaNdioSasa Guide',
          image: '/Allan.jpeg',
          bio: 'Allan feels most at home barefoot, close to the earth he loves so much. From the peaks of the Usambara Mountains to the quiet coast, he knows Tanzania by heart. His calm, grounded way of guiding brings travelers closer to nature, and to a slower rhythm that many didn\'t know they were missing.'
        },
        {
          name: 'Simone',
          role: 'Creative Powerhouse & Coach',
          image: '/Simone.jpeg',
          bio: 'Simone is the creative fire behind SasaNdioSasa. She brings bold ideas to life with fierce curiosity, intuition, and an unstoppable sense for what\'s possible. Known for her open heart and brilliant, practical mind, she transforms obstacles into opportunities and empowers everyone around her.',
          website: 'watchout.co.tz',
          email: 'info@watchout.co.tz'
        },
        {
          name: 'Ina',
          role: 'Transformation Coach & Retreat Creator',
          image: '/Ina.jpeg',
          bio: 'Ina is a visionary rooted in transformation—of land, systems, and hearts. Her ROOTED™ methodology creates profound, lasting change. Her unwavering love for Earth and people radiates through every retreat, coaching session, and conversation, inviting transformation that shapes the world.',
          website: 'inawalter.com'
        },
        {
          name: 'Edna',
          role: 'The Force Behind It All',
          image: '/Edna.jpeg',
          bio: 'Edna is the unstoppable force that powers SasaNdioSasa. A brilliant problem-solver with a fierce heart, she turns chaos into clarity and keeps everything moving forward. Her bold persistence, sharp mind, and calming presence prove that every challenge has a powerful way through.'
        }
      ]
    },
    de: {
      title: 'Unser Team',
      subtitle: 'Die Menschen hinter SasaNdioSasa',
      whoWeAre: 'Wer wir sind',
      whoWeAreText: 'SasaNdioSasa ist ein Kollektiv von leidenschaftlichen, mutigen Innovatoren, die das leben, was wir anbieten. Wir sind Guides, Moderatoren, Organisatoren und Geschichtenerzähler. Aber vor allem sind wir Menschen, die durch einen Ort verbunden sind, der uns jeden Tag wachsen lässt: Tansania.',
      diverse: 'Unsere Hintergründe sind vielfältig. Von Reisen und Gastgewerbe über Bildung, gesellschaftliche Auswirkungen bis hin zu Coaching. Aber wir teilen einen Glauben: Sinnvolle Entwicklung beginnt mit Verbindung. Mit dem Land, mit den Menschen und mit uns selbst.',
      philosophy: 'Jeder Weg, den wir gestalten, basiert auf Präsenz, Bewusstsein und dem Glauben, dass Transformation geschieht, wenn wir verlangsamen und wirklich verbunden sind.',
      ourPartner: 'Unser vertrauensvoller Partner',
      partnerDescription: 'Wir sind stolz, Kilidove / Mawe Lodges vorzustellen, einen Partner, der das teilt, was wir am meisten schätzen: tansanische Gastfreundschaft. Jedes Detail, von sorgfältig kuratierten Menüs und lokal bezogenen Lieferanten bis hin zu durchdacht gestaltetem Dekor und Coachings, spiegelt ihr Engagement für Qualität und Authentizität wider.',
      partnerCert: 'Kilidove / Mawe Lodges arbeitet derzeit auf die Travelife-Nachhaltigkeitszertifizierung hin und verkörpert die SasaNdioSasa-Werte jeden Tag.',
      team: 'Treffen Sie unser Team',
      teamMembers: [
        {
          name: 'Allan',
          role: 'Dein SasaNdioSasa Guide',
          image: '/Allan.jpeg',
          bio: 'Allan fühlt sich am wohlsten barfuß, in der Nähe der Erde, die er so sehr liebt. Von den Gipfeln der Usambara-Berge bis zur ruhigen Küste kennt er Tansania von Herzen. Seine ruhige, erdverbundene Art zu führen bringt Reisende der Natur näher und zu einem langsameren Rhythmus, den viele nicht kannten, dass sie ihn vermissten.'
        },
        {
          name: 'Simone',
          role: 'Coach & Moderatorin',
          image: '/Simone.jpeg',
          bio: 'Simone ist der kreative Puls von SasaNdioSasa. Sie bringt Ideen mit Neugier, Intuition und einem starken Gefühl für das Mögliche zum Leben. Bekannt für ihr offenes Herz und ihren praktischen Verstand, findet sie Lösungen, wo andere Grenzen sehen.',
          website: 'watchout.co.tz',
          email: 'info@watchout.co.tz'
        },
        {
          name: 'Ina',
          role: 'Coach & Retreat Kreatorin',
          image: '/Ina.jpeg',
          bio: 'Inas Reise ist in Transformation, im Land, in Systemen und im Herzen verwurzelt. Als Coach und Retreat-Kreatorin verbindet sie ihre Arbeit mit der ROOTED™-Methodik. Ihre Liebe zur Erde und zu Menschen ist in jedem Retreat und jeder Coaching-Sitzung sichtbar.',
          website: 'inawalter.com'
        },
        {
          name: 'Edna',
          role: 'Allrounder',
          image: '/Edna.jpeg',
          bio: 'Edna ist die leise Kraft, die alles in Bewegung hält. Eine echte Problemlöserin mit starkem Herzen hält sie die Fäden zusammen, wenn es hektisch wird. Ihre Ausdauer, Klarheit und ruhige Präsenz erinnern uns daran, dass jede Herausforderung einen Weg hinaus hat.'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen  bg-light ">
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

      {/* Who We Are Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-brand-primary rounded-full" />
            <h2 className="font-comfortaa text-4xl text-brand-heading font-bold">
              {t.whoWeAre}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="font-poppins text-lg text-stone-700 leading-relaxed mb-6">
                {t.whoWeAreText}
              </p>
              <p className="font-poppins text-lg text-stone-700 leading-relaxed">
                {t.diverse}
              </p>
            </div>
            <div className="bg-brand-menu-hover rounded-2xl p-8 border border-brand-border">
              <p className="font-poppins text-lg text-stone-700 leading-relaxed italic">
                "{t.philosophy}"
              </p>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-brand-border shadow-sm mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="w-6 h-6 text-brand-primary" />
            <h3 className="font-comfortaa text-3xl text-brand-heading font-bold">
              {t.ourPartner}
            </h3>
          </div>
          <p className="font-poppins text-lg text-stone-700 leading-relaxed mb-4">
            {t.partnerDescription}
          </p>
          <p className="font-poppins text-lg text-stone-600 leading-relaxed">
            {t.partnerCert}
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-brand-primary rounded-full" />
            <h2 className="font-comfortaa text-4xl text-brand-heading font-bold">
              {t.team}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-brand-border transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
             
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-comfortaa text-3xl text-brand-heading mb-2 font-bold">
                  {member.name}
                </h3>
                <p className="font-poppins text-sm text-brand-primary font-semibold mb-4 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  {member.role}
                </p>

                <p className="font-poppins text-stone-700 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Contact Links */}
                {(member.website || member.email) && (
                  <div className="flex flex-col gap-2 pt-4 border-t border-brand-border">
                    {member.website && (
                      <a
                        href={`https://${member.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-poppins text-sm text-brand-primary hover:text-brand-secondary transition-colors flex items-center gap-2 group/link"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {member.website}
                        <span className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="font-poppins text-sm text-brand-primary hover:text-brand-secondary transition-colors"
                      >
                        {member.email}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default TeamPage;