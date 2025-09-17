'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MasterclassSection = () => {
  const steps = ['Learn Concept', 'Build Ideas', 'Practice Pitch'];

  return (
    <section className="w-full bg-[#f4f4ff] px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 md:gap-8 items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 md:gap-3 items-center text-center max-w-[900px] px-4"
        >
          <h2
            className="text-[#111827] capitalize text-[24px] md:text-[32px] lg:text-[44px] font-semibold leading-tight"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              letterSpacing: '-1.76px'
            }}
          >
            Learn To Think Like A Founder, Act Like A CEO
          </h2>
          <p
            className="text-[#4b5563] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
            }}
          >
            Join the free masterclass to kickstart your entrepreneurial journey.
          </p>
        </motion.div>

        {/* Steps and Content Container */}
        <div className="flex flex-col gap-4 md:gap-6 items-center w-full">
          {/* Steps with connecting lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-3 md:gap-6"
          >
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div
                  className="px-4 md:px-6 lg:px-[30px] py-2 md:py-2.5 rounded-[30px] bg-[rgba(66,66,255,0.05)] border border-[#4242ff] whitespace-nowrap"
                >
                  <span
                    className="text-[#3232e6] text-[14px] md:text-[15px] lg:text-[16px] font-medium"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                    }}
                  >
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block relative w-[50px] lg:w-[103px] h-0">
                    <Image
                      src="/ddf6cdbc109c767e64cc3fe6fe914f7754cfa3ac.svg"
                      alt=""
                      width={103}
                      height={1}
                      className="absolute top-1/2 -translate-y-1/2"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-white rounded-xl md:rounded-2xl border-2 border-[#4242ff] p-4 md:p-5 lg:p-6 overflow-hidden w-full max-w-[1100px]"
          >
            {/* Background Decorative Elements */}
            <div className="absolute w-[200px] md:w-[300px] lg:w-[382px] h-[200px] md:h-[300px] lg:h-[382px] -left-[150px] md:-left-[220px] lg:-left-[282px] top-[40px] md:top-[60px] lg:top-[81px] pointer-events-none">
              <Image
                src="/be092d81ac72f74895feaa474472548034278186.svg"
                alt=""
                fill
                className="object-contain scale-[1.8] md:scale-[2.2] lg:scale-[2.6]"
              />
            </div>
            <div className="absolute w-[200px] md:w-[300px] lg:w-[382px] h-[200px] md:h-[300px] lg:h-[382px] -right-[150px] md:-right-[220px] lg:right-[-282px] -top-[100px] md:-top-[150px] lg:-top-[213px] pointer-events-none">
              <Image
                src="/be092d81ac72f74895feaa474472548034278186.svg"
                alt=""
                fill
                className="object-contain scale-[1.8] md:scale-[2.2] lg:scale-[2.6]"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-2 w-full">
              <h3
                className="text-black text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-tight"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  letterSpacing: '-0.96px'
                }}
              >
                Got a big idea?
              </h3>
              <p
                className="text-black text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                }}
              >
                Bower's free masterclass helps you turn it into a real startup. Learn how to think like a founder, build your first business model, and pitch with confidence — no experience needed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;