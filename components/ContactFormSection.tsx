'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactFormSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative w-full h-[600px] bg-[#dfdfff] overflow-hidden">
      {/* Top and bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-white" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white" />

      {/* Background Grid */}
      <div className="absolute inset-0 -top-1/4 -bottom-1/4">
        <Image
          src="/39d2c8f8744f519996020faab038ed64f2942a33.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Background Circle */}
      <div className="absolute top-[-214px] left-1/2 -translate-x-1/2 w-[820px] h-[820px]">
        <Image
          src="/540bbf1c49d15d10456954389965c466682043d7.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[800px] flex flex-col items-center gap-6"
        >
          {/* Header */}
          <div className="text-center">
            <h2 
              className="text-[#111827] capitalize mb-3"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: '44px',
                fontWeight: 600,
                lineHeight: '44px',
                letterSpacing: '-1.76px'
              }}
            >
              Want to know more?
            </h2>
            <p 
              className="text-[#4b5563]"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '27px'
              }}
            >
              Let us reach out to you
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
            {/* Email Input */}
            <div className="relative w-full h-[81px] bg-white/30 backdrop-blur-lg rounded-[10px] border border-black shadow-[4px_4px_12px_0px_#4242ff]">
              <div className="absolute inset-[10px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full h-full bg-white/50 border border-white rounded-[10px] px-5 py-4 text-[#505050] placeholder-[#505050] outline-none focus:bg-white/70 transition-colors"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '28px'
                  }}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#4242ff] text-white px-4 py-2 h-11 rounded-lg flex items-center gap-2 shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#3232e6] transition-colors"
            >
              <span
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '27px',
                  textShadow: '#4242ff 0px 1px 3px'
                }}
              >
                I want to know more
              </span>
              {/* Chevron Icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;