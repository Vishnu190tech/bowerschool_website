import Image from 'next/image';

export default function WhatIsSEEDSection() {
  return (
    <section className="bg-[#f8eee8] relative rounded-2xl md:rounded-[24px] overflow-hidden">
      <div className="px-4 md:px-8 lg:px-[45px] py-6 md:py-9 relative">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/b55d0d96d7fe71c11134f5d7d84266e304ac8c35.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1190px] mx-auto flex flex-col gap-6 md:gap-8 items-center justify-center py-4 md:py-[19px]">
          {/* Text Section */}
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center w-full">
            <div className="flex flex-col gap-3 md:gap-4 items-center justify-center w-full">
              <h2
                className="capitalize font-semibold text-2xl md:text-3xl lg:text-[44px] text-[rgba(0,0,0,0.8)] tracking-[-1.76px] leading-tight text-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                What Is SEED?
              </h2>
              <p
                className="font-medium text-base md:text-lg lg:text-[20px] text-black text-center leading-relaxed max-w-full px-4 md:px-0"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                SEED equips students with real-world startup skills—no extra prep work for your teachers, and zero disruption to your timetable.
              </p>
            </div>
          </div>

          {/* Video Card */}
          <div className="relative w-full max-w-[715px] aspect-video rounded-2xl md:rounded-[16px] overflow-hidden">
            {/* Video Thumbnail Background */}
            <div
              className="absolute inset-0 bg-[#d9d9d9] backdrop-blur-md"
              style={{
                backgroundImage: `url('/6e3892c0b6ec69fbcdf99e36ad16462031fb2bd3.png')`,
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover'
              }}
            />

            {/* White Border */}
            <div className="absolute inset-[-4px] md:inset-[-8px] border-4 md:border-8 border-white rounded-3xl md:rounded-[24px] pointer-events-none" />

            {/* Play Button Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-[108px] lg:h-[108px]">
                {/* Outer play button background */}
                <div className="absolute inset-0 bg-[#ff8829] opacity-50 rounded-xl md:rounded-[16px] border border-white" />

                {/* Inner play button background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-[90px] lg:h-[90px] bg-[#ff8829] opacity-60 rounded-xl md:rounded-[16px] border border-white" />

                {/* Play Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                  <Image
                    src="/fed2de9b7e0f73990f199d31a4e0bb04cdd53492.svg"
                    alt="Play"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Shadow Effect */}
      <div className="absolute inset-[-1px] border border-white rounded-2xl md:rounded-[25px] pointer-events-none shadow-[4px_4px_24px_0px_rgba(0,0,0,0.06)]" />
    </section>
  );
}