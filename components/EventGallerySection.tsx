'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EventGallerySection = () => {
  const images = [
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

  return (
    <section className="w-full bg-[#f4f4ff] px-20 py-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex gap-16">
            {/* Title */}
            <div className="w-[608px]">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#111827]"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontSize: '40px',
                  fontWeight: 600,
                  lineHeight: '40px',
                  letterSpacing: '-1.6px'
                }}
              >
                Concluded on June 10, 2025
              </motion.h2>
            </div>

            {/* Description */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[#4b5563]"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '30px'
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
            className="flex gap-[52px] py-8"
          >
            {/* Large image on left */}
            <div className="flex-1 relative h-[664px] rounded-2xl overflow-hidden border-2 border-white">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Smaller image on right */}
            <div className="flex-1 relative h-[443px] rounded-2xl overflow-hidden border-2 border-white">
              <Image
                src={images[1].src}
                alt={images[1].alt}
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
            className="flex justify-end py-8"
          >
            <div className="w-[1008px] h-[672px] relative rounded-2xl overflow-hidden border-2 border-white">
              <Image
                src={images[2].src}
                alt={images[2].alt}
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
            className="flex gap-[52px] py-8"
          >
            {/* Smaller image on left */}
            <div className="flex-1 relative h-[443px] rounded-2xl overflow-hidden border-2 border-white">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Large image on right */}
            <div className="flex-1 relative h-[664px] rounded-2xl overflow-hidden border-2 border-white">
              <Image
                src={images[4].src}
                alt={images[4].alt}
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