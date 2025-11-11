'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Compass, Calendar, Plane, FileText, Backpack, AlertCircle, Map, ExternalLink, Check, X } from 'lucide-react';

const TravelCompassPage = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const airlineLogos: { [key: string]: string } = {
  'Lufthansa': '/luft.jpeg',
  'Discover Airlines': '/discover.jpeg',
  'KLM Royal Dutch Airlines': '/klm.jpeg',
  'Ethiopian Airlines': '/ethio.jpeg',
  'Turkish Airlines': '/turk.jpeg',
  'Qatar Airways': '/qatar.jpeg',
  'Emirates': '/emir.jpeg'
};

  const translations = {
    en: {
      title: 'Travel Compass',
      subtitle: 'Your Guide to Tanzania',
      whyChooseUs: {
        title: 'Why Choose Us',
        intro: [
          'Do you sometimes lose yourself in the rhythm of everyday life? Between work, family, and everything that keeps you busy?',
          'Do the days start to feel a little grey, your energy runs low, and you long for a new perspective or a meaningful challenge?',
          'Or have you been to Tanzania before and still feel that quiet pull? The warmth, the rhythm, the wisdom of Africa that stays with you long after you ve left?',
          'Then you are in exactly the right place.'
        ],
        content: 'At SasaNdioSasa, we create journeys that reconnect you, with yourself, with others, and with the world around you.',
        simone: 'Our founder and visionary Simone is since 2012 experiencing Tanzania. During this time, she built strong relationships with local partners, guides, and communities. Connections that allow SasaNdioSasa to design journeys that are sustainable, authentic, and safe. She also walked through many highs and lows and has learned, again and again, how Tanzania, through its culture, its nature, and its quiet strength, continues to guide and ground.',
        choose: "SasaNdioSasa offers safaris, retreats, and inner journeys that go beyond travel. Each experience is created with care. Sustainable, mindful, and deeply human. It's not about escaping life, but about meeting it more fully. In nature, in conversation, and in moments that quietly shift how you see yourself and the world.",
        tagline: 'SasaNdioSasa means Your Time is Now. And every journey we create begins right there.'
      },
      seasonalAdvice: {
        title: 'Seasonal Advice',
        subtitle: 'Finding Your Right Time',
        intro: 'There is no wrong season to visit Tanzania. Each time of year carries its own rhythm, light, and feeling. Some months invite movement, others reflection. Some bring clarity, others depth. Its less about choosing the "best" moment, and more about discovering what kind of journey you are ready for.',
        seasons: [
          {
            title: 'January – March: The Green Season',
            description: 'Warm, lush, and full of life. The landscapes are vibrant, the skies dramatic, and wildlife scenes come alive in color and contrast. Its a season for those who enjoy energy, renewal, and the calm of fewer travelers around.'
          },
          {
            title: 'April – May: The Quiet Months',
            description: 'The long rains arrive, and Tanzania slows down. Not every lodge or road is open, but those who come now experience a deep sense of authenticity. Its a beautiful time for reflection, writing, and being close to nature as it breathes and rests.'
          },
          {
            title: 'June – October: The Clear Season',
            description: 'Crisp air, open skies, and perfect visibility. Wildlife gathers around the remaining water sources, and this is the ideal time for classic safaris and Kilimanjaro climbs. Days are bright, nights cool, and the horizon feels endless.'
          },
          {
            title: 'November – December: The Reawakening',
            description: 'The short rains return, bringing freshness and new beginnings. The land feels renewed, colors deepen, and light turns golden again. Its a moment of transition. A season that gently invites you to pause, look back, and begin again.'
          }
        ]
      },
      airlineRecommendations: {
        title: 'Airline Recommendations',
        intro: 'You can fly to Tanzania with all major international airlines. Most routes from Europe connect through Frankfurt, Amsterdam, Doha, Addis Ababa, or Istanbul. With the following airlines, you are in good hands. Reliable service, solid connections, and comfortable routes.',
        airlines: [
          {
            name: 'Lufthansa',
            description: 'Reliable full-service airline with regular flights to East Africa via Frankfurt.'
          },
          {
            name: 'Discover Airlines',
            description: 'Lufthansa Group carrier offering direct flights from Frankfurt to Zanzibar.'
          },
          {
            name: 'KLM Royal Dutch Airlines',
            description: 'Frequent connections from Amsterdam to Kilimanjaro, Dar es Salaam, and Zanzibar.'
          },
          {
            name: 'Ethiopian Airlines',
            description: 'Excellent Africa network via Addis Ababa with smooth onward connections to Tanzania.'
          },
          {
            name: 'Turkish Airlines',
            description: 'Strong global network and good service with one stop in Istanbul.'
          },
          {
            name: 'Qatar Airways',
            description: 'High comfort and quality service via Doha to multiple Tanzanian destinations.'
          },
          {
            name: 'Emirates',
            description: 'Consistent service and reliable schedules via Dubai.'
          }
        ],
        note: 'For guests traveling from outside Europe, most routes connect through the same major hubs. If you would like personalized advice for your departure country, feel free to contact us directly. We are happy to help.'
      },
      travelPermit: {
        title: 'Travel Permit',
        subtitle: 'Here you apply for your permit for Tanzania',
        intro: 'Please apply for your visa or travel permit online via the official Tanzanian Immigration website:',
        websiteTitle: 'Tanzania Electronic Visa Application System',
        website: 'visa.immigration.go.tz',
        prepareTitle: 'Prepare Before You Apply',
        prepareText: 'Make sure you have the following ready before starting your online application:',
        guidelinesText: 'You are welcome to view the official details and guidelines:',
        processingTitle: 'Processing Time',
        processingText: 'Standard processing for the online eVisa usually takes 4–7 working days. In some cases, it can take up to 10 days.',
        arrivalText: 'You can also obtain a visa on arrival at Tanzanian airports; processing normally takes 15–60 minutes if all documents are in order. We do recommend to apply before hand and online.'
      },
      packingLists: {
        title: 'Packing Lists',
        safari: {
          title: 'Pack for Safari',
          subtitle: 'Travel light, comfortable, and with awareness. Tanzanias beauty is about simplicity. Pack for comfort, not performance.',
          essentialsTitle: 'Essentials',
          essentials: [
            'Clothing you feel good in: light, breathable fabrics work best. Light colors help you stay cool and dont show the dust as much. You can wear black if you like (its not what attracts mosquitos; time of day and standing water matter more).',
            'A warm layer or scarf for early mornings and cool evenings.',
            "Comfortable shoes or sandals. You wont need hiking boots unless you're planning a real trek.",
            'A hat or cap and sunglasses for sun protection.',
            'A small daypack for your personal items and sunscreen.'
          ],
          electricity: 'Electricity is available in all lodges, most powered by solar energy, and every safari vehicle has charging outlets for your phone or camera.',
          sun: 'The sun in Tanzania has its own power. Bring a strong sunscreen (SPF 50) and treat it like part of your daily ritual.',
          mindTitle: 'For Your Mind & Soul',
          mind: [
            "A book you've always wanted to read and the time to actually do it.",
            'Download a few playlists or podcasts before your trip, then give yourself space to unplug. You could even set a parental control on your own screen time. Just to see what happens when you let the world in instead of your phone.',
            'Let yourself slow down. Leave space in your bag. Not just for things you might buy, but for what you might discover.'
          ]
        },
        peaks: {
          title: 'The Peaks',
          intro: 'You do not need to bring everything. Most mountain gear can be rented locally, so you can travel lighter and let the climb begin with ease. Climbing Kilimanjaro or Mount Meru is not just about gear. It is about feeling prepared, layered, and light. You do not need to look like a professional climber, but a few right pieces will make the journey smoother and more comfortable.',
          clothingTitle: 'Clothing',
          clothing: [
            'Base layers that keep you dry and warm.',
            'Mid-layers such as fleece or a light down jacket.',
            'A waterproof and windproof jacket and pants for changing weather.',
            'Comfortable trekking pants and long-sleeve shirts for sun and wind.',
            'A warm hat, gloves (inner + outer pair), and a buff or scarf.',
            'Good hiking boots (well broken-in) and warm socks.',
            'Camp shoes or sandals for evenings in camp.'
          ],
          gearTitle: 'Gear',
          gear: [
            'A sleeping bag suitable for –10 °C / 14 °F or colder nights (included in our hikes).',
            'A 30–40 L daypack and a larger duffel bag (max. 15 kg, carried by porters).',
            'Trekking poles – helpful on the descent (available for rent).',
            'A headlamp with extra batteries (available for rent).',
            'Water system for at least 3 L (bottles or hydration pack).',
            'Sunglasses, sunscreen (SPF 50 – the sun feels closer up there), and lip balm.',
            'Personal medication and a small first-aid kit.',
            'Energy snacks or bars for summit day.',
            'Passport copy and a advised amount of cash for tips.'
          ],
          mindsetTitle: 'Mindset',
          mindset: 'Respect the mountain. Listen to your guide, pace yourself, and drink plenty of water. Remember: every step counts. It\'s not a race. The mountain teaches patience, rhythm, and breath. Once your journey is confirmed, you will receive a personalized packing list with tailored advice for your specific route, season, and comfort level.'
        }
      },
      faqs: {
        title: 'Dos and Don\'ts (FAQs)',
        dosTitle: 'Do\'s',
        dos: [
          'Do support local and reliable projects. If you want to give back, talk to us first, we will connect you with initiatives that truly make a difference.',
          'Do enjoy local transport safely. If you take a pikipiki (motorbike taxi), wear a helmet, choose a driver with two mirrors and a well-maintained bike.',
          "Do eat local food, including street food, but you are welcome to check in with us about safe and trusted places. Tanzania's flavors are part of your travel story.",
          "Do drink bottled or filtered water. Tap water is not safe to drink. In lodges, you'll often find recycled glass bottles, it's part of a conscious approach to reducing plastic.",
          'Do respect local culture and dress modestly (cover shoulders and knees, especially in rural or religious areas).',
          'Do use only licensed taxis or transfers, especially at night.',
          'Do listen to your guide or lodge staff. Safety rules in nature protect both you and the wildlife.',
          'Do carry a copy of your passport and visa separately, keeping the originals safe.',
          'Do stay aware of changing weather. Climate conditions can shift quickly; flexibility is part of travel here.',
          'Do pick up what you can. Leaving a place a little cleaner than you found it makes a quiet but real impact.'
        ],
        dontsTitle: 'Don\'ts',
        donts: [
          'Dont walk alone at night or in unfamiliar neighborhoods.',
          'Dont wear flashy jewelry or show large amounts of cash in public.',
          'Dont accept rides from unofficial taxis or strangers offering transport.',
          'Dont visit or donate to orphanages on your own. Support community-based projects instead. Its the ethical way to help.',
          'Dont feed or provoke wild animals, and never leave the vehicle during safaris unless your guide says its safe.',
          'Dont take or share photos of people, especially children, without permission.',
          'Dont ignore basic health precautions. Use mosquito nets, stay hydrated, and protect yourself from the sun.',
          'Dont underestimate the environment. Weather, altitude, and sun exposure can change quickly, especially when climbing Kilimanjaro.',
          'Dont accept or use plastic bags. They re banned in Tanzania. Bring reusable bags or ask us for sustainable options.'
        ]
      },
      roadMap: {
        title: 'Road Map',
        description: 'Explore our carefully curated paths and discover your journey.',
        linkText: 'View Full Road Map'
      }
    },
    de: {
      title: 'Reisekompass',
      subtitle: 'Dein Leitfaden für Tansania',
      whyChooseUs: {
        title: 'Warum uns wählen',
        intro: [
          'Verlierst du dich manchmal im Rhythmus des Alltags? Zwischen Arbeit, Familie und allem, was dich beschäftigt?',
          'Fühlen sich die Tage ein wenig grau an, läuft deine Energie zur Neige, und sehnst du dich nach einer neuen Perspektive oder einer sinnvollen Herausforderung?',
          'Oder warst du schon einmal in Tansania und spürst immer noch diese stille Anziehung? Die Wärme, den Rhythmus, die Weisheit Afrikas, die dir noch lange nach deiner Abreise bleibt?',
          'Dann bist du genau am richtigen Ort.'
        ],
        content: 'Bei SasaNdioSasa schaffen wir Reisen, die dich wieder verbinden, mit dir selbst, mit anderen und mit der Welt um dich herum.',
        simone: 'Unsere Gründerin und Visionärin Simone erlebt Tansania seit 2012. In dieser Zeit hat sie starke Beziehungen zu lokalen Partnern, Guides und Gemeinschaften aufgebaut. Verbindungen, die es SasaNdioSasa ermöglichen, Reisen zu gestalten, die nachhaltig, authentisch und sicher sind. Sie ist auch durch viele Höhen und Tiefen gegangen und hat immer wieder gelernt, wie Tansania durch seine Kultur, seine Natur und seine stille Kraft weiterhin leitet und erdet.',
        choose: 'SasaNdioSasa bietet Safaris, Retreats und innere Reisen, die über das Reisen hinausgehen. Jede Erfahrung wird mit Sorgfalt geschaffen. Nachhaltig, achtsam und zutiefst menschlich. Es geht nicht darum, dem Leben zu entkommen, sondern es voller zu begegnen. In der Natur, im Gespräch und in Momenten, die leise verändern, wie du dich selbst und die Welt siehst.',
        tagline: 'SasaNdioSasa bedeutet Deine Zeit ist jetzt. Und jede Reise, die wir schaffen, beginnt genau dort.'
      },
      seasonalAdvice: {
        title: 'Saisonale Beratung',
        subtitle: 'Die richtige Zeit finden',
        intro: 'Es gibt keine falsche Jahreszeit, um Tansania zu besuchen. Jede Zeit des Jahres trägt ihren eigenen Rhythmus, ihr eigenes Licht und ihr eigenes Gefühl. Einige Monate laden zur Bewegung ein, andere zur Reflexion. Einige bringen Klarheit, andere Tiefe. Es geht weniger darum, den "besten" Moment zu wählen, sondern darum, zu entdecken, für welche Art von Reise du bereit bist.',
        seasons: [
          {
            title: 'Januar – März: Die grüne Saison',
            description: 'Warm, üppig und voller Leben. Die Landschaften sind lebendig, der Himmel dramatisch, und Wildtierszenen werden in Farbe und Kontrast lebendig. Es ist eine Jahreszeit für diejenigen, die Energie, Erneuerung und die Ruhe weniger Reisender genießen.'
          },
          {
            title: 'April – Mai: Die stillen Monate',
            description: 'Die langen Regenfälle kommen, und Tansania verlangsamt sich. Nicht jede Lodge oder Straße ist geöffnet, aber diejenigen, die jetzt kommen, erleben ein tiefes Gefühl von Authentizität. Es ist eine schöne Zeit für Reflexion, Schreiben und nahe an der Natur zu sein, während sie atmet und ruht.'
          },
          {
            title: 'Juni – Oktober: Die klare Saison',
            description: 'Frische Luft, offener Himmel und perfekte Sicht. Wildtiere versammeln sich um die verbleibenden Wasserquellen, und dies ist die ideale Zeit für klassische Safaris und Kilimandscharo-Besteigungen. Die Tage sind hell, die Nächte kühl, und der Horizont fühlt sich endlos an.'
          },
          {
            title: 'November – Dezember: Das Erwachen',
            description: 'Die kurzen Regenfälle kehren zurück und bringen Frische und neue Anfänge. Das Land fühlt sich erneuert an, Farben vertiefen sich, und das Licht wird wieder golden. Es ist ein Moment des Übergangs. Eine Jahreszeit, die dich sanft einlädt, innezuhalten, zurückzublicken und neu zu beginnen.'
          }
        ]
      },
      airlineRecommendations: {
        title: 'Flugempfehlungen',
        intro: 'Sie können mit allen großen internationalen Fluggesellschaften nach Tansania fliegen. Die meisten Routen von Europa verbinden über Frankfurt, Amsterdam, Doha, Addis Abeba oder Istanbul. Mit den folgenden Fluggesellschaften sind Sie in guten Händen. Zuverlässiger Service, solide Verbindungen und komfortable Routen.',
        airlines: [
          {
            name: 'Lufthansa',
            description: 'Zuverlässige Full-Service-Fluggesellschaft mit regelmäßigen Flügen nach Ostafrika über Frankfurt.'
          },
          {
            name: 'Discover Airlines',
            description: 'Lufthansa Group Carrier mit Direktflügen von Frankfurt nach Sansibar.'
          },
          {
            name: 'KLM Royal Dutch Airlines',
            description: 'Häufige Verbindungen von Amsterdam nach Kilimandscharo, Dar es Salaam und Sansibar.'
          },
          {
            name: 'Ethiopian Airlines',
            description: 'Ausgezeichnetes Afrika-Netzwerk über Addis Abeba mit reibungslosen Anschlussverbindungen nach Tansania.'
          },
          {
            name: 'Turkish Airlines',
            description: 'Starkes globales Netzwerk und guter Service mit einem Stopp in Istanbul.'
          },
          {
            name: 'Qatar Airways',
            description: 'Hoher Komfort und Qualitätsservice über Doha zu mehreren tansanischen Zielen.'
          },
          {
            name: 'Emirates',
            description: 'Konsistenter Service und zuverlässige Zeitpläne über Dubai.'
          }
        ],
        note: 'Für Gäste, die von außerhalb Europas reisen, verbinden die meisten Routen über die gleichen großen Hubs. Wenn Sie personalisierte Beratung für Ihr Abflugland wünschen, kontaktieren Sie uns gerne direkt. Wir helfen gerne.'
      },
      travelPermit: {
        title: 'Reisegenehmigung',
        subtitle: 'Hier beantragen Sie Ihre Genehmigung für Tansania',
        intro: 'Bitte beantragen Sie Ihr Visum oder Ihre Reisegenehmigung online über die offizielle tansanische Einwanderungswebsite:',
        websiteTitle: 'Tansania Elektronisches Visum-Antragssystem',
        website: 'visa.immigration.go.tz',
        prepareTitle: 'Vorbereiten vor der Antragstellung',
        prepareText: 'Stellen Sie sicher, dass Sie folgendes bereit haben, bevor Sie Ihren Online-Antrag starten:',
        guidelinesText: 'Sie können gerne die offiziellen Details und Richtlinien einsehen:',
        processingTitle: 'Bearbeitungszeit',
        processingText: 'Die Standardbearbeitung für das Online-eVisum dauert normalerweise 4–7 Werktage. In einigen Fällen kann es bis zu 10 Tage dauern.',
        arrivalText: 'Sie können auch ein Visum bei der Ankunft an tansanischen Flughäfen erhalten; die Bearbeitung dauert normalerweise 15–60 Minuten, wenn alle Dokumente in Ordnung sind. Wir empfehlen jedoch, im Voraus und online zu beantragen.'
      },
      packingLists: {
        title: 'Packlisten',
        safari: {
          title: 'Für die Safari packen',
          subtitle: 'Reisen Sie leicht, bequem und mit Bewusstsein. Die Schönheit Tansanias liegt in der Einfachheit. Packen Sie für Komfort, nicht für Leistung.',
          essentialsTitle: 'Wesentliches',
          essentials: [
            'Kleidung, in der Sie sich wohlfühlen: leichte, atmungsaktive Stoffe funktionieren am besten. Helle Farben helfen Ihnen, kühl zu bleiben und zeigen den Staub nicht so sehr. Sie können Schwarz tragen, wenn Sie möchten (es ist nicht das, was Mücken anzieht; Tageszeit und stehendes Wasser sind wichtiger).',
            'Eine warme Schicht oder Schal für frühe Morgen und kühle Abende.',
            'Bequeme Schuhe oder Sandalen. Sie brauchen keine Wanderstiefel, es sei denn, Sie planen eine echte Wanderung.',
            'Ein Hut oder eine Kappe und eine Sonnenbrille zum Sonnenschutz.',
            'Ein kleiner Tagesrucksack für Ihre persönlichen Gegenstände und Sonnencreme.'
          ],
          electricity: 'Strom ist in allen Lodges verfügbar, die meisten werden mit Solarenergie betrieben, und jedes Safari-Fahrzeug hat Ladesteckdosen für Ihr Telefon oder Ihre Kamera.',
          sun: 'Die Sonne in Tansania hat ihre eigene Kraft. Bringen Sie eine starke Sonnencreme (LSF 50) mit und behandeln Sie sie als Teil Ihres täglichen Rituals.',
          mindTitle: 'Für Ihren Geist & Seele',
          mind: [
            'Ein Buch, das Sie schon immer lesen wollten, und die Zeit, es tatsächlich zu tun.',
            'Laden Sie ein paar Playlists oder Podcasts vor Ihrer Reise herunter, dann geben Sie sich selbst Raum zum Abschalten. Sie könnten sogar eine Kindersicherung für Ihre eigene Bildschirmzeit einrichten. Nur um zu sehen, was passiert, wenn Sie die Welt hereinlassen, anstatt Ihr Telefon.',
            'Lassen Sie sich verlangsamen. Lassen Sie Platz in Ihrer Tasche. Nicht nur für Dinge, die Sie kaufen könnten, sondern für das, was Sie entdecken könnten.'
          ]
        },
        peaks: {
          title: 'Die Gipfel',
          intro: 'Sie müssen nicht alles mitbringen. Die meiste Bergausrüstung kann vor Ort gemietet werden, sodass Sie leichter reisen und den Aufstieg mit Leichtigkeit beginnen können. Die Besteigung des Kilimandscharo oder Mount Meru geht nicht nur um Ausrüstung. Es geht darum, sich vorbereitet, geschichtet und leicht zu fühlen. Sie müssen nicht wie ein professioneller Kletterer aussehen, aber ein paar richtige Stücke machen die Reise reibungsloser und komfortabler.',
          clothingTitle: 'Kleidung',
          clothing: [
            'Basisschichten, die Sie trocken und warm halten.',
            'Mittelschichten wie Fleece oder eine leichte Daunenjacke.',
            'Eine wasserdichte und winddichte Jacke und Hose für wechselndes Wetter.',
            'Bequeme Trekkinghosen und langärmelige Hemden für Sonne und Wind.',
            'Eine warme Mütze, Handschuhe (inneres + äußeres Paar) und einen Buff oder Schal.',
            'Gute Wanderstiefel (gut eingelaufen) und warme Socken.',
            'Campschuhe oder Sandalen für Abende im Camp.'
          ],
          gearTitle: 'Ausrüstung',
          gear: [
            'Ein Schlafsack geeignet für –10 °C / 14 °F oder kältere Nächte (in unseren Wanderungen enthalten).',
            'Ein 30–40 L Tagesrucksack und eine größere Reisetasche (max. 15 kg, getragen von Trägern).',
            'Trekkingstöcke – hilfreich beim Abstieg (zur Miete verfügbar).',
            'Eine Stirnlampe mit Ersatzbatterien (zur Miete verfügbar).',
            'Wassersystem für mindestens 3 L (Flaschen oder Hydratationspack).',
            'Sonnenbrille, Sonnencreme (LSF 50 – die Sonne fühlt sich dort oben näher an) und Lippenbalsam.',
            'Persönliche Medikamente und ein kleines Erste-Hilfe-Set.',
            'Energie-Snacks oder Riegel für den Gipfeltag.',
            'Passkopie und empfohlener Betrag an Bargeld für Trinkgelder.'
          ],
          mindsetTitle: 'Denkweise',
          mindset: 'Respektieren Sie den Berg. Hören Sie auf Ihren Guide, passen Sie Ihr Tempo an und trinken Sie viel Wasser. Denken Sie daran: Jeder Schritt zählt. Es ist kein Rennen. Der Berg lehrt Geduld, Rhythmus und Atem. Sobald Ihre Reise bestätigt ist, erhalten Sie eine personalisierte Packliste mit maßgeschneiderter Beratung für Ihre spezifische Route, Saison und Komfortstufe.'
        }
      },
      faqs: {
        title: 'Dos und Don\'ts (FAQs)',
        dosTitle: 'Dos',
        dos: [
          'Unterstützen Sie lokale und zuverlässige Projekte. Wenn Sie etwas zurückgeben möchten, sprechen Sie zuerst mit uns, wir verbinden Sie mit Initiativen, die wirklich einen Unterschied machen.',
          'Genießen Sie lokale Verkehrsmittel sicher. Wenn Sie einen Pikipiki (Motorradtaxi) nehmen, tragen Sie einen Helm, wählen Sie einen Fahrer mit zwei Spiegeln und einem gut gewarteten Motorrad.',
          'Essen Sie lokale Speisen, einschließlich Straßenessen, aber Sie sind herzlich eingeladen, sich bei uns über sichere und vertrauenswürdige Orte zu erkundigen. Die Aromen Tansanias sind Teil Ihrer Reisegeschichte.',
          'Trinken Sie Flaschen- oder gefiltertes Wasser. Leitungswasser ist nicht sicher zu trinken. In Lodges finden Sie oft recycelte Glasflaschen, es ist Teil eines bewussten Ansatzes zur Reduzierung von Plastik.',
          'Respektieren Sie die lokale Kultur und kleiden Sie sich bescheiden (bedecken Sie Schultern und Knie, besonders in ländlichen oder religiösen Gebieten).',
          'Verwenden Sie nur lizenzierte Taxis oder Transfers, besonders nachts.',
          'Hören Sie auf Ihren Guide oder Lodge-Mitarbeiter. Sicherheitsregeln in der Natur schützen sowohl Sie als auch die Tierwelt.',
          'Tragen Sie eine Kopie Ihres Passes und Visums separat, bewahren Sie die Originale sicher auf.',
          'Bleiben Sie sich über wechselndes Wetter bewusst. Klimabedingungen können sich schnell ändern; Flexibilität ist Teil des Reisens hier.',
          'Sammeln Sie auf, was Sie können. Einen Ort ein wenig sauberer zu hinterlassen, als Sie ihn gefunden haben, hat eine stille, aber echte Wirkung.'
        ],
        dontsTitle: 'Don\'ts',
        donts: [
          'Gehen Sie nachts nicht alleine oder in unbekannten Nachbarschaften.',
          'Tragen Sie keinen auffälligen Schmuck oder zeigen Sie große Bargeldbeträge in der Öffentlichkeit.',
          'Akzeptieren Sie keine Fahrten von inoffiziellen Taxis oder Fremden, die Transport anbieten.',
          'Besuchen oder spenden Sie nicht auf eigene Faust an Waisenhäuser. Unterstützen Sie stattdessen gemeindebasierte Projekte. Das ist der ethische Weg zu helfen.',
          'Füttern oder provozieren Sie keine Wildtiere und verlassen Sie niemals das Fahrzeug während Safaris, es sei denn, Ihr Guide sagt, es ist sicher.',
          'Machen oder teilen Sie keine Fotos von Menschen, insbesondere Kindern, ohne Erlaubnis.',
          'Ignorieren Sie keine grundlegenden Gesundheitsvorsichtsmaßnahmen. Verwenden Sie Moskitonetze, bleiben Sie hydratisiert und schützen Sie sich vor der Sonne.',
          'Unterschätzen Sie nicht die Umgebung. Wetter, Höhe und Sonnenexposition können sich schnell ändern, besonders beim Klettern des Kilimandscharo.',
          'Akzeptieren oder verwenden Sie keine Plastiktüten. Sie sind in Tansania verboten. Bringen Sie wiederverwendbare Taschen mit oder fragen Sie uns nach nachhaltigen Optionen.'
        ]
      },
      roadMap: {
        title: 'Straßenkarte',
        description: 'Erkunden Sie unsere sorgfältig kuratierten Pfade und entdecken Sie Ihre Reise.',
        linkText: 'Vollständige Straßenkarte anzeigen'
      }
    }
  };

  const t = translations[language];

  const requirements = [
    { icon: <FileText className="w-5 h-5" />, text: language === 'en' ? 'Valid passport (minimum 6 months validity)' : 'Gültiger Reisepass (mindestens 6 Monate gültig)' },
    { icon: <FileText className="w-5 h-5" />, text: language === 'en' ? 'Recent passport-size photo' : 'Aktuelles Passfoto' },
    { icon: <FileText className="w-5 h-5" />, text: language === 'en' ? 'Travel itinerary or booking confirmation' : 'Reiseroute oder Buchungsbestätigung' },
    { icon: <FileText className="w-5 h-5" />, text: language === 'en' ? 'Yellow fever vaccination certificate (if applicable)' : 'Gelbfieberimpfbescheinigung (falls zutreffend)' },
    { icon: <FileText className="w-5 h-5" />, text: language === 'en' ? 'Payment method for visa fee (credit/debit card)' : 'Zahlungsmethode für Visagebühr (Kredit-/Debitkarte)' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80" 
          alt="Tanzania Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/80 to-amber-900/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center text-white transition-all duration-1000 px-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Compass className="w-20 h-20 mx-auto mb-6 animate-pulse drop-shadow-2xl" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">{t.title}</h1>
            <p className="text-xl md:text-2xl font-light drop-shadow-lg">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        
        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-amber-900rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 flex items-center gap-4 mb-8">
              <Compass className="w-12 h-12 text-amber-900" />
              {t.whyChooseUs.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {t.whyChooseUs.intro.map((paragraph, index) => (
                <p key={index} className="italic text-gray-600">{paragraph}</p>
              ))}
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80" 
                alt="African Landscape" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-lg">
            <p className="font-medium text-xl text-emerald-800">{t.whyChooseUs.content}</p>
            <p>{t.whyChooseUs.simone}</p>
            <p>{t.whyChooseUs.choose}</p>
            <p className="text-2xl font-semibold text-amber-800 pt-6 border-t-2 border-amber-200">{t.whyChooseUs.tagline}</p>
          </div>
        </section>

        {/* Seasonal Advice Section */}
        <section id="seasonal-advice" className="space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-900 to-amber-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 flex items-center gap-4 mb-4">
              <Calendar className="w-12 h-12 text-amber-600" />
              {t.seasonalAdvice.title}
            </h2>
            <p className="text-2xl text-gray-600 italic font-light">{t.seasonalAdvice.subtitle}</p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img 
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80" 
              alt="Tanzania Wildlife" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white text-xl p-8 leading-relaxed">{t.seasonalAdvice.intro}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.seasonalAdvice.seasons.map((season, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-500 hover:border-amber-500">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4 group-hover:text-amber-700 transition-colors">{season.title}</h3>
                <p className="text-gray-700 leading-relaxed">{season.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Airline Recommendations Section */}
      {/* Airline Recommendations Section */}
{/* Airline Recommendations Section */}
{/* Airline Recommendations Section */}
<section id="airline-recommendations" className="space-y-8">
  <div className="relative">
    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-amber-900 rounded-full"></div>
    <h2 className="text-4xl md:text-5xl font-bold text-amber-900 flex items-center gap-4">
      <Plane className="w-12 h-12 text-amber-600" />
      {t.airlineRecommendations.title}
    </h2>
  </div>

  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
    <img 
      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" 
      alt="Airplane" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-900/70 flex items-center justify-center">
      <p className="text-white text-xl px-8 text-center leading-relaxed max-w-4xl">{t.airlineRecommendations.intro}</p>
    </div>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {t.airlineRecommendations.airlines.map((airline, index) => (
      <div 
        key={index} 
        className="group relative bg-gradient-to-br from-amber-50/60 to-stone-100/80 p-6 rounded-2xl border border-amber-200/60 hover:border-amber-500/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
      >
        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200/30 to-transparent rounded-bl-full group-hover:from-amber-300/40 transition-all"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-stone-50 to-amber-50/50 rounded-xl shadow-sm group-hover:shadow-md transition-shadow p-2 border border-amber-100/50">
              <img 
                src={airlineLogos[airline.name]} 
                alt={`${airline.name} logo`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback && fallback instanceof HTMLElement) fallback.style.display = 'block';
                }}
              />
              <Plane className="w-8 h-8 text-amber-600 hidden" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-900 transition-colors leading-tight">
                {airline.name}
              </h3>
            </div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-amber-300/60 via-amber-400/50 to-transparent mb-4"></div>
          
          <p className="text-gray-700 leading-relaxed text-sm">
            {airline.description}
          </p>
        </div>
      </div>
    ))}
  </div>

  <div className="relative bg-gradient-to-r from-emerald-100/70 to-amber-50/70 p-8 rounded-2xl border-l-4 border-emerald-600 overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-emerald-200/15 to-transparent rounded-bl-full"></div>
    
    <p className="relative z-10 text-gray-800 italic text-lg leading-relaxed">
      {t.airlineRecommendations.note}
    </p>
  </div>
</section>

        {/* Travel Permit Section */}
        <section id="travel-permit" className="space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 flex items-center gap-4 mb-4">
              <FileText className="w-12 h-12 text-red-600" />
              {t.travelPermit.title}
            </h2>
            <p className="text-2xl text-gray-600 italic font-light">{t.travelPermit.subtitle}</p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=1600&q=80" 
              alt="Passport and Travel" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-orange-900 flex items-center justify-center">
              <p className="text-white text-xl px-8 text-center leading-relaxed max-w-3xl">{t.travelPermit.intro}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-10 rounded-2xl shadow-2xl text-white">
            <h3 className="text-lg font-bold mb-4">{t.travelPermit.websiteTitle}</h3>
            <a 
              href={`https://${t.travelPermit.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold flex items-center gap-4 hover:text-amber-200 transition-colors group"
            >
              {t.travelPermit.website}
              <ExternalLink className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <h3 className="text-3xl font-bold text-amber-800 flex items-center gap-3">
              <Check className="w-8 h-8" />
              {t.travelPermit.prepareTitle}
            </h3>
            <p className="text-gray-700 text-lg">{t.travelPermit.prepareText}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-4 bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-500 hover:shadow-md transition-shadow">
                  <div className="text-amber-600 mt-1">{req.icon}</div>
                  <span className="text-amber-700">{req.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 p-8 rounded-2xl border-l-4 border-amber-500 space-y-4">
            <p className="text-gray-700 text-lg">{t.travelPermit.guidelinesText}</p>
            <a 
              href="https://immigration.go.tz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-semibold text-sm hover:text-emerald-900 flex items-center gap-3 group"
            >
              immigration.go.tz
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">{t.travelPermit.processingTitle}</h3>
              <p className="text-amber-700 leading-relaxed">{t.travelPermit.processingText}</p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Arrival Option</h3>
              <p className="text-amber-700 leading-relaxed">{t.travelPermit.arrivalText}</p>
            </div>
          </div>
        </section>

        {/* Packing Lists Section */}
        <section id="packing-lists" className="space-y-12">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 flex items-center gap-4">
              <Backpack className="w-12 h-12 text-amber-600" />
              {t.packingLists.title}
            </h2>
          </div>

          {/* Safari Packing */}
          <div className="space-y-8">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/bag.png" 
                alt="Safari Vehicle" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-4xl font-bold text-white mb-3">{t.packingLists.safari.title}</h3>
                <p className="text-xl text-white/90 italic">{t.packingLists.safari.subtitle}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
              <h4 className="text-3xl font-semibold text-gray-800 border-b-4 border-emerald-500 pb-3 inline-block">{t.packingLists.safari.essentialsTitle}</h4>
              <div className="grid gap-4">
                {t.packingLists.safari.essentials.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-emerald-50 p-5 rounded-xl hover:bg-emerald-100 transition-colors">
                    <Check className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-l-4 border-amber-500">
                <p className="text-gray-700 leading-relaxed">{t.packingLists.safari.electricity}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-l-4 border-orange-500">
                <p className="text-gray-700 leading-relaxed font-medium">{t.packingLists.safari.sun}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <h4 className="text-3xl font-semibold text-amber-800 mb-6">{t.packingLists.safari.mindTitle}</h4>
              <div className="space-y-4">
                {t.packingLists.safari.mind.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-xl">
                    <Check className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Peaks Packing */}
          <div className="space-y-8 border-t-4 border-gray-200 pt-12">
           <div className="relative h-[700px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/kili.jpeg" 
                alt="Mount Kilimanjaro" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-5xl font-bold text-white mb-4">{t.packingLists.peaks.title}</h3>
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl">{t.packingLists.peaks.intro}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
                <h4 className="text-3xl font-semibold text-amber-800 border-b-4 border-amber-500 pb-3 inline-block">{t.packingLists.peaks.clothingTitle}</h4>
                <div className="space-y-3">
                  {t.packingLists.peaks.clothing.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-blue-50 p-4 rounded-xl">
                      <Check className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-amber-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
                <h4 className="text-3xl font-semibold text-amber-800 border-b-4 pb-3 inline-block">{t.packingLists.peaks.gearTitle}</h4>
                <div className="space-y-3">
                  {t.packingLists.peaks.gear.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-indigo-50 p-4 rounded-xl">
                      <Check className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 via-amber-700 to-amber-900 p-10 rounded-2xl text-white shadow-2xl">
              <h4 className="text-3xl font-semibold mb-5 flex items-center gap-3">
                <Compass className="w-10 h-10" />
                {t.packingLists.peaks.mindsetTitle}
              </h4>
              <p className="text-xl leading-relaxed">{t.packingLists.peaks.mindset}</p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-red-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 flex items-center gap-4">
              <AlertCircle className="w-12 h-12 text-yellow-600" />
              {t.faqs.title}
            </h2>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img 
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1600&q=80" 
              alt="Travel Safety" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/80 to-red-900/80"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Do's */}
            <div className="space-y-6">
              <div className="bg-amber-600 p-6 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                  <Check className="w-10 h-10" />
                  {t.faqs.dosTitle}
                </h3>
              </div>
              <div className="space-y-4">
                {t.faqs.dos.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                    <Check className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Don'ts */}
            <div className="space-y-6">
              <div className="bg-red-600 p-6 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                  <X className="w-10 h-10" />
                  {t.faqs.dontsTitle}
                </h3>
              </div>
              <div className="space-y-4">
                {t.faqs.donts.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-red-50 p-6 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                    <X className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TravelCompassPage;