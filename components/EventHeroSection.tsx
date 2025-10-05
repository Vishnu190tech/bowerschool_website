'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface EventHeroSectionProps {
  event?: {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    date: string;
    time?: string;
    location?: string;
    venue?: string;
    imageUrl?: string;
    registrationLink?: string;
  };
}

export default function EventHeroSection({ event }: EventHeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Format the date
  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${day} - ${day} .${month}. ${year}`;
  };

  return (
    <>
      {/* Hero Section Container */}
      <div
        className="relative w-full overflow-hidden bg-[#1e1e1e]"
        data-name="Hero Section"
        data-node-id="2293:46456"
      >
        {/* Background Container with all visual effects */}
        <div
          className="relative w-full mx-auto max-w-[1440px] h-[450px] md:h-[800px]"
          data-name="Background"
          data-node-id="2293:46457"
        >
          {/* Stars Background */}
          <div
            className="absolute h-[798px] top-1/2 -translate-y-1/2"
            style={{
              left: '-32.09%',
              right: '-31.87%',
            }}
            data-name="Stars"
            data-node-id="2293:46458"
          >
            <Image
              src="/events/d4116a9279920dc5a7fa85b3e826b75d12b8f94f.svg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Grid Overlay */}
          <div
            className="absolute inset-0"
            data-name="Grid"
            data-node-id="2293:46634"
          >
            <Image
              src="/events/b6f68bcc0d5b9d2c22d86bd280230365a4adaa28.svg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Top Lights Effect */}
          <div
            className="absolute"
            style={{
              height: '1401.86px',
              width: '1693.86px',
              left: '144.95px',
              top: '-979px',
            }}
            data-name="Lights"
            data-node-id="2293:46639"
          >
            <Image
              src="/events/c3756d02ac32878edc845895cc3d0f78e85acedd.svg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Bottom Lights Effect (rotated) */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              height: '1401.86px',
              width: '1693.86px',
              left: '153.95px',
              top: '127px',
            }}
          >
            <div className="flex-none rotate-180">
              <div
                className="relative"
                style={{
                  height: '1401.86px',
                  width: '1693.86px',
                }}
                data-name="Lights"
                data-node-id="2293:46643"
              >
                <Image
                  src="/events/f26ae4004131a178460e1873b9572f8154473181.svg"
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div
            className="absolute h-[800px] left-[-3px] w-[1443px] top-0"
            style={{
              background: 'linear-gradient(to top, rgba(25, 25, 26, 0), #19191a)',
            }}
            data-name="Modal Content"
            data-node-id="2293:46647"
          />

          {/* Side Image (rotated and mirrored) */}
          <div
            className="absolute left-0 top-0 flex items-center justify-center mix-blend-multiply"
            style={{
              width: '800px',
              height: '1440px',
              transform: 'rotate(270deg) scaleY(-1)',
              transformOrigin: 'top left',
            }}
          >
            <div
              className="relative opacity-10"
              style={{
                width: '800px',
                height: '1440px',
              }}
              data-name="Modal Image"
              data-node-id="2293:46648"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/events/e85234be0d8e809a6dbda5307b749384d47c3a94.png"
                  alt=""
                  width={800}
                  height={1744}
                  className="absolute max-w-none"
                  style={{
                    height: '121.09%',
                    left: '-0.01%',
                    top: '-10.55%',
                    width: '100.02%',
                  }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div
            className="absolute flex flex-col gap-6 sm:gap-8 md:gap-11 h-auto sm:h-[612px] left-0 px-4 sm:px-6 md:px-20 lg:px-[80px] top-[100px] sm:top-[140px] md:top-[188px] w-full max-w-[1443px]"
            data-name="Main Content"
            data-node-id="2293:46708"
          >
            {/* Hero Text Section */}
            <div
              className="flex flex-col gap-3 sm:gap-4 md:gap-6"
              data-name="Hero Section"
              data-node-id="2293:46709"
            >
              {/* Date */}
              <p
                className="text-white font-['Plus_Jakarta_Sans'] text-base sm:text-lg md:text-2xl font-normal leading-normal"
                style={{ letterSpacing: '-0.96px' }}
                data-node-id="2293:46710"
              >
                {event ? formatEventDate(event.date) : '02 - 04 .OCT. 2025'}
                {event?.time && ` • ${event.time}`}
              </p>

              {/* Title */}
              <h1
                className="font-['Plus_Jakarta_Sans'] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[80px] font-bold leading-[1.1] sm:leading-normal text-[#f5f9ff] max-w-[825px] tracking-[-1.2px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-4px]"
                data-node-id="2293:46711"
              >
                {event?.title || 'Tech Startup Expo'}
              </h1>

              {/* Description */}
              <div
                className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base md:text-lg lg:text-2xl font-normal text-[#d1d5db] max-w-[974px]"
                style={{ letterSpacing: '-0.48px' }}
                data-node-id="2293:46712"
              >
                <p className="mb-1 sm:mb-0">
                  {event?.description || 'We bring together exceptional designers sharing their most exclusive learning.'}
                </p>
                {event?.subtitle && (
                  <p className="hidden sm:block">{event.subtitle}</p>
                )}
                {!event && (
                  <>
                    <p className="hidden sm:block">Join our event and accelerate your design careers</p>
                    <p className="sm:hidden">Join our event and accelerate your careers</p>
                  </>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex items-center gap-3 sm:gap-4 flex-wrap"
              data-name="CTA Buttons"
              data-node-id="2293:46713"
            >
              {/* Participate Button */}
              <a
                href={event?.registrationLink || '#'}
                target={event?.registrationLink ? '_blank' : undefined}
                rel={event?.registrationLink ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center bg-[#4242ff] rounded-lg shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] gap-2 h-10 sm:h-11 px-3 sm:px-4 py-2 relative overflow-clip transition-all duration-200 hover:scale-105 active:scale-95"
                data-name="Button"
                data-node-id="2293:46714"
              >
                <div
                  className="flex items-center gap-1 sm:gap-[6px]"
                  data-name="Button Container"
                  data-node-id="I2293:46714;23:6912"
                >
                  <span
                    className="text-white font-['Plus_Jakarta_Sans'] text-sm sm:text-base md:text-[18px] font-medium leading-[20px] sm:leading-[27px] whitespace-nowrap"
                    style={{ textShadow: '#4242ff 0px 1px 3px' }}
                    data-node-id="I2293:46714;23:6913"
                  >
                    Participate
                  </span>
                </div>
                <div
                  className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                  data-name="chevron-right"
                  data-node-id="I2293:46714;24:7459"
                >
                  <Image
                    src="/events/7caeba5e0742d7b05fb03c22fbc3e1106ad4d209.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="block w-full h-full"
                  />
                </div>
                <div
                  className="absolute inset-0 pointer-events-none shadow-[0px_1px_0.75px_0px_inset_rgba(255,255,255,0.12),0px_-1px_0px_0px_inset_#4242ff] rounded-lg"
                />
              </a>

              {/* Watch Teaser Button */}
              <button
                className="flex items-center justify-center backdrop-blur-[32px] backdrop-filter rounded-lg gap-2 sm:gap-4 h-10 sm:h-11 px-3 sm:px-4 py-2 transition-all duration-200 hover:scale-105 active:scale-95"
                data-name="Killers"
                data-node-id="2293:46715"
              >
                <div
                  className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  data-name="Iconly/Light/Play"
                  data-node-id="2293:46716"
                >
                  <Image
                    src="/events/f72f26f007d9dda7a86ab35f639c1a2039508ce4.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="block w-full h-full"
                  />
                </div>
                <span
                  className="text-white font-['Plus_Jakarta_Sans'] text-sm sm:text-base md:text-[18px] font-medium leading-[20px] sm:leading-[27px] text-center whitespace-nowrap"
                  data-node-id="2293:46717"
                >
                  <span className="hidden sm:inline">Watch The Teaser</span>
                  <span className="sm:hidden">Watch Teaser</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}