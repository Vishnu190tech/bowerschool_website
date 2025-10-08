'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface MasterclassGallerySectionProps {
  title?: string;
  images?: GalleryImage[] | string[] | any;
}

const MasterclassGallerySection = ({
  title = 'Gallery / Recap',
  images
}: MasterclassGallerySectionProps) => {
  // Default images if none provided
  const defaultImages = [
    {
      src: '/4a56a7d4af350130e8e341d4f0e64a9c51be455f.png',
      alt: 'Participants listening to instructor',
      title: 'Event Photo 1'
    },
    {
      src: '/499c4072dea58cc397f4e93d385115cd1bd17527.png',
      alt: 'Participants in discussion',
      title: 'Event Photo 2'
    },
    {
      src: '/6846846b5a1acd9b099c2d433b2a6ad87c1fbc9f.png',
      alt: 'Masterclass session',
      title: 'Event Photo 3'
    },
    {
      src: '/78a973aab5c33c1aad6114482cc04ce9b6acdde3.png',
      alt: 'UX design workshop',
      title: 'Event Photo 4'
    },
    {
      src: '/781c1f749d8e94f666f983a7b5ba95d16e82ad4c.png',
      alt: 'Live UX masterclass',
      title: 'Event Photo 5'
    },
    {
      src: '/b2885f75b0f1d64ec8095da16859a9e2165edfaf.png',
      alt: 'Masterclass session',
      title: 'Event Photo 6'
    },
    {
      src: '/c50ab5c9d388240f1e642f37136dc305eb00394b.png',
      alt: 'UX design masterclass',
      title: 'Event Photo 7'
    },
    {
      src: '/6ea5eb6661a89fdb484937f73e1ab98dd984781e.png',
      alt: 'UX masterclass with projector',
      title: 'Event Photo 8'
    },
    {
      src: '/90df07fd3596d73247588d56b93f9c6bb1737864.png',
      alt: 'UX design discussion',
      title: 'Event Photo 9'
    }
  ];

  // Process images - handle both string arrays and object arrays
  const processedImages = (() => {
    if (!images || (Array.isArray(images) && images.length === 0)) {
      return defaultImages;
    }

    if (Array.isArray(images)) {
      return images.map((img, index) => {
        if (typeof img === 'string') {
          return {
            src: img,
            alt: `Gallery Image ${index + 1}`,
            title: `Event Photo ${index + 1}`
          };
        }
        return {
          src: img.src || img.url || img,
          alt: img.alt || `Gallery Image ${index + 1}`,
          title: img.title || `Event Photo ${index + 1}`
        };
      });
    }

    return defaultImages;
  })();
  // Split images into rows of 3
  const rows = [];
  for (let i = 0; i < processedImages.length; i += 3) {
    rows.push(processedImages.slice(i, i + 3));
  }

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 xl:py-[80px]">
      {/* Dark gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(rgba(6, 6, 32, 0.5) 0%, rgba(6, 6, 32, 0.5) 28.365%, rgba(6, 6, 32, 0.5) 55.288%, rgba(6, 6, 32, 0.5) 75.962%, rgba(5, 5, 14, 0.5) 100%), linear-gradient(rgb(24, 26, 28) 0%, rgb(24, 26, 28) 28.365%, rgb(0, 5, 15) 55.288%, rgb(24, 26, 28) 75.962%, rgb(24, 26, 28) 100%)'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Stars */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Light effects - Adjusted for responsive */}
        <div className="absolute -left-[50%] md:-left-[715px] top-[200px] md:top-[553px] w-[800px] md:w-[1693.86px] h-[600px] md:h-[1401.86px] mix-blend-hard-light opacity-40">
          <div className="relative w-full h-full rotate-180">
            <Image
              src="/f679bbd5d53183467be7afe8a376d2c7888eca1f.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="absolute -right-[50%] md:-left-[715px] top-[400px] md:top-[553px] w-[800px] md:w-[1693.86px] h-[600px] md:h-[1401.86px] mix-blend-hard-light opacity-40">
          <div className="relative w-full h-full rotate-180">
            <Image
              src="/550033158f0bf4f1e2a65d2b744b33bfe26be74d.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="absolute left-[10%] md:left-[261.99px] -top-[200px] md:-top-[473px] w-[800px] md:w-[1693.86px] h-[600px] md:h-[1401.86px] mix-blend-hard-light opacity-40">
          <Image
            src="/9fd109337cdf39b5e6471ce5a4b9e65f204bc9da.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[44px] font-semibold text-white capitalize tracking-[-0.96px] md:tracking-[-1.28px] lg:tracking-[-1.6px] xl:tracking-[-1.76px] mb-6 md:mb-8 lg:mb-10 xl:mb-12"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {title}
        </motion.h2>

        {/* Image Grid */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: rowIndex * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-7"
            >
              {row.map((image, imageIndex) => (
                <div
                  key={`${rowIndex}-${imageIndex}`}
                  className="group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative h-[140px] md:h-[230px] lg:h-[260px] xl:h-[280px] rounded-[12px] md:rounded-[14px] lg:rounded-[16px] overflow-hidden mb-3 md:mb-4 lg:mb-[18px]">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Image Title */}
                  <div className="text-white">
                    <h3
                      className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold tracking-[-0.64px] md:tracking-[-0.72px] lg:tracking-[-0.8px] xl:tracking-[-0.96px] mb-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {image.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --gallery-bg-dark: #181a1c;
          --gallery-bg-darker: #00050f;
          --gallery-bg-overlay: rgba(6, 6, 32, 0.5);
          --gallery-text-white: #ffffff;
          --gallery-border-radius: 16px;
        }

        @media (max-width: 768px) {
          .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default MasterclassGallerySection;