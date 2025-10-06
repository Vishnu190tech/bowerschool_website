'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface FeeTheme {
  primary: string;
  secondary: string;
  tableHeaderBg: string;
  tableHeaderText: string;
  titleColor: string;
  statusOpenBg: string;
  statusClosedBg: string;
}

const FEE_THEMES: Record<ThemeType, FeeTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    tableHeaderBg: '#3232e6',
    tableHeaderText: '#ffffff',
    titleColor: '#0a0d1a',
    statusOpenBg: '#4242FF',
    statusClosedBg: '#3232e6',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    tableHeaderBg: '#A8F326',
    tableHeaderText: '#000000',
    titleColor: '#0f1a05',
    statusOpenBg: '#8FD920',
    statusClosedBg: '#6a9918',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    tableHeaderBg: '#ff8829',
    tableHeaderText: '#000000',
    titleColor: '#2c360d',
    statusOpenBg: '#10b981',
    statusClosedBg: '#ef4444',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    tableHeaderBg: '#4242FF',
    tableHeaderText: '#ffffff',
    titleColor: '#0a0d1a',
    statusOpenBg: '#3232e6',
    statusClosedBg: '#1e3a8a',
  },
};

// Table Row Interface
interface FeeTableRow {
  round: string;
  deadline: string;
  admissionFee: string;
  courseFees: string;
  totalFees: string;
  status: 'open' | 'closed';
}

// Component Props Interface
interface CourseFeeSectionProps {
  theme?: ThemeType;
  mainTitle?: string;
  courseTitle?: string;
  coursePart?: string;
  tableData?: FeeTableRow[];
  bottomTitle?: string;
  bottomDescription?: string;
  emiTitle?: string;
  emiDescription?: string;
  scholarshipTitle?: string;
  scholarshipDescription?: string;
}

// Default Table Data
const DEFAULT_TABLE_DATA: FeeTableRow[] = [
  {
    round: 'Early Admit',
    deadline: "31st March '25",
    admissionFee: 'INR 1,500/-',
    courseFees: 'INR 3,35,000/-',
    totalFees: 'INR 3,75,000/-',
    status: 'closed'
  },
  {
    round: 'Early Admit',
    deadline: "31st March '25",
    admissionFee: 'INR 1,500/-',
    courseFees: 'INR 3,35,000/-',
    totalFees: 'INR 3,75,000/-',
    status: 'open'
  }
];

