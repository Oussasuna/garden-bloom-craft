import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AutoApplyPage() {
  return (
    <FeaturePageLayout
      badge="Auto Apply"
      title="The first platform that automatically applies on your behalf"
      subtitle="Define your job search preferences from our dashboard, upload your CV and let us do the hard job of finding jobs and applying on your behalf."
      ctaText="Get Started"
      heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/form-2.webp"
      heroImageAlt="Automated job application form"
      howItWorksTitle="How Our Auto Apply Bot Works"
      howItWorksSteps={[
        { title: "Create a Loop & Access Automations", description: "Begin by creating a new loop in JobExCV. Follow the setup process until you reach the last step, where you can access the Automations tab." },
        { title: "Loop Starts Finding Jobs", description: "Once your loop is set up, JobExCV will begin searching for job listings that match your criteria across multiple job boards." },
        { title: "Enable Mass Apply", description: "Toggle on the Mass Apply feature to send more applications automatically, increasing your chances of getting interviews faster." },
      ]}
      featureDetails={[
        {
          label: "End to end automation",
          title: "The First End To End Job Search Automation Platform",
          description: "We automatically fill out job application forms with your personal data. We upload your CV and click the 'Submit' button.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/autoapply1-3.webp",
          imageAlt: "Create a Loop & Access Automations",
          bullets: ["Match with hundreds of jobs", "Automatically apply to jobs", "Get statistics and improve your CV"],
        },
        {
          label: "Smart matching",
          title: "Loop Starts Finding Jobs",
          description: "Once your loop is set up, JobExCV will begin searching for job listings that match your criteria. It analyzes multiple job boards to ensure you receive relevant opportunities tailored to your preferences.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/autoapply2-4.webp",
          imageAlt: "Loop Starts Finding Jobs",
        },
        {
          label: "Mass apply",
          title: "Enable Mass Apply For More Applications",
          description: "To increase automation, toggle on the Mass Apply feature in JobExCV. This allows the system to send more applications automatically, increasing your chances of getting interviews faster.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/autoapply3-5.webp",
          imageAlt: "Enable Mass Apply",
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
