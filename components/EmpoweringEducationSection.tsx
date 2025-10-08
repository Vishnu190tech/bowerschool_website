'use client';

import Image from 'next/image';
import Link from 'next/link';

interface EmpoweringEducationSectionProps {
  currentPage?: 'k12' | 'k12-school';
}

export default function EmpoweringEducationSection({ currentPage }: EmpoweringEducationSectionProps) {
  const isK12Active = currentPage === 'k12';
  const isK12SchoolActive = currentPage === 'k12-school';

  return (
    <section id="program-tabs" className="bg-[#f9f9f9] w-full py-6 md:py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-4 max-w-[1440px]">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-[42px] items-center justify-start">
          {/* Title Section */}
          <div className="text-center">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-2xl md:text-3xl lg:text-[44px] text-[rgba(24,23,48,0.8)] tracking-[-1.76px] capitalize leading-tight">
              Empowering Modern
              <br />
              Day Education
            </h2>
          </div>

          {/* Cards Section with Wave Background */}
          <div className="relative w-full">
            {/* Wave Background */}
            <div className="absolute h-[80px] md:h-[100px] lg:h-[140px] left-1/2 top-[-2px] -translate-x-1/2 w-full max-w-[1440px] pointer-events-none">
              <Image
                src="/19a0d24862ea5e7b4b0ef3e5f07f3c03a080875b.svg"
                alt=""
                width={1440}
                height={140}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Cards Grid */}
            <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[21px] items-stretch justify-center max-w-6xl mx-auto">
              {/* Parents/Students Card */}
              <Link
                href="/programs/k12#program-tabs"
                className="flex-1"
                prefetch={true}
              >
                <div className={`
                  h-full bg-white px-4 md:px-6 py-4 md:py-6 lg:py-[27px] min-h-[140px] md:min-h-[160px] lg:min-h-[180px]
                  flex flex-col justify-between shadow-sm rounded-lg md:rounded-none
                  cursor-pointer transition-all duration-300
                  hover:shadow-lg hover:scale-[1.02]
                  ${isK12Active ? 'border-b-[3px] md:border-b-[4px] lg:border-b-[5px] border-[#ff8829] bg-orange-50/30' : 'hover:bg-gray-50'}
                `}>
                  <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-xl md:text-2xl lg:text-[30px] text-black tracking-[-1.2px] leading-tight">
                      Parents/Students
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] font-medium text-base md:text-lg lg:text-[20px] text-black leading-relaxed">
                      Give your child real-world problem-solving skills.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Schools/Principals Card */}
              <Link
                href="/programs/k12-school#program-tabs"
                className="flex-1"
                prefetch={true}
              >
                <div className={`
                  h-full bg-white px-4 md:px-6 py-4 md:py-6 lg:py-[27px] min-h-[140px] md:min-h-[160px] lg:min-h-[180px]
                  flex flex-col justify-between shadow-sm rounded-lg md:rounded-none
                  cursor-pointer transition-all duration-300
                  hover:shadow-lg hover:scale-[1.02]
                  ${isK12SchoolActive ? 'border-b-[3px] md:border-b-[4px] lg:border-b-[5px] border-[#ff8829] bg-orange-50/30' : 'hover:bg-gray-50'}
                `}>
                  <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-xl md:text-2xl lg:text-[30px] text-black tracking-[-1.2px] leading-tight">
                      Schools/Principals
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] font-medium text-base md:text-lg lg:text-[20px] text-black leading-relaxed">
                      Integrate turnkey entrepreneurship programs into your curriculum.
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