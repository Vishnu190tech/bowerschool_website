'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyPartnerWithSeedSection = () => {
  const cards = [
    {
      title: "The Big Pitch",
      description: "Students present their ideas to real mentors and investors.",
      number: "01",
      rotation: -3.23
    },
    {
      title: "Internship Exposure",
      description: "Internship experiences and CESIM simulation-based learning",
      number: "02",
      rotation: 2
    },
    {
      title: "Build Your Own Chatbot",
      description: "Use simple AI tools to create a chatbot that helps pitch your startup.",
      number: "03",
      rotation: -2
    },
    {
      title: "Think Like a Founder",
      description: "Learn to spot problems, test ideas, and build real-world solutions from scratch.",
      number: "04",
      rotation: 2
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#180b00] to-[#120800] overflow-hidden">
      {/* Background Grid Pattern - Hidden on Mobile */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/29976e9143c1c1e2d4e18983f8785909f23f2cc8.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Main Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 py-8 md:py-10">


        <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-[50px]">
          {/* Left Section - Title */}
          <div className="flex-1 min-w-0">
            <h2
              className="text-[40px] md:text-[60px] lg:text-[80px] font-bold leading-[1.1] md:leading-[1.1] lg:leading-[80px] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="text-white">Why Partner </span>
              <br />
              <span className="text-white">With </span>
              <span className="text-[#ff8829]">SEED?</span>
            </h2>
          </div>

          {/* Right Section - Cards */}
          <div className="flex-1 flex flex-col gap-4 md:gap-5 lg:gap-6 px-0 md:px-4 lg:px-24">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`relative w-full md:w-[400px] lg:w-[450px] h-[200px] md:h-[220px] lg:h-[250px]`}
                  style={{
                    transform: `rotate(${card.rotation}deg)`
                  }}
                >
                  {/* Glassmorphic Card */}
                  <div
                    className="absolute inset-0 backdrop-blur-md backdrop-filter bg-white/10 rounded-[14px] md:rounded-[16px] lg:rounded-[18px] border border-[#fff8f2]/20"
                    style={{
                      backgroundImage: `radial-gradient(71.178px at 208.23px 34.861px, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55.823%, rgba(0, 0, 0, 0.3) 73.997%, rgba(0, 0, 0, 0) 100%)`
                    }}
                  >
                    <div className="relative h-full px-6 md:px-7 lg:px-8 py-4 md:py-5 lg:py-6 flex flex-col gap-3 md:gap-3.5 lg:gap-4">
                      {/* Title */}
                      <h3
                        className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#fbfff3] tracking-[-0.8px] md:tracking-[-0.88px] lg:tracking-[-0.96px]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#fbfff3] leading-[1.4] md:leading-[1.5] lg:leading-[24px] pr-12 md:pr-14 lg:pr-0"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {card.description}
                      </p>

                      {/* Number */}
                      <div
                        className="absolute bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 text-[50px] md:text-[65px] lg:text-[80px] font-bold text-[rgba(255,249,244,0.2)] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {card.number}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithSeedSection;