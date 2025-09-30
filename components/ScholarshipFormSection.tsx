'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ScholarshipFormSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 1,
    minutes: 46,
    seconds: 24
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    consent: false
  });

  const [currentStep, setCurrentStep] = useState(1);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
      // Handle form submission logic here
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="w-full bg-[#181a1c]">
      <div className="bg-white rounded-b-3xl w-full mx-auto">
        <div className="relative min-h-[800px] p-4 md:p-6 lg:p-10 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 hidden lg:block">
            <Image
              src="/c0f15af3eb0c36bfc7aa78a457af6257c6d3bded.svg"
              alt="Grid background"
              fill
              className="object-cover opacity-10"
            />
          </div>

          {/* Form Section */}
          <div className="relative z-10 bg-white rounded-3xl shadow-[4px_4px_24px_0px_rgba(0,0,0,0.06)] p-4 md:p-6 min-h-[700px] lg:h-full max-w-[1360px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 h-full">
              {/* Left Content - Desktop Only */}
              <div className="hidden lg:flex flex-col justify-between w-[700px]">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[44px] font-semibold leading-tight text-gray-900 tracking-[-1.76px] capitalize"
                >
                  Book A Call With Our Advisor By April 10th And Get Up To 90% Scholarships
                </motion.h2>

                {/* Desktop Countdown Timer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  {[
                    { value: timeLeft.days.toString().padStart(2, '0'), label: 'Days' },
                    { value: timeLeft.hours.toString().padStart(2, '0'), label: 'Hrs' },
                    { value: timeLeft.minutes.toString().padStart(2, '0'), label: 'Min' },
                    { value: timeLeft.seconds.toString().padStart(2, '0'), label: 'Sec' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="w-[150px] h-[150px] rounded-3xl backdrop-blur-md bg-white/40 border border-gray-100 flex flex-col items-center justify-center"
                    >
                      <span className="text-[62px] font-semibold text-[#3232e6] leading-none">
                        {item.value}
                      </span>
                      <span className="text-2xl font-semibold text-[#3232e6] mt-2">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Header */}
              <div className="lg:hidden">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                  Book a call with our advisor by April 10th and get up to 90% scholarships
                </h2>

                {/* Mobile Countdown Timer */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { value: timeLeft.hours.toString().padStart(2, '0'), label: 'Hrs', order: 'first' },
                    { value: timeLeft.days.toString().padStart(2, '0'), label: 'Days', order: 'second' },
                    { value: timeLeft.seconds.toString().padStart(2, '0'), label: 'Sec', order: 'third' },
                    { value: timeLeft.minutes.toString().padStart(2, '0'), label: 'Min', order: 'fourth' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`bg-gray-50 rounded-2xl p-3 flex flex-col items-center justify-center ${item.order === 'first' ? 'order-1' :
                        item.order === 'second' ? 'order-2' :
                          item.order === 'third' ? 'order-3' : 'order-4'
                        }`}
                    >
                      <span className="text-2xl md:text-3xl font-semibold text-[#4242ff]">
                        {item.value}
                      </span>
                      <span className="text-sm text-[#4242ff] mt-1">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form - Responsive */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex-1 backdrop-blur-md bg-white lg:bg-white/70 rounded-3xl p-4 md:p-6 lg:border-2 lg:border-white lg:shadow-[4px_4px_12px_0px_rgba(66,66,255,0.08)] lg:bg-gradient-to-br lg:from-white/20 lg:via-transparent lg:to-[#4242ff]/16"
              >
                <div className="flex flex-col gap-6 lg:gap-16 h-full lg:justify-center">
                  {/* Form Stepper */}
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 lg:flex-col lg:gap-4">
                      <div className={`w-8 h-8 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-sm lg:text-base border ${currentStep === 1
                        ? 'bg-[#4242ff]/10 border-[#4242ff] text-[#4242ff]'
                        : 'border-gray-400 text-gray-400'
                        }`}>
                        1
                      </div>
                      <span className={`text-sm lg:text-base ${currentStep === 1 ? 'text-[#4242ff]' : 'text-gray-400'}`}>
                        Contact
                      </span>
                    </div>

                    <div className="flex-1 h-0 border-t border-dashed border-gray-300 mx-4"></div>

                    <div className="flex items-center gap-2 lg:flex-col lg:gap-4">
                      <div className={`w-8 h-8 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-sm lg:text-base border ${currentStep === 2
                        ? 'bg-[#4242ff]/10 border-[#4242ff] text-[#4242ff]'
                        : 'border-gray-400 text-gray-400'
                        }`}>
                        2
                      </div>
                      <span className={`text-sm lg:text-base ${currentStep === 2 ? 'text-[#4242ff]' : 'text-gray-400'}`}>
                        Submit
                      </span>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-8">
                    <div className="flex flex-col gap-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full h-12 lg:h-[54px] px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                        required
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-12 lg:h-[54px] px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                        required
                      />

                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full h-12 lg:h-[54px] px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                        required
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="w-5 h-5 lg:w-6 lg:h-6 mt-0.5 bg-white border border-gray-300 rounded flex-shrink-0"
                        required
                      />
                      <label htmlFor="consent" className="text-xs lg:text-sm text-gray-600 leading-5">
                        I consent to marketing calls and text messages, including those made with an autodialed or artificial voice messages. Message and data rates may apply. Unsubscribe anytime per our{' '}
                        <a href="https://docs.tripleten.com/legal/confidential.html" className="text-[#4242ff] hover:underline">
                          Privacy Policy
                        </a>.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-12 lg:h-11 bg-[#4242ff] text-white text-base lg:text-lg font-medium rounded-xl shadow-lg hover:bg-[#3232e6] transition-colors"
                    >
                      Submit
                    </motion.button>

                    {/* Terms Text */}
                    <p className="text-xs lg:text-sm text-center text-gray-600">
                      By clicking 'Continue', you agree to Bowers's{' '}
                      <a href="https://docs.tripleten.com/legal/confidential.html" className="text-[#4242ff] underline">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="https://docs.tripleten.com/legal/terms_of_use.html" className="text-[#4242ff] underline">
                        Terms Of Use
                      </a>.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}