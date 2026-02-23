import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function JobMatchingPage() {
  return (
    <FeaturePageLayout
      badge="Job Matching"
      title="The most advanced Job Matching Platform to help you get a job"
      subtitle="Use AI to accelerate your job search. Search and apply across all the top job platforms. With Smart job matching and AI, find your dream job."
      ctaText="Get Started"
      howItWorksSteps={[
        { title: "Upload Your CV", description: "Upload your resume and let our AI analyze your skills, experience, and career goals." },
        { title: "Smart Matching", description: "JobExCV matches you with hundreds of relevant jobs across 20+ job boards using AI." },
        { title: "Apply & Track", description: "Apply automatically or with one click, and track all your applications in one dashboard." },
      ]}
      featureDetails={[
        {
          label: "AI-powered matching",
          title: "Help Your Clients Accelerate Their Job Search",
          description: "JobExCV helps Agencies for individuals and businesses find the best match. Apply to the best companies with just 30 mins of setup for free.",
          bullets: ["Automatically Apply to matched jobs", "Email Templates for outreach", "Resume/Cover letter optimization", "Job Filtering and CV Improvements"],
        },
        {
          label: "For bootcamps & agencies",
          title: "Here Is How JobExCV For Bootcamps Works",
          description: "Identify new companies that are a good match with your existing pool of candidates. Group your dashboard by candidate, CV template, at a company, job search, keyword level.",
          bullets: [
            "Match with 1000's of companies from your candidate pool",
            "Filter and select the best for each candidate",
            "Create reports for your clients and track progress",
          ],
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
