import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import CampusVideoSection from "@/components/CampusVideoSection";
import StartupInvestorSection from "@/components/StartupInvestorSection";
import NewsSection from "@/components/NewsSection";
import CommunitySection from "@/components/CommunitySection";
import ClubsActivitiesSection from "@/components/ClubsActivitiesSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import MeetOurLearnersSection from "@/components/MeetOurLearnersSection";
import QuizCTASection from "@/components/QuizCTASection";
import ScholarshipFormSection from "@/components/ScholarshipFormSection";
import Footer from "@/components/Footer";
import OrbitalHero from "@/components/OrbitalHero";
import Hero from "@/components/Hero";
import MentorshipSection from "@/components/MentorshipSection";
import OverviewSection from "@/components/OverviewSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ProfileCard from "@/components/ProfileCard";
import ApplicationBanner from "@/components/ApplicationBanner";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import EntrepreneurshipHero from "@/components/EntrepreneurshipHero";
import TrustedBySchools from "@/components/TrustedBySchools";

export default function Home() {
  // Force recompile
  return (
    <div className="min-h-screen flex flex-col">

      <Header />
      <Hero />
      <EntrepreneurshipHero />
      <OrbitalHero />
      <HeroSection />
      <TrustedBySchools />
      <MentorshipSection />
      <OverviewSection />
      <HowItWorks />
      <WhyPartnerSection />
      <Testimonials />
      <ProfileCard />
      <ApplicationBanner />

      <main className="flex-1 bg-gray-50">
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
      </main>

      <Footer />
    </div>
  );
}
