'use client';

import Image from 'next/image';
import { useState } from 'react';

// CSS Variables
const cssVariables = `
  :root {
    /* Colors */
    --color-slot-a: #df614a;
    --color-slot-b: #aaba73;
    --color-slot-c: #00416a;
    --color-slot-d: #6f8240;
    --color-break: rgba(65, 65, 65, 0.8);
    --color-text-primary: #ffffff;
    --color-text-secondary: #fff3e8;
    --color-text-light: #f7f7f7;
    --color-text-lighter: #ededed;

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 40px;
    --spacing-2xl: 60px;

    /* Typography */
    --font-primary: 'Plus Jakarta Sans', sans-serif;
    --font-secondary: 'Sora', sans-serif;
    --font-tertiary: 'Inter', sans-serif;
  }
`;

interface TimeSlot {
  type: 'slot' | 'break';
  name?: string;
  code?: string;
  courseName?: string;
  color?: string;
  width: number;
}

interface DaySchedule {
  day: string;
  slots: TimeSlot[];
}

export default function StudentScheduleSection() {
  const [selectedGrade, setSelectedGrade] = useState('Grade 12');

  const scheduleData: DaySchedule[] = [
    {
      day: 'MON',
      slots: [
        { type: 'slot', name: 'A slot', code: 'Code', courseName: 'Course Name', color: '#df614a', width: 288 },
        { type: 'slot', name: 'B slot', code: 'Code', courseName: 'Course Name', color: '#aaba73', width: 289 },
        { type: 'break', width: 123 },
        { type: 'slot', name: 'C slot', code: 'Code', courseName: 'Course Name', color: '#00416a', width: 452 },
      ]
    },
    {
      day: 'TUE',
      slots: [
        { type: 'slot', name: 'A slot', code: 'Code', courseName: 'Course Name', color: '#df614a', width: 124 },
        { type: 'slot', name: 'D slot', code: 'Code', courseName: 'Course Name', color: '#6f8240', width: 453 },
        { type: 'break', width: 123 },
        { type: 'slot', name: 'B slot', code: 'Code', courseName: 'Course Name', color: '#aaba73', width: 289 },
        { type: 'slot', name: 'C slot', code: 'Code', courseName: 'Course Name', color: '#00416a', width: 124 },
      ]
    },
    {
      day: 'WED',
      slots: [
        { type: 'slot', name: 'A slot', code: 'Code', courseName: 'Course Name', color: '#df614a', width: 453 },
        { type: 'slot', name: 'B slot', code: 'Code', courseName: 'Course Name', color: '#aaba73', width: 124 },
        { type: 'break', width: 123 },
        { type: 'slot', name: 'C slot', code: 'Code', courseName: 'Course Name', color: '#00416a', width: 453 },
      ]
    },
    {
      day: 'THU',
      slots: [
        { type: 'slot', name: 'A slot', code: 'Code', courseName: 'Course Name', color: '#df614a', width: 289 },
        { type: 'slot', name: 'D slot', code: 'Code', courseName: 'Course Name', color: '#6f8240', width: 289 },
        { type: 'break', width: 123 },
        { type: 'slot', name: 'B slot', code: 'Code', courseName: 'Course Name', color: '#aaba73', width: 123 },
        { type: 'slot', name: 'C slot', code: 'Code', courseName: 'Course Name', color: '#00416a', width: 289 },
      ]
    },
    {
      day: 'FRI',
      slots: [
        { type: 'slot', name: 'A slot', code: 'Code', courseName: 'Course Name', color: '#df614a', width: 453 },
        { type: 'slot', name: 'B slot', code: 'Code', courseName: 'Course Name', color: '#aaba73', width: 124 },
        { type: 'break', width: 123 },
        { type: 'slot', name: 'C slot', code: 'Code', courseName: 'Course Name', color: '#00416a', width: 453 },
      ]
    },
    {
      day: 'SAT',
      slots: [
        { type: 'slot', name: 'A slot', code: 'Code', courseName: 'Course Name', color: '#df614a', width: 123 },
        { type: 'slot', name: 'D slot', code: 'Code', courseName: 'Course Name', color: '#6f8240', width: 454 },
        { type: 'break', width: 122 },
        { type: 'slot', name: 'B slot', code: 'Code', courseName: 'Course Name', color: '#aaba73', width: 288 },
        { type: 'slot', name: 'C slot', code: 'Code', courseName: 'Course Name', color: '#00416a', width: 124 },
      ]
    },
  ];

  const timeLabels = ['9AM', '10AM', '11AM', '12AM', '1AM', '2AM', '3AM', '4AM', '5AM'];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
      <section className="relative overflow-hidden px-4 md:px-10 lg:px-[60px] py-6 md:py-8 lg:py-10 bg-gradient-to-r from-[#180b00] to-[#120800]">
        {/* Background Effects */}
        <div className="absolute left-[262px] -top-[473px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light hidden md:block">
          <Image
            src="/f30d25579db9d30032751b554f17061d54321833.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute -left-[715px] top-[553px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light hidden md:block">
          <div className="rotate-180">
            <Image
              src="/f8317e307f9f0f00495ae82b59db80c7a9ba9b0b.svg"
              alt=""
              width={1694}
              height={1402}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="absolute left-[-97.64%] right-[-97.85%] h-[1438px] hidden md:block" style={{ top: 'calc(50% + 369px)', transform: 'translateY(-50%)' }}>
          <Image
            src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between mb-6 md:mb-9">
            <h2
              className="text-2xl md:text-3xl lg:text-[44px] text-white font-semibold tracking-[-1.76px] capitalize text-center md:text-left"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              A Day In The Life Of A Bower Student
            </h2>
            <button className="flex items-center gap-2.5 px-4 md:px-6 lg:px-[30px] py-2.5 border border-white rounded-[30px]">
              <span
                className="text-sm md:text-base text-white font-medium"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {selectedGrade}
              </span>
              <Image
                src="/467d0e045fc420fdbe249a726f78d2aa8fff6fa1.svg"
                alt="Dropdown"
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* Schedule Grid */}
          <div className="relative overflow-x-auto md:overflow-visible">
            {/* Time Labels */}
            <div className="hidden md:flex gap-[41px] items-center ml-[61.5px] mb-[26px]">
              {timeLabels.map((time, index) => (
                <div key={index} className="w-[124px] flex justify-between">
                  <span
                    className="text-[10px] text-white"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {time}
                  </span>
                  {index < timeLabels.length - 1 && (
                    <span
                      className="text-[10px] text-white"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {timeLabels[index + 1]}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Background Grid Lines */}
            <div className="hidden md:flex absolute top-[51px] left-[61.68px] gap-[41px]">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="w-[123.76px] h-[802px] relative">
                  <Image
                    src={index === 7 ? "/ce1361e64de276accf44e2398ff182ded95b825f.svg" : "/3f05e7b3c19e09a05719bc9d020b70a449e060e6.svg"}
                    alt=""
                    width={124}
                    height={802}
                    className="opacity-20"
                  />
                </div>
              ))}
            </div>

            {/* Schedule Rows */}
            <div className="relative min-w-[800px] md:min-w-0">
              {scheduleData.map((dayData, dayIndex) => (
                <div key={dayIndex} className="flex items-center mb-4 md:mb-[24px]">
                  {/* Day Label */}
                  <div className="w-12 md:w-[60px]">
                    <span
                      className="text-sm md:text-[16px] text-white font-semibold tracking-[-0.32px]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {dayData.day}
                    </span>
                  </div>

                  {/* Time Slots */}
                  <div className="flex ml-1.5">
                    {dayData.slots.map((slot, slotIndex) => (
                      <div
                        key={slotIndex}
                        className={`h-[106px] ${slotIndex > 0 ? 'ml-[41px]' : ''}`}
                        style={{ width: `${slot.width}px` }}
                      >
                        {slot.type === 'slot' ? (
                          <div
                            className="h-full p-3 md:p-6 flex flex-col gap-1"
                            style={{
                              backgroundColor: slot.color,
                              backdropFilter: slot.name?.includes('C slot') ? 'blur(12px)' : 'none',
                            }}
                          >
                            <span
                              className="text-[10px] md:text-[12px]"
                              style={{
                                fontFamily: 'Sora, sans-serif',
                                color: slot.color === '#aaba73' || slot.color === '#6f8240' ? '#ffffff' : '#fff3e8'
                              }}
                            >
                              {slot.name}
                            </span>
                            <span
                              className="text-sm md:text-[16px] font-bold"
                              style={{
                                fontFamily: 'Sora, sans-serif',
                                color: slot.color === '#aaba73' ? '#f7f7f7' : slot.color === '#6f8240' ? '#fff3e8' : '#ffffff'
                              }}
                            >
                              {slot.code}
                            </span>
                            <span
                              className="text-[10px] md:text-[12px] font-medium"
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                color: slot.color === '#aaba73' ? '#ededed' : slot.color === '#6f8240' ? '#ffffff' : '#fff3e8'
                              }}
                            >
                              {slot.courseName}
                            </span>
                          </div>
                        ) : (
                          <div
                            className="h-full"
                            style={{ backgroundColor: 'rgba(65, 65, 65, 0.8)' }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}