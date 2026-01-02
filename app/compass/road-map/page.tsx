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



export default function RoadMapPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      pageTitle: "Road Map",
      pageSubtitle: "Journey throughhh Tanzania's transformative landscapes",
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
      image: '/dar.jpg',
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
      image: '/elephant.jpeg',
      coordinates: '7.3833° S, 37.0000° E',
      mapUrl: 'https://www.google.com/maps/place/Mikumi+National+Park/@-7.3833,37.0000,10z'
    },
    // Northern Circuit
    'arusha-np': {
      name: 'Arusha National Park',
      description: "Arusha National Park carries a quiet intensity. Its landscapes shift quickly from open grasslands where giraffes browse, to volcanic craters filled with shimmering lakes, to forests alive with colobus monkeys. At its heart rises Mount Meru, a presence that shapes both horizon and atmosphere.\n\nWalking safaris make this park special. On foot, every sound feels closer, every movement more alive. You sense the weight of being a guest in nature's rhythm, where the ground itself seems to hold memory.\n\nOne of the park's most moving stories is of the Trapp elephant family. When the matriarch died, the herd returned to her resting place and stood together around it. A gesture of loyalty and remembrance that shows how deeply connection runs through the wild.\n\nArusha National Park is not just a gateway, it is a reminder that presence, memory, and unity are part of the journey.",
      region: 'Northern Circuit',
      image: '/arusha.jpeg',
      coordinates: '3.2333° S, 36.8833° E',
      mapUrl: 'https://www.google.com/maps/place/Arusha+National+Park/@-3.2333,36.8833,11z'
    },
    'tarangire': {
      name: 'Tarangire National Park',
      description: "Tarangire is often called the land of giants. Baobab trees rise from the earth like ancient guardians, their massive trunks holding centuries of stories. Beneath them, elephants wander in steady rhythm, finding shade and strength in the same places where generations before have passed.\n\nThe park carries a sense of time. Herds move with the seasons, birds gather in great flocks, and the river cuts its path through open plains and woodlands. Everywhere, the presence of the baobabs gives Tarangire a character unlike any other place. Grounding, enduring, and full of quiet dignity.\n\nHere, you feel how nature weaves strength and resilience together. In the stillness of a baobab's shadow or in the slow movement of elephants across the landscape, Tarangire reminds you that patience and presence are their own kind of power.",
      region: 'Northern Circuit',
      image: '/Tarangire1.jpeg',
      coordinates: '3.8333° S, 36.0000° E',
      mapUrl: 'https://www.google.com/maps/place/Tarangire+National+Park/@-3.8333,36.0000,10z'
    },
    'serengeti': {
      name: 'Serengeti National Park',
      description: "The Serengeti is vast. Its plains stretch endlessly, where sky and earth seem to meet. In this openness, you may feel small, as if a part of yourself dissolves into the horizon, yet it is a gentle kind of losing, one that creates space for clarity.\n\nHerds move like living currents across the land, their rhythm carrying a sense of belonging that reaches beyond the individual. In the flow of so many lives, the balance of nature becomes visible and deeply felt.\n\nThe Serengeti invites you to let go of boundaries and to rest in its immensity. What seems like being lost is, in truth, the beginning of finding yourself within something greater.",
      region: 'Northern Circuit',
      image: '/simbas1.jpeg',
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
      image: '/still.jpeg',
      coordinates: '5.4167° S, 38.9833° E',
      mapUrl: 'https://www.google.com/maps/place/Pangani,+Tanzania/@-5.4167,38.9833,12z'
    },
    'maziwe': {
      name: 'Maziwe Island',
      description: "Maziwe Island appears only when the tide is low. A fleeting stretch of sand surrounded by the vast Indian Ocean. For a few hours it rises from the water, bare and open, where sky and sea meet in a rare moment of simplicity. Its beauty is not constant, but revealed, as if the ocean itself uncovers it for those who take the time to wait.\n\nBeneath the surface, another world unfolds. Coral reefs circle the island, alive with color and movement, inviting you to dive or snorkel and witness the hidden richness of marine life. What is invisible at first glance becomes clear once you look deeper.\n\nMaziwe is a reminder that some treasures appear only when the right conditions align when something is laid bare, when we pause to see, and when we dare to step below the surface.",
      region: 'Coast',
      image: '/maziwe.jpeg',
      coordinates: '5.2833° S, 39.0500° E',
      mapUrl: 'https://www.google.com/maps/place/Maziwe+Island/@-5.2833,39.0500,13z'
    },
  };
  const text = content[language];
  return (
    <div className="min-h-screen ">
      {/* Hero Section: Title and subtitle moved from Safari Journeys */}
      <section className="py-4 sm:py-20 bg-brand-heading text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2 sm:mb-16 flex flex-col items-center justify-center">
            <Mountain className="h-10 w-10 text-brand-primary mx-auto mb-2 sm:mb-4" />
            {/* Full-width title box with background image */}
            <div className="w-full rounded-xl shadow-lg overflow-hidden mb-1 sm:mb-4" style={{background: 'rgba(0,0,0,0.5)'}}>
              <div className="relative flex flex-col items-center justify-center px-2 sm:px-10 py-4 sm:py-10 min-h-[110px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[260px]">
                <img src="/map2.jpeg" alt="Map background" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0" style={{objectPosition: 'center'}} />
                <span className="relative z-10 w-full flex flex-col items-center">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">Road Map</h2>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">Journey through Tanzania's transformative landscapes</h3>
                </span>
              </div>
            </div>
            <div className="h-1 w-24 bg-brand-primary mx-auto" />
          </div>

          <div className="space-y-12 sm:space-y-24">
            {Object.entries(destinations).map(([id, dest]) => (
              <div key={id} id={id} className="scroll-mt-32">
                <div className="bg-white/5 backdrop-blur-sm border-2 border-brand-primary/30 overflow-hidden rounded-none">
                  <div className="flex flex-col lg:flex-row lg:items-stretch">
                    <div className="relative lg:w-1/2 h-[320px] sm:h-[400px] md:h-[520px] lg:h-auto bg-brand-menu-hover overflow-hidden">
                      <div className="w-full h-full overflow-hidden">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-full h-full object-cover object-center"
                          style={{ aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '0' }}
                        />
                      </div>
                    </div>

                    <div className="p-10 lg:p-14 lg:w-1/2 flex items-center">
                      <div className="w-full">
                        <div className="inline-block bg-brand-primary/20 text-brand-primary px-4 py-2 mb-4 text-xs uppercase tracking-widest font-bold">
                          {dest.region}
                        </div>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2">
                          {dest.name}
                        </h3>
                        {/* Changed text color to white */}
                        <style jsx>{`
                          .text-3xl, .text-4xl, .text-5xl {
                            color: #fff !important;
                          }
                        `}</style>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-6 border-b border-brand-primary/30">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5 text-brand-primary flex-shrink-0" />
                            <span className="text-sm text-brand-primary">{dest.coordinates}</span>
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

                        <div className="prose prose-lg max-w-none">
                          {dest.description.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-white leading-relaxed mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
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