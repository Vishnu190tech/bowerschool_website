'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function StartupInvestorSection() {
  return (
    <section className="w-full px-4 py-8 md:px-8 md:py-10 lg:px-20 bg-[#f4f4ff]">
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Desktop View */}
        <div
          className="hidden lg:block relative h-[500px] rounded-3xl overflow-hidden bg-white"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse 191.8px 73.15px at 592.31px 0px,
                rgba(255,255,255,1) 0%,
                rgba(255,255,255,1) 55.823%,
                rgba(255,255,255,0.3) 73.997%,
                rgba(255,255,255,0) 100%
              )
            `
          }}
        >
          <div className="flex items-center h-full p-10 relative">
            {/* Left Content - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-30 max-w-[660px] z-10"
            >
              {/* Header */}
              <div className="flex flex-col gap-3">
                <h2 className="text-[44px] font-semibold leading-tight text-gray-900 tracking-[-1.76px] capitalize">
                  Got A Startup Idea? We'll Help Find Investors.
                </h2>
                <p className="text-xl font-normal text-gray-600 leading-[30px]">
                  Pitch directly to our partner investment funds and get funding support for great ideas
                </p>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#4242ff] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow group w-fit"
                style={{
                  boxShadow: '0px 0px 0px 1px #4242ff, 0px 1px 3px 0px rgba(0,0,0,0.1)',
                }}
              >
                <span className="text-lg font-medium" style={{ textShadow: '#4242ff 0px 1px 3px' }}>
                  Know More
                </span>
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

              </motion.button>
            </motion.div>

            {/* Right Illustration - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[694px] h-[534px]"
            >
              <Image
                src="/c8580380a166b075e9a372b58144d24b1a5dc939.png"
                alt="Startup Idea Illustration"
                fill
                className="object-contain object-center"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden bg-white rounded-3xl p-6 md:p-8">
          {/* Mobile Illustration */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[250px] md:h-[350px] mb-8"
          >
            <Image
              src="/c8580380a166b075e9a372b58144d24b1a5dc939.png"
              alt="Startup Idea Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Mobile Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            {/* Mobile Header */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Got a Startup Idea? We'll Help Fund
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-sm">
              Pitch directly to our partner investment funds and get funding support for great ideas
            </p>

            {/* Mobile Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3  bg-[#4242ff] text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group w-full max-w-[200px]"
            >
              <span className="text-base font-medium">
                Know More
              </span>
              <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}