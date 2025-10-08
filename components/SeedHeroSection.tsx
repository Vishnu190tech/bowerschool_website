import Image from 'next/image';

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface HeroTheme {
  primary: string;
  secondary: string;
  bgColor: string;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  labelColor: string;
  valueColor: string;
  dividerColor: string;
}

const HERO_THEMES: Record<ThemeType, HeroTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgColor: '#f0f0ff',
    cardBg: '#f5f6ff',
    cardBorder: 'rgba(50, 50, 230, 0.4)',
    cardShadow: '8px 8px 24px 0px rgba(50, 50, 230, 0.08)',
    labelColor: '#6a6a6a',
    valueColor: '#1a2555',
    dividerColor: '#c4c4c4',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgColor: '#f5ffd9',
    cardBg: '#f9ffe6',
    cardBorder: 'rgba(168, 243, 38, 0.4)',
    cardShadow: '8px 8px 24px 0px rgba(168, 243, 38, 0.08)',
    labelColor: '#6a6a6a',
    valueColor: '#2d3a15',
    dividerColor: '#c4c4c4',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgColor: '#fbede3',
    cardBg: '#ffffff',
    cardBorder: 'rgba(107, 110, 105, 0.4)',
    cardShadow: '8px 8px 24px 0px rgba(75, 118, 0, 0.08)',
    labelColor: '#6a6a6a',
    valueColor: '#2c360d',
    dividerColor: '#c4c4c4',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgColor: '#f0f0ff',
    cardBg: '#f5f6ff',
    cardBorder: 'rgba(66, 66, 255, 0.4)',
    cardShadow: '8px 8px 24px 0px rgba(66, 66, 255, 0.08)',
    labelColor: '#6a6a6a',
    valueColor: '#1a2555',
    dividerColor: '#c4c4c4',
  },
};

interface SeedHeroSectionProps {
  theme?: ThemeType;
  breadcrumb?: string;
  title?: string;
  duration?: string;
  location?: string;
  modeLabel?: string;
  modeValue?: string;
  startDate?: string;
  backgroundImage?: string;
  lightEffectTop?: string;
  lightEffectBottom?: string;
}

