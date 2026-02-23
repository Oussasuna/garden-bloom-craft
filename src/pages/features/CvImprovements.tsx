import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function CvImprovementsPage() {
  return (
    <FeaturePageLayout
      badge="CV Analytics"
      title="Optimize your job search with statistics and feedback"
      subtitle="JobExCV offers the most advanced job search analytics to help you optimize your job search and find a job faster."
      ctaText="Get Started Free"
      howItWorksSteps={[
        { title: "Upload Your CV", description: "Upload your CV and start a job search loop. JobExCV will begin matching you with relevant positions." },
        { title: "Get Data-Driven Insights", description: "See detailed statistics about why jobs match or don't match, and identify CV weaknesses." },
        { title: "Optimize & Improve", description: "Follow our targeted recommendations to improve your CV score and increase interview rates." },
      ]}
      featureDetails={[
        {
          label: "Performance analytics",
          title: "Until Now You Applied And Waited. Now It's The Time To Apply And Optimize.",
          description: "Using our Loop statistics you can see all the important issues that causing a low rating of your CV. JobExCV uses a data-driven approach to help you optimize.",
          bullets: [
            "Using our Loop statistics you can see all the important issues that causing a low rating of your CV",
            "JobExCV uses a data-driven approach to help you optimize your CV",
            "In our dashboard your can find all the important fixes",
          ],
        },
        {
          label: "Smart recommendations",
          title: "Job Search Performance Statistics",
          description: "JobExCV identifies the critical issues of your CV that give low rating in the ATS systems. Every day you get updated stats and recommendations to upgrade your CV.",
          bullets: ["Data-driven optimizations every day", "Updated stats and recommendations", "Combine daily applications and CV optimization"],
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
