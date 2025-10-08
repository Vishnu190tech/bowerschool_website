'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMasterclasses } from '@/hooks/useEvents';

interface MasterclassHighlight {
  id: string | number;
  title: string;
  description: string;
  image: string;
  size: 'small' | 'large';
  slug?: string;
}

export default function MasterclassesHighlights() {
  const [mounted, setMounted] = useState(false);
  const { data: dbMasterclasses } = useMasterclasses();
  const [masterclasses, setMasterclasses] = useState<MasterclassHighlight[]>([]);

  // Default masterclasses data
  const defaultMasterclasses: MasterclassHighlight[] = [
    {
      id: 1,
      title: 'Beat the heat with Healthy Ice Creams',
      description: 'Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.',
      image: '/masterclasses/2c873d06e5c2d5a3f2687dec00c279ce90196cbd.png',
      size: 'small'
    },
    {
      id: 2,
      title: 'Beat the heat with Healthy Ice Creams',
      description: 'Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.',
      image: '/masterclasses/d0bcb4eefd26ea7f6fa48e061129c57ece27c445.png',
      size: 'large'
    },
    {
      id: 3,
      title: 'Beat the heat with Healthy Ice Creams',
      description: 'Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.',
      image: '/masterclasses/f4d3049d58d731d23c1304d8fa41f7a1a57339e7.png',
      size: 'large'
    },
    {
      id: 4,
      title: 'Beat the heat with Healthy Ice Creams',
      description: 'Guilt-free, refreshing, and made with real ingredients — your favorite summer treat just got a healthy upgrade.',
      image: '/masterclasses/dae706b329ac03dc88dc6f55c364173775145448.png',
      size: 'small'
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (dbMasterclasses && dbMasterclasses.length > 0) {
      // Filter published masterclasses, take first 4
      const highlights: MasterclassHighlight[] = dbMasterclasses
        .filter(mc => mc.isPublished)
        .slice(0, 4)
        .map((mc, index) => ({
          id: mc.id,
          slug: mc.slug,
          title: mc.title,
          description: mc.subtitle || (mc.description ? mc.description.substring(0, 150) + '...' : defaultMasterclasses[index]?.description || ''),
          image: mc.videoThumbnail || defaultMasterclasses[index]?.image || '/masterclasses/2c873d06e5c2d5a3f2687dec00c279ce90196cbd.png',
          size: (index === 0 || index === 3 ? 'small' : 'large') as 'small' | 'large'
        }));

      // If we have less than 4, fill with defaults
      while (highlights.length < 4 && highlights.length < defaultMasterclasses.length) {
        highlights.push(defaultMasterclasses[highlights.length]);
      }

      setMasterclasses(highlights);
    } else {
      setMasterclasses(defaultMasterclasses);
    }
  }, [dbMasterclasses]);

  if (!mounted) return null;

  // Ensure we always have 4 items
  const displayMasterclasses = masterclasses.length > 0 ? masterclasses : defaultMasterclasses;

  return (
    <div
      className="relative w-full min-h-screen bg-gradient-to-b from-[#060620] via-[#060620] to-[#05050e] px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col gap-6 sm:gap-8 md:gap-[34px] items-center overflow-hidden"
      data-name="Main Frame"
      data-node-id="415:86462"
    >
      {/* Background Effects */}
      {/* Bottom Lights (Rotated) */}
      <div
        className="absolute hidden lg:flex h-[1401.86px] items-center justify-center left-[-715px] mix-blend-hard-light top-[553px] w-[1693.86px]"
      >
        <div className="flex-none rotate-180">
          <div className="h-[1401.86px] relative w-[1693.86px]" data-name="Lights" data-node-id="415:86463">
            <Image
              src="/masterclasses/f679bbd5d53183467be7afe8a376d2c7888eca1f.svg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stars Background */}
      <div
        className="absolute h-[1438px] left-[-97.64%] right-[-97.85%] top-1/2 translate-y-[-50%] hidden lg:block"
        data-name="Stars"
        data-node-id="415:86467"
      >
        <Image
          src="/masterclasses/fb8c40c6c314e38b9bb9305d278f4c4ea4132ed2.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Additional Bottom Lights */}
      <div
        className="absolute hidden lg:flex h-[1401.86px] items-center justify-center left-[-715px] mix-blend-hard-light top-[553px] w-[1693.86px]"
      >
        <div className="flex-none rotate-180">
          <div className="h-[1401.86px] relative w-[1693.86px]" data-name="Lights" data-node-id="415:86643">
            <Image
              src="/masterclasses/550033158f0bf4f1e2a65d2b744b33bfe26be74d.svg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Top Lights */}
      <div
        className="absolute h-[1401.86px] left-[261.99px] mix-blend-hard-light top-[-473px] w-[1693.86px] hidden lg:block"
        data-name="Lights"
        data-node-id="415:86647"
      >
        <Image
          src="/masterclasses/9fd109337cdf39b5e6471ce5a4b9e65f204bc9da.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header Section */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative w-full max-w-[1280px] gap-4 z-10"
        data-node-id="415:86651"
      >
        <h2
          className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl md:text-[44px] font-semibold leading-normal text-white tracking-[-0.8px] sm:tracking-[-1.2px] md:tracking-[-1.76px] capitalize"
          data-node-id="415:86652"
        >
          Highlights From Our Past Masterclasses
        </h2>

        <Link href="/programs/masterclasses">
          <button
            className="backdrop-blur-[32px] backdrop-filter bg-gradient-to-r from-[rgba(17,24,39,0.05)] to-[rgba(17,24,39,0.05)] border border-white/50 rounded-lg h-10 sm:h-11 md:h-[44px] px-3 sm:px-4 flex gap-2 sm:gap-4 items-center justify-center relative overflow-hidden transition-all duration-200 hover:scale-105 active:scale-95"
            data-name="Secondary button xl (Dark Mode)"
            data-node-id="658:53039"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 0%, rgba(50, 50, 230, 0.4), rgba(50, 50, 230, 0) 100%)`
            }}
          >
            <span
              className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base md:text-lg font-medium leading-5 sm:leading-6 md:leading-[27px] text-white whitespace-nowrap"
              data-node-id="I658:53039;574:96077"
            >
              View all
            </span>
          </button>
        </Link>
      </div>

      {/* Masterclasses Grid */}
      <div
        className="flex flex-col gap-3 sm:gap-4 items-start relative w-full max-w-[1280px] z-10"
        data-name="Top Section"
        data-node-id="415:86657"
      >
        {/* First Row */}
        <div
          className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-center relative w-full"
          data-node-id="415:86658"
        >
          {/* Card 1 - Small */}
          {displayMasterclasses[0] && (
            <Link
              href={displayMasterclasses[0].slug ? `/programs/masterclasses/${displayMasterclasses[0].slug}` : '#'}
              className="w-full lg:w-[500px]"
            >
              <div
                className="bg-gradient-to-r from-[#1c1b1e] to-[#1c1b1e] border-2 border-white/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 flex flex-col gap-3 sm:gap-4 w-full lg:h-[500px] relative overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                data-name="Trekking Container"
                data-node-id="415:86659"
                style={{
                  backgroundImage: `radial-gradient(ellipse at 50% 100%, rgba(1, 1, 39, 0.2), rgba(1, 1, 75, 0.2) 25.5%, rgba(0, 0, 111, 0.2) 51%, rgba(1, 1, 75, 0.2) 75.5%, rgba(1, 1, 39, 0.2) 100%)`
                }}
              >
                <div
                  className="relative w-full aspect-[476/330] rounded-xl overflow-hidden"
                  data-node-id="415:86660"
                >
                  <div className="absolute inset-0 bg-[#252527]" />
                  <Image
                    src={displayMasterclasses[0].image}
                    alt={displayMasterclasses[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
                <div
                  className="flex flex-col gap-2 px-3 pb-6 flex-1"
                  data-node-id="415:86661"
                >
                  <h3
                    className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-semibold leading-normal text-white tracking-[-0.6px] sm:tracking-[-0.8px] md:tracking-[-0.96px]"
                    data-node-id="415:86662"
                  >
                    {displayMasterclasses[0].title}
                  </h3>
                  <p
                    className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-normal leading-5 sm:leading-6 text-gray-300"
                    data-node-id="415:86663"
                  >
                    {displayMasterclasses[0].description}
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 2 - Large */}
          {displayMasterclasses[1] && (
            <Link
              href={displayMasterclasses[1].slug ? `/programs/masterclasses/${displayMasterclasses[1].slug}` : '#'}
              className="flex-1 w-full"
            >
              <div
                className="bg-gradient-to-r from-[#1c1b1e] to-[#1c1b1e] border-2 border-white/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 flex flex-col gap-3 sm:gap-4 w-full lg:h-[500px] relative overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                data-name="Trekking Container"
                data-node-id="415:86664"
                style={{
                  backgroundImage: `radial-gradient(ellipse at 50% 100%, rgba(1, 1, 39, 0.2), rgba(1, 1, 75, 0.2) 25.5%, rgba(0, 0, 111, 0.2) 51%, rgba(1, 1, 75, 0.2) 75.5%, rgba(1, 1, 39, 0.2) 100%)`
                }}
              >
                <div
                  className="relative flex-1 w-full rounded-xl overflow-hidden min-h-[200px] sm:min-h-[250px]"
                  data-node-id="415:86665"
                >
                  <Image
                    src={displayMasterclasses[1].image}
                    alt={displayMasterclasses[1].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 764px"
                  />
                </div>
                <div
                  className="flex flex-col gap-2 px-3 pb-6 h-[130px]"
                  data-node-id="415:86666"
                >
                  <h3
                    className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-semibold leading-normal text-white tracking-[-0.6px] sm:tracking-[-0.8px] md:tracking-[-0.96px]"
                    data-node-id="415:86667"
                  >
                    {displayMasterclasses[1].title}
                  </h3>
                  <p
                    className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-normal leading-5 sm:leading-6 text-gray-300"
                    data-node-id="415:86668"
                  >
                    {displayMasterclasses[1].description}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Second Row */}
        <div
          className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-center relative w-full"
          data-node-id="415:86669"
        >
          {/* Card 3 - Large */}
          {displayMasterclasses[2] && (
            <Link
              href={displayMasterclasses[2].slug ? `/programs/masterclasses/${displayMasterclasses[2].slug}` : '#'}
              className="flex-1 w-full"
            >
              <div
                className="bg-gradient-to-r from-[#1c1b1e] to-[#1c1b1e] border-2 border-white/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 flex flex-col gap-3 sm:gap-4 w-full lg:h-[500px] relative overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                data-name="Trekking Container"
                data-node-id="415:86687"
                style={{
                  backgroundImage: `radial-gradient(ellipse at 50% 100%, rgba(1, 1, 39, 0.2), rgba(1, 1, 75, 0.2) 25.5%, rgba(0, 0, 111, 0.2) 51%, rgba(1, 1, 75, 0.2) 75.5%, rgba(1, 1, 39, 0.2) 100%)`
                }}
              >
                <div
                  className="relative flex-1 w-full rounded-xl overflow-hidden min-h-[200px] sm:min-h-[250px]"
                  data-node-id="415:86688"
                >
                  <Image
                    src={displayMasterclasses[2].image}
                    alt={displayMasterclasses[2].title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 764px"
                  />
                </div>
                <div
                  className="flex flex-col gap-2 px-3 pb-6 h-[130px]"
                  data-node-id="415:86689"
                >
                  <h3
                    className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-semibold leading-normal text-white tracking-[-0.6px] sm:tracking-[-0.8px] md:tracking-[-0.96px]"
                    data-node-id="415:86690"
                  >
                    {displayMasterclasses[2].title}
                  </h3>
                  <p
                    className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-normal leading-5 sm:leading-6 text-gray-300"
                    data-node-id="415:86691"
                  >
                    {displayMasterclasses[2].description}
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Card 4 - Small */}
          {displayMasterclasses[3] && (
            <Link
              href={displayMasterclasses[3].slug ? `/programs/masterclasses/${displayMasterclasses[3].slug}` : '#'}
              className="w-full lg:w-[500px]"
            >
              <div
                className="bg-gradient-to-r from-[#1c1b1e] to-[#1c1b1e] border-2 border-white/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 flex flex-col gap-3 sm:gap-4 w-full lg:h-[500px] relative overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                data-name="Trekking Container"
                data-node-id="415:86681"
                style={{
                  backgroundImage: `radial-gradient(ellipse at 50% 100%, rgba(1, 1, 39, 0.2), rgba(1, 1, 75, 0.2) 25.5%, rgba(0, 0, 111, 0.2) 51%, rgba(1, 1, 75, 0.2) 75.5%, rgba(1, 1, 39, 0.2) 100%)`
                }}
              >
                <div
                  className="relative w-full aspect-[476/330] rounded-xl overflow-hidden"
                  data-node-id="415:86682"
                >
                  <div className="absolute inset-0 bg-[#252527]" />
                  <Image
                    src={displayMasterclasses[3].image}
                    alt={displayMasterclasses[3].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
                <div
                  className="flex flex-col gap-2 px-3 pb-6 flex-1"
                  data-node-id="415:86683"
                >
                  <h3
                    className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl md:text-2xl font-semibold leading-normal text-white tracking-[-0.6px] sm:tracking-[-0.8px] md:tracking-[-0.96px]"
                    data-node-id="415:86684"
                  >
                    {displayMasterclasses[3].title}
                  </h3>
                  <p
                    className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-normal leading-5 sm:leading-6 text-gray-300"
                    data-node-id="415:86685"
                  >
                    {displayMasterclasses[3].description}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}