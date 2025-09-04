"use client";

import { useState } from 'react';
import Image from 'next/image'; // Import next/image
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/photo1.jpg',
    title: 'Hackathon 2025',
    category: 'Events',
  },
  {
    id: 2,
    src: '/photo2.jpg',
    title: 'Hackhaven',
    category: 'Hackathon',
  },
  {
    id: 3,
    src: '/photo3.jpg',
    title: 'Community Meetup',
    category: 'Community',
  },
  {
    id: 4,
    src: '/photo4.jpg',
    title: 'Hackathon',
    category: 'Hackathon',
  },
  {
    id: 5,
    src: '/photo5.jpg',
    title: 'Coding Session',
    category: 'Workshops',
  },
  {
    id: 6,
    src: '/photo6.jpg',
    title: 'Community Meetup',
    category: 'Community',
  },
  {
    id: 7,
    src: '/photo7.jpg',
    title: 'Networking Event',
    category: 'Community',
  },
  {
    id: 8,
    src: '/photo8.jpg',
    title: 'Tech Talk',
    category: 'Events',
  }
];

const categories = ['All', 'Events', 'Workshops', 'Community', 'Awards'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore moments from our events, workshops, hackathons, and community gatherings. 
            See the passion and innovation that drives our community forward.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Card 
              key={image.id}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
