'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mountain, Waves, Trees, Calendar, Users, Navigation } from 'lucide-react';
import Image from 'next/image';

type DestinationKey = 
  | 'dar-es-salaam' 
  | 'selous' 
  | 'mikumi' 
  | 'arusha-np' 
  | 'tarangire' 
  | 'serengeti' 
  | 'ngorongoro' 
  | 'pangani' 
  | 'maziwe';

type Destination = {
  name: string;
  description: string;
  region: string;
  image: string;
  coordinates: string;
  mapUrl: string;
};

type SafariExperience = {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  destinations: DestinationKey[];
  description: string;
  image: string;
};

type BeachExperience = {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  destinations: DestinationKey[];
  description: string;
  image: string;
};

export default function RoadMapPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      pageTitle: "Road Map",
      pageSubtitle: "Journey through Tanzania's transformative landscapes",
      safariSection: "Safari Experiences",
      beachSection: "Beach Retreats",
      duration: "Duration",
      highlights: "Highlights",
      destinations: "Destinations",
      location: "Location",
      viewOnMap: "View on Map",
    },
    de: {
      pageTitle: "Routenplan",
      pageSubtitle: "Reise durch Tansanias transformative Landschaften",
      safariSection: "Safari-Erlebnisse",
      beachSection: "Strand-Rückzugsorte",
      duration: "Dauer",
      highlights: "Höhepunkte",
      destinations: "Reiseziele",
      location: "Standort",
      viewOnMap: "Auf Karte ansehen",
    },
  };

  const destinations: Record<DestinationKey, Destination> = {
    // Southern Tanzania
    'dar-es-salaam': {
      name: 'Dar es Salaam',
      description: "Dar es Salaam is more than just a city. It is a living mosaic of cultures, stories, and contrasts. Between the wide Indian Ocean and the vibrant streets unfolds an energy that is contagious. Here, tradition and modern life meet, spices linger in the markets, and conversations carry the sound of many languages.\n\nThe city moves to its own rhythm. The call of the ocean, the beat of music drifting through the night, the pulse of people gathering in cafés and along the shore. Dar is vibrant and restless, yet always open for a moment of stillness when the sea breeze cools the air and the horizon stretches wide.",
      region: 'Southern Tanzania',
      image: 'https://images.unsplash.com/photo-1568643586940-5e0231b8e043?w=1200&auto=format&fit=crop',
      coordinates: '6.7924° S, 39.2083° E',
      mapUrl: 'https://www.google.com/maps/place/Dar+es+Salaam,+Tanzania/@-6.7924,39.2083,11z'
    },
    'selous': {
      name: 'Selous Game Reserve',
      description: "Selous is wilderness at its most powerful. Vast landscapes stretch beyond the horizon, alive with the raw beauty of rivers, wetlands, and endless savannah. It is a place where elephants cross silently, where hippos surface with a deep breath, and where the air itself carries the rhythm of untamed life.\n\nHere, nature sets the pace. Days flow with the meandering Rufiji River, nights open to skies scattered with countless stars. The silence is never empty, it holds the sound of lions in the distance, the whisper of wind in the grass, the movement of life all around.\n\nSelous is not just a reserve. It is an immersion into something greater than us, an experience of vastness, humility, and connection. A reminder that in the wild, clarity often comes not through words, but through presence.",
      region: 'Southern Tanzania',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop',
      coordinates: '8.0833° S, 38.2500° E',
      mapUrl: 'https://www.google.com/maps/place/Nyerere+National+Park/@-8.0833,38.2500,9z'
    },
    'mikumi': {
      name: 'Mikumi National Park',
      description: "Mikumi is often described as a window into the wild. Just a few hours from Dar es Salaam, the landscape opens into wide plains where giraffes move calmly, zebras graze in patterns, and the silhouettes of baobab trees stand like quiet guardians.\n\nThe park feels approachable, yet full of surprises. The horizon stretches far, and with every turn the scene changes. A herd of buffalo, a bird in flight, the calm presence of elephants. It is a place where nature shows its rhythm without hurry, inviting you to slow down and simply observe.\n\nMikumi holds a balance of accessibility and depth. It offers the chance to experience wilderness in its simplicity. Raw, close, and grounding.",
      region: 'Southern Tanzania',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&auto=format&fit=crop',
      coordinates: '7.3833° S, 37.0000° E',
      mapUrl: 'https://www.google.com/maps/place/Mikumi+National+Park/@-7.3833,37.0000,10z'
    },
    // Northern Circuit
    'arusha-np': {
      name: 'Arusha National Park',
      description: "Arusha National Park carries a quiet intensity. Its landscapes shift quickly from open grasslands where giraffes browse, to volcanic craters filled with shimmering lakes, to forests alive with colobus monkeys. At its heart rises Mount Meru, a presence that shapes both horizon and atmosphere.\n\nWalking safaris make this park special. On foot, every sound feels closer, every movement more alive. You sense the weight of being a guest in nature's rhythm, where the ground itself seems to hold memory.\n\nOne of the park's most moving stories is of the Trapp elephant family. When the matriarch died, the herd returned to her resting place and stood together around it. A gesture of loyalty and remembrance that shows how deeply connection runs through the wild.\n\nArusha National Park is not just a gateway, it is a reminder that presence, memory, and unity are part of the journey.",
      region: 'Northern Circuit',
      image: 'https://images.unsplash.com/photo-1609198092357-520a8d915a89?w=1200&auto=format&fit=crop',
      coordinates: '3.2333° S, 36.8833° E',
      mapUrl: 'https://www.google.com/maps/place/Arusha+National+Park/@-3.2333,36.8833,11z'
    },
    'tarangire': {
      name: 'Tarangire National Park',
      description: "Tarangire is often called the land of giants. Baobab trees rise from the earth like ancient guardians, their massive trunks holding centuries of stories. Beneath them, elephants wander in steady rhythm, finding shade and strength in the same places where generations before have passed.\n\nThe park carries a sense of time. Herds move with the seasons, birds gather in great flocks, and the river cuts its path through open plains and woodlands. Everywhere, the presence of the baobabs gives Tarangire a character unlike any other place. Grounding, enduring, and full of quiet dignity.\n\nHere, you feel how nature weaves strength and resilience together. In the stillness of a baobab's shadow or in the slow movement of elephants across the landscape, Tarangire reminds you that patience and presence are their own kind of power.",
      region: 'Northern Circuit',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop',
      coordinates: '3.8333° S, 36.0000° E',
      mapUrl: 'https://www.google.com/maps/place/Tarangire+National+Park/@-3.8333,36.0000,10z'
    },
    'serengeti': {
      name: 'Serengeti National Park',
      description: "The Serengeti is vast. Its plains stretch endlessly, where sky and earth seem to meet. In this openness, you may feel small, as if a part of yourself dissolves into the horizon, yet it is a gentle kind of losing, one that creates space for clarity.\n\nHerds move like living currents across the land, their rhythm carrying a sense of belonging that reaches beyond the individual. In the flow of so many lives, the balance of nature becomes visible and deeply felt.\n\nThe Serengeti invites you to let go of boundaries and to rest in its immensity. What seems like being lost is, in truth, the beginning of finding yourself within something greater.",
      region: 'Northern Circuit',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop',
      coordinates: '2.3333° S, 34.8333° E',
      mapUrl: 'https://www.google.com/maps/place/Serengeti+National+Park/@-2.3333,34.8333,9z'
    },
    'ngorongoro': {
      name: 'Ngorongoro Crater',
      description: "There are not enough words to describe the Ngorongoro Crater. Standing at the rim, the view opens into a world of its own a vast caldera where grasslands, forests, and lakes come together in a circle of life.\n\nFrom above, the scene feels almost unreal. From within, it surrounds you completely. Elephants moving with quiet strength, flamingos coloring the water, lions resting in the sun. Every direction holds another layer of this enclosed paradise.\n\nThe Crater is a reminder of nature's ability to create something beyond imagination. It is not just a place to see, but to feel a wonder that leaves you silent, even as life around you speaks in countless voices.",
      region: 'Northern Circuit',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&auto=format&fit=crop',
      coordinates: '3.1667° S, 35.5833° E',
      mapUrl: 'https://www.google.com/maps/place/Ngorongoro+Crater/@-3.1667,35.5833,11z'
    },
    // Coast
    'pangani': {
      name: 'Pangani',
      description: "Here, life moves slower. Wooden boats drift along the river, fishermen return with the tide, and the sound of waves mixes with quiet voices on the shore. There is depth in this simplicity, a sense of being held by time rather than chased by it.\n\nPangani is not about spectacle, but about presence. Its streets and riverbanks carry echoes of history. Stories of trade, of encounters, of lives that shaped this place. To spend time here is also to pause with awareness, to take a moment for reflection, and to sense the quiet responsibility that comes when we see ourselves as part of a longer story.",
      region: 'Coast',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop',
      coordinates: '5.4167° S, 38.9833° E',
      mapUrl: 'https://www.google.com/maps/place/Pangani,+Tanzania/@-5.4167,38.9833,12z'
    },
    'maziwe': {
      name: 'Maziwe Island',
      description: "Maziwe Island appears only when the tide is low. A fleeting stretch of sand surrounded by the vast Indian Ocean. For a few hours it rises from the water, bare and open, where sky and sea meet in a rare moment of simplicity. Its beauty is not constant, but revealed, as if the ocean itself uncovers it for those who take the time to wait.\n\nBeneath the surface, another world unfolds. Coral reefs circle the island, alive with color and movement, inviting you to dive or snorkel and witness the hidden richness of marine life. What is invisible at first glance becomes clear once you look deeper.\n\nMaziwe is a reminder that some treasures appear only when the right conditions align when something is laid bare, when we pause to see, and when we dare to step below the surface.",
      region: 'Coast',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop',
      coordinates: '5.2833° S, 39.0500° E',
      mapUrl: 'https://www.google.com/maps/place/Maziwe+Island/@-5.2833,39.0500,13z'
    },
  };

  const safariExperiences: SafariExperience[] = [
    {
      id: 'flow',
      name: 'The Flow',
      tagline: 'A journey through rhythm and wilderness',
      duration: '7-10 days',
      destinations: ['dar-es-salaam', 'selous', 'mikumi'],
      description: 'Begin where ocean meets city, then flow into the raw wilderness of southern Tanzania. Experience the rhythm of nature in its most powerful form.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop'
    },
    {
      id: 'shift',
      name: 'The Shift',
      tagline: 'Transform through Tanzania\'s iconic landscapes',
      duration: '8-12 days',
      destinations: ['tarangire', 'serengeti', 'ngorongoro'],
      description: 'Move through the land of giants, witness the great migration, and stand in awe at the crater that holds a world within itself.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop'
    },
    {
      id: 'unfolding',
      name: 'The Unfolding',
      tagline: 'A complete immersion into Tanzania\'s soul',
      duration: '12-15 days',
      destinations: ['arusha-np', 'tarangire', 'serengeti', 'ngorongoro'],
      description: 'The ultimate journey. Walk with the Maasai, witness moving herds, and discover how presence and connection unfold across Tanzania\'s most iconic landscapes.',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&auto=format&fit=crop'
    },
    {
      id: 'pause',
      name: 'Pause',
      tagline: 'Stillness in the wild',
      duration: '5-7 days',
      destinations: ['arusha-np', 'tarangire'],
      description: 'A gentle introduction to Tanzania\'s northern circuit. Perfect for those seeking depth without rushing.',
      image: '/still.jpeg'
    },
    {
      id: 'little-tracks',
      name: 'Little Tracks',
      tagline: 'Family Safari',
      duration: '6-8 days',
      destinations: ['arusha-np', 'tarangire', 'ngorongoro'],
      description: 'Designed for families. Where children discover wonder and parents rediscover joy in nature\'s rhythm.',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&auto=format&fit=crop'
    },
  ];

  const beachExperiences: BeachExperience[] = [
    {
      id: 'exhale',
      name: 'The Exhale',
      tagline: 'Zanzibar\'s timeless embrace',
      duration: '4-7 days',
      destinations: [],
      description: 'After the safari, let the ocean restore you. Zanzibar offers white sands, turquoise waters, and a rhythm that invites you to simply breathe.',
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&auto=format&fit=crop'
    },
    {
      id: 'return',
      name: 'The Return',
      tagline: 'Coastal authenticity',
      duration: '3-5 days',
      destinations: ['pangani', 'maziwe'],
      description: 'Experience Tanzania\'s coast away from the crowds. Where history whispers, tides reveal hidden islands, and life moves at its own pace.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop'
    },
  ];

  const text = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-heading">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-heading/90 to-brand-heading/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            {text.pageTitle}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-brand-border font-light">
            {text.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Safari Experiences Section */}
      <section className="py-20 bg-gradient-to-b from-white to-brand-menu-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Trees className="h-12 w-12 text-brand-primary mx-auto mb-4" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-heading mb-4">
              {text.safariSection}
            </h2>
            <div className="h-1 w-24 bg-brand-primary mx-auto" />
          </div>

          <div className="space-y-32">
            {safariExperiences.map((experience, index) => (
              <div key={experience.id} id={experience.id} className="scroll-mt-32">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative h-96 lg:h-[500px] overflow-hidden border-4 border-brand-primary shadow-2xl">
                      <img 
                        src={experience.image} 
                        alt={experience.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-block bg-brand-primary text-white px-4 py-2 mb-4 text-xs uppercase tracking-widest font-bold">
                      Safari Experience
                    </div>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-heading mb-4">
                      {experience.name}
                    </h3>
                    <p className="text-xl text-brand-primary font-semibold italic mb-6">
                      {experience.tagline}
                    </p>
                    <p className="text-lg text-brand-heading/70 leading-relaxed mb-8">
                      {experience.description}
                    </p>

                    {/* Destinations */}
                    <div className="border-t-2 border-brand-border pt-6">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-brand-heading mb-4 flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-brand-primary" />
                        {text.destinations}
                      </h4>
                      <div className="space-y-3">
                        {experience.destinations.map((destId) => (
                          <a
                            key={destId}
                            href={`#${destId}`}
                            className="block group"
                          >
                            <div className="flex items-center space-x-3 p-4 bg-white border-l-4 border-brand-border hover:border-brand-primary transition-all duration-300 hover:shadow-lg">
                              <div className="h-2 w-2 bg-brand-primary rounded-full" />
                              <span className="text-brand-heading group-hover:text-brand-primary font-medium transition-colors">
                                {destinations[destId].name}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Experiences Section */}
      <section className="py-20 bg-gradient-to-b from-brand-menu-hover to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Waves className="h-12 w-12 text-brand-primary mx-auto mb-4" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-heading mb-4">
              {text.beachSection}
            </h2>
            <div className="h-1 w-24 bg-brand-primary mx-auto" />
          </div>

          <div className="space-y-32">
            {beachExperiences.map((experience, index) => (
              <div key={experience.id} id={experience.id} className="scroll-mt-32">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                    <div className="relative h-96 lg:h-[500px] overflow-hidden border-4 border-brand-primary shadow-2xl">
                      <img 
                        src={experience.image} 
                        alt={experience.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-6 -right-6 bg-brand-primary text-white px-8 py-4 shadow-xl">
                      <p className="text-sm font-bold uppercase tracking-wider">{text.duration}</p>
                      <p className="text-2xl font-black">{experience.duration}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? 'lg:order-1' : ''}>
                    <div className="inline-block bg-brand-primary text-white px-4 py-2 mb-4 text-xs uppercase tracking-widest font-bold">
                      Beach Retreat
                    </div>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-heading mb-4">
                      {experience.name}
                    </h3>
                    <p className="text-xl text-brand-primary font-semibold italic mb-6">
                      {experience.tagline}
                    </p>
                    <p className="text-lg text-brand-heading/70 leading-relaxed mb-8">
                      {experience.description}
                    </p>

                    {experience.destinations.length > 0 && (
                      <div className="border-t-2 border-brand-border pt-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-brand-heading mb-4 flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-brand-primary" />
                          {text.destinations}
                        </h4>
                        <div className="space-y-3">
                          {experience.destinations.map((destId) => (
                            <a
                              key={destId}
                              href={`#${destId}`}
                              className="block group"
                            >
                              <div className="flex items-center space-x-3 p-4 bg-white border-l-4 border-brand-border hover:border-brand-primary transition-all duration-300 hover:shadow-lg">
                                <div className="h-2 w-2 bg-brand-primary rounded-full" />
                                <span className="text-brand-heading group-hover:text-brand-primary font-medium transition-colors">
                                  {destinations[destId].name}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Details Section */}
      <section className="py-20 bg-brand-heading text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Mountain className="h-12 w-12 text-brand-primary mx-auto mb-4" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              Destinations
            </h2>
            <div className="h-1 w-24 bg-brand-primary mx-auto" />
          </div>

          <div className="space-y-24">
            {Object.entries(destinations).map(([id, dest]) => (
              <div key={id} id={id} className="scroll-mt-32">
                <div className="bg-white/5 backdrop-blur-sm border-2 border-brand-primary/30 overflow-hidden">
                  {/* Destination Image */}
                  <div className="relative h-64 sm:h-80 lg:h-96 bg-brand-menu-hover overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-heading to-transparent" />
                  </div>

                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                      <div className="flex-1">
                        <div className="inline-block bg-brand-primary/20 text-brand-primary px-4 py-2 mb-4 text-xs uppercase tracking-widest font-bold">
                          {dest.region}
                        </div>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">
                          {dest.name}
                        </h3>
                      </div>
                    </div>

                    {/* Location Info */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-6 border-b border-brand-primary/30">
                      <div className="flex items-center space-x-2 text-brand-border/80">
                        <MapPin className="h-5 w-5 text-brand-primary flex-shrink-0" />
                        <span className="text-sm">{dest.coordinates}</span>
                      </div>
                      <a
                        href={dest.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-brand-primary hover:text-white transition-colors group"
                      >
                        <Navigation className="h-5 w-5 flex-shrink-0 transform group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-semibold uppercase tracking-wide">{text.viewOnMap}</span>
                      </a>
                    </div>
                    
                    <div className="prose prose-lg prose-invert max-w-none">
                      {dest.description.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-brand-border/90 leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}