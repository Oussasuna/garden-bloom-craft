import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AiCvBuilderPage() {
  return (
    <FeaturePageLayout
      badge="AI CV Builder"
      title="AI CV Builder that helps you get hired at the top companies"
      subtitle="Professionally designed templates, AI features, and a fully automated platform optimized for job applications that beat applicant tracking systems (ATS)."
      ctaText="Sign up for free"
      heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/ai-cv-builder-2.webp"
      heroImageAlt="AI CV Builder interface"
      howItWorksTitle="Build Your Resume In Four Easy Steps"
      howItWorksSteps={[
        { title: "Choose Your Template", description: "Pick from a variety of professional and modern resume templates that suit your industry and experience level." },
        { title: "Add Your Content", description: "Fill in your details and let AI help you write compelling descriptions for each role and experience." },
        { title: "Download And Share", description: "Export your resume in PDF format and start applying to jobs right away, confident in your first impression." },
      ]}
      featureDetails={[
        {
          label: "Professional templates",
          title: "Choose Your Template",
          description: "Pick from a variety of professional and modern resume templates that suit your industry and experience level.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/chooseTemplate-3.png",
          imageAlt: "Choose your template",
        },
        {
          label: "AI-powered editing",
          title: "Review And Edit",
          description: "Double-check your information for accuracy and clarity. Make sure everything looks great and reads smoothly.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/content-4.png",
          imageAlt: "Customize your content",
        },
        {
          label: "Export ready",
          title: "Download And Share",
          description: "Export your resume in PDF format and start applying to jobs right away, confident that you're making a great first impression.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/download-6.png",
          imageAlt: "Download and share",
        },
      ]}
      stats={[
        { value: "10X", label: "More interviews" },
        { value: "1 min", label: "Per application" },
        { value: "1 click", label: "Apply" },
      ]}
      bottomCtaTitle="Join the JobExCV community. Find your job 3x faster."
      bottomCtaButtonText="Sign up"
    />
  );
}
