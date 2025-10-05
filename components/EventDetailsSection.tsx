'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  videoUrl?: string;
}

interface EventDetailsSectionProps {
  event?: {
    description: string;
    speakers?: any;
    agenda?: any;
    sponsors?: any;
  };
}

export default function EventDetailsSection({ event }: EventDetailsSectionProps) {
  // Parse speakers if it's a string with error handling
  let speakers: Speaker[] = [];
  try {
    if (event?.speakers) {
      speakers = typeof event.speakers === 'string'
        ? JSON.parse(event.speakers)
        : Array.isArray(event.speakers) ? event.speakers : [];
    }
  } catch (error) {
    console.error('Error parsing speakers:', error);
    speakers = [];
  }

  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  const currentSpeaker = speakers.length > 0 ? speakers[currentSpeakerIndex] : null;

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string | undefined): string | null => {
    if (!url) return null;

    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([^&\n?#]+)$/ // Just the ID
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const videoId = getYouTubeVideoId(currentSpeaker?.videoUrl);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Don't render section if no speakers
  if (!speakers || speakers.length === 0) return null;

  return (
    <>
      {/* Main Section Container */}
      <div
        className="relative w-full bg-[#f4f4ff] py-6 sm:py-8 md:py-10 px-4 box-border flex flex-col gap-8 items-center"
        data-name="Main Frame"
        data-node-id="2293:46718"
      >
        {/* Content Container */}
        <div
          className="relative w-full max-w-[1440px] h-auto sm:h-auto md:h-[553px] border-2 sm:border-[3px] border-[#f9faff] rounded-2xl sm:rounded-3xl flex-shrink-0 mx-auto mx-4 sm:mx-6 md:mx-auto px-0 md:px-0"
          data-name="Content Container"
          data-node-id="2293:46719"
        >
          <div className="relative w-full h-auto sm:h-auto md:h-[553px] overflow-clip rounded-[inherit]">
            {/* Grid Background */}
            <div
              className="absolute top-0 left-0 right-0 bottom-[-17.9%]"
              data-name="Grid"
              data-node-id="2293:46720"
            >
              <Image
                src="/events/details/6ed9ffe37953f54c7cc43f1089bb70e0a66fc0c0.svg"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Sections Container */}
            <div
              className="relative sm:absolute flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-16 items-start lg:items-center p-4 sm:p-0 sm:left-6 sm:top-6 sm:right-6 lg:left-[50px] lg:top-[50px] lg:right-[50px] z-[1] justify-between"
              data-name="Sections Container"
              data-node-id="2293:46725"
            >
              {/* Left Section */}
              <div className="flex flex-row items-center self-stretch">
                <div
                  className="flex flex-col h-full items-start justify-between p-0 sm:p-4 box-border relative flex-shrink-0 w-full lg:max-w-[320px] gap-3 sm:gap-6 lg:gap-0"
                  data-name="Left Section"
                  data-node-id="2293:46726"
                >
                  {/* Text Section */}
                  <div
                    className="flex flex-col gap-3 sm:gap-4 lg:gap-[39px] items-start relative flex-shrink-0"
                    data-name="Text Section"
                    data-node-id="2293:46727"
                  >
                    {/* Header */}
                    <div
                      className="flex flex-col gap-2 items-start relative flex-shrink-0"
                      data-name="Header"
                      data-node-id="2293:46728"
                    >
                      <h2
                        className="font-['Plus_Jakarta_Sans'] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.6px] text-[#111827] w-full lg:w-[285px] relative flex-shrink-0 m-0"
                        data-node-id="2293:46729"
                      >
                        {speakers.length > 1 ? 'Meet the incredible' : 'Meet the'}<br />
                        {speakers.length > 1 ? 'Speakers' : 'Speaker'}
                      </h2>
                    </div>

                    {/* Description */}
                    <p
                      className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[20px] sm:leading-[24px] lg:leading-[27px] text-[#505050] min-w-full w-min-content relative flex-shrink-0 m-0"
                      data-node-id="2293:46730"
                    >
                      {currentSpeaker ? currentSpeaker.bio : event?.description || 'Main event for professionals in the world of design and architecture'}
                    </p>

                    {/* Speaker Info */}
                    {currentSpeaker && (
                      <div className="mt-3">
                        <p className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#111827]">
                          {currentSpeaker.name}
                        </p>
                        <p className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] lg:text-[16px] text-[#4242ff]">
                          {currentSpeaker.title}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Icon Row - Hidden on mobile, visible on desktop */}
                  <div
                    className="hidden lg:block relative h-0 w-full flex-shrink-0"
                    data-name="Icon Row"
                    data-node-id="2293:46731"
                  >
                    <div className="absolute top-[-2px] left-[-0.7%] right-[-0.7%] bottom-[-2px] w-auto h-auto max-w-none">
                      <Image
                        src="/events/details/805fc948d8fa70e346816c889aa515cf8d1988f9.svg"
                        alt=""
                        width={286}
                        height={4}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Container */}
              <div className="flex flex-col gap-4 w-full lg:w-[900px]">
                <div
                  className="relative w-full h-[200px] xs:h-[240px] sm:h-[280px] md:h-[350px] lg:h-[450px] flex-shrink-0 rounded-xl sm:rounded-2xl shadow-[20px_25px_15px_0px_rgba(212,212,212,0.05),10px_15px_12px_0px_rgba(212,212,212,0.15),5px_8px_8px_0px_rgba(212,212,212,0.25)] lg:shadow-[53.405px_61.919px_23.219px_0px_rgba(212,212,212,0.01),34.055px_39.473px_20.898px_0px_rgba(212,212,212,0.05),19.35px_22.445px_17.802px_0px_rgba(212,212,212,0.18),8.514px_10.062px_13.158px_0px_rgba(212,212,212,0.31),2.322px_2.322px_6.966px_0px_rgba(212,212,212,0.36)]"
                  data-name="Video Container"
                  data-node-id="2293:46735"
                >
                  {isPlaying && videoId ? (
                    /* YouTube Video Embed */
                    <div
                      className="absolute inset-0 border-[4px] sm:border-[6px] lg:border-[10px] border-white rounded-xl sm:rounded-2xl box-border overflow-hidden"
                      data-name="Video Player"
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title={`${currentSpeaker?.name} - Speaker Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  ) : (
                    <>
                      {/* Video Thumbnail */}
                      <div
                        className="absolute inset-0 border-[4px] sm:border-[6px] lg:border-[10px] border-white rounded-xl sm:rounded-2xl box-border overflow-hidden"
                        data-name="Video Thumbnail"
                        data-node-id="2293:46736"
                      >
                        {currentSpeaker?.imageUrl ? (
                          <Image
                            src={currentSpeaker.imageUrl}
                            alt={`${currentSpeaker.name} thumbnail`}
                            fill
                            className="object-cover object-center backdrop-blur-[12px]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 900px"
                            priority
                          />
                        ) : (
                          <Image
                            src="/events/details/3aa4d38e782750b436bdda2d003241adc4057bcf.png"
                            alt="Speaker video thumbnail"
                            fill
                            className="object-cover object-center backdrop-blur-[12px]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 900px"
                            priority
                          />
                        )}
                      </div>

                      {/* Play Button Container - Only show if video is available */}
                      {videoId && (
                        <div
                          onClick={() => setIsPlaying(true)}
                          className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[108px] lg:h-[108px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
                          data-name="Play Button Container"
                          data-node-id="2293:46737"
                        >
                          <div
                            className="absolute w-full h-full left-0 top-0"
                            data-name="Play Button Container"
                            data-node-id="2293:46738"
                          >
                            {/* Outer Circle */}
                            <div
                              className="absolute w-full h-full left-0 top-0 bg-[#3232e6] border border-white rounded-xl sm:rounded-2xl opacity-50"
                              data-name="Play Button Background"
                              data-node-id="2293:46739"
                            />

                            {/* Inner Circle */}
                            <div
                              className="absolute w-[50px] h-[50px] sm:w-[66px] sm:h-[66px] lg:w-[90px] lg:h-[90px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3232e6] border border-white rounded-xl sm:rounded-2xl opacity-60"
                              data-name="Play Button Background"
                              data-node-id="2293:46740"
                            />

                            {/* Play Icon */}
                            <div
                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                              data-name="Group"
                              data-node-id="2293:46741"
                            >
                              <div
                                className="absolute w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] lg:w-[64px] lg:h-[64px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                data-name="play"
                                data-node-id="2293:46742"
                              >
                                <Image
                                  src="/events/details/fed2de9b7e0f73990f199d31a4e0bb04cdd53492.svg"
                                  alt="Play"
                                  width={64}
                                  height={64}
                                  className="cursor-pointer w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Speaker Navigation - Show when multiple speakers */}
                {speakers.length > 1 && (
                  <div className="flex gap-2 items-center justify-center">
                    {speakers.map((speaker, index) => (
                      <button
                        key={speaker.id}
                        onClick={() => {
                          setCurrentSpeakerIndex(index);
                          setIsPlaying(false); // Reset video when switching speakers
                        }}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                          index === currentSpeakerIndex
                            ? 'bg-[#4242ff] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <span className="text-sm font-medium">{speaker.name}</span>
                        {speaker.videoUrl && (
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}