'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CampusLifeGalleryProps {
  images?: {
    main: string;
    side1: string;
    side2: string;
    side3: string;
    side4: string;
  };
}

const CampusLifeGallery = ({
  images = {
    main: '/2842135e3fbd52bbf07b834696c17e1b728cc496.png',
    side1: '/6177e4b9a2d950db00e420507157bd695b97ba31.png',
    side2: '/2595fe996b1735bf744c3f029aa5e2e7b3c454d4.png',
    side3: '/82f7e3e81a5358ee5b3824e6df7a54bd36f5b820.png',
    side4: '/cbc4214317de1bf19c15b14460111f61683500cd.png'
  }
}: CampusLifeGalleryProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full bg-[#f4f4ff] py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
        >
          {/* Gallery Container */}
          <div
            className="relative w-full max-w-[612px] h-[250px] md:h-[300px] lg:h-[350px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Side Images - Back Layer */}
            {/* Left Back Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isHovered ? 0.9 : 0.7,
                x: isHovered ? -60 : 0,
                rotate: isHovered ? -8 : -4,
                scale: isHovered ? 0.95 : 0.85
              }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="absolute left-[5%] md:left-[0%] top-[8%] w-[200px] md:w-[250px] lg:w-[300px] h-[200px] md:h-[250px] lg:h-[286px] z-10"
            >
              <div className="relative w-full h-full rounded-[12px] md:rounded-[14px] lg:rounded-[16px] overflow-hidden shadow-lg">
                <Image
                  src={images.side2}
                  alt="Campus life"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right Back Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: isHovered ? 0.9 : 0.7,
                x: isHovered ? 60 : 0,
                rotate: isHovered ? 8 : 4,
                scale: isHovered ? 0.95 : 0.85
              }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="absolute right-[5%] md:right-[0%] top-[8%] w-[200px] md:w-[250px] lg:w-[300px] h-[200px] md:h-[250px] lg:h-[286px] z-10"
            >
              <div className="relative w-full h-full rounded-[12px] md:rounded-[14px] lg:rounded-[16px] overflow-hidden shadow-lg">
                <Image
                  src={images.side1}
                  alt="Campus life"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Side Images - Middle Layer */}
            {/* Left Middle Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: isHovered ? 0.95 : 0.8,
                x: isHovered ? -40 : -10,
                rotate: isHovered ? -6 : -2,
                scale: isHovered ? 0.98 : 0.9
              }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.05 }}
              className="absolute left-[10%] md:left-[8%] lg:left-[10%] top-[5%] w-[200px] md:w-[250px] lg:w-[300px] h-[220px] md:h-[270px] lg:h-[310px] z-20"
            >
              <div className="relative w-full h-full rounded-[12px] md:rounded-[14px] lg:rounded-[16px] overflow-hidden shadow-xl">
                <Image
                  src={images.side4}
                  alt="Campus life"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right Middle Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: isHovered ? 0.95 : 0.8,
                x: isHovered ? 40 : 10,
                rotate: isHovered ? 6 : 2,
                scale: isHovered ? 0.98 : 0.9
              }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.05 }}
              className="absolute right-[10%] md:right-[8%] lg:right-[10%] top-[5%] w-[200px] md:w-[250px] lg:w-[300px] h-[220px] md:h-[270px] lg:h-[310px] z-20"
            >
              <div className="relative w-full h-full rounded-[12px] md:rounded-[14px] lg:rounded-[16px] overflow-hidden shadow-xl">
                <Image
                  src={images.side3}
                  alt="Campus life"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Main Center Image - Front Layer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: isHovered ? 1.05 : 1,
                y: isHovered ? -10 : 0
              }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.1 }}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[220px] md:w-[280px] lg:w-[300px] h-[250px] md:h-[300px] lg:h-[350px] z-30"
            >
              <div
                className="relative w-full h-full rounded-[14px] md:rounded-[16px] overflow-hidden"
                style={{
                  boxShadow: isHovered
                    ? '0px 26px 26px 0px rgba(0,0,0,0.25), 0px 59px 35px 0px rgba(0,0,0,0.15), 0px 104px 42px 0px rgba(0,0,0,0.08), 0px 163px 46px 0px rgba(0,0,0,0.02)'
                    : '0px 26px 26px 0px rgba(0,0,0,0.2), 0px 59px 35px 0px rgba(0,0,0,0.12), 0px 104px 42px 0px rgba(0,0,0,0.04), 0px 163px 46px 0px rgba(0,0,0,0)'
                }}
              >
                <Image
                  src={images.main}
                  alt="Campus life main"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --gallery-bg: #f4f4ff;
          --gallery-shadow-1: rgba(0, 0, 0, 0.2);
          --gallery-shadow-2: rgba(0, 0, 0, 0.12);
          --gallery-shadow-3: rgba(0, 0, 0, 0.04);
          --gallery-shadow-4: rgba(0, 0, 0, 0);
        }

        @media (max-width: 768px) {
          .shadow-xl {
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
          }
        }
      `}</style>
    </section>
  );
};

export default CampusLifeGallery;