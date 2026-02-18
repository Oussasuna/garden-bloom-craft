import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.firstresume.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark"|"outline-black"|"outline-white" }) {
  const base = "inline-flex items-center px-7 py-3 rounded-full font-semibold text-[14px] transition-colors";
  const styles = { dark: "bg-[#1a1a1a] text-white hover:bg-[#333]", "outline-black": "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white", "outline-white": "border border-white text-white hover:bg-white hover:text-[#1a1a1a]" };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

export default function JobFilteringPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <section className="max-w-[900px] mx-auto px-6 text-center pb-8">
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#1a1a1a] leading-[1.12] mb-6">Use advanced job filters to filter job descriptions</h1>
          <p className="text-[#555] text-[16px] md:text-[18px] max-w-[680px] mx-auto mb-8 leading-relaxed">FirstResume can filter job descriptions based on specific keywords that you can set. Stop getting jobs that LinkedIn thinks is a good fit. Set your own rules.</p>
          <PillButton>Let's Get Started your automatic job applications! &nbsp;→</PillButton>
        </section>
        <section className="bg-[#eef0f4] py-5 border-y border-[#dde1e8]"><p className="text-center text-[14px] md:text-[15px] text-[#1a1a1a] font-medium max-w-[700px] mx-auto px-6">For every job search (Loop) that you create you can exclude one or more companies.</p></section>
        <section className="max-w-[1000px] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 max-w-[460px]">
              <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] leading-tight mb-8">With FirstResume You Set Your Own Rules</h2>
              <div className="space-y-4 mb-8">
                {["You exclude the companies you don't want to apply for","We never apply to those companies","You can add or remove companies any time"].map((text,i)=>(<div key={i} className="flex items-start gap-3"><div className="w-4 h-4 rounded border border-[#d1d5db] mt-0.5 flex-shrink-0"/><p className="text-[14px] text-[#555] leading-relaxed">{text}</p></div>))}
              </div>
              <PillButton variant="outline-black">Start today</PillButton>
            </div>
            <div className="flex-1 max-w-[400px]">
              <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 shadow-sm">
                <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-3">Decide the companies you will exclude</h3>
                <p className="text-[13px] text-[#666] leading-relaxed">We have multiple rules to ensure that we always do the right thing.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[900px] mx-auto px-6 text-center pb-14"><h2 className="text-[28px] md:text-[36px] font-extrabold text-[#1a1a1a]">Find Jobs Matching Your CV Using The Following Steps:</h2></section>
        <section className="max-w-[1000px] mx-auto px-6 pb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-4"><h3 className="text-[24px] font-extrabold text-[#1a1a1a]">Create A New Loop</h3><p className="text-[#555] text-[15px] leading-relaxed">Create a new loop and set the job title, location, and keywords.</p><PillButton>Start today</PillButton></div>
            <div className="flex-1"><div className="bg-white rounded-lg shadow-md border border-[#e0e4ea] p-4 min-h-[200px]"><p className="text-[12px] text-[#555] text-center">Loop Creation Form</p></div></div>
          </div>
        </section>
        <section className="bg-[#1e293b] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-white mb-4">Still Not Convinced? Start With Free Account!</h2><p className="text-[#b0bec5] text-[14px] max-w-[560px] mx-auto mb-7">FirstResume users get in average 50% more interviews.</p><PillButton variant="outline-white">Start Free Trial</PillButton><p className="text-[#94a3b8] text-[12px] mt-3">No credit card required</p></section>
        <section className="bg-[#eef0f4] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] mb-6">FirstResume Helps You Find A Job Faster</h2><PillButton>Get Started Now</PillButton></section>
      </div>
      <Footer />
    </div>
  );
}
