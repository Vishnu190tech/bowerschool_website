import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MentorshipSection from "@/components/MentorshipSection";
import OrbitalHero from "@/components/OrbitalHero";
import HeroSection from "@/components/HeroSection";
import CampusVideoSection from "@/components/CampusVideoSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import QuizCTASection from "@/components/QuizCTASection";
import MeetOurLearnersSection from "@/components/MeetOurLearnersSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import StartupInvestorSection from "@/components/StartupInvestorSection";
import ClubsActivitiesSection from "@/components/ClubsActivitiesSection";
import CommunitySection from "@/components/CommunitySection";
import NewsSection from "@/components/NewsSection";
import ScholarshipFormSection from "@/components/ScholarshipFormSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Hero />
      {/* <MentorshipSection />
      <OrbitalHero /> */}
      <HeroSection />
      <CampusVideoSection />
      <VideoShowcaseSection />
      <QuizCTASection />
      <MeetOurLearnersSection />
      <UpcomingEventsSection />
      <StartupInvestorSection />
      <ClubsActivitiesSection />
      <CommunitySection />
      <NewsSection />
      <ScholarshipFormSection />

      <Footer />
    </div>
  );
}
