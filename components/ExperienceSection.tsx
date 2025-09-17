'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Exclusive Opportunities',
      description: 'Alumni gain early access to speaker sessions, hiring calls, funding updates, and curated global events.',
      image: '/705bf0f2c81c591ada37f1c3a84d3925e5cfa5a3.png',
      altImage: '/92575d69a59c5475949951f36ffdef6b9bafdb6b.png'
    },
    {
      title: 'Founder-Led Collaboration',
      description: 'A growing network of builders across industries and regions collaborating on ventures, side projects, and shared investments.',
      image: '/2343104673cf05890f84051bf87d6a98d850c567.png'
    },
    {
      title: 'Meaningful Involvement',
      description: 'Opportunities to mentor current students, judge pitch events, and return as guest speakers to shape the next generation.',
      image: '/f550c1dedeb30df16c249d3f4b476f35d4d86b1c.png'
    },
    {
      title: 'Lifelong Learning',
      description: 'Access to alumni-only masterclasses, workshops, and fireside chats designed to support continuous growth as entrepreneurial leaders.',
      image: '/6a2128e8688e77560f23bdbee793bd79a24e5018.png'
    }
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden py-[70px] px-4 md:px-10 lg:px-[101px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/5e6a90106bf267ca0ace095bea11e4914493cf0b.svg"
          alt=""
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 px-4"
        >
          <h2
            className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-white capitalize tracking-[-1.76px] mb-[25px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Why Builders Stay With Bower Beyond Graduation?
          </h2>
          <p
            className="text-[16px] md:text-[18px] lg:text-[20px] text-[#c3c3c3] leading-[24px] md:leading-[27px] lg:leading-[30px] max-w-[900px] mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The Bower alumni network offers lasting value through mentorship, meaningful collaborations, and a shared commitment to building beyond the classroom.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="relative backdrop-blur-[22px] rounded-[24px] border-2 border-white p-4 md:p-6 h-auto lg:h-[500px] overflow-hidden"
                style={{
                  background: 'radial-gradient(1263px at 50% 102.02%, rgba(1, 1, 39, 0.2) 0%, rgba(1, 1, 75, 0.2) 25.5%, rgba(0, 0, 111, 0.2) 51%, rgba(1, 1, 75, 0.2) 75.5%, rgba(1, 1, 39, 0.2) 100%), #1c1b1e'
                }}
              >
                <div className="flex flex-col lg:flex-row gap-6 h-full">
                  {/* Text Content */}
                  <div className="flex flex-col justify-end w-full lg:w-[400px]">
                    <div className="flex flex-col gap-3">
                      <h3
                        className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-white tracking-[-0.96px]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {experience.title}
                      </h3>
                      <p
                        className="text-[16px] md:text-[17px] lg:text-[18px] text-gray-300 leading-[24px] md:leading-[26px] lg:leading-[27px]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {experience.description}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative flex-1 h-[250px] md:h-[350px] lg:h-full rounded-[8px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: experience.altImage
                          ? `url('${experience.image}'), url('${experience.altImage}')`
                          : `url('${experience.image}')`,
                        backgroundColor: 'rgba(0, 0, 0, 0.2)'
                      }}
                    />
                    {/* White border overlay */}
                    <div className="absolute inset-[-2px] border-2 border-white rounded-[10px] pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --experience-bg: #000000;
          --experience-card-bg: #1c1b1e;
          --experience-title: #ffffff;
          --experience-subtitle: #c3c3c3;
          --experience-text: #d1d5db;
          --experience-border: #ffffff;
        }

        @media (max-width: 768px) {
          .backdrop-blur-\\[22px\\] {
            backdrop-filter: blur(15px);
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;