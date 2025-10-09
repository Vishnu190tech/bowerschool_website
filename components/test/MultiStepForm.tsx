'use client';

import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

import FormProgress from './FormProgress';
import FormNavigation from './FormNavigation';
import StepRequired from './StepRequired';
import StepContact from './StepContact';
import StepStudent from './StepStudent';
import StepParentGuardian from './StepParentGuardian';
import StepProgram from './StepProgram';
import FormSummary from './FormSummary';

import {
  LeadSource,
  LeadStatus,
  LeadSubStatus,
  Board,
  Grade,
  AcademicStream,
  Gender,
  SalesDepartment,
  ProgramInterested,
  Salutation
} from '@prisma/client';

// Complete form schema
export const completeFormSchema = z.object({
  // Step 1: Required Fields
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  leadSource: z.nativeEnum(LeadSource),
  programInterested: z.nativeEnum(ProgramInterested),

  // Step 2: Basic Contact
  salutation: z.nativeEnum(Salutation).optional(),
  mobile: z.string().optional(),
  secondaryEmail: z.string().email('Invalid email').or(z.literal('')).optional(),
  leadStatus: z.nativeEnum(LeadStatus).optional(),
  leadSubStatus: z.nativeEnum(LeadSubStatus).optional(),
  emailOptOut: z.boolean().optional(),
  whatsappOptOut: z.boolean().optional(),

  // Step 3: Student Information
  grade: z.nativeEnum(Grade).optional(),
  board: z.nativeEnum(Board).optional(),
  academicStream: z.nativeEnum(AcademicStream).optional(),
  gender: z.nativeEnum(Gender).optional(),
  birthday: z.string().optional(),
  schoolInstitution: z.string().optional(),

  // Step 4: Parent/Guardian
  parentGuardianName: z.string().optional(),
  parentGuardianEmail: z.string().email('Invalid email').or(z.literal('')).optional(),
  parentGuardianPhone: z.string().optional(),
  relationshipToStudent: z.string().optional(),
  occupation: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),

  // Step 5: Program & Referral
  salesDepartment: z.nativeEnum(SalesDepartment).optional(),
  referrerName: z.string().optional(),
  referrerEmail: z.string().email('Invalid email').or(z.literal('')).optional(),
  referrerPhone: z.string().optional(),
  referralCode: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  utmTerm: z.string().optional(),
  otherSource: z.string().optional(),
  description: z.string().optional(),
});

export type CompleteFormData = z.infer<typeof completeFormSchema>;

// Step schemas for validation
const stepSchemas = [
  // Step 1: Required fields
  z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone number is required'),
    leadSource: z.nativeEnum(LeadSource),
    programInterested: z.nativeEnum(ProgramInterested),
  }),
  // Step 2: Basic Contact (all optional)
  z.object({}),
  // Step 3: Student Info (all optional)
  z.object({}),
  // Step 4: Parent/Guardian (all optional)
  z.object({}),
  // Step 5: Program & Referral (all optional)
  z.object({}),
];

