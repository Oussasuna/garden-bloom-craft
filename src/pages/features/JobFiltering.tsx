import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function JobFilteringPage() {
  return (
    <FeaturePageLayout
      badge="Smart Filters"
      badgeColor="#6B7280"
      title="Filter jobs to find exactly what you want"
      subtitle="Use powerful AI-driven filters to narrow down thousands of job postings to only the ones that truly match your criteria — salary, location, company size, and more."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbc7f4e061c68a6911_20250724_FR_demo_application_tracker.png"
      heroImageAlt="Job filtering interface"
      summaryText="Don't waste time scrolling through irrelevant jobs. Set your filters once and only see opportunities that match your specific needs."
      features={[
        { number: "01", text: "Filter by salary range, location, and remote options" },
        { number: "02", text: "Filter by company size and industry" },
        { number: "03", text: "Filter by required experience level" },
        { number: "04", text: "Save filter presets for different job searches" },
      ]}
      featureCardTitle="Your perfect job is in here — let's find it"
      featureCardText="Combine multiple filters to get a highly targeted list of jobs that match all your non-negotiables, saving you hours of scrolling."
      benefits={[
        { icon: "🔍", title: "Precise Filtering", description: "Over 20 filter options let you create highly specific searches that match your ideal criteria." },
        { icon: "💾", title: "Save Presets", description: "Save your filter combinations for different types of roles and switch between them instantly." },
        { icon: "⏱️", title: "Save Hours", description: "Stop scrolling through irrelevant postings. Spend time on applications, not searching." },
      ]}
      relatedFeatures={[
        { name: "Job Aggregator", href: "/features/job-aggregator" },
        { name: "Job Matching", href: "/features/job-matching" },
        { name: "Exclude Companies", href: "/features/exclude-companies" },
      ]}
    />
  );
}
