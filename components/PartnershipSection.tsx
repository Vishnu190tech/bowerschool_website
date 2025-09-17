'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PartnershipSection = () => {
  const cards = [
    {
      id: 1,
      image: '/cba5fb95b48ac13c0dfd9b74be682693c46a69ae.png',
      title: 'Fuel Student Ventures',
      description: 'Support promising startups through mentorship, incubation, and early-stage funding.'
    },
    {
      id: 2,
      image: '/46f7ab2897a1c9df10378d6584185b5b62e967b2.png',
      title: 'Collaborate on Research & Innovation',
      description: 'Join forces on bold experiments and emerging tech projects through joint research labs.'
    },
    {
      id: 3,
      image: '/93317678d33a9ade7e1863b4792d6063372e731b.png',
      title: 'Shape the Talent Pipeline',
      description: 'Access high-potential student talent through internships, live projects, and recruitment.'
    },
    {
      id: 4,
      image: '/bcdd2bf65b0343947e0548d49c25a8f59cf81c03.png',
      title: 'Co-Create Learning Experiences',
      description: 'Bring industry insight into our classrooms through co-designed curriculum, guest lectures, and real case studies.'
    }
  ];

  return (
    <section className="w-full bg-[#f4f4ff] px-4 py-8 md:px-10 md:py-10 lg:px-[60px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2
            className="text-[#111827] capitalize mb-3 text-[28px] md:text-[36px] lg:text-[44px] leading-tight"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontWeight: 600,
              letterSpacing: '-1.76px'
            }}
          >
            Shape the Future with Us
          </h2>
          <p
            className="text-[#4b5563] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] px-0 md:px-8 lg:px-0"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontWeight: 400
            }}
          >
            Partnerships fuel our classrooms, power our labs, and unlock new possibilities for every student.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="bg-white/10 backdrop-blur-[60px] rounded-2xl lg:rounded-3xl p-3 md:p-4 lg:p-6 border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f9faff] rounded-2xl lg:rounded-3xl p-2 h-[400px] md:h-[500px] lg:h-[600px] flex flex-col gap-3 md:gap-4 relative"
              >
                {/* White border */}
                <div className="absolute inset-[-2px] border-2 border-white rounded-[18px] md:rounded-[22px] lg:rounded-[26px] pointer-events-none" />
                
                {/* Image */}
                <div className="relative w-full aspect-[612/442] bg-white rounded-xl lg:rounded-2xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text Content */}
                <div className="px-3 md:px-4 flex-1 flex flex-col gap-2 md:gap-3 lg:gap-4">
                  <h3
                    className="text-[#111827] text-[18px] md:text-[20px] lg:text-[24px] leading-tight"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontWeight: 600,
                      letterSpacing: '-0.96px'
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[#4b5563] text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5]"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontWeight: 400
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;