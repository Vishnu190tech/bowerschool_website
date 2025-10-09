'use client';

import { useFormContext } from 'react-hook-form';
import { CompleteFormData } from './MultiStepForm';
import { Grade, Board, AcademicStream, Gender } from '@prisma/client';

export default function StepStudent() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<CompleteFormData>();

  const selectedGrade = watch('grade');

  // Grade options
  const gradeOptions = Object.values(Grade).filter(g => g !== 'NONE').map(grade => ({
    value: grade,
    label: grade.replace('GRADE_', 'Grade ')
  }));

  // Board options
  const boardOptions = Object.values(Board).filter(b => b !== 'NONE').map(board => ({
    value: board,
    label: board === 'STATE_BOARD' ? 'State Board' : board
  }));

  // Academic Stream options (only for Grade 11 and 12)
  const academicStreamOptions = Object.values(AcademicStream).filter(s => s !== 'NONE').map(stream => ({
    value: stream,
    label: stream === 'ARTS_HUMANITIES' ? 'Arts/Humanities' : stream.charAt(0) + stream.slice(1).toLowerCase()
  }));

  // Gender options
  const genderOptions = Object.values(Gender).filter(g => g !== 'NONE').map(gender => ({
    value: gender,
    label: gender === 'PREFER_NOT_TO_SAY' ? 'Prefer not to say' : gender.charAt(0) + gender.slice(1).toLowerCase()
  }));

  // Show academic stream only for Grade 11 and 12
  const showAcademicStream = selectedGrade === Grade.GRADE_11 || selectedGrade === Grade.GRADE_12;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Student Information</h2>
        <p className="text-sm text-gray-600">Educational details about the student (optional)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grade */}
        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
            Grade
          </label>
          <select
            {...register('grade')}
            id="grade"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select grade</option>
            {gradeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Board */}
        <div>
          <label htmlFor="board" className="block text-sm font-medium text-gray-700 mb-2">
            Board
          </label>
          <select
            {...register('board')}
            id="board"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select board</option>
            {boardOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Academic Stream (only for Grade 11 & 12) */}
        {showAcademicStream && (
          <div>
            <label htmlFor="academicStream" className="block text-sm font-medium text-gray-700 mb-2">
              Academic Stream
            </label>
            <select
              {...register('academicStream')}
              id="academicStream"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select stream</option>
              {academicStreamOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <select
            {...register('gender')}
            id="gender"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select gender</option>
            {genderOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Birthday */}
        <div>
          <label htmlFor="birthday" className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            {...register('birthday')}
            type="date"
            id="birthday"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* School/Institution */}
        <div>
          <label htmlFor="schoolInstitution" className="block text-sm font-medium text-gray-700 mb-2">
            School/Institution
          </label>
          <input
            {...register('schoolInstitution')}
            type="text"
            id="schoolInstitution"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Current school or institution"
          />
        </div>
      </div>

      {/* Information Note */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-600">
              Academic Stream field will only appear for students in Grade 11 or 12.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}