import { List } from "lucide-react";

export default function AiCvCheckerPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-white pt-[140px] pb-0">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0f0f0f] mb-6 max-w-[900px] mx-auto">Best AI CV checker to improve your resume with AI</h1>
          <p className="text-[18px] text-[#52525b] leading-[1.6] max-w-[700px] mx-auto mb-8">Use our AI CV checker to improve your resume, make it ATS friendly and get more interviews.</p>
          <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-[#0f0f0f] text-white px-7 py-[14px] rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02] mb-16">Check your CV score with AI →</a>
          <div className="w-full max-w-[1000px] mx-auto px-4">
            <div className="relative rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white">
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvChecker-2.webp" alt="AI CV Checker dashboard" className="w-full h-auto object-cover rounded-[16px]" />
            </div>
          </div>
          <div className="w-full max-w-[1140px] mx-auto mt-16 mb-8 px-4">
            <h3 className="text-center text-[20px] md:text-[24px] font-bold text-[#0f0f0f]">Not sure if your CV is good? Use our AI Checker to find your weaknesses</h3>
          </div>
        </div>
      </section>

      <section className="py-[80px] md:py-[100px] bg-[#f9fafb]">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-7/12 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f0f0f] leading-[1.2] mb-10">Use Our AI CV Checker For Free</h2>
              <ol className="list-none p-0 m-0 space-y-6 mb-10">
                {[{ num: "01", text: "Upload your CV in our automated AI checker" }, { num: "02", text: "JobExCV will scan your CV and identify if it follows best practices and if it is ATS friendly" }, { num: "03", text: "JobExCV will use AI to provide targeted recommendations to make it ATS friendly and get you interviews" }, { num: "04", text: "Set your optimized CV as default and start automating your job applications with AI" }].map((item) => (
                  <li key={item.num} className="flex items-start">
                    <span className="text-[14px] font-bold text-[#3b82f6] border-b-2 border-[#3b82f6] pb-[2px] mr-5 shrink-0">{item.num}</span>
                    <span className="text-[18px] text-[#71717a] leading-[1.6]">{item.text}</span>
                  </li>
                ))}
              </ol>
              <a href="https://app.jobexcv.ai" className="inline-flex items-center px-7 py-[14px] border border-[#0f0f0f] rounded-full text-[16px] font-semibold text-[#0f0f0f] bg-transparent transition-all duration-200 hover:bg-[#0f0f0f] hover:text-white hover:scale-[1.02]">Start today</a>
            </div>
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px] bg-[#f9fafb] p-8 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#e4e4e7]">
                <div className="mb-6"><List size={32} strokeWidth={1.5} className="text-[#0f0f0f]" /></div>
                <h3 className="text-[22px] md:text-[24px] font-bold text-[#0f0f0f] mb-4 leading-tight">Tired of applying and getting ghosted?</h3>
                <p className="text-[16px] text-[#71717a] leading-[1.6]">Before sending a job application, make sure that your CV follows the best practices. Our CV Checker uses AI to scan your CV, give you targeted recommendations and help you increase your resume score!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1140px] mx-auto px-4 pb-6">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f0f0f] text-center">Check How Our AI CV Checker Works:</h2>
      </section>

      {[
        { title: "Upload Your CV With One Click", desc: "Boost your job prospects by uploading your CV into our AI CV checker for instant, automated feedback and optimization.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker1-3.webp", reverse: false },
        { title: "Scan Your CV With AI", desc: "Let JobExCV AI CV checker analyze your resume, ensuring it checks best practices and is fully optimized for ATS compatibility.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker2-4.webp", reverse: true },
        { title: "AI Recommends, You Improve!", desc: "JobExCV AI CV checker delivers targeted recommendations to optimize your resume for ATS compatibility and boost your chances of landing interviews.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker3-5.webp", reverse: false },
        { title: "Set Your Optimized CV As Default", desc: "Once your CV is optimized and scores high in our AI CV checker, set it as your default and let AI streamline your job applications effortlessly!", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/cvchecker4-6.webp", reverse: true },
      ].map((step, i) => (
        <section key={i} className={`py-[80px] md:py-[100px] ${i % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}`}>
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className={`w-full lg:w-1/2 ${step.reverse ? "order-1 lg:order-2 lg:pl-8" : "order-2 lg:order-1 lg:pr-8"} mt-8 lg:mt-0`}>
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f0f0f] leading-[1.3] mb-6">{step.title}</h2>
                <p className="text-[18px] text-[#71717a] leading-[1.6]">{step.desc}</p>
              </div>
              <div className={`w-full lg:w-1/2 ${step.reverse ? "order-2 lg:order-1" : "order-1 lg:order-2"} mb-5 lg:mb-0`}>
                <img src={step.img} alt={step.title} className="w-full h-auto rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#e4e4e7]" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#0f0f0f] py-[80px] md:py-[100px] text-center px-6">
        <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-6 leading-[1.2]">Still Not Convinced? Start With Free Account!</h2>
        <p className="text-white/90 text-[18px] max-w-[800px] mx-auto mb-8 leading-[1.6]">JobExCV users get in average 50% more interviews and they spend 10 hours less per week. Start automating your job search today.</p>
        <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-white text-[#0f0f0f] px-7 py-[14px] rounded-full font-semibold text-[18px] transition-all duration-200 hover:scale-[1.02] mb-4">Start Free Trial</a>
        <p className="text-white/70 text-[14px] mt-2">No credit card required</p>
      </section>

      <section className="bg-[#f9fafb] py-[80px] md:py-[100px] text-center px-6">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f0f0f] mb-8 leading-[1.2]">JobExCV Helps You Find A Job Faster</h2>
        <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-[#0f0f0f] text-white px-7 py-[14px] rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02]">Get Started Now</a>
      </section>
    </div>
  );
}
