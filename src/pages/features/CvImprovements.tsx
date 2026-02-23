import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 mt-0.5 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 12l2 2 4-4" />
      </svg>
      <span className="text-[#555555] text-[16px] leading-[1.6]">{children}</span>
    </div>
  );
}

export default function CvImprovementsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-[60px]">
            <h1 className="text-[36px] md:text-[48px] font-extrabold text-black leading-[1.12] mb-6 tracking-[-0.02em]">Optimize your job search with statistics and feedback</h1>
            <p className="text-[#555555] text-[18px] max-w-[800px] mx-auto mb-10 leading-[1.6]">JobExCV offers the most advanced job search analytics to help you optimize your job search and find a job faster</p>
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">
              Get Started Free &nbsp;→
            </a>
          </div>
          <div className="relative w-full max-w-[1000px] mx-auto">
            <div className="bg-white rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#E2E8F0] overflow-hidden p-6">
              <div className="flex border-b border-[#E2E8F0] mb-6">
                <button className="px-4 py-2.5 text-[13px] font-semibold text-[#555555] border-b-2 border-transparent">LOOP INFO</button>
                <button className="px-4 py-2.5 text-[13px] font-semibold text-[#555555] border-b-2 border-transparent">LOOP RESULTS</button>
                <button className="px-4 py-2.5 text-[13px] font-semibold text-black border-b-2 border-black">LOOP STATS</button>
              </div>
              <div className="flex flex-wrap gap-4 mb-6 text-[12px]">
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#22c55e]"/><span className="text-[#555555]">Matched job</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ef4444]"/><span className="text-[#555555]">Low CV score</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#3b82f6]"/><span className="text-[#555555]">Location</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#eab308]"/><span className="text-[#555555]">Title</span></div>
              </div>
              <div className="flex justify-center mb-6">
                <svg width="220" height="220" viewBox="0 0 220 220"><circle cx="110" cy="110" r="90" fill="none" stroke="#E2E8F0" strokeWidth="40"/><circle cx="110" cy="110" r="90" fill="none" stroke="#ec4899" strokeWidth="40" strokeDasharray="294 271" strokeDashoffset="0" transform="rotate(-90 110 110)"/></svg>
              </div>
              <p className="text-[14px] text-[#555555] leading-relaxed mb-6">We have found <strong>1877</strong> jobs in total. We accepted <strong>260</strong> of these jobs, which are your matches.</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-[-80px] pt-[120px] pb-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-6 max-w-[1000px] mx-auto text-center">
              <p className="text-[18px] text-[#555555] max-w-[700px] mx-auto font-bold mb-1">Stop applying blindly without getting any feedback</p>
              <p className="text-[18px] text-[#555555] max-w-[700px] mx-auto font-medium">Start optimizing your CV to win the most competitive positions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="w-full lg:w-7/12">
              <div className="max-w-[650px]">
                <h5 className="text-[14px] font-medium text-[#555555] mb-4">Data-driven approach</h5>
                <h2 className="text-[36px] md:text-[42px] font-extrabold leading-[1.2] text-black mb-10 tracking-[-0.02em]">Until Now You Applied And Waited. Now It's The Time To Apply And Optimize.</h2>
                <div className="space-y-4">
                  <CheckItem>Using our Loop statistics you can see all the important issues that causing a low rating of your CV</CheckItem>
                  <CheckItem>JobExCV uses a data-driven approach to help you optimize your CV</CheckItem>
                  <CheckItem>In our dashboard your can find all the important fixes</CheckItem>
                </div>
                <div className="mt-10">
                  <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center px-8 py-[14px] border border-black rounded-[8px] font-semibold text-black transition-all hover:bg-black hover:text-white text-[16px]">Start today</a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 mt-12 lg:mt-0">
              <div className="flex gap-4">
                <div className="flex-1 bg-white rounded-[12px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] flex flex-col">
                  <h4 className="font-bold text-[18px] text-black mb-2">Job search performance statistics</h4>
                  <p className="text-[#555555] text-[16px] leading-[1.6]">JobExCV identifies the critical issues of your CV that give low rating in the ATS systems.</p>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="bg-white rounded-[12px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] flex-1">
                    <h4 className="font-bold text-[16px] text-black mb-1">Data-driven optimizations</h4>
                    <p className="text-[#555555] text-[14px] leading-[1.6]">Every day you get updated stats and recommendations.</p>
                  </div>
                  <div className="bg-white rounded-[12px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] flex-1">
                    <h4 className="font-bold text-[16px] text-black mb-1">Upgrade your CV</h4>
                    <p className="text-[#555555] text-[14px] leading-[1.6]">Combine daily applications and CV optimization with fresh data every day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-white text-[28px] md:text-[36px] font-bold leading-[1.3] mb-6 max-w-[800px]">Still Not Convinced? Start With Free Account!</h2>
          <p className="text-white text-[16px] md:text-[18px] leading-[1.6] mb-10 max-w-[850px] opacity-90">JobExCV users get in average 50% more interviews.</p>
          <a href="https://app.jobexcv.ai" className="inline-block bg-[#aab4c4] hover:bg-[#99a5b8] text-black font-semibold text-[16px] px-8 py-[14px] rounded-[8px] transition-colors">Get Started Free</a>
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