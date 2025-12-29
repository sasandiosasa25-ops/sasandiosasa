
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, MapPin, Calendar, Users, Mountain, Waves, Compass } from 'lucide-react';

// Safari Journeys Page
const SafariPage = () => {
  const [expandedJourney, setExpandedJourney] = useState<string | null>(null);

  const journeys = [
    {
      id: 'the-flow',
      title: 'The Flow',
      duration: '7 days – 8 nights',
      subtitle: 'Following the land\'s own rhythm',
      locations: ['Nyerere (Selous)', 'Mikumi National Park', 'Udzungwa', 'Ruaha'],
      description: 'This is a journey that invites you to move with the land\'s own rhythm, not rushing, but letting each moment unfold in its own time.',
      fullText: 'From the vast waterways of Nyerere to the golden plains of Mikumi, the forested slopes of Udzungwa, and the wild, open heart of Ruaha, every step is part of a current that carries you deeper. Here, the wild is not something you simply look at – it surrounds you, shapes you, and slows you into its pace.',
      image: '🌊'
    },
    {
      id: 'the-pause',
      title: 'The Pause',
      duration: '3 days – 2 nights',
      subtitle: 'Small in days. Deep in presence.',
      locations: ['Arusha National Park', 'Maasai Lodge', 'Tarangire National Park'],
      description: 'Sometimes, all it takes is a pause. This journey begins close to the ground, with slow steps through green forest, open grasslands, and the sound of water calling you deeper into the moment.',
      fullText: 'You rest in a space shaped by welcome and presence, where Maasai hospitality meets stillness and story. From there, the land opens wider, with ancient baobabs, wandering elephants, and golden light that lingers long after the sun is gone.',
      image: '🌿'
    },
    {
      id: 'the-shift',
      title: 'The Shift',
      duration: '5 days – 4 nights',
      subtitle: 'For those who know travel can change more than your view',
      locations: ['Tarangire National Park', 'Serengeti', 'Ngorongoro Crater'],
      description: 'Change doesn\'t always arrive with a big announcement. Sometimes it begins quietly, with the slow walk of elephants between ancient baobabs, and the golden light that closes the day.',
      fullText: 'The Serengeti stretches far beyond the horizon, inviting you to travel at the pace of the wild – unhurried, watchful, awake. Your journey closes in a place unlike any other, a natural amphitheater where life gathers in rare abundance.',
      image: '🦒'
    },
    {
      id: 'the-unfolding',
      title: 'The Unfolding',
      duration: '8 days – 7 nights',
      subtitle: 'Opening like a slow sunrise',
      locations: ['Arusha National Park', 'Maasai Experience', 'Tarangire', 'Serengeti', 'Ngorongoro Crater'],
      description: 'Some journeys move quickly. Others open like a slow sunrise, showing more with every step. The Unfolding begins close, on foot, where every sound and shadow feels near.',
      fullText: 'You travel deeper into the Serengeti, with time to follow the rhythm of the Big Migration, or simply to stay in one place long enough to feel the land breathing around you. Your journey closes in Ngorongoro Crater, a rare gathering place where life unfolds in every direction.',
      image: '🌅'
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section Removed: Title and subtitle moved to Road Map */}

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg font-poppins text-stone-700 leading-relaxed space-y-6">
          <p>
            These journeys are not about ticking off destinations. They're about how you walk, what you notice, and how your presence touches the places you move through.
          </p>
          <p>
            We travel in partnership with Tanzanian hosts, with care for land, rhythm, and community. Every journey strengthens trusted networks, respects natural and human resources and invites you to be part of a wider movement.
          </p>
          <p className="text-brand-primary font-medium">
            Enjoy discovering your path. For detailed itineraries, timing, and tailored travel advice, we invite you to connect with us for a personal conversation.
          </p>
        </div>
      </div>

      {/* Journey Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="space-y-8">
          {journeys.map((journey) => (
            <div key={journey.id} className="bg-white p-8 rounded-lg shadow-sm border border-brand-border flex flex-col items-start text-left max-w-3xl mx-auto">
              <h3 className="font-comfortaa text-3xl text-black mb-3">{journey.title}</h3>
              <p className="font-poppins text-lg text-stone-600 italic mb-2">{journey.subtitle}</p>
              <p className="font-poppins text-stone-600 leading-relaxed mb-4">{journey.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {journey.locations.map((location, idx) => (
                  <Link key={idx} href="/compass/road-map" scroll={false} legacyBehavior>
                    <a className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-black text-sm font-poppins rounded-full hover:bg-brand-primary/20 transition-colors">
                      <MapPin className="w-3 h-3 text-black" />
                      {location}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="w-full flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-stone-700">
                  <Calendar className="w-4 h-4" />
                  <span className="font-poppins text-sm">{journey.duration}</span>
                </div>
                <button
                  onClick={() => setExpandedJourney(expandedJourney === journey.id ? null : journey.id)}
                  className="ml-4 p-2 hover:bg-brand-menu-hover rounded-full transition-colors"
                >
                  {expandedJourney === journey.id ? (
                    <ChevronDown className="w-6 h-6 text-brand-primary" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-brand-primary" />
                  )}
                </button>
              </div>
              <div className="flex w-full justify-center mb-2">
                <div className="text-7xl leading-none">{journey.image}</div>
              </div>
              {expandedJourney === journey.id && (
                <div className="mt-6 pt-6 border-t border-brand-border w-full">
                  <p className="font-poppins text-stone-700 leading-relaxed mb-6">{journey.fullText}</p>
                  <button className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-poppins rounded-full transition-colors duration-300">Connect With Us</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Coastal Experiences */}
      <div className="bg-gradient-to-b from-stone-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-comfortaa text-4xl text-brand-heading text-center mb-12">
            Coastal Experiences
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-brand-border">
              <span className="text-4xl mb-4 block">🌊</span>
              <h3 className="font-comfortaa text-2xl text-brand-heading mb-3">The Exhale</h3>
              <p className="font-poppins text-sm text-brand-primary mb-2">Zanzibar</p>
              <p className="font-poppins text-stone-700 leading-relaxed">
                Every journey needs its resting ground. A moment to let the weight fall from your shoulders, to feel the salt on your skin, and to move only when you want to. The days are not counted. They simply follow your rhythm.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-brand-border">
              <span className="text-4xl mb-4 block">🏝️</span>
              <h3 className="font-comfortaa text-2xl text-brand-heading mb-3">The Return</h3>
              <p className="font-poppins text-sm text-brand-primary mb-2">Pangani • Maziwe Island</p>
              <p className="font-poppins text-stone-700 leading-relaxed">
                Some places don't ask for attention. They wait, until you arrive quietly enough to notice. The Quiet Coast is far from the usual routes. Here, the sea is softer, the shore unhurried.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariPage;