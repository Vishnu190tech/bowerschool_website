'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhatDrivesUsSection = () => {
  const stats = [
    {
      value: "15,000+",
      label: "Students taught"
    },
    {
      value: "1 Million +",
      label: "People Impacted"
    },
    {
      value: "2,000+ Hrs",
      label: "Taught"
    }
  ];

  return (
    <section className="relative w-full bg-[#f4f4ff] py-8 md:py-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 items-center text-center mb-8"
        >
          <h2
            className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-[#252525] tracking-[-1.6px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            What Drives Us
          </h2>
          <p
            className="text-[16px] md:text-[18px] lg:text-[20px] text-[#515151] leading-relaxed max-w-full"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            We believe that entrepreneurship is more than business—it's vision, risk, and impact. Our commitment is to equip future entrepreneurs with real-world skills, fostering innovation and collaboration. Here, students don't just dream of success; they make it happen. ​
          </p>
        </motion.div>

        {/* Main Container with Image and Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Glass Container */}
          <div className="relative w-full h-auto min-h-[400px] md:h-[480px] lg:h-[544px] bg-white/10 backdrop-blur-[60px] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)] p-2 md:p-3 lg:p-4 overflow-visible">
            {/* Background Ellipses */}
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <div className="absolute -inset-[49.458%]">
                <Image
                  src="/19aedbcc713e1966b4208911cc5d392b22c02b8a.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute -inset-[49.458%]">
                <Image
                  src="/1d83b81677f4ac1e392928564251a646a142c7de.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Main Image */}
            <div className="relative w-full h-[380px] md:h-[450px] lg:h-[512px] rounded-[12px] md:rounded-[14px] lg:rounded-[16px] overflow-hidden">
              <Image
                src="/2131a299d70492121cd28a07ea26c6890bca2545.png"
                alt="Entrepreneurship collaboration"
                fill
                className="object-cover"
                priority
              />

              {/* Stats Container - Overlaying bottom of image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[1048px] z-10"
              >
                <div
                  className="relative backdrop-blur-[22px] rounded-[12px] md:rounded-[14px] lg:rounded-[16px] px-4 md:px-8 lg:px-[60px] py-3 md:py-4 lg:py-[21px] border border-white/50"
                  style={{
                    background: 'radial-gradient(154.05px at 50% 50%, rgba(0, 0, 0, 0.74) 0%, rgba(6, 6, 6, 0.74) 6.25%, rgba(13, 13, 13, 0.74) 12.5%, rgba(26, 26, 26, 0.74) 25%, rgba(51, 51, 51, 0.74) 50%, rgba(77, 77, 77, 0.74) 75%, rgba(102, 102, 102, 0.74) 100%)'
                  }}
                >
                  <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-[61px]">
                    {stats.map((stat, index) => (
                      <React.Fragment key={index}>
                        {/* Stat Item */}
                        <div className="flex flex-col gap-1 md:gap-2 lg:gap-[15px] items-center text-center">
                          <span
                            className="text-[18px] md:text-[24px] lg:text-[30px] font-semibold text-white tracking-[-1.2px] whitespace-nowrap"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                          >
                            {stat.value}
                          </span>
                          <span
                            className="text-[12px] md:text-[16px] lg:text-[20px] text-gray-100 leading-normal lg:leading-[30px]"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                          >
                            {stat.label}
                          </span>
                        </div>

                        {/* Divider Line */}
                        {index < stats.length - 1 && (
                          <div className="w-[1px] h-[40px] md:h-[60px] lg:h-[76px] bg-white/60" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --drives-bg: #f4f4ff;
          --drives-title: #252525;
          --drives-text: #515151;
          --drives-white: #ffffff;
          --drives-gray: #f3f4f6;
        }
      `}</style>
    </section>
  );
};

export default WhatDrivesUsSection;