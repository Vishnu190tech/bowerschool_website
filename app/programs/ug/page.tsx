import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BEATCurriculumSection from "@/components/BEATCurriculumSection";
import CourseFeeSection from "@/components/CourseFeeSection";
import CertificateSection from "@/components/CertificateSection";
import AdmissionStepsSection from "@/components/AdmissionStepsSection";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import BEATResourcesSection from "@/components/BEATResourcesSection";
import BowerNetworkSection from "@/components/BowerNetworkSection";
import SeedHeroSection from "@/components/SeedHeroSection";
import LearningComparisonSection from "@/components/LearningComparisonSection";
import StudentPitchVideoSection from "@/components/StudentPitchVideoSection";
import StudentPitchSection from "@/components/StudentPitchSection";
import WhyPartnerWithSeedSection from "@/components/WhyPartnerWithSeedSection";
import MeetOurLearnersSection from "@/components/MeetOurLearnersSection";
import CurriculumSection from "@/components/CurriculumSection";
import StudentScheduleSection from "@/components/StudentScheduleSection";
import HeroSection from "@/components/HeroSection";
import SkillsProSection from "@/components/SkillsProSection";
import ProfileCard from "@/components/ProfileCard";
import ContactFormSection from "@/components/ContactFormSection";
import BowerGlimpseSection from "@/components/BowerGlimpseSection";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import ScholarshipFormSection from "@/components/ScholarshipFormSection";
import SkillsProSectionTwo from "@/components/SkillsProSectionTwo";
import NumbersSection from "@/components/NumbersSection";

export default function UGProgramPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <SeedHeroSection
          title="Graduate with Ideas, Skills, and a Venture"
          duration="3 Years"
          location="Hyderabad"
          modeLabel="Grade"
          modeValue="Grade 12"
          startDate="April 5th, 2025"
          backgroundImage="/bg-ug-page.png"
          theme="ug"
        />
        <NumbersSection theme="ug" />
        <LearningComparisonSection theme="ug" />
        <StudentPitchSection />
        <WhyPartnerWithSeedSection theme="ug" />
        <MeetOurLearnersSection />
        <CurriculumSection />
        <StudentScheduleSection />

        <HeroSection />
        <SkillsProSection theme="ug" />
        {/* <SkillsProSectionTwo /> */}

        <ProfileCard theme="ug" />
        <ContactFormSection />
        <BowerGlimpseSection theme="ug" />
        <Testimonials theme="ug" />
        <HowItWorks theme="ug" />
        <CourseFeeSection theme="ug" />
        <FAQSection theme="ug" />
        <ScholarshipFormSection theme="ug" />
      </main>
      <Footer />
    </div>
  );
}