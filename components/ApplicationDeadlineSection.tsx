'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface DeadlineTheme {
  primary: string;
  secondary: string;
  bgGradientFrom: string;
  bgGradientVia: string;
  bgGradientTo: string;
  subtitleColor: string;
  titleColor: string;
  buttonBg: string;
  buttonHoverBg: string;
  buttonText: string;
  shapeFilter: string;
  borderColor: string;
}

const DEADLINE_THEMES: Record<ThemeType, DeadlineTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgGradientFrom: '#e0e1ff',
    bgGradientVia: '#d0d3ff',
    bgGradientTo: '#c0c4ff',
    subtitleColor: 'rgba(0, 0, 0, 0.7)',
    titleColor: '#000000',
    buttonBg: '#3232e6',
    buttonHoverBg: '#2525c4',
    buttonText: '#ffffff',
    shapeFilter: 'brightness(0) saturate(100%) invert(28%) sepia(84%) saturate(3487%) hue-rotate(232deg) brightness(98%) contrast(101%)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgGradientFrom: '#e8ffc4',
    bgGradientVia: '#d9ffaa',
    bgGradientTo: '#c8ff8f',
    subtitleColor: 'rgba(0, 0, 0, 0.7)',
    titleColor: '#000000',
    buttonBg: '#8FD920',
    buttonHoverBg: '#7ac01a',
    buttonText: '#000000',
    shapeFilter: 'brightness(0) saturate(100%) invert(79%) sepia(96%) saturate(468%) hue-rotate(27deg) brightness(103%) contrast(95%)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgGradientFrom: '#fbe8da',
    bgGradientVia: '#f9d8c4',
    bgGradientTo: '#facdb0',
    subtitleColor: 'rgba(0, 0, 0, 0.7)',
    titleColor: '#000000',
    buttonBg: '#ff8829',
    buttonHoverBg: '#ff7719',
    buttonText: '#ffffff',
    shapeFilter: 'brightness(0) saturate(100%) invert(56%) sepia(86%) saturate(2787%) hue-rotate(347deg) brightness(102%) contrast(101%)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgGradientFrom: '#e8ebff',
    bgGradientVia: '#d4d9ff',
    bgGradientTo: '#c0c7ff',
    subtitleColor: 'rgba(0, 0, 0, 0.7)',
    titleColor: '#000000',
    buttonBg: '#4242ff',
    buttonHoverBg: '#3232e6',
    buttonText: '#ffffff',
    shapeFilter: 'brightness(0) saturate(100%) invert(36%) sepia(96%) saturate(4787%) hue-rotate(232deg) brightness(102%) contrast(101%)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
};

interface Shape {
  src: string;
  width: number;
  height: number;
}

interface ApplicationDeadlineSectionProps {
  theme?: ThemeType;
  subtitle?: string;
  deadline?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  gridBackground?: string;
  shapes?: Shape[];
}

const DEFAULT_SHAPES: Shape[] = [
  { src: '/33e8bbd207354ff11abc49423dde878b9e280429.png', width: 180, height: 180 },
  { src: '/8fb4d677493a8b267f15c3fce1e10a15ae6c0c0c.png', width: 140, height: 140 },
  { src: '/9641b192bfa68930ac1d6a273b937ff3d4d4a23e.png', width: 200, height: 200 },
  { src: '/add325ef594a2f5556de2dc58fcdca4757039ce5.png', width: 120, height: 120 },
  { src: '/6fefdb0d58b33b7a5c46beacd300330487b242af.png', width: 130, height: 130 },
];

