'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MasterclassHeroSection from '@/components/MasterclassHeroSection';
import MasterclassLearnSection from '@/components/MasterclassLearnSection';
import MasterclassGallerySection from '@/components/MasterclassGallerySection';
import MasterclassStudentPortal from '@/components/MasterclassStudentPortal';
import OtherMasterclassesSection from '@/components/OtherMasterclassesSection';
import BowerNetworkSection from '@/components/BowerNetworkSection';
import ContactFormSection from '@/components/ContactFormSection';

interface MasterclassData {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  videoThumbnail: string;
  category: string;
}

// Sample data - in production, this would come from an API or CMS
const masterclassesData: { [key: string]: MasterclassData } = {
  'ux-for-founders': {
    slug: 'ux-for-founders',
    title: 'UX for Founders – Live Masterclass',
    subtitle: 'Learn how to design user experiences that convert',
    date: 'July 2, 2025',
    videoThumbnail: '/ae69c7fdf8c9a2009b7d3191d66607b985367a4e.png',
    category: 'BowerClass'
  },
  'growth-hacking': {
    slug: 'growth-hacking',
    title: 'Growth Hacking Strategies',
    subtitle: 'Scale your startup with proven growth tactics',
    date: 'August 15, 2025',
    videoThumbnail: '/ae69c7fdf8c9a2009b7d3191d66607b985367a4e.png',
    category: 'BowerClass'
  },
  'fundraising-101': {
    slug: 'fundraising-101',
    title: 'Fundraising 101',
    subtitle: 'Master the art of raising capital',
    date: 'September 3, 2025',
    videoThumbnail: '/ae69c7fdf8c9a2009b7d3191d66607b985367a4e.png',
    category: 'BowerClass'
  }
};

const MasterclassDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  // Get masterclass data based on slug
  const masterclass = masterclassesData[slug] || masterclassesData['ux-for-founders'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <MasterclassHeroSection
          breadcrumb={{ category: masterclass.category }}
          title={masterclass.title}
          sessionDate={masterclass.date}
          videoThumbnail={masterclass.videoThumbnail}
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />

        <MasterclassLearnSection />

        <BowerNetworkSection />
        <MasterclassGallerySection />
        <MasterclassStudentPortal />
        <OtherMasterclassesSection />
        <ContactFormSection />

      </main>

      <Footer />
    </div>
  );
};

export default MasterclassDetailPage;