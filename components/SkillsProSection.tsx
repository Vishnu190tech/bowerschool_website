'use client';

import Image from 'next/image';

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface SkillsTheme {
  primary: string;
  secondary: string;
  darkBg: string;
  gradientFrom: string;
  gradientTo: string;
  radialGradient: string;
  overlayGradient: string;
  cardGradient: string;
  borderGradient: string;
}

const SKILLS_THEMES: Record<ThemeType, SkillsTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    darkBg: '#010817',
    gradientFrom: 'rgb(10, 13, 26)',
    gradientTo: 'rgb(5, 8, 18)',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(50, 50, 230, 0.1) 0%, rgba(66, 66, 255, 0.05) 51%, transparent 100%)',
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(1, 8, 23, 0.5) 50%, #010817 100%)',
    cardGradient: 'linear-gradient(to top, rgba(50, 50, 230, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
    borderGradient: 'linear-gradient(180deg, rgba(66, 66, 255, 0.05) 0%, rgba(50, 50, 230, 0.02) 50%, rgba(255,255,255,0) 100%)',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    darkBg: '#0a1501',
    gradientFrom: 'rgb(15, 26, 5)',
    gradientTo: 'rgb(8, 15, 3)',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(168, 243, 38, 0.1) 0%, rgba(143, 217, 32, 0.05) 51%, transparent 100%)',
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(10, 21, 1, 0.5) 50%, #0a1501 100%)',
    cardGradient: 'linear-gradient(to top, rgba(168, 243, 38, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
    borderGradient: 'linear-gradient(180deg, rgba(168, 243, 38, 0.05) 0%, rgba(143, 217, 32, 0.02) 50%, rgba(255,255,255,0) 100%)',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    darkBg: '#170c01',
    gradientFrom: 'rgb(24, 11, 0)',
    gradientTo: 'rgb(18, 8, 0)',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(255, 136, 41, 0.1) 0%, rgba(255, 191, 41, 0.05) 51%, transparent 100%)',
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(23, 12, 1, 0.5) 50%, #170c01 100%)',
    cardGradient: 'linear-gradient(to top, rgba(255, 136, 41, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
    borderGradient: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0) 100%)',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    darkBg: '#010817',
    gradientFrom: 'rgb(10, 13, 26)',
    gradientTo: 'rgb(5, 8, 18)',
    radialGradient: 'radial-gradient(ellipse at center bottom, rgba(66, 66, 255, 0.1) 0%, rgba(50, 50, 230, 0.05) 51%, transparent 100%)',
    overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(1, 8, 23, 0.5) 50%, #010817 100%)',
    cardGradient: 'linear-gradient(to top, rgba(66, 66, 255, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
    borderGradient: 'linear-gradient(180deg, rgba(66, 66, 255, 0.05) 0%, rgba(50, 50, 230, 0.02) 50%, rgba(255,255,255,0) 100%)',
  },
};

// Skill Card Interface
interface SkillCard {
  icon: string;
  title: string;
  description: string;
}

// Component Props Interface
interface SkillsProSectionProps {
  theme?: ThemeType;
  mainTitle?: string;
  highlightWord?: string;
  description?: string;
  skills?: SkillCard[];
  toolsTitle?: string;
  toolsCount?: number;
}

// Default Skills Data
const DEFAULT_SKILLS: SkillCard[] = [
  {
    icon: '/596b6f4cbbf63ed57c82210f5ed2cdf7c8e23f99.svg',
    title: 'Strategic Thinking',
    description: 'Learn to define your market, craft winning business models, and plan for growth.',
  },
  {
    icon: '/bbd8fca3c16fda0e7cc5bdde4af5cdf7fb8e47a1.svg',
    title: 'Pitching & Storytelling',
    description: 'Master the art of communicating your vision to investors and customers.',
  },
  {
    icon: '/8defd23ada31f7dcafbf5034b23d0b7738e33af7.svg',
    title: 'Opportunity Sensing',
    description: 'Sharpen your instincts to spot scalable ideas, untapped markets, and businesses with high growth potential.',
  },
  {
    icon: '/6def7a8386e55608cdd55a95648bd4e1bba31258.svg',
    title: 'Customer Intelligence',
    description: 'Master the art of communicating your vision to investors and customers.',
  },
  {
    icon: '/a9c90e81df5e9e8bedb29f3f22c7d8ece0db9804.svg',
    title: 'Leadership in Action',
    description: 'Build confidence to lead teams, make decisions under pressure, and navigate entrepreneurial uncertainty.',
  },
];

