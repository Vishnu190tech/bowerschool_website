'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MasterclassHighlights() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgb(6, 6, 32) 0%, rgb(6, 6, 32) 28.365%, rgb(6, 6, 32) 55.288%, rgb(6, 6, 32) 75.962%, rgb(5, 5, 14) 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light effects 1 */}
        <div
          className="absolute mix-blend-hard-light"
          style={{
            height: '1401.86px',
            width: '1693.86px',
            left: '-715px',
            top: '553px',
            transform: 'rotate(180deg)'
          }}
        >
          <Image
            src="/f679bbd5d53183467be7afe8a376d2c7888eca1f.svg"
            alt=""
            width={1694}
            height={1402}
            className="w-full h-full"
          />
        </div>

        {/* Stars background */}
        <div
          className="absolute"
          style={{
            height: '1438px',
            left: '-97.64%',
            right: '-97.85%',
            top: '50%',
            transform: 'translateY(calc(-50% + 106.5px))'
          }}
        >
          <Image
            src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
            alt=""
            width={4000}
            height={1438}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Light effects 2 */}
        <div
          className="absolute mix-blend-hard-light"
          style={{
            height: '1401.86px',
            width: '1693.86px',
            left: '-715px',
            top: '553px',
            transform: 'rotate(180deg)'
          }}
        >
          <Image
            src="/550033158f0bf4f1e2a65d2b744b33bfe26be74d.svg"
            alt=""
            width={1694}
            height={1402}
            className="w-full h-full"
          />
        </div>

        {/* Light effects 3 */}
        <div
          className="absolute mix-blend-hard-light"
          style={{
            height: '1401.86px',
            width: '1693.86px',
            left: '261.99px',
            top: '-473px'
          }}
        >
          <Image
            src="/9fd109337cdf39b5e6471ce5a4b9e65f204bc9da.svg"
            alt=""
            width={1694}
            height={1402}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center px-4 md:px-10 lg:px-20 xl:px-[80px] py-12 md:py-16 lg:py-20 xl:py-[80px]">
        {/* Header Section */}
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-start lg:items-center justify-between mb-[34px]">
          <h2
            className="text-white font-semibold capitalize mb-4 lg:mb-0"
            style={{
              fontSize: '44px',
              lineHeight: '1',
              letterSpacing: '-1.76px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}
          >
            Highlights From Our Past Masterclasses
          </h2>

          <button
            className="flex items-center justify-center px-4 py-2 rounded-lg backdrop-blur-[32px] hover:scale-105 transition-transform"
            style={{
              gap: '16px',
              height: '44px',
              backgroundColor: 'rgba(17, 24, 39, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              backgroundImage: `radial-gradient(4.4rem at 50% 0%, rgba(50, 50, 230, 0.4) 0%, rgba(50, 50, 230, 0) 100%)`
            }}
          >
            <span
              className="text-white font-medium"
              style={{
                fontSize: '18px',
                lineHeight: '27px',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}
            >
              View all
            </span>
          </button>
        </div>

        {/* Cards Grid Container */}
        <div className="w-full max-w-[1280px]">
          {/* Desktop Layout - 2x2 Asymmetric Grid */}
          <div className="hidden xl:block">
            {/* First Row */}
            <div className="flex gap-4 mb-4">
              {/* Card 1 - Small Square (500x500) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                viewport={{ once: true }}
                className="relative p-3 rounded-[24px] overflow-hidden border-2 border-white"
                style={{
                  width: '500px',
                  height: '500px',
                  backgroundColor: '#1c1b1e',
                  backgroundImage: `radial-gradient(51.01rem at 50% 102%, rgba(1,1,39,0.2) 0%, rgba(1,1,75,0.2) 25.5%, rgba(0,0,111,0.2) 51%, rgba(1,1,75,0.2) 75.5%, rgba(1,1,39,0.2) 100%)`
                }}
              >
                <div
                  className="relative w-full rounded-xl overflow-hidden bg-[#252527]"
                  style={{ height: '330px' }}
                >
                  <Image
                    src="/2c873d06e5c2d5a3f2687dec00c279ce90196cbd.png"
                    alt="Masterclass"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-3 pt-4 pb-6" style={{ height: '130px' }}>
                  <h3
                    className="text-white font-semibold mb-2"
                    style={{
                      fontSize: '24px',
                      letterSpacing: '-0.96px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Beat the heat with Healthy Ice Creams
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Wide (flex-1) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="relative flex-1 p-3 rounded-[24px] overflow-hidden border-2 border-white"
                style={{
                  height: '500px',
                  backgroundColor: '#1c1b1e',
                  backgroundImage: `radial-gradient(77.944rem at 50% 102%, rgba(1,1,39,0.2) 0%, rgba(1,1,75,0.2) 25.5%, rgba(0,0,111,0.2) 51%, rgba(1,1,75,0.2) 75.5%, rgba(1,1,39,0.2) 100%)`
                }}
              >
                <div
                  className="relative w-full rounded-xl overflow-hidden"
                  style={{ height: '330px' }}
                >
                  <Image
                    src="/d0bcb4eefd26ea7f6fa48e061129c57ece27c445.png"
                    alt="Masterclass"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-3 pt-4 pb-6" style={{ height: '130px' }}>
                  <h3
                    className="text-white font-semibold mb-2"
                    style={{
                      fontSize: '24px',
                      letterSpacing: '-0.96px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Beat the heat with Healthy Ice Creams
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="flex gap-4">
              {/* Card 3 - Wide (flex-1) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative flex-1 p-3 rounded-[24px] overflow-hidden border-2 border-white"
                style={{
                  height: '500px',
                  backgroundColor: '#1c1b1e',
                  backgroundImage: `radial-gradient(77.944rem at 50% 102%, rgba(1,1,39,0.2) 0%, rgba(1,1,75,0.2) 25.5%, rgba(0,0,111,0.2) 51%, rgba(1,1,75,0.2) 75.5%, rgba(1,1,39,0.2) 100%)`
                }}
              >
                <div
                  className="relative w-full rounded-xl overflow-hidden"
                  style={{ height: '330px' }}
                >
                  <Image
                    src="/f4d3049d58d731d23c1304d8fa41f7a1a57339e7.png"
                    alt="Masterclass"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '0% 16.89%' }}
                  />
                </div>
                <div className="px-3 pt-4 pb-6" style={{ height: '130px' }}>
                  <h3
                    className="text-white font-semibold mb-2"
                    style={{
                      fontSize: '24px',
                      letterSpacing: '-0.96px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Beat the heat with Healthy Ice Creams
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.
                  </p>
                </div>
              </motion.div>

              {/* Card 4 - Small Square (500x500) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                viewport={{ once: true }}
                className="relative p-3 rounded-[24px] overflow-hidden border-2 border-white"
                style={{
                  width: '500px',
                  height: '500px',
                  backgroundColor: '#1c1b1e',
                  backgroundImage: `radial-gradient(51.01rem at 50% 102%, rgba(1,1,39,0.2) 0%, rgba(1,1,75,0.2) 25.5%, rgba(0,0,111,0.2) 51%, rgba(1,1,75,0.2) 75.5%, rgba(1,1,39,0.2) 100%)`
                }}
              >
                <div
                  className="relative w-full rounded-xl overflow-hidden bg-[#252527]"
                  style={{ height: '330px' }}
                >
                  <Image
                    src="/dae706b329ac03dc88dc6f55c364173775145448.png"
                    alt="Masterclass"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-3 pt-4 pb-6" style={{ height: '130px' }}>
                  <h3
                    className="text-white font-semibold mb-2"
                    style={{
                      fontSize: '24px',
                      letterSpacing: '-0.96px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Beat the heat with Healthy Ice Creams
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="relative p-3 rounded-[24px] overflow-hidden border-2 border-white"
              style={{
                minHeight: '400px',
                backgroundColor: '#1c1b1e',
                backgroundImage: `radial-gradient(51.01rem at 50% 102%, rgba(1,1,39,0.2) 0%, rgba(1,1,75,0.2) 25.5%, rgba(0,0,111,0.2) 51%, rgba(1,1,75,0.2) 75.5%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="relative w-full rounded-xl overflow-hidden bg-[#252527] aspect-[16/11] mb-4">
                <Image
                  src="/2c873d06e5c2d5a3f2687dec00c279ce90196cbd.png"
                  alt="Masterclass"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-3 pb-4">
                <h3 className="text-white font-semibold mb-2 text-xl md:text-2xl" style={{ letterSpacing: '-0.96px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Beat the heat with Healthy Ice Creams
                </h3>
                <p className="text-gray-300 text-sm md:text-base" style={{ lineHeight: '1.5', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="relative p-3 rounded-[24px] overflow-hidden border-2 border-white"
              style={{
                minHeight: '400px',
                backgroundColor: '#1c1b1e',
                backgroundImage: `radial-gradient(51.01rem at 50% 102%, rgba(1,1,39,0.2) 0%, rgba(1,1,75,0.2) 25.5%, rgba(0,0,111,0.2) 51%, rgba(1,1,75,0.2) 75.5%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="relative w-full rounded-xl overflow-hidden aspect-[16/11] mb-4">
                <Image
                  src="/d0bcb4eefd26ea7f6fa48e061129c57ece27c445.png"
                  alt="Masterclass"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-3 pb-4">
                <h3 className="text-white font-semibold mb-2 text-xl md:text-2xl" style={{ letterSpacing: '-0.96px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Beat the heat with Healthy Ice Creams
                </h3>
                <p className="text-gray-300 text-sm md:text-base" style={{ lineHeight: '1.5', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative p-3 rounded-[24px] overflow-hidden border-2 border-white"
              style={{
                minHeight: '400px',
                backgroundColor: '#1c1b1e',
                backgroundImage: `radial-gradient(51.01rem at 50% 102%, rgba(1,1,39,0.2) 0%, rgba(1,1,75,0.2) 25.5%, rgba(0,0,111,0.2) 51%, rgba(1,1,75,0.2) 75.5%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="relative w-full rounded-xl overflow-hidden aspect-[16/11] mb-4">
                <Image
                  src="/f4d3049d58d731d23c1304d8fa41f7a1a57339e7.png"
                  alt="Masterclass"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '0% 16.89%' }}
                />
              </div>
              <div className="px-3 pb-4">
                <h3 className="text-white font-semibold mb-2 text-xl md:text-2xl" style={{ letterSpacing: '-0.96px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Beat the heat with Healthy Ice Creams
                </h3>
                <p className="text-gray-300 text-sm md:text-base" style={{ lineHeight: '1.5', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
              className="relative p-3 rounded-[24px] overflow-hidden border-2 border-white"
              style={{
                minHeight: '400px',
                backgroundColor: '#1c1b1e',
                backgroundImage: `radial-gradient(51.01rem at 50% 102%, rgba(1,1,39,0.2) 0%, rgba(1,1,75,0.2) 25.5%, rgba(0,0,111,0.2) 51%, rgba(1,1,75,0.2) 75.5%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="relative w-full rounded-xl overflow-hidden bg-[#252527] aspect-[16/11] mb-4">
                <Image
                  src="/dae706b329ac03dc88dc6f55c364173775145448.png"
                  alt="Masterclass"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-3 pb-4">
                <h3 className="text-white font-semibold mb-2 text-xl md:text-2xl" style={{ letterSpacing: '-0.96px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Beat the heat with Healthy Ice Creams
                </h3>
                <p className="text-gray-300 text-sm md:text-base" style={{ lineHeight: '1.5', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}