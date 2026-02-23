import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function JobTrackerPage() {
  return (
    <FeaturePageLayout
      badge="Job Tracker"
      title="Finally the best job application tracker is here to help you track your applications"
      subtitle="JobExCV Kanban board is the best job application tracker that allows you to track all your job applications and put structure in your daily job search process."
      ctaText="Use our job tracker for free"
      howItWorksSteps={[
        { title: "Create An Account", description: "Sign up quickly and easily to access the Job Application Tracker and all its features." },
        { title: "Start Your Job Search", description: "Create loops to search for jobs across 20+ job boards. All matches appear in your tracker." },
        { title: "Track & Organize", description: "Use the Kanban board to move applications between Favorites, Applied, Interview and more." },
      ]}
      featureDetails={[
        {
          label: "Kanban board",
          title: "Organize Your Applications Visually",
          description: "Track every application with our Kanban board. Move jobs between Favorites, Applied, Interview and more. See everything at a glance.",
          bullets: ["Drag and drop between columns", "Track application status in real time", "Never lose track of an opportunity"],
        },
        {
          label: "Smart insights",
          title: "Check How Job Application Tracker Works",
          description: "Create an account, set up your job search preferences, and start tracking your applications. All your matches and applications in one place.",
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
