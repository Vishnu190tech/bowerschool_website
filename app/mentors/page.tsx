import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnershipSection from "@/components/PartnershipSection";
import VideoCarouselSection from "@/components/VideoCarouselSection";
import PartnerCTASection from "@/components/PartnerCTASection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ScholarshipFormSection from "@/components/ScholarshipFormSection";
import MeetOurLearnersSection from "@/components/MeetOurLearnersSection";
import MentorshipHeroSection from "@/components/MentorshipHeroSection";
import StudentPitchSection from "@/components/StudentPitchSection";

export default function mentorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MentorshipHeroSection />


      <VideoCarouselSection />
      <MeetOurLearnersSection />
      <StudentPitchSection />

      <Testimonials theme="scholarship" />

      <FAQSection theme="scholarship" />
      <ScholarshipFormSection />

      <Footer />
    </div>
  );
}