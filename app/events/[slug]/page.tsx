import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import PastEventsSection from "@/components/PastEventsSection";
import EventGallerySection from "@/components/EventGallerySection";
import EventStatsSection from "@/components/EventStatsSection";
import OtherEventsSection from "@/components/OtherEventsSection";
import BuildDayHeroSection from "@/components/BuildDayHeroSection";
import GuestSpeakerSection from "@/components/GuestSpeakerSection";
import MentorshipHeroSection from "@/components/MentorshipHeroSection";
import Testimonials from "@/components/Testimonials";
import ContactFormSection from "@/components/ContactFormSection";
import AlumniCTASection from "@/components/AlumniCTASection";
import TestimonialQuoteSection from "@/components/TestimonialQuoteSection";
import SpeakersAndMentorsSection from "@/components/SpeakersAndMentorsSection";

export default function EventsDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <BuildDayHeroSection />
        {/* <UpcomingEventsSection />
        <GuestSpeakerSection />
        <AlumniCTASection />
        <PastEventsSection />
        <Testimonials />
        <ContactFormSection /> */}
        <EventGallerySection />
        <SpeakersAndMentorsSection />
        <TestimonialQuoteSection />

        <EventStatsSection />
        <OtherEventsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}