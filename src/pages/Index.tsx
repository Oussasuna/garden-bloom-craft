import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import DemoVideo from "@/components/sections/DemoVideo";
import ValueProps from "@/components/sections/ValueProps";
import TrustedBy from "@/components/sections/TrustedBy";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import AiAgentFeatures from "@/components/sections/AiAgentFeatures";
import FeatureDeepDive from "@/components/sections/FeatureDeepDive";
import AcademicResearch from "@/components/sections/AcademicResearch";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import BlogNewsletter from "@/components/sections/BlogNewsletter";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DemoVideo />
      <ValueProps />
      <TrustedBy />
      <HowItWorks />
      <Testimonials />
      <AiAgentFeatures />
      <FeatureDeepDive />
      <AcademicResearch />
      <FeaturesGrid />
      <BlogNewsletter />
      <FAQ />
      <Footer />
    </>
  );
};

export default Index;
