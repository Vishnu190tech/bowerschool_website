'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MakeYourselfAtHomeSection = () => {
  const polaroidImages = [
    {
      id: 1,
      src: '/97db6f761e8357c5406d3b4c54e9f6448e4f6158.png',
      caption: 'Polaroid SX-70 Format',
      rotation: -15,
      x: 38,
      y: 82,
      width: 364,
      height: 425,
      delay: 0
    },
    {
      id: 2,
      src: '/4120731faf7c21510b62261ac2cee26af098f7ee.png',
      caption: 'Fujifilm Instax Mini',
      rotation: 12,
      x: 668,
      y: 54,
      width: 250,
      height: 251,
      delay: 0.1
    },
    {
      id: 3,
      src: '/1306883bb6638eb34ae31eabba52f09838f75c9f.png',
      caption: 'Kodak Printomatic',
      rotation: -8,
      x: 1109,
      y: 48,
      width: 370,
      height: 430,
      delay: 0.2
    },
    {
      id: 4,
      src: '/54eef75d691272d957732e855dc91cb200d486c1.png',
      caption: 'Polaroid SX-70 Format',
      rotation: 10,
      x: 67,
      y: 589,
      width: 223,
      height: 224,
      delay: 0.3
    },
    {
      id: 5,
      src: '/59a3e41c2b4801f75e2a8fdd542b15e36bbfbf72.png',
      caption: 'Polaroid SX-70 Format',
      rotation: -12,
      x: 326,
      y: 632,
      width: 215,
      height: 218,
      delay: 0.4
    },
    {
      id: 6,
      src: '/6a2128e8688e77560f23bdbee793bd79a24e5018.png',
      caption: 'Polaroid SX-70 Format',
      rotation: 15,
      x: 657,
      y: 598,
      width: 394,
      height: 448,
      delay: 0.5
    },
    {
      id: 7,
      src: '/6b00f77d3577d0e95335cc583790c7f944ff397f.png',
      caption: 'Polaroid SX-70 Format',
      rotation: -5,
      x: 1090,
      y: 539,
      width: 270,
      height: 304,
      delay: 0.6
    }
  ];

  return (
    <section 
      className="relative w-full overflow-hidden py-20 md:py-32"
      style={{
        background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)'
      }}
    >
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {/* Stars - using deterministic values based on index */}
        {[...Array(100)].map((_, i) => {
          // Use deterministic calculations based on index
          const size = ((i * 7) % 3) + 1;
          const left = ((i * 13) % 100);
          const top = ((i * 17) % 100);
          const delay = ((i * 11) % 30) / 10;
          const duration = ((i * 7) % 20) / 10 + 2;
          const opacity = ((i * 3) % 8) / 10 + 0.2;
          
          return (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                opacity: opacity
              }}
            />
          );
        })}
        
        {/* Light gradients */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '80px',
              fontWeight: 700,
              lineHeight: '80px',
              color: '#ffffff'
            }}
          >
            Make yourself at home
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-plus-jakarta)',
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: '24px',
              color: '#ffffff',
              opacity: 0.9
            }}
          >
            Find like minded people, create a life you&apos;ll never forget
          </motion.p>
        </div>

        {/* Floating Polaroid Images */}
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
          {polaroidImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                rotate: image.rotation 
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                rotate: image.rotation
              }}
              transition={{ 
                duration: 0.6,
                delay: image.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: image.rotation + 5,
                zIndex: 20
              }}
              className="absolute cursor-pointer"
              style={{
                left: `${(image.x / 1440) * 100}%`,
                top: `${(image.y / 900) * 100}%`,
                width: `${image.width}px`,
                maxWidth: `${(image.width / 1440) * 100}vw`
              }}
            >
              {/* Polaroid Frame */}
              <div 
                className="bg-white rounded-2xl p-3 shadow-2xl"
                style={{
                  transform: `rotate(${image.rotation}deg)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                {/* Image */}
                <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-square">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Caption */}
                <p className="mt-3 text-center text-sm font-medium text-gray-700" style={{
                  fontFamily: 'var(--font-plus-jakarta)'
                }}>
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-3 h-3 bg-white rounded-full opacity-40"
        />
      </div>
    </section>
  );
};

export default MakeYourselfAtHomeSection;