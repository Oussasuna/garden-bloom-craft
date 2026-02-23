import React from "react";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AiCoverLetterPage() {
  return (
    <FeaturePageLayout
      badge="#1 AI Cover Letter Generator"
      title="Create personalized cover letter to connect with hiring managers in seconds."
      subtitle="The smartest AI cover letter generator that understands both you and the job. JobExCV saves you 45 minutes per cover letter while maintaining your voice."
      ctaText="Create your cover letter now"
      heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/692d73a6faed3c5121cd2ce5_Demo_20graphics_20_wide__-5.jpg"
      heroImageAlt="Cover Letter Generator Demo"
      howItWorksTitle="How It Works"
      howItWorksSteps={[
        { title: "Find a Job Post", description: "Start searching for jobs anywhere you want and paste the job description in the box in JobExCV." },
        { title: "Prepare the Resume", description: "Use JobExCV to prepare a tailored resume for the job in one click." },
        { title: "Click ... There You Go", description: "One click, and your cover letter is ready. Feel free to manually edit it if needed." },
      ]}
      featureDetails={[
        {
          label: "Save time",
          title: "Save Hours On Every Application.",
          description: "Transform cover letter writing from 45 minutes to 2 minutes, letting you focus on what matters most in your job search.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/692e546ee175581f7f5f5b0d_Demo_20graphics_20_Square-14.jpg",
          imageAlt: "Save Hours",
          bullets: [
            "One-click generation saves you hours of writing and editing",
            "No more staring at blank pages wondering what to write",
            "Focus on job searching while AI handles the writing",
          ],
        },
        {
          label: "Stand out",
          title: "Strengthen Your Job Applications.",
          description: "Stand out from other candidates with cover letters that showcase your experience and story in the most impactful way possible.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/692e562f1dada2f69eea882e_Demo_20graphics_20_Square-15.jpg",
          imageAlt: "Strengthen Applications",
          bullets: [
            "Highlight achievements that best match the job requirements",
            "Create natural connections with the company's values",
            "Include relevant keywords that align with the job description",
          ],
        },
        {
          label: "Be authentic",
          title: "No More Stiff, Generic Cover Letter Templates.",
          description: "Say goodbye to stiff, cookie-cutter cover letters. Create natural, conversational writing that actually sounds human.",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/692e581f848d9b7de0aab630_Demo_20graphics_20_Square-17.jpg",
          imageAlt: "Personalize today",
          bullets: [
            "Fresh, personalized content instead of overused templates",
            "Natural language that engages hiring managers",
            "Professional yet conversational tone that stands out",
          ],
        },
      ]}
      stats={[
        { value: "562K+", label: "Users" },
        { value: "4.9/5", label: "Rating" },
        { value: "39", label: "Countries" },
      ]}
      bottomCtaTitle="Join the JobExCV community. Find your job 3x faster."
      bottomCtaButtonText="Sign up"
    />
  );
}
