export default function AiCvBuilderPage() {
  return (
    <div className="bg-[#F4F7F9] min-h-screen">
      <section className="pt-[140px] pb-[60px] md:pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h1 className="text-[36px] md:text-[56px] font-extrabold text-black leading-[1.1] mb-6 tracking-[-0.02em]">AI CV Builder that helps you get hired at the top companies</h1>
              <p className="text-[18px] text-[#4A4A4A] leading-[1.6] mb-8">Professionally designed templates, AI features, and a fully automated platform optimized for job applications that beat applicant tracking systems (ATS).</p>
              <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-[5px] font-semibold text-[16px] hover:bg-[#1a1a1a] transition-colors">Sign up for free</a>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/ai-cv-builder-2.webp" alt="AI CV Builder interface" className="rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#DFE6ED] object-contain w-full h-auto max-w-[600px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-8 pt-10 pb-6">
        <h2 className="text-[28px] md:text-[36px] font-bold text-black text-center">Build Your Resume In Four Easy Steps</h2>
      </section>

      {[
        { title: "Choose Your Template", desc: "Pick from a variety of professional and modern resume templates that suit your industry and experience level.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/chooseTemplate-3.png", imgAlt: "Choose your template", reverse: false },
        { title: "Review And Edit", desc: "Double-check your information for accuracy and clarity. Make sure everything looks great and reads smoothly.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/content-4.png", imgAlt: "Customize your content", reverse: true },
        { title: "Download And Share", desc: "Export your resume in PDF format and start applying to jobs right away, confident that you're making a great first impression.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/download-6.png", imgAlt: "Download and share", reverse: false },
      ].map((step, i) => (
        <section key={i} className="py-[80px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className={`flex flex-col lg:flex-row items-center gap-10`}>
              <div className={`w-full lg:w-1/2 ${step.reverse ? "lg:pl-16 order-2" : "lg:pr-10 order-2 lg:order-1"}`}>
                <h2 className="text-[28px] md:text-[36px] font-bold text-black leading-[1.2] mb-5">{step.title}</h2>
                <p className="text-[18px] text-[#4A4A4A] leading-[1.6] mb-6">{step.desc}</p>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-[5px] font-semibold text-[16px] hover:bg-[#1a1a1a] transition-colors">Start today</a>
              </div>
              <div className={`w-full lg:w-1/2 ${step.reverse ? "order-1" : "order-1 lg:order-2"} mb-8 lg:mb-0`}>
                <img src={step.img} alt={step.imgAlt} className="w-full h-auto rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#DFE6ED]" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#e8ebf0] py-[80px] md:py-[100px] text-center px-6 border-t border-[#DFE6ED]">
        <div className="w-[45px] h-[45px] rounded-full bg-[#97a3b3] flex items-center justify-center mx-auto mb-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
        </div>
        <h2 className="text-[28px] md:text-[36px] font-bold text-black mb-8 leading-[1.2]">JobExCV Helps You Find A Job Faster</h2>
        <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-[5px] font-semibold text-[16px] hover:opacity-85 transition-opacity">Get Started Now</a>
      </section>
    </div>
  );
}
