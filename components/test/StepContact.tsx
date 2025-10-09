'use client';

import { useFormContext } from 'react-hook-form';
import { CompleteFormData } from './MultiStepForm';
import { Salutation, LeadStatus, LeadSubStatus } from '@prisma/client';

export default function StepContact() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<CompleteFormData>();

  const leadStatus = watch('leadStatus');

  // Salutation options
  const salutationOptions = Object.values(Salutation).map(sal => ({
    value: sal,
    label: sal === 'NONE' ? 'None' : sal === 'MR' ? 'Mr.' : sal === 'MRS' ? 'Mrs.' : sal === 'MS' ? 'Ms.' : sal === 'DR' ? 'Dr.' : 'Prof.'
  }));

  // Lead Status options
  const leadStatusOptions = Object.values(LeadStatus).map(status => ({
    value: status,
    label: status.split('_').map(word =>
      word.charAt(0) + word.slice(1).toLowerCase()
    ).join(' ')
  }));

  // Lead Sub Status options
  const leadSubStatusOptions = Object.values(LeadSubStatus).map(status => ({
    value: status,
    label: status.split('_').map(word =>
      word.charAt(0) + word.slice(1).toLowerCase()
    ).join(' ')
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Contact Details</h2>
        <p className="text-sm text-gray-600">Additional contact information (optional)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Salutation */}
        <div>
          <label htmlFor="salutation" className="block text-sm font-medium text-gray-700 mb-2">
            Salutation
          </label>
          <select
            {...register('salutation')}
            id="salutation"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select salutation</option>
            {salutationOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>
          <input
            {...register('mobile')}
            type="tel"
            id="mobile"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Secondary Email */}
        <div>
          <label htmlFor="secondaryEmail" className="block text-sm font-medium text-gray-700 mb-2">
            Secondary Email
          </label>
          <input
            {...register('secondaryEmail')}
            type="email"
            id="secondaryEmail"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="alternate@example.com"
          />
          {errors.secondaryEmail && (
            <p className="mt-1 text-sm text-red-600">{errors.secondaryEmail.message}</p>
          )}
        </div>

        {/* Lead Status */}
        <div>
          <label htmlFor="leadStatus" className="block text-sm font-medium text-gray-700 mb-2">
            Lead Status
          </label>
          <select
            {...register('leadStatus')}
            id="leadStatus"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {leadStatusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Lead Sub Status */}
        {leadStatus && leadStatus !== LeadStatus.NONE && (
          <div className="md:col-span-2">
            <label htmlFor="leadSubStatus" className="block text-sm font-medium text-gray-700 mb-2">
              Lead Sub Status
            </label>
            <select
              {...register('leadSubStatus')}
              id="leadSubStatus"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select sub status</option>
              {leadSubStatusOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Communication Preferences */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Communication Preferences</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input
              {...register('emailOptOut')}
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Opt out of email communications</span>
          </label>

          <label className="flex items-center gap-3">
            <input
              {...register('whatsappOptOut')}
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Opt out of WhatsApp communications</span>
          </label>
        </div>
      </div>
    </div>
  );
}