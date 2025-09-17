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
import FAQSection from "@/components/FAQSection";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import BEATResourcesSection from "@/components/BEATResourcesSection";
import BEATCurriculumSection from "@/components/BEATCurriculumSection";
import AdmissionStepsSection from "@/components/AdmissionStepsSection";
import OverviewSection from "@/components/OverviewSection";
import HeroCampusLife from "@/components/HeroCampusLife";

export default function beatExamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroCampusLife
        heading="Your Journey to Bower Begins Here"
        subheading="Explore our admission process, understand the requirements, and take your first step toward building your future with Bower."
        primaryButtonText="Apply now"
        primaryButtonLink="/apply"
        secondaryButtonText="Process"
        secondaryButtonLink="/admission-process"
        backgroundImage="/9147e6f29ea7d300da04bb310c1321a209f1b979.png"
      />

      <OverviewSection />

      <AdmissionStepsSection />
      <BEATCurriculumSection />
      <BEATResourcesSection />
      <ImportantDatesSection />
      <ContactFormSection />
      <FAQSection />

      <Footer />
    </div>
  );
}