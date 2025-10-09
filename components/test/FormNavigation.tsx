'use client';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext?: () => void;
  isSubmitting?: boolean;
  isLastStep?: boolean;
}

export default function FormNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  isSubmitting = false,
  isLastStep = false,
}: FormNavigationProps) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 0}
        className={`
          px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700
          transition-colors duration-200
          ${
            currentStep === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }
        `}
      >
        Previous
      </button>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Step {currentStep + 1} of {totalSteps}</span>
      </div>

      {isLastStep ? (
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            px-6 py-2 bg-green-600 text-white font-medium rounded-lg
            transition-colors duration-200
            ${
              isSubmitting
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
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
              Submitting...
            </span>
          ) : (
            'Submit Form'
          )}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          disabled={isSubmitting}
          className={`
            px-6 py-2 bg-blue-600 text-white font-medium rounded-lg
            transition-colors duration-200
            ${
              isSubmitting
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }
          `}
        >
          Next
        </button>
      )}
    </div>
  );
}