'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface EventLocationSectionProps {
  event?: {
    location?: string;
    venue?: string;
    date: string;
    time?: string;
    coordinates?: {
      lat?: number;
      lng?: number;
    };
  };
}

export default function EventLocationSection({ event }: EventLocationSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Don't render section if no location info
  if (!event?.location && !event?.venue) return null;

  // Use event coordinates if available, otherwise default to Bower School
  const latitude = event?.coordinates?.lat || 17.4486;
  const longitude = event?.coordinates?.lng || 78.3908;

  // Closer zoom level - smaller bbox for better detail
  const zoomLevel = 0.003; // Much closer zoom than 0.01

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Main Section Container */}
      <div
        className="relative w-full bg-[#f4f4ff] py-8 sm:py-12 md:py-20 px-4 sm:px-10 md:px-20 min-h-[450px] sm:min-h-[500px] md:min-h-[643px] flex justify-center items-center"
        data-name="Desktop - 6"
        data-node-id="2293:46796"
      >
        {/* Content Container */}
        <div
          className="relative w-full max-w-[1280px] h-auto"
          data-node-id="2293:46798"
        >
          {/* Map Container */}
          <div
            className="relative w-full h-[250px] sm:h-[350px] md:h-[499px] border-2 border-white rounded-2xl sm:rounded-3xl overflow-hidden bg-white"
            data-name="Map Container"
            data-node-id="2293:46799"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full border-none rounded-3xl"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - zoomLevel}%2C${latitude - zoomLevel}%2C${longitude + zoomLevel}%2C${latitude + zoomLevel}&layer=mapnik&marker=${latitude}%2C${longitude}`}
              width="100%"
              height="100%"
              title="Event Location Map"
              style={{ filter: 'brightness(1.05) contrast(1.05)' }}
              loading="lazy"
            ></iframe>
          </div>

          {/* Info Card - Below map on mobile, overlay on tablet/desktop */}
          <div
            className="relative sm:absolute mt-4 sm:mt-0 sm:left-8 sm:bottom-8 md:left-16 md:bottom-auto md:top-[264px]
                       bg-white sm:bg-white/95 backdrop-blur-[22px] border-2 border-white rounded-xl sm:rounded-2xl shadow-lg
                       p-4 sm:p-5 md:p-6 box-border flex flex-col gap-3 sm:gap-4 z-10
                       w-full sm:w-auto sm:min-w-[320px] md:min-w-[400px] sm:max-w-[600px]"
            data-node-id="2293:46800"
          >
            {/* Location Label */}
            <p
              className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm md:text-base font-normal leading-4 sm:leading-5 md:leading-6 text-[#6b7280] m-0"
              data-node-id="2293:46801"
            >
              Location
            </p>

            {/* Title */}
            <div
              className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl md:text-[30px] font-semibold leading-[1.2] tracking-[-0.6px] sm:tracking-[-0.8px] md:tracking-[-1.6px] text-[#111827]"
              data-node-id="2293:46802"
            >
              {event?.venue ? (
                <p className="m-0">{event.venue}</p>
              ) : (
                <>
                  <p className="m-0">We Carry Out In</p>
                  <p className="m-0">We Work</p>
                </>
              )}
              <p className="m-0">{event?.location || 'Hyderabad'}</p>
              {event && (
                <p className="text-sm sm:text-base md:text-lg font-normal text-[#4b5563] mt-2">
                  {formatDate(event.date)} {event.time && `• ${event.time}`}
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div
              className="flex flex-col gap-3 sm:flex-row sm:gap-6 md:gap-8 items-start sm:items-center mt-1 sm:mt-2"
              data-node-id="2293:46803"
            >
              {/* Email */}
              <div
                className="flex gap-2 sm:gap-3 items-center"
                data-node-id="2293:46804"
              >
                <div
                  className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                  data-name="sms"
                  data-node-id="2293:46805"
                >
                  <Image
                    src="/events/speakers/0e61a2baf2608dcccfc4e6a9ec4987c4f0fe30ed.svg"
                    alt="Email"
                    width={24}
                    height={24}
                    className="w-full h-full"
                  />
                </div>
                <span
                  className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm md:text-base font-normal leading-4 sm:leading-5 md:leading-6 text-[#4b5563]"
                  data-node-id="2293:46806"
                >
                  conference2022@design.com
                </span>
              </div>

              {/* Phone */}
              <div
                className="flex gap-2 sm:gap-3 items-center"
                data-node-id="2293:46807"
              >
                <div
                  className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                  data-name="call"
                  data-node-id="2293:46808"
                >
                  <Image
                    src="/events/speakers/b3aa48349ea11443497ed145673282db77d096ed.svg"
                    alt="Phone"
                    width={24}
                    height={24}
                    className="w-full h-full"
                  />
                </div>
                <span
                  className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm md:text-base font-normal leading-4 sm:leading-5 md:leading-6 text-[#4b5563] whitespace-nowrap"
                  data-node-id="2293:46809"
                >
                  (704) 555-0127
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}