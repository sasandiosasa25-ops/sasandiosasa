'use client';

import { useState } from 'react';
import { Heart, BookOpen, Briefcase, Leaf, Trees, Users, ExternalLink } from 'lucide-react';

type GoalSection = {
  title: string;
  content: string;
};

export default function ImpactPage() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Our Impact Towards the UN Sustainability Goals",
      subtitle: "Our Responsibility",
      intro: "Our Corporate Sustainability Approach (CSA) is how we align our work with the UN Sustainable Development Goals.",
      ndotoSection: {
        title: "Every journey leaves a trace",
        content: "Through Ndoto Zetu and our partnerships, we ensure that trace is positive for the land, the people, and the future. We use locally sourced ingredients, avoid single-use plastics, and create fair work opportunities. Our travelers become part of lasting impact through respectful exchange with local communities.",
        cta: "Learn more about Ndoto Zetu"
      },
      goals: [
        {
          id: "good-health",
          icon: Heart,
          title: "Good Health and Well-being",
          tagline: "Creating journeys that restore balance, resilience, and shared strength in life.",
          sections: [
            {
              title: "Our Responsibility",
              content: "We design experiences that allow people to recover, slow down and regain strength. Whether it is a safari that creates space for silence, or a retreat that supports reflection, health for us means caring for the whole person, body, mind and community."
            },
            {
              title: "What you take with you",
              content: "You leave every experience with renewed energy and clarity, and with the awareness that well-being is something you can shape every day. Each experience invites you to take responsibility for your balance, your choices and your relationships."
            },
            {
              title: "What we achieve together",
              content: "When we practice well-being in this way, we influence more than ourselves. Families, teams and communities are touched by the balance we bring home."
            }
          ]
        },
        {
          id: "quality-education",
          icon: BookOpen,
          title: "Quality Education",
          tagline: "Learning through reflection and exchange, while supporting education in local communities.",
          sections: [
            {
              title: "Our Responsibility",
              content: "We design experiences where learning is woven into every step. In Ndoto Zetu family sessions and life skill coaching, in group coaching circles during retreats, or in reflections while traveling together on safari. Education for us is not separate from life. It happens through real moments, shared stories and practical insight."
            },
            {
              title: "What you take with you",
              content: "You leave with concrete skills and perspectives. how to reflect, how to listen, how to grow in the way you lead yourself and others. Education becomes part of your daily choices again, and supports your growth."
            },
            {
              title: "What we achieve together",
              content: "When communities and travelers learn side by side, education turns into shared growth. Together we create understanding across cultures, strengthen families and inspire a way of learning that continues far beyond the journey."
            }
          ]
        },
        {
          id: "decent-work",
          icon: Briefcase,
          title: "Decent Work and Economic Growth",
          tagline: "Fair partnerships that strengthen livelihoods and dignity in work.",
          sections: [
            {
              title: "Our Responsibility",
              content: "We design experiences that are built on fair partnerships. Every retreat, every Safari, every collaboration creates dignified work. From guides and drivers to families who prepare meals or support activities. For us, decent work means respect, fair pay and the chance to grow through shared projects."
            },
            {
              title: "What you take with you",
              content: "You experience the people behind your journey, their stories, their skills and their pride. You see that responsible travel is not just about what you receive, but also about what your choice gives back in dignity and livelihood."
            },
            {
              title: "What we achieve together",
              content: "When travel creates fair opportunities, communities grow stronger. Together we show that work can be more than survival. It can be meaningful, respected and connected to hope for the future."
            }
          ]
        },
        {
          id: "responsible-consumption",
          icon: Leaf,
          title: "Responsible Consumption and Production",
          tagline: "Reducing waste, choosing local resources, and showing that less can be more.",
          sections: [
            {
              title: "Our Responsibility",
              content: "We design experiences with a conscious use of resources. In retreats and safaris we reduce waste, avoid plastic, and choose local food and materials. Simplicity is not a lack, it is a way to show respect for people, places and what we use together."
            },
            {
              title: "What you take with you",
              content: "You learn that less can truly be more. A simple meal made with local ingredients, or a night under the stars without distraction, shows how richness comes from presence, not from excess. These moments invite you to reflect on your own daily consumption."
            },
            {
              title: "What we achieve together",
              content: "When we practice responsible choices as travelers and hosts, we create a ripple effect. Communities see value in sustainable practices, guests carry these habits home, and together we show that comfort and responsibility can belong to the same experience."
            }
          ]
        },
        {
          id: "life-on-land",
          icon: Trees,
          title: "Life on Land",
          tagline: "Respecting nature as our teacher and protecting wildlife and landscapes.",
          sections: [
            {
              title: "Our Responsibility",
              content: "We design experiences where nature is not decoration, but a teacher. On safari, during walks, or in coaching circles, we take time to connect with the land around us. Respect means protecting wildlife and landscapes. And also learning from their balance, strength and silence."
            },
            {
              title: "What you take with you",
              content: "You discover that the lessons of nature apply to daily life. The patience of an elephant, the resilience of a tree, the rhythm of the seasons. All of this can guide how you lead, decide and care in your own environment."
            },
            {
              title: "What we achieve together",
              content: "When we travel and learn with this awareness, we create ownership. Guests and communities see themselves as part of the land, not separate from it. Together we carry these lessons into families, workplaces and group coaching. Shaping spaces where respect, responsibility and connection guide how we act."
            }
          ]
        },
        {
          id: "partnerships",
          icon: Users,
          title: "Partnerships for the Goals",
          tagline: "Building strong collaborations that connect guests, communities, and global impact.",
          sections: [
            {
              title: "Our Responsibility",
              content: "We design experiences that grow through collaboration. Our work is built on trustful partnerships. With local guides, families, organizations and international guests. Each collaboration adds perspective and creates something no one could achieve alone."
            },
            {
              title: "What you take with you",
              content: "You experience what it means to be part of a larger network. Every conversation, every shared moment shows how connection across cultures can create value. Not only for a journey, but for life."
            },
            {
              title: "What we achieve together",
              content: "When partnerships are lived with awareness, they become bridges. Guests, communities and hosts act together, and the result is stronger than the sum of its parts. We prove that sustainable impact is not created in isolation, but through shared responsibility and collaboration."
            }
          ]
        }
      ],
      ctaTitle: "Join Us in Making an Impact",
      ctaText: "Every journey with SasaNdioSasa contributes to sustainable development and positive change in local communities.",
      ctaButton: "Get in Touch"
    },
    de: {
      title: "Unsere Wirkung auf die UN-Nachhaltigkeitsziele",
      subtitle: "Unsere Verantwortung",
      intro: "Unser Corporate Sustainability Approach (CSA) ist die Art und Weise, wie wir unsere Arbeit an den UN-Zielen für nachhaltige Entwicklung ausrichten.",
      ndotoSection: {
        title: "Jede Reise hinterlässt eine Spur",
        content: "Durch Ndoto Zetu und unsere Partnerschaften stellen wir sicher, dass diese Spur positiv ist – für das Land, die Menschen und die Zukunft. Wir verwenden lokale Zutaten, vermeiden Einwegplastik und schaffen faire Arbeitsmöglichkeiten. Unsere Reisenden werden durch respektvollen Austausch mit lokalen Gemeinschaften Teil einer nachhaltigen Wirkung.",
        cta: "Mehr über Ndoto Zetu erfahren"
      },
      goals: [
        {
          id: "good-health",
          icon: Heart,
          title: "Gesundheit und Wohlbefinden",
          tagline: "Reisen schaffen, die Gleichgewicht, Widerstandsfähigkeit und gemeinsame Stärke im Leben wiederherstellen.",
          sections: [
            {
              title: "Unsere Verantwortung",
              content: "Wir gestalten Erfahrungen, die es Menschen ermöglichen, sich zu erholen, langsamer zu werden und Kraft zu sammeln. Ob es eine Safari ist, die Raum für Stille schafft, oder ein Rückzug, der Reflexion unterstützt, Gesundheit bedeutet für uns, sich um die ganze Person zu kümmern, Körper, Geist und Gemeinschaft."
            },
            {
              title: "Was Sie mitnehmen",
              content: "Sie verlassen jede Erfahrung mit erneuter Energie und Klarheit und mit dem Bewusstsein, dass Wohlbefinden etwas ist, das Sie jeden Tag gestalten können. Jede Erfahrung lädt Sie ein, Verantwortung für Ihr Gleichgewicht, Ihre Entscheidungen und Ihre Beziehungen zu übernehmen."
            },
            {
              title: "Was wir gemeinsam erreichen",
              content: "Wenn wir Wohlbefinden auf diese Weise praktizieren, beeinflussen wir mehr als uns selbst. Familien, Teams und Gemeinschaften werden von dem Gleichgewicht berührt, das wir nach Hause bringen."
            }
          ]
        },
        {
          id: "quality-education",
          icon: BookOpen,
          title: "Hochwertige Bildung",
          tagline: "Lernen durch Reflexion und Austausch, während wir Bildung in lokalen Gemeinschaften unterstützen.",
          sections: [
            {
              title: "Unsere Verantwortung",
              content: "Wir gestalten Erfahrungen, bei denen das Lernen in jeden Schritt eingewoben ist. In Ndoto Zetu-Familiensitzungen und Life-Skill-Coaching, in Gruppen-Coaching-Kreisen während Retreats oder in Reflexionen während gemeinsamer Safaris. Bildung ist für uns nicht vom Leben getrennt. Sie geschieht durch echte Momente, geteilte Geschichten und praktische Einsichten."
            },
            {
              title: "Was Sie mitnehmen",
              content: "Sie gehen mit konkreten Fähigkeiten und Perspektiven. Wie man reflektiert, wie man zuhört, wie man in der Art wächst, wie man sich selbst und andere führt. Bildung wird wieder Teil Ihrer täglichen Entscheidungen und unterstützt Ihr Wachstum."
            },
            {
              title: "Was wir gemeinsam erreichen",
              content: "Wenn Gemeinschaften und Reisende Seite an Seite lernen, wird Bildung zu gemeinsamem Wachstum. Gemeinsam schaffen wir Verständnis über Kulturen hinweg, stärken Familien und inspirieren eine Art des Lernens, die weit über die Reise hinaus weitergeht."
            }
          ]
        },
        {
          id: "decent-work",
          icon: Briefcase,
          title: "Menschenwürdige Arbeit und Wirtschaftswachstum",
          tagline: "Faire Partnerschaften, die Lebensgrundlagen und Würde in der Arbeit stärken.",
          sections: [
            {
              title: "Unsere Verantwortung",
              content: "Wir gestalten Erfahrungen, die auf fairen Partnerschaften aufbauen. Jeder Rückzug, jede Safari, jede Zusammenarbeit schafft würdevolle Arbeit. Von Führern und Fahrern bis zu Familien, die Mahlzeiten zubereiten oder Aktivitäten unterstützen. Für uns bedeutet menschenwürdige Arbeit Respekt, faire Bezahlung und die Chance, durch gemeinsame Projekte zu wachsen."
            },
            {
              title: "Was Sie mitnehmen",
              content: "Sie erleben die Menschen hinter Ihrer Reise, ihre Geschichten, ihre Fähigkeiten und ihren Stolz. Sie sehen, dass verantwortungsvolles Reisen nicht nur darum geht, was Sie erhalten, sondern auch darum, was Ihre Wahl an Würde und Lebensunterhalt zurückgibt."
            },
            {
              title: "Was wir gemeinsam erreichen",
              content: "Wenn Reisen faire Möglichkeiten schafft, werden Gemeinschaften stärker. Gemeinsam zeigen wir, dass Arbeit mehr als Überleben sein kann. Sie kann sinnvoll, respektiert und mit Hoffnung für die Zukunft verbunden sein."
            }
          ]
        },
        {
          id: "responsible-consumption",
          icon: Leaf,
          title: "Verantwortungsvolle Konsum- und Produktionsmuster",
          tagline: "Abfall reduzieren, lokale Ressourcen wählen und zeigen, dass weniger mehr sein kann.",
          sections: [
            {
              title: "Unsere Verantwortung",
              content: "Wir gestalten Erfahrungen mit bewusstem Ressourceneinsatz. In Retreats und Safaris reduzieren wir Abfall, vermeiden Plastik und wählen lokale Lebensmittel und Materialien. Einfachheit ist kein Mangel, sie ist eine Art, Respekt für Menschen, Orte und das, was wir gemeinsam nutzen, zu zeigen."
            },
            {
              title: "Was Sie mitnehmen",
              content: "Sie lernen, dass weniger wirklich mehr sein kann. Eine einfache Mahlzeit mit lokalen Zutaten oder eine Nacht unter den Sternen ohne Ablenkung zeigt, wie Reichtum aus Präsenz kommt, nicht aus Überfluss. Diese Momente laden Sie ein, über Ihren eigenen täglichen Konsum nachzudenken."
            },
            {
              title: "Was wir gemeinsam erreichen",
              content: "Wenn wir als Reisende und Gastgeber verantwortungsvolle Entscheidungen treffen, erzeugen wir einen Welleneffekt. Gemeinschaften sehen den Wert nachhaltiger Praktiken, Gäste tragen diese Gewohnheiten nach Hause, und gemeinsam zeigen wir, dass Komfort und Verantwortung zur selben Erfahrung gehören können."
            }
          ]
        },
        {
          id: "life-on-land",
          icon: Trees,
          title: "Leben an Land",
          tagline: "Die Natur als unsere Lehrerin respektieren und Wildtiere und Landschaften schützen.",
          sections: [
            {
              title: "Unsere Verantwortung",
              content: "Wir gestalten Erfahrungen, bei denen die Natur nicht Dekoration ist, sondern eine Lehrerin. Auf Safari, bei Spaziergängen oder in Coaching-Kreisen nehmen wir uns Zeit, uns mit dem Land um uns herum zu verbinden. Respekt bedeutet, Wildtiere und Landschaften zu schützen. Und auch von ihrem Gleichgewicht, ihrer Stärke und ihrer Stille zu lernen."
            },
            {
              title: "Was Sie mitnehmen",
              content: "Sie entdecken, dass die Lehren der Natur auf das tägliche Leben anwendbar sind. Die Geduld eines Elefanten, die Widerstandsfähigkeit eines Baumes, der Rhythmus der Jahreszeiten. All dies kann leiten, wie Sie führen, entscheiden und sich in Ihrer eigenen Umgebung kümmern."
            },
            {
              title: "Was wir gemeinsam erreichen",
              content: "Wenn wir mit diesem Bewusstsein reisen und lernen, schaffen wir Eigenverantwortung. Gäste und Gemeinschaften sehen sich als Teil des Landes, nicht getrennt davon. Gemeinsam tragen wir diese Lehren in Familien, Arbeitsplätze und Gruppen-Coaching. Wir gestalten Räume, in denen Respekt, Verantwortung und Verbindung unser Handeln leiten."
            }
          ]
        },
        {
          id: "partnerships",
          icon: Users,
          title: "Partnerschaften zur Erreichung der Ziele",
          tagline: "Starke Kooperationen aufbauen, die Gäste, Gemeinschaften und globale Wirkung verbinden.",
          sections: [
            {
              title: "Unsere Verantwortung",
              content: "Wir gestalten Erfahrungen, die durch Zusammenarbeit wachsen. Unsere Arbeit basiert auf vertrauensvollen Partnerschaften. Mit lokalen Führern, Familien, Organisationen und internationalen Gästen. Jede Zusammenarbeit fügt Perspektive hinzu und schafft etwas, das niemand allein erreichen könnte."
            },
            {
              title: "Was Sie mitnehmen",
              content: "Sie erleben, was es bedeutet, Teil eines größeren Netzwerks zu sein. Jedes Gespräch, jeder gemeinsame Moment zeigt, wie Verbindung über Kulturen hinweg Wert schaffen kann. Nicht nur für eine Reise, sondern fürs Leben."
            },
            {
              title: "Was wir gemeinsam erreichen",
              content: "Wenn Partnerschaften mit Bewusstsein gelebt werden, werden sie zu Brücken. Gäste, Gemeinschaften und Gastgeber handeln gemeinsam, und das Ergebnis ist stärker als die Summe seiner Teile. Wir beweisen, dass nachhaltige Wirkung nicht in Isolation geschaffen wird, sondern durch gemeinsame Verantwortung und Zusammenarbeit."
            }
          ]
        }
      ],
      ctaTitle: "Machen Sie mit uns einen Unterschied",
      ctaText: "Jede Reise mit SasaNdioSasa trägt zu nachhaltiger Entwicklung und positiven Veränderungen in lokalen Gemeinschaften bei.",
      ctaButton: "Kontakt aufnehmen"
    }
  };

  const t = content[language as keyof typeof content];

  
  return (
    <div className="min-h-screen ">
      {/* Language Switcher */}
    

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/5 pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-heading mb-6 font-comfortaa">
            <span className="italic text-brand-primary">SasaNdioSasa</span>
            <br />
            {t.title}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-brand-primary font-semibold mb-4 font-poppins">
            {t.subtitle}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-brand-heading/80 max-w-4xl mx-auto leading-relaxed font-poppins">
            {t.intro}
          </p>
        </div>
      </div>

      {/* Ndoto Zetu section will now be rendered inside the Quality Education goal below */}

      {/* Goals Grid Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <a
                key={goal.id}
                href={`#${goal.id}`}
                className="group relative bg-white border-2 border-brand-border/30 hover:border-brand-primary p-6 md:p-8 transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-brand-primary/10 group-hover:bg-brand-primary flex items-center justify-center transition-all duration-300">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-brand-heading group-hover:text-brand-primary transition-colors duration-300 font-poppins mb-2">
                        {goal.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-brand-heading/70 leading-relaxed font-poppins">
                    {goal.tagline}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Goals Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {t.goals.map((goal, index) => {
          const Icon = goal.icon;
          const isEven = index % 2 === 0;
          const showNdoto = goal.id === "quality-education";
          return (
            <div
              key={goal.id}
              id={goal.id}
              className={`mb-20 md:mb-32 scroll-mt-24 ${
                isEven ? 'bg-gradient-to-br from-brand-primary/5 to-white' : 'bg-gradient-to-br from-white to-brand-secondary/5'
              } p-6 md:p-12 lg:p-16 border-l-8 border-brand-primary shadow-xl`}
            >
              {/* Goal Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-8 md:mb-12 pb-6 md:pb-8 border-b-4 border-brand-border/30">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-brand-primary flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-3 font-comfortaa">
                    {goal.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-brand-primary font-semibold italic font-poppins">
                    {goal.tagline}
                  </p>
                  {/* Ndoto Zetu Section for Quality Education */}
                  {showNdoto && t.ndotoSection && (
                    <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 py-8 md:py-10 px-4 sm:px-6 lg:px-8 border-y-4 border-brand-primary/20 my-6 rounded-xl">
                      <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-heading mb-4 font-comfortaa italic">
                          {t.ndotoSection.title}
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-brand-heading/80 leading-relaxed mb-6 font-poppins">
                          {t.ndotoSection.content}
                        </p>
                        <a
                          href="https://ndotozetu.or.tz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-secondary font-bold text-lg transition-colors duration-300 font-poppins group"
                        >
                          <span className="border-b-2 border-brand-primary group-hover:border-brand-secondary">
                            {t.ndotoSection.cta}
                          </span>
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Goal Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {goal.sections.map((section: GoalSection, sectionIndex: number) => (
                  <div
                  key={sectionIndex}
                  className="bg-white p-6 md:p-8 border-2 border-brand-border/20 hover:border-brand-primary transition-all duration-300 hover:shadow-lg group"
                  >
                  <div className="mb-4 pb-4 border-b-2 border-brand-primary/20 group-hover:border-brand-primary transition-colors duration-300">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-heading font-poppins">
                    {section.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-brand-heading/80 leading-relaxed font-poppins">
                    {section.content}
                  </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-comfortaa">
            {t.ctaTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 font-poppins">
            {t.ctaText}
          </p>
          <a
            href="https://tally.so/r/3xe74G"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-primary hover:bg-brand-menu-hover px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center break-words whitespace-pre-line leading-snug max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto"
          >
            {`Explore If This\nJourney Is for You`}
          </a>
        </div>
      </div>
    </div>
  );
}