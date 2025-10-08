'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProgramNavigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [navOffsetTop, setNavOffsetTop] = useState(0);

  useEffect(() => {
    // Store the initial offset position
    if (navRef.current && navOffsetTop === 0) {
      setNavOffsetTop(navRef.current.offsetTop);
    }
  }, [navOffsetTop]);

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
    <div
      ref={navRef}
      className={`${isSticky ? 'fixed top-[52px]  lg:top-[78px] left-0 right-0' : 'relative'
        } z-40 bg-[#252525] w-full px-4 md:px-10 lg:px-[82px] py-1 md:py-1 transition-all duration-300`}
    >
      <nav className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 md:gap-4 px-3 py-2 md:px-6 rounded-2xl md:rounded-[16px]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                font-['Plus_Jakarta_Sans']
                font-semibold
                text-sm md:text-base lg:text-[18px]
                text-white
                whitespace-nowrap
                transition-all
                duration-200
                hover:opacity-80
                px-2 md:px-3
                py-1 md:py-0
                ${activeSection === item.id ? 'opacity-100' : 'opacity-70'}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}