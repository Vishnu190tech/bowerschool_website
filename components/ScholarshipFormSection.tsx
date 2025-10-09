'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAllUTMParams, storeUTMParams } from '@/lib/utils/utm-tracking';

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface FormTheme {
  primary: string;
  secondary: string;
  gradient: string;
  hover: string;
  tint: string;
}

const FORM_THEMES: Record<ThemeType, FormTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    gradient: 'from-white/20 via-transparent to-[#4242ff]/16',
    hover: '#3232e6',
    tint: 'bg-[#4242ff]/10 border-[#4242ff] text-[#4242ff]',
  },
  lead: {
    primary: '#78B808',
    secondary: '#78B808',
    gradient: 'from-white/20 via-transparent to-[#78B808]/16',
    hover: '#8FD920',
    tint: 'bg-[#78B808]/10 border-[#78B808] text-[#78B808]',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FF8829',
    gradient: 'from-white/20 via-transparent to-[#FF8829]/16',
    hover: '#E77620',
    tint: 'bg-[#FF8829]/10 border-[#FF8829] text-[#FF8829]',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#4242FF',
    gradient: 'from-white/20 via-transparent to-[#4242FF]/16',
    hover: '#3232e6',
    tint: 'bg-[#4242FF]/10 border-[#4242FF] text-[#4242FF]',
  },
};

// Component Props Interface
interface ScholarshipFormSectionProps {
  theme?: ThemeType;
  apiEndpoint?: string;
  title?: string;
  deadline?: Date | string;
  showCountdown?: boolean;
  privacyPolicyUrl?: string;
  termsOfUseUrl?: string;
  page?: string; // Page identifier for Sales Department mapping
}

