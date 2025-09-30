'use client';

import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function QuizCTASection() {
  return (
    <section className="w-full bg-[#f4f4ff] px-4 py-12 md:px-8 md:py-10 lg:px-20 lg:py-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Container - Responsive on mobile */}
        <div
          className="relative min-h-[500px] lg:h-[500px] rounded-[16px] md:rounded-[24px] overflow-hidden "
          style={{
            background: `radial-gradient(ellipse 1918px 731px at 46.3% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 55.823%, rgba(255,255,255,0.3) 73.997%, rgba(255,255,255,0) 100%), rgba(66,66,255,0.16)`
          }}
        >
          {/* Content Container - Stack on mobile */}
          <div className="relative h-full flex items-center  lg:pt-10 lg:px-10 px-4 pt-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between w-full gap-6 lg:gap-0">

              {/* Left Content - Full width on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col w-full lg:w-[494px]  md:h-[420px] justify-between"
              >
                {/* Header Section */}
                <div className="flex flex-col gap-3">
                  <h2
                    className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold text-[#111827] leading-[1.1] md:leading-[1] tracking-[-1px] md:tracking-[-1.76px] capitalize"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    Not sure what's right for you?
                  </h2>
                  <p
                    className="text-[16px] md:text-[20px] font-normal text-[#4b5563] leading-[1.5] md:leading-[30px]"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    We'll help you discover the Bower program that fits your goals
                  </p>
                </div>

                {/* Button Section */}
                <div className="flex flex-col gap-3 mt-6 md:mt-0">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-fit bg-[#4242ff] text-white px-3.5 md:px-4 py-2 rounded-lg font-medium text-[16px] md:text-[18px] hover:bg-[#3535e6] transition-colors shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 group h-[40px] md:h-[44px]"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      boxShadow: '0px 1px 0.75px 0px inset rgba(255,255,255,0.12), 0px -1px 0px 0px inset #4242ff, 0px 1px 3px 0px rgba(0,0,0,0.1)'
                    }}
                  >
                    <span className="leading-[24px] md:leading-[27px]">Take the 2 Min Quiz</span>
                    <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform text-[#f5f9ff]" strokeWidth={2} />
                  </motion.button>
                  <p
                    className="text-[15px] md:text-[18px] font-normal text-[#4b5563] text-start leading-[1.5] md:leading-[27px]"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    No forms. No pressure. Just answers.
                  </p>
                </div>
              </motion.div>

              {/* Right Illustration - Visible on all screens, below content on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex relative flex-1 w-full justify-center lg:justify-end"
              >
                {/* Quiz Card Illustration - Responsive sizing */}
                <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[682px] h-[250px] sm:h-[280px] md:h-[350px] lg:h-[459px] rounded-t-[20px] md:rounded-t-[24px] shadow-[0px_403px_113px_0px_rgba(145,145,145,0.01),0px_258px_103px_0px_rgba(145,145,145,0.11),0px_145px_87px_0px_rgba(145,145,145,0.38),0px_64px_64px_0px_rgba(145,145,145,0.64),0px_16px_35px_0px_rgba(145,145,145,0.74)]">
                  <Image
                    src="/e9eecff9874c25c6b359b032004fc65e81b55487.png"
                    alt="Quiz illustration"
                    fill
                    className="object-cover  rounded-t-[20px] md:rounded-t-[24px]"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Additional Mobile Layout - Remove since we handled it above */}
        <div className="hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-[#4242ff]/20"
            style={{
              background: `radial-gradient(ellipse at bottom right, rgba(66,66,255,0.08) 0%, rgba(255,255,255,1) 50%)`
            }}
          >
            {/* Mobile Header */}
            <h2 className="text-3xl font-bold text-[#111827] mb-4 tracking-[-1px]" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Not Sure What's Right For You?
            </h2>
            <p className="text-lg text-[#4b5563] mb-8" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              We'll help you discover the Bower program that fits your goals
            </p>

            {/* Mobile Quiz Preview */}
            <div className="bg-white rounded-xl p-6 mb-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                Which program is right for you?
              </h3>

              {/* Progress Indicators */}
              <div className="flex gap-2 mb-6">
                <div className="w-8 h-2 bg-[#4242ff] rounded-full" />
                <div className="w-8 h-2 bg-[#4242ff]/30 rounded-full" />
                <div className="w-8 h-2 bg-gray-200 rounded-full" />
                <div className="w-8 h-2 bg-gray-200 rounded-full" />
              </div>

              {/* Sample Options */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[#4242ff]/5 rounded-lg border border-[#4242ff]/20">
                  <div className="w-5 h-5 rounded-full border-2 border-[#4242ff] bg-[#4242ff]">
                    <div className="w-full h-full rounded-full bg-white scale-[0.4]" />
                  </div>
                  <span className="text-sm text-[#111827]" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                    Starting my entrepreneurial journey
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                  <span className="text-sm text-[#4b5563]" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                    Growing an existing business
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#4242ff] text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-[#3535e6] transition-colors shadow-lg flex items-center justify-center gap-2 group"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              <span>Take the 2 Min Quiz</span>
              <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </motion.button>
            <p className="text-center text-[#4b5563] mt-3 text-base" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              No forms. No pressure. Just answers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}