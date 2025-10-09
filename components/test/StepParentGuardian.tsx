'use client';

import { useFormContext } from 'react-hook-form';
import { CompleteFormData } from './MultiStepForm';

export default function StepParentGuardian() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompleteFormData>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Parent/Guardian Information</h2>
        <p className="text-sm text-gray-600">Contact details of parent or guardian (optional)</p>
      </div>

      {/* Parent/Guardian Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Parent/Guardian Name */}
        <div>
          <label htmlFor="parentGuardianName" className="block text-sm font-medium text-gray-700 mb-2">
            Parent/Guardian Name
          </label>
          <input
            {...register('parentGuardianName')}
            type="text"
            id="parentGuardianName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Full name"
          />
        </div>

        {/* Relationship to Student */}
        <div>
          <label htmlFor="relationshipToStudent" className="block text-sm font-medium text-gray-700 mb-2">
            Relationship to Student
          </label>
          <input
            {...register('relationshipToStudent')}
            type="text"
            id="relationshipToStudent"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Father, Mother, Guardian"
          />
        </div>

        {/* Parent/Guardian Email */}
        <div>
          <label htmlFor="parentGuardianEmail" className="block text-sm font-medium text-gray-700 mb-2">
            Parent/Guardian Email
          </label>
          <input
            {...register('parentGuardianEmail')}
            type="email"
            id="parentGuardianEmail"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="parent@example.com"
          />
          {errors.parentGuardianEmail && (
            <p className="mt-1 text-sm text-red-600">{errors.parentGuardianEmail.message}</p>
          )}
        </div>

        {/* Parent/Guardian Phone */}
        <div>
          <label htmlFor="parentGuardianPhone" className="block text-sm font-medium text-gray-700 mb-2">
            Parent/Guardian Phone
          </label>
          <input
            {...register('parentGuardianPhone')}
            type="tel"
            id="parentGuardianPhone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Occupation */}
        <div className="md:col-span-2">
          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">
            Occupation
          </label>
          <input
            {...register('occupation')}
            type="text"
            id="occupation"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Parent/Guardian occupation"
          />
        </div>
      </div>

      {/* Address Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Address Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Street */}
          <div className="md:col-span-2">
            <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">
              Street Address
            </label>
            <input
              {...register('street')}
              type="text"
              id="street"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="House/Flat No, Street Name"
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              {...register('city')}
              type="text"
              id="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="City name"
            />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <input
              {...register('state')}
              type="text"
              id="state"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="State/Province"
            />
          </div>

          {/* Zip Code */}
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
              PIN/Zip Code
            </label>
            <input
              {...register('zipCode')}
              type="text"
              id="zipCode"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="110001"
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <input
              {...register('country')}
              type="text"
              id="country"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="India"
              defaultValue="India"
            />
          </div>
        </div>
      </div>
    </div>
  );
}