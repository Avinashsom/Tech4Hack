"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Hackathon 2024',
    category: 'Events'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Team Workshop',
    category: 'Workshops'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Community Meetup',
    category: 'Community'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Award Ceremony',
    category: 'Awards'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Coding Session',
    category: 'Workshops'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Project Demo',
    category: 'Events'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Networking Event',
    category: 'Community'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tech Talk',
    category: 'Workshops'
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
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
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