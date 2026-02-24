import { List } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function AiCvCheckerPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-[60px]">
            <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black mb-6 max-w-[900px]">Best AI CV checker to improve your resume with AI</h1>
            <p className="text-[18px] text-[#555555] leading-[1.6] max-w-[800px] mb-10">Use our AI CV checker to improve your resume, make it ATS friendly and get more interviews.</p>
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">Check your CV score with AI →</a>
          </div>
          <div className="relative w-full max-w-[1000px] mx-auto">
            <div className="relative rounded-[12px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-white border border-[#E2E8F0]">
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvChecker-2.webp" alt="AI CV Checker dashboard" className="w-full h-auto object-cover rounded-[12px]" />
            </div>
          </div>
        </div>
        <div className="w-full mt-[-80px] pt-[120px] pb-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-6 max-w-[1000px] mx-auto text-center">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-black">Not sure if your CV is good? Use our AI Checker to find your weaknesses</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="w-full lg:w-7/12">
              <div className="max-w-[650px]">
                <h2 className="text-[36px] md:text-[42px] font-bold text-black leading-[1.2] mb-10 tracking-[-0.02em]">Use Our AI CV Checker For Free</h2>
                <div className="space-y-0 text-black">
                  {["Upload your CV in our automated AI checker", "JobExCV will scan your CV and identify if it follows best practices and if it is ATS friendly", "JobExCV will use AI to provide targeted recommendations to make it ATS friendly and get you interviews", "Set your optimized CV as default and start automating your job applications with AI"].map((text, i) =>
                  <div key={i} className="flex items-start gap-4 py-4 border-t border-[#E2E8F0]">
                      <span className="text-[16px] font-medium text-[#555555] underline whitespace-nowrap pt-1">0{i + 1}</span>
                      <span className="text-[18px] font-medium">{text}</span>
                    </div>
                  )}
                </div>
                <div className="mt-10">
                  <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center px-8 py-[14px] border border-black rounded-[8px] font-semibold text-black transition-all hover:bg-black hover:text-white text-[16px]">Start today</a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 mt-12 lg:mt-0">
              <div className="bg-white rounded-[12px] p-8 md:p-10 border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] max-w-[450px] mx-auto lg:ml-auto">
                <div className="mb-6"><List size={32} strokeWidth={1.5} className="text-black" /></div>
                <h3 className="text-[22px] md:text-[24px] font-bold text-black leading-[1.3] mb-4">Tired of applying and getting ghosted?</h3>
                <p className="text-[16px] text-[#555555] leading-[1.6]">Before sending a job application, make sure that your CV follows the best practices. Our CV Checker uses AI to scan your CV, give you targeted recommendations and help you increase your resume score!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-[100px]">
          <h2 className="text-[36px] md:text-[42px] font-bold text-black text-center tracking-[-0.02em]">Check How Our AI CV Checker Works:</h2>
        </div>
      </section>

      {[
      { title: "Upload Your CV With One Click", desc: "Boost your job prospects by uploading your CV into our AI CV checker for instant, automated feedback and optimization.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker1-3.webp", reverse: false },
      { title: "Scan Your CV With AI", desc: "Let JobExCV AI CV checker analyze your resume, ensuring it checks best practices and is fully optimized for ATS compatibility.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker2-4.webp", reverse: true },
      { title: "AI Recommends, You Improve!", desc: "JobExCV AI CV checker delivers targeted recommendations to optimize your resume for ATS compatibility and boost your chances of landing interviews.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker3-5.webp", reverse: false },
      { title: "Set Your Optimized CV As Default", desc: "Once your CV is optimized and scores high in our AI CV checker, set it as your default and let AI streamline your job applications effortlessly!", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker4-6.webp", reverse: true }].
      map((step, i) =>
      <section key={i} className="py-[100px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className={`flex flex-col ${step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-[30px]`}>
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <div className="rounded-[12px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0]">
                  <img src={step.img} alt={step.title} className="w-full h-auto object-cover block" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="max-w-[540px]">
                  <h2 className="text-[36px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-black mb-4">{step.title}</h2>
                  <p className="text-[18px] leading-[1.6] text-[#555555] mb-8">{step.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      








      <section className="bg-[#F0F2F5] py-[100px] text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[42px] font-bold text-black mb-10 leading-tight tracking-[-0.02em]">JobExCV Helps You Find A Job Faster</h2>
          <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[16px] transition-all hover:opacity-90 group">
            Get Started Now
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>
      <Footer />
    </div>);

}