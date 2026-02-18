import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function EmailFinderPage() {
  return (
    <FeaturePageLayout
      badge="Networking"
      badgeColor="#0099FF"
      title="Find the right email address, every time"
      subtitle="Stop sending applications into a black hole. Use FirstResume's Email Finder to reach out directly to hiring managers and decision makers at any company."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc2d46abe5ce23d39a_20250724_FR_demo_interview.png"
      heroImageAlt="Email finder interface"
      summaryText="Direct outreach to hiring managers gets 5x more responses than applying through job boards alone. Find verified email addresses in seconds."
      features={[
        { number: "01", text: "Find verified email addresses for any professional" },
        { number: "02", text: "Search by company and role" },
        { number: "03", text: "Get confidence scores for each email" },
        { number: "04", text: "Export contact lists for outreach" },
      ]}
      featureCardTitle="Get in front of the right people"
      featureCardText="Most candidates only apply through job boards. Email Finder gives you the competitive edge of direct outreach, straight to the inbox of decision makers."
      benefits={[
        { icon: "📧", title: "Verified Emails", description: "All emails are verified before being shown to you — no more bounced emails." },
        { icon: "⚡", title: "Instant Results", description: "Find email addresses for any professional at any company in seconds." },
        { icon: "🎯", title: "Confidence Scores", description: "Every result comes with a confidence score so you know how reliable it is." },
      ]}
      relatedFeatures={[
        { name: "Dynamic Emails", href: "/features/dynamic-emails" },
        { name: "LinkedIn Auto Apply", href: "/features/linkedin-auto-apply" },
        { name: "One Click Apply", href: "/features/one-click-apply" },
      ]}
    />
  );
}
