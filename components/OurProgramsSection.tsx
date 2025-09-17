'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OurProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState('year-program');

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
          {/* Year Program Card */}
          <div
            onClick={() => setSelectedProgram('year-program')}
            className={`
              flex-1 bg-[rgba(255,255,255,0.1)] h-[280px] md:h-[320px] lg:h-[351px] rounded-2xl md:rounded-[24px] relative cursor-pointer
              transition-all duration-300 overflow-hidden
              ${selectedProgram === 'year-program' ? 'border-[3px] border-[#ff8829]' : 'border border-[#ff8829]'}
            `}
            style={{
              background: 'radial-gradient(ellipse at 46.25% 13.95%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55.823%, rgba(0,0,0,0.3) 73.997%, rgba(0,0,0,0) 100%), rgba(255,255,255,0.1)'
            }}
          >
            <div className="px-4 md:px-6 py-4 md:py-6 lg:py-[27px] h-full flex flex-col justify-end relative">
              {/* Calendar Icon */}
              <div className="absolute size-32 md:size-40 lg:size-[257px] top-1/2 right-4 md:right-8 lg:left-1/2 -translate-y-1/2 lg:-translate-x-1/2"
                   style={{ top: 'calc(50% - 30px)' }}>
                <Image
                  src="/25c12ee12b6162728fe43a156c0b57a7936d1f7b.svg"
                  alt=""
                  width={257}
                  height={257}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-bold text-xl md:text-2xl lg:text-[32px] leading-tight text-white mb-2 md:mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Year Program
                </h3>
                <p className="font-normal text-sm md:text-base lg:text-[20px] leading-relaxed text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  A 12-week bootcamp (Sat & Sun) teaching ideation to pitch with real-world projects.
                </p>
              </div>
            </div>
          </div>

          {/* COCO Accelerator Card */}
          <div
            onClick={() => setSelectedProgram('coco-accelerator')}
            className={`
              flex-1 bg-[rgba(255,255,255,0.1)] h-[280px] md:h-[320px] lg:h-[351px] rounded-2xl md:rounded-[24px] relative cursor-pointer
              transition-all duration-300 overflow-hidden
              ${selectedProgram === 'coco-accelerator' ? 'border-[3px] border-[#ff8829]' : 'border border-[#ff8829]'}
            `}
            style={{
              background: 'radial-gradient(ellipse at 46.25% 13.95%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55.823%, rgba(0,0,0,0.3) 73.997%, rgba(0,0,0,0) 100%), rgba(255,255,255,0.1)'
            }}
          >
            <div className="px-4 md:px-6 py-4 md:py-6 lg:py-[27px] h-full flex flex-col justify-end relative">
              {/* Rocket Icon */}
              <div className="absolute size-28 md:size-32 lg:size-[228px] top-2 md:top-4 lg:top-0 right-2 md:right-4 lg:right-0">
                <Image
                  src="/1b84b46be67e262f28a5e878e102b24440f5197b.svg"
                  alt=""
                  width={228}
                  height={228}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-full md:max-w-[297px]">
                <h3 className="font-bold text-xl md:text-2xl lg:text-[32px] leading-tight text-white mb-2 md:mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  COCO Accelerator
                </h3>
                <p className="font-normal text-sm md:text-base lg:text-[20px] leading-relaxed text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  A 4-week hybrid program to build proof-of-concepts with masterclasses and labs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}