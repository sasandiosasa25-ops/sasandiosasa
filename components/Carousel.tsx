'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Commitment',
      subtitle: 'How we contribute to the\nUN Sustainability Goals',
      imagePrefix: 'SDG',
    },
    de: {
      title: 'Engagement',
      subtitle: 'Wie SasaNdioSasa beiträgt\nzu nachhaltigen Entwicklungszielen',
      imagePrefix: 'SDG',
    }
  };

  const t = translations[language];

  // Sample images array
  const images = [
    {
      id: 1,
      url: '/a.jpeg',
      alt: language === 'en' ? 'Mountain landscape' : 'Berglandschaft',
    },
    {
      id: 2,
      url: '/a2.jpeg',
      alt: language === 'en' ? 'Forest path' : 'Waldpfad',
    },
    {
      id: 3,
      url: '/a3.jpeg',
      alt: language === 'en' ? 'Desert sunset' : 'Wüstensonnenuntergang',
    },
    {
      id: 4,
      url: '/a.jpeg',
      alt: language === 'en' ? 'Ocean waves' : 'Meereswellen',
    },
   
    {
      id: 6,
      url: '/a6.jpeg',
      alt: language === 'en' ? 'Nature vista' : 'Naturpanorama',
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-brand-bg-light via-white to-brand-menu-hover flex items-center justify-center py-2 sm:py-4 md:py-8 lg:py-12 px-1 sm:px-4 lg:px-8 mb-2 sm:mb-0">
      <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        {/* Header Section - Enhanced and responsive */}
        <div className="text-center mb-2 sm:mb-4 lg:mb-8 space-y-2 sm:space-y-3 animate-in fade-in duration-1000">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-brand-heading font-comfortaa tracking-tight leading-tight">
            <span className="font-comfortaa italic text-brand-primary">SasaNdioSasa</span> {t.title}
          </h1>
          <div className="flex justify-center mb-1">
            <div className="h-1 w-16 sm:w-20 lg:w-28 bg-brand-primary rounded-full" />
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-heading/70 font-poppins max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2">
            {t.subtitle.split('\n').map((line, idx) => (
              <span key={idx} className={idx === 1 ? 'block font-bold' : ''}>{line}</span>
            ))}
          </p>
        </div>

        {/* Carousel Section - Improved responsiveness */}
        <div className="relative group mb-2 sm:mb-4 lg:mb-8 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            className="pb-14 sm:pb-16 lg:pb-20"
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.id}>
                <div className="relative w-full h-44 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-[22rem] 2xl:h-[26rem] max-w-sm xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-brand-primary/30 group/card border-4 border-brand-border hover:border-brand-primary">
                  {/* Image */}
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/card:scale-110"
                    style={{maxHeight: '100%', minHeight: '100%', maxWidth: '100%'}}
                  />
                  {/* Gradient Overlay for better badge visibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
                  {/* Bottom Info Bar - Optional enhancement */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-heading/90 to-transparent p-2 sm:p-3 lg:p-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                    <p className="text-white font-bold text-xs xs:text-sm sm:text-base lg:text-lg font-poppins truncate">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Enhanced and responsive */}
          <button 
            className="swiper-button-prev-custom absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white hover:bg-brand-primary text-brand-primary hover:text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border-3 border-brand-border hover:border-brand-primary"
            aria-label={language === 'en' ? 'Previous slide' : 'Vorherige Folie'}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="swiper-button-next-custom absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white hover:bg-brand-primary text-brand-primary hover:text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border-3 border-brand-border hover:border-brand-primary"
            aria-label={language === 'en' ? 'Next slide' : 'Nächste Folie'}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Optional: Bottom CTA or Info */}
        <div className="text-center mt-2 sm:mt-6 lg:mt-10">
          <p className="text-brand-heading/60 text-xs sm:text-sm md:text-base lg:text-lg font-poppins italic max-w-lg md:max-w-xl mx-auto px-2">
            {language === 'en' 
              ? 'Each journey with us contributes to sustainable development and positive community impact.' 
              : 'Jede Reise mit uns trägt zur nachhaltigen Entwicklung und positiven Gemeinschaftswirkung bei.'}
          </p>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          background: #c3512f;
          opacity: 0.4;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          background: #883d1f;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;