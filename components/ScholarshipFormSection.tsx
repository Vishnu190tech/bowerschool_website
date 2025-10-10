'use client';

import { useState, useEffect, memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAllUTMParams } from '@/lib/utils/utm-tracking';
import confetti from 'canvas-confetti';

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

// Program Content Configuration
const PROGRAM_CONTENT = {
  k12: {
    icon: '🎓',
    title: 'Shape Young Minds',
    features: ['Ages 5-18', 'Holistic Development', 'Future-Ready Skills'],
    color: '#FF8829',
    brochurePath: '/brochures/k12-program.pdf',
    brochureName: 'K12 Program Brochure.pdf'
  },
  'k12-school': {
    icon: '🏫',
    title: 'Weekend Excellence',
    features: ['Flexible Schedule', 'Expert Teachers', 'Real Projects'],
    color: '#FF8829',
    brochurePath: '/brochures/k12-school.pdf',
    brochureName: 'K12 School Brochure.pdf'
  },
  'k12-seed': {
    icon: '🌱',
    title: 'Summer Growth Camp',
    features: ['Hands-On Activities', 'Creative Learning', 'Social Skills'],
    color: '#FF8829',
    brochurePath: '/brochures/k12-seed.pdf',
    brochureName: 'K12 SEED Brochure.pdf'
  },
  lead: {
    icon: '🚀',
    title: 'Launch Your Venture',
    features: ['Executive Training', 'Startup Mentorship', 'Network Building'],
    color: '#78B808',
    brochurePath: '/brochures/lead-program.pdf',
    brochureName: 'LEAD Program Brochure.pdf'
  },
  'lead-vcpe': {
    icon: '💼',
    title: 'Master VC & PE',
    features: ['Deal Analysis', 'Portfolio Management', 'Industry Connect'],
    color: '#78B808',
    brochurePath: '/brochures/lead-vcpe.pdf',
    brochureName: 'LEAD VCPE Brochure.pdf'
  },
  ug: {
    icon: '🎯',
    title: 'BBA Entrepreneurship',
    features: ['Business Fundamentals', 'Startup Incubation', 'Global Exposure'],
    color: '#4242FF',
    brochurePath: '/brochures/ug-program.pdf',
    brochureName: 'UG Program Brochure.pdf'
  }
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

// Helper function to generate darker shade for gradients
const getDarkerShade = (hexColor: string): string => {
  const rgb = parseInt(hexColor.slice(1), 16);
  const r = Math.floor(((rgb >> 16) & 0xFF) * 0.7);
  const g = Math.floor(((rgb >> 8) & 0xFF) * 0.7);
  const b = Math.floor((rgb & 0xFF) * 0.7);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Helper function to generate a FormTheme from a program color
const createThemeFromColor = (color: string): FormTheme => {
  const darkerShade = getDarkerShade(color);
  // Extract RGB values for gradient
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xFF;
  const g = (rgb >> 8) & 0xFF;
  const b = rgb & 0xFF;

  return {
    primary: darkerShade,
    secondary: color,
    gradient: `from-white/20 via-transparent to-[rgb(${r},${g},${b})]/16`,
    hover: darkerShade,
    tint: `bg-[${color}]/10 border-[${color}] text-[${color}]`,
  };
};

// Desktop Program Showcase Component - Memoized to prevent re-renders from countdown
const ProgramShowcaseDesktop = memo(function ProgramShowcaseDesktop({
  selectedProgram,
  currentTheme,
  pendingProgram
}: {
  selectedProgram: string;
  currentTheme: FormTheme;
  pendingProgram?: string;
}) {
  const programData = selectedProgram ? PROGRAM_CONTENT[selectedProgram as keyof typeof PROGRAM_CONTENT] : null;

  // Get color from pending program selection (dropdown) or use current theme
  const pendingProgramData = pendingProgram ? PROGRAM_CONTENT[pendingProgram as keyof typeof PROGRAM_CONTENT] : null;
  const displayColor = pendingProgramData?.color || currentTheme.primary;

  if (!programData) {
    // Default state - Stats cards (no re-animation on countdown updates)
    return (
      <div className="flex flex-col gap-8">
        <h3 className="text-3xl font-bold text-gray-900">
          Choose Your Perfect Program
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {[
            { label: 'Up to 90%', sublabel: 'Scholarships Available' },
            { label: '500+', sublabel: 'Students Enrolled' },
            { label: '6', sublabel: 'Specialized Programs' }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl backdrop-blur-md bg-white/40 border border-gray-100"
              style={{
                transition: 'all 0.3s ease'
              }}
            >
              <div
                className="text-4xl font-bold"
                style={{
                  color: displayColor,
                  transition: 'color 0.3s ease'
                }}
              >
                {stat.label}
              </div>
              <div className="text-lg text-gray-600 mt-2">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Selected program state
  const darkerColor = getDarkerShade(programData.color);

  return (
    <motion.div
      key={selectedProgram}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative p-8 rounded-3xl backdrop-blur-md bg-white/60 border-2 border-white overflow-hidden"
      style={{
        boxShadow: `0 8px 32px ${programData.color}20`
      }}
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `linear-gradient(135deg, ${programData.color} 0%, ${darkerColor} 100%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-7xl"
        >
          {programData.icon}
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-4xl font-bold text-gray-900"
        >
          {programData.title}
        </motion.h3>

        {/* Features */}
        <div className="flex flex-col gap-3">
          {programData.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-sm"
              style={{
                backgroundColor: `${programData.color}15`,
                borderLeft: `4px solid ${programData.color}`
              }}
            >
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: programData.color }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-medium text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

// Mobile Program Showcase Component - Memoized to prevent re-renders from countdown
const ProgramShowcaseMobile = memo(function ProgramShowcaseMobile({
  selectedProgram
}: {
  selectedProgram: string;
}) {
  if (!selectedProgram) return null;

  const programData = PROGRAM_CONTENT[selectedProgram as keyof typeof PROGRAM_CONTENT];
  if (!programData) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mb-4 p-4 rounded-2xl backdrop-blur-sm flex items-start gap-4"
      style={{
        backgroundColor: `${programData.color}10`,
        border: `2px solid ${programData.color}30`
      }}
    >
      <div className="text-4xl flex-shrink-0">{programData.icon}</div>
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-bold text-gray-900 mb-2">{programData.title}</h4>
        <div className="flex flex-wrap gap-2">
          {programData.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${programData.color}20`,
                color: programData.color
              }}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

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
  const [selectedProgram, setSelectedProgram] = useState(page || ''); // Store selected program
  const [countryCode, setCountryCode] = useState('+91'); // Default to India

  // Dynamic theme derivation: Use program color if no explicit theme and program is selected
  const currentTheme = useMemo(() => {
    // If no page prop (meaning dropdown is shown) and a program is selected, use program's theme
    if (!page && selectedProgram) {
      const programData = PROGRAM_CONTENT[selectedProgram as keyof typeof PROGRAM_CONTENT];
      if (programData) {
        return createThemeFromColor(programData.color);
      }
    }
    // Otherwise use the theme prop
    return FORM_THEMES[theme];
  }, [theme, selectedProgram, page]);

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [duplicateFound, setDuplicateFound] = useState(false);
  const [existingLeadInfo, setExistingLeadInfo] = useState<any>(null);
  const [zohoLeadId, setZohoLeadId] = useState<string | null>(null);
  const [utmParams, setUtmParams] = useState<any>({});
  const [isDeadlineExpired, setIsDeadlineExpired] = useState(false);

  // Capture UTM parameters on component mount
  useEffect(() => {
    const params = getAllUTMParams();
    if (Object.keys(params).length > 0) {
      setUtmParams(params);
      console.log('Captured UTM params:', params);
    }
  }, []);

  // Initialize countdown from deadline prop
  useEffect(() => {
    if (deadline) {
      const deadlineDate = typeof deadline === 'string' ? new Date(deadline) : deadline;
      const now = new Date();
      const timeRemaining = deadlineDate.getTime() - now.getTime();

      // Check if deadline has already passed
      if (timeRemaining <= 0) {
        setIsDeadlineExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate time remaining
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      setIsDeadlineExpired(false);
    }
  }, [deadline]);

  // Countdown timer effect
  useEffect(() => {
    // Don't run timer if deadline is already expired
    if (isDeadlineExpired) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        // Check if countdown has reached 0
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          setIsDeadlineExpired(true);
          return prevTime;
        }

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
  }, [isDeadlineExpired]);

  // Confetti effect on form submission success
  useEffect(() => {
    if (submitSuccess) {
      // Trigger confetti celebration
      const duration = 5000; // 5 seconds
      const end = Date.now() + duration;

      const colors = [currentTheme.primary, currentTheme.secondary, '#FFD700', '#FFF'];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }
  }, [submitSuccess, currentTheme]);

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
            page: selectedProgram || page, // Use selectedProgram if available, fallback to page prop
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
          // Note: Form no longer auto-resets - shows success screen instead
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
              <div className="hidden lg:flex flex-col justify-between gap-16 w-[700px]">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[44px] font-semibold leading-tight text-gray-900 tracking-[-1.76px] capitalize"
                >
                  {title}
                </motion.h2>

                {/* Desktop Countdown Timer or Program Showcase */}
                {showCountdown && page && deadline && !isDeadlineExpired ? (
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
                ) : (
                  <ProgramShowcaseDesktop selectedProgram={selectedProgram} currentTheme={currentTheme} pendingProgram={selectedProgram} />
                )}
              </div>

              {/* Mobile Header */}
              <div className="lg:hidden">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                  {title}
                </h2>

                {/* Mobile Program Showcase - Show when program is selected */}
                <ProgramShowcaseMobile selectedProgram={selectedProgram} />

                {/* Mobile Countdown Timer */}
                {showCountdown && page && deadline && !isDeadlineExpired && (
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
                {submitSuccess ? (
                  /* Success Screen - Show after form submission */
                  <div className="flex flex-col items-center justify-center h-full gap-6 lg:gap-8 py-8">
                    {/* Success Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center transition-colors duration-300"
                      style={{ backgroundColor: currentTheme.secondary }}
                    >
                      <svg className="w-12 h-12 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>

                    {/* Success Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-center space-y-2"
                    >
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Thank You!
                      </h3>
                      <p className="text-sm lg:text-base text-gray-600 max-w-md">
                        Your information has been submitted successfully. Our team will contact you shortly.
                      </p>
                    </motion.div>

                    {/* Action Buttons - Program-Specific with Enhanced Styling */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-4"
                    >
                      {/* Download Brochure Button - Program-Specific */}
                      {(() => {
                        const currentProgram = selectedProgram || page;
                        const programData = currentProgram ? PROGRAM_CONTENT[currentProgram as keyof typeof PROGRAM_CONTENT] : null;
                        const brochurePath = programData?.brochurePath || '/brochures/bower-school-prospectus.pdf';
                        const brochureName = programData?.brochureName || 'Bower School Brochure.pdf';
                        const programColor = programData?.color || currentTheme.secondary;
                        const darkerColor = getDarkerShade(programColor);

                        return (
                          <motion.a
                            href={brochurePath}
                            download={brochureName}
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 relative overflow-hidden flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-2xl transition-all group"
                            style={{
                              background: `linear-gradient(135deg, ${programColor} 0%, ${darkerColor} 100%)`,
                              boxShadow: `0 4px 20px ${programColor}40, 0 10px 40px ${programColor}20`
                            }}
                          >
                            {/* Shine effect */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                              style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
                              }}
                            />

                            {/* Download Icon */}
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="relative z-10">Download Brochure</span>
                          </motion.a>
                        );
                      })()}

                      {/* WhatsApp Contact Button - Enhanced */}
                      <motion.a
                        href="https://wa.me/919876543210?text=Hi%2C%20I%20just%20submitted%20my%20details%20and%20would%20like%20to%20know%20more%20about%20Bower%20School%20programs"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 relative overflow-hidden flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-2xl transition-all group"
                        style={{
                          background: 'linear-gradient(135deg, #25D366 0%, #1DA851 100%)',
                          boxShadow: '0 4px 20px #25D36640, 0 10px 40px #25D36620'
                        }}
                      >
                        {/* Shine effect */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
                          }}
                        />

                        {/* WhatsApp Icon */}
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span className="relative z-10">Contact on WhatsApp</span>
                      </motion.a>
                    </motion.div>
                  </div>
                ) : (
                  /* Form Content - Show initially */
                  <div className="flex flex-col gap-6 lg:gap-16 h-full lg:justify-center">
                    {/* Form Stepper */}
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2 lg:flex-col lg:gap-4">
                        <div
                          className={`w-8 h-8 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-sm lg:text-base border transition-colors duration-300 ${currentStep === 1 ? currentTheme.tint : 'border-gray-400 text-gray-400'
                            }`}
                        >
                          1
                        </div>
                        <span
                          className="text-sm lg:text-base transition-colors duration-300"
                          style={{ color: currentStep === 1 ? currentTheme.secondary : '#9CA3AF' }}
                        >
                          Contact
                        </span>
                      </div>

                      <div className="flex-1 h-0 border-t border-dashed border-gray-300 mx-4"></div>

                      <div className="flex items-center gap-2 lg:flex-col lg:gap-4">
                        <div
                          className={`w-8 h-8 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-sm lg:text-base border transition-colors duration-300 ${currentStep === 2 ? currentTheme.tint : 'border-gray-400 text-gray-400'
                            }`}
                        >
                          2
                        </div>
                        <span
                          className="text-sm lg:text-base transition-colors duration-300"
                          style={{ color: currentStep === 2 ? currentTheme.secondary : '#9CA3AF' }}
                        >
                          Submit
                        </span>
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-8">
                      <div className="flex flex-col gap-3">
                        {/* Program Selection Dropdown - Only show if page prop is not set */}
                        {!page && (
                          <select
                            value={selectedProgram}
                            onChange={(e) => setSelectedProgram(e.target.value)}
                            style={{
                              borderColor: selectedProgram ? currentTheme.secondary : '#D1D5DB',
                              transition: 'border-color 0.3s ease'
                            }}
                            className="w-full h-12 lg:h-[54px] px-4 py-2 bg-gray-50 border rounded-xl text-sm text-gray-900 focus:outline-none"
                            onFocus={(e) => (e.target.style.borderColor = currentTheme.secondary)}
                            onBlur={(e) => (e.target.style.borderColor = selectedProgram ? currentTheme.secondary : '#D1D5DB')}
                            required
                          >
                            <option value="">Select Program</option>
                            <option value="k12">K12 Program</option>
                            <option value="k12-school">K12 School Program</option>
                            <option value="k12-seed">K12 SEED Program</option>
                            <option value="lead">LEAD Program</option>
                            <option value="lead-vcpe">LEAD VCPE Program</option>
                            <option value="ug">UG Program</option>
                          </select>
                        )}

                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          style={{
                            borderColor: formData.name ? currentTheme.secondary : '#D1D5DB',
                            transition: 'border-color 0.3s ease'
                          }}
                          className="w-full h-12 lg:h-[54px] px-4 py-2 bg-gray-50 border rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
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
                            transition: 'border-color 0.3s ease'
                          }}
                          className="w-full h-12 lg:h-[54px] px-4 py-2 bg-gray-50 border rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                          onFocus={(e) => (e.target.style.borderColor = currentTheme.secondary)}
                          onBlur={(e) => (e.target.style.borderColor = formData.email ? currentTheme.secondary : '#D1D5DB')}
                          required
                        />

                        <div
                          className="flex h-12 lg:h-[54px] bg-gray-50 border rounded-xl overflow-hidden transition-colors"
                          style={{
                            borderColor: formData.mobile ? currentTheme.secondary : '#D1D5DB',
                            transition: 'border-color 0.3s ease'
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
                            className="hover:underline transition-colors duration-300"
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
                                  style={{
                                    backgroundColor: currentTheme.secondary,
                                    transition: 'background-color 0.3s ease'
                                  }}
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
                                transition: 'background-color 0.3s ease'
                              }}
                              className="w-full h-12 lg:h-11 text-white text-base lg:text-lg font-medium rounded-xl shadow-lg disabled:cursor-not-allowed"
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
                          className="underline transition-colors duration-300"
                          style={{ color: currentTheme.secondary }}
                        >
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a
                          href={termsOfUseUrl}
                          className="underline transition-colors duration-300"
                          style={{ color: currentTheme.secondary }}
                        >
                          Terms Of Use
                        </a>.
                      </p>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}