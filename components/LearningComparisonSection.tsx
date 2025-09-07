'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LearningComparisonSection = () => {
  const regularSchoolItems = [
    {
      title: 'From project-based learning',
      description: 'Focus on hands-on tasks, collaboration, and real-world applications'
    },
    {
      title: 'From personalized learning',
      description: 'Tailored educational experiences that cater to individual student needs'
    },
    {
      title: 'From experiential learning',
      description: 'Learning through direct experience, reflection, and critical thinking'
    },
    {
      title: 'From digital learning',
      description: 'Integration of technology, online resources, and interactive tools in education'
    },
    {
      title: 'From inquiry-based learning',
      description: 'Encouragement of curiosity, questioning, and exploration in the learning process.Encouragement of curiosity, questioning, and exploration in the learning process'
    },
    {
      title: 'From competency-based learning',
      description: 'Progression based on mastery of skills rather than time spent on subjects.Encouragement of curiosity, questioning, and exploration in the learning process'
    }
  ];

  const bowerItems = [
    {
      title: 'From project-based learning',
      description: 'Focus on real-world applications, teamwork, and problem-solving skills'
    },
    {
      title: 'From inquiry-based learning',
      description: 'Encouragement of curiosity, critical thinking, and research-driven exploration'
    },
    {
      title: 'From experiential learning',
      description: 'Learning through hands-on experiences, internships, and real-life challenges'
    },
    {
      title: 'From collaborative learning',
      description: 'Peer interaction, group projects, and shared perspectives to enhance understanding'
    },
    {
      title: 'From personalized learning',
      description: 'Tailoring education to individual strengths, interests, and learning paces'
    },
    {
      title: 'From competency-based education',
      description: 'Advancement based on mastery of skills rather than time spent in class'
    }
  ];

  return (
    <section className="relative w-full bg-[#252525] p-20 overflow-hidden">
      {/* Background decorations */}
      {/* Stars background */}
      <div className="absolute -left-full -right-full top-1/2 -translate-y-1/2 h-[1438px]">
        <Image
          src="/a830b0be0c379b2c97aea74fe91468fcc7e83786.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Light effects */}
      <div className="absolute -top-[131px] -left-[127px] w-[1694px] h-[1402px] mix-blend-hard-light rotate-180">
        <Image
          src="/c961e125d0f2717ccbf62a39d126334738c7df5d.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Grid elements */}
      <div className="absolute top-[12.46%] left-1/2 -translate-x-1/2">
        <div className="opacity-[0.04]">
          <Image
            src="/42d03e4399937d15094f103bc0f791e94000e994.svg"
            alt=""
            width={200}
            height={100}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 
            className="text-white capitalize mb-1"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '44px',
              fontWeight: 600,
              lineHeight: '44px',
              letterSpacing: '-1.76px'
            }}
          >
            Rewriting The Future of Learning
          </h2>
          <p 
            className="text-[#aaaab9]"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '30px'
            }}
          >
            We're not just following the old playbook—we're rewriting it for today's learners.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="flex gap-4">
          {/* Regular School Curriculum */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-[#202020] rounded-3xl p-6 border-2 border-transparent"
          >
            <h3 
              className="text-[#f0f0ff] mb-8"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: '30px',
                fontWeight: 600,
                lineHeight: '30px',
                letterSpacing: '-1.2px'
              }}
            >
              Regular School Curriculum:
            </h3>
            <div className="flex flex-col gap-4">
              {regularSchoolItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#232323] rounded-xl p-3 border border-white/20"
                >
                  <h4 
                    className="text-[#f0f0ff] mb-3"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '20px',
                      fontWeight: 500,
                      lineHeight: '30px'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p 
                    className="text-[#aaaab9]"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px'
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bower */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 rounded-3xl p-6 border-2 border-[#4242ff]/60 backdrop-blur-[30px]"
            style={{
              background: `linear-gradient(133.203deg, rgba(255, 255, 255, 0.2) 2.6545%, rgba(255, 255, 255, 0) 44.796%), 
                          radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 73.997%, rgba(0, 0, 0, 0) 100%),
                          linear-gradient(90deg, #4242ff 0%, #4242ff 100%)`,
              backgroundColor: 'rgba(32, 32, 32, 0.2)'
            }}
          >
            <h3 
              className="text-white mb-8"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: '30px',
                fontWeight: 600,
                lineHeight: '30px',
                letterSpacing: '-1.2px'
              }}
            >
              Bower
            </h3>
            <div className="flex flex-col gap-4">
              {bowerItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#232323] rounded-xl p-3 border border-white/20"
                >
                  <h4 
                    className="text-[#f0f0ff] mb-3"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '20px',
                      fontWeight: 500,
                      lineHeight: '30px'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p 
                    className="text-[#aaaab9]"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta)',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px'
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningComparisonSection;