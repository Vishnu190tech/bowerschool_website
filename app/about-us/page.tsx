import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MentorshipHeroSection from "@/components/MentorshipHeroSection";
import StudentPitchSection from "@/components/StudentPitchSection";
import MeetOurLearnersSection from "@/components/MeetOurLearnersSection";
import LogoTicker from "@/components/LogoTicker";
import HeroCampusLife from "@/components/HeroCampusLife";
import WhatDrivesUsSection from "@/components/WhatDrivesUsSection";
import OurValuesSection from "@/components/OurValuesSection";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroCampusLife
        heading="Built for Today's Entrepreneurs!"
        subheading="Bower is more than a B-school. It's entrepreneurial learning reimagined, shaping the next generation of innovators, & business leaders."
        primaryButtonText="Our Story"
        primaryButtonLink="/our-story"
        secondaryButtonText="Meet Our Team"
        secondaryButtonLink="/team"
        backgroundImage="/da3321d558efc6b0cc8e082b8b83324d50c165ae.png"
      />
      <StudentPitchSection />
      <WhatDrivesUsSection />
      <OurValuesSection />

      <LogoTicker heading="Industry Partners" subheading="Join 4,000+ companies already growing" />
      <LogoTicker heading="Exclusive Tie-Ups" subheading="Join 4,000+ companies already growing" />

      <MeetOurLearnersSection />

      <StudentPitchSection
        headerLine1="Your Startup Playground"
        headerLine3="Hyderabad" />

      <Footer />
    </div>
  );
}