import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AiQuestionAnsweringPage() {
  return (
    <FeaturePageLayout
      badge="AI Question Answering"
      title="Automate Question answering in job applications using AI."
      subtitle="Use our ✦ AI question answering feature to automatically generate answers to company's questions based on your resume, past answers and similar questions."
      ctaText="Get Started"
      heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/answering-2.webp"
      heroImageAlt="AI question answering dashboard interface"
      howItWorksSteps={[
        { title: "Click the AI Button", description: "Click the button that automatically fills the input with our AI generated answer." },
        { title: "AI Searches Your Data", description: "In the background JobExCV will search your previous questions and answers as well as your CV/Resume." },
        { title: "Submit With One Click", description: "With a single click you can answer the question and submit the job application." },
      ]}
      featureDetails={[
        {
          label: "AI-powered answers",
          title: "Use Artificial Intelligence To Answer Any Question",
          description: "Our innovative technology automatically answers questions based on your experience and previous questions. Save hours on repetitive application forms.",
          bullets: [
            "Click the button that automatically fills the input with our AI generated answer",
            "JobExCV searches your previous questions and answers as well as your CV",
            "With a single click you can answer the question and submit the job application",
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
