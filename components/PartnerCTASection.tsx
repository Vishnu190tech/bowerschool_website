'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PartnerCTASection = () => {
  return (
    <section className="w-full bg-[#e3e3ff]">
      <div className="max-w-[1440px] mx-auto px-4 py-8 md:px-10 md:py-12 lg:p-20">
        <div className="relative h-[280px] md:h-[380px] lg:h-[465px] w-full">
        {/* Background Container */}
        <div className="absolute inset-0 bg-[#3232e6] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] border-2 md:border-3 lg:border-4 border-white overflow-hidden">
          {/* Right side decorative elements */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
            {/* Masked shapes and decorative elements */}
            <div className="absolute inset-0">
              {/* Bottom left circle */}
              <div className="absolute bottom-0 left-[20%] w-[185px] h-[191px]">
                <Image
                  src="/a05733b66bfb6fb002a39f28cbec996062c4e38e.svg"
                  alt=""
                  width={185}
                  height={191}
                  className="rotate-90"
                />
              </div>
              
              {/* Middle right circle */}
              <div className="absolute top-[20%] right-0 w-[186px] h-[192px]">
                <Image
                  src="/98e1330e1b73cc140ee1fe934424d2facc52885e.svg"
                  alt=""
                  width={186}
                  height={192}
                  className="rotate-90"
                />
              </div>

              {/* Top center small circle */}
              <div className="absolute top-0 left-[20%] w-[93px] h-[192px]">
                <Image
                  src="/077e582c4e18bcd205c82c127d81ed3e44b30e04.svg"
                  alt=""
                  width={93}
                  height={192}
                  className="rotate-[270deg]"
                />
              </div>

              {/* Middle left circle */}
              <div className="absolute top-[20%] left-0 w-[96px] h-[187px]">
                <Image
                  src="/eb5baf6133d1df8b74688324f795727781159bcd.svg"
                  alt=""
                  width={96}
                  height={187}
                  className="rotate-180"
                />
              </div>

              {/* White overlay shape */}
              <div className="absolute top-[20%] left-[20%] w-[187px] h-[192px] bg-[#f9faff] opacity-20 rounded-full rotate-90" />

              {/* Bottom right rectangle */}
              <div className="absolute bottom-0 right-0 w-[187px] h-[192px]">
                <Image
                  src="/03bd5c46aba2504dc4926f018b26282f7173ea96.svg"
                  alt=""
                  width={187}
                  height={192}
                  className="rotate-90"
                />
              </div>

              {/* Top right rectangle */}
              <div className="absolute -top-[20%] right-0 w-[187px] h-[192px]">
                <Image
                  src="/43502ba6aa3af0269d1c8941b9803db2c4d5869a.svg"
                  alt=""
                  width={187}
                  height={192}
                  className="rotate-[270deg]"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8 lg:p-11">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white max-w-full md:max-w-[600px] lg:max-w-[735px] text-[32px] md:text-[56px] lg:text-[80px] font-bold leading-[1.1] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px]"
              style={{
                fontFamily: 'var(--font-plus-jakarta)',
              }}
            >
              Become an Industry Partner Today
            </motion.h2>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#3232e6] px-4 py-1 rounded-lg w-[160px] md:w-[180px] lg:w-[200px] h-10 md:h-11 flex items-center justify-center border border-[#4242ff] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-lg"
            >
              <span
                className="text-[16px] md:text-[17px] lg:text-[18px] font-medium"
                style={{
                  fontFamily: 'var(--font-plus-jakarta)',
                }}
              >
                Connect
              </span>
            </motion.button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PartnerCTASection;