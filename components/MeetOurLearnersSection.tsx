'use client';

import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';

interface Learner {
  id: number;
  name: string;
  role: string;
  description?: string;
  image: string;
  hasConnectButton?: boolean;
}

const learners: Learner[] = [
  {
    id: 1,
    name: 'Yohanes Ridwan',
    role: 'Founder',
    image: '/1b69dcf26c93b7b5fab18f8f92b00f0b3455b007.png'
  },
  {
    id: 2,
    name: 'Elena Torres',
    role: 'Fugiat rerum mollitia ex distinctio cumque',
    image: '/f235cd4a085639f89caa76ab336e4ec7d95b9575.png',
    hasConnectButton: true
  },
  {
    id: 3,
    name: 'Elena Torres',
    role: 'Fugiat rerum mollitia ex distinctio cumque',
    image: '/f69bc3d22f073926f324285184ee336e5ef9fa7b.png',
    hasConnectButton: true
  },
  {
    id: 4,
    name: 'Elena Torres',
    role: 'Fugiat rerum mollitia ex distinctio cumque',
    image: '/e9063e497130a5fc4fb0d3d53687953c6d0283c5.png',
    hasConnectButton: true
  },
  {
    id: 5,
    name: 'Elena Torres',
    role: 'Fugiat rerum mollitia ex distinctio cumque',
    image: '/422d28707971e8a7187286c8c8632a9e76aad865.png',
    hasConnectButton: true
  },
  {
    id: 6,
    name: 'Elena Torres',
    role: 'Fugiat rerum mollitia ex distinctio cumque',
    image: '/15bd4d1357a58b39000f7b4bd08469392c401a40.png',
    hasConnectButton: true
  },
  {
    id: 7,
    name: 'Charles Xavier',
    role: 'UI Designer',
    image: '/d5d112d31c31e71b386be72bf1e96f088d3ba08f.png'
  }
];

export default function MeetOurLearnersSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalPages = 24; // As shown in Figma
  const cardsPerView = 4; // Show 4 cards at a time on desktop

  const handlePrevious = () => {
    // Desktop carousel
    if (window.innerWidth >= 1024 && scrollRef.current) {
      if (currentIndex > 0) {
        setCurrentIndex(Math.max(0, currentIndex - 1));
        const cardWidth = scrollRef.current.querySelector('.learner-card')?.clientWidth || 0;
        scrollRef.current.scrollLeft -= cardWidth + 16; // card width + gap
      }
    } else {
      // Mobile single card
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    // Desktop carousel
    if (window.innerWidth >= 1024 && scrollRef.current) {
      if (currentIndex < learners.length - cardsPerView) {
        setCurrentIndex(Math.min(learners.length - cardsPerView, currentIndex + 1));
        const cardWidth = scrollRef.current.querySelector('.learner-card')?.clientWidth || 0;
        scrollRef.current.scrollLeft += cardWidth + 16; // card width + gap
      }
    } else {
      // Mobile single card
      if (currentIndex < learners.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-3 tracking-[-1.76px]"
          >
            Meet Our Learners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get to know the people who make Bower what it is, and what it's becoming.
          </motion.p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth mb-8"
          >
            {learners.map((learner, index) => (
              <motion.div
                key={learner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="learner-card flex-shrink-0 relative group"
                style={{ width: 'calc(25% - 12px)' }} // 4 cards visible with gaps
              >
                <div
                  className="relative h-[500px] rounded-2xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url('${learner.image}')` }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-5 border border-white/20">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {learner.name}
                      </h3>
                      <p className="text-base text-gray-300 mb-4 line-clamp-2">
                        {learner.role}
                      </p>
                      {learner.hasConnectButton && (
                        <button className="w-full bg-white text-gray-900 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 group">
                          <span>Connect</span>
                          <svg className="w-5 h-5 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-2xl font-semibold text-white">{currentPage}</span>
              <div className="w-10 h-px bg-white" />
              <span className="text-2xl font-semibold text-white">{totalPages}</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Main card display */}
            <div className="relative h-[500px] mx-auto max-w-sm">
              {learners.map((learner, index) => (
                <motion.div
                  key={learner.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.9,
                    display: index === currentIndex ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <div
                    className="relative h-full rounded-3xl overflow-hidden bg-cover bg-center shadow-2xl"
                    style={{ backgroundImage: `url('${learner.image}')` }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="backdrop-blur-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/30">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-white">
                            {learner.name}
                          </h3>
                          {learner.hasConnectButton && (
                            <svg className="w-6 h-6 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          )}
                        </div>
                        <p className="text-base text-gray-200 leading-relaxed">
                          {learner.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Pagination */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-medium text-white">{currentIndex + 1}</span>
              <div className="w-12 h-[2px] bg-white" />
              <span className="text-2xl font-medium text-white">{learners.length}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous learner"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === learners.length - 1}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next learner"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}