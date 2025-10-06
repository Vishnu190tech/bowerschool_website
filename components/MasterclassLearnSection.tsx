'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface MasterclassLearnSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  learningOutcomes?: string[] | any;
}

const MasterclassLearnSection = ({
  title = 'You will learn',
  description = 'Build real-world skills in ideation, validation, business modeling, and pitching — without spending a bomb.',
  buttonText = 'Register for free',
  buttonLink = '/register',
  learningOutcomes
}: MasterclassLearnSectionProps) => {
  // Parse learning outcomes if they exist
  const outcomes = Array.isArray(learningOutcomes) ? learningOutcomes :
    (learningOutcomes && typeof learningOutcomes === 'object' ? Object.values(learningOutcomes) : []);

  // Use outcomes to enhance description if available
  const displayDescription = outcomes.length > 0
    ? outcomes.join(' • ')
    : description;
  return (
    <section className="w-full bg-[#f4f4ff] py-16 md:py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
        >
          {/* Title */}
          <div className="w-full lg:w-[608px] flex-shrink-0">
            <h2
              className="text-[32px] md:text-[40px] font-semibold text-[#111827] tracking-[-1.6px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {title}
            </h2>
          </div>

          {/* Description and Button */}
          <div className="flex-1 flex flex-col gap-6">
            <p
              className="text-[18px] md:text-[20px] text-[#4b5563] leading-[27px] md:leading-[30px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {displayDescription}
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = buttonLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#4242ff] text-white rounded-[8px] shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#3232e6] transition-colors self-start"
            >
              <span
                className="text-[18px] font-medium"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {buttonText}
              </span>
              <ChevronRightIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterclassLearnSection;