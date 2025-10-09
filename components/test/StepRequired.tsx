'use client';

import { useFormContext } from 'react-hook-form';
import { CompleteFormData } from './MultiStepForm';
import { LeadSource, ProgramInterested } from '@prisma/client';

export default function StepRequired() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompleteFormData>();

  // Lead Source options
  const leadSourceOptions = Object.values(LeadSource).map(source => ({
    value: source,
    label: source.split('_').map(word =>
      word.charAt(0) + word.slice(1).toLowerCase()
    ).join(' ')
  }));

  // Program Interested options
  const programInterestedOptions = Object.values(ProgramInterested).filter(p => p !== 'NONE').map(program => ({
    value: program,
    label: program.split('_').map(word => {
      if (['BBA', 'BTECH', 'B2B'].includes(word)) return word;
      return word.charAt(0) + word.slice(1).toLowerCase();
    }).join(' ')
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Required Information</h2>
        <p className="text-sm text-gray-600">Please provide the following required details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter first name"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('lastName')}
            type="text"
            id="lastName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter last name"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Lead Source */}
        <div>
          <label htmlFor="leadSource" className="block text-sm font-medium text-gray-700 mb-2">
            Lead Source <span className="text-red-500">*</span>
          </label>
          <select
            {...register('leadSource')}
            id="leadSource"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {leadSourceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.leadSource && (
            <p className="mt-1 text-sm text-red-600">{errors.leadSource.message}</p>
          )}
        </div>

        {/* Program Interested */}
        <div>
          <label htmlFor="programInterested" className="block text-sm font-medium text-gray-700 mb-2">
            Program Interested <span className="text-red-500">*</span>
          </label>
          <select
            {...register('programInterested')}
            id="programInterested"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select program</option>
            {programInterestedOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.programInterested && (
            <p className="mt-1 text-sm text-red-600">{errors.programInterested.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              All fields are required for lead creation. Email will be checked for duplicates automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}