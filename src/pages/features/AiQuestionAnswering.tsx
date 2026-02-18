import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AiQuestionAnsweringPage() {
  return (
    <FeaturePageLayout
      badge="AI Q&A"
      badgeColor="#B45309"
      title="Answer any application question with AI"
      subtitle="Job applications ask weird, specific questions. FirstResume's AI Question Answering gives you perfect, personalized answers to any application question in seconds."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc2d46abe5ce23d39a_20250724_FR_demo_interview.png"
      heroImageAlt="AI Question Answering interface"
      summaryText="Never get stuck on a tricky application question again. Our AI reads the question, considers your background, and writes a compelling personalized answer."
      features={[
        { number: "01", text: "Paste any application question" },
        { number: "02", text: "AI reads your profile for context" },
        { number: "03", text: "Get a personalized, compelling answer" },
        { number: "04", text: "Edit and submit with confidence" },
      ]}
      featureCardTitle="The right answer, every time"
      featureCardText="Whether it's 'Why do you want to work here?' or a technical scenario question, our AI gives you thoughtful, personalized answers grounded in your real experience."
      benefits={[
        { icon: "💬", title: "Any Question", description: "Handles behavioral, situational, motivational, technical, and creative application questions." },
        { icon: "🧠", title: "Context-Aware", description: "Answers are grounded in your specific background and experience — never generic." },
        { icon: "⚡", title: "Instant", description: "Get a well-crafted answer in seconds, then customize it to your voice." },
      ]}
      relatedFeatures={[
        { name: "AI Mock Interview", href: "/features/ai-mock-interview" },
        { name: "AI Cover Letter Generator", href: "/features/ai-cover-letter-generator" },
        { name: "One Click Apply", href: "/features/one-click-apply" },
      ]}
    />
  );
}
