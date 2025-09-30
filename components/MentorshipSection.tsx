'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const MentorshipSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Card data
  const cards = [
    {
      id: 'accreditation',
      title: 'ACCREDITED CREDENTIALS',
      subtitle: 'Build your credibility while you build your idea',
      description: "Degrees matter—but only the ones that actually help you grow. At Bower, you don't just earn a certificate. You unlock credentials from world-class institutions that validate what you've built, not just what you've memorized.",
      image: '/one-card.png',
      angle: 4
    },
    {
      id: 'mentorship',
      title: 'MENTORSHIP CIRCLE',
      subtitle: 'The Network Every Founder Needs',
      description: "Traditional education doesn't teach you how to raise funding, find product-market fit, or build a team. Our mentors do. They're your sounding board, your cheerleaders, and your reality check.",
      image: '/two-gif.gif',
      angle: -8
    },
    {
      id: 'funding',
      title: 'FUNDING THAT MOVES FAST',
      subtitle: 'Back your ideas with real capital',
      description: 'Most aspiring founders get stuck chasing capital before building. At Bower, we flip the script. You bring the ambition—we bring the investors.',
      image: '/three-gif.gif',
      angle: -7
    }
  ];

  // GSAP Animations
  useGSAP(() => {
    if (!sectionRef.current) return;

    // Create context for cleanup
    const ctx = gsap.context(() => {

      // Header animations removed - header remains static as requested

      // 4. Card stack 3D parallax animation
      if (cardsContainerRef.current) {
        gsap.set(cardsContainerRef.current, {
          perspective: 1000,
          transformStyle: 'preserve-3d'
        });

        // Parallax on cards container
        gsap.to(cardsContainerRef.current, {
          rotationY: 5,
          rotationX: -5,
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.to(cardsContainerRef.current, {
                rotationY: progress * 10 - 5,
                rotationX: progress * -10 + 5,
                duration: 0.1
              });
            }
          }
        });
      }

      // 5. Removed card hover animations as requested - cards remain static on hover

      // 6. Magnetic hover effect on navigation buttons
      navButtonRefs.current.forEach(button => {
        if (!button) return;

        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.1,
            duration: 0.3,
            ease: 'elastic.out(1, 0.3)'
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.3,
            ease: 'elastic.out(1, 0.3)'
          });
        });

        button.addEventListener('mousemove', (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

      // 7. Progress indicator animation
      gsap.to('.progress-dot', {
        scale: 1.5,
        duration: 0.3,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.3)',
        scrollTrigger: {
          trigger: '.progress-indicators',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // CTA button animation removed - header remains static

      // 9. Number counting animation
      gsap.fromTo('.card-number',
        {
          textContent: 0,
          opacity: 0
        },
        {
          textContent: activeCard + 1,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
          snap: { textContent: 1 },
          onUpdate: function () {
            this.targets()[0].textContent = Math.floor(this.targets()[0].textContent);
          }
        }
      );

    }, sectionRef);

    // Cleanup
    return () => ctx.revert();
  }, { scope: sectionRef, dependencies: [activeCard] });

  // Smooth card transition animation when activeCard changes
  useEffect(() => {
    if (!cardsContainerRef.current) return;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const isActive = index === activeCard;
      const stackPosition = (index - activeCard + cards.length) % cards.length;

      // Calculate positions and transforms
      const offsetX = !isActive ? (stackPosition === 1 ? 40 : stackPosition === 2 ? -40 : 0) : 0;
      const offsetY = !isActive ? stackPosition * 20 : 0;
      const scale = isActive ? 1 : 1 - (stackPosition * 0.08);
      const rotate = isActive ? 0 : cards[index].angle;
      const zIndex = isActive ? cards.length + 1 : cards.length - stackPosition;
      const blur = isActive ? 0 : stackPosition * 2;

      // Animate with GSAP for smooth transitions
      gsap.to(card, {
        x: offsetX,
        y: offsetY,
        scale: scale,
        rotation: rotate,
        zIndex: zIndex,
        filter: `blur(${blur}px)`,
        duration: 0.8,
        ease: 'elastic.out(1, 0.75)',
        transformOrigin: 'center center'
      });

      // Animate opacity for depth
      gsap.to(card.querySelector('.card-overlay'), {
        opacity: isActive ? 0 : 0.3 * stackPosition,
        duration: 0.6,
        ease: 'power2.inOut'
      });
    });
  }, [activeCard, cards]);

  const handlePrevious = () => {
    setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-12 md:py-20 overflow-hidden">
      <style jsx>{`
        .card-wrapper {
          transform-style: preserve-3d;
          will-change: transform;
        }
      `}</style>

      {/* Header Section */}
      <div ref={headerRef} className="container mx-auto px-4 sm:px-6 lg:px-20 mb-12">
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
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="lg:w-3/5">


            <div>
              <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold text-gray-900 leading-tight tracking-[-1px] md:tracking-[-1.6px]">
                Learning theories isn't enough to
              </h2>
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-[#3232e6] leading-tight tracking-[-1px] md:tracking-[-1.76px] capitalize">
                Build A Business
              </h2>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-2/5">
            <p className="text-[14px] md:text-[16px] lg:text-[20px] text-gray-600 leading-[20px] md:leading-[24px] lg:leading-[30px] mb-4 lg:mb-6">
              That's why we built Bower! We bridge the gap between textbooks & real business world.
            </p>

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
          </div>
        </div>
      </div>

      {/* Cards Section with Pagination */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative rounded-[32px] pb-10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/2fda539e10baec0e450de6636564b28e083dce65.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center z-10">

          {/* Left Side - Card Info */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Number */}
                <span className="text-sm hidden text-gray-500 font-medium">
                  <span className="card-number">{activeCard + 1}</span>/{cards.length}
                </span>

                <h3 className="text-[22px] md:text-[24px] lg:text-[28px] font-bold text-gray-900 mb-3 lg:mb-4 mt-2">
                  {cards[activeCard].title}
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium text-gray-700 mb-4 lg:mb-6">
                  {cards[activeCard].subtitle}
                </p>
                <p className="text-[13px] md:text-[14px] lg:text-[16px] text-gray-600 leading-relaxed mb-6">
                  {cards[activeCard].description}
                </p>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-4">
                  <button
                    ref={el => { navButtonRefs.current[0] = el }}
                    onClick={handlePrevious}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    aria-label="Previous card"
                  >
                    <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    ref={el => { navButtonRefs.current[1] = el }}
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    aria-label="Next card"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Stacked Cards */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2">
            <div
              ref={cardsContainerRef}
              className="relative h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              {/* Render cards in stacked layout */}
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  ref={el => { cardRefs.current[index] = el }}
                  className="card-wrapper absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="relative w-full aspect-[3/2] bg-white rounded-[20px] lg:rounded-[32px] shadow-2xl border-2 border-gray-100 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain"
                        unoptimized={card.image.includes('.gif')}
                        priority={index === 0}
                      />

                      {/* Gradient overlay for depth */}
                      <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            {/* <div className="progress-indicators flex items-center justify-center gap-2 mt-8">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`progress-dot transition-all duration-300 ${activeCard === index
                    ? 'w-8 h-2 bg-[#4242ff] rounded-full'
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                    }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;