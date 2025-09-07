'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PastEventsSection = () => {
  const events = [
    {
      id: 1,
      image: '/a13ce9267499b27267124e56d44f45aac94e5d09.png',
      title: 'Lights. Camera. Startup: Fireside Chat b/w Tharun Bhascker & Pavan Allena',
      description: 'Understanding the often missed but starking similarities between the world of entrepreneurship & filmmaking.',
      size: 'large'
    },
    {
      id: 2,
      image: '/d00c2b026538ec823982f0fddf18eb71a1a85e81.png',
      title: 'Building Global Startups From Local Ideas: Masterclass with Robert Schultz',
      description: 'Unravel how local expertise and skills can become the fulcrum of startups that reshape the global industries.',
      size: 'small'
    },
    {
      id: 3,
      image: '/60ec8723919ebf312f295e9e1de778c186975152.png',
      title: 'Can Schools Be For Profit: Fireside Chat b/w Aisshwarya DKS Hegde & Pavan Allena',
      description: 'How schools can turn into startups and inspire their students to think entrepreneurially & teachers to contribute deeply.',
      size: 'small'
    }
  ];

  return (
    <section className="relative w-full bg-[#f4f4ff] p-[60px]">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto mb-[34px]">
        <div className="flex items-start justify-between">
          {/* Title and subtitle */}
          <div className="flex flex-col gap-2">
            <h2 
              className="text-[#111827] capitalize"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: '44px',
                fontWeight: 600,
                lineHeight: '44px',
                letterSpacing: '-1.76px'
              }}
            >
              Past Events
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
              Re-watch our past successful sessions.
            </p>
          </div>

          {/* View All Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center justify-center gap-4 h-11 px-4 py-2 rounded-lg border border-[#4242ff] backdrop-blur-[32px]"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(50, 50, 230, 0.1) 0%, rgba(50, 50, 230, 0) 100%)`
            }}
          >
            <span 
              className="text-[#4242ff]"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '27px'
              }}
            >
              View All
            </span>
          </motion.button>
        </div>
      </div>

      {/* Events Container */}
      <div className="max-w-[1320px] mx-auto">
        <div className="relative bg-white/10 backdrop-blur-[60px] rounded-3xl p-5 h-[656px] border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)]">
          {/* Background circles */}
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
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="w-[1280px] flex gap-4">
              {/* Large Event Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-[800px] h-[616px] rounded-3xl overflow-hidden border-2 border-white group cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent 53.166%, #000000 100%), url('${events[0].image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 
                    className="text-white mb-2"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '28px',
                      letterSpacing: '-0.96px'
                    }}
                  >
                    {events[0].title}
                  </h3>
                  <p 
                    className="text-gray-100"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px'
                    }}
                  >
                    {events[0].description}
                  </p>
                </div>
              </motion.div>

              {/* Small Event Cards */}
              <div className="flex-1 flex flex-col gap-4">
                {events.slice(1).map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                    className="relative h-[300px] rounded-3xl overflow-hidden border-2 border-white group cursor-pointer"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, transparent 53.166%, #000000 100%), url('${event.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 
                        className="text-white mb-2"
                        style={{
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontSize: '24px',
                          fontWeight: 600,
                          lineHeight: '28px',
                          letterSpacing: '-0.96px'
                        }}
                      >
                        {event.title}
                      </h3>
                      <p 
                        className="text-gray-100"
                        style={{
                          fontFamily: 'var(--font-plus-jakarta)',
                          fontSize: '16px',
                          fontWeight: 400,
                          lineHeight: '24px'
                        }}
                      >
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;