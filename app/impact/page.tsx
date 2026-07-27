'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, BookOpen, Briefcase, Leaf, Trees, Users, ExternalLink } from 'lucide-react';

type GoalSection = {
  title: string;
  content: string;
};

type ImpactFocusArea = {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
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
      focusAreas: [
        {
          id: "responsible-travel",
          title: "Responsible Travel",
          summary: "Every journey is designed in partnership with Tanzanian businesses, guides, experts and communities to create lasting social and economic value.",
          description: "Every SasaNdioSasa journey is designed and delivered in partnership with Tanzanian businesses, guides, experts and communities. By prioritising local partnerships, creating authentic cultural exchange, supporting community initiatives through Ndoto Zetu and encouraging meaningful connections between travellers and the places they visit, every experience contributes to lasting social, cultural and economic value.\n\nWe continuously review our partnerships, operations and guest experiences to strengthen our positive impact on people, communities and the environment while contributing to the United Nations Sustainable Development Goals.",
          image: "/safety1.png"
        },
        {
          id: "sustainability",
          title: "Sustainability",
          summary: "Sustainability is woven through the planning, delivery and daily choices that shape every experience.",
          description: "Sustainability is integrated into every stage of our experiences. We work with local suppliers whenever possible, collaborate with businesses that share our values, encourage the responsible use of natural resources and minimise unnecessary waste throughout our operations.\n\nBeyond our journeys, we invest in long-term community development, education and capacity building through Ndoto Zetu and our local partnerships. By regularly reviewing our practices, we aim to continuously improve our environmental, social and economic impact while contributing to a more sustainable future for Tanzania.",
          image: "/sustain2.png"
        },
        {
          id: "animal-welfare",
          title: "Animal Welfare",
          summary: "Wildlife experiences are chosen carefully so animal welfare always comes before entertainment.",
          description: "Wildlife is one of Tanzania's greatest treasures, and protecting it is a responsibility we take seriously. Every wildlife experience we offer is carefully selected to ensure that animal welfare always comes before entertainment.\n\nWe work exclusively with partners who respect conservation principles, national park regulations and ethical wildlife practices. Our guides encourage guests to observe wildlife responsibly, respect natural animal behaviour and appreciate Tanzania's biodiversity without causing disturbance or harm.",
          image: "/welfare1.jpeg"
        },
        {
          id: "child-protection",
          title: "Child Protection & Safeguarding",
          summary: "We create safe, respectful and responsible experiences for children, communities and guests alike.",
          description: "At SasaNdioSasa, safeguarding means creating safe, respectful and responsible experiences for children, communities and our guests alike.\n\nThrough our long-term partnership with Ndoto Zetu and our work with local communities, we protect the rights, dignity and wellbeing of every child. We do not support orphanage tourism or activities that expose children for tourism purposes. Instead, we promote community-led initiatives, respect children's privacy and ensure that all interactions are appropriate, respectful and in the best interests of the child.\n\nOur guides, facilitators and partners are expected to treat every guest with professionalism, respect and integrity while fostering responsible interactions with local communities. We encourage our guests to respect local customs, ask permission before taking photographs and engage with people and places in a thoughtful and responsible manner.\n\nSafeguarding is a shared responsibility and forms an integral part of every SasaNdioSasa experience.",
          image: "/children1.JPG"
        },
        {
          id: "guest-safety",
          title: "Guest Safety & Well-being",
          summary: "The safety and wellbeing of guests are at the heart of every journey we plan and deliver.",
          description: "The safety and wellbeing of our guests are at the heart of every SasaNdioSasa experience. We work with licensed and experienced partners, qualified guides and professional service providers who share our commitment to high operational and safety standards.\n\nBefore and throughout every journey, we provide clear information, appropriate briefings and ongoing support to help guests prepare for and enjoy their experience responsibly. Activities are planned according to local conditions, guest wellbeing and the nature of each programme, with risk awareness and emergency procedures integrated where required.\n\nFor specialised experiences, including mountain expeditions, guests receive detailed preparation guidance and are required to arrange appropriate travel and medical insurance where applicable before the journey begins. This helps ensure they are adequately prepared and protected throughout their experience.\n\nBy combining professional planning, experienced partners and genuine care, we create an environment where guests can feel safe, supported and fully present throughout their journey.",
          image: "/safety1.png"
        }
      ],
      ctaTitle: "Every Journey Creates Opportunity",
      ctaText: "Every SasaNdioSasa experience contributes directly to Ndoto Zetu, our long-term community initiative in Tanzania. By joining this journey, you support educational opportunities, strengthen local families and sustain projects that continue long after your return.",
      ctaButton: "Discover the impact behind your journey."
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
      focusAreas: [
        {
          id: "responsible-travel",
          title: "Verantwortungsvolles Reisen",
          summary: "Jede Reise wird in Partnerschaft mit tansanischen Unternehmen, Guides, Experten und Gemeinschaften geplant, um einen dauerhaften sozialen und wirtschaftlichen Nutzen zu schaffen.",
          description: "Jede SasaNdioSasa-Reise wird in Partnerschaft mit tansanischen Unternehmen, Guides, Experten und Gemeinschaften geplant und durchgeführt. Indem wir lokale Partnerschaften priorisieren, einen authentischen kulturellen Austausch fördern, Gemeinschaftsinitiativen über Ndoto Zetu unterstützen und sinnvolle Verbindungen zwischen Reisenden und den Orten, die sie besuchen, stärken, trägt jede Erfahrung zu langfristigem sozialem, kulturellem und wirtschaftlichem Wert bei.\n\nWir überprüfen unsere Partnerschaften, Abläufe und Gästeerlebnisse regelmäßig, um unsere positive Wirkung auf Menschen, Gemeinschaften und die Umwelt zu stärken und gleichzeitig zu den Zielen für nachhaltige Entwicklung der Vereinten Nationen beizutragen.",
          image: "/safety1.png"
        },
        {
          id: "sustainability",
          title: "Nachhaltigkeit",
          summary: "Nachhaltigkeit durchzieht die Planung, Durchführung und alltäglichen Entscheidungen jeder Erfahrung.",
          description: "Nachhaltigkeit ist in jeder Phase unserer Erfahrungen verankert. Wir arbeiten wann immer möglich mit lokalen Lieferanten zusammen, kooperieren mit Unternehmen, die unsere Werte teilen, fördern den verantwortungsvollen Umgang mit natürlichen Ressourcen und minimieren unnötigen Abfall in unserem Betrieb.\n\nÜber unsere Reisen hinaus investieren wir in langfristige Gemeinschaftsentwicklung, Bildung und Kapazitätsaufbau über Ndoto Zetu und unsere lokalen Partnerschaften. Durch regelmäßige Überprüfung unserer Praktiken wollen wir unsere Umwelt-, Sozial- und Wirtschaftswirkung kontinuierlich verbessern und zu einer nachhaltigeren Zukunft für Tansania beitragen.",
          image: "/sustain2.png"
        },
        {
          id: "animal-welfare",
          title: "Tierschutz",
          summary: "Wildtiererlebnisse werden sorgfältig ausgewählt, damit das Wohl der Tiere immer vor Unterhaltung steht.",
          description: "Wildtiere sind einer der größten Schätze Tansanias, und ihr Schutz ist eine Verantwortung, die wir ernst nehmen. Jede Wildtiererfahrung, die wir anbieten, wird sorgfältig ausgewählt, damit das Wohl der Tiere immer vor Unterhaltung steht.\n\nWir arbeiten ausschließlich mit Partnern zusammen, die Naturschutzprinzipien, nationale Parkvorschriften und ethische Wildtierpraktiken respektieren. Unsere Guides ermutigen Gäste, Wildtiere verantwortungsvoll zu beobachten, natürliches Verhalten zu respektieren und die Biodiversität Tansanias zu würdigen, ohne Störung oder Schaden zu verursachen.",
          image: "/welfare1.jpeg"
        },
        {
          id: "child-protection",
          title: "Kinderschutz und Schutzmaßnahmen",
          summary: "Wir schaffen sichere, respektvolle und verantwortungsvolle Erfahrungen für Kinder, Gemeinschaften und Gäste.",
          description: "Bei SasaNdioSasa bedeutet Schutz, sichere, respektvolle und verantwortungsvolle Erfahrungen für Kinder, Gemeinschaften und unsere Gäste gleichermaßen zu schaffen.\n\nDurch unsere langfristige Partnerschaft mit Ndoto Zetu und unsere Arbeit mit lokalen Gemeinschaften schützen wir die Rechte, Würde und das Wohlbefinden jedes Kindes. Wir unterstützen keinen Waisenhaus-Tourismus oder Aktivitäten, die Kinder zu Tourismuszwecken ausstellen. Stattdessen fördern wir gemeinschaftsgeleitete Initiativen, respektieren die Privatsphäre von Kindern und stellen sicher, dass alle Interaktionen angemessen, respektvoll und im besten Interesse des Kindes sind.\n\nUnsere Guides, Moderatoren und Partner werden erwartet, jeden Gast professionell, respektvoll und mit Integrität zu behandeln und verantwortungsvolle Interaktionen mit lokalen Gemeinschaften zu fördern. Wir ermutigen unsere Gäste, lokale Bräuche zu respektieren, vor dem Fotografieren um Erlaubnis zu bitten und sich auf überlegte Weise mit Menschen und Orten auseinanderzusetzen.\n\nSchutz ist eine gemeinsame Verantwortung und ein integraler Bestandteil jeder SasaNdioSasa-Erfahrung.",
          image: "/children1.JPG"
        },
        {
          id: "guest-safety",
          title: "Gästesicherheit und Wohlbefinden",
          summary: "Die Sicherheit und das Wohlbefinden der Gäste stehen im Mittelpunkt jeder von uns geplanten Reise.",
          description: "Die Sicherheit und das Wohlbefinden unserer Gäste stehen im Mittelpunkt jeder SasaNdioSasa-Erfahrung. Wir arbeiten mit lizenzierten und erfahrenen Partnern, qualifizierten Guides und professionellen Dienstleistern zusammen, die unser Engagement für hohe operative und Sicherheitsstandards teilen.\n\nVor und während jeder Reise geben wir klare Informationen, passende Einweisungen und laufende Unterstützung, damit Gäste sich verantwortungsvoll vorbereiten und ihre Erfahrung genießen können. Aktivitäten werden entsprechend den lokalen Bedingungen, dem Wohlbefinden der Gäste und der Art jedes Programms geplant, wobei Risikoaufklärung und Notfallverfahren nach Bedarf integriert werden.\n\nFür spezielle Erlebnisse, einschließlich Bergexpeditionen, erhalten Gäste detaillierte Vorbereitungsanleitungen und müssen vor Reisebeginn geeignete Reise- und Krankenzusatzversicherungen arrangieren, sofern dies erforderlich ist. Dadurch werden sie angemessen vorbereitet und während ihrer Erfahrung geschützt.\n\nDurch professionelle Planung, erfahrene Partner und echte Fürsorge schaffen wir eine Umgebung, in der sich Gäste sicher, unterstützt und vollständig präsent fühlen können.",
          image: "/safety1.png"
        }
      ],
      ctaTitle: "Jede Reise schafft Möglichkeiten",
      ctaText: "Jede SasaNdioSasa-Erfahrung trägt direkt zu Ndoto Zetu bei, unserer langfristigen Gemeinschaftsinitiative in Tansania. Mit deiner Teilnahme unterstützt du Bildungsangebote, stärkst lokale Familien und förderst Projekte, die auch nach deiner Rückkehr weiterleben.",
      ctaButton: "Erfahre die Wirkung hinter deiner Reise."
    }
  };

  const t = content[language as keyof typeof content];

  
  return (
    <div className="min-h-screen ">
      {/* Language Switcher */}
    

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/5 pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background image for hero section */}
        <Image
          src="/impact11.jpeg"
          alt="Impact background"
          fill
          className="absolute inset-0 object-cover object-center z-0 opacity-40"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-heading mb-6 font-comfortaa drop-shadow-lg">
            <span className="italic text-brand-primary">SasaNdioSasa</span>
            <br />
            {t.title}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-brand-primary font-semibold mb-4 font-poppins drop-shadow">
            {t.subtitle}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-brand-heading/80 max-w-4xl mx-auto leading-relaxed font-poppins bg-white/70 rounded-xl px-2 py-2 inline-block">
            {t.intro}
          </p>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .impact-hero-bg {
              object-position: center top;
              height: 100%;
            }
          }
          @media (min-width: 641px) {
            .impact-hero-bg {
              object-position: center;
              height: 100%;
            }
          }
        `}</style>
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

      {/* Focus Areas Submenu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white border border-brand-border/30 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-primary font-semibold font-poppins">Focus areas</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-heading font-comfortaa">Additional impact themes</h2>
              <p className="text-base text-brand-heading/70 mt-2 max-w-2xl font-poppins">Each area below links to its own dedicated page for a deeper look at our responsible travel practices.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {t.focusAreas.map((area: ImpactFocusArea) => (
              <a
                key={area.id}
                href={`/impact/${area.id}#${area.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border/30 bg-brand-primary/5 hover:border-brand-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    width={600}
                    height={360}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-brand-heading font-poppins mb-3">{area.title}</h3>
                  <p className="text-sm sm:text-base text-brand-heading/70 leading-relaxed font-poppins flex-1">{area.summary}</p>
                  <span className="mt-4 inline-flex items-center text-brand-primary font-semibold">
                    Read more
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Goals Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {t.goals.map((goal, index) => {
          const Icon = goal.icon;
          const isEven = index % 2 === 0;
          const showNdoto = goal.id === "quality-education";
          const isGoodHealth = goal.id === "good-health";
          const isQualityEducation = goal.id === "quality-education";
          const isDecentWork = goal.id === "decent-work";
          const isLifeOnLand = goal.id === "life-on-land";
          const isPartnerships = goal.id === "partnerships";

          const goalBackgroundImage = isGoodHealth
            ? "/heath.jpg"
            : isQualityEducation
              ? "/education.jpg"
              : isDecentWork
                ? "/partnership.jpg"
                : isLifeOnLand
                  ? "/landlife.jpg"
                  : isPartnerships
                    ? "/partnershipgoal.jpg"
                    : null;

          const hasGoalBackground = goalBackgroundImage !== null;
          return (
            <div
              key={goal.id}
              id={goal.id}
              className={`mb-20 md:mb-32 scroll-mt-24 ${
                isEven ? 'bg-gradient-to-br from-brand-primary/5 to-white' : 'bg-gradient-to-br from-white to-brand-secondary/5'
              } p-6 md:p-12 lg:p-16 border-l-8 border-brand-primary shadow-xl relative overflow-hidden`}
            >
              {hasGoalBackground && (
                <>
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: `url('${goalBackgroundImage}')` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-white/70 md:bg-white/75" aria-hidden="true" />
                </>
              )}

              <div className="relative z-10">
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
                {goal.sections
                  .filter(
                    (section): section is GoalSection =>
                      typeof section.title === 'string' && typeof section.content === 'string'
                  )
                  .map((section, sectionIndex) => (
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
            href="https://ndotozetu.or.tz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-primary hover:bg-brand-menu-hover px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center break-words whitespace-pre-line leading-snug max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto"
          >
            {t.ctaButton}
          </a>
        </div>
      </div>
    </div>
  );
}