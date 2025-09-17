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
import HeroCampusLife from "@/components/HeroCampusLife";

export default function partnerShipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroCampusLife
        heading="Co-Creating the Future of Entrepreneurship"
        subheading="Bower's ecosystem is driven by industry, incubators, and collaborators shaping the future of entrepreneurship."
        primaryButtonText="Explore Our Partners"
        primaryButtonLink="/partners"
        secondaryButtonText="Partner With Us"
        secondaryButtonLink="/partner-form"
        backgroundImage="/94c693c59fa28ef51b807beae367f3f03145431c.png"
      />

      <PartnershipSection />
      <LogoTicker heading="Industry Partners" subheading="Join 4,000+ companies already growing" />
      <LogoTicker heading="Exclusive Tie-Ups" subheading="Join 4,000+ companies already growing" />
      <LogoTicker heading="Corporate Partners" subheading="Join 4,000+ companies already growing" />

      <LearningComparisonSection />

      <VideoCarouselSection />
      <PartnerCTASection />
      <Testimonials />
      <ContactFormSection />

      {/* <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Welcome to Bower School - Where innovation meets education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Bower School, we are dedicated to nurturing the next generation of entrepreneurs,
                innovators, and changemakers. Our mission is to provide a transformative educational
                experience that combines academic excellence with real-world entrepreneurial skills.
              </p>
              <p className="text-gray-600">
                We believe in learning by doing, thinking like founders, and building solutions that
                matter. Our curriculum is designed to inspire creativity, foster innovation, and develop
                the leadership skills necessary for success in the 21st century.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Innovation & Creativity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Entrepreneurial Mindset</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Hands-on Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Global Perspective</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Community Impact</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Join Our Journey</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of a community that's shaping the future. Whether you're a student, educator,
              or industry partner, there's a place for you at Bower School.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main> */}

      <Footer />
    </div>
  );
}