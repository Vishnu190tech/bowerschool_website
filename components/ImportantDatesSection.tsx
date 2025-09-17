'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImportantDatesSection = () => {
  const rounds = [
    {
      title: 'Round 1',
      dates: [
        { date: '15 Feb \'25', event: 'Applications Open', status: 'closed' },
        { date: '20 Feb \'25', event: 'Results', status: 'Published' },
        { date: '21 Feb - 1 Mar \'25', event: 'Interview \'D\' Day', status: 'yet to start' },
        { date: '20 Mar \'25', event: 'Final Results', status: 'yet to start' },
        { date: '20 Mar \'25', event: 'Fee Payment', status: 'yet to start' }
      ]
    },
    {
      title: 'Round 2',
      dates: [
        { date: '15 Feb \'25', event: 'Applications Open', status: 'closed' },
        { date: '20 Feb \'25', event: 'Results', status: 'Published' },
        { date: '21 Feb - 1 Mar \'25', event: 'Interview \'D\' Day', status: 'yet to start' },
        { date: '20 Mar \'25', event: 'Final Results', status: 'yet to start' },
        { date: '20 Mar \'25', event: 'Fee Payment', status: 'yet to start' }
      ]
    }
  ];

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
            Important Dates
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

          {/* Rounds */}
          <div className="relative z-10 flex flex-col gap-3 md:gap-4">
            {rounds.map((round, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/10 rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 border-2 border-[#f9faff] shadow-[4px_4px_12px_0px_#4242ff] min-h-[400px] md:min-h-[450px] lg:h-[500px] flex flex-col gap-4 md:gap-5 lg:gap-6"
              >
                {/* Round Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <h3
                    className="text-[#111827] text-[20px] md:text-[24px] lg:text-[30px] font-semibold leading-tight tracking-[-1.2px]"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                    }}
                  >
                    {round.title}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="backdrop-blur-[32px] bg-[rgba(17,24,39,0.05)] text-[#4242ff] px-3 py-2 md:px-4 h-10 md:h-11 rounded-lg border border-[#4242ff] transition-all"
                    style={{
                      backgroundImage: `radial-gradient(circle at center, rgba(50, 50, 230, 0.1) 0%, rgba(50, 50, 230, 0) 100%)`
                    }}
                  >
                    <span
                      className="text-[14px] md:text-[16px] lg:text-[18px] font-medium"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                      }}
                    >
                      Apply now
                    </span>
                  </motion.button>
                </div>

                {/* Table */}
                <div className="bg-white/10 rounded-xl lg:rounded-2xl border border-[#d1d5db] overflow-x-auto flex-1">
                  {/* Desktop Table */}
                  <div className="hidden md:block">
                    {/* Table Header */}
                    <div className="grid grid-cols-3 bg-white/5 min-w-[500px]">
                      <div className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 border-b border-r border-[#d1d5db]">
                        <span
                          className="text-black text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed"
                          style={{
                            fontFamily: 'var(--font-plus-jakarta)',
                          }}
                        >
                          Dates
                        </span>
                      </div>
                      <div className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 border-b border-r border-[#d1d5db]">
                        <span
                          className="text-black text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed"
                          style={{
                            fontFamily: 'var(--font-plus-jakarta)',
                          }}
                        >
                          Event
                        </span>
                      </div>
                      <div className="px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5 border-b border-[#d1d5db]">
                        <span
                          className="text-black text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed"
                          style={{
                            fontFamily: 'var(--font-plus-jakarta)',
                          }}
                        >
                          Status
                        </span>
                      </div>
                    </div>
                    {/* Table Body */}
                    {round.dates.map((row, rowIdx) => (
                      <div key={rowIdx} className="grid grid-cols-3 min-w-[500px]">
                        <div className={`px-3 md:px-4 lg:px-6 py-4 md:py-5 lg:py-6 border-r border-[#d1d5db] ${rowIdx < round.dates.length - 1 ? 'border-b' : ''}`}>
                          <span
                            className="text-black text-[14px] md:text-[16px] lg:text-[20px] font-medium leading-relaxed"
                            style={{
                              fontFamily: 'var(--font-plus-jakarta)',
                            }}
                          >
                            {row.date}
                          </span>
                        </div>
                        <div className={`px-3 md:px-4 lg:px-6 py-4 md:py-5 lg:py-6 border-r border-[#d1d5db] ${rowIdx < round.dates.length - 1 ? 'border-b' : ''}`}>
                          <span
                            className="text-black text-[14px] md:text-[16px] lg:text-[20px] font-medium leading-relaxed"
                            style={{
                              fontFamily: 'var(--font-plus-jakarta)',
                            }}
                          >
                            {row.event}
                          </span>
                        </div>
                        <div className={`px-3 md:px-4 lg:px-6 py-4 md:py-5 lg:py-6 ${rowIdx < round.dates.length - 1 ? 'border-b border-[#d1d5db]' : ''}`}>
                          <span
                            className="text-black text-[14px] md:text-[16px] lg:text-[20px] font-medium leading-relaxed"
                            style={{
                              fontFamily: 'var(--font-plus-jakarta)',
                            }}
                          >
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile View */}
                  <div className="block md:hidden">
                    {round.dates.map((row, rowIdx) => (
                      <div key={rowIdx} className={`p-4 space-y-2 ${rowIdx < round.dates.length - 1 ? 'border-b border-[#d1d5db]' : ''}`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="text-gray-600 text-xs mb-1">Date</div>
                            <div className="text-black text-sm font-medium">{row.date}</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-600 text-xs mb-1">Status</div>
                            <div className="text-black text-sm">{row.status}</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-xs mb-1">Event</div>
                          <div className="text-black text-sm font-medium">{row.event}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDatesSection;