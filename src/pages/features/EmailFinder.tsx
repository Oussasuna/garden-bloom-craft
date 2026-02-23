import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function EmailFinderPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-[60px]">
            <h1 className="text-[36px] md:text-[48px] font-extrabold text-black leading-[1.12] mb-6 tracking-[-0.02em]">Find the best email to contact a company for a specific job</h1>
            <p className="text-[#555555] text-[18px] max-w-[800px] mx-auto mb-10 leading-[1.6]">Trying to find the email of a recruiter for a job? For every job that matches your profile JobExCV will find the best email to contact.</p>
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">
              Let's Get Started your automatic job applications! &nbsp;→
            </a>
          </div>
          <div className="relative w-full max-w-[1000px] mx-auto">
            <div className="bg-white rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#E2E8F0] overflow-hidden p-6 space-y-4">
              <div><label className="text-[13px] text-[#555555] font-medium block mb-1">Email subject</label><div className="h-9 rounded-[8px] border border-[#E2E8F0] bg-[#f9fafb] px-3 flex items-center"><span className="text-[13px] text-black">Opportunities</span></div></div>
              <div><label className="text-[13px] text-[#555555] font-medium block mb-1">Email body</label><div className="rounded-[8px] border border-[#E2E8F0] bg-[#f9fafb] p-3 min-h-[220px]"><p className="text-[12px] text-[#555555] leading-[1.7] whitespace-pre-wrap">{`Hello,\nI checked your website and came across your job posting regarding the {{JOB_TITLE}} at {{JOB_LOCATION}}.\n\nI am interested in applying in {{COMPANY_NAME}}.\n\nThanks,\n{{USER_FIRSTNAME}} {{USER_LASTNAME}}`}</p></div></div>
              <div><div className="h-9 w-20 rounded-[8px] bg-black flex items-center justify-center cursor-pointer"><span className="text-white text-[13px] font-semibold">Save</span></div></div>
            </div>
          </div>
        </div>
        <div className="w-full mt-[-80px] pt-[120px] pb-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-6 max-w-[1000px] mx-auto text-center">
              <p className="text-[18px] text-[#555555] max-w-[700px] mx-auto font-semibold mb-1">Use variables to create fully personalised emails</p>
              <p className="text-[18px] text-[#555555] max-w-[700px] mx-auto font-medium">Approaching every company with a different email.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px] bg-white text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="text-[18px] text-[#555555] mb-8 leading-[1.6]">Find below a response one of our users received recently :)</p>
          <p className="text-[18px] font-bold text-black mt-8">Our users have super powers!</p>
        </div>
      </section>

      <section className="py-[100px] bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="w-full lg:w-7/12">
              <div className="max-w-[650px]">
                <h2 className="text-[36px] md:text-[42px] font-extrabold leading-[1.2] text-black mb-10 tracking-[-0.02em]">How Email Templates Can Help You Get Closer To Your Dream Job</h2>
                <div className="space-y-0 text-black">
                  {["Using our pre-made and tested templates you start getting responses from companies","You can send fully personalised emails using our email variables like {{ this }}","In your dashboard your can track email open ratio, and optimize your emails."].map((text, i) => (
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[520px]">
                <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:row-span-2">
                  <h4 className="font-bold text-[18px] text-black mb-2">Send daily emails</h4>
                  <p className="text-[#555555] text-[16px] leading-[1.6]">JobExCV collects jobs and finds the email of the company automatically.</p>
                </div>
                <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <h4 className="font-bold text-[16px] text-black mb-1.5">Stand out between candidates</h4>
                  <p className="text-[#555555] text-[14px] leading-[1.6]">Keep track of all the important KPIs.</p>
                </div>
                <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <h4 className="font-bold text-[16px] text-black mb-1.5">Write unique emails</h4>
                  <p className="text-[#555555] text-[14px] leading-[1.6]">Fully optimize your writing, testing various email templates.</p>
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