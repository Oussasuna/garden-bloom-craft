import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AiCoverLetterPage() {
  return (
    <FeaturePageLayout
      badge="Cover Letters"
      badgeColor="#22C55E"
      title="AI Cover Letter Generator that actually sounds like you"
      subtitle="Stop writing cover letters from scratch. Our AI generates compelling, personalized cover letters for every job that highlight your most relevant experience and sound authentically you."
      heroImage="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png"
      heroImageAlt="AI Cover Letter Generator interface"
      summaryText="A great cover letter can make or break your application. Our AI generates tailored, compelling cover letters in seconds — not hours."
      features={[
        { number: "01", text: "Input your profile and the job description" },
        { number: "02", text: "AI generates a tailored cover letter" },
        { number: "03", text: "Edit to add your personal voice" },
        { number: "04", text: "Download and submit" },
      ]}
      featureCardTitle="Cover letters that get read — and remembered"
      featureCardText="Our AI references specific things from the job description and connects them to your exact experience, creating cover letters that feel personal and make an impact."
      benefits={[
        { icon: "✍️", title: "Sounds Like You", description: "Our AI matches your writing style and voice so the letter feels authentic, not robotic." },
        { icon: "🎯", title: "Job-Specific", description: "Every letter directly references the company, role, and requirements from the job posting." },
        { icon: "⚡", title: "In Seconds", description: "Generate a complete, compelling cover letter for any role in under 30 seconds." },
      ]}
      steps={[
        { title: "Paste the job description", description: "Copy any job posting. Our AI reads the role, company, and requirements to build context for your cover letter.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbbc336acac57068aa_20250724_FR_demo_compatibility.png" },
        { title: "AI generates your cover letter", description: "In seconds, receive a compelling, personalized cover letter that connects your specific experience to this exact role.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png" },
        { title: "Edit, download, and submit", description: "Make any final tweaks to add your personal touch, then download the PDF or copy to submit with your application.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc2d46abe5ce23d39a_20250724_FR_demo_interview.png" },
      ]}
      relatedFeatures={[
        { name: "AI CV Builder", href: "/features/ai-cv-builder" },
        { name: "Dynamic Emails", href: "/features/dynamic-emails" },
        { name: "AI Question Answering", href: "/features/ai-question-answering" },
      ]}
    />
  );
}
