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
import WhyPartnerWithSeedSection from "@/components/WhyPartnerWithSeedSection";

export default function K12ProgramPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <EntrepreneurshipHero />
        <EmpoweringEducationSection currentPage="k12" />
        <ProgramNavigation />

        <section id="about" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <OurProgramsSection
            programs={[
              {
                id: 'year-program',
                title: 'Year Program',
                description: 'A 12-week bootcamp (Sat & Sun) teaching ideation to pitch with real-world projects.',
                iconPath: '/25c12ee12b6162728fe43a156c0b57a7936d1f7b.svg'
              },
              {
                id: 'coco-accelerator',
                title: 'COCO Accelerator',
                description: 'A 4-week hybrid program to build proof-of-concepts with masterclasses and labs.',
                iconPath: '/bulb-light-svgrepo-com-1.png'
              }
            ]}
          />
          <WhatIsSEEDSection />
          <OverviewSection />
        </section>

        <section id="courses" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <HowItWorks />
        </section>

        <section id="curriculum" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <SkillsProSection theme="seed" />
          <KnowWhatTheyLearnSection />
        </section>

        <section id="timetable" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <StudentScheduleSection />
          <ApplicationDeadlineSection />
        </section>

        <section id="learning-outcomes" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <WhyPartnerWithSeedSection theme="seed" />
          <EvolvingEducationSection theme="seed" />
        </section>

        <section id="mentors" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <MeetOurLearnersSection theme="seed" />
          <HeroSection theme="seed" mode="light" />
          <TrustedBySchools />
          <ProfileCard theme="seed" />
        </section>

        <Testimonials theme="seed" />
        <NewsSection theme="seed" />
        <ContactFormSection theme="seed" />
        <BowerGlimpseSection />

        <ScholarshipFormSection theme="seed" />

      </main>
      <Footer theme="seed" />
    </div>
  );
}