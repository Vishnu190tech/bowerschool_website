'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import AssignmentSubmissionPopup from './AssignmentSubmissionPopup';

interface MasterclassStudentPortalProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  supportText?: string;
  onSubmit?: (code: string) => void;
  config?: any;
  assignmentDetails?: any;
  registrationCode?: string;
}

const MasterclassStudentPortal = ({
  title,
  subtitle,
  placeholder,
  buttonText,
  supportText,
  onSubmit,
  config,
  assignmentDetails,
  registrationCode
}: MasterclassStudentPortalProps) => {
  // Use config values if provided, otherwise use defaults
  const portalTitle = config?.title || title || 'Student Portal';
  const portalSubtitle = config?.subtitle || subtitle || 'Attended this session? Enter your reg code to access exclusive content';
  const portalPlaceholder = config?.placeholder || placeholder || 'Enter Registration Code';
  const portalButtonText = config?.buttonText || buttonText || 'Unlock Portal';
  const portalSupportText = config?.supportText || supportText || "Haven't received your code? Contact support.";
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    // Show the assignment submission popup
    setShowPopup(true);
  };

  const handlePopupSubmit = async (file: File | null, uploadMethod: 'drive' | 'computer') => {
    setIsLoading(true);

    // Call the onSubmit callback if provided
    if (onSubmit) {
      await onSubmit(code);
    }

    // Handle file submission logic here
    console.log('File submitted:', file);
    console.log('Upload method:', uploadMethod);
    console.log('Registration code:', code);

    setIsLoading(false);
    setShowPopup(false);

    // You can add success notification here
    alert('Assignment submitted successfully!');
  };

  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-[#f4f4ff] py-12 md:py-20 lg:py-24 xl:py-32 overflow-hidden">
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
          <div className="w-full max-w-[984px] backdrop-blur-md bg-white/5 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-4 md:p-6 lg:p-8 xl:p-[24px] border border-white/10">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6">
              {/* Header */}
              <div className="text-center max-w-[936px]">
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] font-bold text-[#111827] leading-[0.9] tracking-[-1.5px] md:tracking-[-2.5px] lg:tracking-[-3.5px] xl:tracking-[-4px] mb-2 md:mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {portalTitle}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[16px] md:text-[20px] lg:text-[26px] xl:text-[30px] font-semibold text-[#4b5563] tracking-[-0.64px] md:tracking-[-0.8px] lg:tracking-[-1px] xl:tracking-[-1.2px]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {portalSubtitle}
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
                    placeholder={portalPlaceholder}
                    className="w-full h-[56px] md:h-[65px] lg:h-[75px] xl:h-[81px] px-4 md:px-5 py-3 md:py-4 bg-white/10 backdrop-blur-lg border border-white rounded-[8px] md:rounded-[10px] text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] text-[#111827] placeholder-[#505050] focus:outline-none focus:border-[#4242ff] focus:shadow-[4px_4px_12px_0px_#4242ff] transition-all duration-200"
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
                className="flex items-center gap-2 px-4 py-2 bg-[#4242ff] text-white rounded-[8px] shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#3232e6] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 min-w-[200px] md:min-w-[240px] justify-center"
              >
                <LockClosedIcon className="w-4 h-4 md:w-5 md:h-5" />
                <span
                  className="text-[16px] md:text-[18px] font-medium"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {isLoading ? 'Unlocking...' : portalButtonText}
                </span>
              </motion.button>

              {/* Support Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#505050]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {portalSupportText}
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

      {/* Assignment Submission Popup */}
      <AssignmentSubmissionPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onSubmit={handlePopupSubmit}
        assignmentDetails={assignmentDetails}
      />
    </section>
  );
};

export default MasterclassStudentPortal;