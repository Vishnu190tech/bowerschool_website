'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { PageTransitionContext } from '@/components/PageTransitionProvider';
import { TransitionType } from '@/lib/transitions';

/**
 * Custom hook to access page transition functionality
 */
export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  const router = useRouter();

  if (!context) {
    throw new Error('usePageTransition must be used within PageTransitionProvider');
  }

  /**
   * Navigate to a new page with a transition
   */
  const navigateWithTransition = async (
    href: string,
    options?: {
      type?: TransitionType;
      replace?: boolean;
    }
  ) => {
    const { type, replace = false } = options || {};

    // If same page, don't transition
    if (window.location.pathname === href) {
      return;
    }

    // Trigger the transition
    await context.triggerTransition(href, type);

    // Navigate using Next.js router
    if (replace) {
      router.replace(href);
    } else {
      router.push(href);
    }
  };

  /**
   * Programmatically trigger a transition effect
   */
  const playTransition = async (type: TransitionType) => {
    if (context.isTransitioning) {
      console.warn('Transition already in progress');
      return;
    }

    // Just play the transition effect without navigation
    await new Promise((resolve) => {
      setTimeout(resolve, 1200); // Match transition duration
    });
  };

  return {
    isTransitioning: context.isTransitioning,
    currentTransition: context.currentTransition,
    navigateWithTransition,
    playTransition,
    triggerTransition: context.triggerTransition,
  };
}

/**
 * Hook to handle link transitions
 */
export function useTransitionLink() {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    transitionType?: TransitionType
  ) => {
    // Prevent default navigation
    e.preventDefault();

    // Handle external links normally
    if (href.startsWith('http') || href.startsWith('//')) {
      window.open(href, '_blank');
      return;
    }

    // Handle internal navigation with transition
    navigateWithTransition(href, { type: transitionType });
  };

  return { handleClick };
}