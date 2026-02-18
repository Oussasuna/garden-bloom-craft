import { Rocket } from "lucide-react";

export default function AutoApplyPage() {
  const steps = [
    { title: "Create a Loop & Access Automations", desc: "Begin by creating a new loop in FirstResume. Follow the setup process until you reach the last step, where you can access the Automations tab. This is where you'll activate the Auto Apply feature.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/autoapply1-3.webp" },
    { title: "Loop Starts Finding Jobs", desc: "Once your loop is set up, FirstResume will begin searching for job listings that match your criteria. It analyzes multiple job boards to ensure you receive relevant opportunities tailored to your preferences.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/autoapply2-4.webp" },
    { title: "Enable Mass Apply For More Applications", desc: "To increase automation, toggle on the Mass Apply feature in FirstResume. This allows the system to send more applications automatically, increasing your chances of getting interviews faster.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/autoapply3-5.webp" },
    { title: "Filter & View Applied Jobs", desc: "Head to the 'All Matches' section, apply the right filters and see the jobs where FirstResume has automatically applied on your behalf.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/autoapply4-6.webp" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-[60px]">
            <h1 className="text-[48px] md:text-[56px] font-extrabold leading-[1.1] text-black mb-6 tracking-[-0.02em]">The first platform that automatically applies on your behalf</h1>
            <p className="text-[18px] leading-[1.6] text-[#555555] max-w-[800px] mb-10">Define your job search preferences from our dashboard, upload your CV and let us do the hard job of finding jobs and applying on your behalf.</p>
            <a href="https://app.firstresume.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90 group">
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </a>
          </div>
          <div className="relative w-full max-w-[1000px] mx-auto">
            <div className="relative shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[12px] overflow-hidden bg-white border border-[#E2E8F0]">
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/form-2.webp" alt="Automated job application form" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
        <div className="w-full mt-[-80px] pt-[120px] pb-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-6 max-w-[1000px] mx-auto text-center">
              <p className="text-[18px] text-[#555555] max-w-[700px] mx-auto mb-2">We automatically fill out job application forms with your personal data.</p>
              <p className="text-[18px] text-[#555555] max-w-[700px] mx-auto font-medium">We upload your CV and click the "Submit" button.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="w-full lg:w-7/12">
              <div className="max-w-[650px]">
                <h5 className="text-[14px] font-medium text-[#555555] mb-4">Seriously, there is no tool like FirstResume</h5>
                <h2 className="text-[36px] md:text-[42px] font-extrabold leading-[1.2] text-black mb-10 tracking-[-0.02em]">The First End To End Job Search Automation Platform</h2>
                <div className="space-y-0 text-black">
                  {["Match with hundreds of jobs", "Automatically apply to jobs", "Get statistics and improve your CV"].map((text, i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-t border-[#e2e8f0]">
                      <span className="text-[16px] font-medium text-[#555555] underline whitespace-nowrap pt-1">0{i + 1}</span>
                      <span className="text-[18px] font-medium">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <a href="https://app.firstresume.ai" className="inline-flex items-center justify-center px-8 py-[14px] border border-black rounded-[8px] font-semibold text-black transition-all hover:bg-black hover:text-white text-[16px]">Start today</a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 mt-12 lg:mt-0">
              <div className="bg-white rounded-[12px] p-8 md:p-10 border border-[#e2e8f0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] max-w-[450px] mx-auto lg:ml-auto">
                <div className="w-12 h-12 mb-6 text-black flex items-center justify-center">
                  <Rocket size={44} strokeWidth={2.5} className="transform rotate-[-45deg]" />
                </div>
                <h3 className="text-[22px] md:text-[24px] font-bold text-black leading-[1.3] mb-4">Automated applications like never before</h3>
                <p className="text-[16px] text-[#555555] leading-[1.6]">FirstResume fills in your personal data, uploads your CV and clicks the "Submit" button on your behalf.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-[100px]">
          <h2 className="text-[36px] md:text-[42px] font-bold leading-[1.2] text-black tracking-[-0.02em] max-w-[800px] mx-auto text-center">Check How Our Auto Apply Bot Works</h2>
        </div>
      </section>

      {steps.map((step, i) => (
        <section key={i} className="py-[100px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-[30px]`}>
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <div className="rounded-[12px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0]">
                  <img src={step.img} alt={step.title} className="w-full h-auto object-cover block" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="max-w-[540px]">
                  <h2 className="text-[36px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-black mb-4">{step.title}</h2>
                  <p className="text-[18px] leading-[1.6] text-[#555555] mb-8">{step.desc}</p>
                  <a href="https://app.firstresume.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">Start today</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-black py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <h2 className="text-white text-[32px] md:text-[42px] font-bold leading-[1.2] max-w-[700px]">Join the FirstResume community. Find your job 3x faster.</h2>
            <a href="https://app.firstresume.ai" className="inline-flex items-center justify-center bg-[#aab4c4] hover:bg-[#99a5b8] text-black font-semibold text-[16px] px-8 py-[14px] rounded-[8px] transition-all flex-shrink-0">Sign up</a>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F2F5] py-[100px] text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[42px] font-bold text-black mb-10 leading-tight tracking-[-0.02em]">FirstResume Helps You Find A Job Faster</h2>
          <a href="https://app.firstresume.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[16px] transition-all hover:opacity-90 group">
            Join the FirstResume community
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
