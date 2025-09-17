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
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth - 32 : 1016; // Mobile: viewport width - padding, Desktop: card width
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
    <section className="w-full bg-[#f4f4ff] px-4 py-8 md:px-10 md:py-10 lg:p-[60px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-9"
        >
          <h2
            className="text-[#111827] capitalize mb-3 text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-tight tracking-[-1.2px] md:tracking-[-1.5px] lg:tracking-[-1.76px]"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
            }}
          >
            Watch Us In Action
          </h2>
          <p
            className="text-[#4b5563] text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] px-0 md:px-8 lg:px-0"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
            }}
          >
            We are building a future-ready ecosystem where ideas spark, partners collaborate, and entrepreneurial talent thrives.
          </p>
        </motion.div>

        {/* Video Container */}
        <div className="relative bg-white/10 backdrop-blur-[60px] rounded-2xl lg:rounded-3xl p-2 md:p-3 lg:p-4 border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)]">
          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-2 md:gap-3 lg:gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative min-w-[calc(100vw-32px)] md:min-w-[calc(100vw-80px)] lg:min-w-[1000px] h-[400px] md:h-[500px] lg:h-[600px] rounded-xl lg:rounded-2xl overflow-hidden border-2 border-white group cursor-pointer snap-center"
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
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6 text-white">
                  <h3
                    className="mb-2 md:mb-3 text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-tight tracking-[-0.5px] md:tracking-[-0.75px] lg:tracking-[-0.96px]"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                    }}
                  >
                    <ol className="list-decimal" start={1}>
                      <li className="ml-6 md:ml-8 lg:ml-9">
                        {video.title}
                      </li>
                    </ol>
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[1.5] line-clamp-3 md:line-clamp-none"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                    }}
                  >
                    {video.description}
                  </p>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                className="absolute left-2 md:left-3 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                disabled={currentIndex === 0}
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="absolute right-2 md:right-3 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                disabled={currentIndex === videos.length - 1}
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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