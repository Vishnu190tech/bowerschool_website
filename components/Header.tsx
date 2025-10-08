'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Why Bower', href: '/about-us' },
    {
      name: 'Programs',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'K-12 Seed Program', href: '/programs/k12' },
        { name: 'K-12 School', href: '/programs/k12-school' },
        { name: 'K-12 Seed', href: '/programs/k12-seed' },
        { name: 'UG Program', href: '/programs/ug' },
        { name: 'Lead', href: '/programs/lead' },
        { name: 'Masterclasses', href: '/programs/masterclasses' },

      ]
    },
    {
      name: 'More',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Campus Life', href: '/campus-life' },
        { name: 'Alumni Connect', href: '/alumni-connect' },
        { name: 'Beat Exam', href: '/beat-exam' },
        { name: 'Mentors', href: '/mentors' },
        { name: 'Partnership', href: '/partnership' },
        { name: 'Open Day', href: '/open-day' },
      ]
    },
    { name: 'Events', href: '/events' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-[#020101]/95 backdrop-blur-md'
      : 'bg-[#020101]/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between py-2 lg:py-4 relative">
          {/* Logo */}
          <Link href="/" className="flex gap-[7px] items-center">
            <Image
              src="/e3d7afcb006796d5cc314c5bd25e5a146ee34334.svg"
              alt="Bower Logo Icon"
              width={20}
              height={32}
              className="w-[20.045px] h-[32.001px]"
            />
            <Image
              src="/40afd61accd6149cf9be6b0faf0e38077f6c5c1e.svg"
              alt="Bower Logo Text"
              width={75}
              height={21}
              className="w-[74.669px] h-[21.146px]"
            />
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className={`flex items-center gap-3 backdrop-blur-[22px] border rounded-[100px] px-2 py-2 transition-all duration-300 ${isScrolled
              ? 'bg-[rgba(255,255,255,0.05)] border-[#aaaab9]/30'
              : 'bg-[rgba(22,10,53,0.3)] border-[#aaaab9] mix-blend-overlay'
              }`}>
              {navItems.map((item, index) => (
                <div key={item.name} className="relative dropdown-container">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className={`flex items-center gap-0.5 px-5 py-2 text-[14px] font-medium transition-all duration-200 rounded-[100px] tracking-[-0.112px] ${index === 0
                        ? isScrolled
                          ? 'text-white bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)]'
                          : 'text-white bg-[rgba(223,227,255,0.1)] backdrop-blur-[32px]'
                        : isScrolled
                          ? 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                          : 'text-[#dedede] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                        }`}
                      style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                    >
                      {item.name}
                      <ChevronDownIcon className={`w-5 h-5 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-5 py-2 text-[14px] font-medium transition-all duration-200 rounded-[100px] tracking-[-0.112px] ${index === 0
                        ? isScrolled
                          ? 'text-white bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)]'
                          : 'text-white bg-[rgba(223,227,255,0.1)] backdrop-blur-[32px]'
                        : isScrolled
                          ? 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                          : 'text-[#dedede] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                        }`}
                      style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && openDropdown === item.name && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 w-48 bg-[#1a1a2e] border border-gray-700 rounded-lg shadow-lg overflow-hidden z-50"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a3e] hover:text-white transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className={`px-6 py-2.5 text-[16px] font-medium transition-colors tracking-[-0.32px] ${isScrolled ? 'text-white hover:text-gray-300' : 'text-white hover:text-gray-200'
                }`}
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Login
            </Link>

            {/* Special Take a Quiz Button */}
            <Link href="/quiz">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div
                  className={`relative px-6 py-2 backdrop-blur-md border rounded-[999px] overflow-hidden transition-all duration-300 ${isScrolled
                    ? 'border-white/20 hover:border-white/30'
                    : 'border-white/10 hover:border-white/20'
                    }`}
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <span
                    className="relative z-10 text-[14px] font-normal text-white leading-[24px]"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    Take a quiz
                  </span>

                  {/* Animated sparkle effects on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Add sparkle animations here if needed */}
                  </div>
                </div>
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) {
                setMobileDropdown(null);
              }
            }}
            className="lg:hidden p-2 rounded-lg  backdrop-blur-sm  text-white hover:bg-white/20 transition-all duration-200"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-4 space-y-2 bg-[#020101]/50 backdrop-blur-md rounded-b-lg">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setMobileDropdown(mobileDropdown === item.name ? null : item.name);
                          }}
                          className="flex items-center justify-between w-full px-4 py-3 text-base text-white/90 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                        >
                          {item.name}
                          <ChevronDownIcon className={`h-5 w-5 transition-transform text-white/60 ${mobileDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-2 space-y-1 pb-2">
                                {item.dropdownItems?.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                                    onClick={() => {
                                      setMobileDropdown(null);
                                      setMobileMenuOpen(false);
                                    }}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-base text-white/90 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                        style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 mt-2 border-t border-white/10 space-y-3 px-2">
                  <Link
                    href="/login"
                    className="block w-full px-4 py-3 text-base text-white/90 hover:bg-white/10 rounded-lg transition-all duration-200 text-center font-medium"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/quiz"
                    className="block w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className="relative px-4 py-3 backdrop-blur-md border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-white/30 text-center"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      }}
                    >
                      <span
                        className="text-base font-medium text-white"
                        style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                      >
                        Take a quiz
                      </span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}