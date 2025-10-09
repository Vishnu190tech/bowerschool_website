'use client';

interface FormProgressProps {
  steps: string[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export default function FormProgress({ steps, currentStep, onStepClick }: FormProgressProps) {
  return (
    <div className="bg-gray-50 px-6 py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
          >
            <button
              type="button"
              onClick={() => onStepClick(index)}
              disabled={index > currentStep}
              className={`
                flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm
                transition-all duration-200
                ${
                  index < currentStep
                    ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer'
                    : index === currentStep
                    ? 'bg-blue-600 text-white cursor-default'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              {index < currentStep ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                index + 1
              )}
            </button>

            <div className="ml-3 hidden sm:block">
              <p
                className={`text-sm font-medium ${
                  index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {step}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className="flex-1 mx-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div
                    className={`
                      absolute inset-0 flex items-center transition-all duration-500
                      ${index < currentStep ? '' : 'invisible'}
                    `}
                  >
                    <div className="w-full border-t-2 border-green-600"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile step indicator */}
      <div className="mt-4 text-center sm:hidden">
        <p className="text-sm font-medium text-gray-900">
          Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
        </p>
      </div>
    </div>
  );
}