const CourseFeeSection = ({
  theme = 'seed',
  mainTitle = 'Course Fee Structure',
  courseTitle = 'Entrepreneurial Quotient & Current Affairs',
  coursePart = 'Part 1',
  tableData = DEFAULT_TABLE_DATA,
  bottomTitle = "Ambition Can't Be Put On Hold",
  bottomDescription = 'At Bower, we offer merit scholarships and easy EMI options to help you invest in your future, without the stress.',
  emiTitle = 'No Cost EMIs',
  emiDescription = 'Hassle-free learning with no-cost EMIs, low interest rates, and flexible part-payment options.',
  scholarshipTitle = 'Scholarships',
  scholarshipDescription = 'Exclusive scholarships and fee concession up to 20%, for exceptional entrepreneurs'
}: CourseFeeSectionProps) => {
  const currentTheme = FEE_THEMES[theme];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Main Fee Structure Section */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-10 lg:px-16 py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-[32px] md:text-[38px] lg:text-[44px] font-bold text-center mb-8 md:mb-12 tracking-[-1.28px] md:tracking-[-1.52px] lg:tracking-[-1.6px]"
          style={{ color: currentTheme.titleColor }}
          variants={itemVariants}
        >
          {mainTitle}
        </motion.h2>

        {/* Table Card */}
        <motion.div
          className="relative backdrop-blur-lg bg-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[4px_4px_12px_0px_rgba(66,66,255,0.1)] border-2 border-[#f9faff]"
          variants={itemVariants}
        >
          {/* Background Decorative Elements - Hidden on mobile */}
          <div className="hidden lg:block absolute -top-40 -left-40 w-[808px] h-[808px] opacity-10">
            <Image
              src="/0b80959fa56be53f59e7fc41b93b9a063af68053.svg"
              alt=""
              width={808}
              height={808}
              className="w-full h-full"
            />
          </div>
          <div className="hidden lg:block absolute -bottom-40 -right-40 w-[808px] h-[808px] opacity-10">
            <Image
              src="/0b80959fa56be53f59e7fc41b93b9a063af68053.svg"
              alt=""
              width={808}
              height={808}
              className="w-full h-full"
            />
          </div>

          {/* Course Title */}
          <div className="mb-4 md:mb-6">
            <h3
              className="text-[20px] md:text-[26px] lg:text-[30px] font-semibold tracking-[-0.8px] md:tracking-[-1.04px] lg:tracking-[-1.2px]"
              style={{ color: currentTheme.titleColor }}
            >
              {courseTitle}
            </h3>
            <p className="text-gray-500 text-[16px] md:text-[18px]">{coursePart}</p>
          </div>

          {/* Table - Mobile Responsive */}
          <div className="bg-white/10 rounded-xl md:rounded-2xl overflow-hidden border border-gray-300">
            {/* Mobile Card Layout */}
            <div className="block md:hidden">
              {tableData.map((row, index) => (
                <div key={index} className="border-b border-gray-300 last:border-b-0 p-4 bg-white/5">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] font-medium text-gray-600">Round:</span>
                      <span className="text-[16px] font-medium text-black">{row.round}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] font-medium text-gray-600">Deadline:</span>
                      <span className="text-[16px] font-medium text-black">{row.deadline}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] font-medium text-gray-600">Admission Fee:</span>
                      <span className="text-[16px] font-medium text-black">{row.admissionFee}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] font-medium text-gray-600">Course Fees:</span>
                      <span className="text-[16px] font-medium text-black">{row.courseFees}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] font-medium text-gray-600">Total Fees:</span>
                      <span className="text-[16px] font-medium text-black">{row.totalFees}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] font-medium text-gray-600">Status:</span>
                      {row.status === 'closed' ? (
                        <span
                          className="inline-block px-3 py-1 text-white text-[14px] font-medium rounded-2xl"
                          style={{ backgroundColor: currentTheme.statusClosedBg }}
                        >
                          Closed
                        </span>
                      ) : (
                        <span
                          className="inline-block px-3 py-1 text-white text-[14px] font-medium rounded-2xl"
                          style={{ backgroundColor: currentTheme.statusOpenBg }}
                        >
                          Apply now
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table Layout */}
            <table className="hidden md:table w-full">
              <thead>
                <tr style={{ backgroundColor: currentTheme.tableHeaderBg, color: currentTheme.tableHeaderText }}>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl border-r border-gray-300">Rounds</th>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl border-r border-gray-300">Deadline</th>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl border-r border-gray-300">Admissions Fee</th>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl border-r border-gray-300">Course Fees</th>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl border-r border-gray-300">Total Course Fees</th>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl">Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="px-3 md:px-6 py-4 md:py-6 text-[16px] md:text-[18px] lg:text-xl font-medium text-black border-r border-gray-300">{row.round}</td>
                    <td className="px-3 md:px-6 py-4 md:py-6 text-[16px] md:text-[18px] lg:text-xl font-medium text-black border-r border-gray-300">{row.deadline}</td>
                    <td className="px-3 md:px-6 py-4 md:py-6 text-[16px] md:text-[18px] lg:text-xl font-medium text-black border-r border-gray-300">{row.admissionFee}</td>
                    <td className="px-3 md:px-6 py-4 md:py-6 text-[16px] md:text-[18px] lg:text-xl font-medium text-black border-r border-gray-300">{row.courseFees}</td>
                    <td className="px-3 md:px-6 py-4 md:py-6 text-[16px] md:text-[18px] lg:text-xl font-medium text-black border-r border-gray-300">{row.totalFees}</td>
                    <td className="px-3 md:px-6 py-4 md:py-6">
                      {row.status === 'closed' ? (
                        <span
                          className="inline-block px-3 md:px-4 py-1 text-white text-[14px] md:text-[16px] font-medium rounded-2xl"
                          style={{ backgroundColor: currentTheme.statusClosedBg }}
                        >
                          Closed
                        </span>
                      ) : (
                        <span
                          className="inline-block px-3 md:px-4 py-1 text-white text-[14px] md:text-[16px] font-medium rounded-2xl"
                          style={{ backgroundColor: currentTheme.statusOpenBg }}
                        >
                          Apply now
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Section - Ambition Can't Be Put On Hold */}
      <motion.div
        className="relative bg-gradient-to-br from-gray-50 to-white py-12 md:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Background Decorative Element - Hidden on mobile */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[807px] h-[1061px] opacity-5 rotate-[120deg]">
          <Image
            src="/a2781c094fede4db7c57782ce698acb933c2d66a.svg"
            alt=""
            width={807}
            height={1061}
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Left Text */}
            <motion.div
              className="lg:w-[500px] text-center lg:text-left"
              variants={itemVariants}
            >
              <h3
                className="text-[28px] md:text-[34px] lg:text-[40px] font-semibold mb-4 md:mb-6 tracking-[-1.12px] md:tracking-[-1.36px] lg:tracking-[-1.6px] leading-tight"
                style={{ color: currentTheme.titleColor }}
              >
                {bottomTitle}
              </h3>
              <p className="text-[#6a6a6a] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] lg:leading-relaxed">
                {bottomDescription}
              </p>
            </motion.div>

            {/* Right Cards */}
            <motion.div
              className="flex-1 w-full"
              variants={itemVariants}
            >
              <div className="backdrop-blur-[22px] bg-white/40 rounded-2xl md:rounded-3xl p-4 md:p-6 border-2 border-white shadow-lg">
                {/* No Cost EMIs */}
                <div className="pb-6 md:pb-8 border-b border-gray-300">
                  <h4
                    className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold mb-3 md:mb-5 tracking-[-0.96px] md:tracking-[-1.28px] lg:tracking-[-1.6px]"
                    style={{ color: currentTheme.titleColor }}
                  >
                    {emiTitle}
                  </h4>
                  <p className="text-[#6a6a6a] text-[14px] md:text-[16px] lg:text-[18px] leading-[21px] md:leading-[24px] lg:leading-relaxed">
                    {emiDescription}
                  </p>
                </div>

                {/* Scholarships */}
                <div className="pt-6 md:pt-8">
                  <h4
                    className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold mb-3 md:mb-5 tracking-[-0.96px] md:tracking-[-1.28px] lg:tracking-[-1.6px]"
                    style={{ color: currentTheme.titleColor }}
                  >
                    {scholarshipTitle}
                  </h4>
                  <p className="text-[#6a6a6a] text-[14px] md:text-[16px] lg:text-[18px] leading-[21px] md:leading-[24px] lg:leading-relaxed">
                    {scholarshipDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CourseFeeSection