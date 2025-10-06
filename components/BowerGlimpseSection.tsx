'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface GlimpseTheme {
  primary: string;
  secondary: string;
  buttonBorder: string;
  buttonBg: string;
  buttonText: string;
  buttonHoverBg: string;
  buttonHoverText: string;
}

const GLIMPSE_THEMES: Record<ThemeType, GlimpseTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    buttonBorder: '#3232e6',
    buttonBg: 'radial-gradient(ellipse at center, rgba(50, 50, 230, 0.1) 0%, rgba(50, 50, 230, 0) 100%)',
    buttonText: '#3232e6',
    buttonHoverBg: '#3232e6',
    buttonHoverText: '#ffffff',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    buttonBorder: '#8FD920',
    buttonBg: 'radial-gradient(ellipse at center, rgba(168, 243, 38, 0.1) 0%, rgba(168, 243, 38, 0) 100%)',
    buttonText: '#8FD920',
    buttonHoverBg: '#A8F326',
    buttonHoverText: '#000000',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    buttonBorder: '#ff8829',
    buttonBg: 'radial-gradient(ellipse at center, rgba(255, 136, 41, 0.1) 0%, rgba(255, 136, 41, 0) 100%)',
    buttonText: '#ff8829',
    buttonHoverBg: '#ff8829',
    buttonHoverText: '#ffffff',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    buttonBorder: '#4242FF',
    buttonBg: 'radial-gradient(ellipse at center, rgba(66, 66, 255, 0.1) 0%, rgba(66, 66, 255, 0) 100%)',
    buttonText: '#4242FF',
    buttonHoverBg: '#4242FF',
    buttonHoverText: '#ffffff',
  },
};

// Image Data Interface
interface ImageData {
  src: string;
  className: string;
  delay: number;
}

// Component Props Interface
interface BowerGlimpseSectionProps {
  theme?: ThemeType;
  title?: string;
  description?: string;
  buttonText?: string;
  images?: ImageData[];
}

// Default Images Data
const DEFAULT_IMAGES: ImageData[] = [
  {
    src: '/419700f7c8a91e7961d454e65990ef0c3ec0bef9.png',
    className: 'absolute w-[209px] h-[157px] left-[1074px] top-[389px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] z-10',
    delay: 0.3
  },
  {
    src: '/4d58bfa8ac7c44f2096a57a33f93a3274ae1fab7.png',
    className: 'absolute w-[141px] h-[145px] left-[958px] top-[590px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] z-10',
    delay: 0.4
  },
  {
    src: '/a585eecad8f2d5d5433e1fe2bda32ea89e84251e.png',
    className: 'absolute w-[220px] h-[145px] left-[629px] top-[500px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] z-10',
    delay: 0.5
  },
  {
    src: '/a2b0c2c84016117bfa3285b4106cd2a945f35656.png',
    className: 'absolute w-[178px] h-[210px] left-[400px] top-[525px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] z-10',
    delay: 0.6
  },
  {
    src: '/109fb04b7259a0cb72432e9ba2da45ae1a2ac953.png',
    className: 'absolute w-[213px] h-[120px] left-[0px] top-[500px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] z-10',
    delay: 0.7
  },
  {
    src: '/62551708c71f8844229ab1714e29e1a16615545b.png',
    className: 'absolute w-[181px] h-[257px] left-[-112px] top-[190px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] opacity-30 z-5',
    delay: 0.2
  },
  {
    src: '/5f1f9abb19fd55d27d0a47f7604d04fd340cc0f1.png',
    className: 'absolute w-[211px] h-[156px] left-[-56px] top-[94px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] z-10',
    delay: 0.3
  },
  {
    src: '/de3fec76bf815bfab9d1268eafab8ea710501512.png',
    className: 'absolute w-[179px] h-[254px] left-[201px] top-[48px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] opacity-30 z-5',
    delay: 0.4
  },
  {
    src: '/acd70f02d9d17da45bcf2f78d3538ce38cdcad62.png',
    className: 'absolute w-[135px] h-[136px] left-[139px] top-[395px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] z-10',
    delay: 0.5
  },
  {
    src: '/adc71b0ee54d6e4d713aeca2b4e4975d6c60b9a5.png',
    className: 'absolute w-[193px] h-[237px] left-[832px] top-[374px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] opacity-30 z-5',
    delay: 0.6
  },
  {
    src: '/93d04bc5327d143734f7a56cf1d99d48eea43f8f.png',
    className: 'absolute w-[677px] h-[414px] left-[288px] top-[86px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] z-20',
    delay: 0.1
  },
  {
    src: '/d91df14129315d82173a83caabbe862d7ce162ed.png',
    className: 'absolute w-[185px] h-[251px] left-[982px] top-[94px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] z-15',
    delay: 0.2
  },
  {
    src: '/658706ce012f5f5ae3f520fb444e8f5c86c06454.png',
    className: 'absolute w-[250px] h-[223px] left-[1184px] top-[181px] rounded-[16px] shadow-[0px_4px_15px_0px_rgba(255,255,255,0.2),0px_16px_30px_0px_rgba(255,255,255,0.1)] z-15',
    delay: 0.3
  }
];

export default function BowerGlimpseSection({
  theme = 'seed',
  title = 'Bower At A Glimpse',
  description = 'A quick look at what makes Bower a launchpad for future founders, innovators, and changemakers.',
  buttonText = 'Take a campus tour',
  images = DEFAULT_IMAGES
}: BowerGlimpseSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const currentTheme = GLIMPSE_THEMES[theme];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-white px-4 md:px-10 lg:px-[60px] py-8 md:py-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 md:gap-8 lg:gap-[34px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center text-center px-4 md:px-0">
          <h2
            className="text-[28px] md:text-[36px] lg:text-[44px] text-gray-900 font-semibold tracking-[-1px] md:tracking-[-1.4px] lg:tracking-[-1.76px] capitalize"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {title}
          </h2>
          <p
            className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 font-normal leading-[1.5] md:leading-[1.5] lg:leading-[30px] max-w-[800px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {description}
          </p>
        </div>

        {/* Image Collage Container - Mobile Grid / Desktop Absolute Positioning */}
        <div className="relative w-full lg:w-[1434px] h-auto lg:h-[735px] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden">
          {/* Mobile/Tablet Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:hidden">
            {images.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className={`relative aspect-[4/3] rounded-[12px] overflow-hidden transition-all duration-700 ease-out ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                  }`}
                style={{
                  transitionDelay: `${image.delay}s`
                }}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Desktop Absolute Positioning Layout */}
          <div className="hidden lg:block relative w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`${image.className} transition-all duration-700 ease-out ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                  }`}
                style={{
                  transitionDelay: `${image.delay}s`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  className="object-cover rounded-[16px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="relative flex items-center justify-center gap-2 md:gap-4 h-10 md:h-11 px-4 py-2 rounded-[8px] backdrop-blur-[32px] group transition-all duration-300"
          style={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: currentTheme.buttonBorder,
            background: currentTheme.buttonBg
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = currentTheme.buttonHoverBg;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = currentTheme.buttonBg;
          }}
        >
          <span
            className="font-medium leading-normal md:leading-[27px] transition-colors text-[16px] md:text-[18px]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: currentTheme.buttonText
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = currentTheme.buttonHoverText;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = currentTheme.buttonText;
            }}
          >
            {buttonText}
          </span>
        </button>
      </div>
    </section>
  );
}