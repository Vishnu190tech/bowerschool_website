'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BEATCurriculumSection = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const sections = [
    {
      title: 'Entrepreneurial Quotient & Current Affairs',
      part: 'Part 1',
      isExpanded: true,
      tableData: {
        headers: ['Questions', 'Time', 'Focus Areas', 'Recommended Syllabus'],
        rows: [
          {
            questions: '35 (MCQs)',
            time: '15 minutes',
            focusAreas: 'Entrepreneurial Basics, Startup Trends, Case Analysis',
            syllabus: 'Entrepreneurial Basics: Basics of business models, customer needs, value propositions, and how startups grow. Startup Trends: Current events and trends in the startup world. Case Studies: Analytical thinking and problem-solving in business contexts.'
          }
        ]
      }
    },
    {
      title: 'Psychometric Test',
      part: 'Part 2',
      isExpanded: true,
      tableData: {
        headers: ['Questions', 'Time', 'Focus Areas', 'Recommended Syllabus'],
        rows: [
          {
            questions: '50 (MCQs)',
            time: '15 minutes',
            focusAreas: 'Decision-Making, Team Dynamics, Leadership, Resilience, Risk-Taking, Adaptability, Innovation',
            syllabus: 'Psychometric Skills: Read about how entrepreneurs make decisions, work in teams, lead effectively, handle challenges, take risks, and adapt to change.'
          }
        ]
      }
    },
    {
      title: 'Business Communication',
      part: 'Part 3',
      isExpanded: false
    },
    {
      title: 'Audio-Visual Prompts',
      part: 'Part 4',
      isExpanded: false
    }
  ];

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f4f4ff] px-4 py-8 md:px-10 md:py-10 lg:p-[60px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8 lg:mb-9"
        >
          <h2
            className="text-[#111827] capitalize text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-tight tracking-[-1.76px]"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
            }}
          >
            BEAT Curriculum
          </h2>
        </motion.div>

        {/* Events Container */}
        <div className="relative bg-white/10 backdrop-blur-[60px] rounded-2xl lg:rounded-3xl p-3 md:p-4 lg:p-6 border-2 border-white shadow-[4px_4px_12px_0px_rgba(0,0,0,0.06)]">
          {/* Background decorative elements */}
          <div className="absolute -left-[282px] -top-[340px] w-[808px] h-[808px] pointer-events-none hidden md:block">
            <Image
              src="/5f3e1293b2a61441809635458327426adfce22a3.svg"
              alt=""
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
          <div className="absolute left-[354px] top-[658px] w-[808px] h-[808px] pointer-events-none hidden md:block">
            <Image
              src="/5f3e1293b2a61441809635458327426adfce22a3.svg"
              alt=""
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>

          {/* Sections */}
          <div className="relative z-10 flex flex-col gap-3 md:gap-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/10 rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 border-2 border-[#f9faff] shadow-[4px_4px_12px_0px_#4242ff]"
              >
                {/* Section Header */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex flex-col gap-1 md:gap-2">
                    <h3
                      className="text-[#111827] text-[20px] md:text-[24px] lg:text-[30px] font-semibold leading-tight tracking-[-1.2px]"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                      }}
                    >
                      {section.title}
                    </h3>
                    <span
                      className="text-gray-500 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                      }}
                    >
                      {section.part}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSection === index || (index < 2 && expandedSection === null) ? 270 : 90 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 flex items-center justify-center flex-shrink-0"
                  >
                    <Image
                      src={index < 2 ? "/0dae4579e49732fdddcc961a316928a338db9765.svg" : "/851e9bec446f5a8e06c14d1bd1dddcfa76419934.svg"}
                      alt=""
                      width={44}
                      height={44}
                      className="w-full h-full"
                    />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                {(expandedSection === index || (index < 2 && expandedSection === null)) && section.tableData && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 md:mt-5 lg:mt-6"
                  >
                    <div className="bg-white/10 rounded-xl lg:rounded-2xl border border-[#d1d5db] overflow-x-auto">
                      {/* Desktop Table */}
                      <div className="hidden md:block">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 bg-white/5 min-w-[600px]">
                        {section.tableData.headers.map((header, idx) => (
                          <div
                            key={idx}
                            className={`px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 border-b border-[#d1d5db] ${idx < section.tableData.headers.length - 1 ? 'border-r' : ''}`}
                          >
                            <span
                              className="text-black text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed"
                              style={{
                                fontFamily: 'var(--font-plus-jakarta)',
                              }}
                            >
                              {header}
                            </span>
                          </div>
                        ))}
                      </div>
                        {/* Table Body */}
                        {section.tableData.rows.map((row, rowIdx) => (
                          <div key={rowIdx} className="grid grid-cols-4 min-w-[600px]">
                            <div className="px-3 md:px-4 lg:px-6 py-4 md:py-5 lg:py-6 border-r border-[#d1d5db]">
                              <span
                                className="text-black text-[14px] md:text-[16px] lg:text-[20px] font-medium leading-relaxed"
                                style={{
                                  fontFamily: 'var(--font-plus-jakarta)',
                                }}
                              >
                                {row.questions}
                              </span>
                            </div>
                            <div className="px-3 md:px-4 lg:px-6 py-4 md:py-5 lg:py-6 border-r border-[#d1d5db]">
                              <span
                                className="text-black text-[14px] md:text-[16px] lg:text-[20px] font-medium leading-relaxed"
                                style={{
                                  fontFamily: 'var(--font-plus-jakarta)',
                                }}
                              >
                                {row.time}
                              </span>
                            </div>
                            <div className="px-3 md:px-4 lg:px-6 py-4 md:py-5 lg:py-6 border-r border-[#d1d5db]">
                              <span
                                className="text-black text-[14px] md:text-[16px] lg:text-[20px] font-medium leading-relaxed"
                                style={{
                                  fontFamily: 'var(--font-plus-jakarta)',
                                }}
                              >
                                {row.focusAreas}
                              </span>
                            </div>
                            <div className="px-3 md:px-4 lg:px-6 py-4 md:py-5 lg:py-6">
                              <span
                                className="text-black text-[14px] md:text-[16px] lg:text-[20px] font-medium leading-relaxed"
                                style={{
                                  fontFamily: 'var(--font-plus-jakarta)',
                                }}
                              >
                                {row.syllabus}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mobile View */}
                      <div className="block md:hidden">
                        {section.tableData.rows.map((row, rowIdx) => (
                          <div key={rowIdx} className="p-4 space-y-3">
                            <div>
                              <div className="text-gray-600 text-sm mb-1">Questions</div>
                              <div className="text-black font-medium">{row.questions}</div>
                            </div>
                            <div>
                              <div className="text-gray-600 text-sm mb-1">Time</div>
                              <div className="text-black font-medium">{row.time}</div>
                            </div>
                            <div>
                              <div className="text-gray-600 text-sm mb-1">Focus Areas</div>
                              <div className="text-black font-medium">{row.focusAreas}</div>
                            </div>
                            <div>
                              <div className="text-gray-600 text-sm mb-1">Recommended Syllabus</div>
                              <div className="text-black">{row.syllabus}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BEATCurriculumSection;