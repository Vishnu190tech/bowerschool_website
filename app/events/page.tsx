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
import HeroCampusLife from "@/components/HeroCampusLife";
import CampusLifeGallery from "@/components/CampusLifeGallery";

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <HeroCampusLife
          heading="Moments That Spark Action, Connection, and Change"
          subheading="From high-energy demo days to founder talks, hackathons, and mixers — Bower's events turn ambition into experience and connections into opportunities."
          primaryButtonText="Explore Upcoming Events"
          primaryButtonLink="/events/upcoming/hello"
          secondaryButtonText="Past Highlights"
          secondaryButtonLink="/events/past/hello"
          backgroundImage="/49556a5f6b1bb2ee9725e2b3e7d008618e17b18b.png"
        />
        <CampusLifeGallery />
        <UpcomingEventsSection />
        <GuestSpeakerSection />
        <AlumniCTASection />
        <PastEventsSection />
        <Testimonials />
        <ContactFormSection />
        {/* <TestimonialQuoteSection/> */}
        {/* <EventGallerySection /> */}
        {/* <EventStatsSection /> */}
        {/* <OtherEventsSection /> */}
      </main>
      <Footer />
    </div>
  );
}