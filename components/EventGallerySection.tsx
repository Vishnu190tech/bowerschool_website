'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface EventGallerySectionProps {
  event?: {
    date?: string;
    galleryImages?: string[] | any;
  };
}

const EventGallerySection = ({ event }: EventGallerySectionProps) => {
  // Parse gallery images if it's a JSON field
  let galleryImages: string[] = [];
  if (event?.galleryImages) {
    if (Array.isArray(event.galleryImages)) {
      galleryImages = event.galleryImages;
    } else if (typeof event.galleryImages === 'object' && event.galleryImages !== null) {
      // If it's a JSON object from database, extract array
      galleryImages = Array.isArray(event.galleryImages) ? event.galleryImages : [];
    }
  }

  // Don't render if no gallery images
  if (galleryImages.length === 0) {
    return null;
  }

  // Default images if no gallery images provided
  const defaultImages = [
    {
      id: 1,
      src: '/1d7f9ce2dc89c79e42aeceaa2259b70f12128190.png',
      alt: 'A group of individuals collaborating around a table filled with laptops, sketches, and prototypes during a startup event',
      height: 664,
      position: 'left'
    },
    {
      id: 2,
      src: '/cc86786bfbe745e2fdee91f02040c5129750010d.png',
      alt: 'A group of individuals collaborating on a project at a startup event, surrounded by laptops and brainstorming materials',
      height: 443,
      position: 'right'
    },
    {
      id: 3,
      src: '/cdaa491ddabbe59a01a284407562bd613c68b747.png',
      alt: 'A group of individuals actively participating in a collaborative workshop, sharing ideas and working on projects together',
      height: 672,
      position: 'center'
    },
    {
      id: 4,
      src: '/1cb31895968d42437859feebd970202cff226489.png',
      alt: 'A group of individuals collaborating around a table filled with laptops and notepads during a startup event',
      height: 443,
      position: 'left'
    },
    {
      id: 5,
      src: '/325976abde9d8f64ede58c120a3878c72e2f66ce.png',
      alt: 'A group of individuals collaborating around a table filled with laptops and design materials during a startup event',
      height: 664,
      position: 'right'
    }
  ];

  // Use gallery images if available, otherwise use defaults
  // Ensure we always have at least 5 images by filling with defaults
  const processedImages = galleryImages.length > 0
    ? galleryImages.map((src, index) => ({
        id: index + 1,
        src,
        alt: 'Event gallery image',
        height: index % 2 === 0 ? 664 : 443,
        position: ['left', 'right', 'center'][index % 3]
      }))
    : [];

  // If we have less than 5 images, fill with defaults
  const images = [...processedImages];
  for (let i = processedImages.length; i < 5; i++) {
    images.push(defaultImages[i]);
  }

  // Format date for display
  const eventDate = event?.date
    ? new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'June 10, 2025';

  return (
    <section className="w-full bg-[#f4f4ff] px-4 py-8 md:px-10 md:py-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-3 mb-6 md:mb-8">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-16">
            {/* Title */}
            <div className="w-full lg:w-[608px]">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#111827] text-[24px] md:text-[32px] lg:text-[40px] font-semibold leading-tight tracking-[-1.6px]"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                }}
              >
                Concluded on {eventDate}
              </motion.h2>
            </div>

            {/* Description */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[#4b5563] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                }}
              >
                Join us for an exhilarating day of innovation and collaboration as startups sprint towards their goals. Discover the achievements and breakthroughs from the event.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="flex flex-col">
          {/* First Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-[52px] py-4 md:py-6 lg:py-8"
          >
            {/* Large image on left */}
            <div className="flex-1 relative h-[250px] md:h-[400px] lg:h-[664px] rounded-xl lg:rounded-2xl overflow-hidden border-2 border-white">
              <Image
                src={images[0]?.src || defaultImages[0].src}
                alt={images[0]?.alt || 'Event gallery image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Smaller image on right */}
            <div className="flex-1 relative h-[200px] md:h-[300px] lg:h-[443px] rounded-xl lg:rounded-2xl overflow-hidden border-2 border-white md:self-end">
              <Image
                src={images[1]?.src || defaultImages[1].src}
                alt={images[1]?.alt || 'Event gallery image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Second Row - Centered Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-end py-4 md:py-6 lg:py-8"
          >
            <div className="w-full md:w-[90%] lg:w-[1008px] h-[250px] md:h-[450px] lg:h-[672px] relative rounded-xl lg:rounded-2xl overflow-hidden border-2 border-white">
              <Image
                src={images[2]?.src || defaultImages[2].src}
                alt={images[2]?.alt || 'Event gallery image'}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1008px"
              />
            </div>
          </motion.div>

          {/* Third Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-[52px] py-4 md:py-6 lg:py-8"
          >
            {/* Smaller image on left */}
            <div className="flex-1 relative h-[200px] md:h-[300px] lg:h-[443px] rounded-xl lg:rounded-2xl overflow-hidden border-2 border-white md:self-end">
              <Image
                src={images[3]?.src || defaultImages[3].src}
                alt={images[3]?.alt || 'Event gallery image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Large image on right */}
            <div className="flex-1 relative h-[250px] md:h-[400px] lg:h-[664px] rounded-xl lg:rounded-2xl overflow-hidden border-2 border-white">
              <Image
                src={images[4]?.src || defaultImages[4].src}
                alt={images[4]?.alt || 'Event gallery image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventGallerySection;