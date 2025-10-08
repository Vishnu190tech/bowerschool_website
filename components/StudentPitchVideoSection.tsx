'use client';

import { useState } from 'react';
import Image from 'next/image';

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface VideoTheme {
  primary: string;
  secondary: string;
  bgGradientFrom: string;
  bgGradientTo: string;
  titleColor: string;
  playButtonBg: string;
  playButtonBorder: string;
  videoBorder: string;
}

const VIDEO_THEMES: Record<ThemeType, VideoTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgGradientFrom: '#010817',
    bgGradientTo: '#000000',
    titleColor: '#ffffff',
    playButtonBg: '#3232e6',
    playButtonBorder: '#ffffff',
    videoBorder: '#ffffff',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgGradientFrom: '#0a1501',
    bgGradientTo: '#000000',
    titleColor: '#ffffff',
    playButtonBg: '#8FD920',
    playButtonBorder: '#ffffff',
    videoBorder: '#ffffff',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgGradientFrom: '#180b00',
    bgGradientTo: '#120800',
    titleColor: '#ffffff',
    playButtonBg: '#ff8829',
    playButtonBorder: '#ffffff',
    videoBorder: '#ffffff',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgGradientFrom: '#010817',
    bgGradientTo: '#000000',
    titleColor: '#ffffff',
    playButtonBg: '#4242ff',
    playButtonBorder: '#ffffff',
    videoBorder: '#ffffff',
  },
};

interface StudentPitchVideoSectionProps {
  theme?: ThemeType;
  title?: string;
  videoThumbnail?: string;
  videoUrl?: string;
  lightsTopRight?: string;
  lightsBottomLeft?: string;
  starsBackground?: string;
}

export default function StudentPitchVideoSection({
  theme = 'seed',
  title = 'Watch our students pitch',
  videoThumbnail = '/7433128edd2a264929a262701e6bb608ef33082e.png',
  videoUrl = '/path-to-your-video.mp4',
  lightsTopRight = '/d9a3709f628632a2c4a027c88dcc01d5950ec6fb.svg',
  lightsBottomLeft = '/0057a6a496f675a63ba4c226b7cf6ff02344816b.svg',
  starsBackground = '/4cba1214cc1e669a76355a119bbb18011d64d10a.svg'
}: StudentPitchVideoSectionProps) {
  const currentTheme = VIDEO_THEMES[theme];
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Add video playback logic here
  };

  return (
    <section
      className="relative px-4 md:px-10 lg:px-20 py-8 md:py-10 overflow-hidden"
      style={{
        background: `linear-gradient(to right, ${currentTheme.bgGradientFrom}, ${currentTheme.bgGradientTo})`
      }}
    >
      {/* Background Effects - Hidden on mobile */}
      {/* Lights Effect - Top Right */}
      <div className="hidden lg:block absolute h-[1401.86px] w-[1693.86px] right-[-300px] top-[-473px] mix-blend-hard-light pointer-events-none">
        <Image
          src={lightsTopRight}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Lights Effect - Bottom Left */}
      <div className="hidden lg:block absolute h-[1401.86px] w-[1693.86px] left-[-715px] bottom-[-473px] mix-blend-hard-light pointer-events-none">
        <div className="rotate-180 relative w-full h-full">
          <Image
            src={lightsBottomLeft}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Stars Background */}
      <div className="hidden md:block absolute h-[1438px] left-[-97.85%] right-[-97.85%] top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src={starsBackground}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-8 items-center">
          {/* Title */}
          <h2
            className="text-[32px] md:text-[56px] lg:text-[80px] font-bold tracking-[-1.6px] md:tracking-[-2.8px] lg:tracking-[-4px] leading-tight text-center px-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: currentTheme.titleColor
            }}
          >
            {title}
          </h2>

          {/* Video Container */}
          <div className="relative w-full max-w-[320px] h-[180px] md:max-w-[640px] md:h-[360px] lg:max-w-[1200px] lg:h-[600px] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-[53.405px_61.919px_23.219px_0px_rgba(212,212,212,0.01),34.055px_39.473px_20.898px_0px_rgba(212,212,212,0.05)]">
            {/* Video Thumbnail/Background */}
            <div
              className="absolute inset-0 bg-cover bg-center backdrop-blur-md"
              style={{
                backgroundImage: `url('${videoThumbnail}')`
              }}
            >
              {/* Border */}
              <div
                className="absolute inset-0 border-[6px] md:border-[8px] lg:border-[10px] rounded-[16px] md:rounded-[20px] lg:rounded-[24px]"
                style={{ borderColor: currentTheme.videoBorder }}
              />
            </div>

            {/* Play Button */}
            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[64px] h-[64px] md:w-[84px] md:h-[84px] lg:w-[108px] lg:h-[108px] group cursor-pointer"
                aria-label="Play video"
              >
                {/* Outer Circle - Less Opacity */}
                <div
                  className="absolute inset-0 opacity-50 rounded-[12px] md:rounded-[14px] lg:rounded-[16px] border transition-all duration-300 group-hover:opacity-60 group-hover:scale-110"
                  style={{
                    backgroundColor: currentTheme.playButtonBg,
                    borderColor: currentTheme.playButtonBorder
                  }}
                />

                {/* Inner Circle - More Opacity */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] opacity-60 rounded-[12px] md:rounded-[14px] lg:rounded-[16px] border transition-all duration-300 group-hover:opacity-70"
                  style={{
                    backgroundColor: currentTheme.playButtonBg,
                    borderColor: currentTheme.playButtonBorder
                  }}
                />

                {/* Play Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                  <Image
                    src="/5079cdf78116b0637b3208df4d3341ac1ff50b76.svg"
                    alt="Play"
                    width={64}
                    height={64}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </button>
            )}

            {/* Video Player (shown when playing) */}
            {isPlaying && (
              <div className="absolute inset-0 bg-black rounded-[16px] md:rounded-[20px] lg:rounded-[24px]">
                <video
                  className="w-full h-full object-cover rounded-[16px] md:rounded-[20px] lg:rounded-[24px]"
                  controls
                  autoPlay
                  src={videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}