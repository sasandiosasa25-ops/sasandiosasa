'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'beaches', name: 'Beaches' },
    { id: 'stonetown', name: 'Stone Town' },
    { id: 'spices', name: 'Spice Tours' },
    { id: 'culture', name: 'Culture' },
    { id: 'learning', name: 'Language Learning' }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1320637/pexels-photo-1320637.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nungwi Beach Paradise',
      category: 'beaches',
      description: 'Crystal clear waters and white sand beaches'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Stone Town Architecture',
      category: 'stonetown',
      description: 'Historic Swahili architecture in UNESCO World Heritage site'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Spice Farm Tour',
      category: 'spices',
      description: 'Fresh cardamom pods on the spice island'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1630546/pexels-photo-1630546.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional Dhow at Sunset',
      category: 'culture',
      description: 'Traditional sailing boats against stunning sunsets'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/2832026/pexels-photo-2832026.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Prison Island Giant Tortoise',
      category: 'culture',
      description: 'Historic Prison Island and its famous giant tortoises'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Safari Blue Adventure',
      category: 'beaches',
      description: 'Snorkeling and sandbank exploration in Menai Bay'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Swahili Language Class',
      category: 'learning',
      description: 'Interactive Swahili learning sessions with local teachers'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/2832024/pexels-photo-2832024.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Jozani Forest Exploration',
      category: 'culture',
      description: 'Red Colobus monkeys in their natural habitat'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1083902/pexels-photo-1083902.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Stone Town Markets',
      category: 'stonetown',
      description: 'Vibrant local markets with spices and crafts'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cultural Language Immersion',
      category: 'learning',
      description: 'Learning Swahili through cultural experiences'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kendwa Beach Sunset',
      category: 'beaches',
      description: 'Spectacular sunsets at Kendwa Beach'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1171979/pexels-photo-1171979.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'House of Wonders',
      category: 'stonetown',
      description: 'Iconic Stone Town landmark and museum'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const selectedImageData = images.find(img => img.id === selectedImage);

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-sky-900 via-sky-700 to-emerald-600 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1320637/pexels-photo-1320637.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Zanzibar Gallery
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8 leading-relaxed">
              Discover the beauty of Zanzibar through our lens - from pristine beaches to cultural treasures
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-all duration-200 ${
                  selectedCategory === category.id 
                    ? 'bg-sky-600 hover:bg-sky-700 text-white' 
                    : 'text-gray-600 hover:text-sky-600 hover:border-sky-600'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative max-w-7xl mx-auto px-4 w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="lg"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </Button>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="lg"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="lg"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="max-w-5xl max-h-[90vh] flex items-center justify-center relative">
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.title}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImageData.title}
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                {selectedImageData.description}
              </p>
              <Badge className="bg-sky-600 text-white">
                {categories.find(cat => cat.id === selectedImageData.category)?.name}
              </Badge>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}