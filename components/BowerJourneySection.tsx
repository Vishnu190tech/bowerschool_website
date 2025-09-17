'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BowerJourneySection = () => {
  const cards = [
    {
      title: 'Take a Quiz',
      description: 'Not sure whats your fit? Take a quiz',
      buttonText: 'Start',
      backgroundImage: '/90d518ebcd6ae34a912db6b52812093fad721143.png',
      overlayImage: '/47f2ab78b11ecb8ea984c7be90e716ef9d199291.png'
    },
    {
      title: '1:1 Consultation',
      description: 'Get expert guidance on your future at Bower',
      buttonText: 'Book',
      backgroundImage: '/c2bec61a168f04808f5d43cfd94501e2b9b24871.png',
      overlayImage: '/47f2ab78b11ecb8ea984c7be90e716ef9d199291.png'
    },
    {
      title: 'Apply Now',
      description: 'Ready for a future of innovation?',
      buttonText: 'Join Us',
      backgroundImage: '/ff8a160a2daa72ea1e2bea0d09a4a4831c4c868f.png',
      overlayImage: '/47f2ab78b11ecb8ea984c7be90e716ef9d199291.png'
    }
  ];

  return (
    <section className="w-full bg-[#f4f4ff] px-4 py-8 md:px-10 md:py-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 md:gap-8 items-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-9 items-center w-full"
        >
          <div className="flex flex-col gap-3 items-center">
            <h2
              className="text-[#111827] capitalize text-center text-[28px] md:text-[36px] lg:text-[44px] leading-tight"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontWeight: 600,
                letterSpacing: '-1.76px'
              }}
            >
              Start Your Bower Journey Now
            </h2>
          </div>
        </motion.div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[18.444px] w-full max-w-[1248px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden relative flex flex-col justify-end pb-4 px-4"
              style={{
                backgroundImage: `url('${card.backgroundImage}'), url('${card.overlayImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Content Container with Glassmorphic Effect */}
              <div 
                className="backdrop-blur backdrop-filter rounded-lg p-4 relative border-[0.5px] border-[rgba(209,213,219,0.8)]"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(270deg, rgba(255, 255, 255, 0.03) 0%, rgba(122, 187, 30, 0.255) 43.75%, rgba(122, 187, 30, 0.4) 84.615%, rgba(122, 187, 30, 0.4) 99.99%, rgba(255, 255, 255, 0.03) 100%)'
                }}
              >
                <div className="flex flex-col gap-[7.385px]">
                  {/* Title */}
                  <h3
                    className="text-[#f0f0ff] text-center text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[1.3]"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)'
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#aaaab9] text-[14px] md:text-[15px] lg:text-[16px] leading-[1.2]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {card.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-10 md:h-11 bg-[#4242ff] rounded-md flex items-center justify-center relative overflow-hidden"
                    style={{
                      boxShadow: '0px 0px 0px 1px #4242ff, 0px 1px 3px 0px rgba(0,0,0,0.1)'
                    }}
                  >
                    <span
                      className="text-white relative z-10 text-[16px] md:text-[18px] lg:text-[20px] font-bold"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                        textShadow: '#4242ff 0px 1px 3px'
                      }}
                    >
                      {card.buttonText}
                    </span>
                    <div className="absolute inset-0 shadow-[0px_1px_0.75px_0px_inset_rgba(255,255,255,0.12),0px_-1px_0px_0px_inset_#4242ff]" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BowerJourneySection;