import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AiCvCheckerPage() {
  return (
    <FeaturePageLayout
      badge="AI CV Checker"
      title="Best AI CV checker to improve your resume with AI"
      subtitle="Use our AI CV checker to improve your resume, make it ATS friendly and get more interviews."
      ctaText="Check your CV score with AI"
      heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvChecker-2.webp"
      heroImageAlt="AI CV Checker dashboard"
      howItWorksTitle="Check How Our AI CV Checker Works"
      howItWorksSteps={[
        { title: "Upload Your CV", description: "Upload your CV in our automated AI checker with one click." },
        { title: "AI Scans Your CV", description: "JobExCV will scan your CV and identify if it follows best practices and if it is ATS friendly." },
        { title: "Get Recommendations", description: "JobExCV will use AI to provide targeted recommendations to make it ATS friendly and get you interviews." },
      ]}
      featureDetails={[
        {
          label: "AI analysis",
          title: "Upload Your CV With One Click",
          description: "Boost your job prospects by uploading your CV into our AI CV checker for instant, automated feedback and optimization.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker1-3.webp",
          imageAlt: "Upload Your CV",
        },
        {
          label: "Smart scanning",
          title: "Scan Your CV With AI",
          description: "Let JobExCV AI CV checker analyze your resume, ensuring it checks best practices and is fully optimized for ATS compatibility.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker2-4.webp",
          imageAlt: "Scan Your CV",
        },
        {
          label: "Targeted recommendations",
          title: "AI Recommends, You Improve!",
          description: "JobExCV AI CV checker delivers targeted recommendations to optimize your resume for ATS compatibility and boost your chances of landing interviews.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker3-5.webp",
          imageAlt: "AI Recommendations",
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
