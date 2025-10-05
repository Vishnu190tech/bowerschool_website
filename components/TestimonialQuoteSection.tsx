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
    <section className="relative w-full bg-[#f4f4ff] p-20">
      {/* Top and bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-white" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white" />
      
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-2.5">
        {/* Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#111827] text-center capitalize"
          style={{
            fontFamily: 'var(--font-plus-jakarta)',
            fontSize: '44px',
            fontWeight: 600,
            lineHeight: '44px',
            letterSpacing: '-1.76px'
          }}
        >
          "{testimonial.quote}"
        </motion.h2>

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#111827] text-right w-full"
          style={{
            fontFamily: 'var(--font-plus-jakarta)',
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: '30px',
            letterSpacing: '-1.2px'
          }}
        >
          -{testimonial.author || testimonial.role}
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialQuoteSection;