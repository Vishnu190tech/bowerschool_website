'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const VideoCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const videos = [
    {
      id: 1,
      image: '/948f1eecdc67958178cc3d5365f24804495d93e5.png',
      title: 'Students go Hypothesis, Gain Real-world Experience',
      description: 'T-Hub stands at the epicentre of innovation, connecting startups, corporates, academia, investors, and governments. Its unrivalled impact is forging new paths and leaving a bold footprint in what we define as "disruptive innovation".'
    },
    {
      id: 2,
      image: '/9ea9a283db90bbf8fcc2e61995f9e571dd25df7a.png',
      title: 'From Hypothesis to Hustle',
      description: 'Students move beyond textbooks as they explore real problems, test assumptions, and build ventures from the ground up.'
    },
    {
      id: 3,
      image: '/d4cb66e48fd56e00ff0546a9918b45eaf9728f77.png',
      title: 'Students go Hypothesis, Gain Real-world Experience',
      description: 'T-Hub stands at the epicentre of innovation, connecting startups, corporates, academia, investors, and governments. Its unrivalled impact is forging new paths and leaving a bold footprint in what we define as "disruptive innovation".'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 1016; // Width of one card plus gap
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.max(0, currentIndex - 1));
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.min(videos.length - 1, currentIndex + 1));
      }
    }
  };

  return (
    <section className="w-full bg-[#f4f4ff] p-[60px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-9"
        >
          <h2 
            className="text-[#111827] capitalize mb-3"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '44px',
              fontWeight: 600,
              lineHeight: '44px',
              letterSpacing: '-1.76px'
            }}
          >
            Watch Us In Action
          </h2>
          <p 
            className="text-[#4b5563]"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '30px'
            }}
          >
            We are building a future-ready ecosystem where ideas spark, partners collaborate, and entrepreneurial talent thrives.
          </p>
        </motion.div>

        {/* Video Container */}
        <div className="relative bg-white/10 backdrop-blur-[60px] rounded-3xl p-4 border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)]">
          {/* Carousel */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative min-w-[1000px] h-[600px] rounded-2xl overflow-hidden border-2 border-white group cursor-pointer"
              >
                {/* Video/Image Background */}
                <div className="absolute inset-0">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="1000px"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 via-50% to-transparent" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '24px',
                      letterSpacing: '-0.96px'
                    }}
                  >
                    <ol className="list-decimal" start={1}>
                      <li className="ml-9">
                        {video.title}
                      </li>
                    </ol>
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px'
                    }}
                  >
                    {video.description}
                  </p>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {videos.length > 1 && (
            <>
              <button
                onClick={() => handleScroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                disabled={currentIndex === 0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                disabled={currentIndex === videos.length - 1}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoCarouselSection;