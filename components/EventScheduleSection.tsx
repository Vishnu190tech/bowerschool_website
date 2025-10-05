'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface EventScheduleSectionProps {
  event?: {
    agenda?: any;
    date: string;
  };
}

const defaultScheduleData = {
  0: [
    // First Day
    {
      id: 1,
      time: '09:00 AM - 10:00 AM',
      title: 'Registration & Coffee',
      description: 'Register your personal data in customer service and take coffee before entering the room'
    },
    {
      id: 2,
      time: '10:00 AM - 11:30 AM',
      title: 'Plan & Conduct User Research',
      description: 'Many early researchers are challenged by aspect of the design and implementation of research studies as well the effective dissemination ...'
    },
    {
      id: 3,
      time: '11:30 AM - 12:00 PM',
      title: 'Q&A For Speaker',
      description: 'Register your personal data in customer service and take food before entering the room'
    },
    {
      id: 4,
      time: '12:00 PM - 13:00 PM',
      title: 'Launch Break',
      description: ''
    },
    {
      id: 5,
      time: '11:30 AM - 12:00 PM',
      title: 'Research For The Right Thing',
      description: 'Research encompasses a variety of investigative methods used to add context and insight to the design process'
    }
  ],
  1: [
    // Second Day
    {
      id: 1,
      time: '09:00 AM - 09:30 AM',
      title: 'Opening Keynote',
      description: 'Welcome address and introduction to the second day of the conference'
    },
    {
      id: 2,
      time: '09:30 AM - 11:00 AM',
      title: 'Design Systems Workshop',
      description: 'Deep dive into creating and maintaining scalable design systems for modern applications'
    },
    {
      id: 3,
      time: '11:00 AM - 12:30 PM',
      title: 'UX Strategy Panel',
      description: 'Industry leaders discuss the future of user experience design and emerging trends'
    },
    {
      id: 4,
      time: '12:30 PM - 13:30 PM',
      title: 'Networking Lunch',
      description: 'Connect with fellow designers and share experiences over lunch'
    },
    {
      id: 5,
      time: '13:30 PM - 15:00 PM',
      title: 'Interactive Design Lab',
      description: 'Hands-on session exploring interactive design principles and prototyping techniques'
    }
  ],
  2: [
    // Third Day
    {
      id: 1,
      time: '09:00 AM - 10:30 AM',
      title: 'Innovation Showcase',
      description: 'Presenting cutting-edge design projects and innovative solutions'
    },
    {
      id: 2,
      time: '10:30 AM - 12:00 PM',
      title: 'Design Thinking Masterclass',
      description: 'Advanced techniques in design thinking and problem-solving methodologies'
    },
    {
      id: 3,
      time: '12:00 PM - 13:00 PM',
      title: 'Awards Ceremony',
      description: 'Recognizing excellence in design and celebrating outstanding achievements'
    },
    {
      id: 4,
      time: '13:00 PM - 14:00 PM',
      title: 'Farewell Reception',
      description: 'Closing remarks and networking opportunities'
    },
    {
      id: 5,
      time: '14:00 PM - 15:00 PM',
      title: 'Future of Design',
      description: 'Final keynote on emerging technologies and the future landscape of design'
    }
  ]
};

export default function EventScheduleSection({ event }: EventScheduleSectionProps) {
  const [mounted, setMounted] = useState(false);

  // Parse agenda if it's a string with error handling
  let parsedAgenda = null;
  try {
    if (event?.agenda) {
      parsedAgenda = typeof event.agenda === 'string'
        ? JSON.parse(event.agenda)
        : event.agenda;
    }
  } catch (error) {
    console.error('Error parsing agenda:', error);
    parsedAgenda = null;
  }

  // Use event agenda if available, otherwise use default
  const scheduleData = parsedAgenda || defaultScheduleData;

  // Find available days with content
  const availableDays = Object.keys(scheduleData).filter(day => {
    const dayData = scheduleData[day as keyof typeof defaultScheduleData];
    return Array.isArray(dayData) && dayData.length > 0;
  });

  // Don't render section if no schedule data
  if (availableDays.length === 0) return null;

  // Initialize active day to first available day
  const [activeDay, setActiveDay] = useState(parseInt(availableDays[0]));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const scheduleItems = scheduleData[activeDay as keyof typeof defaultScheduleData] || [];

  // Day labels mapping
  const dayLabels = ['First Day', 'Second Day', 'Third Day'];
  const dayDates = ['02', '03', '04'];
  const dayNames = ['Monday', 'Tuesday', 'Wednesday'];

  return (
    <>
      {/* Main Container */}
      <div
        className="relative w-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] px-4 sm:px-6 md:px-20 py-8 sm:py-10 md:py-[60px] flex items-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px]"
        data-name="Main Container"
        data-node-id="2293:46744"
      >
        <div
          className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-20 items-start w-full max-w-[1400px] mx-auto"
          data-node-id="2293:46745"
        >
          {/* Left Section */}
          <div
            className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-start flex-shrink-0 w-full lg:w-[400px]"
            data-node-id="2293:46746"
          >
            {/* Schedule Badge */}
            <div
              className="bg-[rgba(66,66,255,0.1)] border border-white/20 rounded-3xl px-4 sm:px-5 py-1.5 sm:py-2 inline-flex gap-0.5 items-center backdrop-blur-[10px]"
              data-name="Button"
              data-node-id="2293:46747"
            >
              <span
                className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-normal leading-4 sm:leading-5 text-white whitespace-nowrap"
                data-node-id="I2293:46747;1:72"
              >
                Schedule
              </span>
            </div>

            {/* Title and Description */}
            <div
              className="flex flex-col gap-3 sm:gap-4 items-start w-full"
              data-node-id="2293:46748"
            >
              <h2
                className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl md:text-[44px] font-semibold leading-[1.2] tracking-[-1px] sm:tracking-[-1.76px] text-white m-0"
                data-node-id="2293:46749"
              >
                Schedule and Agenda
              </h2>
              <p
                className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base md:text-lg font-normal leading-[20px] sm:leading-[24px] md:leading-[27px] text-white/70 max-w-full lg:max-w-xs m-0"
                data-node-id="2293:46750"
              >
                A representation of the event planning of Design Conference
              </p>
            </div>

            {/* Download Button */}
            <button
              className="bg-[#4242ff] rounded-lg shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] h-10 sm:h-12 px-4 sm:px-6 inline-flex gap-2 items-center justify-center relative overflow-hidden border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0px_0px_0px_1px_#4242ff,0px_4px_12px_0px_rgba(66,66,255,0.3)] active:translate-y-0"
              data-name="Button"
              data-node-id="2293:46751"
            >
              <div
                className="flex gap-1.5 items-center"
                data-name="Button Container"
                data-node-id="I2293:46751;23:6912"
              >
                <span
                  className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-medium leading-5 sm:leading-6 text-white whitespace-nowrap"
                  data-node-id="I2293:46751;23:6913"
                >
                  Download Schedule
                </span>
              </div>
              <div
                className="relative w-5 h-5 flex items-center justify-center"
                data-name="chevron-right"
                data-node-id="I2293:46751;24:7459"
              >
                <Image
                  src="/events/schedule/7caeba5e0742d7b05fb03c22fbc3e1106ad4d209.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="block"
                />
              </div>
              <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0.75px_0px_inset_rgba(255,255,255,0.12)] rounded-lg" />
            </button>
          </div>

          {/* Right Section - Schedule Timeline */}
          <div
            className="relative flex-1 min-w-0 w-full"
            data-name="Main Container"
            data-node-id="2293:46752"
          >
            {/* Day Headers */}
            <div
              className="flex flex-row md:flex-row items-start justify-between w-full mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-6 md:gap-10 overflow-x-auto"
              data-name="Header Container"
              data-node-id="2293:46753"
            >
              {availableDays.map((dayKey) => {
                const dayIndex = parseInt(dayKey);
                return (
                  <div
                    key={dayIndex}
                    className={`flex flex-col gap-1 sm:gap-2 items-start cursor-pointer transition-opacity duration-200 flex-1 min-w-[100px] ${
                      activeDay === dayIndex ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                    }`}
                    onClick={() => setActiveDay(dayIndex)}
                    data-name={`Day ${dayIndex + 1} Container`}
                  >
                    <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-medium leading-5 sm:leading-6 text-white/60 whitespace-nowrap m-0">
                      {activeDay === dayIndex ? (
                        <span className="text-white">{dayLabels[dayIndex] || `Day ${dayIndex + 1}`}</span>
                      ) : (
                        dayLabels[dayIndex] || `Day ${dayIndex + 1}`
                      )}
                    </p>
                    <div className="flex gap-2 sm:gap-3 items-baseline">
                      <p className="font-['Plus_Jakarta_Sans'] text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-none tracking-[-1px] sm:tracking-[-1.2px] text-white m-0">
                        {dayDates[dayIndex] || String(dayIndex + 1).padStart(2, '0')}
                      </p>
                      <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm md:text-base font-normal leading-4 sm:leading-5 md:leading-6 text-white/60 m-0">
                        <span className="hidden sm:inline">Oct, </span>{dayNames[dayIndex] || 'Day'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Divider with Active Indicator */}
            <div
              className="relative bg-white/10 h-0.5 w-full mb-12 overflow-hidden"
              data-name="Divider Container"
              data-node-id="2293:46769"
            >
              <div
                className="absolute bg-[#4242ff] h-full left-0 top-0 transition-transform duration-300 ease-out"
                style={{
                  width: `${100 / availableDays.length}%`,
                  transform: `translateX(${availableDays.indexOf(String(activeDay)) * 100}%)`
                }}
                data-name="Divider Line"
                data-node-id="2293:46770"
              />
            </div>

            {/* Timeline Items */}
            <div className="relative pl-0 md:pl-0">
              {/* Desktop Vertical Line - hidden on desktop as per requirement */}
              <div className="hidden" data-name="Divider" data-node-id="2293:46785" />

              {/* Schedule Items */}
              {scheduleItems && scheduleItems.length > 0 ? scheduleItems.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="relative grid grid-cols-1 md:grid-cols-[180px_32px_1fr] gap-2 sm:gap-3 md:gap-6 items-start mb-6 sm:mb-8 md:mb-[50px] last:mb-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]"
                  >
                    {/* Time */}
                    <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium leading-4 sm:leading-5 text-white/50 whitespace-nowrap m-0 md:text-right md:pt-1">
                      {item.time}
                    </p>

                    {/* Circle with Number */}
                    <div className="relative w-6 h-6 z-[3] hidden md:flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#4242ff] flex items-center justify-center shadow-[0_0_0_4px_rgba(66,66,255,0.2)] relative z-[2]">
                        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold leading-none text-white z-[3]">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="flex-1 pt-0 md:pt-0.5">
                      <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg md:text-xl font-medium leading-6 sm:leading-7 text-white m-0 mb-1 sm:mb-2">{item.title}</p>
                      {item.description && (
                        <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm md:text-[15px] font-normal leading-4 sm:leading-5 md:leading-[22px] text-white/60 m-0 max-w-full md:max-w-[600px]">{item.description}</p>
                      )}
                    </div>
                  </div>
                );
              }) : (
                <div className="text-center py-8">
                  <p className="text-white/60 text-sm">No schedule available for this day</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}