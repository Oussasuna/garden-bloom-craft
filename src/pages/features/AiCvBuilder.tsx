import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AiCvBuilderPage() {
  return (
    <FeaturePageLayout
      badge="Perfect application in seconds"
      badgeColor="#0099FF"
      title="AI CV Builder that helps you get hired at the top companies"
      subtitle="Professionally designed templates, AI features, and a fully automated platform optimized for job applications that beat applicant tracking systems (ATS)."
      heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/ai-cv-builder-2.webp"
      heroImageAlt="AI CV Builder interface"
      summaryText="Create a stunning, ATS-optimized resume in minutes. Our AI tailors every section of your CV to the specific job you're applying for."
      features={[
        { number: "01", text: "Keyword matched to every job description" },
        { number: "02", text: "ATS optimised formatting" },
        { number: "03", text: "Save 60 minutes per application" },
        { number: "04", text: "Perfectly formatted professional templates" },
      ]}
      featureCardTitle="Your perfect resume, instantly"
      featureCardText="Input your profile once. Then for every new job, FirstResume generates a perfectly tailored, beautifully formatted resume that highlights exactly what matters for that role."
      benefits={[
        { icon: "🎨", title: "Professional Templates", description: "Choose from dozens of recruiter-approved templates that are ATS-friendly and visually impressive." },
        { icon: "🤖", title: "AI-Tailored Content", description: "Our AI rewrites your bullet points and highlights skills relevant to each specific job." },
        { icon: "⚡", title: "Instant Generation", description: "Generate a complete, tailored CV for any job in under 60 seconds." },
      ]}
      steps={[
        { title: "Build your profile once", description: "Enter your work history, education, skills, and achievements. This is your master profile that powers all your applications.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png" },
        { title: "Paste a job description", description: "Copy any job posting from any site. Our AI instantly analyzes the requirements and identifies what your CV needs to highlight.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbbc336acac57068aa_20250724_FR_demo_compatibility.png" },
        { title: "Download your tailored CV", description: "Get a perfectly formatted, ATS-optimized PDF that's tailored specifically for that role. Ready to submit in seconds.", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/ai-cv-builder-2.webp" },
      ]}
      relatedFeatures={[
        { name: "AI Cover Letter Generator", href: "/features/ai-cover-letter-generator" },
        { name: "AI CV Checker", href: "/features/ai-cv-checker" },
        { name: "One Click Apply", href: "/features/one-click-apply" },
        { name: "Job Matching", href: "/features/job-matching" },
      ]}
    />
  );
}
