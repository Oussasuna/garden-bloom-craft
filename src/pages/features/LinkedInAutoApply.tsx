import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function LinkedInAutoApplyPage() {
  return (
    <FeaturePageLayout
      badge="LinkedIn Extension"
      badgeColor="#0077B5"
      title="Apply on LinkedIn automatically with our extension"
      subtitle="Our Chrome extension brings FirstResume's AI directly into LinkedIn. Generate tailored applications and auto-fill LinkedIn Easy Apply forms without leaving the page."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png"
      heroImageAlt="LinkedIn auto apply extension"
      summaryText="The FirstResume LinkedIn extension lets you generate a tailored application and auto-fill any LinkedIn Easy Apply form in seconds."
      features={[
        { number: "01", text: "Install the Chrome extension" },
        { number: "02", text: "Browse LinkedIn jobs normally" },
        { number: "03", text: "Click to generate tailored application" },
        { number: "04", text: "Auto-fill and submit Easy Apply forms" },
      ]}
      featureCardTitle="Turn LinkedIn into your personal hiring machine"
      featureCardText="The extension adds a FirstResume button directly to every LinkedIn job posting. One click generates your tailored resume, cover letter, and fills the application form."
      benefits={[
        { icon: "🔌", title: "Seamless Integration", description: "Works directly within LinkedIn — no copy-pasting or switching between tabs." },
        { icon: "⚡", title: "Instant Applications", description: "Apply to any LinkedIn job in under 60 seconds with a tailored, AI-generated application." },
        { icon: "🎯", title: "Always Tailored", description: "Every application is customized for the specific role — never submit a generic resume again." },
      ]}
      relatedFeatures={[
        { name: "Auto Apply", href: "/features/auto-apply" },
        { name: "One Click Apply", href: "/features/one-click-apply" },
        { name: "AI CV Builder", href: "/features/ai-cv-builder" },
      ]}
    />
  );
}
