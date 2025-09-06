'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ProfileCard = () => {
  const hardSkills = [
    { name: 'Creative Skills', icon: null },
    { name: 'Basic Coding Skills', icon: null },
    { name: 'Design Thinking', icon: null },
    { name: 'Figma Basic', icon: '/bf0453164e9cbbb5509970b8bccbea81e82c81d0.svg' },
    { name: 'Spreadsheet Fluency', icon: '/7d851c851c3705f164ee4d16d542786caf7e79b7.svg' },
    { name: 'Design Tools', icon: null },
    { name: '<> HTML', icon: null },
  ]

  const softSkills = [
    'Teamwork',
    'Problem Solving',
    'Time Management',
    'Project Management',
    'Collaboration',
    'Public Speaking',
  ]

  const projects = [
    'Build your own food truck simulation',
    '"Fix the Planet" Group pitch',
    'My first Pet Tacker App',
    '1- Min Logo Maker',
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Light Effects */}
      <div className="absolute top-[-473px] left-[262px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light">
        <Image
          src="/c4fa6ab598b6d21695881e931d07c75d081b489e.svg"
          alt="Light effect"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-[371px] left-[-735px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light">
        <Image
          src="/c4fa6ab598b6d21695881e931d07c75d081b489e.svg"
          alt="Light effect"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <motion.div
          className="bg-[#161616] rounded-3xl w-full max-w-[1280px] shadow-[150px_166px_63px_0px_rgba(0,0,0,0.01),96px_106px_57px_0px_rgba(0,0,0,0.04),54px_60px_48px_0px_rgba(0,0,0,0.14),24px_27px_36px_0px_rgba(0,0,0,0.23),6px_7px_20px_0px_rgba(0,0,0,0.27)]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="p-8 md:p-12">
            {/* Header */}
            <motion.h1 
              className="text-[#ff8829] text-3xl md:text-[44px] font-semibold capitalize tracking-[-1.76px] mb-9"
              variants={itemVariants}
            >
              You After Bower's Camp
            </motion.h1>

            {/* Profile Section */}
            <motion.div 
              className="flex items-center gap-12 mb-9"
              variants={itemVariants}
            >
              <div className="relative w-[123px] h-[123px] rounded-full overflow-hidden">
                <Image
                  src="/6794569b1ec7c714d7c310e2b90d160269fb175f.png"
                  alt="Aadithya Iyer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-[32px] font-semibold">
                  Aadithya Iyer
                </h2>
                <p className="text-[#6a6a6a] text-2xl">
                  Young Entrepreneur
                </p>
                <div className="flex gap-2 mt-2">
                  <motion.a 
                    href="#" 
                    className="w-10 h-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src="/deb98495f8ab05ad6b32e4f021da4aff2085013f.svg"
                      alt="Instagram"
                      width={40}
                      height={40}
                    />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-[47px] h-[47px]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src="/ca907132ebcc5203668cf1e878345ea600ac026a.svg"
                      alt="Medium"
                      width={47}
                      height={47}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Details Grid */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-9"
              variants={itemVariants}
            >
              {/* Left Column */}
              <div className="flex flex-col gap-9">
                {/* School Info */}
                <div className="flex flex-col gap-2">
                  <p className="text-[#6a6a6a] text-base">School</p>
                  <p className="text-white text-2xl font-semibold">
                    Bower School of Entrepreneurship
                  </p>
                </div>
                
                {/* Education Info */}
                <div className="flex flex-col gap-2">
                  <p className="text-[#6a6a6a] text-base">Education</p>
                  <p className="text-white text-2xl font-semibold">
                    Grade 3
                  </p>
                </div>
              </div>

              {/* Right Column - Projects */}
              <div className="flex flex-col gap-2">
                <p className="text-[#6a6a6a] text-base">Projects</p>
                <ul className="flex flex-col gap-3">
                  {projects.map((project, index) => (
                    <motion.li
                      key={index}
                      className="text-white text-2xl font-semibold list-disc ml-9"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {project}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              variants={itemVariants}
            >
              {/* Hard Skills */}
              <div className="flex flex-col gap-2">
                <p className="text-[#6a6a6a] text-base mb-2">Hard Skills</p>
                <div className="flex flex-wrap gap-3">
                  {hardSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-[rgba(255,136,41,0.1)] border border-[#ff8829] rounded-full px-3 py-1.5 flex items-center gap-2.5"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,136,41,0.2)' }}
                    >
                      {skill.icon && (
                        <Image
                          src={skill.icon}
                          alt=""
                          width={16}
                          height={16}
                        />
                      )}
                      <span className="text-white text-base whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="flex flex-col gap-2">
                <p className="text-[#6a6a6a] text-base mb-2">Soft Skills</p>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-[rgba(255,136,41,0.1)] border border-[#ff8829] rounded-full px-3 py-1.5"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,136,41,0.2)' }}
                    >
                      <span className="text-white text-base whitespace-nowrap">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProfileCard