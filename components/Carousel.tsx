import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ImageCarousel = () => {
  // Sample images array - replace with your own images
  const images = [
    {
      id: 1,
      url: '/a.jpeg',
      alt: 'Mountain landscape',
      title: 'Majestic Mountains'
    },
    {
      id: 2,
      url: '/a2.jpeg',
      alt: 'Forest path',
      title: 'Enchanted Forest'
    },
    {
      id: 3,
      url: '/a3.jpeg',
      alt: 'Desert sunset',
      title: 'Desert Dreams'
    },
    {
      id: 4,
      url: '/a4.jpeg',
      alt: 'Ocean waves',
      title: 'Ocean Paradise'
    },
    {
      id: 5,
      url: '/a5.jpeg',
      alt: 'City skyline',
      title: 'Urban Escape'
    },
     {
      id: 6,
      url: '/a6.jpeg',
      alt: 'City skyline',
      title: 'Urban Escape'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-brand-menu-hover via-white to-brand-border flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12 animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-heading mb-4 font-comfortaa tracking-tight">
            Our Commitment to SDGs
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-poppins">
            How SasaNdioSasa contributes to Sustainable Development Goals
          </p>
        </div>
        
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
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
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="rounded-2xl pb-16"
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.id}>
                <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-brand-primary/20 group/card">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white font-comfortaa mb-2">
                        {image.title}
                      </h3>
                      <div className="w-16 h-1 bg-brand-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold font-poppins shadow-lg transform transition-all duration-300 hover:bg-brand-secondary hover:scale-110">
                    #{index + 1}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-brand-primary text-brand-primary hover:text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border-2 border-brand-border hover:border-brand-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-brand-primary text-brand-primary hover:text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border-2 border-brand-border hover:border-brand-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

  
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          background: #c3512f;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;