export default function SeedHeroSection({
  theme = 'seed',
  breadcrumb = "",
  title = "Start Young. Think Big. Build Now.",
  duration = "3 Weeks",
  location = "Hyderabad",
  modeLabel = "Grades",
  modeValue = "9th-12th",
  startDate = "April 5th, 2025",
  backgroundImage = "/ed0e7f65e37080d626b88b7c3b47ccad17c1f97a.png",
  lightEffectTop = "/926c61495727893ab8924c9feec67bb80968ea3a.svg",
  lightEffectBottom = "/6d6ac35d93001a2b4a6b683eeb3cb5711cdb0549.svg"
}: SeedHeroSectionProps) {
  const currentTheme = HERO_THEMES[theme];
  return (
    <section
      className="relative w-full min-h-[800px] md:h-[750px] lg:h-[890px] pb-6 md:pb-8 lg:pb-[50px]"
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      {/* Background Container */}
      <div className="absolute inset-0 h-[550px] md:h-[700px] lg:h-[800px] overflow-hidden">
        {/* Background image with subtle overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundImage}')`
          }}
        />

        {/* Subtle gradient overlay only */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

        {/* Stars background */}
        {/* <div className="absolute h-[798px] left-[-32.09%] right-[-31.87%] top-1/2 -translate-y-1/2">
          <Image
            src="/d4116a9279920dc5a7fa85b3e826b75d12b8f94f.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div> */}

        {/* Grid overlay */}
        {/* <div className="absolute inset-0">
          <Image
            src="/b6f68bcc0d5b9d2c22d86bd280230365a4adaa28.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div> */}

        {/* Light effects - Hidden on mobile for performance */}
        <div className="hidden md:block absolute h-[1401.86px] w-[1693.86px] left-[144.95px] top-[-979px]">
          <Image
            src={lightEffectTop}
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="hidden md:block absolute h-[1401.86px] w-[1693.86px] left-[153.95px] top-[127px]">
          <div className="rotate-180 relative w-full h-full">
            <Image
              src={lightEffectBottom}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center pt-24 justify-center">
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 lg:px-20">
          {/* Breadcrumb - Only show if provided */}
          {breadcrumb && (
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="bg-black border border-white rounded-[24px] px-3 md:px-5 py-2 inline-flex items-center">
                <span
                  className="text-[14px] md:text-[16px] lg:text-[18px] text-white font-normal leading-[20px] md:leading-[24px] lg:leading-[27px] text-center"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {breadcrumb}
                </span>
              </div>
            </div>
          )}

          {/* Hero Title */}
          <div className="text-center">
            <h1
              className="text-[32px] md:text-[56px] lg:text-[80px] text-[#f5f9ff] font-bold tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Info Card - Floating at bottom with proper spacing */}
      <div className="absolute bottom-[80px] md:bottom-6 lg:bottom-[30px] left-1/2 -translate-x-1/2 z-20 w-[calc(100%-2rem)] md:w-[80vh] lg:w-full lg:max-w-[1440px] lg:px-20">
        <div
          className="rounded-[16px] px-4 md:px-6 lg:px-10 py-4 md:py-5 border flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-9"
          style={{
            backgroundColor: currentTheme.cardBg,
            borderColor: currentTheme.cardBorder,
            boxShadow: currentTheme.cardShadow
          }}
        >
          {/* Logo Icon */}
          <div className="relative w-[48px] h-[48px] md:w-[60px] md:h-[60px] lg:w-[72px] lg:h-[72px] flex-shrink-0">
            <Image
              src="/f92d16e5e706d8868062d60ccb419461efe94737.svg"
              alt=""
              fill
              className="object-contain"
            />
            {/* Icon overlay elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative scale-75 md:scale-90 lg:scale-100">
                <Image
                  src="/b435a07e6ee780e397ac74fc870f429ce51b5b03.svg"
                  alt=""
                  width={35}
                  height={50}
                  className="absolute top-[-5px] left-[6px] rotate-[30deg] skew-x-[26.565deg]"
                />
                <Image
                  src="/c0e2598f151d58efbfbd84f16ffdf45d3218166a.svg"
                  alt=""
                  width={35}
                  height={51}
                  className="rotate-[30deg] skew-x-[26.565deg]"
                />
                <Image
                  src="/2d5212c17364a7cb5d85035aeb056e803fe8167e.svg"
                  alt=""
                  width={35}
                  height={51}
                  className="absolute top-[6px] left-0 rotate-[30deg] skew-x-[26.565deg]"
                />
                <Image
                  src="/e537367602fb4ec231056de88daeeab02cde588b.svg"
                  alt=""
                  width={35}
                  height={51}
                  className="absolute top-[6px] left-0 rotate-[30deg] skew-x-[26.565deg]"
                />
                <Image
                  src="/94f116ad163c50bf474c57dd186dcf7133bd22b7.svg"
                  alt=""
                  width={35}
                  height={51}
                  className="absolute top-[6px] left-0 rotate-[30deg] skew-x-[26.565deg]"
                />
                <Image
                  src="/edace708dfe8860ba188a7f2851b6b316c18007f.svg"
                  alt=""
                  width={11}
                  height={20}
                  className="absolute top-0 right-[-5px] rotate-[30deg] skew-x-[26.565deg]"
                />
                <Image
                  src="/382982e7380e8929c52a1c4981124e7b448ea1fa.svg"
                  alt=""
                  width={13}
                  height={22}
                  className="absolute top-[14px] left-[14px] rotate-[30deg] skew-x-[26.565deg]"
                />
              </div>
            </div>
          </div>

          {/* Info Details */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-[42px] w-full md:w-auto">
            {/* Duration */}
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span
                className="text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[20px]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: currentTheme.labelColor
                }}
              >
                Duration
              </span>
              <span
                className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: currentTheme.valueColor
                }}
              >
                {duration}
              </span>
            </div>

            {/* Divider */}
            <div
              className="h-[1px] w-full md:h-[60px] md:w-[1px] lg:h-[76px]"
              style={{ backgroundColor: currentTheme.dividerColor }}
            />

            {/* Location */}
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span
                className="text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[20px]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: currentTheme.labelColor
                }}
              >
                Location
              </span>
              <span
                className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: currentTheme.valueColor
                }}
              >
                {location}
              </span>
            </div>

            {/* Divider */}
            <div
              className="h-[1px] w-full md:h-[60px] md:w-[1px] lg:h-[76px]"
              style={{ backgroundColor: currentTheme.dividerColor }}
            />

            {/* Mode/Grades */}
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span
                className="text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[20px]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: currentTheme.labelColor
                }}
              >
                {modeLabel}
              </span>
              <span
                className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: currentTheme.valueColor
                }}
              >
                {modeValue}
              </span>
            </div>

            {/* Divider */}
            <div
              className="h-[1px] w-full md:h-[60px] md:w-[1px] lg:h-[76px]"
              style={{ backgroundColor: currentTheme.dividerColor }}
            />

            {/* Start Date */}
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span
                className="text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[20px]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: currentTheme.labelColor
                }}
              >
                Start Date
              </span>
              <span
                className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold tracking-[-0.72px] md:tracking-[-0.8px] lg:tracking-[-0.96px]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: currentTheme.valueColor
                }}
              >
                {startDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}