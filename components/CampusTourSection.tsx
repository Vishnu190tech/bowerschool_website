'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const CampusTourSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full py-10 md:py-16" style={{ backgroundColor: '#f5f9ff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/3 p-8 lg:p-12">
              <h2 className="font-semibold mb-4" style={{ 
                color: '#111827',
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '24px'
              }}>
                Take a campus tour
              </h2>
              <p className="mb-8" style={{ 
                color: '#4b5563',
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '27px'
              }}>
                A quick look at what makes Bower a launchpad for future founders, 
                innovators, and changemakers.
              </p>
              <button 
                className="text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
                style={{ 
                  backgroundColor: '#4242ff',
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '27px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3232e6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4242ff'}
              >
                Let&apos;s Show You Around 
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Video Section */}
            <div className="w-full lg:w-2/3 relative h-[300px] md:h-[400px] lg:h-[551px]">
              {!isPlaying ? (
                <div className="relative h-full w-full cursor-pointer group" onClick={handlePlayVideo}>
                  {/* Video Thumbnail - Realistic city street scene */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-r-3xl overflow-hidden">
                    <Image
                      src="/campus-street-view.jpg"
                      alt="Campus Tour"
                      fill
                      className="object-cover"
                      priority
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    
                    {/* Fallback: Realistic street scene */}
                    <div className="absolute inset-0">
                      {/* Sky gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-white" />
                      
                      {/* Buildings with glass facades */}
                      <div className="absolute inset-0">
                        {/* Left building */}
                        <div className="absolute left-0 top-20 w-1/3 h-4/5 bg-gradient-to-br from-slate-600 to-slate-700 rounded-t-lg">
                          {/* Windows grid */}
                          <div className="grid grid-cols-6 gap-1 p-2">
                            {[...Array(48)].map((_, i) => (
                              <div key={`left-${i}`} className="aspect-square bg-cyan-200/30 rounded-sm" />
                            ))}
                          </div>
                        </div>
                        
                        {/* Right building */}
                        <div className="absolute right-0 top-16 w-1/3 h-5/6 bg-gradient-to-bl from-slate-500 to-slate-600 rounded-t-lg">
                          {/* Windows grid */}
                          <div className="grid grid-cols-6 gap-1 p-2">
                            {[...Array(48)].map((_, i) => (
                              <div key={`right-${i}`} className="aspect-square bg-cyan-300/20 rounded-sm" />
                            ))}
                          </div>
                          {/* T-Hub branding */}
                          <div className="absolute bottom-20 right-4 bg-red-500 text-white px-3 py-1 rounded text-xs font-bold">
                            T-Hub
                          </div>
                        </div>
                        
                        {/* Center building (background) */}
                        <div className="absolute left-1/3 top-10 w-1/3 h-4/5 bg-gradient-to-b from-gray-400 to-gray-500 opacity-50 rounded-t-lg" />
                      </div>
                      
                      {/* Street */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-800 to-gray-700">
                        {/* Road markings */}
                        <div className="absolute top-8 left-0 right-0 h-1 bg-yellow-400/60" />
                        <div className="absolute top-12 left-0 right-0 h-1 bg-yellow-400/60" />
                        {/* Sidewalk */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-600" />
                      </div>
                      
                      {/* Trees */}
                      <div className="absolute bottom-20 left-10">
                        <div className="w-16 h-20 bg-green-700/70 rounded-full" />
                        <div className="w-2 h-8 bg-amber-800 mx-auto -mt-4" />
                      </div>
                      <div className="absolute bottom-20 right-10">
                        <div className="w-16 h-20 bg-green-600/70 rounded-full" />
                        <div className="w-2 h-8 bg-amber-800 mx-auto -mt-4" />
                      </div>
                    </div>
                  </div>

                  {/* Play Button - Matching Figma design */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl blur-2xl opacity-60 transition-opacity" 
                           style={{ backgroundColor: '#4242ff' }} />
                      <div className="relative rounded-2xl p-5 transition-transform duration-300 group-hover:scale-110"
                           style={{ 
                             background: 'linear-gradient(135deg, #5656ff 0%, #4242ff 100%)',
                             boxShadow: '0 10px 40px rgba(66, 66, 255, 0.4)'
                           }}>
                        <svg
                          className="w-10 h-10 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-full w-full bg-black rounded-r-3xl">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Campus Tour Video"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusTourSection;