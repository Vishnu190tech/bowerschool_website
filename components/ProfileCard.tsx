'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface ProfileTheme {
  primary: string;
  secondary: string;
  bgAccent: string;
  borderColor: string;
  hoverBg: string;
  darkBg: string;
  radialGradient: string;
  overlayGradient: string;
}

const PROFILE_THEMES: Record<ThemeType, ProfileTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgAccent: 'rgba(50, 50, 230, 0.1)',
    borderColor: '#3232e6',
    hoverBg: 'rgba(50, 50, 230, 0.2)',
    darkBg: '#010817',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(50, 50, 230, 0.1) 0%, rgba(66, 66, 255, 0.05) 51%, transparent 100%)',
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(1, 8, 23, 0.5) 50%, #010817 100%)',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgAccent: 'rgba(168, 243, 38, 0.1)',
    borderColor: '#A8F326',
    hoverBg: 'rgba(168, 243, 38, 0.2)',
    darkBg: '#0a1501',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(168, 243, 38, 0.1) 0%, rgba(143, 217, 32, 0.05) 51%, transparent 100%)',
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(10, 21, 1, 0.5) 50%, #0a1501 100%)',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgAccent: 'rgba(255, 136, 41, 0.1)',
    borderColor: '#ff8829',
    hoverBg: 'rgba(255, 136, 41, 0.2)',
    darkBg: '#170c01',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(255, 136, 41, 0.1) 0%, rgba(255, 191, 41, 0.05) 51%, transparent 100%)',
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(23, 12, 1, 0.5) 50%, #170c01 100%)',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgAccent: 'rgba(66, 66, 255, 0.1)',
    borderColor: '#4242FF',
    hoverBg: 'rgba(66, 66, 255, 0.2)',
    darkBg: '#010817',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(66, 66, 255, 0.1) 0%, rgba(50, 50, 230, 0.05) 51%, transparent 100%)',
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(1, 8, 23, 0.5) 50%, #010817 100%)',
  },
};

// Profile Data Interfaces
interface HardSkill {
  name: string;
  icon: string | null;
}

interface ProfileData {
  name: string;
  title: string;
  school: string;
  education: string;
  profileImage: string;
  instagramUrl?: string;
  mediumUrl?: string;
  hardSkills: HardSkill[];
  softSkills: string[];
  projects: string[];
}

// Component Props Interface
interface ProfileCardProps {
  theme?: ThemeType;
  profileData?: ProfileData;
  headerTitle?: string;
}

// Default Profile Data
const DEFAULT_PROFILE_DATA: ProfileData = {
  name: 'Aadithya Iyer',
  title: 'Young Entrepreneur',
  school: 'Bower School of Entrepreneurship',
  education: 'Grade 3',
  profileImage: '/6794569b1ec7c714d7c310e2b90d160269fb175f.png',
  instagramUrl: '#',
  mediumUrl: '#',
  hardSkills: [
    { name: 'Creative Skills', icon: null },
    { name: 'Basic Coding Skills', icon: null },
    { name: 'Design Thinking', icon: null },
    { name: 'Figma Basic', icon: '/bf0453164e9cbbb5509970b8bccbea81e82c81d0.svg' },
    { name: 'Spreadsheet Fluency', icon: '/7d851c851c3705f164ee4d16d542786caf7e79b7.svg' },
    { name: 'Design Tools', icon: null },
    { name: '<> HTML', icon: null },
  ],
  softSkills: [
    'Teamwork',
    'Problem Solving',
    'Time Management',
    'Project Management',
    'Collaboration',
    'Public Speaking',
  ],
  projects: [
    'Build your own food truck simulation',
    '"Fix the Planet" Group pitch',
    'My first Pet Tacker App',
    '1- Min Logo Maker',
  ],
};