const stepTitles = [
  'Required Information',
  'Contact Details',
  'Student Information',
  'Parent/Guardian',
  'Sales & Referral',
  'Review & Submit',
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDebug, setShowDebug] = useState(false);
  const [localLeadId, setLocalLeadId] = useState<string | null>(null);
  const [duplicateInfo, setDuplicateInfo] = useState<any>(null);

  const methods = useForm<CompleteFormData>({
    resolver: currentStep < 5 ? zodResolver(stepSchemas[currentStep]) : zodResolver(completeFormSchema),
    mode: 'onChange',
    defaultValues: {
      leadSource: LeadSource.WEBSITE,
      leadStatus: LeadStatus.QUALIFIED_INTERESTED,
      emailOptOut: false,
      whatsappOptOut: false,
    }
  });

  const { handleSubmit, trigger, watch, setValue, getValues } = methods;
  const watchedEmail = watch('email');

  // Auto-save to localStorage
  useEffect(() => {
    const subscription = watch((data) => {
      localStorage.setItem('multiStepFormDraft', JSON.stringify(data));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // Load draft from localStorage on mount
  useEffect(() => {
    const draft = localStorage.getItem('multiStepFormDraft');
    if (draft) {
      try {
        const data = JSON.parse(draft);
        Object.keys(data).forEach(key => {
          setValue(key as keyof CompleteFormData, data[key]);
        });
        toast.success('Draft loaded from previous session');
      } catch (error) {
        console.error('Error loading draft:', error);
      }
    }
  }, [setValue]);

  // Check for duplicate on email change
  useEffect(() => {
    if (watchedEmail && watchedEmail.includes('@')) {
      const checkDuplicate = async () => {
        try {
          const response = await fetch('/test/api/check-duplicate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: watchedEmail }),
          });

          const data = await response.json();
          if (data.isDuplicate) {
            setDuplicateInfo(data);
            if (data.leadData) {
              toast('Existing lead found! Loading data...', {
                icon: '🔍',
                duration: 3000,
              });

              // Auto-populate form with existing data
              Object.keys(data.leadData).forEach(key => {
                if (data.leadData[key] !== null && data.leadData[key] !== undefined) {
                  setValue(key as keyof CompleteFormData, data.leadData[key]);
                }
              });
            }
          } else {
            setDuplicateInfo(null);
          }
        } catch (error) {
          console.error('Error checking duplicate:', error);
        }
      };

      const debounceTimer = setTimeout(checkDuplicate, 500);
      return () => clearTimeout(debounceTimer);
    }
  }, [watchedEmail, setValue]);

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      // Save to local database after Step 1
      if (currentStep === 0 && !localLeadId) {
        await saveToLocalDatabase();
      } else if (localLeadId) {
        await updateLocalDatabase();
      }

      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const previousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const goToStep = (step: number) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const saveToLocalDatabase = async () => {
    try {
      const formData = getValues();
      const response = await fetch('/test/api/save-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success && data.leadId) {
        setLocalLeadId(data.leadId);
        toast.success('Lead saved locally');
      }
    } catch (error) {
      console.error('Error saving lead:', error);
    }
  };

  const updateLocalDatabase = async () => {
    if (!localLeadId) return;

    try {
      const formData = getValues();
      const response = await fetch('/test/api/save-lead', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: localLeadId, ...formData }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success('Lead updated', { duration: 1000 });
      }
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  const handleFormSubmit = async (data: CompleteFormData) => {
    setIsSubmitting(true);
    try {
      // First save/update in local database
      if (!localLeadId) {
        await saveToLocalDatabase();
      } else {
        await updateLocalDatabase();
      }

      toast.success('Form submitted successfully!');

      // Clear draft from localStorage
      localStorage.removeItem('multiStepFormDraft');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleManualZohoPush = async () => {
    if (!localLeadId) {
      toast.error('Please save the lead first');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/test/api/push-to-zoho', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId: localLeadId }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Lead pushed to Zoho CRM successfully!');
      } else if (data.isDuplicate) {
        toast.error(`Duplicate lead found in Zoho: ${data.message}`);
      } else {
        toast.error(data.message || 'Failed to push to Zoho');
      }
    } catch (error) {
      console.error('Error pushing to Zoho:', error);
      toast.error('Failed to push to Zoho CRM');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepRequired />;
      case 1:
        return <StepContact />;
      case 2:
        return <StepStudent />;
      case 3:
        return <StepParentGuardian />;
      case 4:
        return <StepProgram />;
      case 5:
        return (
          <FormSummary
            onManualPush={handleManualZohoPush}
            isSubmitting={isSubmitting}
            localLeadId={localLeadId}
            duplicateInfo={duplicateInfo}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Progress Bar */}
      <FormProgress
        steps={stepTitles}
        currentStep={currentStep}
        onStepClick={goToStep}
      />

      {/* Duplicate Alert */}
      {duplicateInfo && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-6 mt-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                {duplicateInfo.source === 'local' ? 'Existing lead found in local database' : 'Lead exists in Zoho CRM'}
                {duplicateInfo.zohoLeadId && ` (ID: ${duplicateInfo.zohoLeadId})`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Form Content */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 text-black">
          {renderStep()}

          {/* Navigation */}
          <FormNavigation
            currentStep={currentStep}
            totalSteps={6}
            onPrevious={previousStep}
            onNext={currentStep === 5 ? undefined : nextStep}
            isSubmitting={isSubmitting}
            isLastStep={currentStep === 5}
          />

          {/* Debug Toggle */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={showDebug}
                onChange={(e) => setShowDebug(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Show debug information
            </label>
          </div>

          {/* Debug Panel */}
          {showDebug && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Debug Information</h3>
              <pre className="text-xs text-gray-700 overflow-x-auto">
                {JSON.stringify({
                  currentStep,
                  localLeadId,
                  duplicateInfo,
                  formData: getValues(),
                }, null, 2)}
              </pre>
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
}