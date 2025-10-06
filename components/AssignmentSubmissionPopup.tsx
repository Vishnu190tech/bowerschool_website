'use client';

import { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface AssignmentSubmissionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (file: File | null, uploadMethod: 'drive' | 'computer') => void;
  assignmentDetails?: any;
}

export default function AssignmentSubmissionPopup({
  isOpen,
  onClose,
  onSubmit,
  assignmentDetails
}: AssignmentSubmissionPopupProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadMethod, setUploadMethod] = useState<'drive' | 'computer' | null>(null);
  const [showUploadOptions, setShowUploadOptions] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setUploadMethod('computer');
      setShowUploadOptions(false);
    }
  };

  const handleDriveUpload = () => {
    // Placeholder for Google Drive integration
    alert('Google Drive integration would be implemented here');
    setUploadMethod('drive');
    setShowUploadOptions(false);
  };

  const handleSubmit = () => {
    onSubmit(selectedFile, uploadMethod || 'computer');
    onClose();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-4xl">
                <div className="bg-white border border-gray-300 rounded-[4px] p-6">
                  {/* Main Container */}
                  <div className="backdrop-blur-lg backdrop-filter flex flex-col gap-4 rounded-lg">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between">
                        <p className="font-['Plus_Jakarta_Sans'] text-base font-normal text-[rgba(0,0,0,0.8)]">
                          Masterclass Project Overview:
                        </p>
                        <button
                          onClick={onClose}
                          className="relative w-6 h-6 hover:opacity-70 transition-opacity"
                        >
                          <XMarkIcon className="w-6 h-6 text-gray-600" />
                        </button>
                      </div>
                      <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-semibold text-gray-900 tracking-[-0.96px]">
                        Showcase Your Mastery and Reflect on Your Learning Journey
                      </h2>
                    </div>

                    {/* Assignment Details Section */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <p className="font-['Inter'] text-base font-semibold text-[rgba(0,0,0,0.8)]">
                          Assignment details
                        </p>
                        <div className="relative">
                          <button
                            onClick={() => setShowUploadOptions(!showUploadOptions)}
                            className="bg-white border border-[#4242ff] rounded px-3 py-2 flex gap-2 items-center hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-['Inter'] text-sm font-medium text-gray-900">
                              Upload Assessment
                            </span>
                          </button>

                          {/* Upload Options Dropdown */}
                          {showUploadOptions && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                              <button
                                onClick={handleDriveUpload}
                                className="w-full px-3 py-2 flex gap-2 items-center hover:bg-gray-50 text-left"
                              >
                                <Image
                                  src="/student-portal/a5b9b7c78b147775769164bfd7bf9ceab08867c3.svg"
                                  alt="Drive"
                                  width={20}
                                  height={20}
                                />
                                <span className="font-['Inter'] text-xs font-light text-gray-900">
                                  Add from Drive
                                </span>
                              </button>
                              <label className="w-full px-3 py-2 flex gap-2 items-center hover:bg-gray-50 cursor-pointer">
                                <Image
                                  src="/student-portal/ab6714c96bebdece26b05b21c777a568e8e1bc5c.svg"
                                  alt="File"
                                  width={20}
                                  height={20}
                                />
                                <span className="font-['Inter'] text-xs font-light text-gray-900">
                                  Upload from Computer
                                </span>
                                <input
                                  type="file"
                                  className="hidden"
                                  accept=".pdf,.docx"
                                  onChange={handleFileSelect}
                                />
                              </label>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="h-[1px] bg-gray-300 w-full" />

                      {/* Description */}
                      <div className="flex flex-col gap-4">
                        <div className="font-['Inter'] text-sm text-gray-900 tracking-[-0.14px] space-y-3">
                          <p>Assignment Overview: Understand the key objectives and expectations for your upcoming task.</p>

                          <p>Reflect on your leadership journey throughout this module. Think about how the concepts of vision crafting, teamwork, and strategic choices have influenced your leadership approach.</p>

                          <p>In a 2-3 page document, respond to the following prompts:</p>

                          <ol className="list-decimal list-inside space-y-1 ml-4">
                            <li>Describe a leadership challenge you faced and how you addressed it.</li>
                            <li>Identify a principle from this module that you applied or could have applied in this situation.</li>
                            <li>Based on your insights, what adjustments would you make if confronted with a similar scenario in the future?</li>
                          </ol>

                          <p>Please submit your document in PDF or Word format (.pdf / .docx).</p>

                          <p>Use this naming format for your file: YourName_LeadershipReflection.pdf</p>

                          <p className="font-semibold">Note: You have only one submission opportunity, so please review your work thoroughly before submitting.</p>
                        </div>

                        <div className="flex gap-3 items-center">
                          <Image
                            src="/student-portal/28d290e2b1c600ebc944fa56f7b9cec9b287cedc.svg"
                            alt="Document"
                            width={24}
                            height={24}
                          />
                          <a href="#" className="font-['Inter'] text-sm font-medium text-[#4242ff] underline">
                            Access additional resources and templates to enhance your learning experience.
                          </a>
                        </div>
                      </div>

                      <div className="h-[1px] bg-gray-300 w-full" />

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-8 md:gap-32">
                        <div className="flex flex-col gap-2">
                          <p className="font-['Inter'] text-sm font-medium text-gray-600">Due date</p>
                          <p className="font-['Inter'] text-sm font-semibold text-gray-900">Apr 25, 11:59 PM IST</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-['Inter'] text-sm font-medium text-gray-600">Submission</p>
                          <p className="font-['Inter'] text-sm font-semibold text-gray-900">1 left</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8 md:gap-32">
                        <div className="flex flex-col gap-2">
                          <p className="font-['Inter'] text-sm font-medium text-gray-600">Attempts</p>
                          <p className="font-['Inter'] text-sm font-semibold text-gray-900">1 left</p>
                        </div>
                      </div>

                      <div className="h-[1px] bg-gray-300 w-full" />

                      {/* Submission Tracker */}
                      <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded">
                        <div className="flex flex-col gap-1">
                          <p className="font-['Inter'] text-base font-semibold text-gray-900">
                            Submission Tracker
                          </p>
                          <p className="font-['Inter'] text-sm text-gray-900">
                            You haven't submitted this yet. We keep your highest score.
                          </p>
                        </div>
                        <div className="text-5xl font-bold text-gray-300">--</div>
                      </div>

                      {/* Selected File Display */}
                      {selectedFile && (
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded flex items-center justify-between">
                          <span className="text-sm text-blue-900">
                            Selected: {selectedFile.name}
                          </span>
                          <button
                            onClick={() => setSelectedFile(null)}
                            className="text-blue-600 hover:text-blue-800 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        onClick={handleSubmit}
                        disabled={!selectedFile && uploadMethod !== 'drive'}
                        className="bg-[#4242ff] rounded-lg shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] h-11 px-4 flex gap-2 items-center justify-center hover:bg-[#3232e6] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <span className="font-['Plus_Jakarta_Sans'] text-lg font-medium text-white">
                          Submit
                        </span>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}