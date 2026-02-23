import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function JobAggregatorPage() {
  return (
    <FeaturePageLayout
      badge="Job Aggregator"
      title="Aggregate Job postings from 20 job boards in one platform"
      subtitle="JobExCV simplifies your job search by aggregating job postings from 20 top job boards into one powerful platform. No more switching between multiple websites."
      ctaText="Get Started"
      howItWorksSteps={[
        { title: "Create a Loop", description: "Set your job title, location, and keywords. JobExCV will search across 20 job boards for you." },
        { title: "View Aggregated Results", description: "All job results are aggregated into a single dashboard where you can filter and sort." },
        { title: "Apply From One Place", description: "See where each job comes from and apply directly — all from the JobExCV platform." },
      ]}
      featureDetails={[
        {
          label: "Multi-platform search",
          title: "Filter And View Jobs By Job Board",
          description: "In the All Matches tab on your JobExCV dashboard, you can use the filters to see jobs from specific job boards. Full transparency on where each job comes from.",
        },
        {
          label: "Job details",
          title: "Check The Job Posting Details",
          description: "When you open a job match in JobExCV, you'll see the job board's name directly in the job details with full transparency. See company name, title, and full description.",
        },
      ]}
      stats={[
        { value: "20+", label: "Job boards" },
        { value: "1 min", label: "Per application" },
        { value: "1 click", label: "Apply" },
      ]}
      bottomCtaTitle="Join the JobExCV community. Find your job 3x faster."
      bottomCtaButtonText="Sign up"
    />
  );
}
