import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function JobMatchingPage() {
  return (
    <FeaturePageLayout
      badge="AI Matching"
      badgeColor="#22C55E"
      title="Comprehensive AI Job Match Analysis"
      subtitle="Maximise your chance of success with each application by unlocking exclusive insights about yourself and the job. Know your compatibility score before you apply."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbbc336acac57068aa_20250724_FR_demo_compatibility.png"
      heroImageAlt="Job matching interface"
      summaryText="Don't apply blindly. Our AI gives you a compatibility score and detailed breakdown of your strengths, weaknesses, and improvement areas for every job."
      features={[
        { number: "01", text: "Compatibility score for every application" },
        { number: "02", text: "Strengths and weaknesses breakdown" },
        { number: "03", text: "Recommended actions to improve your chances" },
        { number: "04", text: "Skill gap identification" },
      ]}
      featureCardTitle="Know your odds before you apply"
      featureCardText="Our AI compares your complete profile against every aspect of the job description to give you a precise compatibility score and actionable insights."
      benefits={[
        { icon: "📊", title: "Compatibility Score", description: "Get a precise percentage score showing how well you match each job's requirements." },
        { icon: "💡", title: "Actionable Insights", description: "Know exactly what to highlight in your application to maximize your chances." },
        { icon: "🎯", title: "Skill Gap Analysis", description: "Identify which skills to acquire to become a stronger candidate for your target roles." },
      ]}
      steps={[
        { title: "Paste the job description", description: "Copy any job posting from any source and paste it into FirstResume. Our AI immediately starts analyzing it against your profile.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbbc336acac57068aa_20250724_FR_demo_compatibility.png" },
        { title: "Get your compatibility score", description: "Within seconds, receive a detailed breakdown of your match — overall score, skill matches, experience alignment, and more.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbc7f4e061c68a6911_20250724_FR_demo_application_tracker.png" },
        { title: "Apply with confidence", description: "Use the insights to tailor your application and interview prep. Apply knowing exactly where you stand and how to present yourself.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png" },
      ]}
      relatedFeatures={[
        { name: "AI CV Builder", href: "/features/ai-cv-builder" },
        { name: "Job Application Tracker", href: "/features/job-application-tracker" },
        { name: "AI Mock Interview", href: "/features/ai-mock-interview" },
      ]}
    />
  );
}
