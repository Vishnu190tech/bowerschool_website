'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LockClosedIcon } from '@heroicons/react/24/solid';

interface MasterclassStudentPortalProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  supportText?: string;
  onSubmit?: (code: string) => void;
}

const MasterclassStudentPortal = ({
  title = 'Student Portal',
  subtitle = 'Attended this session? Enter your reg code to access exclusive content',
  placeholder = 'Enter Registration Code',
  buttonText = 'Unlock Portal',
  supportText = "Haven't received your code? Contact support.",
  onSubmit
}: MasterclassStudentPortalProps) => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setIsLoading(true);

    // Call the onSubmit callback if provided
    if (onSubmit) {
      await onSubmit(code);
    }

    setIsLoading(false);
  };

  return (
    <section className="relative w-full min-h-[600px] bg-[#f4f4ff] py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 scale-125">
          <Image
            src="/228eba7286be53289d41b29f8eb29c1397858c31.svg"
            alt=""
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* Gradient Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px]">
          <Image
            src="/540bbf1c49d15d10456954389965c466682043d7.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          {/* Glass Card */}
          <div className="w-full max-w-[984px] backdrop-blur-md bg-white/5 rounded-[24px] p-6 md:p-8 lg:p-[24px] border border-white/10">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
              {/* Header */}
              <div className="text-center max-w-[936px]">
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-[48px] md:text-[64px] lg:text-[80px] font-bold text-[#111827] leading-[0.9] tracking-[-4px] mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[20px] md:text-[26px] lg:text-[30px] font-semibold text-[#4b5563] tracking-[-1.2px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {subtitle}
                </motion.p>
              </div>

              {/* Input Field */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full max-w-[936px]"
              >
                <div className="relative">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder={placeholder}
                    className="w-full h-[70px] md:h-[75px] lg:h-[81px] px-5 py-4 bg-white/10 backdrop-blur-lg border border-white rounded-[10px] text-[18px] md:text-[19px] lg:text-[20px] text-[#111827] placeholder-[#505050] focus:outline-none focus:border-[#4242ff] focus:shadow-[4px_4px_12px_0px_#4242ff] transition-all duration-200"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                type="submit"
                disabled={!code.trim() || isLoading}
                className="flex items-center gap-2 px-4 py-2 bg-[#4242ff] text-white rounded-[8px] shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#3232e6] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 min-w-[240px] justify-center"
              >
                <LockClosedIcon className="w-5 h-5" />
                <span
                  className="text-[18px] font-medium"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {isLoading ? 'Unlocking...' : buttonText}
                </span>
              </motion.button>

              {/* Support Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-[18px] md:text-[19px] lg:text-[20px] text-[#505050]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {supportText}
              </motion.p>
            </form>
          </div>
        </motion.div>
      </div>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --portal-bg: #f4f4ff;
          --portal-text-primary: #111827;
          --portal-text-secondary: #4b5563;
          --portal-text-muted: #505050;
          --portal-brand: #4242ff;
          --portal-brand-hover: #3232e6;
          --portal-white: #ffffff;
          --portal-glass-bg: rgba(255, 255, 255, 0.05);
          --portal-glass-border: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .backdrop-blur-md {
            backdrop-filter: blur(12px);
          }
        }
      `}</style>
    </section>
  );
};

export default MasterclassStudentPortal;