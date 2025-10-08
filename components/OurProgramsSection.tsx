'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProgramData {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

interface OurProgramsSectionProps {
  programs?: ProgramData[];
}

const defaultPrograms: ProgramData[] = [
  {
    id: 'year-program',
    title: 'Year Program',
    description: 'A 12-week bootcamp (Sat & Sun) teaching ideation to pitch with real-world projects.',
    iconPath: '/25c12ee12b6162728fe43a156c0b57a7936d1f7b.svg'
  },
  {
    id: 'coco-accelerator',
    title: 'COCO Accelerator',
    description: 'A 4-week hybrid program to build proof-of-concepts with masterclasses and labs.',
    iconPath: '/bulb-light-svgrepo-com-1.png'
  },
  {
    id: 'seasonal-camp',
    title: 'Seasonal Camp',
    description: 'A 6-week full-day sprint on Lean Startup, Financial Literacy, & Design Sprints.',
    iconPath: '/1b84b46be67e262f28a5e878e102b24440f5197b.svg'
  }
];

export default function OurProgramsSection({ programs = defaultPrograms }: OurProgramsSectionProps) {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]?.id || 'year-program');

  return (
    <section className="bg-[#0c0c0c] relative overflow-hidden px-4 md:px-10 lg:px-[67px] py-8 md:py-10 lg:py-[42px]">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 46.25% 13.95%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55.823%, rgba(0,0,0,0.3) 73.997%, rgba(0,0,0,0) 100%)'
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-[18px] items-center justify-center text-white mb-6 md:mb-8 lg:mb-10">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-[48px] leading-tight text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our Programs
          </h2>
          <p className="font-normal text-lg md:text-xl lg:text-[32px] leading-relaxed text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            Choose your journey below.
          </p>
        </div>

        {/* Program Cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center justify-start py-4 md:py-6">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => setSelectedProgram(program.id)}
              className={`
                bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] h-[280px] md:h-[320px] lg:h-[400px] rounded-[32px] relative cursor-pointer
                transition-all duration-500 ease-in-out overflow-hidden
                ${selectedProgram === program.id ? 'border-[3px] border-[#ff8829] md:flex-[2]' : 'border-[2px] border-[#ff8829]/60 md:flex-[1]'}
                ${programs.length === 1 ? 'flex-1' : ''}
                hover:border-[#ff8829] hover:shadow-[0_0_40px_rgba(255,136,41,0.3)]
              `}
            >
              <div className="px-4 md:px-4 lg:px-4 py-4 md:py-4 lg:py-4 h-full flex flex-col justify-between relative">
                {/* Icon - Top Right */}
                <div className={`
                  absolute top-6 md:top-8 lg:top-10 right-6 md:right-8 lg:right-10
                  w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                  transition-all duration-500 ease-in-out
                  ${selectedProgram === program.id ? 'opacity-100 scale-110' : 'opacity-60 scale-100'}
                `}>
                  <Image
                    src={program.iconPath}
                    alt=""
                    width={128}
                    height={128}
                    className="w-full h-full object-contain filter"
                    style={{
                      filter: selectedProgram === program.id ? 'brightness(1.2) drop-shadow(0 0 20px rgba(255,136,41,0.5))' : 'brightness(0.9)'
                    }}
                  />
                </div>

                {/* Content - Bottom Left */}
                <div className={`
                  relative z-10 mt-auto max-w-[85%] md:max-w-[75%]
                  transition-all duration-500 ease-in-out
                  ${selectedProgram === program.id ? 'opacity-100' : 'opacity-90'}
                `}>
                  <h3 className={`
                    font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-white mb-3 md:mb-4
                    transition-all duration-500 ease-in-out
                  `} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {program.title}
                  </h3>
                  <p className={`
                    font-normal text-base md:text-lg lg:text-xl leading-relaxed text-gray-300
                    transition-all duration-500 ease-in-out
                    ${selectedProgram === program.id ? 'line-clamp-none opacity-100' : 'line-clamp-2 opacity-80'}
                  `} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}