'use client';

import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function QuizCTASection() {
  return (
    <section className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20 bg-[#f4f4ff]">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#4242ff]/20">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Not sure what's right for you?
              </h2>
              <p className="text-base text-gray-600">
                We'll help you discover the Bower program that fits your goals
              </p>
            </motion.div>

            {/* Quiz Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg mb-6"
            >
              {/* Progress dots */}
              <div className="flex justify-center gap-2 mb-4">
                <div className="w-8 h-1.5 bg-[#4242ff] rounded-full" />
                <div className="w-8 h-1.5 bg-[#4242ff] rounded-full" />
                <div className="w-8 h-1.5 bg-gray-200 rounded-full" />
                <div className="w-8 h-1.5 bg-gray-200 rounded-full" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Which program is right for you?
              </h3>

              {/* Options */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#4242ff] bg-[#4242ff] relative">
                    <div className="absolute inset-[5px] bg-white rounded-full" />
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full flex-1" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                  <div className="h-4 bg-gray-200 rounded-full flex-1 max-w-[80%]" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                  <div className="h-4 bg-gray-200 rounded-full flex-1 max-w-[60%]" />
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#4242ff] text-white px-8 py-3 rounded-full font-medium text-base hover:bg-[#3535e6] transition-colors shadow-lg inline-flex items-center gap-2 mb-3"
              >
                <span>Take the 2 Min Quiz</span>
                <ChevronRightIcon className="w-4 h-4" />
              </motion.button>
              <p className="text-gray-600 text-sm">
                No forms. No pressure. Just answers.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div 
            className="relative h-[500px] rounded-3xl overflow-hidden"
            style={{
              background: `radial-gradient(ellipse at center left, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 55.823%, rgba(255,255,255,0.3) 73.997%, rgba(255,255,255,0) 100%), #4242ff29`
            }}
          >
            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-[#4242ff]" />
            
            {/* Content Container */}
            <div className="relative h-full flex items-center px-16">
              <div className="flex items-center justify-between w-full gap-8">
                
                {/* Left Content */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 max-w-xl"
                >
                  <h2 className="text-[44px] font-bold text-gray-900 mb-4 leading-tight tracking-[-1.76px]">
                    Not Sure What's Right For You?
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    We'll help you discover the Bower program that fits your goals
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex flex-col items-start gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#4242ff] text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-[#3535e6] transition-colors shadow-lg flex items-center gap-2 group"
                    >
                      <span>Take the 2 Min Quiz</span>
                      <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <p className="text-gray-600 text-base">
                      No forms. No pressure. Just answers.
                    </p>
                  </div>
                </motion.div>

                {/* Right Illustration */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative w-[600px] h-[460px]"
                >
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    {/* Quiz Card Illustration */}
                    <div className="h-full flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        Which program is right for you?
                      </h3>
                      
                      {/* Progress Indicators */}
                      <div className="flex gap-2 mb-8">
                        <div className="w-12 h-2 bg-[#4242ff] rounded-full" />
                        <div className="w-12 h-2 bg-[#4242ff] rounded-full" />
                        <div className="w-12 h-2 bg-gray-200 rounded-full" />
                        <div className="w-12 h-2 bg-gray-200 rounded-full" />
                      </div>
                      
                      {/* Quiz Options */}
                      <div className="space-y-4 flex-1">
                        <label className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                          <div className="w-6 h-6 rounded-full border-2 border-[#4242ff] bg-[#4242ff] relative">
                            <div className="absolute inset-[6px] bg-white rounded-full" />
                          </div>
                          <span className="text-gray-700 font-medium">Starting my entrepreneurial journey</span>
                        </label>
                        
                        <label className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                          <span className="text-gray-700 font-medium">Growing an existing business</span>
                        </label>
                        
                        <label className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                          <span className="text-gray-700 font-medium">Looking for investment opportunities</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}