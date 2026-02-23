import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function OneClickApplyPage() {
  return (
    <FeaturePageLayout
      badge="One Click Apply"
      title="Review every job and apply with one click"
      subtitle="On a single platform, you can find all the important details. You can manually apply with a single click. You can rate the job matches."
      ctaText="Get Started"
      heroImage="https://www.loopcv.pro/assets/images/screens/manual.webp"
      heroImageAlt="One-click apply dashboard showing job details"
      howItWorksSteps={[
        { title: "Find Your Matches", description: "JobExCV aggregates jobs from 20+ boards and shows you the best matches for your profile." },
        { title: "Review Job Details", description: "See company info, salary, location, and full description in a single dashboard view." },
        { title: "Apply With One Click", description: "Send your application or email to the company with a single click — no forms to fill." },
      ]}
      featureDetails={[
        {
          label: "Streamlined workflow",
          title: "Screen Every Job And Apply With A Single Click",
          description: "In a single platform you can find all the important details. You can manually apply with a single click. You can rate the job matches.",
          image: "https://www.loopcv.pro/assets/images/screens/manual.webp",
          imageAlt: "Dashboard showing job application details",
          bullets: ["Find more details for each job in a single dashboard", "Send an email to a company with a single click", "Rate and organize your job matches"],
        },
        {
          label: "Smart organization",
          title: "Send Emails With One Click",
          description: "JobExCV identifies company emails and with one click you can apply. If you want to spend a little more time reviewing the job, you can do it with the 2-step process.",
          bullets: ["Send emails with one click", "Rate your job matches to improve recommendations", "Organize your job search from all job boards in one place"],
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
