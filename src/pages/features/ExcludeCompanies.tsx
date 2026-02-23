import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function ExcludeCompaniesPage() {
  return (
    <FeaturePageLayout
      badge="Exclude Companies"
      title="Exclude companies from your automated job search"
      subtitle="JobExCV is smart enough to not apply by mistake to your previous employers or companies that you don't want to."
      ctaText="Get Started"
      howItWorksSteps={[
        { title: "Create a Loop", description: "Start by creating a new job search loop with your preferences — title, location, and keywords." },
        { title: "Add Exclusions", description: "In the loop settings, add the companies you want to exclude from your automated applications." },
        { title: "Apply With Confidence", description: "JobExCV will never apply to your excluded companies. You can add or remove companies any time." },
      ]}
      featureDetails={[
        {
          label: "Advanced job search preferences",
          title: "Elevate Your Workflow With Smart Exclusions",
          description: "Simplify your workflow by automating this time-consuming task effortlessly. View detailed summaries and answer questions interactively.",
          bullets: [
            "Simplify your workflow by automating this time-consuming task effortlessly",
            "View detailed summaries of application attempts for quick review and follow-up",
            "Answer questions interactively, allowing the extension to fill in job application details seamlessly",
          ],
        },
        {
          label: "Full control",
          title: "You Set Your Own Rules",
          description: "You exclude the companies you don't want to apply for. We never apply to those companies. You can add or remove companies any time.",
          bullets: ["You exclude the companies you don't want to apply for", "We never apply to those companies", "You can add or remove companies any time"],
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
