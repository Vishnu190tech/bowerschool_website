'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CurriculumSection = () => {
  const [activeYear, setActiveYear] = useState(0);
  
  const years = ['Year 1', 'Year 2', 'Year 3'];

  return (
    <section className="w-full bg-[#f4f4ff] px-4 md:px-10 lg:px-20 py-6 md:py-8">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-4 md:gap-5 lg:gap-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#111827] capitalize text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-tight tracking-[-1px] md:tracking-[-1.4px] lg:tracking-[-1.76px]"
          style={{
            fontFamily: 'var(--font-plus-jakarta)'
          }}
        >
          Curriculum
        </motion.h2>

        {/* Tabs and Download Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Year Tabs */}
          <div className="flex gap-2 md:gap-4 lg:gap-6 overflow-x-auto w-full md:w-auto">
            {years.map((year, index) => (
              <button
                key={index}
                onClick={() => setActiveYear(index)}
                className={`px-4 md:px-6 lg:px-[30px] py-2 md:py-2.5 rounded-[30px] border transition-all whitespace-nowrap ${
                  activeYear === index
                    ? 'bg-[rgba(66,66,255,0.05)] border-[#4242ff]'
                    : 'border-[#d1d5db]'
                }`}
              >
                <span
                  className={`text-[14px] md:text-[15px] lg:text-[16px] ${activeYear === index ? 'text-[#3232e6] font-medium' : 'text-[#4b5563] font-normal'}`}
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    lineHeight: '24px'
                  }}
                >
                  {year}
                </span>
              </button>
            ))}
          </div>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="h-10 md:h-11 px-3 md:px-4 py-2 rounded-lg border border-[#4242ff] backdrop-blur-[32px] backdrop-filter flex items-center gap-2 md:gap-4"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(50,50,230,0.1) 0%, rgba(50,50,230,0) 100%)'
            }}
          >
            <span
              className="text-[#4242ff] text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-normal md:leading-[27px]"
              style={{
                fontFamily: 'var(--font-plus-jakarta)'
              }}
            >
              Download
            </span>
          </motion.button>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-xl md:rounded-2xl border-2 border-white p-3 md:p-4 overflow-hidden"
        >
          {/* Background Decorative Elements - Hidden on Mobile */}
          <div className="hidden md:block absolute w-[382px] h-[382px] -left-[282px] top-[81px] pointer-events-none">
            <Image
              src="/be092d81ac72f74895feaa474472548034278186.svg"
              alt=""
              fill
              className="object-contain scale-[2.6]"
            />
          </div>
          <div className="hidden md:block absolute w-[382px] h-[382px] right-[-282px] -top-[213px] pointer-events-none">
            <Image
              src="/be092d81ac72f74895feaa474472548034278186.svg"
              alt=""
              fill
              className="object-contain scale-[2.6]"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col gap-4 md:gap-5 lg:gap-6">
            {/* Section Header */}
            <div className="flex flex-col gap-1 md:gap-1.5">
              <div className="flex items-start justify-between gap-2">
                <h3
                  className="text-[#111827] w-full text-[20px] md:text-[26px] lg:text-[30px] font-semibold leading-tight tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.2px]"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)'
                  }}
                >
                  Think & Build Like a Founder
                </h3>
                <div className="w-3 md:w-[13px] h-6 md:h-7 cursor-pointer flex-shrink-0">
                  <Image
                    src="/eb8e84271378252ca035a7029c1ebb50e0964d2e.svg"
                    alt="Chevron"
                    width={13}
                    height={28}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p
                className="text-[#4b5563] opacity-50 text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[1.4] md:leading-[1.5] lg:leading-[27px]"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)'
                }}
              >
                Identify business problems & develop solutions
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px]">
              <Image
                src="/c5bb6965de8adfc70f858ee2824033dc2917022a.svg"
                alt=""
                width={1190}
                height={1}
                className="w-full"
              />
            </div>

            {/* Semester 1 */}
            <div className="flex flex-col gap-1 md:gap-2 w-full">
              <h4
                className="text-black text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[1.3] md:leading-[1.3] lg:leading-[29px] tracking-[-0.6px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)'
                }}
              >
                Semester 1 - Simulate the Startup Life
              </h4>
              <ul
                className="text-black list-disc ml-5 md:ml-6 lg:ml-[27px] text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[1.5] md:leading-[1.5] lg:leading-[27px]"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)'
                }}
              >
                <li>Ideate & Research</li>
                <li>Prototype & Validate</li>
                <li>Feasibility & Business Model</li>
                <li>Scale & Exit</li>
                <li>Growth & Funding</li>
                <li>Launch & Operate</li>
              </ul>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px]">
              <Image
                src="/c5bb6965de8adfc70f858ee2824033dc2917022a.svg"
                alt=""
                width={1190}
                height={1}
                className="w-full"
              />
            </div>

            {/* Semester 2 */}
            <div className="flex flex-col gap-1 md:gap-2 w-full">
              <h4
                className="text-black text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[1.3] md:leading-[1.3] lg:leading-[29px] tracking-[-0.6px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)'
                }}
              >
                Semester 2 - Ideate and Build
              </h4>
              <ul
                className="text-black list-disc ml-5 md:ml-6 lg:ml-[27px] text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[1.5] md:leading-[1.5] lg:leading-[27px]"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)'
                }}
              >
                <li>Problem & Market Validation</li>
                <li>Prototype & Beta Testing</li>
                <li>Legal Foundation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;