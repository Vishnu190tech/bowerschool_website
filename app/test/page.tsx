'use client';

import MultiStepForm from '@/components/test/MultiStepForm';
import { Toaster } from 'react-hot-toast';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Multi-Step Lead Form Test
          </h1>
          <p className="text-gray-600">
            Progressive lead data collection with Zoho CRM integration
          </p>
        </div>

        <MultiStepForm />
      </div>
    </div>
  );
}