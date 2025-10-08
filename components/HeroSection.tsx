'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';
type ThemeMode = 'dark' | 'light';

interface HeroTheme {
  primary: string;
  secondary: string;
  radialGradient: string;
  textColor: string;
  subtextColor: string;
  statTextColor: string;
  statLabelColor: string;
  avatarBorder: string;
  overlayGradient: string;
  statsBarBg: string;
  gridOpacity: number;
}

const HERO_THEMES: Record<ThemeType, Record<ThemeMode, HeroTheme>> = {
  scholarship: {
    dark: {
      primary: '#3232e6',
      secondary: '#4242FF',
      radialGradient: 'radial-gradient(circle at center, #2d3db5 0%, #1a2555 40%, #0f1535 70%, #000000 100%)',
      textColor: '#ffffff',
      subtextColor: '#d1d5db',
      statTextColor: '#ffffff',
      statLabelColor: '#d1d5db',
      avatarBorder: 'rgba(255, 255, 255, 0.2)',
      overlayGradient: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent, transparent)',
      statsBarBg: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)',
      gridOpacity: 0.3,
    },
    light: {
      primary: '#3232e6',
      secondary: '#4242FF',
      radialGradient: 'radial-gradient(circle at center, #e8e9ff 0%, #d4d7ff 40%, #c0c4ff 70%, #a8aeff 100%)',
      textColor: '#1a2555',
      subtextColor: '#4b5563',
      statTextColor: '#1a2555',
      statLabelColor: '#6b7280',
      avatarBorder: 'rgba(50, 50, 230, 0.3)',
      overlayGradient: 'linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent, transparent)',
      statsBarBg: 'linear-gradient(to top, rgba(255, 255, 255, 0.5), transparent)',
      gridOpacity: 0.15,
    },
  },
  lead: {
    dark: {
      primary: '#A8F326',
      secondary: '#8FD920',
      radialGradient: 'radial-gradient(circle at center, #4a5d1e 0%, #2d3a15 40%, #1a2310 70%, #000000 100%)',
      textColor: '#ffffff',
      subtextColor: '#d1d5db',
      statTextColor: '#ffffff',
      statLabelColor: '#d1d5db',
      avatarBorder: 'rgba(255, 255, 255, 0.2)',
      overlayGradient: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent, transparent)',
      statsBarBg: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)',
      gridOpacity: 0.3,
    },
    light: {
      primary: '#A8F326',
      secondary: '#8FD920',
      radialGradient: 'radial-gradient(circle at center, #f5ffd9 0%, #e8ffc4 40%, #d9ffaa 70%, #c8ff8f 100%)',
      textColor: '#2d3a15',
      subtextColor: '#4b5563',
      statTextColor: '#2d3a15',
      statLabelColor: '#6b7280',
      avatarBorder: 'rgba(168, 243, 38, 0.3)',
      overlayGradient: 'linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent, transparent)',
      statsBarBg: 'linear-gradient(to top, rgba(255, 255, 255, 0.5), transparent)',
      gridOpacity: 0.15,
    },
  },
  seed: {
    dark: {
      primary: '#FF8829',
      secondary: '#FFBF29',
      radialGradient: 'radial-gradient(circle at center, #5d3a1e 0%, #3a2615 40%, #231810 70%, #000000 100%)',
      textColor: '#ffffff',
      subtextColor: '#d1d5db',
      statTextColor: '#ffffff',
      statLabelColor: '#d1d5db',
      avatarBorder: 'rgba(255, 255, 255, 0.2)',
      overlayGradient: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent, transparent)',
      statsBarBg: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)',
      gridOpacity: 0.3,
    },
    light: {
      primary: '#FF8829',
      secondary: '#FFBF29',
      radialGradient: 'radial-gradient(circle at center, #fff4e6 0%, #ffe8cc 40%, #ffd9aa 70%, #ffc888 100%)',
      textColor: '#3a2615',
      subtextColor: '#4b5563',
      statTextColor: '#3a2615',
      statLabelColor: '#6b7280',
      avatarBorder: 'rgba(255, 136, 41, 0.3)',
      overlayGradient: 'linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent, transparent)',
      statsBarBg: 'linear-gradient(to top, rgba(255, 255, 255, 0.5), transparent)',
      gridOpacity: 0.15,
    },
  },
  ug: {
    dark: {
      primary: '#4242FF',
      secondary: '#3232e6',
      radialGradient: 'radial-gradient(circle at center, #2d4db5 0%, #1a2555 40%, #0f1535 70%, #000000 100%)',
      textColor: '#ffffff',
      subtextColor: '#d1d5db',
      statTextColor: '#ffffff',
      statLabelColor: '#d1d5db',
      avatarBorder: 'rgba(255, 255, 255, 0.2)',
      overlayGradient: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent, transparent)',
      statsBarBg: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)',
      gridOpacity: 0.3,
    },
    light: {
      primary: '#4242FF',
      secondary: '#3232e6',
      radialGradient: 'radial-gradient(circle at center, #e8ebff 0%, #d4d9ff 40%, #c0c7ff 70%, #a8b3ff 100%)',
      textColor: '#1a2555',
      subtextColor: '#4b5563',
      statTextColor: '#1a2555',
      statLabelColor: '#6b7280',
      avatarBorder: 'rgba(66, 66, 255, 0.3)',
      overlayGradient: 'linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent, transparent)',
      statsBarBg: 'linear-gradient(to top, rgba(255, 255, 255, 0.5), transparent)',
      gridOpacity: 0.15,
    },
  },
};

