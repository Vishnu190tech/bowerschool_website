'use client';

import { useState, useEffect } from 'react';
import ScholarshipFormSection from '@/components/ScholarshipFormSection';
import { getAllUTMParams } from '@/lib/utils/utm-tracking';

export default function TestLeadCapturePage() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [utmParams, setUtmParams] = useState<any>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      const params = getAllUTMParams();
      setUtmParams(params);
    }
  }, []);

  const testLinks = [
    {
      page: 'K12',
      url: '/test-lead-capture?utm_source=facebook&utm_medium=social&utm_campaign=spring2025&ref=john_doe&referral_code=REF123&referrer_name=John+Doe&referrer_email=john@example.com&referrer_phone=9876543210',
      department: 'K12',
      program: 'SEED_B2B'
    },
    {
      page: 'K12 Seed',
      url: '/test-lead-capture?utm_source=google&utm_medium=cpc&utm_campaign=summer_camp&ref=school_partner&referrer_name=Mary+Smith&referrer_email=mary@school.com&referrer_phone=9988776655',
      department: 'K12',
      program: 'SEED_SUMMER_CAMP'
    },
    {
      page: 'K12 School',
      url: '/test-lead-capture?utm_source=email&utm_medium=newsletter&utm_campaign=batch2025&referrer_name=Jane+Johnson&referrer_email=jane@institution.edu&referrer_phone=9123456789',
      department: 'K12',
      program: 'SEED_WEEKEND_SCHOOL'
    },
    {
      page: 'UG',
      url: '/test-lead-capture?utm_source=instagram&utm_medium=social&utm_campaign=bba_launch&referrer_name=Robert+Wilson&referrer_email=robert@university.edu&referrer_phone=9555666777',
      department: 'UG',
      program: 'BUILD_BBA_ENTREPRENEURSHIP'
    },
    {
      page: 'Lead - Venture Building',
      url: '/test-lead-capture?utm_source=linkedin&utm_medium=organic&utm_campaign=executive_program&referrer_name=Sarah+Brown&referrer_email=sarah@corporate.com&referrer_phone=9444333222',
      department: 'PG',
      program: 'LEAD_VENTURE_BUILDING'
    },
    {
      page: 'Lead - Venture Capital',
      url: '/test-lead-capture?utm_source=linkedin&utm_medium=paid&utm_campaign=vc_program&referrer_name=Michael+Davis&referrer_email=michael@venturecapital.com&referrer_phone=9333222111&referral_code=VC2025',
      department: 'PG',
      program: 'LEAD_VENTURE_CAPITAL_PRIVATE_EQUITY'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Test Information Panel */}
      <div className="bg-white shadow-lg p-6 mb-8">
        <h1 className="text-2xl text-black font-bold mb-4">🧪 Lead Capture Test Page</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Current URL Info */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Current URL</h2>
            <p className="text-sm text-blue-700 break-all font-mono">{currentUrl || 'Loading...'}</p>
          </div>

          {/* Captured UTM Parameters */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-green-900 mb-2">Captured UTM Parameters</h2>
            {Object.keys(utmParams).length > 0 ? (
              <ul className="text-sm text-green-700 space-y-1">
                {Object.entries(utmParams).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {String(value)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No UTM parameters detected</p>
            )}
          </div>
        </div>

        {/* Test Links */}
        <div className="mb-6">
          <h2 className="text-lg text-black font-semibold mb-3">📌 Test Links (Click to test different scenarios)</h2>
          <div className="grid gap-3">
            {testLinks.map((link, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{link.page} Page</h3>
                  <div className="flex gap-2">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      {link.department}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {link.program}
                    </span>
                  </div>
                </div>
                <a
                  href={link.url}
                  className="text-sm text-blue-600 hover:text-blue-800 underline break-all"
                >
                  {link.url}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-yellow-900 mb-2">📝 Testing Instructions</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-800">
            <li>Click on any test link above to load the page with UTM and referrer parameters</li>
            <li>Check that all parameters are captured (shown in green box), including:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>UTM parameters (utm_source, utm_medium, utm_campaign, utm_content, utm_term)</li>
                <li>Referrer information (referrerName, referrerEmail, referrerPhone)</li>
                <li>Referral codes (referrer, referralCode)</li>
              </ul>
            </li>
            <li>Fill out the form below with test data</li>
            <li>Submit the form and check the console (F12) for logged data</li>
            <li>Verify that the lead is created with correct Sales Department and Program</li>
            <li>Verify that referrer fields are sent to Zoho CRM (Referrer_Name, Referrer_Email, Referrer_Phone1)</li>
            <li>Test duplicate detection by submitting the same email twice</li>
          </ol>
        </div>
      </div>

      {/* Forms for Different Pages */}
      <div className="space-y-8 pb-8">
        <div>
          <h2 className="text-xl font-bold text-black mb-4 text-center">K12 Program Form</h2>
          <ScholarshipFormSection
            theme="seed"
            page="k12"
            title="Test K12 Lead Capture"
            showCountdown={false}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-black mb-4 text-center">K12-SEED Program Form</h2>
          <ScholarshipFormSection
            theme="seed"
            page="k12-seed"
            title="Test K12-SEED Lead Capture"
            showCountdown={false}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-black mb-4 text-center">K12-SCHOOL Program Form</h2>
          <ScholarshipFormSection
            theme="seed"
            page="k12-school"
            title="Test K12-SCHOOL Lead Capture"
            showCountdown={false}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-black mb-4 text-center">UG Program Form</h2>
          <ScholarshipFormSection
            theme="ug"
            page="ug"
            title="Test UG Lead Capture"
            showCountdown={false}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-black mb-4 text-center">LEAD Program Form (Venture Building)</h2>
          <ScholarshipFormSection
            theme="lead"
            page="lead"
            title="Test LEAD Venture Building Lead Capture"
            showCountdown={false}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-black mb-4 text-center">LEAD-VC Program Form (Venture Capital)</h2>
          <ScholarshipFormSection
            theme="lead"
            page="lead-vc"
            title="Test LEAD Venture Capital Lead Capture"
            showCountdown={false}
          />
        </div>
      </div>

      {/* API Response Monitor */}
      <div className="fixed bottom-4 right-4 bg-white shadow-xl rounded-lg p-4 max-w-md">
        <h3 className="font-semibold mb-2 text-black">📡 API Monitor</h3>
        <p className="text-xs text-gray-600">
          Open Developer Console (F12) → Network tab to see API requests
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Check Console tab for logged UTM and Sales Department data
        </p>
      </div>
    </div>
  );
}