const ProfileCard = ({
  theme = 'seed',
  profileData = DEFAULT_PROFILE_DATA,
  headerTitle = "You After Bower's Camp"
}: ProfileCardProps) => {
  const currentTheme = PROFILE_THEMES[theme];
  const { name, title, school, education, profileImage, instagramUrl, mediumUrl, hardSkills, softSkills, projects } = profileData;

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
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: currentTheme.darkBg,
        backgroundImage: currentTheme.radialGradient
      }}
    >
      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: currentTheme.overlayGradient }}
      />

      {/* Background Light Effects - Hidden on Mobile */}
      <div className="hidden md:block absolute top-[-473px] left-[262px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light">
        <Image
          src="/c4fa6ab598b6d21695881e931d07c75d081b489e.svg"
          alt="Light effect"
          fill
          className="object-cover"
        />
      </div>
      <div className="hidden md:block absolute top-[371px] left-[-735px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light">
        <Image
          src="/c4fa6ab598b6d21695881e931d07c75d081b489e.svg"
          alt="Light effect"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 flex items-center justify-center p-4 md:p-6 lg:p-8">
        <motion.div
          className="relative bg-[#161616] rounded-2xl md:rounded-3xl w-full max-w-[1280px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.3)] md:shadow-[150px_166px_63px_0px_rgba(0,0,0,0.01),96px_106px_57px_0px_rgba(0,0,0,0.04),54px_60px_48px_0px_rgba(0,0,0,0.14),24px_27px_36px_0px_rgba(0,0,0,0.23),6px_7px_20px_0px_rgba(0,0,0,0.27)] overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Top-Left Corner Border with Gradient Fade */}
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl pointer-events-none overflow-hidden">
            {/* Vertical border - full height with gradient fade and rounded ends */}
            <div
              className="absolute top-0 left-0 w-[3px] h-full rounded-full"
              style={{
                backgroundImage: `linear-gradient(to bottom, ${currentTheme.primary}, ${currentTheme.primary}80, transparent)`
              }}
            />
            {/* Horizontal border - extends to the right with gradient fade and rounded ends */}
            <div
              className="absolute top-0 left-0 h-[3px] w-[150px] md:w-[200px] lg:w-[250px] rounded-full"
              style={{
                backgroundImage: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.primary}99, transparent)`
              }}
            />
          </div>
          <div className="p-6 md:p-8 lg:p-12 ">
            {/* Header */}
            <motion.h1
              className="text-[24px] md:text-3xl lg:text-[44px] font-semibold capitalize tracking-[-1px] md:tracking-[-1.4px] lg:tracking-[-1.76px] mb-6 md:mb-9"
              style={{ color: currentTheme.primary }}
              variants={itemVariants}
            >
              {headerTitle}
            </motion.h1>

            {/* Profile Section */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-9"
              variants={itemVariants}
            >
              <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[123px] lg:h-[123px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={profileImage}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 text-center md:text-left">
                <h2 className="text-white text-[20px] md:text-[26px] lg:text-[32px] font-semibold">
                  {name}
                </h2>
                <p className="text-[#6a6a6a] text-[16px] md:text-xl lg:text-2xl">
                  {title}
                </p>
                <div className="flex gap-2 mt-2 justify-center md:justify-start items-center">
                  <motion.a
                    href={instagramUrl || '#'}
                    className="w-8 h-8 md:w-10 md:h-10"
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
                    href={mediumUrl || '#'}
                    className="w-[38px] h-[38px] md:w-[47px] md:h-[47px]"
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-6 md:mb-9"
              variants={itemVariants}
            >
              {/* Left Column */}
              <div className="flex flex-col gap-6 md:gap-9">
                {/* School Info */}
                <div className="flex flex-col gap-2">
                  <p className="text-[#6a6a6a] text-sm md:text-base">School</p>
                  <p className="text-white text-[18px] md:text-xl lg:text-2xl font-semibold">
                    {school}
                  </p>
                </div>

                {/* Education Info */}
                <div className="flex flex-col gap-2">
                  <p className="text-[#6a6a6a] text-sm md:text-base">Education</p>
                  <p className="text-white text-[18px] md:text-xl lg:text-2xl font-semibold">
                    {education}
                  </p>
                </div>
              </div>

              {/* Right Column - Projects */}
              <div className="flex flex-col gap-2">
                <p className="text-[#6a6a6a] text-sm md:text-base">Projects</p>
                <ul className="flex flex-col gap-2 md:gap-3">
                  {projects.map((project, index) => (
                    <motion.li
                      key={index}
                      className="text-white text-[16px] md:text-xl lg:text-2xl font-semibold list-disc ml-6 md:ml-9"
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
              variants={itemVariants}
            >
              {/* Hard Skills */}
              <div className="flex flex-col gap-2">
                <p className="text-[#6a6a6a] text-sm md:text-base mb-2">Hard Skills</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {hardSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="rounded-full px-2 py-1 md:px-3 md:py-1.5 flex items-center gap-1.5 md:gap-2.5"
                      style={{
                        backgroundColor: currentTheme.bgAccent,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: currentTheme.borderColor
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: currentTheme.hoverBg }}
                    >
                      {skill.icon && (
                        <Image
                          src={skill.icon}
                          alt=""
                          width={16}
                          height={16}
                          className="w-3 h-3 md:w-4 md:h-4"
                        />
                      )}
                      <span className="text-white text-xs md:text-sm lg:text-base whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="flex flex-col gap-2">
                <p className="text-[#6a6a6a] text-sm md:text-base mb-2">Soft Skills</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="rounded-full px-2 py-1 md:px-3 md:py-1.5"
                      style={{
                        backgroundColor: currentTheme.bgAccent,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: currentTheme.borderColor
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: currentTheme.hoverBg }}
                    >
                      <span className="text-white text-xs md:text-sm lg:text-base whitespace-nowrap">
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