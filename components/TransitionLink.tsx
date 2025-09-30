'use client';

import React from 'react';
import { usePageTransition } from '@/components/PageTransitionProvider';
import { TransitionType } from '@/lib/transitions';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  transitionType?: TransitionType;
  [key: string]: any; // Allow other props to pass through
}

/**
 * Link component with page transition support
 * Use this instead of Next.js Link for smooth page transitions
 */
export default function TransitionLink({
  href,
  children,
  className,
  transitionType,
  ...props
}: TransitionLinkProps) {
  const { triggerTransition } = usePageTransition();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Handle external links normally
    if (href.startsWith('http') || href.startsWith('//')) {
      window.open(href, '_blank');
      return;
    }

    // Handle internal navigation with transition
    await triggerTransition(href, transitionType);
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}