'use client';

import { useFormContext } from 'react-hook-form';
import { CompleteFormData } from './MultiStepForm';
import { SalesDepartment } from '@prisma/client';

export default function StepProgram() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompleteFormData>();

  // Sales Department options
  const salesDepartmentOptions = Object.values(SalesDepartment).filter(d => d !== 'NONE').map(dept => ({
    value: dept,
    label: dept.split('_').map(word => {
      if (word === 'K12' || word === 'UG' || word === 'AI' || word === 'B2B') return word;
      return word.charAt(0) + word.slice(1).toLowerCase();
    }).join(' ')
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Sales & Referral</h2>
        <p className="text-sm text-gray-600">Sales department and referral information (optional)</p>
      </div>

      {/* Sales Department */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label htmlFor="salesDepartment" className="block text-sm font-medium text-gray-700 mb-2">
            Sales Department
          </label>
          <select
            {...register('salesDepartment')}
            id="salesDepartment"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select department</option>
            {salesDepartmentOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Referral Information */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Referral Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Referrer Name */}
          <div>
            <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700 mb-2">
              Referrer Name
            </label>
            <input
              {...register('referrerName')}
              type="text"
              id="referrerName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Name of person who referred"
            />
          </div>

          {/* Referral Code */}
          <div>
            <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 mb-2">
              Referral Code
            </label>
            <input
              {...register('referralCode')}
              type="text"
              id="referralCode"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter referral code"
            />
          </div>

          {/* Referrer Email */}
          <div>
            <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700 mb-2">
              Referrer Email
            </label>
            <input
              {...register('referrerEmail')}
              type="email"
              id="referrerEmail"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="referrer@example.com"
            />
            {errors.referrerEmail && (
              <p className="mt-1 text-sm text-red-600">{errors.referrerEmail.message}</p>
            )}
          </div>

          {/* Referrer Phone */}
          <div>
            <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700 mb-2">
              Referrer Phone
            </label>
            <input
              {...register('referrerPhone')}
              type="tel"
              id="referrerPhone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
      </div>

      {/* Marketing/UTM Tracking */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Marketing Tracking</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* UTM Source */}
          <div>
            <label htmlFor="utmSource" className="block text-sm font-medium text-gray-700 mb-2">
              UTM Source
            </label>
            <input
              {...register('utmSource')}
              type="text"
              id="utmSource"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., google, facebook"
            />
          </div>

          {/* UTM Medium */}
          <div>
            <label htmlFor="utmMedium" className="block text-sm font-medium text-gray-700 mb-2">
              UTM Medium
            </label>
            <input
              {...register('utmMedium')}
              type="text"
              id="utmMedium"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., cpc, email"
            />
          </div>

          {/* UTM Campaign */}
          <div>
            <label htmlFor="utmCampaign" className="block text-sm font-medium text-gray-700 mb-2">
              UTM Campaign
            </label>
            <input
              {...register('utmCampaign')}
              type="text"
              id="utmCampaign"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Campaign name"
            />
          </div>

          {/* Other Source */}
          <div>
            <label htmlFor="otherSource" className="block text-sm font-medium text-gray-700 mb-2">
              Other Source
            </label>
            <input
              {...register('otherSource')}
              type="text"
              id="otherSource"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Any other source"
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Information
        </label>
        <textarea
          {...register('description')}
          id="description"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Any additional information or message..."
        />
      </div>
    </div>
  );
}