'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';

interface MasterclassHeroSectionProps {
  breadcrumb?: {
    category: string;
  };
  title?: string;
  sessionDate?: string;
  videoThumbnail?: string;
  videoUrl?: string;
}

const MasterclassHeroSection = ({
  breadcrumb = {
    category: 'BowerClass'
  },
  title = 'UX for Founders – Live Masterclass',
  sessionDate = 'July 2, 2025',
  videoThumbnail = '/ae69c7fdf8c9a2009b7d3191d66607b985367a4e.png',
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'
}: MasterclassHeroSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#020100] z-10" />

          {/* Stars Background */}
          <div className="absolute inset-0">
            <Image
              src="/d4116a9279920dc5a7fa85b3e826b75d12b8f94f.svg"
              alt=""
              fill
              className="object-cover mix-blend-luminosity"
            />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0">
            <Image
              src="/c50763198b00eb36abbe971a32aae084e900f101.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Light Effects */}
          <div className="absolute -top-[979px] left-[144.95px] w-[1693.86px] h-[1401.86px]">
            <Image
              src="/5f8e28f5d42f2db2b81c70c1ec2ccd0fe5e0895d.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute top-[127px] left-[153.95px] w-[1693.86px] h-[1401.86px] rotate-180">
            <Image
              src="/97804167d3c7bf553a6dcc490c1c7f4d65dc06f7.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 pb-32 md:pb-40 lg:pb-48">
          <div className="max-w-[1440px] w-full mx-auto">
            {/* Breadcrumb */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-[14px] md:text-[16px] lg:text-[18px] text-white mb-3 md:mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Programs &gt; Masterclass &gt;{' '}
              <span className="font-medium text-[#4242ff]">{breadcrumb.category}</span>
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[32px] md:text-[50px] lg:text-[80px] font-bold text-white text-center tracking-[-1.5px] md:tracking-[-3px] lg:tracking-[-4px] mb-2 md:mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {title}
            </motion.h1>

            {/* Session Status */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-[#c3c3c3] text-center tracking-[-0.64px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              This session concluded on {sessionDate}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative bg-gradient-to-b from-black via-[#6e6e8c] to-[#f4f4ff] -mt-[200px] md:-mt-[250px] lg:-mt-[300px] pb-12 md:pb-16 lg:pb-20 z-30">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] rounded-[20px] overflow-hidden group cursor-pointer"
            onClick={handlePlayClick}
          >
            {/* Video Thumbnail */}
            <Image
              src={videoThumbnail}
              alt={title}
              fill
              className="object-cover"
            />

            {/* Play Button */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Outer circle */}
                  <div className="absolute inset-0 w-[80px] h-[80px] md:w-[108px] md:h-[108px] bg-[#3232e6] opacity-50 rounded-[12px] md:rounded-[16px] border border-white" />

                  {/* Inner circle */}
                  <div className="relative w-[66px] h-[66px] md:w-[90px] md:h-[90px] bg-[#3232e6] opacity-60 rounded-[12px] md:rounded-[16px] border border-white flex items-center justify-center ml-[7px] md:ml-[9px] mt-[7px] md:mt-[9px]">
                    {/* Play Icon */}
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                      <PlayIcon className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Video iframe (shown when playing) */}
            {isPlaying && (
              <div className="absolute inset-0 bg-white">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${videoUrl}?autoplay=1`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --masterclass-bg: #efefff;
          --masterclass-dark: #020100;
          --masterclass-white: #ffffff;
          --masterclass-primary: #4242ff;
          --masterclass-primary-hover: #3232e6;
          --masterclass-text-primary: #111827;
          --masterclass-text-secondary: #4b5563;
          --masterclass-text-muted: #c3c3c3;
          --masterclass-border: #d1d5db;
        }

        @media (max-width: 768px) {
          .rounded-\\[20px\\] {
            border-radius: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default MasterclassHeroSection;