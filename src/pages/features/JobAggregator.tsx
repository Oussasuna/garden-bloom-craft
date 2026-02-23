import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark" | "outline-white" }) {
  const base = "inline-flex items-center px-8 py-3.5 rounded-full font-semibold text-[15px] transition-colors";
  const styles = { dark: "bg-[#1a1a1a] text-white hover:bg-[#333]", "outline-white": "border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a]" };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

export default function JobAggregatorPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        {/* Hero */}
        <section className="max-w-[900px] mx-auto px-6 text-center pb-8">
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#1a1a1a] leading-[1.12] mb-6">
            Aggregate Job postings from 20 job boards in one platform
          </h1>
          <p className="text-[#555] text-[16px] md:text-[18px] max-w-[720px] mx-auto mb-8 leading-relaxed">
            JobExCV simplifies your job search by aggregating job postings from 20 top job boards into one powerful platform. No more switching between multiple websites—access all opportunities in one place and apply effortlessly. Whether you're a job seeker or a recruiter, JobExCV streamlines the process, saving you time and effort.
          </p>
          <PillButton>Get Started &nbsp;→</PillButton>
        </section>

        {/* Info banner */}
        <section className="bg-gradient-to-r from-[#d6dfe8] to-[#b8c5d3] py-6 border-y border-[#c5cdd8]">
          <p className="text-center text-[15px] text-[#333] font-medium max-w-[700px] mx-auto px-6">
            For every job search (loop) that you create, JobExCV will search in 20 job boards, will aggregate the job results in a single dashboard.
          </p>
        </section>

        {/* Section title */}
        <section className="max-w-[800px] mx-auto px-6 pt-20 pb-10">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#1a1a1a] text-center">
            See Where Each Job Comes From: 2 Easy Ways to Identify the Job Board!
          </h2>
        </section>

        {/* Way 1: Filter and View */}
        <section className="max-w-[1100px] mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#e5e5e5] p-6 min-h-[240px] flex items-center justify-center">
                <p className="text-[13px] text-[#999] text-center">Filter Panel — select your preferred job board to view matching jobs</p>
              </div>
            </div>
            <div className="flex-1 space-y-5 max-w-[440px]">
              <h3 className="text-[24px] md:text-[28px] font-extrabold text-[#1a1a1a]">Filter and View Jobs by Job Board</h3>
              <p className="text-[#555] text-[15px] leading-relaxed">
                In the All Matches tab on your JobExCV dashboard, you can use the filters to see jobs from specific job boards. Simply open the filters, select your preferred job board, and instantly view all matching job opportunities from that source. This helps you focus on the platforms you trust the most!
              </p>
              <PillButton>Start today</PillButton>
            </div>
          </div>
        </section>

        {/* Way 2: Job Posting Details */}
        <section className="max-w-[1100px] mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#e5e5e5] p-6 min-h-[240px] flex items-center justify-center">
                <p className="text-[13px] text-[#999] text-center">Job Details — company name, job title, description, and job board source</p>
              </div>
            </div>
            <div className="flex-1 space-y-5 max-w-[440px]">
              <h3 className="text-[24px] md:text-[28px] font-extrabold text-[#1a1a1a]">Check the Job Posting Details</h3>
              <p className="text-[#555] text-[15px] leading-relaxed">
                When you open a job match in JobExCV, you'll see the job board's name directly in the job details. Along with that, you can find all the important information, including the company name, job title, and full job description. This gives you full transparency on where each opportunity comes from and what it offers.
              </p>
              <PillButton>Start today</PillButton>
            </div>
          </div>
        </section>

        {/* Dark CTA */}
        <section className="bg-[#1a1a1a] py-16">
          <div className="max-w-[700px] mx-auto text-center px-6">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-4">
              Still not convinced? Start with free account!
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
