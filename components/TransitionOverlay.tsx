'use client';

import React from 'react';

export default function TransitionOverlay() {
  return (
    <>
      {/* Main transition overlay for liquid morph and other effects */}
      <div
        className="page-transition-overlay"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150vmax',
          height: '150vmax',
          zIndex: 9999,
          display: 'none',
          pointerEvents: 'none',
        }}
      />

      {/* Container for dynamically created transition elements */}
      <div
        id="transition-elements-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9990,
          pointerEvents: 'none',
        }}
      />

      {/* Loading indicator (optional) */}
      <div
        className="transition-loading"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
          display: 'none',
          pointerEvents: 'none',
        }}
      >
        <div className="loading-spinner" />
      </div>

      {/* Add global styles for transitions */}
      <style jsx global>{`
        /* Base transition styles */
        .transition-content-wrapper {
          position: relative;
          min-height: 100vh;
        }

        .page-content,
        .page-content-new {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        /* Loading spinner */
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #4242ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Accessibility - respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .page-transition-overlay,
          .split-panel,
          .curtain,
          .flip-container,
          .particle {
            transition: none !important;
            animation: none !important;
          }
        }

        /* Ensure smooth transitions */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Prevent layout shift during transitions */
        html {
          overflow-x: hidden;
        }

        body {
          overflow-x: hidden;
          position: relative;
        }

        /* Z-index management for transitions */
        .split-panel { z-index: 9998; }
        .curtain { z-index: 9997; }
        .flip-container { z-index: 9996; }
        .particle-container { z-index: 9995; }

        /* Ensure content stays interactive when not transitioning */
        body:not(.transitioning) .transition-content-wrapper {
          pointer-events: auto;
        }

        /* Add transition class to body during transitions */
        body.transitioning {
          overflow: hidden;
        }

        /* Smooth fade for content transitions */
        .page-content-enter {
          opacity: 0;
          transform: translateY(20px);
        }

        .page-content-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .page-content-exit {
          opacity: 1;
          transform: translateY(0);
        }

        .page-content-exit-active {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.5s ease-in, transform 0.5s ease-in;
        }
      `}</style>
    </>
  );
}