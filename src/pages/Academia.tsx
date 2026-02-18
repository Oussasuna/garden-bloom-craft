import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AcademiaHero from "@/components/sections/AcademiaHero";
import DemoVideo from "@/components/sections/DemoVideo";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import AcademiaTestimonial from "@/components/sections/AcademiaTestimonial";
import AcademicSupport from "@/components/sections/AcademicSupport";
import AcademiaFeaturesGrid from "@/components/sections/AcademiaFeaturesGrid";
import AdminPanel from "@/components/sections/AdminPanel";
import GetStartedSteps from "@/components/sections/GetStartedSteps";
import BlogPreview from "@/components/sections/BlogPreview";
import CtaBanners from "@/components/sections/CtaBanners";
import FAQ from "@/components/sections/FAQ";
import PreFooterCTA from "@/components/sections/PreFooterCTA";

export default function AcademiaPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <AcademiaHero />
        <DemoVideo />
        <BenefitsGrid />
        <AcademiaTestimonial />
        <AcademicSupport />
        <AcademiaFeaturesGrid />
        <AdminPanel />
        <GetStartedSteps />
        <BlogPreview />
        <FAQ />
        <PreFooterCTA />
        <CtaBanners />
      </main>
      <Footer />
    </div>
  );
}
