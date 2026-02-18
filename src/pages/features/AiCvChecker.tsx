import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AiCvCheckerPage() {
  return (
    <FeaturePageLayout
      badge="CV Analysis"
      badgeColor="#DC2626"
      title="Get your CV scored by AI in seconds"
      subtitle="Upload your CV and get an instant, detailed score with specific improvement suggestions. Know exactly how recruiters and ATS systems will perceive your resume."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png"
      heroImageAlt="AI CV Checker interface"
      summaryText="Our AI checks your CV against hundreds of criteria used by real recruiters and ATS systems, giving you a clear score and a prioritized list of improvements."
      features={[
        { number: "01", text: "Upload your current CV" },
        { number: "02", text: "AI scores it across 50+ criteria" },
        { number: "03", text: "Get prioritized improvement list" },
        { number: "04", text: "Apply fixes with one click" },
      ]}
      featureCardTitle="Your CV, objectively scored"
      featureCardText="Stop guessing whether your CV is good enough. Get an objective score and know exactly what's working, what's not, and what to fix first."
      benefits={[
        { icon: "📊", title: "50+ Criteria", description: "We check formatting, keywords, achievements, structure, ATS compatibility, and much more." },
        { icon: "🎯", title: "Prioritized Fixes", description: "Know which improvements will have the biggest impact on your application success rate." },
        { icon: "✅", title: "ATS Compatible", description: "Ensure your CV will pass every major Applicant Tracking System used by employers." },
      ]}
      relatedFeatures={[
        { name: "AI CV Builder", href: "/features/ai-cv-builder" },
        { name: "CV Improvements", href: "/features/cv-improvements" },
        { name: "Profile-Job Match", href: "/features/job-matching" },
      ]}
    />
  );
}
