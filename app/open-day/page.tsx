import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnershipSection from "@/components/PartnershipSection";
import VideoCarouselSection from "@/components/VideoCarouselSection";
import PartnerCTASection from "@/components/PartnerCTASection";
import Testimonials from "@/components/Testimonials";
import ContactFormSection from "@/components/ContactFormSection";
import LearningComparisonSection from "@/components/LearningComparisonSection";
import MentorshipHeroSection from "@/components/MentorshipHeroSection";
import LogoTicker from "@/components/LogoTicker";
import CampusDaySection from "@/components/CampusDaySection";
import CampusLocationSection from "@/components/CampusLocationSection";
import ClubsSection from "@/components/ClubsSection";
import BowerJourneySection from "@/components/BowerJourneySection";
import ExperienceSection from "@/components/ExperienceSection";
import AlumniNetworkSection from "@/components/AlumniNetworkSection";
import BuildDayHeroSection from "@/components/BuildDayHeroSection";
import BEATResourcesSection from "@/components/BEATResourcesSection";
import OpenDayHeroSection from "@/components/OpenDayHeroSection";
import BowerNetworkSection from "@/components/BowerNetworkSection";

export default function openDayPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />
      <OpenDayHeroSection />
      <BowerNetworkSection />
      <ExperienceSection />
      <CampusDaySection />
      <CampusLocationSection />
      <BEATResourcesSection />
      <ClubsSection />
      <BowerJourneySection />

      <Footer />
    </div>
  );
}