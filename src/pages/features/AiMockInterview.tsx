import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AiMockInterviewPage() {
  return (
    <FeaturePageLayout
      badge="Interview Prep"
      badgeColor="#0099FF"
      title="AI Interview Prep & Company Research"
      subtitle="Ace every interview with AI-predicted questions, personalized sample answers, and automated company research. Walk into every interview fully prepared."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc2d46abe5ce23d39a_20250724_FR_demo_interview.png"
      heroImageAlt="AI Mock Interview interface"
      summaryText="Impress your interviewer by practicing AI predicted interview questions, concepts with automated company research."
      features={[
        { number: "01", text: "AI company research that shows motivation" },
        { number: "02", text: "Practice questions with AI sample responses" },
        { number: "03", text: "Recommended questions for you to ask" },
        { number: "04", text: "Key concept explanations for the role" },
      ]}
      featureCardTitle="Prepare smarter, not harder"
      featureCardText="Our AI generates the most likely interview questions for your specific role and company, complete with tailored sample answers based on your background."
      benefits={[
        { icon: "🎯", title: "Predicted Questions", description: "Our AI predicts the most likely questions based on the role, company, and your experience level." },
        { icon: "💡", title: "Sample Answers", description: "Get personalized sample answers using your specific background, not generic templates." },
        { icon: "🏢", title: "Company Research", description: "Get automatically compiled company intelligence to show genuine knowledge and motivation." },
      ]}
      steps={[
        { title: "Enter the job and company details", description: "Paste the job description and company name. Our AI immediately starts generating your personalized interview preparation guide.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc2d46abe5ce23d39a_20250724_FR_demo_interview.png" },
        { title: "Practice with predicted questions", description: "Review the AI-predicted questions and study the personalized sample answers. Practice out loud to build confidence.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbbc336acac57068aa_20250724_FR_demo_compatibility.png" },
        { title: "Walk in fully prepared", description: "With company research, likely questions, and tailored answers — you'll walk into every interview with genuine confidence.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png" },
      ]}
      relatedFeatures={[
        { name: "AI Question Answering", href: "/features/ai-question-answering" },
        { name: "Job Matching", href: "/features/job-matching" },
        { name: "AI CV Builder", href: "/features/ai-cv-builder" },
      ]}
    />
  );
}
