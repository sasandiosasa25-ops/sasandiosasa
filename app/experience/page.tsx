'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Compass, Users, Calendar, Mountain } from 'lucide-react';

const translations: Record<string, any> = {
  en: {
    title: 'SasaNdioSasa Beyond Safari',
    subtitle: 'A journey of growth, connection, and discovery.',
    beyondSafari: {
      eyebrow: 'SasaNdioSasa Beyond Safari',
      title: 'RAW EDGE',
      subtitle: 'A leadership reset in Tanzania',
      intro: 'Arrive. Exchange. Integrate.',
      summary: 'A 21-day executive leadership experience designed for experienced professionals who want to rebuild clarity, resilience, and leadership capacity through structured experiences in Tanzania.',
      overviewTitle: 'Leadership needs perspective to grow.',
      overviewBody: 'Leadership rarely breaks down overnight. Under constant responsibility, decision-making becomes reactive, perspective narrows, and performance often replaces presence. RAW EDGE creates intentional distance from familiar environments so leaders can reconnect with clarity, resilience, and conscious leadership.',
      whyTitle: 'Why RAW EDGE?',
      whyBody: 'RAW EDGE combines structured reflection, intercultural exchange, meaningful contribution, extraordinary landscapes, and guided integration into one executive experience. Every stage has a clear purpose and supports sustainable leadership long after the journey ends.',
      points: [
        'Meaningful leadership reflection',
        'Intercultural exchange with local communities',
        'Leadership learning in extraordinary landscapes',
        'Guided integration back to everyday work',
      ],
      phasesTitle: 'Program at a glance',
      phases: [
        { title: 'Arrive', meta: '3 Days • Arusha', description: 'Slow down, settle into the environment, and create space for reflection before the experience unfolds.' },
        { title: 'Exchange', meta: '14 Days', description: 'Spend seven days in community and cultural exchange, followed by seven days in leadership in the wild across Northern Tanzania.' },
        { title: 'Integrate', meta: '4 Days • Zanzibar', description: 'Turn insight into action through reflection, conversations, and practical planning for your return home.' },
      ],
      tanzaniaTitle: 'Why Tanzania?',
      tanzaniaBody: 'Tanzania creates conditions that are difficult to replicate elsewhere. Its culture, hospitality, entrepreneurial energy, and extraordinary landscapes invite leaders to step outside familiar routines and experience leadership from a new perspective.',
      journeyTitle: 'Before. During. Beyond.',
      journeyBody: 'RAW EDGE begins before arrival and continues after return. Two online preparation sessions help participants set intentions. Two structured integration sessions support the transfer of learning into everyday leadership.',
      beforeYouArriveTitle: 'Before You Arrive',
      beforeYouArriveBody: 'Two online preparation sessions support participants in setting intentions, understanding the program, and consciously stepping away from everyday responsibilities.',
      afterYouReturnTitle: 'After You Return',
      afterYouReturnBody: 'Two structured online integration sessions support the practical application of new perspectives, helping participants create lasting impact in both their professional and personal lives.',
      whoTitle: 'Who is it for?',
      whoBody: 'RAW EDGE is designed for experienced professionals, founders, executives, entrepreneurs, and senior decision-makers with significant leadership responsibility.',
      impactTitle: 'Meaningful Impact',
      impactBody: 'Every participation contributes to the long-term work of Ndoto Zetu in Arusha, supporting education, family development, employment, and sustainable community initiatives.',
      createdTitle: 'Created by Experience',
      createdBody: 'RAW EDGE brings together Beata’s executive perspective and Simone’s long-term leadership and intercultural work in Tanzania. Together they created an experience that connects leadership with human connection, practical reality, and sustainable growth.',
      cohortTitle: 'Founding Cohort • November 2026',
      cohortBody: 'The first cohort is limited to eight participants, creating a highly personal experience with space for reflection and guided integration. Applications are now open until 31 September 2026.',
      conversationTitle: 'Start the Conversation',
      conversationBody: 'Participation begins with a personal conversation to explore expectations, suitability, and whether RAW EDGE is the right experience for both the participant and the program.',
      conversationClosing: 'Some journeys change how you lead.',
    },
  },
  de: {
    title: 'SasaNdioSasa Erlebnisse',
    subtitle: 'Eine Reise des Wachstums, der Verbindung und der Entdeckung.',
    beyondSafari: {
      eyebrow: 'SasaNdioSasa Beyond Safari',
      title: 'RAW EDGE',
      subtitle: 'Ein Leadership-Reset in Tansania',
      intro: 'Ankommen. Austausch. Integrieren.',
      summary: 'Eine 21-tägige Executive-Leadership-Erfahrung für erfahrene Fachkräfte, die Klarheit, Resilienz und Führungsfähigkeit durch strukturierte Erlebnisse in Tansania neu aufbauen möchten.',
      overviewTitle: 'Führung braucht Perspektive, um zu wachsen.',
      overviewBody: 'Führung bricht selten über Nacht zusammen. Unter ständigem Druck wird Entscheiden reaktiv, Perspektive schmaler und Leistung ersetzt oft Präsenz. RAW EDGE schafft bewusste Distanz zu vertrauten Umfeldern, damit Führungskräfte sich wieder mit Klarheit, Resilienz und bewusstem Leadership-Verhalten verbinden können.',
      whyTitle: 'Warum RAW EDGE?',
      whyBody: 'RAW EDGE verbindet strukturierte Reflexion, interkulturellen Austausch, sinnvolle Beiträge, außergewöhnliche Landschaften und begleitete Integration zu einer Executive-Erfahrung. Jede Phase hat einen klaren Zweck und unterstützt nachhaltige Führung auch nach der Reise.',
      points: [
        'Sinnvolle Leadership-Reflexion',
        'Interkultureller Austausch mit lokalen Gemeinschaften',
        'Leadership-Lernen in außergewöhnlichen Landschaften',
        'Begleitete Integration zurück ins Alltagshandeln',
      ],
      phasesTitle: 'Programm im Überblick',
      phases: [
        { title: 'Ankommen', meta: '3 Tage • Arusha', description: 'Langsamer werden, sich im Umfeld niederlassen und Raum für Reflexion schaffen, bevor die Erfahrung sich entfaltet.' },
        { title: 'Austausch', meta: '14 Tage', description: 'Sieben Tage in Gemeinschaft und Kultur, gefolgt von sieben Tagen Leadership in der Wildnis im Norden Tansanias.' },
        { title: 'Integrieren', meta: '4 Tage • Sansibar', description: 'Erkenntnisse in Handlung umsetzen durch Reflexion, Gespräche und praktische Planung für die Rückkehr.' },
      ],
      tanzaniaTitle: 'Warum Tansania?',
      tanzaniaBody: 'Tansania schafft Bedingungen, die sich schwer anderswo replizieren lassen. Seine Kultur, Gastfreundschaft, unternehmerische Energie und außergewöhnlichen Landschaften laden dazu ein, vertraute Routinen zu verlassen und Führung aus neuer Perspektive zu erleben.',
      journeyTitle: 'Vorher. Während. Danach.',
      journeyBody: 'RAW EDGE beginnt vor der Ankunft und setzt sich nach der Rückkehr fort. Zwei Online-Vorbereitungssitzungen unterstützen die Zielsetzung. Zwei strukturierte Integrationssitzungen helfen, Lernen in den Alltag zu übertragen.',
      beforeYouArriveTitle: 'Bevor du ankommst',
      beforeYouArriveBody: 'Zwei Online-Vorbereitungssitzungen unterstützen Teilnehmende dabei, Absichten zu formulieren, das Programm zu verstehen und sich bewusst von alltäglichen Verantwortlichkeiten zu lösen.',
      afterYouReturnTitle: 'Nach deiner Rückkehr',
      afterYouReturnBody: 'Zwei strukturierte Online-Integrationssitzungen unterstützen die praktische Anwendung neuer Perspektiven und helfen dabei, langfristig Wirkung im beruflichen und privaten Leben zu entfalten.',
      whoTitle: 'Für wen ist es gedacht?',
      whoBody: 'RAW EDGE richtet sich an erfahrene Fachkräfte, Gründerinnen und Gründer, Führungskräfte, Unternehmerinnen und Unternehmer sowie Entscheidungsträger mit großer Verantwortung.',
      impactTitle: 'Sinnvolle Wirkung',
      impactBody: 'Jede Teilnahme trägt zur langfristigen Arbeit von Ndoto Zetu in Arusha bei und unterstützt Bildung, Familienentwicklung, Beschäftigung und nachhaltige Gemeinschaftsinitiativen.',
      createdTitle: 'Erstellt durch Erfahrung',
      createdBody: 'RAW EDGE vereint Beatas executive Perspektive mit Simones langjähriger Leadership- und interkultureller Arbeit in Tansania. Gemeinsam schufen sie eine Erfahrung, die Führung mit menschlicher Verbindung, praktischer Realität und nachhaltigem Wachstum verbindet.',
      cohortTitle: 'Gründerkohorte • November 2026',
      cohortBody: 'Die erste Kohorte ist auf acht Teilnehmende begrenzt, damit Raum für Reflexion und begleitete Integration entsteht. Die Bewerbung ist bis zum 31. September 2026 offen.',
      conversationTitle: 'Starte das Gespräch',
      conversationBody: 'Die Teilnahme beginnt mit einem persönlichen Gespräch, um Erwartungen, Eignung und die Passung von RAW EDGE für Teilnehmende und Programm zu prüfen.',
      conversationClosing: 'Einige Reisen verändern, wie du führst.',
    },
  },
};

