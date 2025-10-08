'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';

// Theme Configuration
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface NewsTheme {
  primary: string;
  secondary: string;
  bgColor: string;
  cardBg: string;
  titleColor: string;
  textColor: string;
  categoryColor: string;
  dateColor: string;
  hoverColor: string;
  buttonBorder: string;
  buttonBg: string;
  buttonText: string;
  buttonHoverBg: string;
  buttonHoverText: string;
  gradientFrom: string;
  gradientTo: string;
}

const NEWS_THEMES: Record<ThemeType, NewsTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    bgColor: '#f9fafb',
    cardBg: '#ffffff',
    titleColor: '#111827',
    textColor: '#4b5563',
    categoryColor: '#6b7280',
    dateColor: '#6b7280',
    hoverColor: '#3232e6',
    buttonBorder: '#3232e6',
    buttonBg: '#ffffff',
    buttonText: '#3232e6',
    buttonHoverBg: '#3232e6',
    buttonHoverText: '#ffffff',
    gradientFrom: '#ffffff',
    gradientTo: 'rgba(50, 50, 230, 0.1)',
  },
  lead: {
    primary: '#A8F326',
    secondary: '#8FD920',
    bgColor: '#f9fafb',
    cardBg: '#ffffff',
    titleColor: '#111827',
    textColor: '#4b5563',
    categoryColor: '#6b7280',
    dateColor: '#6b7280',
    hoverColor: '#8FD920',
    buttonBorder: '#8FD920',
    buttonBg: '#ffffff',
    buttonText: '#8FD920',
    buttonHoverBg: '#8FD920',
    buttonHoverText: '#000000',
    gradientFrom: '#ffffff',
    gradientTo: 'rgba(168, 243, 38, 0.1)',
  },
  seed: {
    primary: '#FF8829',
    secondary: '#FFBF29',
    bgColor: '#f9fafb',
    cardBg: '#ffffff',
    titleColor: '#111827',
    textColor: '#4b5563',
    categoryColor: '#6b7280',
    dateColor: '#6b7280',
    hoverColor: '#FF8829',
    buttonBorder: '#FF8829',
    buttonBg: '#ffffff',
    buttonText: '#FF8829',
    buttonHoverBg: '#FF8829',
    buttonHoverText: '#ffffff',
    gradientFrom: '#ffffff',
    gradientTo: 'rgba(255, 136, 41, 0.1)',
  },
  ug: {
    primary: '#4242FF',
    secondary: '#3232e6',
    bgColor: '#f9fafb',
    cardBg: '#ffffff',
    titleColor: '#111827',
    textColor: '#4b5563',
    categoryColor: '#6b7280',
    dateColor: '#6b7280',
    hoverColor: '#4242ff',
    buttonBorder: '#4242ff',
    buttonBg: '#ffffff',
    buttonText: '#4242ff',
    buttonHoverBg: '#4242ff',
    buttonHoverText: '#ffffff',
    gradientFrom: '#ffffff',
    gradientTo: 'rgba(66, 66, 255, 0.1)',
  },
};

interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  type: 'featured' | 'regular';
}

interface NewsSectionProps {
  theme?: ThemeType;
  title?: string;
  newsItems?: NewsItem[];
  buttonText?: string;
  onButtonClick?: () => void;
}

const DEFAULT_NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    category: 'ECONOMIC TIMES',
    title: 'Changes in entrepreneurial landscape in india',
    date: '15 September, 2024',
    image: '/906fd3ae193adbf8b5fab728fb9ad3afc98681da.png',
    type: 'featured'
  },
  {
    id: 2,
    category: 'Medium',
    title: 'Learnings and Lessons from my first start-up',
    date: '27 August, 2024',
    image: '/38d8a907a9f5c7561f1487ca7e77ffbccdd018e2.png',
    type: 'regular'
  },
  {
    id: 3,
    category: 'Medium',
    title: 'Exploring Innovative Marketing Strategies for Start-ups',
    date: '3 October, 2024',
    image: '/876991a46eee1d85ed35e1fa6a9c0ee700d52a6b.png',
    type: 'regular'
  },
  {
    id: 4,
    category: 'Medium',
    title: 'Navigating the Challenges of Remote Team Management',
    date: '15 September, 2024',
    image: '/673cca7584f2192362b0038601afa35eb5935631.png',
    type: 'regular'
  }
];

