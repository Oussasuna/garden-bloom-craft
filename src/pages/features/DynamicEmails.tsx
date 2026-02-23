import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai", outline = false }: { children: React.ReactNode; href?: string; outline?: boolean }) {
  return <a href={href} className={outline ? "inline-flex items-center border border-white text-white px-7 py-[14px] rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-white hover:text-[#0f0f0f] hover:scale-[1.02]" : "inline-flex items-center bg-[#0f0f0f] text-white px-7 py-[14px] rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02]"}>{children}</a>;
}
function CheckItem({ children }: { children: React.ReactNode }) {
  return (<div className="flex items-start gap-3"><svg className="w-5 h-5 mt-0.5 text-[#0f0f0f] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 12l2 2 4-4" /></svg><span className="text-[#71717a] text-[15px] leading-relaxed">{children}</span></div>);
}

export default function DynamicEmailsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <section className="max-w-[900px] mx-auto px-6 text-center pb-8">
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#0f0f0f] leading-[1.12] mb-6">Use Free Personalized Email Templates for Sending Resumes &amp; Cover Letters to Companies for a Job Offer</h1>
          <p className="text-[#52525b] text-[18px] max-w-[720px] mx-auto mb-8 leading-relaxed">Which are the best email templates for sending resumes and cover letters? JobExCV collects new job opportunities and creates fully personalised emails.</p>
          <PillButton>Get Started Free &nbsp;→</PillButton>
        </section>
        <section className="max-w-[600px] mx-auto px-6 pb-4">
          <div className="bg-[#f9fafb] rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e4e4e7] overflow-hidden">
            <div className="p-6 space-y-4">
              <div><label className="text-[13px] font-semibold text-[#0f0f0f] block mb-1">Email subject</label><div className="border border-[#e4e4e7] rounded-[16px] px-4 py-2.5 text-[14px] text-[#0f0f0f]">Opportunities</div></div>
              <div><label className="text-[13px] font-semibold text-[#0f0f0f] block mb-1">Email body</label><div className="border border-[#e4e4e7] rounded-[16px] px-4 py-3 text-[13px] text-[#71717a] leading-relaxed whitespace-pre-line min-h-[240px]">{`Hello,\nI checked your website and social profiles recently and I came across your job posting regarding the {{JOB_TITLE}} at {{JOB_LOCATION}}.\n\nI am interested in applying my knowledge in a real project in {{COMPANY_NAME}}.\n\nThanks,\n{{USER_FIRSTNAME}} {{USER_LASTNAME}}`}</div></div>
              <button className="bg-[#3b82f6] text-white px-6 py-2.5 rounded-full font-semibold text-[14px] transition-all duration-200 hover:scale-[1.02]">Save</button>
            </div>
          </div>
        </section>
        <section className="bg-[#f9fafb] py-6 mt-6 border-y border-[#e4e4e7]"><p className="max-w-[800px] mx-auto text-center text-[#0f0f0f] text-[15px] font-medium px-6">Use variables to create fully personalised emails, approaching every company with a different email.</p></section>
        <section className="max-w-[1100px] mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-5">
              <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#0f0f0f] leading-tight">How Email Templates Can Help You Get Closer To Your Dream Job</h2>
              <div className="space-y-4 pt-2">
                <CheckItem>Using our pre-made and tested templates you start getting responses from companies</CheckItem>
                <CheckItem>You can send fully personalised emails using our email variables like {"{{ this }}"}</CheckItem>
                <CheckItem>In your dashboard your can track email open ratio, and optimize your emails.</CheckItem>
              </div>
              <div className="pt-2"><PillButton>Start today</PillButton></div>
            </div>
            <div className="flex-1 flex gap-4">
              <div className="flex-1 bg-[#f9fafb] rounded-[16px] p-6 shadow-sm border border-[#e4e4e7] flex flex-col">
                <div className="w-10 h-10 rounded-[16px] bg-[#f9fafb] flex items-center justify-center mb-4 border border-[#e4e4e7]"><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#71717a" strokeWidth={2}><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
                <h4 className="font-bold text-[15px] text-[#0f0f0f] mb-2">Send daily emails</h4>
                <p className="text-[#71717a] text-[13px] leading-relaxed">JobExCV collects jobs and finds the email of the company automatically.</p>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-[#f9fafb] rounded-[16px] p-5 shadow-sm border border-[#e4e4e7] flex-1"><h4 className="font-bold text-[14px] text-[#0f0f0f] mb-1">Stand out between candidates</h4><p className="text-[#71717a] text-[12px] leading-relaxed">Keep track of all the important KPIs.</p></div>
                <div className="bg-[#f9fafb] rounded-[16px] p-5 shadow-sm border border-[#e4e4e7] flex-1"><h4 className="font-bold text-[14px] text-[#0f0f0f] mb-1">Write unique emails</h4><p className="text-[#71717a] text-[12px] leading-relaxed">Fully optimize your writing, testing various email templates.</p></div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#0f0f0f] py-16"><div className="max-w-[700px] mx-auto text-center px-6"><h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-4">Still Not Convinced? Test Your Job Closing Rate With A Free Trial!</h2><p className="text-white/70 text-[15px] mb-8 leading-relaxed">JobExCV users get in average 50% more interviews.</p><PillButton outline>Get Started Free</PillButton><p className="text-white/50 text-[13px] mt-4">No credit card required</p></div></section>
        <section className="bg-[#f9fafb] py-16 text-center px-6"><h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0f0f0f] mb-6">JobExCV Helps You Find A Job Faster</h2><PillButton>Get Started Now</PillButton></section>
      </div>
      <Footer />
    </div>
  );
}
