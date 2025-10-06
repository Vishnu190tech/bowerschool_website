'use client';

import FAQSection from '@/components/FAQSection';
import { useState } from 'react';

export default function FAQDemoPage() {
  const [selectedTheme, setSelectedTheme] = useState<'scholarship' | 'lead' | 'seed' | 'ug'>('seed');

  const themeInfo = {
    scholarship: {
      name: 'Scholarship Theme',
      color: '#3232e6',
      description: 'Deep blue gradients for scholarship programs',
    },
    lead: {
      name: 'LEAD Theme',
      color: '#A8F326',
      description: 'Energetic lime green for LEAD programs',
    },
    seed: {
      name: 'SEED Theme',
      color: '#FF8829',
      description: 'Warm orange gradients (default)',
    },
    ug: {
      name: 'UG Program Theme',
      color: '#4242FF',
      description: 'Bright blue for undergraduate programs',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dynamic FAQ Section Demo
          </h1>
          <p className="text-gray-600">
            Test all four color themes with enhanced FAQ content and gradients
          </p>
        </div>
      </div>

      {/* Theme Selector */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Theme</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(themeInfo) as Array<keyof typeof themeInfo>).map((theme) => (
              <button
                key={theme}
                onClick={() => setSelectedTheme(theme)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedTheme === theme
                    ? 'border-gray-900 shadow-md'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: themeInfo[theme].color }}
                  />
                  <h3 className="font-semibold text-gray-900">
                    {themeInfo[theme].name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 text-left">
                  {themeInfo[theme].description}
                </p>
                <p className="text-xs text-gray-400 mt-2 font-mono">
                  {themeInfo[theme].color}
                </p>
              </button>
            ))}
          </div>

          {/* Current Selection */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: themeInfo[selectedTheme].color }}
              />
              <span className="font-medium text-gray-900">
                Currently viewing: {themeInfo[selectedTheme].name}
              </span>
            </div>
          </div>
        </div>

        {/* Gradient Features */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Theme Gradient Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Radial Background Gradient</h3>
                <p className="text-sm text-gray-600">Theme-colored ellipse from bottom</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Sidebar Border</h3>
                <p className="text-sm text-gray-600">Theme primary color</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Question Hover</h3>
                <p className="text-sm text-gray-600">Theme accent on hover</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Chevron Hover</h3>
                <p className="text-sm text-gray-600">Theme-colored icons</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Animated Blobs</h3>
                <p className="text-sm text-gray-600">2 pulsing gradient circles</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">17 Quality FAQs</h3>
                <p className="text-sm text-gray-600">Comprehensive, detailed answers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
            <code>{`<FAQSection theme="${selectedTheme}" />`}</code>
          </pre>
        </div>
      </div>

      {/* Live Preview */}
      <FAQSection theme={selectedTheme} />
    </div>
  );
}
