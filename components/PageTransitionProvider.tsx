'use client';

import React, { createContext, useContext, useRef, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { pageTransitionManager, TransitionType } from '@/lib/transitions';
import TransitionOverlay from './TransitionOverlay';

interface PageTransitionContextType {
  isTransitioning: boolean;
  triggerTransition: (href: string, type?: TransitionType) => Promise<void>;
  currentTransition: TransitionType | null;
}

export const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  triggerTransition: async () => {},
  currentTransition: null,
});

export const usePageTransition = () => useContext(PageTransitionContext);

interface PageTransitionProviderProps {
  children: ReactNode;
}

export default function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentTransition, setCurrentTransition] = useState<TransitionType | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const triggerTransition = async (href: string, type?: TransitionType) => {
    // Prevent multiple transitions
    if (isTransitioning) return;

    // Check if it's the same page
    if (window.location.pathname === href) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      router.push(href);
      return;
    }

    const transitionType = type || pageTransitionManager.getTransitionForRoute(href);

    // Set transitioning state
    setCurrentTransition(transitionType);
    setIsTransitioning(true);

    // Add transition class to content
    if (contentRef.current) {
      contentRef.current.classList.add('page-content');
    }

    try {
      // Create a promise that resolves when transition completes
      await new Promise<void>((resolve) => {
        pageTransitionManager.transition(transitionType, {
          duration: 0.6,
          onComplete: () => {
            resolve();
          }
        });
      });

      // After transition completes, navigate
      // Use window.location for now to ensure navigation works
      window.location.href = href;

      // Note: If you want to use Next.js router instead (for client-side navigation):
      // await router.push(href);
      // Then reset the content visibility:
      // setTimeout(() => {
      //   if (contentRef.current) {
      //     contentRef.current.style.opacity = '1';
      //     contentRef.current.classList.remove('page-content');
      //   }
      //   setIsTransitioning(false);
      //   setCurrentTransition(null);
      // }, 100);

    } catch (error) {
      console.error('Transition error:', error);
      // Navigate anyway if transition fails
      router.push(href);
      setIsTransitioning(false);
      setCurrentTransition(null);
    }
  };

  return (
    <PageTransitionContext.Provider
      value={{
        isTransitioning,
        triggerTransition,
        currentTransition,
      }}
    >
      <div ref={contentRef} className="transition-content-wrapper">
        {children}
      </div>
      <TransitionOverlay />
    </PageTransitionContext.Provider>
  );
}