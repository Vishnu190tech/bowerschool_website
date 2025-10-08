import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCampusLife from "@/components/HeroCampusLife";
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
import BowerNetworkSection from "@/components/BowerNetworkSection";
import CampusLifeGallery from "@/components/CampusLifeGallery";
import SpeakersAndMentorsSection from "@/components/SpeakersAndMentorsSection";

export default function alumniConnectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroCampusLife />
      <BowerNetworkSection />

      {/* <ExperienceSection /> */}
      <MakeYourselfAtHomeSection />
      <AlumniCTASection />
      <BenefitsSection />
      <AlumniVoicesSection />
      <main className="flex-1 bg-gray-50">
        <FacilitiesSection />
        <StudentPitchSection />
        <WellnessSection />
        <CampusLifeGallery />

        <Testimonials theme="ug" />
        <ContactFormSection />
        <FAQSection theme="ug" />

      </main>
      <Footer />
    </div>
  );
}