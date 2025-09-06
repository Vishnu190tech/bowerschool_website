'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Why Bower', href: '#why-bower' },
    { 
      name: 'Programs', 
      href: '#programs',
      hasDropdown: true,
      dropdownItems: [
        { name: 'K-12 Seed Program', href: '#k12' },
        { name: 'UG Program', href: '#ug' },
        { name: 'PG Programs', href: '#pg' },
        { name: 'Masterclasses', href: '#masterclasses' }
      ]
    },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Events', href: '#events' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#020101]/95 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/e3d7afcb006796d5cc314c5bd25e5a146ee34334.svg" 
              alt="Bower Logo Icon" 
              width={20} 
              height={32}
              className="h-8 w-auto"
            />
            <Image 
              src="/40afd61accd6149cf9be6b0faf0e38077f6c5c1e.svg" 
              alt="Bower Logo Text" 
              width={75} 
              height={21}
              className="h-5 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3 bg-[rgba(22,10,53,0.3)] backdrop-blur-[22px] border border-[#aaaab9] rounded-full px-2 py-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                      className="flex items-center gap-1 px-5 py-2 text-base font-normal text-white hover:text-gray-300 transition-colors rounded-lg"
                    >
                      {item.name}
                      <ChevronDownIcon className="h-5 w-5" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-5 py-2 text-base font-normal text-white hover:text-gray-300 transition-colors rounded-lg"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && programsDropdownOpen && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 w-48 bg-[#1a1a2e] border border-gray-700 rounded-lg shadow-lg overflow-hidden"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a3e] hover:text-white transition-colors"
                            onClick={() => setProgramsDropdownOpen(false)}
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

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-lg font-medium text-white hover:text-gray-300 transition-colors">
                Login
              </button>
              
              {/* Special Take a Quiz Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="relative px-6 py-2 bg-gradient-to-r from-transparent to-transparent backdrop-blur-md border border-white/10 rounded-full overflow-hidden">
                  <span className="relative z-10 text-base font-medium text-white">
                    Take a quiz
                  </span>
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Sparkle effects */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>
              </motion.button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors"
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
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                          className="flex items-center justify-between w-full px-4 py-2 text-base text-white hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          {item.name}
                          <ChevronDownIcon className={`h-5 w-5 transition-transform ${programsDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {programsDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                                onClick={() => {
                                  setProgramsDropdownOpen(false);
                                  setMobileMenuOpen(false);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-base text-white hover:bg-gray-800 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-800 space-y-2">
                  <button className="block w-full px-4 py-2 text-base text-white hover:bg-gray-800 rounded-lg transition-colors text-left">
                    Login
                  </button>
                  <button className="block w-full px-4 py-2 text-base text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10 rounded-full hover:from-purple-600/30 hover:to-blue-600/30 transition-colors">
                    Take a quiz
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}