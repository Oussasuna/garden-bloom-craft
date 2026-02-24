import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function AiCvBuilderPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h1 className="text-[36px] md:text-[56px] font-extrabold text-black leading-[1.1] mb-6 tracking-[-0.02em]">AI CV Builder that helps you get hired at the top companies</h1>
              <p className="text-[18px] text-[#555555] leading-[1.6] mb-8">Professionally designed templates, AI features, and a fully automated platform optimized for job applications that beat applicant tracking systems (ATS).</p>
              <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">Sign up for free</a>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/ai-cv-builder-2.webp" alt="AI CV Builder interface" className="rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] object-contain w-full h-auto max-w-[600px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-[100px]">
          <h2 className="text-[36px] md:text-[42px] font-bold text-black text-center tracking-[-0.02em]">Build Your Resume In Four Easy Steps</h2>
        </div>
      </section>

      {[
      { title: "Choose Your Template", desc: "Pick from a variety of professional and modern resume templates that suit your industry and experience level.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/chooseTemplate-3.png", imgAlt: "Choose your template", reverse: false },
      { title: "Review And Edit", desc: "Double-check your information for accuracy and clarity. Make sure everything looks great and reads smoothly.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/content-4.png", imgAlt: "Customize your content", reverse: true },
      { title: "Download And Share", desc: "Export your resume in PDF format and start applying to jobs right away, confident that you're making a great first impression.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/download-6.png", imgAlt: "Download and share", reverse: false }].
      map((step, i) =>
      <section key={i} className="py-[100px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className={`flex flex-col ${step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-[30px]`}>
              <div className={`w-full lg:w-1/2 ${step.reverse ? "lg:pl-16 order-2" : "lg:pr-10 order-2 lg:order-1"}`}>
                <h2 className="text-[36px] md:text-[42px] font-bold text-black leading-[1.2] mb-5 tracking-[-0.02em]">{step.title}</h2>
                <p className="text-[18px] text-[#555555] leading-[1.6] mb-6">{step.desc}</p>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[16px] transition-all hover:opacity-90">Start today</a>
              </div>
              <div className={`w-full lg:w-1/2 ${step.reverse ? "order-1" : "order-1 lg:order-2"} mb-8 lg:mb-0`}>
                <div className="rounded-[12px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0]">
                  <img src={step.img} alt={step.imgAlt} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      








      <Footer />
    </div>);

}