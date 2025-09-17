'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
}

const SpeakersAndMentorsSection = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: 'Kunal Shah',
      role: 'Cred Founder, Advisor Sequoia Capital, Advisor AngelList, Avid Angel Investor',
      image: '/f28be759a114615d9b38478feeac00482086f58c.png'
    },
    {
      id: 2,
      name: 'Falguni Nayar',
      role: 'Cred Founder, Advisor Sequoia Capital, Advisor AngelList, Avid Angel Investor',
      image: '/4ffb227670a78c8ece3f6e04edd7ba79765ab588.png'
    },
    {
      id: 3,
      name: 'Ritesh Agarwal',
      role: 'Cred Founder, Advisor Sequoia Capital, Advisor AngelList, Avid Angel Investor',
      image: '/47f2ab78b11ecb8ea984c7be90e716ef9d199291.png'
    },
    {
      id: 4,
      name: 'Ritesh Agarwal',
      role: 'Cred Founder, Advisor Sequoia Capital, Advisor AngelList, Avid Angel Investor',
      image: '/47f2ab78b11ecb8ea984c7be90e716ef9d199291.png'
    },
    {
      id: 5,
      name: 'Kunal Shah',
      role: 'Cred Founder, Advisor Sequoia Capital, Advisor AngelList, Avid Angel Investor',
      image: '/f28be759a114615d9b38478feeac00482086f58c.png'
    },
    {
      id: 6,
      name: 'Falguni Nayar',
      role: 'Cred Founder, Advisor Sequoia Capital, Advisor AngelList, Avid Angel Investor',
      image: '/4ffb227670a78c8ece3f6e04edd7ba79765ab588.png'
    },
    {
      id: 7,
      name: 'Falguni Nayar',
      role: 'Cred Founder, Advisor Sequoia Capital, Advisor AngelList, Avid Angel Investor',
      image: '/4ffb227670a78c8ece3f6e04edd7ba79765ab588.png'
    },
    {
      id: 8,
      name: 'Ritesh Agarwal',
      role: 'Cred Founder, Advisor Sequoia Capital, Advisor AngelList, Avid Angel Investor',
      image: '/47f2ab78b11ecb8ea984c7be90e716ef9d199291.png'
    },
    {
      id: 9,
      name: 'Kunal Shah',
      role: 'Cred Founder, Advisor Sequoia Capital, Advisor AngelList, Avid Angel Investor',
      image: '/f28be759a114615d9b38478feeac00482086f58c.png'
    }
  ];

  // Split speakers into rows for desktop
  const firstRow = speakers.slice(0, 3);
  const secondRow = speakers.slice(3, 6);
  const thirdRow = speakers.slice(6, 9);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const SpeakerCard = ({ speaker, index }: { speaker: Speaker; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="relative flex-1 min-w-[280px] h-[350px] md:h-[400px] lg:h-[450px] rounded-[16px] overflow-hidden group cursor-pointer"
      style={{
        backgroundImage: `url('${speaker.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div
          className="backdrop-blur-[22px] rounded-[16px] p-4 border border-white"
          style={{
            background: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%),
                       linear-gradient(270deg, rgba(255, 255, 255, 0.03) 0%, rgba(66, 66, 255, 0.255) 43.75%,
                       rgba(66, 66, 255, 0.4) 84.615%, rgba(66, 66, 255, 0.4) 99.99%, rgba(255, 255, 255, 0.03) 100%)`
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <h3
              className="text-white text-[20px] md:text-[24px] font-semibold tracking-[-0.96px] whitespace-nowrap"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              {speaker.name}
            </h3>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform"
              aria-label={`${speaker.name} LinkedIn`}
            >
              <Image
                src="/07007528bef5912ebf83c5b9645ab45487edce6c.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="w-full h-full"
              />
            </a>
          </div>
          <p
            className="text-gray-300 text-[14px] md:text-[16px] leading-[24px]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            {speaker.role}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      className="relative w-full min-h-screen px-4 py-8 md:px-10 md:py-10 lg:px-20 lg:py-10 overflow-hidden"
      style={{
        background: `linear-gradient(rgba(6, 6, 32, 0.5) 0%, rgba(6, 6, 32, 0.5) 28.365%,
                    rgba(6, 6, 32, 0.5) 55.288%, rgba(6, 6, 32, 0.5) 75.962%,
                    rgba(5, 5, 14, 0.5) 100%),
                    linear-gradient(rgb(24, 26, 28) 0%, rgb(24, 26, 28) 28.365%,
                    rgb(0, 5, 15) 55.288%, rgb(24, 26, 28) 75.962%, rgb(24, 26, 28) 100%)`
      }}
    >
      {/* Background Decorative Elements */}
      {/* Lights - Top Left (Rotated) */}
      <div className="absolute -left-[715px] top-[553px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light rotate-180 hidden lg:block pointer-events-none">
        <Image
          src="/94cd485de82f167a22fb76cd53b4df5de4c6dd5b.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Stars */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-full max-h-[1438px] pointer-events-none opacity-30 md:opacity-60 lg:opacity-100">
        <Image
          src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Lights - Additional (Rotated) */}
      <div className="absolute -left-[715px] top-[553px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light rotate-180 hidden lg:block pointer-events-none">
        <Image
          src="/af9f30118a1a235614b64459f75fd2299a711ef7.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Lights - Top Right */}
      <div className="absolute left-[262px] -top-[473px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light hidden lg:block pointer-events-none">
        <Image
          src="/9fd109337cdf39b5e6471ce5a4b9e65f204bc9da.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-[1440px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-10 lg:mb-[34px]"
          variants={itemVariants}
        >
          <h2
            className="text-white text-[28px] md:text-[36px] lg:text-[44px] font-semibold capitalize leading-tight tracking-[-1.76px]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Speakers & Mentors
          </h2>
        </motion.div>

        {/* Speakers Grid */}
        <div className="flex flex-col gap-4">
          {/* Mobile & Tablet: Single column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
            ))}
          </div>

          {/* Desktop: 3 columns */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* First Row */}
            <div className="flex gap-4">
              {firstRow.map((speaker, index) => (
                <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
              ))}
            </div>

            {/* Second Row */}
            <div className="flex gap-4">
              {secondRow.map((speaker, index) => (
                <SpeakerCard key={speaker.id} speaker={speaker} index={index + 3} />
              ))}
            </div>

            {/* Third Row */}
            <div className="flex gap-4">
              {thirdRow.map((speaker, index) => (
                <SpeakerCard key={speaker.id} speaker={speaker} index={index + 6} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SpeakersAndMentorsSection;