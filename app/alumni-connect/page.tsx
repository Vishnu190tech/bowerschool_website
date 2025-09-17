import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampusTourSection from "@/components/CampusTourSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import WellnessSection from "@/components/WellnessSection";
import CampusLocationSection from "@/components/CampusLocationSection";
import CampusDaySection from "@/components/CampusDaySection";
import MakeYourselfAtHomeSection from "@/components/MakeYourselfAtHomeSection";
import ClubsSection from "@/components/ClubsSection";
import ClubsActivitiesSection from "@/components/ClubsActivitiesSection";
import ExperienceSection from "@/components/ExperienceSection";
import MentorshipHeroSection from "@/components/MentorshipHeroSection";
import BuildDayHeroSection from "@/components/BuildDayHeroSection";
import AlumniCTASection from "@/components/AlumniCTASection";
import Testimonials from "@/components/Testimonials";
import ContactFormSection from "@/components/ContactFormSection";
import FAQSection from "@/components/FAQSection";
import StudentPitchSection from "@/components/StudentPitchSection";
import BenefitsSection from "@/components/BenefitsSection";
import AlumniVoicesSection from "@/components/AlumniVoicesSection";
import AlumniNetworkSection from "@/components/AlumniNetworkSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import HeroCampusLife from "@/components/HeroCampusLife";
import JoinAlumniSection from "@/components/JoinAlumniSection";
import BowerNetworkSection from "@/components/BowerNetworkSection";
import CampusLifeGallery from "@/components/CampusLifeGallery";

export default function CampusLifePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroCampusLife
        heading="From Bower To Beyond: A Builder's Forever Network"
        subheading="Stay connected with a thriving network of alumni driving impact across startups, corporates, and global ventures."
        primaryButtonText="Join the Alumni Network"
        primaryButtonLink="/campus-tour"
        secondaryButtonText="Alumni Events"
        secondaryButtonLink="/download-brochure"
        backgroundImage="/alumni-connect-header.webp"
      />
      <BowerNetworkSection />
      <ExperienceSection />
      <AlumniCTASection />

      <UpcomingEventsSection />
      <JoinAlumniSection />
      <AlumniVoicesSection />
      <CampusLifeGallery />

      <Footer />
    </div>
  );
}