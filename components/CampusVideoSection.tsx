'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CampusVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    'Learn inside State of the Art Classrooms',
    'Grow your tribe at BowerZones',
    'Rendezvous at B-Cafe',
    'Talk business at Bower Case'
  ];

  return (
    <section className="w-full bg-[#f4f4ff] px-4 py-12 md:px-8 md:py-12 lg:px-20 lg:py-10 xl:px-20 xl:py-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-8"
        >
          <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold leading-[1.1] tracking-[-0.02em] md:tracking-[-0.05em]">
            <span
              className="text-[#4b5563] block mb-1"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              You are in the Right Place at
            </span>
            <span
              className="text-[#3232e6] block"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              The Right Time.
            </span>
          </h1>
        </motion.div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-[16px] md:rounded-[24px] shadow-[4px_4px_24px_0px_rgba(0,0,0,0.06)] border border-white overflow-hidden">
            <div className="relative">
              {/* Grid pattern background */}
              <div className="absolute inset-0 pointer-events-none ">
                <Image
                  src="/2fda539e10baec0e450de6636564b28e083dce65.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative flex flex-col lg:flex-row lg:items-end gap-6 md:gap-8 lg:gap-16 p-5 md:p-6 lg:p-9">
                {/* Left Content - Text */}
                <div className="flex flex-col justify-center w-full lg:w-[342px] lg:flex-shrink-0">
                  <div className="space-y-3 md:space-y-3">
                    <h2
                      className="text-xl md:text-2xl font-semibold text-[#111827] tracking-[-0.02em] md:tracking-[-0.04em]"
                      style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                    >
                      More Than a Campus
                    </h2>

                    <ul className="space-y-2.5 md:space-y-2">
                      {features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                          className="flex items-start gap-2 text-[15px] md:text-[18px] text-[#4b5563] leading-[1.5]"
                          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                        >
                          <span className="text-[#3232e6] mt-[8px] md:mt-[10px] block w-1.5 h-1.5 rounded-full bg-[#3232e6] flex-shrink-0"></span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 md:mt-8 bg-[#4242ff] text-white px-3.5 md:px-4 py-2 rounded-lg font-medium hover:bg-[#3232e6] transition-all flex items-center gap-2 group shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] border border-[#4242ff] w-fit text-[16px] md:text-[18px] leading-[1.5]"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      boxShadow: '0px 1px 0.75px 0px inset rgba(255,255,255,0.12), 0px -1px 0px 0px inset #4242ff'
                    }}
                  >
                    <span>Take a Campus Tour</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M7.5 5L12.5 10L7.5 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Right Content - Video */}
                <div className="relative flex-1 w-full h-[240px] sm:h-[300px] md:h-[400px] lg:h-[480px] rounded-xl md:rounded-2xl overflow-hidden border-4 md:border-8 border-white/40">
                  {isPlaying ? (
                    <>
                      <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Campus Tour Video"
                      />
                    </>
                  ) : (
                    <div className="relative h-full">
                      {/* Campus Image */}
                      <Image
                        src="/7433128edd2a264929a262701e6bb608ef33082e.png"
                        alt="Bower Campus"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority
                      />

                      {/* Play Button Container */}
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                      >
                        <div className="relative">
                          {/* Outer ring */}
                          <div className="absolute inset-0 w-[80px] h-[80px] md:w-[108px] md:h-[108px] bg-[#3232e6] rounded-xl md:rounded-2xl opacity-50 border border-white">
                          </div>

                          {/* Inner ring */}
                          <div className="absolute inset-[7px] md:inset-[9px] w-[66px] h-[66px] md:w-[90px] md:h-[90px] bg-[#3232e6] rounded-xl md:rounded-2xl opacity-60 border border-white">
                          </div>

                          {/* Play Icon Container */}
                          <div className="relative z-10 w-[80px] h-[80px] md:w-[108px] md:h-[108px] flex items-center justify-center">
                            <svg
                              className="w-12 h-12 md:w-16 md:h-16"
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="32" cy="32" r="32" fill="#3232E6" />
                              <path
                                d="M25.3333 21.3333L42.6666 32L25.3333 42.6666V21.3333Z"
                                fill="white"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}