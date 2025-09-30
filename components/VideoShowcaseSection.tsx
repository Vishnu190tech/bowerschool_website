'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface VideoCard {
  id: number;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
}

const videoCards: VideoCard[] = [
  {
    id: 1,
    category: 'SEED',
    title: 'Start Building From School',
    description: 'Explore entrepreneurship early through weekend programs, school sessions, and immersive holiday camps.',
    thumbnail: '/71d7f5e099d14dd159d6712a146671f519cd6463.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    category: 'BUILD',
    title: 'Build Ventures From Scratch',
    description: 'An immersive 3-year journey in tech entrepreneurship for UG founders ready to turn ideas into ventures.',
    thumbnail: '/7cdc5c1e875d5fe66f1b0a3f489a4a6a9aa8dbcd.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    category: 'LEAD',
    title: 'Level Up Your Startup',
    description: 'Executive programs for professionals ready to build, scale, or invest with strategic clarity.',
    thumbnail: '/3104543aac0717eb95d6091eddbd6d06f4da9666.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    category: 'Masterclasses',
    title: 'Learn Directly From Experts',
    description: 'Short-format sessions led by founders, investors, and operators, designed to spark immediate action.',
    thumbnail: '/76dabe3d373fddf3b45b44bd366fb27bda651e1c.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export default function VideoShowcaseSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handlePlayPause = (cardId: number) => {
    if (playingVideo === cardId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(cardId);
    }
  };

  return (
    <section className="relative w-full px-4 py-12 md:px-8 md:py-12 lg:px-20 lg:py-10 xl:px-20 xl:py-10 bg-gradient-to-br from-[#0a0a1f] via-[#1a1a3e] to-[#0a0a1f] overflow-hidden">
      {/* Background Lights Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Light */}
        <div className="absolute -left-[715px] top-[553px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light">
          <Image
            src="/38073718a775b41f92f103107765536495d4eff9.svg"
            alt=""
            fill
            className="rotate-180"
          />
        </div>
        {/* Right Light */}
        <div className="absolute left-[262px] -top-[473px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light">
          <Image
            src="/628e3112810d600fe519cbc20b68fa625059cf03.svg"
            alt=""
            fill
          />
        </div>
      </div>

      {/* Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
          alt=""
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1275px] mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-white mb-3 leading-[1.2] md:leading-[1] tracking-[-0.02em] md:tracking-[-0.04em]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Step Inside Our Classrooms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-[#9ca3af] leading-[1.5]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            This is what entrepreneurship looks like.
          </motion.p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
          {videoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="flex flex-col gap-4 md:gap-6"
            >
              {/* Category Badge */}
              <div className="flex flex-col gap-2">
                <div className="inline-flex self-start">
                  <div className="px-3 md:px-4 py-1.5 md:py-2 bg-black/10 backdrop-blur-md rounded-full border-[0.5px] border-white/20">
                    <span
                      className="text-white text-base md:text-lg font-medium leading-[1.5]"
                      style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                    >
                      {card.category}
                    </span>
                  </div>
                </div>

                {/* Video Container with gradient border effect */}
                <div className="relative h-[280px] sm:h-[350px] md:h-[400px] rounded-[20px] md:rounded-[24px] p-[2px] bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-blue-500/30">
                  <div className="relative h-full rounded-[18px] md:rounded-[22px] overflow-hidden bg-gradient-to-b from-[#0a0e2e] to-[#000814]">
                    {playingVideo === card.id && card.videoUrl ? (
                      <>
                        <iframe
                          src={`${card.videoUrl}?autoplay=1&mute=1`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={card.title}
                        />
                        <button
                          onClick={() => setPlayingVideo(null)}
                          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                        >
                          <XMarkIcon className="w-6 h-6 text-white" />
                        </button>
                      </>
                    ) : (
                      <>
                        {/* Person Image */}
                        <Image
                          src={card.thumbnail}
                          alt={card.title}
                          fill
                          className="object-contain object-top bg-gradient-to-b from-black to-blue-900"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index < 2}
                        />

                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Play Button positioned at bottom left */}

                        <motion.button
                          onClick={() => handlePlayPause(card.id)}
                          className="absolute left-12 md:left-18 bottom-[-20] md:bottom-[-30] group/play z-10  -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#3232E6]/50 to-[#3232E6]/50 rounded-lg md:rounded-xl flex items-center justify-center hover:from-[#3232E6]/70 hover:to-[#3232E6]/70 transition-all group shadow-2xl border-2 border-white/20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className='w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20  bg-gradient-to-br from-[#3232E6]/80 to-[#3232E6]/80 rounded-lg md:rounded-xl flex items-center justify-center hover:from-[#3232E6] hover:to-[#3232E6] transition-all group shadow-2xl border-2 border-white/20'>
                            <PlayIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white ml-1 group-hover:scale-110 transition-transform" />
                          </div>
                        </motion.button>

                        {/* <button
                          onClick={() => handlePlayPause(card.id)}
                          className="absolute left-12 bottom-12 group/play z-10"
                        >
                          <div className="relative">
                            <div className="absolute -inset-2 bg-[#4242ff]/20 rounded-2xl blur-xl group-hover/play:bg-[#4242ff]/30 transition-colors" />

                            <div className="relative w-[72px] h-[72px] bg-[#4242ff]/80 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover/play:bg-[#4242ff] transition-all transform group-hover/play:scale-105">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1"
                              >
                                <path
                                  d="M12 8L24 16L12 24V8Z"
                                  fill="white"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </button> */}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-2 md:px-3 pb-2">
                <h3
                  className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3 tracking-[-0.02em] md:tracking-[-0.04em]"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[15px] md:text-[18px] text-[#9ca3af] leading-[1.5] opacity-80"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}