import Image from 'next/image';

export default function EvolvingEducationSection() {
  const regularSchoolItems = [
    {
      title: 'From text book driven learning',
      description: 'Emphasis on rote memorization, standard subjects, and exams'
    },
    {
      title: 'From Limited Exposure to Life Skills',
      description: 'Emphasis on rote memorization, standard subjects, and exams'
    },
    {
      title: 'From One-Size-Fits-All Curriculum',
      description: 'Same content for every student, regardless of interests or aspirations.'
    },
    {
      title: 'From Teacher-Centric Classrooms',
      description: 'Students are passive recipients of information.'
    },
    {
      title: 'From Minimal Industry Exposure',
      description: 'Little interaction with real-world professionals or problems.'
    },
    {
      title: 'From Short-Term Academic Focus',
      description: 'Emphasis on grades over long-term thinking.'
    }
  ];

  const bowerItems = [
    {
      title: 'To Real-World Learning',
      description: 'Hands-on projects that connect concepts to real challenges.'
    },
    {
      title: 'To Future-Ready Skills',
      description: 'Entrepreneurship, design thinking, and financial literacy from an early age.'
    },
    {
      title: 'To Tailored Learning Paths',
      description: 'Age-appropriate, modular content that evolves as students grow.'
    },
    {
      title: 'To Student-Led Exploration',
      description: 'Encourages curiosity, experimentation, and ownership of ideas.'
    },
    {
      title: 'To Expert Mentorship & Immersion',
      description: 'Sessions led by entrepreneurs and innovators.'
    },
    {
      title: 'To Mindset for the Future',
      description: 'Builds creativity, resilience, and a problem-solving attitude for life.'
    }
  ];

  return (
    <section className="relative bg-gradient-to-r from-[#180b00] to-[#120800] px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20 overflow-hidden">
      {/* Background Effects */}
      {/* Stars Background - Hidden on Mobile */}
      <div
        className="hidden md:block absolute h-[1438px] left-[-97.85%] right-[-97.85%] -translate-y-1/2 pointer-events-none"
        style={{ top: 'calc(50% + 0.502px)' }}
      >
        <Image
          src="/a4c431ab261b1d4a4a57af5d8a47f280cdaf48b2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Lights Effect - Hidden on Mobile */}
      <div className="hidden lg:block absolute left-[-126.86px] top-[-110.86px] w-[1693.86px] h-[1401.86px] mix-blend-hard-light pointer-events-none">
        <div className="rotate-180 w-full h-full relative">
          <Image
            src="/447b8ef92db6c97bae2b9ed04c53d989fb98e8ba.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Grid Pattern - Hidden on Mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="absolute inset-[13.74%_87.32%_76.98%_0.23%] opacity-[0.04]">
          <Image
            src="/42d03e4399937d15094f103bc0f791e94000e994.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute inset-[68.02%_99.46%_22.7%_-11.92%] opacity-[0.04]">
          <Image
            src="/42d03e4399937d15094f103bc0f791e94000e994.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute inset-[22.78%_-21.99%_67.94%_109.54%] opacity-[0.04]">
          <Image
            src="/42d03e4399937d15094f103bc0f791e94000e994.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Start your Application button (decorative) */}
        <div
          className="absolute opacity-[0.04] px-5 py-1 rounded-[6px] bg-[#ff6321] shadow-[0px_0px_0px_1px_#cf4e17,0px_1px_3px_0px_rgba(0,0,0,0.1)]"
          style={{
            top: 'calc(50% - 18px)',
            left: 'calc(50% + 241.25px)',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="text-[16px] text-white font-medium tracking-[-0.32px] [text-shadow:#df571d_0px_1px_3px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Start your Application
            </span>
            <Image
              src="/26e2d898fc64cd82a941d2b5d44a9ed4bf66fcac.svg"
              alt=""
              width={3.5}
              height={6}
            />
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 items-start mb-6 md:mb-9">
          <div className="w-full lg:w-[608px] flex flex-col gap-1">
            <h2
              className="text-[24px] md:text-[32px] lg:text-[40px] text-white font-semibold tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] leading-[1.2] md:leading-[1.1] lg:leading-[40px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Young Minds Are Evolving
            </h2>
            <h2
              className="text-[26px] md:text-[36px] lg:text-[44px] text-[#ff8829] font-semibold tracking-[-1px] md:tracking-[-1.4px] lg:tracking-[-1.76px] leading-[1.2] md:leading-[1.1] lg:leading-[44px] capitalize"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Their Education Must Too
            </h2>
          </div>
          <div className="flex-1">
            <p
              className="text-[14px] md:text-[16px] lg:text-[18px] text-[#c3c3c3] font-normal leading-[1.5] md:leading-[1.5] lg:leading-[27px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              With Bower's bespoke progressive curriculum designed for K12 students, young minds go beyond outdated lessons. We blend evolving business thinking with hands-on entrepreneurial action, turning curiosity into real-world skills. Because tomorrow's leaders need more than theory — they need experience.
            </p>
          </div>
        </div>

        {/* Comparison Container */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Regular School Curriculum */}
          <div className="flex-1 bg-[#202020] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-4 md:p-5 lg:p-6 border-2 border-transparent">
            <h3
              className="text-[20px] md:text-[24px] lg:text-[30px] text-white font-semibold tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.2px] mb-4 md:mb-6 lg:mb-8"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Regular School Curriculum
            </h3>
            <div className="flex flex-col gap-3 md:gap-4 h-auto lg:h-[692px]">
              {regularSchoolItems.map((item, index) => (
                <div
                  key={index}
                  className="backdrop-blur-[22px] bg-[rgba(32,32,32,0.5)] rounded-[8px] md:rounded-[10px] lg:rounded-[12px] p-2 md:p-2.5 lg:p-3 border border-[rgba(255,255,255,0.6)] flex-1"
                >
                  <h4
                    className="text-[16px] md:text-[18px] lg:text-[20px] text-white font-medium leading-[1.3] md:leading-[1.4] lg:leading-[30px] mb-1 md:mb-2 lg:mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-[12px] md:text-[14px] lg:text-[16px] text-[#c3c3c3] font-normal leading-[1.4] md:leading-[1.5] lg:leading-[24px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bower's Upgraded Curriculum */}
          <div
            className="flex-1 backdrop-blur-[30px] bg-[rgba(32,32,32,0.2)] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border-2 border-transparent relative overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(133.538deg, rgba(255, 255, 255, 0.2) 2.6545%, rgba(255, 255, 255, 0) 44.796%),
                radial-gradient(ellipse 999.65px 471.82px at 292.45px 118.25px, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55.823%, rgba(0, 0, 0, 0.3) 73.997%, rgba(0, 0, 0, 0) 100%),
                linear-gradient(36.4336deg, rgba(255, 136, 41, 0.4) 0.67386%, rgba(255, 136, 41, 0.16) 50.204%, rgba(255, 136, 41, 0.16) 98.79%)
              `
            }}
          >
            <div className="p-4 md:p-5 lg:p-6">
              <h3
                className="text-[20px] md:text-[24px] lg:text-[30px] text-[#ff8829] font-semibold tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.2px] mb-4 md:mb-6 lg:mb-8"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Curriculum Upgraded with Bower's Modules
              </h3>
              <div className="flex flex-col gap-3 md:gap-4 h-auto lg:h-[692px]">
                {bowerItems.map((item, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-[22px] bg-[rgba(32,32,32,0.5)] rounded-[8px] md:rounded-[10px] lg:rounded-[12px] p-2 md:p-2.5 lg:p-3 border border-[rgba(255,255,255,0.6)] flex-1"
                  >
                    <h4
                      className="text-[16px] md:text-[18px] lg:text-[20px] text-white font-medium leading-[1.3] md:leading-[1.4] lg:leading-[30px] mb-1 md:mb-2 lg:mb-3"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-[12px] md:text-[14px] lg:text-[16px] text-[#c3c3c3] font-normal leading-[1.4] md:leading-[1.5] lg:leading-[24px]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}