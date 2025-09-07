'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const AlumniNetworkSection = () => {
  const features = [
    {
      id: 1,
      title: 'Exclusive Opportunities',
      description: 'Alumni gain early access to speaker sessions, hiring calls, funding updates, and curated global events.',
      image1: '/705bf0f2c81c591ada37f1c3a84d3925e5cfa5a3.png',
      image2: '/92575d69a59c5475949951f36ffdef6b9bafdb6b.png',
      imageAlt: 'Abstract UI illustration with shield and icons'
    },
    {
      id: 2,
      title: 'Founder-Led Collaboration',
      description: 'A growing network of builders across industries and regions collaborating on ventures, side projects, and shared investments.',
      image1: '/2343104673cf05890f84051bf87d6a98d850c567.png',
      imageAlt: 'Founders brainstorming in modern office'
    },
    {
      id: 3,
      title: 'Meaningful Involvement',
      description: 'Opportunities to mentor current students, judge pitch events, and return as guest speakers to shape the next generation.',
      image1: '/f550c1dedeb30df16c249d3f4b476f35d4d86b1c.png',
      imageAlt: 'Mentorship session at university'
    },
    {
      id: 4,
      title: 'Lifelong Learning',
      description: 'Access to alumni-only masterclasses, workshops, and fireside chats designed to support continuous growth as entrepreneurial leaders.',
      image1: '/6a2128e8688e77560f23bdbee793bd79a24e5018.png',
      imageAlt: 'Alumni masterclass session'
    }
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="relative bg-black py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/5e6a90106bf267ca0ace095bea11e4914493cf0b.svg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-8 md:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-[38px] md:text-[44px] font-semibold text-white mb-6 tracking-[-1.76px] capitalize">
            Why Builders Stay With Bower Beyond Graduation?
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#c3c3c3] leading-[30px] max-w-4xl mx-auto">
            The Bower alumni network offers lasting value through mentorship, meaningful collaborations, and a shared commitment to building beyond the classroom.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="backdrop-blur-[22px] bg-[#1c1b1e] rounded-3xl border-2 border-white p-6 md:p-8 h-[500px] relative overflow-hidden">
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'radial-gradient(circle at 50% 100%, rgba(1,1,39,1) 0%, rgba(1,1,75,1) 25.5%, rgba(0,0,111,1) 51%, rgba(1,1,75,1) 75.5%, rgba(1,1,39,1) 100%)'
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 h-full">
                  {/* Text Content */}
                  <div className="flex flex-col justify-end md:w-[400px]">
                    <div className="space-y-3">
                      <h3 className="text-[22px] md:text-[24px] font-semibold text-white tracking-[-0.96px]">
                        {feature.title}
                      </h3>
                      <p className="text-[16px] md:text-[18px] text-gray-300 leading-[27px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 relative rounded-lg overflow-hidden border-2 border-white">
                    {feature.image2 ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={feature.image1}
                          alt={feature.imageAlt}
                          fill
                          className="object-cover"
                        />
                        <Image
                          src={feature.image2}
                          alt={feature.imageAlt}
                          fill
                          className="object-cover mix-blend-screen"
                        />
                      </div>
                    ) : (
                      <Image
                        src={feature.image1}
                        alt={feature.imageAlt}
                        fill
                        className="object-cover"
                      />
                    )}
                    
                    {/* Hover Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default AlumniNetworkSection