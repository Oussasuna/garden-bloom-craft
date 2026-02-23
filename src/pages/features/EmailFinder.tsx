import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function EmailFinderPage() {
  return (
    <FeaturePageLayout
      badge="Email Finder"
      title="Find the best email to contact a company for a specific job"
      subtitle="Trying to find the email of a recruiter for a job? For every job that matches your profile JobExCV will find the best email to contact."
      ctaText="Get Started"
      howItWorksSteps={[
        { title: "Set Up Your Search", description: "Create a loop with your job preferences. JobExCV will find matching jobs across 20+ boards." },
        { title: "We Find The Emails", description: "For every matched job, JobExCV automatically finds the best email address to contact the company." },
        { title: "Send Personalized Emails", description: "Use our email templates with variables to send fully personalized emails to each company." },
      ]}
      featureDetails={[
        {
          label: "Smart outreach",
          title: "How Email Templates Can Help You Get Closer To Your Dream Job",
          description: "Using our pre-made and tested templates you start getting responses from companies. You can send fully personalised emails using our email variables.",
          bullets: [
            "Using our pre-made and tested templates you start getting responses from companies",
            "You can send fully personalised emails using our email variables like {{ this }}",
            "In your dashboard your can track email open ratio, and optimize your emails",
          ],
        },
        {
          label: "Automation",
          title: "Send Daily Emails Automatically",
          description: "JobExCV collects jobs and finds the email of the company automatically. Stand out between candidates and write unique emails with variable personalization.",
          bullets: ["Send daily emails to matched companies", "Stand out between candidates", "Fully optimize your writing, testing various email templates"],
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
