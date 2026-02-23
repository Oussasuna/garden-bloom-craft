import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AiMockInterviewPage() {
  return (
    <FeaturePageLayout
      badge="Coming Soon"
      title="AI Mock Interview"
      subtitle="Enhance your Interview preparation with the AI Mock Interview, available directly in your JobExCV dashboard. For every job match, you can instantly launch a simulated interview tailored to the role you are applying for."
      ctaText="Start today"
      howItWorksTitle="How It Works"
      howItWorksSteps={[
        { title: "Log In To Your Account", description: "Log in to your JobExCV account to access your dashboard and job matches." },
        { title: "Find a Job Match", description: "Find the job match that interests you and click the Mock Interview button." },
        { title: "Practice & Improve", description: "Start your AI Mock Interview, answer questions and receive instant feedback." },
      ]}
      featureDetails={[
        {
          label: "AI-powered practice",
          title: "Practice For Every Job Match",
          description: "For every job match in your dashboard, you'll see an option to launch a mock interview. You answer role-specific and behavioral questions, and the AI provides feedback on your responses.",
          bullets: [
            "Tailored to each specific role and company",
            "Answer role-specific and behavioral questions",
            "Receive instant feedback to refine your skills",
            "Practice as many times as you need",
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
