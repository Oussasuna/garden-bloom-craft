import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark" | "outline-black" | "outline-white" }) {
  const base = "inline-flex items-center px-8 py-3.5 rounded-full font-semibold text-[15px] transition-colors";
  const styles = {
    dark: "bg-[#1a1a1a] text-white hover:bg-[#333]",
    "outline-black": "border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white",
    "outline-white": "border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a]",
  };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 mt-0.5 text-[#1a1a1a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 12l2 2 4-4" />
      </svg>
      <span className="text-[#555] text-[15px] leading-relaxed">{children}</span>
    </div>
  );
}

export default function DynamicEmailsPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        {/* Hero */}
        <section className="max-w-[900px] mx-auto px-6 text-center pb-8">
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#1a1a1a] leading-[1.12] mb-6">
            Use Free Personalized Email Templates for Sending Resumes &amp; Cover Letters to Companies for a Job Offer
          </h1>
          <p className="text-[#555] text-[16px] md:text-[18px] max-w-[720px] mx-auto mb-8 leading-relaxed">
            Which are the best email templates (formats, or examples) for sending resumes and cover letters to a company offering your dream job opportunity? JobExCV collects new job opportunities and creates fully personalised emails. No effort required.
          </p>
          <PillButton>Let's Get Started your automatic job applications! &nbsp;→</PillButton>
        </section>

        {/* Email template mockup */}
        <section className="max-w-[600px] mx-auto px-6 pb-4">
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e5e5e5] overflow-hidden">
            <div className="p-6 space-y-4">
              <div>
                <label className="text-[13px] font-semibold text-[#333] block mb-1">Email subject</label>
                <div className="border border-[#ddd] rounded-lg px-4 py-2.5 text-[14px] text-[#333]">Opportunities</div>
              </div>
              <div>
                <label className="text-[13px] font-semibold text-[#333] block mb-1">Email body</label>
                <div className="border border-[#ddd] rounded-lg px-4 py-3 text-[13px] text-[#444] leading-relaxed whitespace-pre-line min-h-[240px]">
                  {`Hello,\nI checked your website and social profiles recently and I came across your job posting regarding the {{JOB_TITLE}} at {{JOB_LOCATION}}.\n\nI am interested in applying my knowledge in a real project in {{COMPANY_NAME}}.\n\nThanks,\n{{USER_FIRSTNAME}} {{USER_LASTNAME}}`}
                </div>
              </div>
              <button className="bg-[#2563eb] text-white px-6 py-2.5 rounded-lg font-semibold text-[14px] hover:bg-[#1d4ed8] transition-colors">Save</button>
            </div>
          </div>
        </section>

        {/* Variables banner */}
        <section className="bg-gradient-to-r from-[#d6dfe8] to-[#b8c5d3] py-6 mt-6">
          <div className="max-w-[800px] mx-auto text-center px-6">
            <p className="text-[#333] text-[15px] font-medium">
              Use variables to create fully personalised emails with our free automated job application templates, approaching every company with a different email.
            </p>
            <p className="text-[#444] text-[14px] mt-1">Approaching every company with a different email.</p>
          </div>
        </section>

        {/* Social proof */}
        <section className="max-w-[800px] mx-auto px-6 py-12 text-center">
          <p className="text-[15px] text-[#555] mb-8">
            Find below a response a job applicant and user of one of our free email templates received recently :)
          </p>
          <p className="text-[16px] font-bold text-[#1a1a1a] mt-8">Our users have super powers!</p>
        </section>

        {/* Auto applier CTA */}
        <section className="max-w-[800px] mx-auto px-6 pb-8 text-center">
          <p className="text-[18px] font-bold text-[#1a1a1a]">
            Looking for an Automatic Job applier to auto-fill job application forms?
          </p>
        </section>

        {/* How templates help + feature cards */}
        <section className="max-w-[1100px] mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-5">
              <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#1a1a1a] leading-tight">
                How email templates can help you get closer to your dream job
              </h2>
              <div className="space-y-4 pt-2">
                <CheckItem>Using our pre-made and tested templates you start getting responses from companies</CheckItem>
                <CheckItem>You can send fully personalised emails using our email variables like {"{{ this }}"}</CheckItem>
                <CheckItem>In our dashboard your can track email open ratio, and optimize your emails</CheckItem>
              </div>
              <div className="pt-2">
                <PillButton>Start today</PillButton>
              </div>
            </div>
            <div className="flex-1 flex gap-4">
              <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-[#e5e5e5] flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-[#E8EDF2] flex items-center justify-center mb-4">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2}>
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[15px] text-[#1a1a1a] mb-2">Send daily emails</h4>
                <p className="text-[#666] text-[13px] leading-relaxed">
                  JobExCV collects jobs and finds the email of the company automatically. Then using your own email template for a specific job search, JobExCV sends your email and your CV attached.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e5e5] flex-1">
                  <h4 className="font-bold text-[14px] text-[#1a1a1a] mb-1">Stand out between candidates</h4>
                  <p className="text-[#666] text-[12px] leading-relaxed">
                    Keep track of all the important KPIs in your organization across departments, employees, projects, and campaigns.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e5e5] flex-1">
                  <h4 className="font-bold text-[14px] text-[#1a1a1a] mb-1">Write unique emails</h4>
                  <p className="text-[#666] text-[12px] leading-relaxed">
                    Using JobExCV you can fully optimize your writing, testing various email templates and A/B testing them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dark CTA */}
        <section className="bg-[#1a1a1a] py-16">
          <div className="max-w-[700px] mx-auto text-center px-6">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-4">
              Still Not Convinced? Test your Job Closing Rate With a Free Trial of our Personalised &amp; Professional Email Templates!
            </h2>
            <p className="text-[#aaa] text-[15px] mb-8 leading-relaxed">
              JobExCV users get in average 50% more interviews and they spend 10 hours less per week. Start automating your job search today.
            </p>
            <PillButton variant="outline-white">Start Free Trial</PillButton>
            <p className="text-[#888] text-[13px] mt-4">No credit card required</p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#F0F2F5] py-16 text-center px-6">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#1a1a1a] mb-6">
            JobExCV Helps You Find A Job Faster
          </h2>
          <PillButton>Get Started Now</PillButton>
        </section>
      </div>
      <Footer />
    </div>
  );
}
