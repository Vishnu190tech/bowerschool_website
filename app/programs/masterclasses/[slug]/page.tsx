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
import { useMasterclass } from '@/hooks/useEvents';

const MasterclassDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  // Fetch masterclass data from database
  const { data: masterclass, isLoading, error } = useMasterclass(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="flex items-center justify-center h-[600px]">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-64"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !masterclass) {
    // Fallback to default data if masterclass not found
    const defaultData = {
      title: 'UX for Founders – Live Masterclass',
      subtitle: 'Learn how to design user experiences that convert',
      date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      videoThumbnail: '/ae69c7fdf8c9a2009b7d3191d66607b985367a4e.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'BowerClass',
      learningOutcomes: null,
      galleryImages: null,
      studentPortalConfig: null,
      assignmentDetails: null,
    };

    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <MasterclassHeroSection
            breadcrumb={{ category: defaultData.category }}
            title={defaultData.title}
            sessionDate={new Date(defaultData.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
            videoThumbnail={defaultData.videoThumbnail}
            videoUrl={defaultData.videoUrl}
          />
          <MasterclassLearnSection />
          <BowerNetworkSection />
          <MasterclassGallerySection />
          <MasterclassStudentPortal />
          <OtherMasterclassesSection />
        </main>
        <Footer />
      </div>
    );
  }

  // Format date
  const formattedDate = new Date(masterclass.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <MasterclassHeroSection
          breadcrumb={{ category: masterclass.category }}
          title={masterclass.title}
          sessionDate={formattedDate}
          videoThumbnail={masterclass.videoThumbnail || '/ae69c7fdf8c9a2009b7d3191d66607b985367a4e.png'}
          videoUrl={masterclass.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
        />

        {/* Always show learning section - component has its own default data */}
        <MasterclassLearnSection learningOutcomes={masterclass.description} />

        <BowerNetworkSection sectionTitle='Learning Outcomes' stats={(masterclass as any).networkStats} />

        {/* Show gallery only if images exist */}
        {masterclass.galleryImages && masterclass.galleryImages.length > 0 && (
          <MasterclassGallerySection images={masterclass.galleryImages} />
        )}

        {/* Student portal with dynamic config */}
        <MasterclassStudentPortal
          config={masterclass.studentPortalConfig}
          assignmentDetails={masterclass.assignmentDetails}
          registrationCode={masterclass.registrationCode}
        />

        <OtherMasterclassesSection currentSlug={slug} />
      </main>

      <Footer />
    </div>
  );
};

export default MasterclassDetailPage;