'use client';

import { Mountain, ArrowRight, Compass, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Mock useLanguage hook
const useLanguage = () => ({ language: 'en' as const });

const PeaksPage = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const translations = {
    en: {
      title: 'The Peaks',
      subtitle: 'Where Earth Touches Sky',
      tagline: 'Some journeys are measured in miles. Others in meters climbed.',
      intro: {
        heading: 'Three Mountains. Three Stories. One Journey.',
        text: 'From the long, steady rise of Kilimanjaro to the quiet, forested slopes of Mount Meru, to the rolling green hills of the Usambara Mountains - each peak has its own rhythm, its own reward, and its own way of showing you the horizon.'
      },
      peaks: [
        {
          title: 'The Ascent',
          subtitle: 'Kilimanjaro',
          image: '/kili.jpeg',
          description: `Kilimanjaro is a mountain of many paths. Each route offers its own rhythm, its own landscapes, and its own way of challenging and supporting those who walk it. Just as every person carries different strengths and needs, the mountain holds space for different journeys.
          Reaching the summit is a powerful goal, yet the experience is shaped just as much by the way there. Walking together, moving with awareness, breathing in step with the mountain these moments hold their own reward. Along the trail there is time to notice beauty, to learn, and to share strength in community.
          The climb is never done alone. It is supported by guides and porters whose knowledge and care make the journey possible, and by the deep presence of the mountain itself. To walk Kilimanjaro is to test limits, but also to honor nature, respect those around you, and recognize that every step carries meaning.`,
          details: 'The Ascent is not one single path. There are many ways to climb, each with its own pace, its own landscapes, its own rhythm. Together, we choose the route that fits you best.',
          elevation: '5,895m',
          duration: '6-9 days'
        },
        {
          title: 'The Quiet Peak',
          subtitle: 'Mount Meru',
          image: '/Meru.jpeg',
description: `Mount Meru is often overshadowed by its higher neighbor, yet it is a challenge on its own. Rising above Arusha, the mountain offers steep trails, changing vegetation zones, and a climb that demands focus and endurance.
Unlike Kilimanjaro, the ascent of Meru moves quickly into altitude. The body adapts faster, and every step feels more immediate. The trail leads through rich forest alive with wildlife, across ridges with breathtaking views, and up to a summit that opens towards Kilimanjaro itself.
Meru is not preparation. It is experience. To climb it is to test strength, to move through landscapes of striking beauty, and to stand at a peak that carries its own sense of achievement. It is a mountain that sharpens both body and mind, offering clarity in its challenge.`,
details: 'Over four days, the trail takes you from lush forest through alpine meadows to a sharp volcanic ridge. It\'s a journey for those who want challenge and beauty without the rush.',
          elevation: '4,566m',
          duration: '4 days'
        },
        {
          title: 'The Green Path',
          subtitle: 'Usambara Mountains',
          image: '/mountainhike.jpeg',
          description: `The Usambara Mountains are calm and green. Gentle hills stretch into the distance, small villages lie between fields, and forest paths invite slow steps.
                       Walking here is simple and rewarding. The air feels fresh, the views open wide, and along the way you meet people whose lives are closely tied to the land.
                       Usambara is not about speed or spectacle. It is about taking time, moving gently, and feeling how landscape and community belong together.`,
          details: 'Days are spent walking or cycling at a gentle pace, taking time to meet the people who live along the way. Includes 2 days in the protected Mikomazi area.',
          elevation: '2,300m',
          duration: '3-5 days'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-brand-bg-light">
      {/* Bold Carousel Section */}
      <div className="relative h-screen sm:h-screen overflow-hidden" style={{ backgroundImage: 'url(/hema1.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center 76%' }}>
        {/* Overlay to reduce brightness, less transparent for more image visibility */}
        <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="h-[220px] sm:h-full"
        >
          {t.peaks.map((peak, idx) => (
            <SwiperSlide key={idx} className="!w-[95%] sm:!w-[85%] md:!w-[70%]" style={{ maxWidth: '900px' }}>
              <div className="relative h-full flex items-center justify-center p-2 sm:p-4 md:p-8">
                <div className="relative w-full h-28 aspect-square sm:h-60 sm:aspect-auto md:h-96 lg:h-[420px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-white/80 mx-auto" style={{ marginRight: 'auto', marginLeft: 'auto', maxWidth: '95vw' }}>
                  {/* Image */}
                  <img 
                    src={peak.image} 
                    alt={peak.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-6 text-white">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <Mountain className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-brand-primary" />
                      <span className="font-poppins text-brand-primary font-semibold text-xs sm:text-sm md:text-base tracking-wide">
                        {peak.subtitle}
                      </span>
                    </div>
                    <h2 className="font-comfortaa text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                      {peak.title}
                    </h2>
                    {/* Description removed from carousel for both desktop and mobile */}
                    <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-poppins">
                      <div className="flex items-center gap-1">
                        <Compass className="w-3 h-3 sm:w-4 sm:h-4 text-brand-primary" />
                        <span className="font-semibold">{peak.elevation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        {/* Introduction */}
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-comfortaa text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-heading font-bold mb-4 sm:mb-6 px-4">
            <span className="hidden sm:inline">Three Mountains. Three Stories. One Journey.</span>
            <span className="sm:hidden">Three mountains, three stories, one journey.</span>
          </h1>
          <p className="hidden sm:block font-poppins text-lg sm:text-xl text-stone-700 leading-relaxed max-w-4xl mx-auto px-4">
            {t.intro.text}
          </p>
        </div>

        {/* Peak Details */}
        <div className="space-y-16 sm:space-y-24">
          {t.peaks.map((peak, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-3 sm:gap-8 md:gap-12 items-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${idx % 2 === 1 ? 'translate-x-8' : '-translate-x-8'}`
              }`}
              style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group">
                  <img 
                    src={peak.image} 
                    alt={peak.title}
                    className="w-full h-40 sm:h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 px-4 sm:px-0">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-primary/10 rounded-full">
                  <Mountain className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" />
                  <span className="font-poppins text-brand-primary font-semibold text-sm sm:text-base">
                    {peak.subtitle}
                  </span>
                </div>

                <h2 className="font-comfortaa text-3xl sm:text-4xl md:text-5xl text-brand-heading font-bold">
                  {peak.title}
                </h2>

                <div className="font-poppins text-base sm:text-lg text-stone-700 leading-relaxed">
                  {peak.description.split('\n').map((para, i) => (
                    <p key={i} className="mb-2 last:mb-0">{para.trim()}</p>
                  ))}
                </div>

                <p className="hidden sm:block font-poppins text-sm sm:text-base text-stone-600 leading-relaxed">
                  {peak.details}
                </p>

                <div className="flex items-center gap-4 sm:gap-8 pt-2 sm:pt-4">
                  <div className="space-y-1">
                    <p className="font-poppins text-xs sm:text-sm text-stone-500 uppercase tracking-wide">Elevation</p>
                    <p className="font-comfortaa text-xl sm:text-2xl text-brand-primary font-bold">{peak.elevation}</p>
                  </div>
                  <div className="h-10 sm:h-12 w-px bg-brand-border" />
                  
                </div>

              
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-brand-primary to-brand-secondary py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="font-comfortaa text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4 sm:mb-6">
            Ready to Find Your Peak?
          </h2>
          <p className="hidden sm:block font-poppins text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
            Every mountain has a story. Let's discover yours together.
          </p>
          <a
            href="https://tally.so/r/3xe74G"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-5 bg-white text-brand-primary font-poppins font-bold rounded-full hover:shadow-2xl transition-all duration-300 text-base sm:text-lg group"
          >
            <span>Explore If This Journey is For You</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #c3512f;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          width: 40px;
          height: 40px;
        }
        @media (min-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 56px;
            height: 56px;
          }
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        @media (min-width: 640px) {
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 24px;
          }
        }
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
          /* Reduce background image height for mobile */
          .relative.h-screen.sm\:h-screen.overflow-hidden {
            height: 260px !important;
            min-height: 0 !important;
            max-height: 320px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default function Page() {
  return <PeaksPage />;
}