export default function ApplicationDeadlineSection({
  theme = 'seed',
  subtitle = 'Program Application Deadline',
  deadline = '20th April 2025',
  buttonText = 'Apply Now',
  onButtonClick,
  gridBackground = '/4e9b966a09a73b28d089dd6add69f0f1eebcc4c1.svg',
  shapes = DEFAULT_SHAPES
}: ApplicationDeadlineSectionProps) {
  const currentTheme = DEADLINE_THEMES[theme];

  return (
    <section
      className="relative w-full lg:h-[400px] h-[350px] overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${currentTheme.bgGradientFrom}, ${currentTheme.bgGradientVia}, ${currentTheme.bgGradientTo})`
      }}
    >
      <div className="relative max-w-[1440px] mx-auto h-full">
        {/* Background Grid */}
        <div className="absolute inset-0">
          <Image
            src={gridBackground}
            alt=""
            fill
            className="object-cover opacity-15"
          />
        </div>

        {/* 3D Graphics on the right - Hidden on Mobile */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-full lg:w-3/4">
          {/* Main Shapes - Animated */}
          <motion.div
            className="absolute right-[5%] lg:right-[8%] top-[-5%] w-[120px] lg:w-[180px] h-[120px] lg:h-[180px]"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src={shapes[0].src}
              alt=""
              width={shapes[0].width}
              height={shapes[0].height}
              className="w-full h-full"
              style={{
                filter: `${currentTheme.shapeFilter} blur(3px)`,
                opacity: 0.8
              }}
            />
          </motion.div>

          <motion.div
            className="absolute right-[25%] lg:right-[28%] top-[15%] lg:top-[20%] w-[100px] lg:w-[140px] h-[100px] lg:h-[140px]"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <Image
              src={shapes[1].src}
              alt=""
              width={shapes[1].width}
              height={shapes[1].height}
              className="w-full h-full"
              style={{
                filter: `${currentTheme.shapeFilter} blur(4px)`,
                opacity: 0.75
              }}
            />
          </motion.div>

          <motion.div
            className="absolute right-[3%] lg:right-[5%] bottom-[-5%] w-[140px] lg:w-[200px] h-[140px] lg:h-[200px]"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 4, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Image
              src={shapes[2].src}
              alt=""
              width={shapes[2].width}
              height={shapes[2].height}
              className="w-full h-full"
              style={{
                filter: `${currentTheme.shapeFilter} blur(5px)`,
                opacity: 0.8
              }}
            />
          </motion.div>

          <motion.div
            className="absolute right-[18%] lg:right-[20%] bottom-[8%] lg:bottom-[12%] w-[90px] lg:w-[120px] h-[90px] lg:h-[120px]"
            animate={{
              y: [0, 18, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          >
            <Image
              src={shapes[3].src}
              alt=""
              width={shapes[3].width}
              height={shapes[3].height}
              className="w-full h-full"
              style={{
                filter: `${currentTheme.shapeFilter} blur(3px)`,
                opacity: 0.7
              }}
            />
          </motion.div>

          <motion.div
            className="absolute right-[35%] lg:right-[38%] top-[8%] lg:top-[10%] w-[95px] lg:w-[130px] h-[95px] lg:h-[130px]"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          >
            <Image
              src={shapes[4].src}
              alt=""
              width={shapes[4].width}
              height={shapes[4].height}
              className="w-full h-full"
              style={{
                filter: `${currentTheme.shapeFilter} blur(4px)`,
                opacity: 0.65
              }}
            />
          </motion.div>
        </div>

        {/* Mobile Graphics - Animated */}
        <div className="md:hidden absolute right-0 top-0 h-full w-full">
          <motion.div
            className="absolute right-[5%] top-[5%] w-[70px] h-[70px]"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 3, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src={shapes[0].src}
              alt=""
              width={70}
              height={70}
              className="w-full h-full"
              style={{
                filter: `${currentTheme.shapeFilter} blur(2px)`,
                opacity: 0.7
              }}
            />
          </motion.div>
          <motion.div
            className="absolute right-[30%] top-[15%] w-[55px] h-[55px]"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -2, 0]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4
            }}
          >
            <Image
              src={shapes[1].src}
              alt=""
              width={55}
              height={55}
              className="w-full h-full"
              style={{
                filter: `${currentTheme.shapeFilter} blur(3px)`,
                opacity: 0.65
              }}
            />
          </motion.div>
          <motion.div
            className="absolute right-[8%] bottom-[25%] w-[80px] h-[80px]"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 4, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7
            }}
          >
            <Image
              src={shapes[2].src}
              alt=""
              width={80}
              height={80}
              className="w-full h-full"
              style={{
                filter: `${currentTheme.shapeFilter} blur(3px)`,
                opacity: 0.7
              }}
            />
          </motion.div>
          <motion.div
            className="absolute right-[45%] bottom-[15%] w-[60px] h-[60px]"
            animate={{
              y: [0, 12, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          >
            <Image
              src={shapes[3].src}
              alt=""
              width={60}
              height={60}
              className="w-full h-full"
              style={{
                filter: `${currentTheme.shapeFilter} blur(2px)`,
                opacity: 0.6
              }}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col  pl-10 lg:px-24  h-full justify-around items-start">
          <div className="flex flex-col gap-1 items-start">
            <p
              className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] mb-1"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: currentTheme.subtitleColor
              }}
            >
              {subtitle}
            </p>
            <h2
              className="text-[32px] md:text-[44px] lg:text-[56px] font-semibold tracking-[-1.2px] md:tracking-[-1.6px] lg:tracking-[-2px] leading-[1]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: currentTheme.titleColor
              }}
            >
              {deadline}
            </h2>
          </div>
          <button
            className="w-fit px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-3.5 rounded-[50px] font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] transition-colors"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              backgroundColor: currentTheme.buttonBg,
              color: currentTheme.buttonText
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.buttonHoverBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.buttonBg;
            }}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>

      {/* Top and Bottom Borders */}
      <div
        className="absolute inset-x-0 top-0 h-[0.5px]"
        style={{ backgroundColor: currentTheme.borderColor }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[0.5px]"
        style={{ backgroundColor: currentTheme.borderColor }}
      />
    </section>
  );
}