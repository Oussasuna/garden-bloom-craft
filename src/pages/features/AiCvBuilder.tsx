export default function AiCvBuilderPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-[140px] pb-[60px] md:pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#0f0f0f] leading-[1.1] mb-6 tracking-[-0.02em]">AI CV Builder that helps you get hired at the top companies</h1>
              <p className="text-[18px] text-[#52525b] leading-[1.6] mb-8">Professionally designed templates, AI features, and a fully automated platform optimized for job applications that beat applicant tracking systems (ATS).</p>
              <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-[#0f0f0f] text-white px-7 py-[14px] rounded-full font-semibold text-[16px] transition-all duration-200 hover:scale-[1.02]">Sign up for free</a>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/ai-cv-builder-2.webp" alt="AI CV Builder interface" className="rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#e4e4e7] object-contain w-full h-auto max-w-[600px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-8 pt-10 pb-6 bg-[#f9fafb]">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f0f0f] text-center">Build Your Resume In Four Easy Steps</h2>
      </section>

      {[
        { title: "Choose Your Template", desc: "Pick from a variety of professional and modern resume templates that suit your industry and experience level.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/chooseTemplate-3.png", imgAlt: "Choose your template", reverse: false },
        { title: "Review And Edit", desc: "Double-check your information for accuracy and clarity. Make sure everything looks great and reads smoothly.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/content-4.png", imgAlt: "Customize your content", reverse: true },
        { title: "Download And Share", desc: "Export your resume in PDF format and start applying to jobs right away, confident that you're making a great first impression.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/download-6.png", imgAlt: "Download and share", reverse: false },
      ].map((step, i) => (
        <section key={i} className={`py-[80px] md:py-[100px] ${i % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}`}>
          <div className="max-w-[1200px] mx-auto px-8">
            <div className={`flex flex-col lg:flex-row items-center gap-10`}>
              <div className={`w-full lg:w-1/2 ${step.reverse ? "lg:pl-16 order-2" : "lg:pr-10 order-2 lg:order-1"}`}>
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f0f0f] leading-[1.2] mb-5">{step.title}</h2>
                <p className="text-[18px] text-[#71717a] leading-[1.6] mb-6">{step.desc}</p>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-[#0f0f0f] text-white px-7 py-[14px] rounded-full font-semibold text-[16px] transition-all duration-200 hover:scale-[1.02]">Start today</a>
              </div>
              <div className={`w-full lg:w-1/2 ${step.reverse ? "order-1" : "order-1 lg:order-2"} mb-8 lg:mb-0`}>
                <img src={step.img} alt={step.imgAlt} className="w-full h-auto rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#e4e4e7]" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#f9fafb] py-[80px] md:py-[100px] text-center px-6 border-t border-[#e4e4e7]">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f0f0f] mb-8 leading-[1.2]">JobExCV Helps You Find A Job Faster</h2>
        <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-[#0f0f0f] text-white px-7 py-[14px] rounded-full font-semibold text-[16px] transition-all duration-200 hover:scale-[1.02]">Get Started Now</a>
      </section>
    </div>
  );
}