const ExperiencePage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const highlightKeywords = (text: string) => {
    const keywords = language === 'de'
      ? ['Führung', 'Klarheit', 'Wirkung', 'Alltag', 'Rückkehr', 'Gemeinschaft', 'Lernen', 'Perspektive', 'nachhaltig']
      : ['leadership', 'clarity', 'impact', 'everyday', 'return', 'community', 'growth', 'perspective', 'sustainable'];

    const pattern = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = text.split(pattern);

    return parts.map((part, index) => {
      const isKeyword = keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase());
      return isKeyword ? (
        <span key={`${part}-${index}`} className="font-semibold text-brand-primary">
          {part}
        </span>
      ) : (
        <span key={`${part}-${index}`}>{part}</span>
      );
    });
  };

  const applyPhraseHighlight = (text: string, phrases: string[]) => {
    const escapedPhrases = phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`(${escapedPhrases.join('|')})`, 'gi');
    const parts = text.split(pattern);

    return parts.map((part, index) => {
      const isMatch = phrases.some((phrase) => phrase.toLowerCase() === part.toLowerCase());
      return isMatch ? (
        <span key={`${part}-${index}`} className="font-semibold text-brand-primary">
          {part}
        </span>
      ) : (
        <span key={`${part}-${index}`}>{part}</span>
      );
    });
  };

  return (
    <div className="min-h-screen ">
      {/* Experience Title Full Background Section (no open space, larger image) */}
      <div
        className="relative flex items-center justify-center overflow-hidden w-full h-32 sm:h-40 md:h-48 lg:h-56"
        style={{
          backgroundImage: 'url(/experience11.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/30" style={{ zIndex: 1 }} />
        <div className="relative z-10 text-center w-full px-2 sm:px-4 flex flex-col items-center justify-center">
          <h1 className="font-comfortaa text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2 font-black tracking-tight drop-shadow-lg">
            <span className="italic text-white">{t.title}</span>
          </h1>
          <p className="font-poppins text-sm xs:text-base sm:text-lg md:text-xl text-white/95 font-semibold">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Hero Section removed: no extra open space or broken image */}

      <div id="beyond-safari" className="scroll-mt-20 bg-stone-50/70">
        <div className="w-full px-3 md:px-8 lg:px-16 py-10 lg:py-16 flex flex-col gap-8">
          <div className="flex flex-col gap-3 items-start">
            <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
              {t.beyondSafari.eyebrow}
            </span>
            <h2 className="font-comfortaa text-3xl sm:text-4xl md:text-5xl text-brand-heading font-bold leading-tight">
              <span className="italic text-brand-primary">{t.beyondSafari.title}</span>
            </h2>
            <h3 className="font-comfortaa text-2xl sm:text-3xl text-brand-heading font-semibold">
              {t.beyondSafari.subtitle}
            </h3>
            <p className="font-poppins text-base sm:text-lg text-stone-700 leading-relaxed max-w-4xl">
              {t.beyondSafari.summary}
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-primary font-semibold">
                {t.beyondSafari.intro}
              </p>
              <h4 className="font-comfortaa text-2xl text-brand-heading font-bold mt-3">
                {t.beyondSafari.overviewTitle}
              </h4>
              <p className="font-poppins text-base text-stone-700 leading-relaxed mt-4">
                {t.beyondSafari.overviewBody}
              </p>
              <div className="mt-6 rounded-2xl bg-brand-menu-hover border border-brand-border p-5">
                <h5 className="font-comfortaa text-xl text-brand-heading font-bold">
                  {t.beyondSafari.whyTitle}
                </h5>
                <p className="font-poppins text-base text-stone-700 leading-relaxed mt-3">
                  {t.beyondSafari.whyBody}
                </p>
              </div>
            </div>

            <div className="bg-brand-menu-hover rounded-2xl border border-brand-border p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <Compass className="h-6 w-6" />
                </div>
                <h4 className="font-comfortaa text-2xl text-brand-heading font-bold">
                  {language === 'en' ? 'What this experience offers' : 'Was diese Erfahrung bietet'}
                </h4>
              </div>
              <ul className="mt-6 space-y-3">
                {t.beyondSafari.points.map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 rounded-xl bg-white/70 p-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-primary" />
                    <span className="font-poppins text-sm sm:text-base text-stone-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="raw-edge" className="scroll-mt-24 rounded-3xl border border-brand-border bg-white shadow-sm overflow-hidden">
            <div className="border-b border-brand-border bg-gradient-to-r from-brand-menu-hover to-white p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-primary font-semibold">Raw Edge</p>
              <h4 className="font-comfortaa text-2xl sm:text-3xl text-brand-heading font-bold mt-3">
                {t.beyondSafari.phasesTitle}
              </h4>
              <p className="font-poppins text-base text-stone-700 leading-relaxed mt-3 max-w-3xl">
                {t.beyondSafari.summary}
              </p>
            </div>

            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2">
              {t.beyondSafari.phases.map((phase: { title: string; meta: string; description: string }, index: number) => {
                const imageSrc = index === 0 ? '/green1.jpeg' : index === 1 ? '/leadwild.jpeg' : '/zanzibar1.jpeg';

                return (
                  <div key={index} className="rounded-2xl border border-brand-border bg-stone-50/80 p-5">
                    <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
                      <Image
                        src={imageSrc}
                        alt={phase.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                        {index === 0 ? <Calendar className="h-5 w-5" /> : index === 1 ? <Users className="h-5 w-5" /> : <Mountain className="h-5 w-5" />}
                      </div>
                      <div>
                        <h5 className="font-comfortaa text-xl text-brand-heading font-bold">{phase.title}</h5>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">{phase.meta}</p>
                      </div>
                    </div>
                    <p className="font-poppins text-base text-stone-700 leading-relaxed mt-4">{phase.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-6 border-t border-brand-border bg-gradient-to-br from-emerald-50/70 via-stone-50 to-brand-menu-hover/80 p-6 sm:p-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-[0_8px_30px_rgba(36,64,46,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-brand-primary">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-comfortaa text-xl text-brand-heading font-bold">{t.beyondSafari.tanzaniaTitle}</h5>
                    <p className="font-poppins text-base text-stone-700 leading-relaxed mt-3">{t.beyondSafari.tanzaniaBody}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-[0_8px_30px_rgba(36,64,46,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-brand-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-comfortaa text-xl text-brand-heading font-bold">{t.beyondSafari.journeyTitle}</h5>
                    <p className="font-poppins text-base text-stone-700 leading-relaxed mt-3">{t.beyondSafari.journeyBody}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-[0_8px_30px_rgba(36,64,46,0.06)]">
                <div>
                  <h5 className="font-comfortaa text-xl text-brand-heading font-bold">{t.beyondSafari.beforeYouArriveTitle}</h5>
                  <p className="font-poppins text-base text-stone-700 leading-relaxed mt-3">{applyPhraseHighlight(t.beyondSafari.beforeYouArriveBody, language === 'de' ? ['Absichten', 'Programm', 'Verständnis'] : ['setting intentions', 'understanding the program'])}</p>
                </div>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-[0_8px_30px_rgba(36,64,46,0.06)]">
                <div>
                  <h5 className="font-comfortaa text-xl text-brand-heading font-bold">{t.beyondSafari.afterYouReturnTitle}</h5>
                  <p className="font-poppins text-base text-stone-700 leading-relaxed mt-3">{applyPhraseHighlight(t.beyondSafari.afterYouReturnBody, language === 'de' ? ['neue Perspektiven', 'dauerhafte Wirkung'] : ['new perspectives', 'lasting impact'])}</p>
                </div>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-[0_8px_30px_rgba(36,64,46,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-brand-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-comfortaa text-xl text-brand-heading font-bold">{t.beyondSafari.whoTitle}</h5>
                    <p className="font-poppins text-base text-stone-700 leading-relaxed mt-3">{t.beyondSafari.whoBody}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-[0_8px_30px_rgba(36,64,46,0.06)]">
                <div>
                  <h5 className="font-comfortaa text-xl text-brand-heading font-bold">{t.beyondSafari.impactTitle}</h5>
                  <p className="font-poppins text-base text-stone-700 leading-relaxed mt-3">{highlightKeywords(t.beyondSafari.impactBody)}</p>
                </div>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-[0_8px_30px_rgba(36,64,46,0.06)] lg:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-brand-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="w-full">
                    <h5 className="font-comfortaa text-xl text-brand-heading font-bold">{t.beyondSafari.createdTitle}</h5>
                    <p className="font-poppins text-base text-stone-700 leading-relaxed mt-3">{t.beyondSafari.createdBody}</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col items-center rounded-2xl border border-brand-border bg-stone-50/80 p-4">
                        <div className="relative h-56 w-full max-w-[220px] overflow-hidden rounded-2xl">
                          <Image
                            src="/beata.jpeg"
                            alt="Beata"
                            fill
                            sizes="(max-width: 768px) 100vw, 220px"
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">Beata</p>
                      </div>
                      <div className="flex flex-col items-center rounded-2xl border border-brand-border bg-stone-50/80 p-4">
                        <div className="relative h-56 w-full max-w-[220px] overflow-hidden rounded-2xl">
                          <Image
                            src="/simone1.jpeg"
                            alt="Simone"
                            fill
                            sizes="(max-width: 768px) 100vw, 220px"
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">Simone</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-[0_8px_30px_rgba(36,64,46,0.06)] lg:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-brand-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-comfortaa text-xl text-brand-heading font-bold">{t.beyondSafari.cohortTitle}</h5>
                    <p className="font-poppins text-base text-stone-700 leading-relaxed mt-3">{t.beyondSafari.cohortBody}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-brand-border bg-stone-50/80 p-6 sm:p-8">
              <div className="relative overflow-hidden rounded-[2rem] border border-brand-border bg-stone-900 text-white shadow-sm">
                <Image
                  src="/leadwild2.jpeg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
                <div className="relative z-10 p-8 sm:p-10 lg:p-12 max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/80 font-semibold">Raw Edge</p>
                  <h5 className="font-comfortaa text-2xl sm:text-3xl font-bold mt-3">{t.beyondSafari.conversationTitle}</h5>
                  <p className="font-poppins text-base sm:text-lg text-white/90 leading-relaxed mt-4">{t.beyondSafari.conversationBody}</p>
                  <p className="font-comfortaa text-xl sm:text-2xl italic text-white/95 mt-6">{t.beyondSafari.conversationClosing}</p>
                  <div className="mt-8">
                    <Link href="#" className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary">
                      Explore if this journey is for you
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-brand-heading text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-comfortaa text-4xl md:text-5xl mb-6 font-bold">
            <span className="italic">SasaNdioSasa Beyond Safari</span>
          </h3>
          <p className="font-poppins text-xl md:text-2xl text-white/90 mb-4">
            {language === 'en' ? 'Your Time is Now' : 'Deine Zeit ist Jetzt'}
          </p>
          <p className="font-poppins text-lg text-white/80 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Ready to begin your journey? Connect with us to learn more about our upcoming experiences.'
              : 'Bereit, Ihre Reise zu beginnen? Kontaktieren Sie uns, um mehr über unsere kommenden Erfahrungen zu erfahren.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;