import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import CurriculumSection from "@/components/CurriculumSection";
import LearningExecutionSection from "@/components/LearningExecutionSection";
import LearningComparisonSection from "@/components/LearningComparisonSection";
import CertificateSection from "@/components/CertificateSection";
import PartnershipSection from "@/components/PartnershipSection";
import EntrepreneurshipHero from "@/components/EntrepreneurshipHero";
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
import FindCourseSection from "@/components/FindCourseSection";

export default function K12SchoolProgramPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <EntrepreneurshipHero />
        <EmpoweringEducationSection currentPage="k12-school" />
        <ProgramNavigation />

        <section id="about" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <OurProgramsSection />
          <OverviewSection />
        </section>

        <section id="courses" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <FindCourseSection />
        </section>

        <section id="curriculum" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <SkillsProSection theme="seed" />
          <EvolvingEducationSection />
        </section>

        <section id="timetable" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <StudentScheduleSection />
          <ApplicationDeadlineSection />
        </section>

        <section id="mentors" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <MeetOurLearnersSection theme="seed" />
          <HeroSection theme="seed" />
          <TrustedBySchools />
          <ProfileCard theme="seed" />
        </section>

        {/* <ApplicationBanner /> */}
        {/* <WhyPartnerSection /> */}

        <NewsSection theme="seed" />
        <ContactFormSection theme="seed" />

        <ScholarshipFormSection
          theme="seed"
          page="k12-school"
          deadline={new Date('2025-10-25T23:59:59')}
        />

      </main>
      <Footer theme="seed" />
    </div>
  );
}