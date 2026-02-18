import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function OneClickApplyPage() {
  return (
    <FeaturePageLayout
      badge="Speed"
      badgeColor="#FF4D00"
      title="Apply to any job with a single click"
      subtitle="FirstResume's One Click Apply lets you apply to jobs instantly. Your AI-tailored resume and cover letter are generated and submitted automatically."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png"
      heroImageAlt="One Click Apply interface"
      summaryText="Paste a job description, click once, and FirstResume creates and submits your perfectly tailored application instantly."
      features={[
        { number: "01", text: "Paste job description" },
        { number: "02", text: "AI generates tailored resume & cover letter" },
        { number: "03", text: "Submit application with one click" },
      ]}
      featureCardTitle="From job post to submitted application in seconds"
      featureCardText="Our AI reads the job description, matches it to your profile, and crafts the perfect application — all while you grab a coffee."
      benefits={[
        { icon: "⏱️", title: "60x Faster", description: "What used to take 60 minutes now takes under 1 minute with AI-powered automation." },
        { icon: "✨", title: "Always Tailored", description: "Every application is uniquely crafted for the specific job — never a generic resume again." },
        { icon: "📈", title: "More Interviews", description: "Tailored applications get 3x more interview callbacks than generic ones." },
      ]}
      relatedFeatures={[
        { name: "Auto Apply", href: "/features/auto-apply" },
        { name: "AI CV Builder", href: "/features/ai-cv-builder" },
        { name: "AI Cover Letter Generator", href: "/features/ai-cover-letter-generator" },
      ]}
    />
  );
}
