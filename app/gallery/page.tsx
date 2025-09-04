"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card } from '@/components/ui/card';
import { X, ZoomIn } from 'lucide-react';
import { Variants } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: '/photo1.jpg',
    title: 'Hackathon 2025',
    category: 'Events',
    description: 'Our biggest hackathon yet with over 500 participants from around the world.'
  },
  {
    id: 2,
    src: '/photo2.jpg',
    title: 'Hackhaven',
    category: 'Hackathon',
    description: 'Intensive coding workshop focusing on modern web development frameworks.'
  },
  {
    id: 3,
    src: '/photo3.jpg',
    title: 'Community Meetup',
    category: 'Community',
    description: 'Monthly community gathering where members share their latest projects.'
  },
  {
    id: 4,
    src: '/photo4.jpg',
    title: 'Hackathon',
    category: 'Hackathon',
    description: 'Celebrating the winners of our annual innovation challenge.'
  },
  {
    id: 5,
    src: '/photo5.jpg',
    title: 'Coding Session',
    category: 'Workshops',
    description: 'Collaborative coding session working on open source projects.'
  },
  {
    id: 6,
    src: '/photo6.jpg',
    title: 'Community Meetup',
    category: 'Community',
    description: 'Demo day where teams showcase their innovative solutions.'
  },
  {
    id: 7,
    src: '/photo7.jpg',
    title: 'Networking Event',
    category: 'Community',
    description: 'Professional networking event connecting industry leaders with emerging talent.'
  },
  {
    id: 8,
    src: '/photo8.jpg',
    title: 'Tech Talk',
    category: 'Events',
    description: 'Expert-led session on the latest trends in artificial intelligence.'
  },
  {
    id: 9,
    src: '/photo9.jpg',
    title: 'Startup Pitch',
    category: 'Community',
    description: 'Startup pitch competition with venture capital investors as judges.'
  },
  {
    id: 10,
    src: '/photo10.jpg',
    title: 'Code Review',
    category: 'Hackathon',
    description: 'Peer code review session helping developers improve their skills.'
  },
  {
    id: 11,
    src: '/photo11.jpg',
    title: 'Award Ceremony',
    category: 'Awards',
    description: 'Celebrating the winners of our annual innovation challenge.'
  },
  {
    id: 12,
    src: '/photo12.jpg',
    title: 'Dev Gathering',
    category: 'Hackathon',
    description: 'Annual global summit bringing together tech leaders from around the world.'
  },
  {
    id: 13,
    src: '/photo13.jpg',
    title: 'Hack Heist',
    category: 'Hackathon',
    description: '24-hour hackathon focused on rapid prototyping and innovation.'
  }
];

const categories = ['All', 'Events', 'Workshops', 'Community', 'Awards'];
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};


export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-green-50/50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-green-950/20" />
        
        <motion.div 
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Explore moments from our events, workshops, hackathons, and community gatherings. 
            See the passion and innovation that drives our community forward.
          </motion.p>

          {/* Category Filter */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={galleryRef}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card 
                    className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <motion.img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <motion.h3 
                            className="font-semibold text-lg mb-1"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {image.title}
                          </motion.h3>
                          <motion.p 
                            className="text-sm opacity-90 mb-2"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {image.category}
                          </motion.p>
                          <motion.p 
                            className="text-xs opacity-75"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {image.description}
                          </motion.p>
                        </div>
                        
                        <motion.div 
                          className="absolute top-4 right-4"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                            <ZoomIn className="h-4 w-4 text-white" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-5xl max-h-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-8 w-8" />
              </motion.button>
              
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 text-lg mb-2">{selectedImage.category}</p>
                <p className="text-gray-400">{selectedImage.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}