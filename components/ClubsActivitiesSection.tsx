'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';


export default function ClubsActivitiesSection() {
  return (
    <section className="relative w-full px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20 bg-gradient-to-br from-[#0a0a1f] via-[#1a1a3e] to-[#0a0a1f] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Stars background */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        {/* Light effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20">
          <Image
            src="/599f85e430b7a7523e50bde2e10e27ead030927c.svg"
            alt=""
            fill
            className="object-contain mix-blend-hard-light"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20">
          <Image
            src="/d290e26d63e4c656e6d19cee0e913ce279fad974.svg"
            alt=""
            fill
            className="object-contain mix-blend-hard-light"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-white text-center mb-8 lg:mb-12 tracking-[-1.76px]"
        >
          Clubs and Activities
        </motion.h2>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:grid grid-cols-3 gap-4">
          {/* Top Row */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Trekking Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-[#1c1b1e] border-2 border-white rounded-2xl p-6 h-[174px] overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-black/20 border border-[#303038] shadow-lg flex items-center justify-center mb-6">
                  <Image src="/4d709b17343d152f1ae4b9709aeb6cdd7c942ed1.svg" alt="Trekking" width={32} height={32} />
                </div>
                <h3 className="text-[30px] font-semibold text-white tracking-[-1.2px]">Trekking</h3>
              </div>
              <div className="absolute bottom-0 right-0 w-36 h-36 opacity-30">
                <Image src="/dd05603fd63c41e6b89ca1f3273b2be01e8cb326.svg" alt="" fill className="object-contain" />
              </div>
            </motion.div>

            {/* Global Affairs Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[191px] rounded-2xl overflow-hidden border-2 border-white"
            >
              <Image
                src="/6b7753634c399ecf420d5ddb53ea408f38be9cd3.png"
                alt="Global Affairs"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Center - Trekking Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-[398px] rounded-2xl overflow-hidden border-2 border-white"
          >
            <Image
              src="/b00cfde2c176bce51dba6c23e297239346fa82a6.png"
              alt="Trekking"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Ping Pong Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-[191px] rounded-2xl overflow-hidden border-2 border-white bg-[#030303]"
            >
              <Image
                src="/f70f6c69679c61e19620a4525f329128e09f3042.png"
                alt="Ping Pong"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Pickleball Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative bg-[#1c1b1e] border-2 border-white rounded-2xl p-6 h-[174px] overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-black/20 border border-[#303038] shadow-lg flex items-center justify-center mb-6">
                  <Image src="/efa61af9e5da107ba17a3ca3544e5ddbd61f894e.svg" alt="Pickleball" width={32} height={32} />
                </div>
                <h3 className="text-[30px] font-semibold text-white tracking-[-1.2px]">Pickleball</h3>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
                <Image src="/a33146f37ccf06dbbee6079c56b7c403d0724415.svg" alt="" fill className="object-contain" />
              </div>
            </motion.div>
          </div>

          {/* Middle Row */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-1 relative bg-[#1c1b1e] border-2 border-white rounded-2xl p-6 h-[250px] overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
            }}
          >
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-black/20 border border-[#303038] shadow-lg flex items-center justify-center mb-6">
                <Image src="/29979564ffbdcfa7ba3c806b9be46c03c4de5942.svg" alt="Global Affairs" width={32} height={32} />
              </div>
              <h3 className="text-[30px] font-semibold text-white tracking-[-1.2px] leading-tight">Global Affairs Guild</h3>
            </div>
            <div className="absolute bottom-0 right-0 w-36 h-36 opacity-30">
              <Image src="/31264210ec0f8b453379f2a5fcb5f6990af98508.svg" alt="" fill className="object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="lg:col-span-2 relative h-[250px] rounded-2xl overflow-hidden border-2 border-white"
          >
            <Image
              src="/757b70824ff90d862c4fde30ac3e4a62d0c77314.png"
              alt="Culinary"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="lg:col-span-1 relative h-[398px] rounded-2xl overflow-hidden border-2 border-white"
          >
            <Image
              src="/e8e5e2f3e4effe64758833eaca314e4e63bb4272.png"
              alt="Brownbag Lunches"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Kayaking Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative bg-[#1c1b1e] border-2 border-white rounded-2xl p-6 h-[174px] overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-black/20 border border-[#303038] shadow-lg flex items-center justify-center mb-6">
                  <Image src="/a682377077943a7e11fef15907f96ab10c5ae780.svg" alt="Kayaking" width={32} height={32} />
                </div>
                <h3 className="text-[30px] font-semibold text-white tracking-[-1.2px]">Kayaking</h3>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
                <Image src="/d0925ae518e013c49d9d176509e11c94be0320d3.svg" alt="" fill className="object-contain" />
              </div>
            </motion.div>

            {/* Kayaking Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative h-[191px] rounded-2xl overflow-hidden border-2 border-white"
            >
              <Image
                src="/fe3f72d77bdcf469dfa504341db2d790728f94ec.png"
                alt="Kayaking"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Bottom Cards Row */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-[21px]">
            {/* Brownbag Lunches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="relative bg-[#1c1b1e] border-2 border-white rounded-2xl p-6 h-[250px] overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-black/20 border border-[#303038] shadow-lg flex items-center justify-center mb-6">
                  <Image src="/63288e15270376c620bc354a7e882182ee217633.svg" alt="Brownbag" width={32} height={32} />
                </div>
                <h3 className="text-[30px] font-semibold text-white tracking-[-1.2px] leading-tight">Brownbag Lunches</h3>
              </div>
              <div className="absolute bottom-0 right-0 w-36 h-36 opacity-30">
                <Image src="/92ecb3b6244f8d7f3a64ff7ebfe7c26ea49e701b.svg" alt="" fill className="object-contain" />
              </div>
            </motion.div>

            {/* Culinary Club */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="relative bg-[#1c1b1e] border-2 border-white rounded-2xl p-6 h-[250px] overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-black/20 border border-[#303038] shadow-lg flex items-center justify-center mb-6">
                  <Image src="/958c7aff1f4064e4154f1bfac16c1e0051a87100.svg" alt="Culinary" width={32} height={32} />
                </div>
                <h3 className="text-[30px] font-semibold text-white tracking-[-1.2px]">Culinary Club</h3>
              </div>
              <div className="absolute bottom-0 right-0 w-36 h-36 opacity-30">
                <Image src="/fdafcfb56ae93023c825161e07ac38fdba6af659.svg" alt="" fill className="object-contain" />
              </div>
            </motion.div>

            {/* Startup-in-Residence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="relative bg-[#1c1b1e] border-2 border-white rounded-2xl p-6 h-[250px] overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-black/20 border border-[#303038] shadow-lg flex items-center justify-center mb-6">
                  <Image src="/05b5108224404b5919bf6e3f1433b09ea2c1708d.svg" alt="Startup" width={32} height={32} />
                </div>
                <h3 className="text-[30px] font-semibold text-white tracking-[-1.2px] leading-tight">Startup-in-Residence</h3>
              </div>
              <div className="absolute bottom-0 right-0 w-36 h-36 opacity-30">
                <Image src="/e865ca0b6a2cc9c611383872084e99f4450e220a.svg" alt="" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Grid - Visible only on mobile */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-[#1c1b1e] border border-white rounded-xl p-4 h-[120px] overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-black/20 border border-[#303038] shadow flex items-center justify-center mb-2">
              <Image src="/4d709b17343d152f1ae4b9709aeb6cdd7c942ed1.svg" alt="Trekking" width={20} height={20} />
            </div>
            <h3 className="text-base font-semibold text-white">Trekking</h3>
            <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20">
              <Image src="/dd05603fd63c41e6b89ca1f3273b2be01e8cb326.svg" alt="" fill className="object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[120px] rounded-xl overflow-hidden border border-white"
          >
            <Image src="/b00cfde2c176bce51dba6c23e297239346fa82a6.png" alt="Trekking" fill className="object-cover" />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-[120px] rounded-xl overflow-hidden border border-white"
          >
            <Image src="/6b7753634c399ecf420d5ddb53ea408f38be9cd3.png" alt="Global Affairs" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative bg-[#1c1b1e] border border-white rounded-xl p-4 h-[120px] overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-black/20 border border-[#303038] shadow flex items-center justify-center mb-2">
              <Image src="/efa61af9e5da107ba17a3ca3544e5ddbd61f894e.svg" alt="Pickleball" width={20} height={20} />
            </div>
            <h3 className="text-base font-semibold text-white">Pickleball</h3>
            <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20">
              <Image src="/a33146f37ccf06dbbee6079c56b7c403d0724415.svg" alt="" fill className="object-contain" />
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative bg-[#1c1b1e] border border-white rounded-xl p-4 h-[120px] overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-black/20 border border-[#303038] shadow flex items-center justify-center mb-2">
              <Image src="/29979564ffbdcfa7ba3c806b9be46c03c4de5942.svg" alt="Global Affairs" width={20} height={20} />
            </div>
            <h3 className="text-base font-semibold text-white leading-tight">Global Affairs Guild</h3>
            <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20">
              <Image src="/31264210ec0f8b453379f2a5fcb5f6990af98508.svg" alt="" fill className="object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative h-[120px] rounded-xl overflow-hidden border border-white"
          >
            <Image src="/757b70824ff90d862c4fde30ac3e4a62d0c77314.png" alt="Culinary" fill className="object-cover" />
          </motion.div>

          {/* Row 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative h-[120px] rounded-xl overflow-hidden border border-white"
          >
            <Image src="/e8e5e2f3e4effe64758833eaca314e4e63bb4272.png" alt="Brownbag" fill className="object-cover" />
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative bg-[#1c1b1e] border border-white rounded-xl p-3 h-[56px] overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-black/20 border border-[#303038] shadow flex items-center justify-center">
                  <Image src="/a682377077943a7e11fef15907f96ab10c5ae780.svg" alt="Kayaking" width={16} height={16} />
                </div>
                <h3 className="text-sm font-semibold text-white">Kayaking</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative h-[56px] rounded-xl overflow-hidden border border-white"
            >
              <Image src="/fe3f72d77bdcf469dfa504341db2d790728f94ec.png" alt="Kayaking" fill className="object-cover" />
            </motion.div>
          </div>

          {/* Row 5 - Bottom Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="relative bg-[#1c1b1e] border border-white rounded-xl p-3 h-[100px] overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-black/20 border border-[#303038] shadow flex items-center justify-center mb-2">
              <Image src="/63288e15270376c620bc354a7e882182ee217633.svg" alt="Brownbag" width={20} height={20} />
            </div>
            <h3 className="text-sm font-semibold text-white leading-tight">Brownbag Lunches</h3>
            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20">
              <Image src="/92ecb3b6244f8d7f3a64ff7ebfe7c26ea49e701b.svg" alt="" fill className="object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="relative bg-[#1c1b1e] border border-white rounded-xl p-3 h-[100px] overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-black/20 border border-[#303038] shadow flex items-center justify-center mb-2">
              <Image src="/958c7aff1f4064e4154f1bfac16c1e0051a87100.svg" alt="Culinary" width={20} height={20} />
            </div>
            <h3 className="text-sm font-semibold text-white">Culinary Club</h3>
            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20">
              <Image src="/fdafcfb56ae93023c825161e07ac38fdba6af659.svg" alt="" fill className="object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="col-span-2 relative bg-[#1c1b1e] border border-white rounded-xl p-3 h-[100px] overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(1,1,75,0.2) 0%, rgba(0,0,111,0.2) 51%, rgba(1,1,39,0.2) 100%)`
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-black/20 border border-[#303038] shadow flex items-center justify-center mb-2">
              <Image src="/05b5108224404b5919bf6e3f1433b09ea2c1708d.svg" alt="Startup" width={20} height={20} />
            </div>
            <h3 className="text-sm font-semibold text-white">Startup-in-Residence</h3>
            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20">
              <Image src="/e865ca0b6a2cc9c611383872084e99f4450e220a.svg" alt="" fill className="object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}