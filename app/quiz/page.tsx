'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

interface Question {
  id: number;
  questionNumber: string;
  questionText: string;
  options: string[];
  selectedAnswer?: number;
}

const MasterclassQuestionsPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      questionNumber: 'Question 01',
      questionText: 'What best describes your current journey?',
      options: [
        "I'm just starting out and exploring ideas",
        'I already have a project or startup',
        "I'm looking to level up professionally",
        "I want to build but don't know where to begin"
      ]
    },
    {
      id: 2,
      questionNumber: 'Question 02',
      questionText: 'What is your primary goal?',
      options: [
        'Launch my first startup',
        'Scale my existing business',
        'Learn entrepreneurial skills',
        'Network with founders'
      ]
    },
    {
      id: 3,
      questionNumber: 'Question 03',
      questionText: 'What is your experience level?',
      options: [
        'Complete beginner',
        'Some experience',
        'Intermediate level',
        'Advanced/Expert'
      ]
    },
    {
      id: 4,
      questionNumber: 'Question 04',
      questionText: 'What area interests you most?',
      options: [
        'Tech & Product Development',
        'Business & Strategy',
        'Marketing & Growth',
        'Finance & Fundraising'
      ]
    },
    {
      id: 5,
      questionNumber: 'Question 05',
      questionText: 'What is your preferred learning style?',
      options: [
        'Hands-on projects',
        'Mentorship & guidance',
        'Self-paced learning',
        'Community collaboration'
      ]
    },
    {
      id: 6,
      questionNumber: 'Question 06',
      questionText: 'How much time can you commit each week?',
      options: [
        '2–4 hours',
        '5–8 hours',
        "8+ hours — I'm all in",
        'Not sure yet'
      ]
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleJoinNext = () => {
    router.push('/programs/lead');
  }


  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    // Handle close action
    window.history.back();
  };

  const currentQuestion = questions[currentStep - 1];
  const isAnswerSelected = selectedAnswers[currentQuestion.id] !== undefined;

  return (
    <div className=" flex flex-col pt-10 lg:pt-20">
      <Header />

      <main className="flex-1 bg-[#f4f4ff] sm:pt-10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-[200px] top-1/2 -translate-y-1/2 w-[535px] h-[450px] rotate-[270deg] scale-y-[-100%]">
            <Image
              src="/73b0ad020632b6b1bf483e2355b8bd35e3003a1b.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-400px)] lg:min-h-[calc(100vh-500px)] flex items-center justify-center px-4 py-8 md:py-10 lg:py-12"
            >
              <div className="bg-[#f4f4ff] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-3 md:p-4 w-full max-w-[1000px]">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-3">
                      <h2
                        className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-gray-900 tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        Program Match Quiz
                      </h2>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-600"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          Quiz questions
                        </span>
                        <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        <span
                          className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-600"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          6 Questions
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={handleClose}
                      className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <XMarkIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-700" />
                    </button>
                  </div>

                  {/* Quiz Card */}
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="backdrop-blur-[22px] bg-white/40 rounded-[8px] md:rounded-[10px] border border-white p-4 md:p-6 lg:p-[24px]"
                  >
                    {/* Progress Bar */}
                    <div className="flex items-center gap-2 mb-4 md:mb-6 lg:mb-8 p-2 md:p-3 lg:p-4 rounded-[16px] md:rounded-[20px] lg:rounded-[24px]">
                      <div className="flex-1">
                        <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(currentStep / 6) * 100}%` }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-0 left-0 h-full bg-[#4242ff] rounded-full"
                          />
                        </div>
                      </div>
                      <span
                        className="text-[12px] md:text-[14px] lg:text-[16px] font-medium text-gray-900"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {currentStep} of 6
                      </span>
                    </div>

                    {/* Question */}
                    <div className="mb-4 md:mb-6 lg:mb-8">
                      <p
                        className="text-[12px] md:text-[13px] lg:text-[14px] text-gray-600 mb-2 md:mb-3"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {currentQuestion.questionNumber}
                      </p>
                      <h3
                        className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-gray-900 leading-[24px] md:leading-[27px] lg:leading-[30px]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {currentQuestion.questionText}
                      </h3>
                    </div>

                    {/* Options */}
                    <div className="mb-4 md:mb-6 lg:mb-8">
                      <p
                        className="text-[12px] md:text-[14px] lg:text-[16px] text-gray-600 mb-3 md:mb-4"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        Choose one from below
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                        {currentQuestion.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                            className={`p-3 md:p-[8px] rounded-[4px] border text-left transition-all ${selectedAnswers[currentQuestion.id] === index
                              ? 'bg-[#3232e6]/90 border-[#3232e6] text-white'
                              : 'bg-white/10 border-white text-gray-900 hover:bg-white/20'
                              }`}
                          >
                            <span
                              className={`text-[14px] md:text-[16px] lg:text-[18px] ${selectedAnswers[currentQuestion.id] === index
                                ? 'font-medium'
                                : 'font-normal'
                                }`}
                              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                              {option}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center">
                    {currentStep > 1 ? (
                      <button
                        onClick={handlePrevious}
                        className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-[6px] md:rounded-[8px] border border-[#4242ff] bg-white/10 backdrop-blur-[32px] hover:bg-white/20 transition-colors"
                      >
                        <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5 text-[#4242ff]" />
                        <span
                          className="text-[14px] md:text-[16px] lg:text-[18px] font-medium text-[#4242ff]"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          Previous
                        </span>
                      </button>
                    ) : (
                      <div />
                    )}

                    <button
                      onClick={handleNext}
                      disabled={!isAnswerSelected}
                      className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-[6px] md:rounded-[8px] border transition-colors ${isAnswerSelected
                        ? 'border-[#4242ff] bg-white/10 backdrop-blur-[32px] hover:bg-white/20'
                        : 'border-gray-300 bg-gray-100 cursor-not-allowed opacity-50'
                        }`}
                    >
                      <span
                        className={`text-[14px] md:text-[16px] lg:text-[18px] font-medium ${isAnswerSelected ? 'text-[#4242ff]' : 'text-gray-400'
                          }`}
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {currentStep === 6 ? 'Finish' : 'Next'}
                      </span>
                      <ChevronRightIcon
                        className={`w-4 h-4 md:w-5 md:h-5 ${isAnswerSelected ? 'text-[#4242ff]' : 'text-gray-400'
                          }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-400px)] lg:min-h-[calc(100vh-500px)] flex items-center justify-center px-4 py-8 md:py-10 lg:py-12"
            >
              <div className="bg-[#f4f4ff] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-3 md:p-4 w-full max-w-[1000px]">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <h2
                      className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-gray-900 tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      You're matched with
                    </h2>
                    <button
                      onClick={handleClose}
                      className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <XMarkIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-700" />
                    </button>
                  </div>

                  {/* Result Card */}
                  <div className="backdrop-blur-[22px] bg-white/40 rounded-[8px] md:rounded-[10px] border border-white p-4 md:p-6 lg:p-[24px]">
                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-[33px]">
                      <div>
                        <h1
                          className="text-[24px] md:text-[36px] lg:text-[44px] font-semibold text-[#3232e6] capitalize tracking-[-1px] md:tracking-[-1.4px] lg:tracking-[-1.76px] mb-2 md:mb-3"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          The LEED Program Is Your Launchpad
                        </h1>
                        <p
                          className="text-[14px] md:text-[16px] lg:text-[20px] font-medium text-gray-600 leading-[21px] md:leading-[24px] lg:leading-[30px]"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          You've got direction, motivation, and a drive to build something real. LEED is designed for hands-on creators ready to go from idea to MVP — with mentorship, structure, and momentum.
                        </p>
                      </div>

                      <div>
                        <p
                          className="text-[12px] md:text-[14px] lg:text-[16px] text-gray-600 mb-2 md:mb-3 lg:mb-4"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          Program Highlights
                        </p>
                        <div className="bg-white/10 border border-white rounded-[4px] p-2.5 md:p-3">
                          <ul className="list-disc list-inside space-y-1">
                            <li
                              className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-900"
                              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                              Mentor-led sprints
                            </li>
                            <li
                              className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-900"
                              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                              Weekly community reviews
                            </li>
                            <li
                              className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-900"
                              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                              Demo Day & Portfolio Support
                            </li>
                          </ul>
                        </div>
                      </div>

                      <button className="bg-[#4242ff] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-[6px] md:rounded-[8px] shadow-[0px_0px_0px_1px_#4242ff,0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:bg-[#3232e6] transition-colors flex items-center gap-1.5 md:gap-2 self-start" onClick={handleJoinNext}>
                        <span
                          className="text-[14px] md:text-[16px] lg:text-[18px] font-medium"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          Join the LEED Program
                        </span>
                        <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default MasterclassQuestionsPage;