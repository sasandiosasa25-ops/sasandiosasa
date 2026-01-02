import { Backpack, Check, Compass, Shirt, Sun, Umbrella, Glasses, Shoe, Book, Headphones, Bag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PackingLists = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
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
    de: {
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
    }
  };

  const t = translations[language];

  return (
    <section id="packing-lists" className="space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-heading rounded-full opacity-80"></div>
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-heading flex items-center gap-4">
            <Backpack className="w-10 h-10 md:w-12 md:h-12 text-brand-primary flex-shrink-0" />
            {t.title}
          </h2>
        </div>
      </div>

      {/* Safari Packing Section */}
      <div className="space-y-8">
        {/* Safari Hero Image with Split Layout */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="flex flex-col lg:flex-row lg:min-h-[600px]">
            <div className="relative h-[450px] lg:h-auto lg:w-1/2 overflow-hidden">
              <img 
                src="/bag.png" 
                alt="Safari Vehicle" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-heading/70 via-brand-heading/40 to-transparent"></div>
            </div>
            
            <div className="relative lg:w-1/2 flex items-center justify-center p-8 sm:p-10 lg:p-12 xl:p-16 bg-gradient-to-br from-brand-heading via-brand-secondary to-brand-heading overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t.safari.title}</h3>
                <div className="w-16 h-1 bg-brand-primary mb-6 rounded-full"></div>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 italic leading-relaxed">{t.safari.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Essentials List */}
        <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg space-y-6 border-l-4 border-brand-primary">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-brand-primary to-transparent"></div>
            <h4 className="text-3xl lg:text-4xl font-bold text-brand-heading">{t.safari.essentialsTitle}</h4>
          </div>
          <div className="grid gap-4">
            {t.safari.essentials.map((item, index) => {
              // Assign a Lucide icon based on the item index (order matches EN/DE arrays)
              let IconComponent = Check;
              if (index === 0) IconComponent = Shirt; // Clothing
              if (index === 1) IconComponent = Umbrella; // Warm layer/scarf
              if (index === 2) IconComponent = Shoe; // Shoes/sandals
              if (index === 3) IconComponent = Sun; // Hat/cap/sunglasses
              if (index === 4) IconComponent = Bag; // Daypack
              return (
                <div key={index} className="group flex items-start gap-3 bg-brand-bg-light p-3 sm:p-4 lg:p-6 rounded-2xl hover:shadow-md transition-all duration-300 border border-brand-border">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">{item}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="group relative bg-gradient-to-br from-brand-bg-light to-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-brand-primary overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg relative z-10">{t.safari.electricity}</p>
          </div>
          <div className="group relative bg-gradient-to-br from-brand-bg-light to-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-brand-secondary overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-secondary/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
            <p className="text-gray-700 leading-relaxed font-medium text-base lg:text-lg relative z-10">{t.safari.sun}</p>
          </div>
        </div>

        {/* Mind & Soul Section */}
        <div className="relative bg-gradient-to-br from-brand-heading to-brand-secondary p-8 lg:p-12 rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="w-10 h-10 text-brand-primary" />
              <h4 className="text-3xl lg:text-4xl font-bold text-white">{t.safari.mindTitle}</h4>
            </div>
            <div className="space-y-4">
              {t.safari.mind.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 lg:p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Check className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                  <span className="text-white/95 leading-relaxed text-base lg:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Peaks Packing Section */}
      <div className="space-y-8 border-t-4 border-brand-border pt-12 lg:pt-16">
        {/* Peaks Hero Image with Split Layout */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="flex flex-col lg:flex-row lg:min-h-[700px]">
            <div className="relative h-[500px] lg:h-auto lg:w-3/5 overflow-hidden">
              <img 
                src="/kili.jpeg" 
                alt="Mount Kilimanjaro" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-heading/80 via-brand-heading/50 to-transparent"></div>
            </div>
            
            <div className="relative lg:w-2/5 flex items-center justify-center p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-brand-heading via-brand-secondary to-brand-heading overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{t.peaks.title}</h3>
                <div className="w-20 h-1 bg-brand-primary mb-6 rounded-full"></div>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">{t.peaks.intro}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clothing & Gear Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Clothing */}
          <div className="group relative bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-brand-primary overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-brand-primary to-transparent"></div>
                <h4 className="text-3xl font-bold text-brand-heading">{t.peaks.clothingTitle}</h4>
              </div>
              <div className="space-y-3">
                {t.peaks.clothing.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-brand-bg-light p-4 rounded-xl border border-brand-border hover:shadow-md transition-all duration-300">
                    <Check className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm lg:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gear */}
          <div className="group relative bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-brand-secondary overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-secondary/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-brand-secondary to-transparent"></div>
                <h4 className="text-3xl font-bold text-brand-heading">{t.peaks.gearTitle}</h4>
              </div>
              <div className="space-y-3">
                {t.peaks.gear.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-brand-bg-light p-4 rounded-xl border border-brand-border hover:shadow-md transition-all duration-300">
                    <Check className="w-5 h-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm lg:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mindset Section */}
        <div className="relative bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-heading p-10 lg:p-12 rounded-3xl text-white shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Compass className="w-10 h-10 lg:w-12 lg:h-12" />
              <h4 className="text-3xl lg:text-4xl font-bold">{t.peaks.mindsetTitle}</h4>
            </div>
            <div className="w-20 h-1 bg-white/30 mb-6 rounded-full"></div>
            <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed">{t.peaks.mindset}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackingLists;