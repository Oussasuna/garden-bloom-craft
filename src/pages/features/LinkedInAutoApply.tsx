import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function LinkedInAutoApplyPage() {
  return (
    <FeaturePageLayout
      badge="LinkedIn Extension"
      title="Automate your job applications on LinkedIn with our new chrome extension."
      subtitle="Install our chrome extension from the web store, select the jobs you want to apply for, and JobExCV do the rest."
      ctaText="Get Started"
      howItWorksSteps={[
        { title: "Install The Extension", description: "Download and install the JobExCV Chrome extension from the Web Store." },
        { title: "Select Jobs on LinkedIn", description: "Browse LinkedIn jobs and select the positions you want to apply for." },
        { title: "Let JobExCV Apply", description: "The extension automatically fills in your details and submits applications on your behalf." },
      ]}
      featureDetails={[
        {
          label: "Chrome extension",
          title: "Elevate Your Workflow With Our LinkedIn Extension",
          description: "Simplify your workflow by automating this time-consuming task effortlessly. View detailed summaries of application attempts for quick review.",
          bullets: [
            "Simplify your workflow by automating this time-consuming task effortlessly",
            "View detailed summaries of application attempts for quick review",
            "Answer questions interactively, allowing the extension to fill in details",
          ],
        },
        {
          label: "Getting started",
          title: "Filter And Find Extension-Supported Matches",
          description: "Head to the All Matches section and apply the 'Matches with pending automation' filter. Discover the power of our LinkedIn extension in optimizing your job application processes.",
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
