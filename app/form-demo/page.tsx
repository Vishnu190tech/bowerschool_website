'use client';

import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import { useState } from 'react';

export default function FormDemoPage() {
  const [selectedTheme, setSelectedTheme] = useState<'scholarship' | 'lead' | 'seed' | 'ug'>('scholarship');

  const themeInfo = {
    scholarship: {
      name: 'Scholarship Theme',
      color: '#3232e6',
      description: 'Default theme for general scholarship applications',
    },
    lead: {
      name: 'LEAD Theme',
      color: '#A8F326',
      description: 'Lead generation campaigns with lime green accent',
    },
    seed: {
      name: 'SEED Theme',
      color: '#FF8829',
      description: 'SEED program applications with orange accent',
    },
    ug: {
      name: 'UG Program Theme',
      color: '#4242FF',
      description: 'Undergraduate program applications',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dynamic Form Component Demo
          </h1>
          <p className="text-gray-600">
            Test all four color themes and configurations
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

          {/* Current Selection Info */}
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

        {/* API Configuration Info */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">API Configuration</h2>
          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
            <div className="mb-2">
              <span className="text-gray-600">Endpoint:</span>{' '}
              <span className="text-blue-600">/api/{selectedTheme}/submit</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-600">Method:</span>{' '}
              <span className="text-green-600">POST</span>
            </div>
            <div>
              <span className="text-gray-600">Form Type:</span>{' '}
              <span className="text-purple-600">{selectedTheme}</span>
            </div>
          </div>
        </div>

        {/* Form Preview */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Live Preview</h2>

          <ScholarshipFormSection
            theme={selectedTheme}
            apiEndpoint={`/api/${selectedTheme}/submit`}
            title={
              selectedTheme === 'scholarship'
                ? 'Book A Call With Our Advisor By April 10th And Get Up To 90% Scholarships'
                : selectedTheme === 'lead'
                ? 'Join Our LEAD Program - Transform Your Future Today!'
                : selectedTheme === 'seed'
                ? 'Apply for SEED Program - Limited Time Offer!'
                : 'Apply for UG Program - Get Up To 90% Scholarship'
            }
            showCountdown={true}
          />
        </div>

        {/* Usage Example */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
            <code>{`<ScholarshipFormSection
  theme="${selectedTheme}"
  apiEndpoint="/api/${selectedTheme}/submit"
  title="${
    selectedTheme === 'scholarship'
      ? 'Book A Call With Our Advisor...'
      : selectedTheme === 'lead'
      ? 'Join Our LEAD Program...'
      : selectedTheme === 'seed'
      ? 'Apply for SEED Program...'
      : 'Apply for UG Program...'
  }"
  showCountdown={true}
/>`}</code>
          </pre>
        </div>

        {/* Features List */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">4 Color Themes</h3>
                <p className="text-sm text-gray-600">Scholarship, Lead, Seed, and UG variants</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Dynamic API Endpoints</h3>
                <p className="text-sm text-gray-600">Configure POST URL per instance</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Consistent Form Fields</h3>
                <p className="text-sm text-gray-600">Name, Email, Mobile across all themes</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Fully Responsive</h3>
                <p className="text-sm text-gray-600">Mobile, tablet, and desktop optimized</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Loading States</h3>
                <p className="text-sm text-gray-600">Submit, success, and error handling</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Optional Countdown</h3>
                <p className="text-sm text-gray-600">Show/hide timer as needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
