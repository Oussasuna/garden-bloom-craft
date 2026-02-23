import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function JobFilteringPage() {
  return (
    <FeaturePageLayout
      badge="Job Filtering"
      title="Use advanced job filters to filter job descriptions"
      subtitle="JobExCV can filter job descriptions based on specific keywords that you can set. Stop getting jobs that LinkedIn thinks is a good fit. Set your own rules."
      ctaText="Get Started"
      howItWorksSteps={[
        { title: "Create A New Loop", description: "Create a new loop and set the job title, location, and keywords for your ideal positions." },
        { title: "Set Your Filters", description: "Add keyword filters to include or exclude specific terms from job descriptions." },
        { title: "Get Filtered Results", description: "Only see jobs that match your exact criteria. No more irrelevant listings." },
      ]}
      featureDetails={[
        {
          label: "Custom rules",
          title: "With JobExCV You Set Your Own Rules",
          description: "You exclude the companies you don't want to apply for. We never apply to those companies. You can add or remove companies any time.",
          bullets: ["You exclude the companies you don't want to apply for", "We never apply to those companies", "You can add or remove companies any time"],
        },
        {
          label: "Step by step",
          title: "Find Jobs Matching Your CV Using The Following Steps",
          description: "Create a new loop and set the job title, location, and keywords. JobExCV will find only the jobs that match your specific criteria and preferences.",
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
