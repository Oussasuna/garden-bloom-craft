import FeaturePageLayout from "@/components/FeaturePageLayout";

export default function AutoApplyPage() {
  return (
    <FeaturePageLayout
      badge="Automation"
      badgeColor="#0099FF"
      title="The first platform that automatically applies on your behalf"
      subtitle="Define your job search preferences from our dashboard, upload your CV and let us do the hard job of finding jobs and applying on your behalf."
      heroImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/form-2.webp"
      heroImageAlt="Automated job application form"
      summaryText="We automatically fill out job application forms with your personal data, upload your CV and click the Submit button."
      features={[
        { number: "01", text: "Match with hundreds of jobs" },
        { number: "02", text: "Automatically apply to jobs" },
        { number: "03", text: "Get statistics and improve your CV" },
      ]}
      featureCardTitle="Automated applications like never before"
      featureCardText="FirstResume fills in your personal data, uploads your CV and clicks the Submit button on your behalf."
      benefits={[
        { icon: "⚡", title: "Save Hours Daily", description: "Stop spending hours manually filling out the same application forms. Let our AI do it for you." },
        { icon: "🎯", title: "Precision Targeting", description: "Our system matches you with the most relevant jobs based on your profile and preferences." },
        { icon: "📊", title: "Real-time Tracking", description: "Monitor all your automatic applications in one dashboard with full transparency." },
      ]}
      steps={[
        { title: "Create a Loop & Access Automations", description: "Begin by creating a new loop in FirstResume. Follow the setup process until you reach the last step, where you can access the Automations tab.", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/autoapply1-3.webp" },
        { title: "Set Your Preferences", description: "Configure your job search criteria including job titles, locations, salary range, and company types. Our AI will use these to find the best matches for you.", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/form-2.webp" },
        { title: "Let Auto Apply Do the Work", description: "Activate Auto Apply and watch as FirstResume automatically applies to matching jobs on your behalf, 24/7, while you focus on interview prep.", image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png" },
      ]}
      relatedFeatures={[
        { name: "One Click Apply", href: "/features/one-click-apply" },
        { name: "Job Matching", href: "/features/job-matching" },
        { name: "Job Application Tracker", href: "/features/job-application-tracker" },
        { name: "AI CV Builder", href: "/features/ai-cv-builder" },
      ]}
    />
  );
}
