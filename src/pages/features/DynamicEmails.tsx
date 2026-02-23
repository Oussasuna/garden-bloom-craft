import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function DynamicEmailsPage() {
  return (
    <FeaturePageLayout
      badge="Email Templates"
      title="Use Free Personalized Email Templates for Sending Resumes & Cover Letters to Companies for a Job Offer"
      subtitle="Which are the best email templates for sending resumes and cover letters? JobExCV collects new job opportunities and creates fully personalised emails."
      ctaText="Get Started Free"
      howItWorksSteps={[
        { title: "Choose a Template", description: "Pick from our pre-made and tested email templates designed to get responses from companies." },
        { title: "Personalize With Variables", description: "Use variables like {{JOB_TITLE}}, {{COMPANY_NAME}} to create fully personalised emails for every company." },
        { title: "Track & Optimize", description: "In your dashboard you can track email open ratio, and optimize your emails for better results." },
      ]}
      featureDetails={[
        {
          label: "Smart personalization",
          title: "How Email Templates Can Help You Get Closer To Your Dream Job",
          description: "Using our pre-made and tested templates you start getting responses from companies. Send fully personalised emails with variables.",
          bullets: [
            "Using our pre-made and tested templates you start getting responses from companies",
            "You can send fully personalised emails using our email variables like {{ this }}",
            "In your dashboard your can track email open ratio, and optimize your emails",
          ],
        },
        {
          label: "Automation",
          title: "Send Daily Emails Automatically",
          description: "JobExCV collects jobs and finds the email of the company automatically. Stand out between candidates and keep track of all the important KPIs.",
          bullets: ["Send daily emails to matched companies", "Stand out between candidates", "Write unique emails with variable personalization"],
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
