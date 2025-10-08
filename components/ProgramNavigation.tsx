'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProgramNavigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [navOffsetTop, setNavOffsetTop] = useState(0);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Store the initial offset position and height
    if (navRef.current && navOffsetTop === 0) {
      setNavOffsetTop(navRef.current.offsetTop);
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [navOffsetTop]);

  // Scroll spy - automatically highlight section in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in upper portion of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections with IDs matching nav items
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-scroll active nav item into view
  useEffect(() => {
    if (activeSection && scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(
        `button[data-section="${activeSection}"]`
      ) as HTMLElement;

      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 78; // Height of the header
      const scrollPosition = window.scrollY;

      // When scroll position reaches the nav's original position minus header height, make it sticky
      if (scrollPosition >= navOffsetTop - headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      if (navRef.current) {
        setNavOffsetTop(navRef.current.offsetTop);
        setNavHeight(navRef.current.offsetHeight);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navOffsetTop]);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'All Courses' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'learning-outcomes', label: 'Learning Outcomes' },
    { id: 'timetable', label: 'Time Table' }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Spacer to prevent content jump when nav becomes sticky */}
      {isSticky && <div style={{ height: `${navHeight}px` }} />}

      <div
        ref={navRef}
        className={`${isSticky ? 'fixed top-[52px] lg:top-[78px] left-0 right-0' : 'relative'
          } z-40 bg-[#252525]  w-full transition-all duration-300`}
      >
        <nav className="max-w-[1440px] mx-auto relative">
          {/* Left Gradient Fade Indicator */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-[#252525] to-transparent z-10 pointer-events-none" />

          {/* Right Gradient Fade Indicator */}
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-[#252525] to-transparent z-10 pointer-events-none" />

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth px-4 md:px-10 lg:px-[82px] py-2 md:py-2 lg:py-0  ">
            <div className="flex items-center justify-start md:justify-between gap-4 md:gap-6 lg:gap-8 min-w-max md:min-w-0 snap-x snap-mandatory md:snap-none">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  data-section={item.id}
                  className={`
                  relative
                  font-['Plus_Jakarta_Sans']
                  font-semibold
                  text-sm md:text-base lg:text-[18px]
                  text-white
                  whitespace-nowrap
                  transition-all
                  duration-300
                  px-3 md:px-4
                  py-2 md:py-2.5
                  snap-center
                  hover:scale-105
                  ${activeSection === item.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'}
                `}
                >
                  {item.label}

                  {/* Active Indicator - Bottom Border */}
                  <span
                    className={`
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-[3px]
                    bg-white
                    rounded-t-full
                    transition-all
                    duration-300
                    ${activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                  `}
                  />
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}