export default function ScholarshipFormSection({
  theme = 'scholarship',
  apiEndpoint = '/api/scholarship/submit',
  title = 'Book A Call With Our Advisor By April 10th And Get Up To 90% Scholarships',
  deadline,
  showCountdown = true,
  privacyPolicyUrl = 'https://docs.tripleten.com/legal/confidential.html',
  termsOfUseUrl = 'https://docs.tripleten.com/legal/terms_of_use.html',
  page = '',
}: ScholarshipFormSectionProps) {
  const currentTheme = FORM_THEMES[theme];
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
  const [countryCode, setCountryCode] = useState('+91'); // Default to India

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [duplicateFound, setDuplicateFound] = useState(false);
  const [existingLeadInfo, setExistingLeadInfo] = useState<any>(null);
  const [zohoLeadId, setZohoLeadId] = useState<string | null>(null);
  const [utmParams, setUtmParams] = useState<any>({});

  // Capture UTM parameters on component mount
  useEffect(() => {
    const params = getAllUTMParams();
    if (Object.keys(params).length > 0) {
      setUtmParams(params);
      console.log('Captured UTM params:', params);
    }
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (currentStep === 1) {
      setIsSubmitting(true);

      try {
        // Get the current URL with all parameters
        const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Referer': currentUrl, // Pass current URL for UTM extraction
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            mobile: `${countryCode}${formData.mobile}`, // Include country code with mobile
            consent: formData.consent,
            page: page, // Include page identifier
            confirmUpdate: duplicateFound, // Include confirmation flag
            zohoLeadId: zohoLeadId, // Include Zoho Lead ID if updating
            utmParams: utmParams, // Include captured UTM params directly
          }),
        });

        const data = await response.json();

        if (data.requiresConfirmation && data.duplicateFound) {
          // Duplicate found, show confirmation dialog
          setDuplicateFound(true);
          setExistingLeadInfo(data.existingLead);
          setZohoLeadId(data.zohoLeadId);
          setSubmitError(
            `A lead with email ${formData.email} already exists. Would you like to update the existing record?`
          );
          setIsSubmitting(false);
          return;
        }

        if (data.success) {
          setSubmitSuccess(true);
          setCurrentStep(2);

          // Reset form after 3 seconds
          setTimeout(() => {
            setFormData({ name: '', email: '', mobile: '', consent: false });
            setCurrentStep(1);
            setSubmitSuccess(false);
            setDuplicateFound(false);
            setExistingLeadInfo(null);
            setZohoLeadId(null);
          }, 3000);
        } else if (!data.requiresConfirmation) {
          throw new Error(data.error || 'Failed to submit form');
        }
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleDuplicateConfirmation = async () => {
    // Re-submit with confirmation flag
    setDuplicateFound(true);
    await handleSubmit(new Event('submit') as any);
  };

  const handleDuplicateCancel = () => {
    // Reset duplicate state
    setDuplicateFound(false);
    setExistingLeadInfo(null);
    setZohoLeadId(null);
    setSubmitError(null);
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
                  {title}
                </motion.h2>

                {/* Desktop Countdown Timer */}
                {showCountdown && (
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
                        <span
                          className="text-[62px] font-semibold leading-none"
                          style={{ color: currentTheme.primary }}
                        >
                          {item.value}
                        </span>
                        <span
                          className="text-2xl font-semibold mt-2"
                          style={{ color: currentTheme.primary }}
                        >
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Mobile Header */}
              <div className="lg:hidden">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                  {title}
                </h2>

                {/* Mobile Countdown Timer */}
                {showCountdown && (
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
                        <span
                          className="text-2xl md:text-3xl font-semibold"
                          style={{ color: currentTheme.secondary }}
                        >
                          {item.value}
                        </span>
                        <span
                          className="text-sm mt-1"
                          style={{ color: currentTheme.secondary }}
                        >
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form - Responsive */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`flex-1 backdrop-blur-md bg-white lg:bg-white/70 rounded-3xl p-4 md:p-6 lg:border-2 lg:border-white lg:shadow-[4px_4px_12px_0px_rgba(66,66,255,0.08)] lg:bg-gradient-to-br lg:${currentTheme.gradient}`}
              >
                <div className="flex flex-col gap-6 lg:gap-16 h-full lg:justify-center">
                  {/* Form Stepper */}
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 lg:flex-col lg:gap-4">
                      <div
                        className={`w-8 h-8 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-sm lg:text-base border ${currentStep === 1 ? currentTheme.tint : 'border-gray-400 text-gray-400'
                          }`}
                      >
                        1
                      </div>
                      <span
                        className="text-sm lg:text-base"
                        style={{ color: currentStep === 1 ? currentTheme.secondary : '#9CA3AF' }}
                      >
                        Contact
                      </span>
                    </div>

                    <div className="flex-1 h-0 border-t border-dashed border-gray-300 mx-4"></div>

                    <div className="flex items-center gap-2 lg:flex-col lg:gap-4">
                      <div
                        className={`w-8 h-8 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-sm lg:text-base border ${currentStep === 2 ? currentTheme.tint : 'border-gray-400 text-gray-400'
                          }`}
                      >
                        2
                      </div>
                      <span
                        className="text-sm lg:text-base"
                        style={{ color: currentStep === 2 ? currentTheme.secondary : '#9CA3AF' }}
                      >
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
                        style={{
                          borderColor: formData.name ? currentTheme.secondary : '#D1D5DB',
                        }}
                        className="w-full h-12 lg:h-[54px] px-4 py-2 bg-gray-50 border rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none transition-colors"
                        onFocus={(e) => (e.target.style.borderColor = currentTheme.secondary)}
                        onBlur={(e) => (e.target.style.borderColor = formData.name ? currentTheme.secondary : '#D1D5DB')}
                        required
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                          borderColor: formData.email ? currentTheme.secondary : '#D1D5DB',
                        }}
                        className="w-full h-12 lg:h-[54px] px-4 py-2 bg-gray-50 border rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none transition-colors"
                        onFocus={(e) => (e.target.style.borderColor = currentTheme.secondary)}
                        onBlur={(e) => (e.target.style.borderColor = formData.email ? currentTheme.secondary : '#D1D5DB')}
                        required
                      />

                      <div
                        className="flex h-12 lg:h-[54px] bg-gray-50 border rounded-xl overflow-hidden"
                        style={{
                          borderColor: formData.mobile ? currentTheme.secondary : '#D1D5DB',
                        }}
                      >
                        {/* Country Code Selector */}
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="bg-gray-50 px-2 lg:px-3 border-r border-gray-300 text-sm text-gray-900 focus:outline-none cursor-pointer"
                          style={{ borderRightColor: '#D1D5DB' }}
                        >
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+86">🇨🇳 +86</option>
                          <option value="+81">🇯🇵 +81</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+61">🇦🇺 +61</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+65">🇸🇬 +65</option>
                        </select>

                        {/* Mobile Number Input */}
                        <input
                          type="tel"
                          name="mobile"
                          placeholder="Mobile Number"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className="flex-1 px-3 lg:px-4 py-2 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                          required
                          pattern="[0-9]{10}"
                          title="Please enter a 10-digit mobile number"
                        />
                      </div>
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
                        <a
                          href={privacyPolicyUrl}
                          className="hover:underline"
                          style={{ color: currentTheme.secondary }}
                        >
                          Privacy Policy
                        </a>.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col gap-2">
                      {duplicateFound && submitError ? (
                        // Duplicate confirmation buttons
                        <>
                          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="text-sm text-yellow-800 mb-3">{submitError}</p>
                            {existingLeadInfo && (
                              <div className="text-xs text-gray-600 mb-3">
                                <p>Existing Lead Info:</p>
                                <p>• Name: {existingLeadInfo.First_Name} {existingLeadInfo.Last_Name}</p>
                                <p>• Mobile: {existingLeadInfo.Mobile}</p>
                              </div>
                            )}
                            <div className="flex gap-2">
                              <motion.button
                                type="button"
                                onClick={handleDuplicateConfirmation}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{ backgroundColor: currentTheme.secondary }}
                                className="flex-1 h-10 text-white text-sm font-medium rounded-lg shadow transition-all"
                              >
                                Yes, Update Existing
                              </motion.button>
                              <motion.button
                                type="button"
                                onClick={handleDuplicateCancel}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 h-10 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg shadow transition-all hover:bg-gray-300"
                              >
                                Cancel
                              </motion.button>
                            </div>
                          </div>
                        </>
                      ) : (
                        // Normal submit button
                        <>
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            style={{
                              backgroundColor: isSubmitting ? '#9CA3AF' : currentTheme.secondary,
                            }}
                            className="w-full h-12 lg:h-11 text-white text-base lg:text-lg font-medium rounded-xl shadow-lg transition-all disabled:cursor-not-allowed"
                            onMouseEnter={(e) => {
                              if (!isSubmitting) e.currentTarget.style.backgroundColor = currentTheme.hover;
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubmitting) e.currentTarget.style.backgroundColor = currentTheme.secondary;
                            }}
                          >
                            {isSubmitting ? 'Submitting...' : submitSuccess ? 'Success!' : 'Submit'}
                          </motion.button>
                          {submitError && !duplicateFound && (
                            <p className="text-xs text-red-600 text-center">{submitError}</p>
                          )}
                        </>
                      )}
                    </div>

                    {/* Terms Text */}
                    <p className="text-xs lg:text-sm text-center text-gray-600">
                      By clicking 'Continue', you agree to Bowers's{' '}
                      <a
                        href={privacyPolicyUrl}
                        className="underline"
                        style={{ color: currentTheme.secondary }}
                      >
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a
                        href={termsOfUseUrl}
                        className="underline"
                        style={{ color: currentTheme.secondary }}
                      >
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