export default function SkillsProSection({
  theme = 'seed',
  mainTitle = 'Skills That Make You',
  highlightWord = 'A Pro',
  description = 'Bower LEAD enhances your entrepreneurial skillset, sharpens your acumen to identify future-proof, high-growth business ideas, and turns your passion into action',
  skills = DEFAULT_SKILLS,
  toolsTitle = 'Tools you will master',
  toolsCount = 6
}: SkillsProSectionProps) {
  const currentTheme = SKILLS_THEMES[theme];

  // Render Skill Card
  const renderSkillCard = (skill: SkillCard, className?: string) => (
    <div
      className={`rounded-[16px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative overflow-hidden ${className || ''}`}
      style={{
        background: `${currentTheme.borderGradient}, #16161a`,
        boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.1), 0 20px 40px -20px rgba(0,0,0,0.5)',
        border: '1px solid transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box'
      }}
    >
      <div className="bg-[#26262b] rounded-[12px] w-16 h-16 p-4 border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
        <Image
          src={skill.icon}
          alt={skill.title}
          width={32}
          height={32}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3
          className="text-xl md:text-2xl text-white font-semibold tracking-[-0.96px]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {skill.title}
        </h3>
        <p
          className="text-base md:text-lg text-gray-100 leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {skill.description}
        </p>
      </div>
    </div>
  );

  return (
    <section
      className="relative overflow-hidden px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-[80px]"
      style={{
        backgroundColor: currentTheme.darkBg,
        backgroundImage: `${currentTheme.radialGradient}, linear-gradient(130.523deg, ${currentTheme.gradientFrom} 1.2667%, ${currentTheme.gradientTo} 100%)`
      }}
    >
      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: currentTheme.overlayGradient }}
      />

      {/* Background Effects */}
      <div className="absolute -left-[715px] top-[553px] w-[1693.85px] h-[1401.86px] mix-blend-hard-light hidden md:block">
        <div className="rotate-180 relative w-full h-full">
          <Image
            src="/e074834743b22adfea9887fd8f0c737a528f852d.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute left-[-97.64%] right-[-97.85%] h-[1438px] hidden md:block" style={{ top: 'calc(50% + 105.682px)', transform: 'translateY(-50%)' }}>
        <Image
          src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute -left-[715px] top-[553px] w-[1693.85px] h-[1401.86px] mix-blend-hard-light hidden md:block">
        <div className="rotate-180 relative w-full h-full">
          <Image
            src="/88a7a6fddfe2da555b37ee14803ef5997755cb09.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute left-[262px] -top-[473px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light hidden md:block">
        <Image
          src="/6f94940db2799aeb7f55f508c90ffe9fc6c43dcd.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1281px] mx-auto flex flex-col gap-6 md:gap-8 items-center">

        {/* Header Section */}
        <div className="w-full flex flex-col gap-4 md:gap-3">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
            <div className="w-full md:w-[608px] flex flex-col gap-1">
              <h2
                className="text-2xl md:text-3xl lg:text-[40px] text-white font-semibold tracking-[-1.6px] leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {mainTitle}
              </h2>
              <h2
                className="text-3xl md:text-4xl lg:text-[44px] font-semibold tracking-[-1.76px] leading-tight capitalize"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: currentTheme.primary }}
              >
                {highlightWord}
              </h2>
            </div>
            <div className="flex-1 w-full">
              <p
                className="text-base md:text-lg text-gray-100 font-normal leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="w-full flex flex-col gap-4">
          {/* Render first 4 skills in 2x2 grid */}
          {skills.length >= 4 && (
            <div className="flex flex-col md:flex-row gap-4 md:h-[500px]">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-4">
                {renderSkillCard(skills[0])}
                {renderSkillCard(skills[1], 'md:h-[238px]')}
              </div>
              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-4">
                {renderSkillCard(skills[2])}
                {renderSkillCard(skills[3], 'flex-1')}
              </div>
            </div>
          )}

          {/* Fifth skill card (if exists) */}
          {skills.length >= 5 && renderSkillCard(skills[4])}

          {/* Tools You Will Master */}
          <div
            className="rounded-[16px] p-4 md:p-6 flex flex-col gap-6 md:gap-11 relative overflow-hidden"
            style={{
              background: `${currentTheme.borderGradient}, #16161a`,
              boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.1), 0 20px 40px -20px rgba(0,0,0,0.5)',
              border: '1px solid transparent',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <h3
              className="text-2xl md:text-3xl lg:text-[44px] text-white font-semibold tracking-[-1.76px] capitalize"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {toolsTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
              {[...Array(toolsCount)].map((_, index) => (
                <div key={index} className="relative w-20 h-20 md:w-28 md:h-28 lg:w-[165.703px] lg:h-[165.635px]">
                  <div className="absolute inset-0 mix-blend-screen">
                    <Image
                      src="/494f153b6bdb41ce2348879c246b0d2f0b90b536.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute inset-[7.55%_7.17%_7.49%_7.47%] flex items-center justify-center">
                    <div className="rotate-180 w-full h-full relative">
                      <Image
                        src="/67ffca9e8833a73450fe8c5473bd6da3c0db71d7.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[7.92%_7.12%_7.53%_7.93%]">
                    <Image
                      src="/22646e38ffbf49292e130c52e01142f88e5cb9e5.svg"
                      alt=""
                      width={120}
                      height={120}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}