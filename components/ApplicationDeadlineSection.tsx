import Image from 'next/image';

export default function ApplicationDeadlineSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[320px] overflow-hidden bg-gradient-to-br from-[#fef6f0] via-[#fee9dc] to-[#fddcc8]">
      <div className="relative max-w-[1440px] mx-auto h-full">
        {/* Background Grid */}
        <div className="absolute inset-0">
          <Image
            src="/4e9b966a09a73b28d089dd6add69f0f1eebcc4c1.svg"
            alt=""
            fill
            className="object-cover opacity-15"
          />
        </div>

        {/* 3D Graphics on the right - Hidden on Mobile */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
          {/* Main Orange Shapes */}
          <div className="absolute right-[120px] top-[-40px] w-[180px] h-[180px]">
            <Image src="/33e8bbd207354ff11abc49423dde878b9e280429.png" alt="" width={180} height={180} className="opacity-90" />
          </div>

          <div className="absolute right-[320px] top-[80px] w-[140px] h-[140px]">
            <Image src="/8fb4d677493a8b267f15c3fce1e10a15ae6c0c0c.png" alt="" width={140} height={140} className="opacity-80" />
          </div>

          <div className="absolute right-[60px] bottom-[-30px] w-[200px] h-[200px]">
            <Image src="/9641b192bfa68930ac1d6a273b937ff3d4d4a23e.png" alt="" width={200} height={200} className="opacity-85" />
          </div>

          <div className="absolute right-[240px] bottom-[40px] w-[120px] h-[120px]">
            <Image src="/add325ef594a2f5556de2dc58fcdca4757039ce5.png" alt="" width={120} height={120} className="opacity-75" />
          </div>

          <div className="absolute right-[450px] top-[30px] w-[130px] h-[130px]">
            <Image src="/6fefdb0d58b33b7a5c46beacd300330487b242af.png" alt="" width={130} height={130} className="opacity-70" />
          </div>
        </div>

        {/* Mobile Graphics */}
        <div className="md:hidden absolute right-0 top-0 h-full w-full">
          <div className="absolute right-[10px] top-[20px] w-[80px] h-[80px]">
            <Image src="/33e8bbd207354ff11abc49423dde878b9e280429.png" alt="" width={80} height={80} className="opacity-60" />
          </div>
          <div className="absolute right-[100px] top-[60px] w-[60px] h-[60px]">
            <Image src="/8fb4d677493a8b267f15c3fce1e10a15ae6c0c0c.png" alt="" width={60} height={60} className="opacity-50" />
          </div>
          <div className="absolute right-[20px] bottom-[100px] w-[90px] h-[90px]">
            <Image src="/9641b192bfa68930ac1d6a273b937ff3d4d4a23e.png" alt="" width={90} height={90} className="opacity-55" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute top-1/2 left-4 md:left-10 lg:left-[80px] -translate-y-1/2 flex flex-col items-start gap-4 md:gap-6 lg:gap-8 z-10 px-4 md:px-0 max-w-[90%] md:max-w-none">
          <div className="flex flex-col gap-1 items-start">
            <p
              className="text-[14px] md:text-[16px] text-black/70 font-normal leading-[20px] md:leading-[24px] mb-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Program Application Deadline
            </p>
            <h2
              className="text-[32px] md:text-[44px] lg:text-[56px] text-black font-semibold tracking-[-1.2px] md:tracking-[-1.6px] lg:tracking-[-2px] leading-[1]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              20th April 2025
            </h2>
          </div>
          <button
            className="bg-[#ff8829] text-white px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-3.5 rounded-[50px] font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] hover:bg-[#ff7719] transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Top and Bottom Borders */}
      <div className="absolute inset-x-0 top-0 h-[0.5px] bg-white/50" />
      <div className="absolute inset-x-0 bottom-0 h-[0.5px] bg-white/50" />
    </section>
  );
}