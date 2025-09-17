import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MasterclassListingHero from "@/components/MasterclassListingHero";
import MasterclassSection from "@/components/MasterclassSection";
import GuestSpeakerSection from "@/components/GuestSpeakerSection";
import VideoCarouselSection from "@/components/VideoCarouselSection";
import StudentPitchSection from "@/components/StudentPitchSection";
import FAQSection from "@/components/FAQSection";
import MasterclassLearnSection from "@/components/MasterclassLearnSection";
import BEATResourcesSection from "@/components/BEATResourcesSection";
import HeroSection from "@/components/HeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import ScholarshipFormSection from "@/components/ScholarshipFormSection";

export default function MasterclassesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MasterclassListingHero />

        <MasterclassLearnSection />

        <StudentPitchSection />
        <BEATResourcesSection />


        <MasterclassSection />
        <HeroSection />
        <ScholarshipFormSection />

      </main>
      <Footer />
    </div>
  );
}