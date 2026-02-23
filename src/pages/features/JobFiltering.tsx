import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark"|"outline"|"outline-white" }) {
  const base = "inline-flex items-center px-7 py-[14px] rounded-full font-semibold text-[14px] transition-all duration-200 hover:scale-[1.02]";
  const styles = { dark: "bg-[#0f0f0f] text-white", "outline": "border border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-white", "outline-white": "border border-white text-white hover:bg-white hover:text-[#0f0f0f]" };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

export default function JobFilteringPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <section className="max-w-[900px] mx-auto px-6 text-center pb-8">
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#0f0f0f] leading-[1.12] mb-6">Use advanced job filters to filter job descriptions</h1>
          <p className="text-[#52525b] text-[18px] max-w-[680px] mx-auto mb-8 leading-relaxed">JobExCV can filter job descriptions based on specific keywords that you can set. Stop getting jobs that LinkedIn thinks is a good fit. Set your own rules.</p>
          <PillButton>Let's Get Started your automatic job applications! &nbsp;→</PillButton>
        </section>
        <section className="bg-[#f9fafb] py-5 border-y border-[#e4e4e7]"><p className="text-center text-[14px] md:text-[15px] text-[#0f0f0f] font-medium max-w-[700px] mx-auto px-6">For every job search (Loop) that you create you can exclude one or more companies.</p></section>
        <section className="max-w-[1000px] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 max-w-[460px]">
              <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#0f0f0f] leading-tight mb-8">With JobExCV You Set Your Own Rules</h2>
              <div className="space-y-4 mb-8">
                {["You exclude the companies you don't want to apply for","We never apply to those companies","You can add or remove companies any time"].map((text,i)=>(<div key={i} className="flex items-start gap-3"><div className="w-4 h-4 rounded border border-[#e4e4e7] mt-0.5 flex-shrink-0"/><p className="text-[14px] text-[#71717a] leading-relaxed">{text}</p></div>))}
              </div>
              <PillButton variant="outline">Start today</PillButton>
            </div>
            <div className="flex-1 max-w-[400px]">
              <div className="bg-[#f9fafb] border border-[#e4e4e7] rounded-[16px] p-6 shadow-sm">
                <h3 className="text-[16px] font-bold text-[#0f0f0f] mb-3">Decide the companies you will exclude</h3>
                <p className="text-[13px] text-[#71717a] leading-relaxed">We have multiple rules to ensure that we always do the right thing.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[900px] mx-auto px-6 text-center pb-14 bg-[#f9fafb] pt-14"><h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0f0f0f]">Find Jobs Matching Your CV Using The Following Steps:</h2></section>
        <section className="max-w-[1000px] mx-auto px-6 pb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-4"><h3 className="text-[24px] font-extrabold text-[#0f0f0f]">Create A New Loop</h3><p className="text-[#71717a] text-[15px] leading-relaxed">Create a new loop and set the job title, location, and keywords.</p><PillButton>Start today</PillButton></div>
            <div className="flex-1"><div className="bg-[#f9fafb] rounded-[16px] shadow-md border border-[#e4e4e7] p-4 min-h-[200px]"><p className="text-[12px] text-[#71717a] text-center">Loop Creation Form</p></div></div>
          </div>
        </section>
        <section className="bg-[#0f0f0f] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-white mb-4">Still Not Convinced? Start With Free Account!</h2><p className="text-white/70 text-[14px] max-w-[560px] mx-auto mb-7">JobExCV users get in average 50% more interviews.</p><PillButton variant="outline-white">Start Free Trial</PillButton><p className="text-white/50 text-[12px] mt-3">No credit card required</p></section>
        <section className="bg-[#f9fafb] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-[#0f0f0f] mb-6">JobExCV Helps You Find A Job Faster</h2><PillButton>Get Started Now</PillButton></section>
      </div>
      <Footer />
    </div>
  );
}