interface Avatar {
  id: number;
  src: string;
  className: string;
  delay: number;
  size: string;
}

interface Stat {
  value: string;
  label: string;
}

interface HeroSectionProps {
  theme?: ThemeType;
  mode?: ThemeMode;
  title?: string;
  subtitle?: string;
  avatars?: Avatar[];
  stats?: Stat[];
}

const DEFAULT_AVATARS: Avatar[] = [
  { id: 1, src: '/avatar1.jpg', className: 'top-[15%] left-[5%] md:top-[20%] md:left-[10%]', delay: 0, size: 'w-16 h-16 md:w-20 md:h-20' },
  { id: 2, src: '/avatar2.jpg', className: 'top-[10%] left-[25%] md:top-[15%] md:left-[30%]', delay: 0.2, size: 'w-14 h-14 md:w-18 md:h-18' },
  { id: 3, src: '/avatar3.jpg', className: 'top-[8%] right-[28%] md:top-[10%] md:right-[35%]', delay: 0.4, size: 'w-16 h-16 md:w-20 md:h-20' },
  { id: 4, src: '/avatar4.jpg', className: 'top-[12%] right-[8%] md:top-[15%] md:right-[15%]', delay: 0.6, size: 'w-18 h-18 md:w-24 md:h-24' },
  { id: 5, src: '/avatar5.jpg', className: 'bottom-[35%] left-[3%] md:bottom-[40%] md:left-[8%]', delay: 0.8, size: 'w-20 h-20 md:w-24 md:h-24' },
  { id: 6, src: '/avatar6.jpg', className: 'bottom-[30%] left-[22%] md:bottom-[35%] md:left-[25%]', delay: 1, size: 'w-14 h-14 md:w-20 md:h-20' },
  { id: 7, src: '/avatar7.jpg', className: 'bottom-[32%] right-[25%] md:bottom-[38%] md:right-[30%]', delay: 1.2, size: 'w-16 h-16 md:w-22 md:h-22' },
  { id: 8, src: '/avatar8.jpg', className: 'bottom-[28%] right-[5%] md:bottom-[35%] md:right-[10%]', delay: 1.4, size: 'w-18 h-18 md:w-24 md:h-24' },
  { id: 9, src: '/avatar9.jpg', className: 'top-[25%] left-[12%] md:top-[30%] md:left-[18%]', delay: 1.6, size: 'w-15 h-15 md:w-20 md:h-20' },
  { id: 10, src: '/avatar10.jpg', className: 'top-[22%] right-[18%] md:top-[28%] md:right-[22%]', delay: 1.8, size: 'w-16 h-16 md:w-20 md:h-20' },
];

const DEFAULT_STATS: Stat[] = [
  { value: '92%', label: 'Practitioner led Teaching' },
  { value: '3K hrs', label: 'Hours of Learning' },
  { value: '100+', label: 'Mentors associated' },
];

const HeroSection = ({
  theme = 'ug',
  mode = 'dark',
  title = 'Founders Learn Faster\nTogether',
  subtitle = 'Join 10K+ Others Taking the Leap',
  avatars = DEFAULT_AVATARS,
  stats = DEFAULT_STATS
}: HeroSectionProps) => {
  const currentTheme = HERO_THEMES[theme][mode];

  return (
    <div className="relative overflow-hidden h-full" style={{ background: currentTheme.radialGradient }}>
      {/* Grid background pattern */}
      <div className="absolute inset-0 -top-1/4 -bottom-1/4">
        <Image
          src="/39d2c8f8744f519996020faab038ed64f2942a33.svg"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: currentTheme.gridOpacity }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: currentTheme.overlayGradient }} />

      {/* Floating Avatar Images */}
      {avatars.map((avatar) => (
        <motion.div
          key={avatar.id}
          className={`absolute ${avatar.className} ${avatar.size} rounded-full overflow-hidden border-2 shadow-2xl`}
          style={{ borderColor: currentTheme.avatarBorder }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay: avatar.delay, duration: 0.5 },
            scale: { delay: avatar.delay, duration: 0.5 },
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut" as const,
              delay: avatar.delay
            }
          }}
        >
          <Image
            src={avatar.src}
            alt={`Profile ${avatar.id}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen lg:min-h-[80vh]  xl:min-h-[90vh] px-4">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: currentTheme.textColor }}
          >
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p
            className="text-lg md:text-xl mb-12"
            style={{ color: currentTheme.subtextColor }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 backdrop-blur-sm border-t-1 border-blue-200/10"
          style={{ background: currentTheme.statsBarBg }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <div
                    className="text-2xl md:text-4xl font-bold mb-2"
                    style={{ color: currentTheme.statTextColor }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm md:text-base"
                    style={{ color: currentTheme.statLabelColor }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection