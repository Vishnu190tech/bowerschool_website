'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
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
    <section className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            <span className="text-gray-800">You are in the Right Place at</span>
            <br />
            <span className="text-[#4242ff]">The Right Time.</span>
          </h2>
        </motion.div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-[2fr,3fr] items-stretch">
              
              {/* Left Content - Text */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  More Than a Campus
                </h3>
                
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#4242ff] mt-2 flex-shrink-0" />
                      <span className="text-gray-600 text-base lg:text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#4242ff] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3535e6] transition-all flex items-center gap-2 group w-fit shadow-lg hover:shadow-xl"
                >
                  <span>Take a Campus Tour</span>
                  <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Right Content - Video (60% width) */}
              <div className="relative order-1 lg:order-2 h-[300px] lg:h-auto min-h-[400px]">
                {isPlaying ? (
                  <>
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Campus Tour Video"
                    />
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                    >
                      <XMarkIcon className="w-6 h-6 text-white" />
                    </button>
                  </>
                ) : (
                  <div className="relative h-full">
                    {/* Campus Image */}
                    <Image
                      src="/campus-modern.jpg"
                      alt="Bower Campus"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                    >
                      <div className="relative">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#4242ff] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5252ff] shadow-2xl">
                          <PlayIcon className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" />
                        </div>
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-[#4242ff]/40 rounded-full blur-2xl group-hover:bg-[#4242ff]/60 animate-pulse" />
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}