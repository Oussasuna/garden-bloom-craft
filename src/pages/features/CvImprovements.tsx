import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function CvImprovementsPage() {
  return (
    <FeaturePageLayout
      badge="AI CV Improvement"
      badgeColor="#0099FF"
      title="AI-powered CV improvements that get you hired"
      subtitle="Get instant, actionable feedback on your CV with our AI-powered improvement engine. Every suggestion is tailored to the specific job you're applying for."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png"
      heroImageAlt="CV Improvements interface"
      summaryText="Upload your CV and get specific, actionable improvements within seconds. Our AI knows exactly what recruiters and ATS systems want to see."
      features={[
        { number: "01", text: "Upload your existing CV" },
        { number: "02", text: "Get AI-powered improvement suggestions" },
        { number: "03", text: "Apply changes with one click" },
        { number: "04", text: "Download your improved CV" },
      ]}
      featureCardTitle="Your CV, perfected by AI"
      featureCardText="Our AI analyzes hundreds of data points in your CV and compares them against successful applications to give you targeted, proven improvement suggestions."
      benefits={[
        { icon: "🎯", title: "ATS Optimized", description: "Ensure your CV passes applicant tracking systems with keyword optimization and proper formatting." },
        { icon: "📝", title: "Specific Feedback", description: "Get clear, actionable suggestions — not vague advice. Know exactly what to change and why." },
        { icon: "⚡", title: "Instant Results", description: "Get your improved CV in seconds, not days. No waiting for human reviewers." },
      ]}
      relatedFeatures={[
        { name: "AI CV Builder", href: "/features/ai-cv-builder" },
        { name: "AI CV Checker", href: "/features/ai-cv-checker" },
        { name: "Profile-Job Match", href: "/features/job-matching" },
      ]}
    />
  );
}
