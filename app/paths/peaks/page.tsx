import { Mountain } from 'lucide-react';

// Peaks Page
const PeaksPage = () => {
  const peaks = [
    {
      title: 'The Ascent',
      subtitle: 'Kilimanjaro',
      icon: '⛰️',
      description: 'Some challenges are not about proving anything. They are about finding out who you are when the air thins and each step asks for all of you.',
      details: 'The Ascent is not one single path. There are many ways to climb, each with its own pace, its own landscapes, its own rhythm. Together, we choose the route that fits you best.'
    },
    {
      title: 'The Quiet Peak',
      subtitle: 'Mount Meru',
      icon: '🏔️',
      description: 'Tanzania\'s second-highest mountain. A climb that is shorter, less crowded, yet equally rewarding.',
      details: 'Over four days, the trail takes you from lush forest through alpine meadows to a sharp volcanic ridge. It\'s a journey for those who want challenge and beauty without the rush.'
    },
    {
      title: 'The Green Path',
      subtitle: 'Usambara Mountains',
      icon: '🌲',
      description: 'A journey through winding trails that lead past terraced hills, small villages, and forests alive with bird calls.',
      details: 'Days are spent walking or cycling at a gentle pace, taking time to meet the people who live along the way. Includes 2 days in the protected Mikomazi area.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-slate-50 to-stone-100">
      {/* Hero */}
      <div className="relative h-[60vh] bg-gradient-to-br from-slate-100 via-stone-100 to-blue-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-brand-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="font-comfortaa text-5xl md:text-6xl text-brand-heading mb-6">
            The Peaks
          </h1>
          <p className="font-poppins text-xl text-stone-700 leading-relaxed">
            Some journeys are measured in miles. Others in meters climbed. These are the ones that lift you higher and change the way you see, far beyond the summit.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg font-poppins text-stone-700 text-center leading-relaxed space-y-4">
          <p>From the long, steady rise of Kilimanjaro,</p>
          <p>to the quiet, forested slopes of Mount Meru,</p>
          <p>to the rolling green hills of the Usambara Mountains</p>
          <p className="text-brand-primary font-medium">
            each peak has its own rhythm, its own reward, and its own way of showing you the horizon.
          </p>
        </div>
      </div>

      {/* Peak Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {peaks.map((peak, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm border border-brand-border p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-5xl mb-4">{peak.icon}</div>
              <h3 className="font-comfortaa text-2xl text-brand-heading mb-2">
                {peak.title}
              </h3>
              <p className="font-poppins text-sm text-brand-primary mb-4 flex items-center gap-1">
                <Mountain className="w-4 h-4" />
                {peak.subtitle}
              </p>
              <p className="font-poppins text-stone-700 leading-relaxed mb-4">
                {peak.description}
              </p>
              <p className="font-poppins text-stone-600 text-sm leading-relaxed">
                {peak.details}
              </p>
              <button className="mt-6 w-full py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-poppins rounded-full transition-colors duration-300 group-hover:border-brand-secondary group-hover:text-brand-secondary group-hover:hover:bg-brand-secondary group-hover:hover:text-white">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeaksPage;