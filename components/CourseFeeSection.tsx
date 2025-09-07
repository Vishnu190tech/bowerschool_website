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
        className="relative z-10 container mx-auto px-8 md:px-16 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2 
          className="text-[44px] font-bold text-[#2c360d] text-center mb-12 tracking-[-1.6px]"
          variants={itemVariants}
        >
          Course Fee Structure
        </motion.h2>

        {/* Table Card */}
        <motion.div 
          className="relative backdrop-blur-lg bg-white/10 rounded-3xl p-6 shadow-[4px_4px_12px_0px_rgba(66,66,255,0.1)] border-2 border-[#f9faff]"
          variants={itemVariants}
        >
          {/* Background Decorative Elements */}
          <div className="absolute -top-40 -left-40 w-[808px] h-[808px] opacity-10">
            <Image
              src="/0b80959fa56be53f59e7fc41b93b9a063af68053.svg"
              alt=""
              width={808}
              height={808}
              className="w-full h-full"
            />
          </div>
          <div className="absolute -bottom-40 -right-40 w-[808px] h-[808px] opacity-10">
            <Image
              src="/0b80959fa56be53f59e7fc41b93b9a063af68053.svg"
              alt=""
              width={808}
              height={808}
              className="w-full h-full"
            />
          </div>

          {/* Course Title */}
          <div className="mb-6">
            <h3 className="text-[30px] font-semibold text-[#2c360d] tracking-[-1.2px]">
              Entrepreneurial Quotient & Current Affairs
            </h3>
            <p className="text-gray-500 text-lg">Part 1</p>
          </div>

          {/* Table */}
          <div className="bg-white/10 rounded-2xl overflow-hidden border border-gray-300">
            <table className="w-full">
              <thead>
                <tr className="bg-[#ff8829]">
                  <th className="text-left px-6 py-5 font-medium text-xl text-black border-r border-gray-300">Rounds</th>
                  <th className="text-left px-6 py-5 font-medium text-xl text-black border-r border-gray-300">Deadline</th>
                  <th className="text-left px-6 py-5 font-medium text-xl text-black border-r border-gray-300">Admissions Fee</th>
                  <th className="text-left px-6 py-5 font-medium text-xl text-black border-r border-gray-300">Course Fees</th>
                  <th className="text-left px-6 py-5 font-medium text-xl text-black border-r border-gray-300">Total Course Fees</th>
                  <th className="text-left px-6 py-5 font-medium text-xl text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="px-6 py-6 text-xl font-medium text-black border-r border-gray-300">{row.round}</td>
                    <td className="px-6 py-6 text-xl font-medium text-black border-r border-gray-300">{row.deadline}</td>
                    <td className="px-6 py-6 text-xl font-medium text-black border-r border-gray-300">{row.admissionFee}</td>
                    <td className="px-6 py-6 text-xl font-medium text-black border-r border-gray-300">{row.courseFees}</td>
                    <td className="px-6 py-6 text-xl font-medium text-black border-r border-gray-300">{row.totalFees}</td>
                    <td className="px-6 py-6">
                      {row.status === 'closed' ? (
                        <span className="inline-block px-4 py-1 bg-red-500 text-white text-sm font-medium rounded-2xl">
                          Closed
                        </span>
                      ) : (
                        <span className="inline-block px-4 py-1 bg-emerald-500 text-white text-sm font-medium rounded-2xl">
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
        className="relative bg-gradient-to-br from-gray-50 to-white py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[807px] h-[1061px] opacity-5 rotate-[120deg]">
          <Image
            src="/a2781c094fede4db7c57782ce698acb933c2d66a.svg"
            alt=""
            width={807}
            height={1061}
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 container mx-auto px-8 md:px-20">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Text */}
            <motion.div 
              className="lg:w-[500px]"
              variants={itemVariants}
            >
              <h3 className="text-[40px] font-semibold text-[#2c360d] mb-6 tracking-[-1.6px] leading-tight">
                Ambition Can't Be Put On Hold
              </h3>
              <p className="text-[#6a6a6a] text-lg leading-relaxed">
                At Bower, we offer merit scholarships and easy EMI options to help you invest in your future, without the stress.
              </p>
            </motion.div>

            {/* Right Cards */}
            <motion.div 
              className="flex-1"
              variants={itemVariants}
            >
              <div className="backdrop-blur-[22px] bg-white/40 rounded-3xl p-6 border-2 border-white shadow-lg">
                {/* No Cost EMIs */}
                <div className="pb-8 border-b border-gray-300">
                  <h4 className="text-[40px] font-semibold text-[#2c360d] mb-5 tracking-[-1.6px]">
                    No Cost EMIs
                  </h4>
                  <p className="text-[#6a6a6a] text-lg leading-relaxed">
                    Hassle-free learning with no-cost EMIs, low interest rates, and flexible part-payment options.
                  </p>
                </div>

                {/* Scholarships */}
                <div className="pt-8">
                  <h4 className="text-[40px] font-semibold text-[#2c360d] mb-5 tracking-[-1.6px]">
                    Scholarships
                  </h4>
                  <p className="text-[#6a6a6a] text-lg leading-relaxed">
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