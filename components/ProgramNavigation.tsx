'use client';

import { useState } from 'react';

export default function ProgramNavigation() {
  const [activeSection, setActiveSection] = useState('');

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
    // Scroll to section logic
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#252525] w-full px-4 md:px-10 lg:px-[82px] py-3 md:py-4">
      <nav className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 md:gap-4 p-3 md:p-6 rounded-2xl md:rounded-[16px]">
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