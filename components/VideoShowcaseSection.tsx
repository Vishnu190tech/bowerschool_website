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
    thumbnail: '/seed-person.jpg',
    videoUrl: 'https://www.youtube.com/embed/PD9V-YdigFk'
  },
  {
    id: 2,
    category: 'BUILD',
    title: 'Build Ventures From Scratch',
    description: 'An immersive 3-year journey in tech entrepreneurship for UG founders ready to turn ideas into ventures.',
    thumbnail: '/build-person.jpg',
    videoUrl: 'https://www.youtube.com/embed/PD9V-YdigFk'
  },
  {
    id: 3,
    category: 'LEAD',
    title: 'Level Up Your Startup',
    description: 'Executive programs for professionals ready to build, scale, or invest with strategic clarity.',
    thumbnail: '/lead-person.jpg',
    videoUrl: 'https://www.youtube.com/embed/PD9V-YdigFk'
  },
  {
    id: 4,
    category: 'Masterclasses',
    title: 'Learn Directly From Experts',
    description: 'Short-format sessions led by founders, investors, and operators, designed to spark immediate action.',
    thumbnail: '/masterclass-person.jpg',
    videoUrl: 'https://www.youtube.com/embed/PD9V-YdigFk'
  }
];

export default function VideoShowcaseSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  // Generate consistent star positions using a seeded approach
  const stars = Array.from({ length: 50 }, (_, i) => ({
    left: `${(i * 37 % 100)}%`,
    top: `${(i * 53 % 100)}%`,
    animationDelay: `${(i * 0.06) % 3}s`,
    animationDuration: `${3 + (i * 0.08) % 4}s`
  }));

  const handlePlayPause = (cardId: number) => {
    if (playingVideo === cardId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(cardId);
    }
  };

  return (
    <section className="relative w-full px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20 bg-gradient-to-br from-[#0a0a1f] via-[#1a1a3e] to-[#0a0a1f] overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration
            }}
          />
        ))}
      </div>

      {/* Light Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Step Inside Our Classrooms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300"
          >
            This is what entrepreneurship looks like.
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {videoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative group"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm">
                {/* Category Label */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-full text-sm font-bold text-white uppercase tracking-wider border border-white/20">
                    {card.category}
                  </span>
                </div>

                {/* Video/Thumbnail Container */}
                <div className="relative h-[420px] bg-gradient-to-br from-[#1a1a3e] to-[#0a0a1f] overflow-hidden">
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
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                      {/* Person Image with object-cover */}
                      <Image
                        src={card.thumbnail}
                        alt={card.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {/* Play Button */}
                      <button
                        onClick={() => handlePlayPause(card.id)}
                        className="absolute left-8 bottom-[45%] group/play z-10"
                      >
                        <div className="relative">
                          <div className="w-16 h-16 bg-[#4242ff]/80 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-[#4242ff]">
                            <PlayIcon className="w-7 h-7 text-white ml-1" />
                          </div>
                          <div className="absolute inset-0 bg-[#4242ff]/40 rounded-full blur-xl group-hover/play:bg-[#4242ff]/60" />
                        </div>
                      </button>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {videoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/10">
                {/* Header with Category */}
                <div className="px-4 py-3 border-b border-white/10">
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                    {card.category}
                  </span>
                </div>

                {/* Image and Play Button */}
                <div className="relative h-[200px] bg-gradient-to-br from-[#1a1a3e] to-[#0a0a1f] overflow-hidden">
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
                        className="absolute top-2 right-2 z-20 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center"
                      >
                        <XMarkIcon className="w-5 h-5 text-white" />
                      </button>
                    </>
                  ) : (
                    <>
                      <Image
                        src={card.thumbnail}
                        alt={card.title}
                        fill
                        className="object-cover object-center"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                      {/* Centered Play Button */}
                      <button
                        onClick={() => handlePlayPause(card.id)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-14 h-14 bg-[#4242ff]/90 rounded-full flex items-center justify-center transform transition-all duration-300 active:scale-95">
                          <PlayIcon className="w-6 h-6 text-white ml-0.5" />
                        </div>
                      </button>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}