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
import ProgramNavigation from "@/components/ProgramNavigation";

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
        <ProgramNavigation />

        <section id="about" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <NumbersSection theme="ug" />
          <LearningComparisonSection theme="ug" />
          <StudentPitchSection />
        </section>

        <section id="courses" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <WhyPartnerWithSeedSection theme="ug" />
        </section>

        <section id="mentors" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <MeetOurLearnersSection />
          <ProfileCard theme="ug" />
        </section>

        <section id="curriculum" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <CurriculumSection />
          <SkillsProSection theme="ug" />
        </section>

        <section id="learning-outcomes" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <HowItWorks theme="ug" />
        </section>

        <section id="timetable" className="scroll-mt-[30px] lg:scroll-mt-[40px]">
          <StudentScheduleSection />
          <CourseFeeSection theme="ug" />
        </section>

        <HeroSection />
        {/* <SkillsProSectionTwo /> */}

        <ContactFormSection />
        <BowerGlimpseSection theme="ug" />
        <Testimonials theme="ug" />
        <FAQSection theme="ug" />
        <ScholarshipFormSection
          theme="ug"
          page="ug"
          deadline={new Date('2025-10-25T23:59:59')}
        />
      </main>
      <Footer theme="ug" />
    </div>
  );
}