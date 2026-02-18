import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function JobAggregatorPage() {
  return (
    <FeaturePageLayout
      badge="Job Discovery"
      badgeColor="#0099FF"
      title="Find every job posting across the entire web"
      subtitle="FirstResume aggregates job postings from LinkedIn, Indeed, Glassdoor, and hundreds of company career pages — all in one unified feed."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbc7f4e061c68a6911_20250724_FR_demo_application_tracker.png"
      heroImageAlt="Job aggregator interface"
      summaryText="Stop switching between 10 different job boards. See every relevant opening from every source in one place, filtered for you by AI."
      features={[
        { number: "01", text: "Aggregates from 100+ job boards and company pages" },
        { number: "02", text: "AI filters for relevance to your profile" },
        { number: "03", text: "Real-time updates as new jobs are posted" },
        { number: "04", text: "Duplicate detection across sources" },
      ]}
      featureCardTitle="The internet's job listings, filtered just for you"
      featureCardText="Our crawler indexes new job postings in real-time from every major source and instantly scores them against your profile."
      benefits={[
        { icon: "🌐", title: "100+ Sources", description: "We index jobs from LinkedIn, Indeed, Glassdoor, and hundreds of company career pages." },
        { icon: "⚡", title: "Real-time Updates", description: "New jobs appear in your feed within minutes of being posted anywhere on the web." },
        { icon: "🤖", title: "AI-Ranked", description: "Jobs are ranked by how well they match your profile, so you always see the best ones first." },
      ]}
      relatedFeatures={[
        { name: "Job Matching", href: "/features/job-matching" },
        { name: "Job Filtering", href: "/features/job-filtering" },
        { name: "Auto Apply", href: "/features/auto-apply" },
      ]}
    />
  );
}
