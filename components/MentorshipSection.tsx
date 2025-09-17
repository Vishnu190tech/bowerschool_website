'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const MentorshipSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Tighter zigzag pattern - Transform values for desktop
  // Card 1 (front) - starts at center, moves back and up-left when scrolling
  const card1X = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, -80]);
  const card1Y = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, -60]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0.9]);
  const card1Rotate = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, -2]);
  const card1ZIndex = useTransform(scrollYProgress, [0, 0.3, 0.31], [3, 3, 1]);

  // Card 2 (middle) - starts offset right, comes to center, then moves back
  const card2X = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.6], [40, 40, 0, 0, -80]);
  const card2Y = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.6], [25, 25, 0, 0, -60]);
  const card2Scale = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.6], [0.97, 0.97, 1, 1, 0.9]);
  const card2Rotate = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.6], [1.5, 1.5, 0, 0, -2]);
  const card2ZIndex = useTransform(scrollYProgress, [0, 0.3, 0.31, 0.6, 0.61], [2, 2, 3, 3, 1]);

  // Card 3 (back) - starts offset left and down, comes to center
  const card3X = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.6], [-40, -40, 40, 40, 0]);
  const card3Y = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.6], [50, 50, 25, 25, 0]);
  const card3Scale = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.6], [0.94, 0.94, 0.97, 0.97, 1]);
  const card3Rotate = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.6], [-1.5, -1.5, 1.5, 1.5, 0]);
  const card3ZIndex = useTransform(scrollYProgress, [0, 0.6, 0.61], [1, 1, 3]);

  // Card data
  const cards = [
    {
      id: 'accreditation',
      title: 'ACCREDITED CREDENTIALS',
      subtitle: 'Build your credibility while you build your idea',
      description: "Degrees matter—but only the ones that actually help you grow. At Bower, you don't just earn a certificate. You unlock credentials from world-class institutions that validate what you've built, not just what you've memorized.",
      visual: 'certification'
    },
    {
      id: 'mentorship',
      title: 'MENTORSHIP CIRCLE',
      subtitle: 'The Network Every Founder Needs',
      description: "Traditional education doesn't teach you how to raise funding, find product-market fit, or build a team. Our mentors do. They're your sounding board, your cheerleaders, and your reality check.",
      visual: 'network'
    },
    {
      id: 'funding',
      title: 'FUNDING THAT MOVES FAST',
      subtitle: 'Back your ideas with real capital',
      description: 'Most aspiring founders get stuck chasing capital before building. At Bower, we flip the script. You bring the ambition—we bring the investors.',
      visual: 'money'
    }
  ];

  // Handle scroll-based active card for text content with pause points
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.3) {
        setActiveCard(0);
      } else if (latest < 0.6) {
        setActiveCard(1);
      } else {
        setActiveCard(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const renderCardContent = (card: typeof cards[0]) => {
    switch (card.visual) {
      case 'certification':
        return (
          <Image
            src="/one-card.png"
            alt="Accredited Credentials"
            fill
            className="object-cover"
          />
        );

      case 'network':
        return (
          <Image
            src="/two-gif.gif"
            alt="Mentorship Circle"
            fill
            className="object-cover"
            unoptimized // For GIF animation
          />
        );

      case 'money':
        return (
          <Image
            src="/three-gif.gif"
            alt="Funding"
            fill
            className="object-cover"
            unoptimized // For GIF animation
          />
        );

      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white min-h-[400vh]  md:min-h-[500vh]" // Adjusted heights
    >
      {/* Header Section */}
      <div className="md:sticky md:top-0 z-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-6 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center self-start mb-4"
              >
                <span className="bg-[rgba(50,50,230,0.1)] text-[#4242ff] px-4 lg:px-5 py-2 rounded-[24px] text-[12px] lg:text-[14px] font-normal border border-black/5">
                  Why Bower
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold text-gray-900 leading-tight tracking-[-1px] md:tracking-[-1.6px]">
                  Learning theories isn't enough to
                </h2>
                <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-[#3232e6] leading-tight tracking-[-1px] md:tracking-[-1.76px] capitalize">
                  Build A Business
                </h2>
              </motion.div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[14px] md:text-[16px] lg:text-[20px] text-gray-600 leading-[20px] md:leading-[24px] lg:leading-[30px] mb-4 lg:mb-6"
              >
                That's why we built Bower! We bridge the gap between textbooks & real business world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#4242ff] text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-[8px] flex items-center gap-2 shadow-lg hover:bg-[#3232e6] transition-colors text-[14px] md:text-[16px] lg:text-[18px]"
                >
                  <span className="font-medium">Start your Application</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Vertical */}
      {isMobile ? (
        <div className="container mx-auto px-4 py-8">
          {/* Card Info */}
          <div className="mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-[22px] font-bold text-gray-900 mb-3">
                  {cards[activeCard].title}
                </h3>
                <p className="text-[14px] font-medium text-gray-700 mb-4">
                  {cards[activeCard].subtitle}
                </p>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
                  {cards[activeCard].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Cards Stack - Mobile */}
          <div className="relative h-[250px] mb-8">
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                x: activeCard === 2 ? -30 : activeCard === 1 ? 15 : 0,
                y: activeCard === 2 ? 20 : activeCard === 1 ? 10 : 0,
                scale: activeCard === 2 ? 1 : activeCard === 1 ? 0.95 : 0.9,
                zIndex: activeCard === 2 ? 3 : 1,
              }}
            >
              <div className="w-[240px] h-[160px] bg-white rounded-[16px] shadow-xl border border-gray-100 overflow-hidden">
                {renderCardContent(cards[2])}
              </div>
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                x: activeCard === 1 ? 0 : activeCard === 0 ? 15 : -15,
                y: activeCard === 1 ? 0 : activeCard === 0 ? 10 : 10,
                scale: activeCard === 1 ? 1 : 0.95,
                zIndex: activeCard === 1 ? 3 : 2,
              }}
            >
              <div className="w-[240px] h-[160px] bg-white rounded-[16px] shadow-xl border border-gray-100 overflow-hidden">
                {renderCardContent(cards[1])}
              </div>
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                x: activeCard === 0 ? 0 : activeCard === 1 ? -15 : 30,
                y: activeCard === 0 ? 0 : activeCard === 1 ? 10 : 20,
                scale: activeCard === 0 ? 1 : activeCard === 1 ? 0.95 : 0.9,
                zIndex: activeCard === 0 ? 3 : 1,
              }}
            >
              <div className="w-[240px] h-[160px] bg-white rounded-[16px] shadow-xl border border-gray-100 overflow-hidden">
                {renderCardContent(cards[0])}
              </div>
            </motion.div>
          </div>

          {/* Progress Indicators - Mobile */}
          <div className="flex items-center justify-center gap-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${activeCard === index
                  ? 'w-8 h-2 bg-[#4242ff] rounded-full'
                  : 'w-2 h-2 bg-gray-300 rounded-full'
                  }`}
                aria-label={`Card ${index + 1} indicator`}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Desktop Layout - Zigzag */
        <div className="sticky top-[250px] lg:top-[280px] h-[450px] lg:h-[500px] ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-20 h-full ">
            <div className="flex gap-8 h-full items-center ">

              {/* Left Side - Card Info - Desktop */}
              <div className="w-1/3 lg:w-1/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCard}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-[24px] lg:text-[28px] font-bold text-gray-900 mb-3 lg:mb-4">
                      {cards[activeCard].title}
                    </h3>
                    <p className="text-[16px] lg:text-[18px] font-medium text-gray-700 mb-4 lg:mb-6">
                      {cards[activeCard].subtitle}
                    </p>
                    <p className="text-[14px] lg:text-[16px] text-gray-600 leading-relaxed">
                      {cards[activeCard].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators - Desktop */}
                <div className="flex items-center gap-2 mt-8">
                  {cards.map((_, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-300 ${activeCard === index
                        ? 'w-8 h-2 bg-[#4242ff] rounded-full'
                        : 'w-2 h-2 bg-gray-300 rounded-full'
                        }`}
                      aria-label={`Card ${index + 1} indicator`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side - Zigzag Stacked Cards - Desktop */}
              <div className="w-2/3 lg:w-4/5 relative h-full">
                <div className="relative w-full h-full flex items-center justify-center">

                  {/* Card 3 - Back initially (bottom-left in zigzag) */}
                  <motion.div
                    className="absolute w-[450px] h-[300px] lg:w-full lg:h-full"
                    style={{
                      x: card3X,
                      y: card3Y,
                      scale: card3Scale,
                      rotate: card3Rotate,
                      zIndex: card3ZIndex,
                    }}
                  >
                    <div className="relative w-full h-full bg-white rounded-[24px] lg:rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">
                      {renderCardContent(cards[2])}
                    </div>
                  </motion.div>

                  {/* Card 2 - Middle initially (top-right in zigzag) */}
                  <motion.div
                    className="absolute w-[450px] h-[300px]  lg:w-full lg:h-full"
                    style={{
                      x: card2X,
                      y: card2Y,
                      scale: card2Scale,
                      rotate: card2Rotate,
                      zIndex: card2ZIndex,
                    }}
                  >
                    <div className="relative w-full h-full bg-white rounded-[24px] lg:rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">
                      {renderCardContent(cards[1])}
                    </div>
                  </motion.div>

                  {/* Card 1 - Top initially (center front) */}
                  <motion.div
                    className="absolute w-[450px] h-[300px]  lg:w-full lg:h-full"
                    style={{
                      x: card1X,
                      y: card1Y,
                      scale: card1Scale,
                      rotate: card1Rotate,
                      zIndex: card1ZIndex,
                    }}
                  >
                    <div className="relative w-full h-full bg-white rounded-[24px] lg:rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">
                      {renderCardContent(cards[0])}
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for scroll */}
      <div className="h-[150vh] md:h-[200vh]" />
    </section>
  );
};

export default MentorshipSection;