'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Masterclass {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
}

interface OtherMasterclassesSectionProps {
  title?: string;
  masterclasses?: Masterclass[];
}

const OtherMasterclassesSection = ({
  title = 'Other Masterclass By Bower',
  masterclasses = [
    {
      id: 1,
      title: 'Innovation Fest 2025',
      date: 'July 15, 2025',
      image: '/59a3e41c2b4801f75e2a8fdd542b15e36bbfbf72.png',
      link: '/programs/masterclasses/innovation-fest-2025'
    },
    {
      id: 2,
      title: 'Innovation Fest 2025',
      date: 'July 15, 2025',
      image: '/1064367165141086184320185daa9b91e6ed31d5.png',
      link: '/programs/masterclasses/innovation-fest-2025'
    },
    {
      id: 3,
      title: 'Innovation Fest 2025',
      date: 'July 15, 2025',
      image: '/2a5c1364991bf39b57e28c0398f9a0b6e19fa869.png',
      link: '/programs/masterclasses/innovation-fest-2025'
    }
  ]
}: OtherMasterclassesSectionProps) => {
  return (
    <section className="relative w-full bg-[#1c1b1e] py-10 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(1,1,39,1) 0%, rgba(1,1,75,1) 25.5%, rgba(0,0,111,1) 51%, rgba(1,1,75,1) 75.5%, rgba(1,1,39,1) 100%)'
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-9"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-white capitalize tracking-[-1.76px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Events Container with glass morphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative backdrop-blur-[60px] rounded-[24px] border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)] p-4 md:p-6 overflow-hidden"
        >
          {/* Decorative ellipses */}
          <div className="absolute -left-[430px] top-1/2 -translate-y-1/2 w-[738px] h-[738px] opacity-30 pointer-events-none">
            <Image
              src="/aa95ca462609d629ea62a1e467f24a780613ed64.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute -right-[430px] top-1/2 -translate-y-1/2 w-[738px] h-[738px] opacity-30 pointer-events-none">
            <Image
              src="/8364c15fd75f52cb16654eef802935ed0c26e3ed.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Masterclass Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[18.444px]">
            {masterclasses.map((masterclass, index) => (
              <motion.div
                key={masterclass.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={masterclass.link}>
                  <div className="relative h-[350px] md:h-[380px] lg:h-[400px] rounded-[16px] overflow-hidden">
                    {/* Background Image */}
                    <Image
                      src={masterclass.image}
                      alt={masterclass.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Content Card */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="backdrop-blur-[48px] bg-[#26262b]/90 mix-blend-overlay rounded-[12px] border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] p-3"
                      >
                        <div className="flex flex-col gap-2">
                          <h3
                            className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-white tracking-[-0.96px]"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                          >
                            {masterclass.title}
                          </h3>
                          <p
                            className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-300"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                          >
                            {masterclass.date}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#4242ff]/0 group-hover:bg-[#4242ff]/10 transition-colors duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --other-masterclass-bg: #1c1b1e;
          --other-masterclass-card-bg: #26262b;
          --other-masterclass-border: #303038;
          --other-masterclass-white: #ffffff;
          --other-masterclass-text-gray: #d1d5db;
          --other-masterclass-gradient-start: rgba(1, 1, 39, 1);
          --other-masterclass-gradient-mid: rgba(0, 0, 111, 1);
        }

        @media (max-width: 768px) {
          .backdrop-blur-\\[60px\\] {
            backdrop-filter: blur(40px);
          }
        }

        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default OtherMasterclassesSection;