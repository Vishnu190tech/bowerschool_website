'use client';

import { useFormContext } from 'react-hook-form';
import { CompleteFormData } from './MultiStepForm';
import { Fragment } from 'react';

interface FormSummaryProps {
  onManualPush: () => void;
  isSubmitting: boolean;
  localLeadId: string | null;
  duplicateInfo: any;
}

export default function FormSummary({
  onManualPush,
  isSubmitting,
  localLeadId,
  duplicateInfo,
}: FormSummaryProps) {
  const { getValues } = useFormContext<CompleteFormData>();
  const formData = getValues();

  const sections = [
    {
      title: 'Required Information',
      fields: [
        { label: 'First Name', value: formData.firstName },
        { label: 'Last Name', value: formData.lastName },
        { label: 'Email', value: formData.email },
        { label: 'Phone', value: formData.phone },
        { label: 'Lead Source', value: formData.leadSource },
        { label: 'Program Interested', value: formData.programInterested },
      ],
    },
    {
      title: 'Contact Details',
      fields: [
        { label: 'Salutation', value: formData.salutation },
        { label: 'Mobile', value: formData.mobile },
        { label: 'Secondary Email', value: formData.secondaryEmail },
        { label: 'Lead Status', value: formData.leadStatus },
        { label: 'Lead Sub Status', value: formData.leadSubStatus },
        { label: 'Email Opt Out', value: formData.emailOptOut ? 'Yes' : 'No' },
        { label: 'WhatsApp Opt Out', value: formData.whatsappOptOut ? 'Yes' : 'No' },
      ],
    },
    {
      title: 'Student Information',
      fields: [
        { label: 'Grade', value: formData.grade },
        { label: 'Board', value: formData.board },
        { label: 'Academic Stream', value: formData.academicStream },
        { label: 'Gender', value: formData.gender },
        { label: 'Birthday', value: formData.birthday },
        { label: 'School/Institution', value: formData.schoolInstitution },
      ],
    },
    {
      title: 'Parent/Guardian',
      fields: [
        { label: 'Name', value: formData.parentGuardianName },
        { label: 'Email', value: formData.parentGuardianEmail },
        { label: 'Phone', value: formData.parentGuardianPhone },
        { label: 'Relationship', value: formData.relationshipToStudent },
        { label: 'Occupation', value: formData.occupation },
        { label: 'Street', value: formData.street },
        { label: 'City', value: formData.city },
        { label: 'State', value: formData.state },
        { label: 'Zip Code', value: formData.zipCode },
        { label: 'Country', value: formData.country },
      ],
    },
    {
      title: 'Sales & Referral',
      fields: [
        { label: 'Sales Department', value: formData.salesDepartment },
        { label: 'Referrer Name', value: formData.referrerName },
        { label: 'Referrer Email', value: formData.referrerEmail },
        { label: 'Referrer Phone', value: formData.referrerPhone },
        { label: 'Referral Code', value: formData.referralCode },
        { label: 'UTM Source', value: formData.utmSource },
        { label: 'UTM Medium', value: formData.utmMedium },
        { label: 'UTM Campaign', value: formData.utmCampaign },
        { label: 'Other Source', value: formData.otherSource },
        { label: 'Description', value: formData.description },
      ],
    },
  ];

  const formatValue = (value: any) => {
    if (value === null || value === undefined || value === '') return '-';
    if (typeof value === 'string' && value.includes('_')) {
      return value.split('_').map(word =>
        ['K12', 'UG', 'AI', 'B2B', 'BBA', 'BTECH', 'ICSE', 'CBSE', 'IB', 'NIOS', 'CAIE'].includes(word)
          ? word
          : word.charAt(0) + word.slice(1).toLowerCase()
      ).join(' ');
    }
    return value;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Review & Submit</h2>
        <p className="text-sm text-gray-600">Please review your information before submitting</p>
      </div>

      {/* Status Indicators */}
      <div className="space-y-3">
        {localLeadId && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-800 font-medium">
                Lead saved locally (ID: {localLeadId})
              </span>
            </div>
          </div>
        )}

        {duplicateInfo && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="text-yellow-800 font-medium">
                  Duplicate detected: This lead already exists
                </span>
                {duplicateInfo.zohoLeadId && (
                  <span className="text-yellow-700 text-sm ml-2">
                    (Zoho ID: {duplicateInfo.zohoLeadId})
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Data Summary */}
      <div className="space-y-6">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-3">{section.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {section.fields
                .filter(field => field.value !== undefined && field.value !== null && field.value !== '')
                .map((field, fieldIndex) => (
                  <div key={fieldIndex} className="flex justify-between py-1">
                    <span className="text-sm text-gray-600">{field.label}:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {formatValue(field.value)}
                    </span>
                  </div>
                ))}
            </div>
            {section.fields.filter(field => field.value !== undefined && field.value !== null && field.value !== '').length === 0 && (
              <p className="text-sm text-gray-400 italic">No data provided</p>
            )}
          </div>
        ))}
      </div>

      {/* Zoho Push Button */}
      {localLeadId && (
        <div className="border-t pt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="font-medium text-blue-900 mb-2">Push to Zoho CRM</h3>
            <p className="text-sm text-blue-700 mb-4">
              This will sync the lead data to your Zoho CRM. The operation will check for duplicates before creating a new lead.
            </p>
            <button
              type="button"
              onClick={onManualPush}
              disabled={isSubmitting}
              className={`
                px-6 py-2 bg-blue-600 text-white font-medium rounded-lg
                transition-colors duration-200
                ${isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Pushing to Zoho...
                </span>
              ) : (
                'Push to Zoho CRM'
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}