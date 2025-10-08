'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialQuoteSectionProps {
  testimonials?: any[] | any;
}

const TestimonialQuoteSection = ({ testimonials }: TestimonialQuoteSectionProps) => {
  // Parse testimonials if it's a JSON field
  let parsedTestimonials: any[] = [];
  if (testimonials) {
    if (Array.isArray(testimonials)) {
      parsedTestimonials = testimonials;
    } else if (typeof testimonials === 'object') {
      parsedTestimonials = Array.isArray(testimonials) ? testimonials : [];
    }
  }

  // Don't render if no testimonials
  if (parsedTestimonials.length === 0) {
    return null;
  }

  // Use first testimonial
  const testimonial = parsedTestimonials[0];
  return (
    <section className="relative w-full bg-[#f4f4ff] p-8 md:p-16 lg:p-20">
      {/* Top and bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-white" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white" />
      
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-2 md:gap-2.5">
        {/* Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#111827] text-center capitalize text-[28px] md:text-[36px] lg:text-[44px] leading-[28px] md:leading-[36px] lg:leading-[44px] tracking-[-1.12px] md:tracking-[-1.44px] lg:tracking-[-1.76px] font-semibold"
          style={{
            fontFamily: 'var(--font-plus-jakarta)'
          }}
        >
          "{testimonial.quote}"
        </motion.h2>

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#111827] text-right w-full text-[20px] md:text-[26px] lg:text-[30px] leading-[20px] md:leading-[26px] lg:leading-[30px] tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.2px] font-semibold"
          style={{
            fontFamily: 'var(--font-plus-jakarta)'
          }}
        >
          -{testimonial.author || testimonial.role}
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialQuoteSection;