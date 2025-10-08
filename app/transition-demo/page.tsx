'use client';

import React from 'react';
import TransitionLink from '@/components/TransitionLink';
import { usePageTransition } from '@/hooks/usePageTransition';

export default function TransitionDemo() {
  const { playTransition, isTransitioning } = usePageTransition();

  const transitions = [
    { type: 'liquid-morph', name: 'Liquid Morph', color: 'bg-purple-500' },
    { type: 'split-screen', name: 'Split Screen', color: 'bg-blue-500' },
    { type: 'smooth-fade', name: 'Smooth Fade', color: 'bg-green-500' },
    { type: 'curtain-slide', name: 'Curtain Slide', color: 'bg-red-500' },
    { type: '3d-flip', name: '3D Flip', color: 'bg-yellow-500' },
    { type: 'particle-dissolve', name: 'Particle Dissolve', color: 'bg-pink-500' },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          GSAP Page Transitions Demo
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Click on any link below to see smooth page transitions in action!
        </p>

        {/* Demo Transitions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Preview Transitions (without navigation)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {transitions.map((transition) => (
              <button
                key={transition.type}
                onClick={() => playTransition(transition.type as any)}
                disabled={isTransitioning}
                className={`${transition.color} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg`}
              >
                {transition.name}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Navigate with Transitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TransitionLink
              href="/"
              transitionType="liquid-morph"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Home (Liquid Morph)
              </h3>
              <p className="text-gray-600">
                Navigate to homepage with a liquid morph transition
              </p>
            </TransitionLink>

            <TransitionLink
              href="/about-us"
              transitionType="split-screen"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                About Us (Split Screen)
              </h3>
              <p className="text-gray-600">
                Navigate to About Us with split screen transition
              </p>
            </TransitionLink>

            <TransitionLink
              href="/events/masterclasses"
              transitionType="curtain-slide"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Masterclasses (Curtain Slide)
              </h3>
              <p className="text-gray-600">
                Navigate to Masterclasses with curtain slide transition
              </p>
            </TransitionLink>

            <TransitionLink
              href="/campus-life"
              transitionType="3d-flip"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Campus Life (3D Flip)
              </h3>
              <p className="text-gray-600">
                Navigate to Campus Life with 3D flip transition
              </p>
            </TransitionLink>

            <TransitionLink
              href="/quiz"
              transitionType="particle-dissolve"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quiz (Particle Dissolve)
              </h3>
              <p className="text-gray-600">
                Navigate to Quiz with particle dissolve transition
              </p>
            </TransitionLink>

            <TransitionLink
              href="/mentors"
              transitionType="smooth-fade"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mentors (Smooth Fade)
              </h3>
              <p className="text-gray-600">
                Navigate to Mentors with smooth fade transition
              </p>
            </TransitionLink>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            How to Use Transitions in Your App
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>
              Replace regular Link components with TransitionLink
            </li>
            <li>
              Optionally specify transitionType prop for custom transitions
            </li>
            <li>
              Transitions automatically apply based on the route if not specified
            </li>
            <li>
              Use usePageTransition hook for programmatic navigation
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}