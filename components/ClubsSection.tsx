'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface ClubsTheme {
  primary: string;
  secondary: string;
  bgColor: string;
  titleColor: string;
  descriptionColor: string;
  cardBadgeBg: string;
  cardBadgeBorder: string;
  cardTitleColor: string;
  navButtonBg: string;
  navButtonHoverBg: string;
  navIconColor: string;
  dotActive: string;
  dotInactive: string;
}

const CLUBS_THEMES: Record<ThemeType, ClubsTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgColor: '#f0f0ff',
    titleColor: '#1a2555',
    descriptionColor: '#4b5563',
    cardBadgeBg: '#26262b',
    cardBadgeBorder: '#303038',
    cardTitleColor: '#ffffff',
    navButtonBg: 'rgba(255, 255, 255, 0.9)',
    navButtonHoverBg: '#ffffff',
    navIconColor: '#1a2555',
    dotActive: '#3232e6',
    dotInactive: '#d1d5db',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgColor: '#f5ffd9',
    titleColor: '#2d3a15',
    descriptionColor: '#4b5563',
    cardBadgeBg: '#26262b',
    cardBadgeBorder: '#303038',
    cardTitleColor: '#ffffff',
    navButtonBg: 'rgba(255, 255, 255, 0.9)',
    navButtonHoverBg: '#ffffff',
    navIconColor: '#2d3a15',
    dotActive: '#8FD920',
    dotInactive: '#d1d5db',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgColor: '#fbede3',
    titleColor: '#2c360d',
    descriptionColor: '#4b5563',
    cardBadgeBg: '#26262b',
    cardBadgeBorder: '#303038',
    cardTitleColor: '#ffffff',
    navButtonBg: 'rgba(255, 255, 255, 0.9)',
    navButtonHoverBg: '#ffffff',
    navIconColor: '#2c360d',
    dotActive: '#ff8829',
    dotInactive: '#d1d5db',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgColor: '#f0f0ff',
    titleColor: '#1a2555',
    descriptionColor: '#4b5563',
    cardBadgeBg: '#26262b',
    cardBadgeBorder: '#303038',
    cardTitleColor: '#ffffff',
    navButtonBg: 'rgba(255, 255, 255, 0.9)',
    navButtonHoverBg: '#ffffff',
    navIconColor: '#1a2555',
    dotActive: '#4242ff',
    dotInactive: '#d1d5db',
  },
};

interface Club {
  title: string;
  image: string;
}

interface ClubsSectionProps {
  theme?: ThemeType;
  title?: string;
  description?: string;
  clubs?: Club[];
}

const ClubsSection = ({
  theme = 'seed',
  title = 'Join Our Clubs',
  description = 'Learn, build, and grow alongside a driven community of founders, innovators, and change-makers.',
  clubs: customClubs
}: ClubsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentTheme = CLUBS_THEMES[theme];

  const defaultClubs: Club[] = [
    {
      title: 'Culinary',
      image: '/7d1b9c28b5522fa8031d28d99c8b1dc31ce2938b.png'
    },
    {
      title: 'Sport Clubs',
      image: '/cd114e98f86148d9ebcfa8673bf694d114e19738.png'
    },
    {
      title: 'Business',
      image: '/38b1d5abcbd80a504349b2207da1d329996b3276.png'
    },
    {
      title: 'Business',
      image: '/fdf33149c4ec300fd4b06c06ab87638bdeb85b02.png'
    },
    {
      title: 'Business',
      image: '/01bea9dce56046cef948bcc4000004f1af4135f7.png'
    }
  ];

  const clubs = customClubs || defaultClubs;

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 306; // Fixed card width for consistency
      const gap = 16;
      const scrollAmount = cardWidth + gap;

      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.max(0, currentIndex - 1));
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.min(clubs.length - 1, currentIndex + 1));
      }
    }
  };

  // Update currentIndex based on scroll position
  useEffect(() => {
    const handleScrollEvent = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = 306 + 16; // card width + gap
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScrollEvent);
      return () => scrollContainer.removeEventListener('scroll', handleScrollEvent);
    }
  }, []);

  return (
    <section
      className="w-full px-4 py-8 md:px-10 md:py-10 lg:px-10"
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-9"
        >
          <h2
            className="capitalize mb-3 text-[28px] md:text-[36px] lg:text-[44px] leading-tight"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontWeight: 600,
              letterSpacing: '-1.76px',
              color: currentTheme.titleColor
            }}
          >
            {title}
          </h2>
          <p
            className="max-w-[800px] mx-auto text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] px-0 md:px-4 lg:px-0"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontWeight: 400,
              color: currentTheme.descriptionColor
            }}
          >
            {description}
          </p>
        </motion.div>

        {/* Clubs Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {clubs.map((club, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex-shrink-0 w-[calc(100vw-32px)] md:w-[306px] lg:w-[306px] h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden group cursor-pointer snap-start"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={club.image}
                    alt={club.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title Badge */}
                <div
                  className="absolute bottom-3 left-3 backdrop-blur-3xl mix-blend-overlay rounded-xl border shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]"
                  style={{
                    backgroundColor: currentTheme.cardBadgeBg,
                    borderColor: currentTheme.cardBadgeBorder
                  }}
                >
                  <div className="px-3 py-3">
                    <h3
                      className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold"
                      style={{
                        fontFamily: 'var(--font-plus-jakarta)',
                        letterSpacing: '-0.96px',
                        color: currentTheme.cardTitleColor
                      }}
                    >
                      {club.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
          <button
            onClick={() => handleScroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 backdrop-blur-sm rounded-full items-center justify-center shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: currentTheme.navButtonBg }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.navButtonHoverBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.navButtonBg;
            }}
            disabled={currentIndex === 0}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke={currentTheme.navIconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={() => handleScroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 backdrop-blur-sm rounded-full items-center justify-center shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: currentTheme.navButtonBg }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.navButtonHoverBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.navButtonBg;
            }}
            disabled={currentIndex === clubs.length - 1}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke={currentTheme.navIconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dot Indicators - Mobile Only */}
        <div className="flex md:hidden justify-center gap-2 mt-4">
          {clubs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = window.innerWidth - 32;
                  const gap = 16;
                  const scrollTo = index * (cardWidth + gap);
                  scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
                  setCurrentIndex(index);
                }
              }}
              className="h-2 rounded-full transition-all duration-200"
              style={{
                width: currentIndex === index ? '24px' : '8px',
                backgroundColor: currentIndex === index ? currentTheme.dotActive : currentTheme.dotInactive
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;