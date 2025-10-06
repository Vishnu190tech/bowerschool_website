import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import CurriculumSection from "@/components/CurriculumSection";
import LearningExecutionSection from "@/components/LearningExecutionSection";
import LearningComparisonSection from "@/components/LearningComparisonSection";
import CertificateSection from "@/components/CertificateSection";
import PartnershipSection from "@/components/PartnershipSection";
import OverviewSection from "@/components/OverviewSection";
import HowItWorks from "@/components/HowItWorks";
import ApplicationBanner from "@/components/ApplicationBanner";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import MeetOurLearnersSection from "@/components/MeetOurLearnersSection";
import HeroSection from "@/components/HeroSection";
import TrustedBySchools from "@/components/TrustedBySchools";
import ProfileCard from "@/components/ProfileCard";
import Testimonials from "@/components/Testimonials";
import CommunitySection from "@/components/CommunitySection";
import NewsSection from "@/components/NewsSection";
import ScholarshipFormSection from "@/components/ScholarshipFormSection";
import ContactFormSection from "@/components/ContactFormSection";
import EmpoweringEducationSection from "@/components/EmpoweringEducationSection";
import ProgramNavigation from "@/components/ProgramNavigation";
import OurProgramsSection from "@/components/OurProgramsSection";
import WhatIsSEEDSection from "@/components/WhatIsSEEDSection";
import SkillsProSection from "@/components/SkillsProSection";
import StudentScheduleSection from "@/components/StudentScheduleSection";
import ApplicationDeadlineSection from "@/components/ApplicationDeadlineSection";
import KnowWhatTheyLearnSection from "@/components/KnowWhatTheyLearnSection";
import EvolvingEducationSection from "@/components/EvolvingEducationSection";
import BowerGlimpseSection from "@/components/BowerGlimpseSection";
import SeedHeroSection from "@/components/SeedHeroSection";
import FAQSection from "@/components/FAQSection";
import CourseFeeSection from "@/components/CourseFeeSection";
import NumbersSection from "@/components/NumbersSection";
import StudentPitchSection from "@/components/StudentPitchSection";
import StudentPitchVideoSection from "@/components/StudentPitchVideoSection";
import SkillsProSectionTwo from "@/components/SkillsProSectionTwo";
import WhyPartnerWithSeedSection from "@/components/WhyPartnerWithSeedSection";
import ClubsSection from "@/components/ClubsSection";

export default function K12ProgramPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <SeedHeroSection


          breadcrumb="Programs > Seed > Tech entrepreneurship with finance specialisation"
          title="Start Young. Think Big. Build Now."
          duration="3 Weeks"
          location="Hyderabad"
          modeLabel="Grades"
          modeValue="9th-12th"
          startDate="April 5th, 2025"
        />
        {/* <EmpoweringEducationSection /> */}
        <ProgramNavigation />
        <NumbersSection />

        <SkillsProSectionTwo />
        <ApplicationDeadlineSection />
        {/* <ApplicationBanner /> */}
        {/* <WhyPartnerSection /> */}
        <WhyPartnerWithSeedSection theme="seed" />
        <LearningExecutionSection />

        <MeetOurLearnersSection />
        <ContactFormSection />

        <StudentPitchVideoSection />

        <CertificateSection />
        <ProfileCard theme="seed" />
        <CourseFeeSection theme="seed" />
        <ClubsSection />
        <Testimonials theme="seed" />
        <BowerGlimpseSection />
        <FAQSection theme="seed" />
        <ScholarshipFormSection theme="seed" />

      </main>
      <Footer />
    </div>
  );
}