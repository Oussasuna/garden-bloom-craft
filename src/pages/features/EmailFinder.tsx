import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.firstresume.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark"|"outline-black"|"outline-white" }) {
  const base = "inline-flex items-center px-7 py-3 rounded-full font-semibold text-[14px] transition-colors";
  const styles = { dark: "bg-[#1a1a1a] text-white hover:bg-[#333]", "outline-black": "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white", "outline-white": "border border-white text-white hover:bg-white hover:text-[#1a1a1a]" };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

export default function EmailFinderPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <section className="max-w-[900px] mx-auto px-6 text-center pb-8">
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#1a1a1a] leading-[1.12] mb-6">Find the best email to contact a company for a specific job</h1>
          <p className="text-[#555] text-[16px] md:text-[18px] max-w-[680px] mx-auto mb-8 leading-relaxed">Trying to find the email of a recruiter for a job? For every job that matches your profile FirstResume will find the best email to contact.</p>
          <PillButton>Let's Get Started your automatic job applications! &nbsp;→</PillButton>
        </section>
        <section className="max-w-[700px] mx-auto px-6 pb-8">
          <div className="bg-white rounded-xl shadow-[0_4px_32px_rgba(0,0,0,0.10)] border border-[#e0e4ea] overflow-hidden p-6 space-y-4">
            <div><label className="text-[13px] text-[#555] font-medium block mb-1">Email subject</label><div className="h-9 rounded border border-[#e0e4ea] bg-[#f9fafb] px-3 flex items-center"><span className="text-[13px] text-[#1a1a1a]">Opportunities</span></div></div>
            <div><label className="text-[13px] text-[#555] font-medium block mb-1">Email body</label><div className="rounded border border-[#e0e4ea] bg-[#f9fafb] p-3 min-h-[220px]"><p className="text-[12px] text-[#333] leading-[1.7] whitespace-pre-wrap">{`Hello,\nI checked your website and came across your job posting regarding the {{JOB_TITLE}} at {{JOB_LOCATION}}.\n\nI am interested in applying in {{COMPANY_NAME}}.\n\nThanks,\n{{USER_FIRSTNAME}} {{USER_LASTNAME}}`}</p></div></div>
            <div><div className="h-9 w-20 rounded bg-[#3b82f6] flex items-center justify-center cursor-pointer"><span className="text-white text-[13px] font-semibold">Save</span></div></div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-[#d2dbe6] to-[#b8c5d3] py-6 border-y border-[#c5cdd8]"><div className="text-center max-w-[600px] mx-auto px-6"><p className="text-[14px] md:text-[15px] text-[#1a1a1a] font-semibold mb-1">Use variables to create fully personalised emails</p><p className="text-[13px] md:text-[14px] text-[#444] font-medium">Approaching every company with a different email.</p></div></section>
        <section className="max-w-[800px] mx-auto px-6 py-12 text-center"><p className="text-[15px] text-[#555] mb-8">Find below a response one of our users received recently :)</p><p className="text-[16px] font-bold text-[#1a1a1a] mt-8">Our users have super powers!</p></section>
        <section className="max-w-[1100px] mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 max-w-[420px]">
              <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] leading-tight mb-8">How Email Templates Can Help You Get Closer To Your Dream Job</h2>
              <div className="space-y-4 mb-8">
                {["Using our pre-made and tested templates you start getting responses from companies","You can send fully personalised emails using our email variables like {{ this }}","In your dashboard your can track email open ratio, and optimize your emails."].map((text,i)=>(<div key={i} className="flex items-start gap-3"><div className="w-4 h-4 rounded border border-[#d1d5db] mt-0.5 flex-shrink-0"/><p className="text-[14px] text-[#555] leading-relaxed">{text}</p></div>))}
              </div>
              <PillButton variant="outline-black">Start today</PillButton>
            </div>
            <div className="flex-1 max-w-[520px] grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 shadow-sm md:row-span-2"><h4 className="font-bold text-[15px] text-[#1a1a1a] mb-2">Send daily emails</h4><p className="text-[#666] text-[13px] leading-relaxed">FirstResume collects jobs and finds the email of the company automatically.</p></div>
              <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm"><h4 className="font-bold text-[14px] text-[#1a1a1a] mb-1.5">Stand out between candidates</h4><p className="text-[#666] text-[12px] leading-relaxed">Keep track of all the important KPIs.</p></div>
              <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 shadow-sm"><h4 className="font-bold text-[14px] text-[#1a1a1a] mb-1.5">Write unique emails</h4><p className="text-[#666] text-[12px] leading-relaxed">Fully optimize your writing, testing various email templates.</p></div>
            </div>
          </div>
        </section>
        <section className="bg-[#1e293b] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-white mb-4">Still Not Convinced? Start With Free Account!</h2><p className="text-[#b0bec5] text-[14px] max-w-[560px] mx-auto mb-7">FirstResume users get in average 50% more interviews.</p><PillButton variant="outline-white">Start Free Trial</PillButton><p className="text-[#94a3b8] text-[12px] mt-3">No credit card required</p></section>
        <section className="bg-[#eef0f4] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] mb-6">FirstResume Helps You Find A Job Faster</h2><PillButton>Get Started Now</PillButton></section>
      </div>
      <Footer />
    </div>
  );
}