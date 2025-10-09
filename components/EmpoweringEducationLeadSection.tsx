'use client';

import Link from 'next/link';

interface EmpoweringEducationLeadSectionProps {
  currentPage?: 'lead' | 'lead-vcpe';
}

export default function EmpoweringEducationLeadSection({ currentPage }: EmpoweringEducationLeadSectionProps) {
  const isLeadActive = currentPage === 'lead';
  const isLeadVcpeActive = currentPage === 'lead-vcpe';

  return (
    <section id="program-tabs" className="bg-[#f5ffd9] w-full py-6 md:py-7 lg:py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 lg:px-4 max-w-[1440px]">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-[42px] items-center justify-start">
          {/* Title Section */}


          {/* Cards Section with Wave Background */}
          <div className="relative w-full">
            {/* Wave Background */}
            {/* <div className="absolute h-[140px] left-1/2 top-[-2px] -translate-x-1/2 w-full max-w-[1440px] pointer-events-none hidden md:block">
              <Image
                src="/19a0d24862ea5e7b4b0ef3e5f07f3c03a080875b.svg"
                alt=""
                width={1440}
                height={140}
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* Cards Grid */}
            <div className="relative flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-[21px] items-stretch justify-center max-w-6xl mx-auto">
              {/* Lead Program Card */}
              <Link
                href="/programs/lead#program-tabs"
                className="flex-1"
                prefetch={true}
              >
                <div className={`
                  h-full bg-white px-4 md:px-5 lg:px-6 py-6 md:py-[24px] lg:py-[27px] min-h-[140px] md:min-h-[160px] lg:min-h-[180px]
                  flex flex-col justify-between shadow-sm rounded-lg md:rounded-none
                  cursor-pointer transition-all duration-300
                  hover:shadow-lg hover:scale-[1.02]
                  ${isLeadActive ? 'border-b-[3px] md:border-b-[4px] lg:border-b-[5px] border-[#A8F326] bg-green-50/30' : 'hover:bg-gray-50'}
                `}>
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] md:text-[25px] lg:text-[30px] text-black tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.2px] leading-[22px] md:leading-[26px] lg:leading-[30px]">
                      LEAD Program
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] font-medium text-[16px] md:text-[18px] lg:text-[20px] text-black leading-[24px] md:leading-[27px] lg:leading-[30px]">
                      Lead Boldly. Build Fearlessly.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Lead VCPE Program Card */}
              <Link
                href="/programs/lead-vcpe#program-tabs"
                className="flex-1"
                prefetch={true}
              >
                <div className={`
                  h-full bg-white px-4 md:px-5 lg:px-6 py-6 md:py-[24px] lg:py-[27px] min-h-[140px] md:min-h-[160px] lg:min-h-[180px]
                  flex flex-col justify-between shadow-sm rounded-lg md:rounded-none
                  cursor-pointer transition-all duration-300
                  hover:shadow-lg hover:scale-[1.02]
                  ${isLeadVcpeActive ? 'border-b-[3px] md:border-b-[4px] lg:border-b-[5px] border-[#A8F326] bg-green-50/30' : 'hover:bg-gray-50'}
                `}>
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] md:text-[25px] lg:text-[30px] text-black tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.2px] leading-[22px] md:leading-[26px] lg:leading-[30px]">
                      LEAD VCPE
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] font-medium text-[16px] md:text-[18px] lg:text-[20px] text-black leading-[24px] md:leading-[27px] lg:leading-[30px]">
                      Venture Capital & Private Equity specialization.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}