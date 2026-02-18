import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function JobTrackerPage() {
  return (
    <FeaturePageLayout
      badge="Organization"
      badgeColor="#22C55E"
      title="Zero-effort AI Job Application Tracker"
      subtitle="The best application tracker on the market that automatically organises key information from the job description with AI. No spreadsheets, no manual entry."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbc7f4e061c68a6911_20250724_FR_demo_application_tracker.png"
      heroImageAlt="Job Application Tracker interface"
      summaryText="Stop losing track of your applications in spreadsheets. FirstResume automatically organises all the key information from every job you apply to."
      features={[
        { number: "01", text: "Automatic data extraction from job posts" },
        { number: "02", text: "Visual pipeline of all your applications" },
        { number: "03", text: "Action checklists for every application" },
        { number: "04", text: "Deadline and follow-up reminders" },
      ]}
      featureCardTitle="Your entire job search in one place"
      featureCardText="FirstResume automatically captures company details, role requirements, deadlines, and your application status — all without lifting a finger."
      benefits={[
        { icon: "🗂️", title: "Auto-Organized", description: "Every job you apply to is automatically catalogued with company info, role details, and requirements." },
        { icon: "✅", title: "Action Checklists", description: "Get personalized checklists for each application so you never miss an important step." },
        { icon: "📍", title: "Visual Pipeline", description: "See all your applications in a Kanban-style board — from applied to offer stage." },
      ]}
      relatedFeatures={[
        { name: "Auto Apply", href: "/features/auto-apply" },
        { name: "AI Job Matching", href: "/features/job-matching" },
        { name: "Job Filtering", href: "/features/job-filtering" },
      ]}
    />
  );
}
