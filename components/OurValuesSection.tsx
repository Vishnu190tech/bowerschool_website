'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OurValuesSection = () => {
  const values = [
    {
      icon: '/3801cd57197b3dc6920a99ddf9fa3917ad396350.svg',
      title: 'Learn by Doing',
      description: 'We believe you learn business by building it, through hands-on action, experimentation, and real-world practice.'
    },
    {
      icon: '/250e20808e4532e5f0759251a4558a36246afa37.svg',
      title: 'Get Real-World Ready',
      description: 'We prepare you for the market, not just the classroom. You leave Bower equipped with the tools, skills, and mindset to face entrepreneurial challenges.'
    },
    {
      icon: '/012293dda211eba4c1493843a87f82cfd5db08ca.svg',
      title: 'Be the Change',
      description: 'Entrepreneurs are here to lead, not follow. We help you develop the vision, courage, and purpose to create meaningful impact.'
    },
    {
      icon: '/b4540d76c812a5b6afc5266414000e3dd48cafda.svg',
      title: 'Think Boldly',
      description: 'We push you to challenge limits, question assumptions, and embrace ambitious thinking in every project.'
    },
    {
      icon: '/d9b455429081ec38168de49fa68d9b767c1de49f.svg',
      title: 'Build A Community',
      description: 'At Bower, you are never building alone. We foster a collaborative environment where ideas grow and connections create new opportunities.'
    },
    {
      icon: '/f1fada5aeec8be8be3b4d1eb513de9937ce94b25.svg',
      title: 'Own Your Journey',
      description: 'We empower you to take charge of your learning, your growth, and your entrepreneurial path, shaping your own future from the start.'
    }
  ];

  return (
    <section className="relative w-full bg-[#0a0a1f] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Stars Background */}
        <div className="absolute inset-0">
          <Image
            src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
            alt=""
            fill
            className="object-cover opacity-60"
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0">
          <Image
            src="/8aeb23c5fb51e5bd1918f4baba08a877884a2eff.svg"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Light Effects */}
        <div className="absolute -left-[715px] top-[553px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light rotate-180">
          <Image
            src="/188f49ab65e841c85eae2ffd243fc14c539c3485.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute left-[262px] -top-[473px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light">
          <Image
            src="/9fd109337cdf39b5e6471ce5a4b9e65f204bc9da.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const size = ((i * 7) % 2) + 1;
            const left = (i * 13) % 100;
            const top = (i * 17) % 100;
            const delay = ((i * 11) % 50) / 10;

            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  delay: delay,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 lg:mb-[34px]"
        >
          <h2
            className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-[#f0f0ff] capitalize tracking-[-1.76px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Our Values
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div
                className="relative h-auto min-h-[250px] md:min-h-[280px] lg:h-[300px] p-4 md:p-5 lg:p-6 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border-2 border-white backdrop-blur-[60px] flex flex-col gap-4 md:gap-5 lg:gap-6"
                  style={{
                    background: 'radial-gradient(424.41px at 50% 102.02%, rgba(1, 1, 39, 0.2) 0%, rgba(1, 1, 75, 0.2) 25.5%, rgba(0, 0, 111, 0.2) 51%, rgba(1, 1, 75, 0.2) 75.5%, rgba(1, 1, 39, 0.2) 100%), #1c1b1e'
                  }}
                >
                {/* Icon Container */}
                <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-[10px] md:rounded-[11px] lg:rounded-[12px] border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image
                    src={value.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="object-contain scale-75 md:scale-90 lg:scale-100"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-white tracking-[-0.96px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-300 leading-relaxed flex-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --values-bg: #0a0a1f;
          --values-card-bg: #1c1b1e;
          --values-title: #f0f0ff;
          --values-text: #ffffff;
          --values-description: #d1d5db;
          --values-border: #303038;
        }
      `}</style>
    </section>
  );
};

export default OurValuesSection;