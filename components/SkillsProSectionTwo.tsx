import Image from 'next/image';

export default function SkillsProSectionTwo() {
  return (
    <section
      className="relative overflow-hidden p-4 md:p-10 lg:p-20 xl:p-[80px]"
      style={{
        backgroundImage: 'linear-gradient(130.523deg, rgb(24, 11, 0) 1.2667%, rgb(18, 8, 0) 100%)'
      }}
    >
      {/* Background Effects - Hidden on mobile for performance */}
      <div className="hidden lg:block absolute -left-[715px] top-[553px] w-[1693.85px] h-[1401.86px] mix-blend-hard-light">
        <div className="rotate-180 relative w-full h-full">
          <Image
            src="/e074834743b22adfea9887fd8f0c737a528f852d.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="hidden lg:block absolute left-[-97.64%] right-[-97.85%] h-[1438px]" style={{ top: 'calc(50% + 105.682px)', transform: 'translateY(-50%)' }}>
        <Image
          src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="hidden lg:block absolute -left-[715px] top-[553px] w-[1693.85px] h-[1401.86px] mix-blend-hard-light">
        <div className="rotate-180 relative w-full h-full">
          <Image
            src="/88a7a6fddfe2da555b37ee14803ef5997755cb09.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="hidden lg:block absolute left-[262px] -top-[473px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light">
        <Image
          src="/6f94940db2799aeb7f55f508c90ffe9fc6c43dcd.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1281px] mx-auto flex flex-col gap-6 md:gap-8 items-center">

        {/* Header Section */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="w-full md:w-[608px] flex flex-row gap-1 text-center md:text-left">
              <h2
                className="text-[24px] md:text-[32px] lg:text-[40px] text-white font-semibold tracking-[-0.96px] md:tracking-[-1.28px] lg:tracking-[-1.6px] leading-[24px] md:leading-[32px] lg:leading-[40px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Skills That Make You{' '}
                <span
                  className="text-[26px] md:text-[36px] lg:text-[44px] text-[#ff8829] font-semibold tracking-[-1.04px] md:tracking-[-1.44px] lg:tracking-[-1.76px] leading-[26px] md:leading-[36px] lg:leading-[44px] capitalize"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  A Pro
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="w-full flex flex-col gap-4">
          {/* Cards Container */}
          <div className="flex flex-col lg:flex-row gap-4 min-h-[auto] lg:h-[500px]">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Strategic Thinking Card */}
              <div
                className="rounded-[16px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative overflow-hidden min-h-[200px] lg:min-h-0"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0) 100%), #16161a`,
                  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.1), 0 20px 40px -20px rgba(0,0,0,0.5)',
                  border: '1px solid transparent',
                  backgroundImage: `
                    linear-gradient(#16161a, #16161a) padding-box,
                    linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%) border-box
                  `,
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <div className="bg-[#26262b] rounded-[12px] w-12 h-12 md:w-16 md:h-16 p-3 md:p-4 border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/596b6f4cbbf63ed57c82210f5ed2cdf7c8e23f99.svg"
                    alt="Strategic Thinking"
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3
                    className="text-[18px] md:text-[20px] lg:text-[24px] text-white font-semibold tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Strategic Thinking
                  </h3>
                  <p
                    className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-100 leading-[21px] md:leading-[24px] lg:leading-[27px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Learn to define your market, craft winning business models, and plan for growth.
                  </p>
                </div>
              </div>

              {/* Pitching & Storytelling Card */}
              <div
                className="rounded-[16px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative min-h-[200px] lg:h-[238px] overflow-hidden"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0) 100%), #16161a`,
                  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.1), 0 20px 40px -20px rgba(0,0,0,0.5)',
                  border: '1px solid transparent',
                  backgroundImage: `
                    linear-gradient(#16161a, #16161a) padding-box,
                    linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%) border-box
                  `,
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <div className="bg-[#26262b] rounded-[12px] w-12 h-12 md:w-16 md:h-16 p-3 md:p-4 border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/bbd8fca3c16fda0e7cc5bdde4af5cdf7fb8e47a1.svg"
                    alt="Pitching & Storytelling"
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3
                    className="text-[18px] md:text-[20px] lg:text-[24px] text-white font-semibold tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Pitching & Storytelling
                  </h3>
                  <p
                    className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-100 leading-[21px] md:leading-[24px] lg:leading-[27px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Master the art of communicating your vision to investors and customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Opportunity Sensing Card */}
              <div
                className="rounded-[16px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative overflow-hidden min-h-[200px] lg:min-h-0"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0) 100%), #16161a`,
                  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.1), 0 20px 40px -20px rgba(0,0,0,0.5)',
                  border: '1px solid transparent',
                  backgroundImage: `
                    linear-gradient(#16161a, #16161a) padding-box,
                    linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%) border-box
                  `,
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <div className="bg-[#26262b] rounded-[12px] w-12 h-12 md:w-16 md:h-16 p-3 md:p-4 border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/8defd23ada31f7dcafbf5034b23d0b7738e33af7.svg"
                    alt="Opportunity Sensing"
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3
                    className="text-[18px] md:text-[20px] lg:text-[24px] text-white font-semibold tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Opportunity Sensing
                  </h3>
                  <p
                    className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-100 leading-[21px] md:leading-[24px] lg:leading-[27px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Sharpen your instincts to spot scalable ideas, untapped markets, and businesses with high growth potential.
                  </p>
                </div>
              </div>

              {/* Customer Intelligence Card */}
              <div
                className="rounded-[16px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative flex-1 overflow-hidden min-h-[200px] lg:min-h-0"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0) 100%), #16161a`,
                  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.1), 0 20px 40px -20px rgba(0,0,0,0.5)',
                  border: '1px solid transparent',
                  backgroundImage: `
                    linear-gradient(#16161a, #16161a) padding-box,
                    linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%) border-box
                  `,
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <div className="bg-[#26262b] rounded-[12px] w-12 h-12 md:w-16 md:h-16 p-3 md:p-4 border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/6def7a8386e55608cdd55a95648bd4e1bba31258.svg"
                    alt="Customer Intelligence"
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3
                    className="text-[18px] md:text-[20px] lg:text-[24px] text-white font-semibold tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Customer Intelligence
                  </h3>
                  <p
                    className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-100 leading-[21px] md:leading-[24px] lg:leading-[27px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Master the art of communicating your vision to investors and customers.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}