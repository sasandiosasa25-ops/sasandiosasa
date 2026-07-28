'use client';

export type FocusAreaData = {
  id: string;
  title: {
    en: string;
    de: string;
  };
  summary: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  image: string;
};

export const focusAreas: FocusAreaData[] = [
  {
    id: 'responsible-travel',
    title: {
      en: 'Responsible Travel',
      de: 'Verantwortungsvolles Reisen',
    },
    summary: {
      en: 'Every journey is designed in partnership with Tanzanian businesses, guides, experts and communities to create lasting social and economic value.',
      de: 'Jede Reise wird in Partnerschaft mit tansanischen Unternehmen, Guides, Experten und Gemeinschaften geplant, um einen dauerhaften sozialen und wirtschaftlichen Nutzen zu schaffen.',
    },
    description: {
      en: "Every SasaNdioSasa journey is designed and delivered in partnership with Tanzanian businesses, guides, experts and communities. By prioritising local partnerships, creating authentic cultural exchange, supporting community initiatives through Ndoto Zetu and encouraging meaningful connections between travellers and the places they visit, every experience contributes to lasting social, cultural and economic value.\n\nWe continuously review our partnerships, operations and guest experiences to strengthen our positive impact on people, communities and the environment while contributing to the United Nations Sustainable Development Goals.",
      de: "Jede SasaNdioSasa-Reise wird in Partnerschaft mit tansanischen Unternehmen, Guides, Experten und Gemeinschaften geplant und durchgeführt. Indem wir lokale Partnerschaften priorisieren, einen authentischen kulturellen Austausch fördern, Gemeinschaftsinitiativen über Ndoto Zetu unterstützen und sinnvolle Verbindungen zwischen Reisenden und den Orten, die sie besuchen, stärken, trägt jede Erfahrung zu langfristigem sozialem, kulturellem und wirtschaftlichem Wert bei.\n\nWir überprüfen unsere Partnerschaften, Abläufe und Gästeerlebnisse regelmäßig, um unsere positive Wirkung auf Menschen, Gemeinschaften und die Umwelt zu stärken und gleichzeitig zu den Zielen für nachhaltige Entwicklung der Vereinten Nationen beizutragen.",
    },
    image: '/rawedge1.png',
  },
  {
    id: 'sustainability',
    title: {
      en: 'Sustainability',
      de: 'Nachhaltigkeit',
    },
    summary: {
      en: 'Sustainability is woven through the planning, delivery and daily choices that shape every experience.',
      de: 'Nachhaltigkeit durchzieht die Planung, Durchführung und alltäglichen Entscheidungen jeder Erfahrung.',
    },
    description: {
      en: "Sustainability is integrated into every stage of our experiences. We work with local suppliers whenever possible, collaborate with businesses that share our values, encourage the responsible use of natural resources and minimise unnecessary waste throughout our operations.\n\nBeyond our journeys, we invest in long-term community development, education and capacity building through Ndoto Zetu and our local partnerships. By regularly reviewing our practices, we aim to continuously improve our environmental, social and economic impact while contributing to a more sustainable future for Tanzania.",
      de: "Nachhaltigkeit ist in jeder Phase unserer Erfahrungen verankert. Wir arbeiten wann immer möglich mit lokalen Lieferanten zusammen, kooperieren mit Unternehmen, die unsere Werte teilen, fördern den verantwortungsvollen Umgang mit natürlichen Ressourcen und minimieren unnötigen Abfall in unserem Betrieb.\n\nÜber unsere Reisen hinaus investieren wir in langfristige Gemeinschaftsentwicklung, Bildung und Kapazitätsaufbau über Ndoto Zetu und unsere lokalen Partnerschaften. Durch regelmäßige Überprüfung unserer Praktiken wollen wir unsere Umwelt-, Sozial- und Wirtschaftswirkung kontinuierlich verbessern und zu einer nachhaltigeren Zukunft für Tansania beitragen.",
    },
    image: '/sustain2.png',
  },
  {
    id: 'animal-welfare',
    title: {
      en: 'Animal Welfare',
      de: 'Tierschutz',
    },
    summary: {
      en: 'Wildlife experiences are chosen carefully so animal welfare always comes before entertainment.',
      de: 'Wildtiererlebnisse werden sorgfältig ausgewählt, damit das Wohl der Tiere immer vor Unterhaltung steht.',
    },
    description: {
      en: "Wildlife is one of Tanzania's greatest treasures, and protecting it is a responsibility we take seriously. Every wildlife experience we offer is carefully selected to ensure that animal welfare always comes before entertainment.\n\nWe work exclusively with partners who respect conservation principles, national park regulations and ethical wildlife practices. Our guides encourage guests to observe wildlife responsibly, respect natural animal behaviour and appreciate Tanzania's biodiversity without causing disturbance or harm.",
      de: "Wildtiere sind einer der größten Schätze Tansanias, und ihr Schutz ist eine Verantwortung, die wir ernst nehmen. Jede Wildtiererfahrung, die wir anbieten, wird sorgfältig ausgewählt, damit das Wohl der Tiere immer vor Unterhaltung steht.\n\nWir arbeiten ausschließlich mit Partnern zusammen, die Naturschutzprinzipien, nationale Parkvorschriften und ethische Wildtierpraktiken respektieren. Unsere Guides ermutigen Gäste, Wildtiere verantwortungsvoll zu beobachten, natürliches Verhalten zu respektieren und die Biodiversität Tansanias zu würdigen, ohne Störung oder Schaden zu verursachen.",
    },
    image: '/welfare1.jpeg',
  },
  {
    id: 'child-protection',
    title: {
      en: 'Child Protection & Safeguarding',
      de: 'Kinderschutz und Schutzmaßnahmen',
    },
    summary: {
      en: 'We create safe, respectful and responsible experiences for children, communities and guests alike.',
      de: 'Wir schaffen sichere, respektvolle und verantwortungsvolle Erfahrungen für Kinder, Gemeinschaften und Gäste.',
    },
    description: {
      en: "At SasaNdioSasa, safeguarding means creating safe, respectful and responsible experiences for children, communities and our guests alike.\n\nThrough our long-term partnership with Ndoto Zetu and our work with local communities, we protect the rights, dignity and wellbeing of every child. We do not support orphanage tourism or activities that expose children for tourism purposes. Instead, we promote community-led initiatives, respect children's privacy and ensure that all interactions are appropriate, respectful and in the best interests of the child.\n\nOur guides, facilitators and partners are expected to treat every guest with professionalism, respect and integrity while fostering responsible interactions with local communities. We encourage our guests to respect local customs, ask permission before taking photographs and engage with people and places in a thoughtful and responsible manner.\n\nSafeguarding is a shared responsibility and forms an integral part of every SasaNdioSasa experience.",
      de: "Bei SasaNdioSasa bedeutet Schutz, sichere, respektvolle und verantwortungsvolle Erfahrungen für Kinder, Gemeinschaften und unsere Gäste gleichermaßen zu schaffen.\n\nDurch unsere langfristige Partnerschaft mit Ndoto Zetu und unsere Arbeit mit lokalen Gemeinschaften schützen wir die Rechte, Würde und das Wohlbefinden jedes Kindes. Wir unterstützen keinen Waisenhaus-Tourismus oder Aktivitäten, die Kinder zu Tourismuszwecken ausstellen. Stattdessen fördern wir gemeinschaftsgeleitete Initiativen, respektieren die Privatsphäre von Kindern und stellen sicher, dass alle Interaktionen angemessen, respektvoll und im besten Interesse des Kindes sind.\n\nUnsere Guides, Moderatoren und Partner werden erwartet, jeden Gast professionell, respektvoll und mit Integrität zu behandeln und verantwortungsvolle Interaktionen mit lokalen Gemeinschaften zu fördern. Wir ermutigen unsere Gäste, lokale Bräuche zu respektieren, vor dem Fotografieren um Erlaubnis zu bitten und sich auf überlegte Weise mit Menschen und Orten auseinanderzusetzen.\n\nSchutz ist eine gemeinsame Verantwortung und ein integraler Bestandteil jeder SasaNdioSasa-Erfahrung.",
    },
    image: '/children1.JPG',
  },
  {
    id: 'guest-safety',
    title: {
      en: 'Guest Safety & Well-being',
      de: 'Gästesicherheit und Wohlbefinden',
    },
    summary: {
      en: 'The safety and wellbeing of guests are at the heart of every journey we plan and deliver.',
      de: 'Die Sicherheit und das Wohlbefinden der Gäste stehen im Mittelpunkt jeder Reise, die wir planen und durchführen.',
    },
    description: {
      en: "The safety and wellbeing of our guests are at the heart of every SasaNdioSasa experience. We work with licensed and experienced partners, qualified guides and professional service providers who share our commitment to high operational and safety standards.\n\nBefore and throughout every journey, we provide clear information, appropriate briefings and ongoing support to help guests prepare for and enjoy their experience responsibly. Activities are planned according to local conditions, guest wellbeing and the nature of each programme, with risk awareness and emergency procedures integrated where required.\n\nFor specialised experiences, including mountain expeditions, guests receive detailed preparation guidance and are required to arrange appropriate travel and medical insurance where applicable before the journey begins. This helps ensure they are adequately prepared and protected throughout their experience.\n\nBy combining professional planning, experienced partners and genuine care, we create an environment where guests can feel safe, supported and fully present throughout their journey.",
      de: "Die Sicherheit und das Wohlbefinden unserer Gäste stehen im Mittelpunkt jeder SasaNdioSasa-Erfahrung. Wir arbeiten mit lizenzierten und erfahrenen Partnern, qualifizierten Guides und professionellen Dienstleistern zusammen, die unser Engagement für hohe operative und Sicherheitsstandards teilen.\n\nVor und während jeder Reise geben wir klare Informationen, passende Einweisungen und laufende Unterstützung, damit Gäste sich verantwortungsvoll vorbereiten und ihre Erfahrung genießen können. Aktivitäten werden entsprechend den lokalen Bedingungen, dem Wohlbefinden der Gäste und der Art jedes Programms geplant, wobei Risikoaufklärung und Notfallverfahren nach Bedarf integriert werden.\n\nFür spezielle Erlebnisse, einschließlich Bergexpeditionen, erhalten Gäste detaillierte Vorbereitungsanleitungen und müssen vor Reisebeginn geeignete Reise- und Krankenzusatzversicherungen arrangieren, sofern dies erforderlich ist. Dadurch werden sie angemessen vorbereitet und während ihrer Erfahrung geschützt.\n\nDurch professionelle Planung, erfahrene Partner und echte Fürsorge schaffen wir eine Umgebung, in der sich Gäste sicher, unterstützt und vollständig präsent fühlen können.",
    },
    image: '/rawedge2.png',
  },
];

export const focusAreaMap: Record<string, FocusAreaData> = focusAreas.reduce((map, area) => {
  map[area.id] = area;
  return map;
}, {} as Record<string, FocusAreaData>);
