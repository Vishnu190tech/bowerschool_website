'use client';

import { useParams } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventHeroSection from "@/components/EventHeroSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import EventScheduleSection from "@/components/EventScheduleSection";
import EventLocationSection from "@/components/EventLocationSection";
import { useEvent } from '@/hooks/useEvents';

export default function EventsDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const { data: event, isLoading, error } = useEvent(slug);

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
  const hasSpeakers = event?.speakers && (
    typeof event.speakers === 'string' ? event.speakers.length > 2 : // More than just "[]"
    Array.isArray(event.speakers) && event.speakers.length > 0
  );

  const hasAgenda = event?.agenda && (
    typeof event.agenda === 'string' ? event.agenda.length > 2 : // More than just "{}"
    typeof event.agenda === 'object' && Object.keys(event.agenda).length > 0
  );

  const hasLocation = event?.location || event?.venue;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <EventHeroSection event={event} />
        {hasSpeakers && <EventDetailsSection event={event} />}
        {hasAgenda && <EventScheduleSection event={event} />}
        {hasLocation && <EventLocationSection event={event} />}
      </main>
      <Footer />
    </div>
  );
}