import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function DynamicEmailsPage() {
  return (
    <FeaturePageLayout
      badge="Outreach"
      badgeColor="#0099FF"
      title="Dynamic AI outreach emails that get responses"
      subtitle="Generate hyper-personalized outreach emails for networking, cold outreach, and follow-ups. Each email is tailored to the company, role, and recipient."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc2d46abe5ce23d39a_20250724_FR_demo_interview.png"
      heroImageAlt="Dynamic emails interface"
      summaryText="Stop sending the same generic email to every recruiter. Our AI crafts personalized emails that reference the specific company, role, and your unique background."
      features={[
        { number: "01", text: "Personalized cold outreach emails" },
        { number: "02", text: "Follow-up email sequences" },
        { number: "03", text: "Thank you notes after interviews" },
        { number: "04", text: "Networking introduction emails" },
      ]}
      featureCardTitle="Emails that sound like you wrote them"
      featureCardText="Our AI analyzes the company, role, and your background to write emails that feel genuine and personal — because getting noticed is half the battle."
      benefits={[
        { icon: "📧", title: "Higher Response Rates", description: "Personalized outreach emails get 5x more responses than generic templates." },
        { icon: "🤖", title: "AI-Personalized", description: "Each email references specific company details, job requirements, and your experience." },
        { icon: "⚡", title: "Ready in Seconds", description: "Generate a compelling outreach email for any opportunity in under 30 seconds." },
      ]}
      relatedFeatures={[
        { name: "Email Finder", href: "/features/email-finder" },
        { name: "AI Cover Letter Generator", href: "/features/ai-cover-letter-generator" },
        { name: "AI CV Builder", href: "/features/ai-cv-builder" },
      ]}
    />
  );
}
