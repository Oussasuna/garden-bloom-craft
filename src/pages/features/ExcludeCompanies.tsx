import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function ExcludeCompaniesPage() {
  return (
    <FeaturePageLayout
      badge="Smart Filtering"
      badgeColor="#6B7280"
      title="Exclude companies you never want to work for"
      subtitle="Take full control of your job search by blacklisting companies you don't want to apply to. Our system will automatically skip them in all your searches and auto-applications."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbc7f4e061c68a6911_20250724_FR_demo_application_tracker.png"
      heroImageAlt="Exclude companies interface"
      summaryText="Whether it's a previous employer, a competitor, or just companies that don't align with your values — you decide who to skip."
      features={[
        { number: "01", text: "Add companies to your exclusion list" },
        { number: "02", text: "Auto Apply skips excluded companies" },
        { number: "03", text: "Never accidentally apply to blacklisted firms" },
      ]}
      featureCardTitle="Your job search, your rules"
      featureCardText="Your exclusion list is applied across all FirstResume features — manual applications, Auto Apply, and job matching all respect your preferences."
      benefits={[
        { icon: "🚫", title: "Full Control", description: "You decide which companies to skip. Your list is applied automatically across all features." },
        { icon: "🔒", title: "Privacy Safe", description: "Avoid accidentally applying to your current employer or blacklisted companies." },
        { icon: "🎯", title: "Focused Search", description: "Only see and apply to companies that genuinely interest you." },
      ]}
      relatedFeatures={[
        { name: "Auto Apply", href: "/features/auto-apply" },
        { name: "Job Filtering", href: "/features/job-filtering" },
        { name: "Job Matching", href: "/features/job-matching" },
      ]}
    />
  );
}
