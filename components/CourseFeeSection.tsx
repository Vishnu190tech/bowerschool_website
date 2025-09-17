'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const CourseFeeSection = () => {
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

  const tableData = [
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
  ]

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
          className="text-[32px] md:text-[38px] lg:text-[44px] font-bold text-[#2c360d] text-center mb-8 md:mb-12 tracking-[-1.28px] md:tracking-[-1.52px] lg:tracking-[-1.6px]"
          variants={itemVariants}
        >
          Course Fee Structure
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
            <h3 className="text-[20px] md:text-[26px] lg:text-[30px] font-semibold text-[#2c360d] tracking-[-0.8px] md:tracking-[-1.04px] lg:tracking-[-1.2px]">
              Entrepreneurial Quotient & Current Affairs
            </h3>
            <p className="text-gray-500 text-[16px] md:text-[18px]">Part 1</p>
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
                        <span className="inline-block px-3 py-1 bg-red-500 text-white text-[14px] font-medium rounded-2xl">
                          Closed
                        </span>
                      ) : (
                        <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-[14px] font-medium rounded-2xl">
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
                <tr className="bg-[#ff8829]">
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl text-black border-r border-gray-300">Rounds</th>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl text-black border-r border-gray-300">Deadline</th>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl text-black border-r border-gray-300">Admissions Fee</th>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl text-black border-r border-gray-300">Course Fees</th>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl text-black border-r border-gray-300">Total Course Fees</th>
                  <th className="text-left px-3 md:px-6 py-3 md:py-5 font-medium text-[16px] md:text-[18px] lg:text-xl text-black">Status</th>
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
                        <span className="inline-block px-3 md:px-4 py-1 bg-red-500 text-white text-[14px] md:text-[16px] font-medium rounded-2xl">
                          Closed
                        </span>
                      ) : (
                        <span className="inline-block px-3 md:px-4 py-1 bg-emerald-500 text-white text-[14px] md:text-[16px] font-medium rounded-2xl">
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
              <h3 className="text-[28px] md:text-[34px] lg:text-[40px] font-semibold text-[#2c360d] mb-4 md:mb-6 tracking-[-1.12px] md:tracking-[-1.36px] lg:tracking-[-1.6px] leading-tight">
                Ambition Can't Be Put On Hold
              </h3>
              <p className="text-[#6a6a6a] text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] lg:leading-relaxed">
                At Bower, we offer merit scholarships and easy EMI options to help you invest in your future, without the stress.
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
                  <h4 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold text-[#2c360d] mb-3 md:mb-5 tracking-[-0.96px] md:tracking-[-1.28px] lg:tracking-[-1.6px]">
                    No Cost EMIs
                  </h4>
                  <p className="text-[#6a6a6a] text-[14px] md:text-[16px] lg:text-[18px] leading-[21px] md:leading-[24px] lg:leading-relaxed">
                    Hassle-free learning with no-cost EMIs, low interest rates, and flexible part-payment options.
                  </p>
                </div>

                {/* Scholarships */}
                <div className="pt-6 md:pt-8">
                  <h4 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold text-[#2c360d] mb-3 md:mb-5 tracking-[-0.96px] md:tracking-[-1.28px] lg:tracking-[-1.6px]">
                    Scholarships
                  </h4>
                  <p className="text-[#6a6a6a] text-[14px] md:text-[16px] lg:text-[18px] leading-[21px] md:leading-[24px] lg:leading-relaxed">
                    Exclusive scholarships and fee concession up to 20%, for exceptional entrepreneurs
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