import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function BrowserMockup({ children, className = "" }: {children: React.ReactNode;className?: string;}) {
  return (
    <div className={`bg-white rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f6f7f9] border-b border-[#E2E8F0]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded bg-white border border-[#E2E8F0]" />
      </div>
      <div className="p-0">{children}</div>
    </div>);

}

function EditLoopMockup() {
  return (
    <BrowserMockup className="w-full max-w-[680px] mx-auto">
      <div className="flex min-h-[380px]">
        <div className="w-[160px] bg-[#fafbfc] border-r border-[#E2E8F0] py-4 px-3 flex-shrink-0">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded bg-black" />
            <span className="text-[11px] font-bold text-black">jobexcv</span>
          </div>
          {["All Matches", "Board", "Analytics", "Email Templates", "Settings"].map((item, i) =>
          <div key={item} className={`text-[10px] py-1.5 px-2 rounded mb-0.5 ${i === 4 ? "bg-[#F0F2F5] font-semibold text-black" : "text-[#555555]"}`}>{item}</div>
          )}
        </div>
        <div className="flex-1 p-5 overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-[13px] font-bold text-black">Edit Loop</h4>
            <div className="flex gap-2">
              <span className="text-[9px] px-2 py-1 rounded bg-[#F0F2F5] text-[#555555]">All Changes</span>
              <span className="text-[9px] px-2 py-1 rounded bg-[#14b8a6] text-white font-medium">new loop</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] text-[#555555] font-medium block mb-1">Do you want to exclude some companies?</label>
              <div className="h-7 rounded border border-[#E2E8F0] bg-[#f9fafb] px-2 flex items-center"><span className="text-[9px] text-[#555555]">Yes</span></div>
            </div>
            <div>
              <label className="text-[10px] text-[#555555] font-medium block mb-1">Companies to not review</label>
              <div className="min-h-[32px] rounded border border-[#E2E8F0] bg-[#f9fafb] px-2 py-1 flex flex-wrap gap-1">
                {["Acme Corp", "OldEmployer Inc"].map((c) =>
                <span key={c} className="text-[8px] bg-[#F0F2F5] text-black px-1.5 py-0.5 rounded font-medium">{c} &times;</span>
                )}
              </div>
            </div>
            <div>
              <label className="text-[10px] text-[#555555] font-medium block mb-1">Select the keywords that should be present in the job posting</label>
              <div className="min-h-[32px] rounded border border-[#E2E8F0] bg-[#f9fafb] px-2 py-1 flex flex-wrap gap-1">
                {["React", "Frontend", "Remote"].map((k) =>
                <span key={k} className="text-[8px] bg-[#dbeafe] text-[#2563eb] px-1.5 py-0.5 rounded font-medium">{k} &times;</span>
                )}
              </div>
            </div>
            <div>
              <label className="text-[10px] text-[#555555] font-medium block mb-1">Keywords</label>
              <div className="h-7 rounded border border-[#E2E8F0] bg-[#f9fafb] px-2 flex items-center"><span className="text-[9px] text-[#555555]">Type keywords...</span></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded border border-[#E2E8F0] bg-[#14b8a6] flex items-center justify-center"><span className="text-white text-[8px]">&#10003;</span></div>
              <span className="text-[10px] text-[#555555]">Please choose the kind of job posting you prefer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded border border-[#E2E8F0]" />
              <span className="text-[10px] text-[#555555]">Include match with your preferences</span>
            </div>
            <div className="pt-2">
              <div className="h-8 w-20 rounded bg-[#22c55e] flex items-center justify-center cursor-pointer"><span className="text-white text-[11px] font-semibold">Save</span></div>
            </div>
          </div>
        </div>
      </div>
    </BrowserMockup>);

}

export default function ExcludeCompaniesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-[60px]">
            <h1 className="text-[32px] md:text-[44px] font-extrabold text-black leading-[1.15] mb-5 tracking-[-0.02em]">Exclude companies from your automated job search</h1>
            <p className="text-[#555555] text-[18px] max-w-[800px] mx-auto mb-10 leading-[1.6]">JobExCV is smart enough to not apply by mistake to your previous employees or companies that you don&apos;t want to.</p>
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">
              Let&apos;s Get Started your automatic job applications! &nbsp;&rarr;
            </a>
          </div>
          <div className="relative w-full max-w-[1000px] mx-auto">
            <EditLoopMockup />
          </div>
        </div>
        <div className="w-full mt-[-80px] pt-[120px] pb-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-6 max-w-[1000px] mx-auto text-center">
              <p className="text-[18px] text-[#555555] max-w-[700px] mx-auto font-medium">For every job search (Loop) that you create you can exclude one or more companies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="w-full lg:w-7/12">
              <div className="max-w-[650px]">
                <h5 className="text-[14px] font-medium text-[#555555] mb-4">Advanced job search preferences</h5>
                <h2 className="text-[36px] md:text-[42px] font-extrabold leading-[1.2] text-black mb-10 tracking-[-0.02em]">Elevate Your Workflow With Our LinkedIn Extension.</h2>
                <div className="space-y-0 text-black">
                  {["Simplify your workflow by automating this time-consuming task effortlessly.", "View detailed summaries of application attempts for quick review and follow-up.", "Answer questions interactively, allowing the chrome extension to fill in job application details seamlessly."].map((text, i) =>
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
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-[22px] md:text-[24px] font-bold text-black leading-[1.3] mb-4">Discover the power of our LinkedIn extension in optimizing your job application processes.</h3>
                <p className="text-[16px] text-[#555555] leading-[1.6]">From automated form filling to comprehensive summaries and interactive questionnaires, our chrome extension empowers you to streamline tasks and achieve more with every job application. Revolutionize your workflow and experience efficiency like never before.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      








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