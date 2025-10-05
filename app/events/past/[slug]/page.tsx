'use client';

import { useParams } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventGallerySection from "@/components/EventGallerySection";
import EventStatsSection from "@/components/EventStatsSection";
import BuildDayHeroSection from "@/components/BuildDayHeroSection";
import TestimonialQuoteSection from "@/components/TestimonialQuoteSection";
import SpeakersAndMentorsSection from "@/components/SpeakersAndMentorsSection";
import PastEventsSection from "@/components/PastEventsSection";
import { usePastEvent } from '@/hooks/useEvents';
import OtherEventsSection from '@/components/OtherEventsSection';
import ContactFormSection from '@/components/ContactFormSection';

export default function PastEventDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const { data: event, isLoading, error } = usePastEvent(slug);

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

  if (error || !event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="flex items-center justify-center h-[600px]">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
              <p className="text-gray-600">The event you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Check if sections have data
  const hasGalleryImages = event.galleryImages && Array.isArray(event.galleryImages) && event.galleryImages.length > 0;
  const hasSpeakers = event.speakers && Array.isArray(event.speakers) && event.speakers.length > 0;
  const hasTestimonials = event.testimonials && Array.isArray(event.testimonials) && event.testimonials.length > 0;
  const hasStats = event.stats && Object.keys(event.stats).length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <BuildDayHeroSection event={{
          title: event.title,
          subtitle: event.subtitle,
          date: event.date,
          category: event.category
        }} />

        {hasGalleryImages && (
          <EventGallerySection event={{
            date: event.date,
            galleryImages: event.galleryImages
          }} />
        )}

        {hasSpeakers && (
          <SpeakersAndMentorsSection speakers={event.speakers} />
        )}

        {hasTestimonials && (
          <TestimonialQuoteSection testimonials={event.testimonials} />
        )}

        {hasStats && (
          <EventStatsSection stats={event.stats} />
        )}


        <OtherEventsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}