export default function NewsSection({
  theme = 'ug',
  title = 'What Made it to the news!',
  newsItems = DEFAULT_NEWS_ITEMS,
  buttonText = 'View All',
  onButtonClick
}: NewsSectionProps) {
  const currentTheme = NEWS_THEMES[theme];
  return (
    <section
      className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20"
      style={{ backgroundColor: currentTheme.bgColor }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-center lg:text-left"
          style={{ color: currentTheme.titleColor }}
        >
          {title}
        </motion.h2>

        {/* Desktop Grid - Hidden on mobile */}
        <div
          className="hidden p-6 rounded-3xl lg:grid grid-cols-1 lg:grid-cols-2 gap-8"
          style={{
            background: `linear-gradient(to bottom, ${currentTheme.gradientFrom}, ${currentTheme.gradientFrom}, ${currentTheme.gradientTo})`
          }}
        >
          {/* Featured Article - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group cursor-pointer"
          >
            <div className="  overflow-hidden hover:rounded-3xl hover:shadow-xl transition-shadow">
              {/* Featured Image */}
              <div className="relative h-[300px] md:h-[360px] overflow-hidden">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content - Below the image */}
              <div className="p-6">
                <span
                  className="text-xs uppercase font-medium tracking-wider"
                  style={{ color: currentTheme.categoryColor }}
                >
                  {newsItems[0].category}
                </span>
                <h3
                  className="text-xl font-semibold mt-2 mb-3 line-clamp-2"
                  style={{ color: currentTheme.titleColor }}
                >
                  {newsItems[0].title}
                </h3>
                <div className="flex items-center gap-2 text-sm" style={{ color: currentTheme.dateColor }}>
                  <CalendarIcon className="w-4 h-4" />
                  <span>{newsItems[0].date}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regular Articles - Right Column */}
          <div className="flex flex-col gap-6">
            {newsItems.filter(item => item.type === 'regular').map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div
                  className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: currentTheme.cardBg }}
                >
                  <div className="flex gap-4 p-4">
                    {/* Thumbnail */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <span
                          className="text-xs font-medium uppercase"
                          style={{ color: currentTheme.categoryColor }}
                        >
                          {item.category}
                        </span>
                        <h3
                          className="text-base md:text-lg font-semibold mt-1 line-clamp-2 transition-colors"
                          style={{ color: currentTheme.titleColor }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = currentTheme.hoverColor;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = currentTheme.titleColor;
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-2" style={{ color: currentTheme.dateColor }}>
                        <CalendarIcon className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="lg:hidden">
          {/* Scrollable container */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 w-max">
              {/* Featured Card */}
              {/* <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[280px] flex-shrink-0"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-[200px]">
                    <Image
                      src={newsItems[0].image}
                      alt={newsItems[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs text-white/80 uppercase">{newsItems[0].category}</span>
                      <h3 className="text-lg font-semibold text-white mt-1 line-clamp-2">
                        {newsItems[0].title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-white/70 mt-2">
                        <CalendarIcon className="w-3 h-3" />
                        <span>{newsItems[0].date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div> */}

              {/* Regular Cards */}
              {newsItems
                // .filter(item => item.type === 'regular')
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    className="w-[280px] flex-shrink-0"
                  >
                    <div
                      className="rounded-xl overflow-hidden shadow-lg h-full"
                      style={{ backgroundColor: currentTheme.cardBg }}
                    >
                      <div className="relative h-[200px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs uppercase" style={{ color: currentTheme.categoryColor }}>
                          {item.category}
                        </span>
                        <h3
                          className="text-base font-semibold mt-1 line-clamp-2"
                          style={{ color: currentTheme.titleColor }}
                        >
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs mt-3" style={{ color: currentTheme.dateColor }}>
                          <CalendarIcon className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* View All Button - Mobile */}
          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl font-medium border-2 transition-colors"
              style={{
                backgroundColor: currentTheme.buttonBg,
                color: currentTheme.buttonText,
                borderColor: currentTheme.buttonBorder
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = currentTheme.buttonHoverBg;
                e.currentTarget.style.color = currentTheme.buttonHoverText;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = currentTheme.buttonBg;
                e.currentTarget.style.color = currentTheme.buttonText;
              }}
              onClick={onButtonClick}
            >
              {buttonText}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}