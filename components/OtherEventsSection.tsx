'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OtherEventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'Innovation Fest 2025',
      date: 'July 15, 2025',
      mainImage: '/59a3e41c2b4801f75e2a8fdd542b15e36bbfbf72.png',
      overlayImage1: '/0fe85164234192b7647d265b4cb764411f45724b.png',
      overlayImage2: '/d7c1945438cc2221ddd2d1e3e26436381fc82302.png',
      width: 600
    },
    {
      id: 2,
      title: 'Innovation Fest 2025',
      date: 'July 15, 2025',
      mainImage: '/1064367165141086184320185daa9b91e6ed31d5.png',
      overlayImage: '/91be86b9665c4a1deaa4b917e54785f0a763ba73.png',
      width: 'flex-1'
    },
    {
      id: 3,
      title: 'Innovation Fest 2025',
      date: 'July 15, 2025',
      mainImage: '/2a5c1364991bf39b57e28c0398f9a0b6e19fa869.png',
      width: 'flex-1'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#1e1b4b] to-[#0f0e29] px-20 py-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-9"
        >
          <h2 
            className="text-white capitalize"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '44px',
              fontWeight: 600,
              lineHeight: '44px',
              letterSpacing: '-1.76px'
            }}
          >
            Other Events ByBower
          </h2>
        </motion.div>

        {/* Events Container */}
        <div className="relative backdrop-blur-[60px] rounded-3xl h-[431px] border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)]">
          {/* Background decorative circles */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -top-[200px] -left-[200px] w-[738px] h-[738px]">
              <Image
                src="/aa95ca462609d629ea62a1e467f24a780613ed64.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-[200px] -right-[200px] w-[738px] h-[738px]">
              <Image
                src="/8364c15fd75f52cb16654eef802935ed0c26e3ed.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Events Grid */}
          <div className="relative z-10 h-full flex items-center justify-center px-6">
            <div className="flex gap-[18px] w-[1248px]">
              {/* Large Event Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-[600px] h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  backgroundImage: `url('${events[0].mainImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay images for first card */}
                {events[0].overlayImage1 && (
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('${events[0].overlayImage1}'), url('${events[0].overlayImage2}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      mixBlendMode: 'normal'
                    }}
                  />
                )}

                {/* Info Card */}
                <div className="absolute bottom-3 left-3 bg-[#26262b] backdrop-blur-3xl rounded-xl border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                  <div className="p-3">
                    <h3 
                      className="text-white mb-2"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                        fontSize: '24px',
                        fontWeight: 600,
                        lineHeight: '24px',
                        letterSpacing: '-0.96px'
                      }}
                    >
                      {events[0].title}
                    </h3>
                    <p 
                      className="text-gray-300"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px'
                      }}
                    >
                      {events[0].date}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Smaller Event Cards */}
              {events.slice(1).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="relative flex-1 h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
                  style={{
                    backgroundImage: event.overlayImage 
                      ? `url('${event.mainImage}'), url('${event.overlayImage}')`
                      : `url('${event.mainImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Info Card */}
                  <div className="absolute bottom-3 left-3 bg-[#26262b] backdrop-blur-3xl rounded-xl border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                    <div className="p-3">
                      <h3 
                        className="text-white mb-2"
                        style={{
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontSize: '24px',
                          fontWeight: 600,
                          lineHeight: '24px',
                          letterSpacing: '-0.96px'
                        }}
                      >
                        {event.title}
                      </h3>
                      <p 
                        className="text-gray-300"
                        style={{
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontSize: '16px',
                          fontWeight: 400,
                          lineHeight: '24px'
                        }}
                      >
                        {event.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherEventsSection;