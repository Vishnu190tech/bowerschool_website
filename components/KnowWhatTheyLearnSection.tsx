'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Subject {
  id: string;
  name: string;
  isActive: boolean;
}

interface LevelMeetup {
  level: number;
  isExpanded: boolean;
}

export default function KnowWhatTheyLearnSection() {
  const [selectedTrack, setSelectedTrack] = useState<'junior' | 'senior'>('junior');
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 'tech', name: 'Technology and Entrepreneurship', isActive: true },
    { id: 'economics', name: 'Economics and Finance', isActive: false },
    { id: 'design', name: 'Design Thinking and Prototyping', isActive: false },
  ]);
  const [levels, setLevels] = useState<LevelMeetup[]>([
    { level: 1, isExpanded: false },
    { level: 2, isExpanded: false },
    { level: 3, isExpanded: false },
  ]);

  const handleSubjectClick = (id: string) => {
    setSubjects(subjects.map(subject => ({
      ...subject,
      isActive: subject.id === id
    })));
  };

  const handleLevelToggle = (level: number) => {
    setLevels(levels.map(l => ({
      ...l,
      isExpanded: l.level === level ? !l.isExpanded : l.isExpanded
    })));
  };

  return (
    <section className="relative bg-white px-4 md:px-10 lg:px-24 py-8 md:py-10 lg:py-[42px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-0 mb-6 md:mb-8 lg:mb-[42px]">
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
            <h2
              className="text-[28px] md:text-[36px] lg:text-[44px] text-gray-900 font-semibold tracking-[-1px] md:tracking-[-1.4px] lg:tracking-[-1.76px] capitalize"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Know What They Learn
            </h2>
            <p
              className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-900 font-medium leading-[1.4] md:leading-[1.5] lg:leading-[30px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              foundation in creativity, teamwork, and pitch prep.
            </p>
          </div>
          <button
            className="relative flex items-center gap-2 md:gap-4 h-10 md:h-11 px-3 md:px-4 py-2 rounded-[8px] border border-[#ff8829] backdrop-blur-[32px] group hover:bg-[#ff8829] transition-colors whitespace-nowrap"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 136, 41, 0.1) 0%, rgba(255, 136, 41, 0) 100%)'
            }}
          >
            <span
              className="text-[14px] md:text-[16px] lg:text-[18px] text-[#ff8829] font-medium leading-normal md:leading-[27px] group-hover:text-white transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Download Sample
            </span>
          </button>
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center px-0 py-4 md:py-8 lg:py-[42px]">
          {/* Track Selection */}
          <div className="flex gap-4 md:gap-8 lg:gap-[123px] items-center w-full md:w-auto justify-center">
            <button
              onClick={() => setSelectedTrack('junior')}
              className={`px-3 md:px-4 py-2 md:py-2.5 rounded-[30px] transition-colors flex-1 md:flex-initial ${selectedTrack === 'junior'
                ? 'bg-[#ff8829]'
                : 'bg-[#ffe5cc]'
                }`}
            >
              <span
                className={`text-[16px] md:text-[20px] lg:text-[24px] font-semibold tracking-[-0.6px] md:tracking-[-0.8px] lg:tracking-[-0.96px] ${selectedTrack === 'junior' ? 'text-white' : 'text-black'
                  }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Junior Track
              </span>
            </button>
            <button
              onClick={() => setSelectedTrack('senior')}
              className={`px-3 md:px-4 py-2 md:py-2.5 rounded-[30px] transition-colors flex-1 md:flex-initial ${selectedTrack === 'senior'
                ? 'bg-[#ff8829]'
                : 'bg-[#ffe5cc]'
                }`}
            >
              <span
                className={`text-[16px] md:text-[20px] lg:text-[24px] font-semibold tracking-[-0.6px] md:tracking-[-0.8px] lg:tracking-[-0.96px] ${selectedTrack === 'senior' ? 'text-white' : 'text-black'
                  }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Senior Track
              </span>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="relative w-full h-auto md:h-[500px] lg:h-[588px] bg-white rounded-[10px] p-4 md:p-5 lg:p-6 overflow-hidden">
            {/* Background Elements - Hidden on Mobile */}
            <div
              className="hidden md:block absolute top-1/2 -translate-y-1/2 w-[820px] h-[820px] pointer-events-none"
              style={{ left: 'calc(50% + 48px)', transform: 'translate(-50%, -50%)' }}
            >
              <div className="absolute inset-[-15.61%]">
                <Image
                  src="/e7bf14edf6ec4b58f95d0f45044d57e619ce898d.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="hidden lg:block absolute -top-[82px] left-[-4.57%] right-[-10.82%] h-[752px] pointer-events-none">
              <Image
                src="/e0743815baf2d2cb0b8f0452c1edfc5a93b1e041.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Content Grid */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-20 h-full">
              {/* Subject Sidebar */}
              <div className="flex flex-col gap-3 md:gap-6 lg:gap-[42px] w-full lg:w-[400px]">
                {subjects.map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => handleSubjectClick(subject.id)}
                    className={`h-auto md:h-12 px-3 md:px-4 py-2 md:py-2.5 rounded-[8px] flex items-center justify-center transition-colors ${subject.isActive
                      ? 'bg-[#ff8829]'
                      : 'bg-[#ffe5cc] hover:bg-[#ffd9b3]'
                      }`}
                  >
                    <span
                      className={`text-[14px] md:text-[18px] lg:text-[24px] font-semibold tracking-[-0.5px] md:tracking-[-0.7px] lg:tracking-[-0.96px] text-center ${subject.isActive ? 'text-white' : 'text-black'
                        }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {subject.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Levels Panel */}
              <div className="flex-1 bg-[rgba(255,255,255,0.4)] rounded-[12px] md:rounded-[14px] lg:rounded-[16px] border border-white p-3 md:p-4 lg:p-6 backdrop-blur-sm">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-[42px] h-full">
                  {levels.map((level) => (
                    <div key={level.level} className="flex flex-col gap-2 md:gap-3 lg:gap-4 p-1.5 md:p-2 lg:p-2.5">
                      {/* Level Badge */}
                      <div className="bg-[#ffe5cc] px-2 md:px-2.5 py-1 md:py-1.5 rounded-[6px] md:rounded-[8px] self-start">
                        <span
                          className="text-[14px] md:text-[16px] lg:text-[20px] text-black font-medium leading-normal md:leading-[30px]"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          Level {level.level}
                        </span>
                      </div>

                      {/* MeetUps Dropdown */}
                      <button
                        onClick={() => handleLevelToggle(level.level)}
                        className="w-full border-[0.4px] border-black rounded-[6px] md:rounded-[8px] p-2 md:p-2.5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span
                          className="text-[14px] md:text-[16px] lg:text-[20px] text-black font-medium leading-normal md:leading-[30px]"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          MeetUps
                        </span>
                        <div className={`transition-transform ${level.isExpanded ? 'rotate-180' : ''}`}>
                          <Image
                            src="/606cf9e9fd1c351922ed230ca9d19b7ec1f8391d.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                          />
                        </div>
                      </button>

                      {/* Expanded Content */}
                      {level.isExpanded && (
                        <div className="pl-2 md:pl-3 lg:pl-4 py-1 md:py-2 text-gray-600">
                          <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[1.4] md:leading-[1.5] lg:leading-[24px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            MeetUp content for Level {level.level}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}