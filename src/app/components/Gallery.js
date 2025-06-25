'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const galleryMedia = [
    // Original Images
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (5).jpeg',
      alt: 'Delicious MyLahore Dish',
      category: 'Main Course',
      type: 'image'
    },
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (4).jpeg',
      alt: 'Traditional Curry',
      category: 'Curry',
      type: 'image'
    },
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (6).jpeg',
      alt: 'Grilled Specialties',
      category: 'Grill',
      type: 'image'
    },
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.07 AM.jpeg',
      alt: 'Fresh Ingredients',
      category: 'Ingredients',
      type: 'image'
    },
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (7).jpeg',
      alt: 'Restaurant Ambiance',
      category: 'Ambiance',
      type: 'image'
    },
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.08 AM (1).jpeg',
      alt: 'Chef Special',
      category: 'Chef Special',
      type: 'image'
    },
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.08 AM.jpeg',
      alt: 'Family Dining',
      category: 'Dining',
      type: 'image'
    },
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (3).jpeg',
      alt: 'Biryani Delight',
      category: 'Rice',
      type: 'image'
    },
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (2).jpeg',
      alt: 'Tandoori Special',
      category: 'Tandoor',
      type: 'image'
    },
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (1).jpeg',
      alt: 'Restaurant Interior',
      category: 'Interior',
      type: 'image'
    },
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.06 AM.jpeg',
      alt: 'Food Presentation',
      category: 'Presentation',
      type: 'image'
    },
    // New Image
    {
      src: '/WhatsApp Image 2025-06-24 at 11.36.11 AM.jpeg',
      alt: 'Culinary Excellence',
      category: 'Chef Special',
      type: 'image'
    },
    // Original Video
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.08 AM.mp4',
      alt: 'MyLahore Experience',
      category: 'Experience',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.08 AM (1).jpeg'
    },
    // New Videos
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.08 AM (1).mp4',
      alt: 'Kitchen Behind the Scenes',
      category: 'Behind the Scenes',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (5).jpeg'
    },
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.08 AM (2).mp4',
      alt: 'Food Preparation',
      category: 'Food Prep',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (4).jpeg'
    },
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.09 AM.mp4',
      alt: 'Restaurant Atmosphere',
      category: 'Ambiance',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (7).jpeg'
    },
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.09 AM (1).mp4',
      alt: 'Cooking Process',
      category: 'Food Prep',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (6).jpeg'
    },
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.09 AM (2).mp4',
      alt: 'Dining Experience',
      category: 'Dining',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.08 AM.jpeg'
    },
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.10 AM.mp4',
      alt: 'Chef in Action',
      category: 'Chef Special',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.11 AM.jpeg'
    },
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.12 AM (1).mp4',
      alt: 'Food Service',
      category: 'Service',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (3).jpeg'
    },
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.12 AM (2).mp4',
      alt: 'Restaurant Interior Tour',
      category: 'Interior',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (1).jpeg'
    },
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.12 AM (3).mp4',
      alt: 'Food Presentation',
      category: 'Presentation',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.06 AM.jpeg'
    },
    {
      src: '/WhatsApp Video 2025-06-24 at 11.36.12 AM.mp4',
      alt: 'MyLahore Story',
      category: 'Experience',
      type: 'video',
      poster: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (2).jpeg'
    },
    // New Images
    { src: '/Platter3.webp', alt: 'Mixed Platter 3', category: 'Platters', type: 'image' },
    { src: '/Platter2.webp', alt: 'Mixed Platter 2', category: 'Platters', type: 'image' },
    { src: '/Platter.webp', alt: 'Mixed Platter', category: 'Platters', type: 'image' },
    { src: '/Nann.webp', alt: 'Fresh Naan', category: 'Breads', type: 'image' },
    { src: '/Menu.webp', alt: 'Restaurant Menu', category: 'Menu', type: 'image' },
    { src: '/Main_door.webp', alt: 'Main Entrance', category: 'Ambiance', type: 'image' },
    { src: '/lahore-hero.webp', alt: 'Restaurant Hero', category: 'Ambiance', type: 'image' },
    { src: '/HeroSectionNewPic.jpg', alt: 'Hero Section New', category: 'Ambiance', type: 'image' },
    { src: '/Gallery.webp', alt: 'Gallery Interior', category: 'Ambiance', type: 'image' },
    { src: '/2025-02-19.webp', alt: 'Special Event 2025', category: 'Events', type: 'image' },
    { src: '/Ambiance.webp', alt: 'Restaurant Ambiance', category: 'Ambiance', type: 'image' },
    { src: '/BBQ.webp', alt: 'BBQ Platter', category: 'BBQ', type: 'image' },
    { src: '/BBq2.jpg', alt: 'BBQ Platter 2', category: 'BBQ', type: 'image' },
    { src: '/BBQ3.webp', alt: 'BBQ Platter 3', category: 'BBQ', type: 'image' },
    { src: '/Beautifu;.webp', alt: 'Beautiful Restaurant', category: 'Ambiance', type: 'image' },
  ];

  const categories = [
    'All', 
    'Main Course', 
    'Curry', 
    'Grill', 
    'Rice', 
    'Tandoor', 
    'Chef Special', 
    'Dining', 
    'Ambiance', 
    'Interior', 
    'Presentation', 
    'Ingredients', 
    'Experience',
    'Behind the Scenes',
    'Food Prep',
    'Service',
    'Platters',
    'Breads',
    'Menu',
    'Events',
    'BBQ'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMedia = selectedCategory === 'All' 
    ? galleryMedia 
    : galleryMedia.filter(media => media.category === selectedCategory);

  const openModal = (media) => {
    setSelectedMedia(media);
    setIsVideoPlaying(true);
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setIsVideoPlaying(false);
  };

  const nextMedia = () => {
    const currentIndex = filteredMedia.findIndex(media => media.src === selectedMedia.src);
    const nextIndex = (currentIndex + 1) % filteredMedia.length;
    setSelectedMedia(filteredMedia[nextIndex]);
    setIsVideoPlaying(true);
  };

  const prevMedia = () => {
    const currentIndex = filteredMedia.findIndex(media => media.src === selectedMedia.src);
    const prevIndex = currentIndex === 0 ? filteredMedia.length - 1 : currentIndex - 1;
    setSelectedMedia(filteredMedia[prevIndex]);
    setIsVideoPlaying(true);
  };

  const toggleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
    toggleVideoPlay();
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey through our culinary world
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredMedia.map((media, index) => (
            <motion.div
              key={media.src}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openModal(media)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {media.type === 'video' ? (
                  <video
                    src={media.src}
                    poster={media.poster}
                    className="w-full h-auto object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                )}
                
                {/* Video Play Icon Overlay */}
                {media.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-3">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg">{media.alt}</h3>
                    <p className="text-sm opacity-90">{media.category}</p>
                    {media.type === 'video' && (
                      <p className="text-xs opacity-75">Click to play</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMedia.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No media found for this category.</p>
          </motion.div>
        )}

        {/* Media Modal */}
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {selectedMedia.type === 'video' && (
                <button
                  onClick={handleVideoClick}
                  className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
              )}

              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.src}
                  poster={selectedMedia.poster}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                  muted
                  loop
                  autoPlay={isVideoPlaying}
                  playsInline
                  controls={false}
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="font-semibold text-xl mb-2">{selectedMedia.alt}</h3>
                <p className="text-sm opacity-90">{selectedMedia.category}</p>
                {selectedMedia.type === 'video' && (
                  <p className="text-xs opacity-75 mt-1">
                    {isVideoPlaying ? 'Playing' : 'Paused'} • Click to {isVideoPlaying ? 'pause' : 'play'}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 