import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function LinkedInAutoApplyPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-[60px]">
            <h1 className="text-[36px] md:text-[48px] font-extrabold text-black leading-[1.12] mb-6 tracking-[-0.02em]">Automate your job applications on LinkedIn with our new chrome extension.</h1>
            <p className="text-[#555555] text-[18px] max-w-[800px] mx-auto mb-10 leading-[1.6]">Install our chrome extension from the web store, select the jobs you want to apply for, and JobExCV do the rest.</p>
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">
              Let's Get Started your automatic job applications! &nbsp;→
            </a>
          </div>
          <div className="relative w-full max-w-[1000px] mx-auto">
            <div className="bg-white rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#E2E8F0] py-16 px-8 max-w-[600px] mx-auto flex items-center justify-center gap-0">
              <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center flex-shrink-0"><span className="text-white text-[24px] font-extrabold">JX</span></div>
              <div className="flex-1 max-w-[160px] relative flex items-center justify-center mx-4"><div className="w-full border-t-2 border-dashed border-[#555555]"/></div>
              <div className="w-[100px] h-[100px] rounded-[12px] bg-[#0077B5] flex items-center justify-center flex-shrink-0"><span className="text-white text-[48px] font-bold leading-none">in</span></div>
            </div>
          </div>
        </div>
        <div className="w-full mt-[-80px] pt-[120px] pb-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-6 max-w-[1000px] mx-auto text-center">
              <p className="text-[18px] text-[#555555] max-w-[700px] mx-auto font-medium">Not sure how to connect our LinkedIn plugin? Contact our team to learn more.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="w-full lg:w-7/12">
              <div className="max-w-[650px]">
                <h2 className="text-[36px] md:text-[42px] font-extrabold leading-[1.2] text-black mb-10 tracking-[-0.02em]">Elevate Your Workflow With Our LinkedIn Extension.</h2>
                <div className="space-y-0 text-black">
                  {["Simplify your workflow by automating this time-consuming task effortlessly.","View detailed summaries of application attempts for quick review.","Answer questions interactively, allowing the extension to fill in details."].map((text, i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-t border-[#E2E8F0]">
                      <span className="text-[16px] font-medium text-[#555555] underline whitespace-nowrap pt-1">0{i + 1}</span>
                      <span className="text-[18px] font-medium">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center px-8 py-[14px] border border-black rounded-[8px] font-semibold text-black transition-all hover:bg-black hover:text-white text-[16px]">Start today</a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 mt-12 lg:mt-0">
              <div className="bg-white rounded-[12px] p-8 md:p-10 border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] max-w-[450px] mx-auto lg:ml-auto">
                <h3 className="text-[22px] md:text-[24px] font-bold text-black leading-[1.3] mb-4">Discover the power of our LinkedIn extension in optimizing your job application processes.</h3>
                <p className="text-[16px] text-[#555555] leading-[1.6]">From automated form filling to comprehensive summaries, our extension empowers you to streamline tasks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-[100px]">
          <h2 className="text-[36px] md:text-[42px] font-bold leading-[1.2] text-black tracking-[-0.02em] max-w-[800px] mx-auto text-center">Getting Started With The JobExCV Extension</h2>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`flex flex-col lg:flex-row items-center gap-[30px]`}>
            <div className="w-full lg:w-1/2">
              <div className="max-w-[540px]">
                <h2 className="text-[36px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-black mb-4">Filter And Find Extension-Supported Matches</h2>
                <p className="text-[18px] leading-[1.6] text-[#555555] mb-8">Head to the All Matches section and apply the 'Matches with pending automation' filter.</p>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">Start today</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="rounded-[12px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] bg-white p-4 min-h-[200px]">
                <p className="text-[12px] text-[#555555] text-center">All Matches — Extension Supported jobs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-white text-[28px] md:text-[36px] font-bold leading-[1.3] mb-6 max-w-[800px]">Still Not Convinced? Start With Free Account!</h2>
          <p className="text-white text-[16px] md:text-[18px] leading-[1.6] mb-10 max-w-[850px] opacity-90">JobExCV users get in average 50% more interviews.</p>
          <a href="https://app.jobexcv.ai" className="inline-block bg-[#aab4c4] hover:bg-[#99a5b8] text-black font-semibold text-[16px] px-8 py-[14px] rounded-[8px] transition-colors">Start Free Trial</a>
          <p className="text-white text-[14px] opacity-80 mt-6">No credit card required</p>
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
    </div>
  );
}