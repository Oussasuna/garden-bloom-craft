import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function CheckItem({ children }: {children: React.ReactNode;}) {
  return (
    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 mt-0.5 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 12l2 2 4-4" />
      </svg>
      <span className="text-[#555555] text-[16px] leading-[1.6]">{children}</span>
    </div>);

}

export default function DynamicEmailsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-[60px]">
            <h1 className="text-[36px] md:text-[48px] font-extrabold text-black leading-[1.12] mb-6 tracking-[-0.02em]">
              Use Free Personalized Email Templates for Sending Resumes &amp; Cover Letters to Companies for a Job Offer
            </h1>
            <p className="text-[#555555] text-[18px] max-w-[800px] mx-auto mb-10 leading-[1.6]">
              Which are the best email templates (formats, or examples) for sending resumes and cover letters to a company offering your dream job opportunity? JobExCV collects new job opportunities and creates fully personalised emails. No effort required.
            </p>
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90 group">
              Let's Get Started your automatic job applications! &nbsp;→
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[600px] mx-auto px-6 pb-4">
        <div className="bg-white rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] overflow-hidden">
          <div className="p-6 space-y-4">
            <div>
              <label className="text-[13px] font-semibold text-black block mb-1">Email subject</label>
              <div className="border border-[#E2E8F0] rounded-[8px] px-4 py-2.5 text-[14px] text-black">Opportunities</div>
            </div>
            <div>
              <label className="text-[13px] font-semibold text-black block mb-1">Email body</label>
              <div className="border border-[#E2E8F0] rounded-[8px] px-4 py-3 text-[13px] text-[#555555] leading-relaxed whitespace-pre-line min-h-[240px]">
                {`Hello,\nI checked your website and social profiles recently and I came across your job posting regarding the {{JOB_TITLE}} at {{JOB_LOCATION}}.\n\nI am interested in applying my knowledge in a real project in {{COMPANY_NAME}}.\n\nThanks,\n{{USER_FIRSTNAME}} {{USER_LASTNAME}}`}
              </div>
            </div>
            <button className="bg-black text-white px-6 py-2.5 rounded-[8px] font-semibold text-[14px] hover:opacity-90 transition-all">Save</button>
          </div>
        </div>
      </section>

      <section className="py-[60px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-6 max-w-[1000px] mx-auto text-center">
            <p className="text-[18px] text-[#555555] max-w-[700px] mx-auto font-medium">
              Use variables to create fully personalised emails with our free automated job application templates, approaching every company with a different email.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[800px] mx-auto px-6 py-12 text-center">
        <p className="text-[18px] text-[#555555] mb-8 leading-[1.6]">
          Find below a response a job applicant and user of one of our free email templates received recently :)
        </p>
        <p className="text-[18px] font-bold text-black mt-8">Our users have super powers!</p>
      </section>

      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-5">
              <h5 className="text-[14px] font-medium text-[#555555] mb-4">Looking for an Automatic Job applier to auto-fill job application forms?</h5>
              <h2 className="text-[36px] md:text-[42px] font-extrabold text-black leading-[1.2] mb-10 tracking-[-0.02em]">
                How email templates can help you get closer to your dream job
              </h2>
              <div className="space-y-4 pt-2">
                <CheckItem>Using our pre-made and tested templates you start getting responses from companies</CheckItem>
                <CheckItem>You can send fully personalised emails using our email variables like {"{{ this }}"}</CheckItem>
                <CheckItem>In our dashboard your can track email open ratio, and optimize your emails</CheckItem>
              </div>
              <div className="mt-10">
                <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center px-8 py-[14px] border border-black rounded-[8px] font-semibold text-black transition-all hover:bg-black hover:text-white text-[16px]">Start today</a>
              </div>
            </div>
            <div className="flex-1 flex gap-4">
              <div className="flex-1 bg-white rounded-[12px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] flex flex-col">
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#F0F2F5] rounded-[10px]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[18px] text-black mb-2">Send daily emails</h4>
                <p className="text-[#555555] text-[16px] leading-[1.6]">
                  JobExCV collects jobs and finds the email of the company automatically. Then using your own email template for a specific job search, JobExCV sends your email and your CV attached.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-white rounded-[12px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] flex-1">
                  <h4 className="font-bold text-[16px] text-black mb-1">Stand out between candidates</h4>
                  <p className="text-[#555555] text-[14px] leading-[1.6]">
                    Keep track of all the important KPIs in your organization across departments, employees, projects, and campaigns.
                  </p>
                </div>
                <div className="bg-white rounded-[12px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] flex-1">
                  <h4 className="font-bold text-[16px] text-black mb-1">Write unique emails</h4>
                  <p className="text-[#555555] text-[14px] leading-[1.6]">
                    Using JobExCV you can fully optimize your writing, testing various email templates and A/B testing them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      












      <section className="bg-[#F0F2F5] py-[100px] text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[42px] font-bold text-black mb-10 leading-tight tracking-[-0.02em]">
            JobExCV Helps You Find A Job Faster
          </h2>
          <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[16px] transition-all hover:opacity-90 group">
            Get Started Now
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>
      <Footer />
    </div>);

}