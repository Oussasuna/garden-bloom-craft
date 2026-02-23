import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark"|"outline-white" }) {
  const base = "inline-flex items-center px-7 py-3 rounded-full font-semibold text-[14px] transition-colors";
  const styles = { dark: "bg-[#1a1a1a] text-white hover:bg-[#333]", "outline-white": "border border-white text-white hover:bg-white hover:text-[#1a1a1a]" };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

export default function JobAggregatorPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <section className="max-w-[780px] mx-auto px-6 text-center pb-6">
          <h1 className="text-[32px] md:text-[44px] font-extrabold text-[#1a1a1a] leading-[1.15] mb-5 tracking-tight">Aggregate Job postings from 20 job boards in one platform</h1>
          <p className="text-[#666] text-[14px] md:text-[15px] max-w-[660px] mx-auto mb-7 leading-relaxed">JobExCV simplifies your job search by aggregating job postings from 20 top job boards into one powerful platform. No more switching between multiple websites.</p>
          <PillButton>Get Started &nbsp;→</PillButton>
        </section>
        <section className="bg-[#eef0f4] py-5 border-y border-[#dde1e8]"><p className="text-center text-[14px] md:text-[15px] text-[#1a1a1a] font-medium max-w-[700px] mx-auto px-6">For every job search (loop) that you create, JobExCV will search in 20 Job boards, will aggregate the job results in a single dashboard.</p></section>
        <section className="max-w-[780px] mx-auto px-6 pt-20 pb-8"><h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] text-center">See Where Each Job Comes From: 2 Easy Ways To Identify The Job Board!</h2></section>
        <section className="max-w-[1000px] mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-4 max-w-[400px]"><h3 className="text-[22px] md:text-[26px] font-extrabold text-[#1a1a1a]">Filter And View Jobs By Job Board</h3><p className="text-[#666] text-[14px] leading-relaxed">In the All Matches tab on your JobExCV dashboard, you can use the filters to see jobs from specific job boards.</p><PillButton>Start today</PillButton></div>
            <div className="flex-1"><div className="bg-white rounded-lg shadow-[0_2px_24px_rgba(0,0,0,0.10)] border border-[#e0e4ea] p-4 min-h-[200px]"><p className="text-[12px] text-[#555] text-center">Filter Panel — select your preferred job board</p></div></div>
          </div>
        </section>
        <section className="max-w-[1000px] mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1"><div className="bg-white rounded-lg shadow-[0_2px_24px_rgba(0,0,0,0.10)] border border-[#e0e4ea] p-4 min-h-[200px]"><p className="text-[12px] text-[#555] text-center">Job Details — see company name, title, and full description</p></div></div>
            <div className="flex-1 space-y-4 max-w-[400px]"><h3 className="text-[22px] md:text-[26px] font-extrabold text-[#1a1a1a]">Check The Job Posting Details</h3><p className="text-[#666] text-[14px] leading-relaxed">When you open a job match in JobExCV, you'll see the job board's name directly in the job details with full transparency.</p><PillButton>Start today</PillButton></div>
          </div>
        </section>
        <section className="bg-[#1e293b] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-white mb-4">Still Not Convinced? Start With Free Account!</h2><p className="text-[#b0bec5] text-[14px] max-w-[560px] mx-auto mb-7">JobExCV users get in average 50% more interviews.</p><PillButton variant="outline-white">Start Free Trial</PillButton><p className="text-[#94a3b8] text-[12px] mt-3">No credit card required</p></section>
        <section className="bg-[#eef0f4] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] mb-6">JobExCV Helps You Find A Job Faster</h2><PillButton>Get Started Now</PillButton></section>
      </div>
      <Footer />
    </div>
  );
}
