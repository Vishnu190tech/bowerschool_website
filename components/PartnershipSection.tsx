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
    <section className="w-full bg-[#f4f4ff] px-[60px] py-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
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
            Shape the Future with Us
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
            Partnerships fuel our classrooms, power our labs, and unlock new possibilities for every student.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="bg-white/10 backdrop-blur-[60px] rounded-3xl p-6 border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f9faff] rounded-3xl p-2 h-[600px] flex flex-col gap-4 relative"
              >
                {/* White border */}
                <div className="absolute inset-[-2px] border-2 border-white rounded-[26px] pointer-events-none" />
                
                {/* Image */}
                <div className="relative w-full aspect-[612/442] bg-white rounded-2xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text Content */}
                <div className="px-4 flex-1 flex flex-col gap-4">
                  <h3 
                    className="text-[#111827]"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '24px',
                      letterSpacing: '-0.96px'
                    }}
                  >
                    {card.title}
                  </h3>
                  <p 
                    className="text-[#4b5563]"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '27px'
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