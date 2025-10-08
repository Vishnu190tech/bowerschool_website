import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BEATCurriculumSection from "@/components/BEATCurriculumSection";
import CourseFeeSection from "@/components/CourseFeeSection";
import CertificateSection from "@/components/CertificateSection";
import AdmissionStepsSection from "@/components/AdmissionStepsSection";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import BEATResourcesSection from "@/components/BEATResourcesSection";
import LearningComparisonSection from "@/components/LearningComparisonSection";
import SeedHeroSection from "@/components/SeedHeroSection";
import ProgramNavigation from "@/components/ProgramNavigation";
import NumbersSection from "@/components/NumbersSection";
import SkillsProSectionTwo from "@/components/SkillsProSectionTwo";
import ApplicationDeadlineSection from "@/components/ApplicationDeadlineSection";
import WhyPartnerWithSeedSection from "@/components/WhyPartnerWithSeedSection";
import LearningExecutionSection from "@/components/LearningExecutionSection";
import MeetOurLearnersSection from "@/components/MeetOurLearnersSection";
import ContactFormSection from "@/components/ContactFormSection";
import StudentPitchVideoSection from "@/components/StudentPitchVideoSection";
import ProfileCard from "@/components/ProfileCard";
import Testimonials from "@/components/Testimonials";
import BowerGlimpseSection from "@/components/BowerGlimpseSection";
import FAQSection from "@/components/FAQSection";
import ScholarshipFormSection from "@/components/ScholarshipFormSection";
import EmpoweringEducationSection from "@/components/EmpoweringEducationSection";
import EmpoweringEducationLeadSection from "@/components/EmpoweringEducationLeadSection";
import EvolvingEducationSection from "@/components/EvolvingEducationSection";
import LogoTicker from "@/components/LogoTicker";
import GuestSpeakerSection from "@/components/GuestSpeakerSection";
import GuestSpeakerSectionTwo from "@/components/GuestSpeakerSectionTwo";
import HeroSection from "@/components/HeroSection";
import HowToBecomeLeaderSection from "@/components/HowToBecomeLeaderSection";
import SkillsSection from "@/components/SkillsSection";
import ClubsSection from "@/components/ClubsSection";
import SkillsProSection from "@/components/SkillsProSection";

export default function UGProgramPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />


      <main className="flex-1 bg-gray-50">
        <SeedHeroSection
          breadcrumb="Programs > PG"
          title="Lead Boldly. Build Fearlessly."
          duration="4 Months+"
          location="Hyderabad"
          modeLabel="Mode"
          modeValue="Hybrid"
          startDate="April 5th, 2025"
          theme="lead"
        />
        <EmpoweringEducationLeadSection />
        <ProgramNavigation />
        <NumbersSection theme="lead" />
        <EvolvingEducationSection theme="lead" />
        <LogoTicker />

        {/* <SkillsProSectionTwo /> */}

        {/* <ApplicationBanner /> */}
        {/* <WhyPartnerSection /> */}
        <WhyPartnerWithSeedSection theme="lead" />
        <GuestSpeakerSectionTwo />
        <MeetOurLearnersSection theme="lead" />

        <LearningExecutionSection theme="lead" />
        <ApplicationDeadlineSection theme="lead" />


        <StudentPitchVideoSection theme="lead" />

        <HeroSection theme="lead" mode="light" />
        <HowToBecomeLeaderSection />
        <CertificateSection theme="lead" />
        <SkillsProSection theme="lead" />
        <CourseFeeSection theme="lead" />


        <ProfileCard theme="lead" />
        <ClubsSection theme="lead" />

        <Testimonials theme="lead" />
        <BowerGlimpseSection theme="lead" />
        <FAQSection theme="lead" />
        <ScholarshipFormSection theme="lead" />
      </main>
      <Footer />
    </div>
  );
}