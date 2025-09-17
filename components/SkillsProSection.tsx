import Image from 'next/image';

export default function SkillsProSection() {
  return (
    <section
      className="relative overflow-hidden px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-[80px]"
      style={{
        backgroundImage: 'linear-gradient(130.523deg, rgb(24, 11, 0) 1.2667%, rgb(18, 8, 0) 100%)'
      }}
    >
      {/* Background Effects */}
      <div className="absolute -left-[715px] top-[553px] w-[1693.85px] h-[1401.86px] mix-blend-hard-light hidden md:block">
        <div className="rotate-180 relative w-full h-full">
          <Image
            src="/e074834743b22adfea9887fd8f0c737a528f852d.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute left-[-97.64%] right-[-97.85%] h-[1438px] hidden md:block" style={{ top: 'calc(50% + 105.682px)', transform: 'translateY(-50%)' }}>
        <Image
          src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute -left-[715px] top-[553px] w-[1693.85px] h-[1401.86px] mix-blend-hard-light hidden md:block">
        <div className="rotate-180 relative w-full h-full">
          <Image
            src="/88a7a6fddfe2da555b37ee14803ef5997755cb09.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute left-[262px] -top-[473px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light hidden md:block">
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
        <div className="w-full flex flex-col gap-4 md:gap-3">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
            <div className="w-full md:w-[608px] flex flex-col gap-1">
              <h2
                className="text-2xl md:text-3xl lg:text-[40px] text-white font-semibold tracking-[-1.6px] leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Skills That Make You
              </h2>
              <h2
                className="text-3xl md:text-4xl lg:text-[44px] text-[#ff8829] font-semibold tracking-[-1.76px] leading-tight capitalize"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                A Pro
              </h2>
            </div>
            <div className="flex-1 w-full">
              <p
                className="text-base md:text-lg text-gray-100 font-normal leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Bower LEAD enhances your entrepreneurial skillset, sharpens your acumen to identify future-proof, high-growth business ideas, and turns your passion into action
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="w-full flex flex-col gap-4">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row gap-4 md:h-[500px]">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Strategic Thinking Card */}
              <div
                className="rounded-[16px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative overflow-hidden"
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
                <div className="bg-[#26262b] rounded-[12px] w-16 h-16 p-4 border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/596b6f4cbbf63ed57c82210f5ed2cdf7c8e23f99.svg"
                    alt="Strategic Thinking"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-xl md:text-2xl text-white font-semibold tracking-[-0.96px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Strategic Thinking
                  </h3>
                  <p
                    className="text-base md:text-lg text-gray-100 leading-relaxed"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Learn to define your market, craft winning business models, and plan for growth.
                  </p>
                </div>
              </div>

              {/* Pitching & Storytelling Card */}
              <div
                className="rounded-[16px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative md:h-[238px] overflow-hidden"
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
                <div className="bg-[#26262b] rounded-[12px] w-16 h-16 p-4 border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/bbd8fca3c16fda0e7cc5bdde4af5cdf7fb8e47a1.svg"
                    alt="Pitching & Storytelling"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-xl md:text-2xl text-white font-semibold tracking-[-0.96px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Pitching & Storytelling
                  </h3>
                  <p
                    className="text-base md:text-lg text-gray-100 leading-relaxed"
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
                className="rounded-[16px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative overflow-hidden"
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
                <div className="bg-[#26262b] rounded-[12px] w-16 h-16 p-4 border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/8defd23ada31f7dcafbf5034b23d0b7738e33af7.svg"
                    alt="Opportunity Sensing"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-xl md:text-2xl text-white font-semibold tracking-[-0.96px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Opportunity Sensing
                  </h3>
                  <p
                    className="text-base md:text-lg text-gray-100 leading-relaxed"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Sharpen your instincts to spot scalable ideas, untapped markets, and businesses with high growth potential.
                  </p>
                </div>
              </div>

              {/* Customer Intelligence Card */}
              <div
                className="rounded-[16px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative flex-1 overflow-hidden"
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
                <div className="bg-[#26262b] rounded-[12px] w-16 h-16 p-4 border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/6def7a8386e55608cdd55a95648bd4e1bba31258.svg"
                    alt="Customer Intelligence"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-xl md:text-2xl text-white font-semibold tracking-[-0.96px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Customer Intelligence
                  </h3>
                  <p
                    className="text-base md:text-lg text-gray-100 leading-relaxed"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Master the art of communicating your vision to investors and customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership in Action Card */}
          <div
            className="rounded-[16px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative overflow-hidden"
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
            <div className="bg-[#26262b] rounded-[12px] w-16 h-16 p-4 border border-[#303038] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
              <Image
                src="/a9c90e81df5e9e8bedb29f3f22c7d8ece0db9804.svg"
                alt="Leadership in Action"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3
                className="text-[24px] text-white font-semibold tracking-[-0.96px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Leadership in Action
              </h3>
              <p
                className="text-[18px] text-gray-100 leading-[27px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Build confidence to lead teams, make decisions under pressure, and navigate entrepreneurial uncertainty.
              </p>
            </div>
          </div>

          {/* Tools You Will Master */}
          <div
            className="rounded-[16px] p-4 md:p-6 flex flex-col gap-6 md:gap-11 relative overflow-hidden"
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
            <h3
              className="text-2xl md:text-3xl lg:text-[44px] text-white font-semibold tracking-[-1.76px] capitalize"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Tools you will master
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="relative w-20 h-20 md:w-28 md:h-28 lg:w-[165.703px] lg:h-[165.635px]">
                  <div className="absolute inset-0 mix-blend-screen">
                    <Image
                      src="/494f153b6bdb41ce2348879c246b0d2f0b90b536.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute inset-[7.55%_7.17%_7.49%_7.47%] flex items-center justify-center">
                    <div className="rotate-180 w-full h-full relative">
                      <Image
                        src="/67ffca9e8833a73450fe8c5473bd6da3c0db71d7.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[7.92%_7.12%_7.53%_7.93%]">
                    <Image
                      src="/22646e38ffbf49292e130c52e01142f88e5cb9e5.svg"
                      alt=""
                      width={120}
                      height={120}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}