import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai", outline = false }: { children: React.ReactNode; href?: string; outline?: boolean }) {
  return <a href={href} className={outline ? "inline-flex items-center border border-white text-white px-7 py-[14px] rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-white hover:text-[#0f0f0f] hover:scale-[1.02]" : "inline-flex items-center bg-[#0f0f0f] text-white px-7 py-[14px] rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02]"}>{children}</a>;
}
function CheckItem({ children }: { children: React.ReactNode }) {
  return (<div className="flex items-start gap-3"><svg className="w-5 h-5 mt-0.5 text-[#0f0f0f] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 12l2 2 4-4"/></svg><span className="text-[#71717a] text-[15px] leading-relaxed">{children}</span></div>);
}

export default function CvImprovementsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <section className="max-w-[900px] mx-auto px-6 text-center pb-8">
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#0f0f0f] leading-[1.12] mb-6">Optimize your job search with statistics and feedback</h1>
          <p className="text-[#52525b] text-[18px] max-w-[720px] mx-auto mb-8 leading-relaxed">JobExCV offers the most advanced job search analytics to help you optimize your job search and find a job faster</p>
          <PillButton>Get Started Free &nbsp;→</PillButton>
        </section>
        <section className="relative mt-6 mb-0">
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-[#e4e4e7] to-[#d4d4d8]"/>
          <div className="relative max-w-[800px] mx-auto px-6">
            <div className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e4e4e7] overflow-hidden p-6">
              <div className="flex border-b border-[#e4e4e7] mb-6">
                <button className="px-4 py-2.5 text-[13px] font-semibold text-[#71717a] border-b-2 border-transparent">LOOP INFO</button>
                <button className="px-4 py-2.5 text-[13px] font-semibold text-[#71717a] border-b-2 border-transparent">LOOP RESULTS</button>
                <button className="px-4 py-2.5 text-[13px] font-semibold text-[#0f0f0f] border-b-2 border-[#0f0f0f]">LOOP STATS</button>
              </div>
              <div className="flex flex-wrap gap-4 mb-6 text-[12px]">
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#22c55e]"/><span className="text-[#71717a]">Matched job</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ef4444]"/><span className="text-[#71717a]">Low CV score</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#3b82f6]"/><span className="text-[#71717a]">Location</span></div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#eab308]"/><span className="text-[#71717a]">Title</span></div>
              </div>
              <div className="flex justify-center mb-6">
                <svg width="220" height="220" viewBox="0 0 220 220"><circle cx="110" cy="110" r="90" fill="none" stroke="#e4e4e7" strokeWidth="40"/><circle cx="110" cy="110" r="90" fill="none" stroke="#ec4899" strokeWidth="40" strokeDasharray="294 271" strokeDashoffset="0" transform="rotate(-90 110 110)"/></svg>
              </div>
              <p className="text-[13px] text-[#71717a] leading-relaxed mb-6">We have found <strong>1877</strong> jobs in total. We accepted <strong>260</strong> of these jobs, which are your matches.</p>
            </div>
          </div>
        </section>
        <section className="bg-[#f9fafb] py-6 border-y border-[#e4e4e7]"><div className="max-w-[800px] mx-auto text-center px-6"><p className="text-[#0f0f0f] text-[16px] font-bold mb-1">Stop applying blindly without getting any feedback</p><p className="text-[#71717a] text-[15px]">Start optimizing your CV to win the most competitive positions</p></div></section>
        <section className="max-w-[1100px] mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-5">
              <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#0f0f0f] leading-tight">Until Now You Applied And Waited. Now It's The Time To Apply And Optimize.</h2>
              <div className="space-y-4 pt-2">
                <CheckItem>Using our Loop statistics you can see all the important issues that causing a low rating of your CV</CheckItem>
                <CheckItem>JobExCV uses a data-driven approach to help you optimize your CV</CheckItem>
                <CheckItem>In our dashboard your can find all the important fixes</CheckItem>
              </div>
              <div className="pt-2"><PillButton>Start today</PillButton></div>
            </div>
            <div className="flex-1 flex gap-4">
              <div className="flex-1 bg-[#f9fafb] rounded-[16px] p-6 shadow-sm border border-[#e4e4e7] flex flex-col"><h4 className="font-bold text-[15px] text-[#0f0f0f] mb-2">Job search performance statistics</h4><p className="text-[#71717a] text-[13px] leading-relaxed">JobExCV identifies the critical issues of your CV that give low rating in the ATS systems.</p></div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-[#f9fafb] rounded-[16px] p-5 shadow-sm border border-[#e4e4e7] flex-1"><h4 className="font-bold text-[14px] text-[#0f0f0f] mb-1">Data-driven optimizations</h4><p className="text-[#71717a] text-[12px] leading-relaxed">Every day you get updated stats and recommendations.</p></div>
                <div className="bg-[#f9fafb] rounded-[16px] p-5 shadow-sm border border-[#e4e4e7] flex-1"><h4 className="font-bold text-[14px] text-[#0f0f0f] mb-1">Upgrade your CV</h4><p className="text-[#71717a] text-[12px] leading-relaxed">Combine daily applications and CV optimization with fresh data every day.</p></div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#0f0f0f] py-16"><div className="max-w-[700px] mx-auto text-center px-6"><h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-4">Still Not Convinced? Start With Free Account!</h2><p className="text-white/70 text-[15px] mb-8">JobExCV users get in average 50% more interviews.</p><PillButton outline>Get Started Free</PillButton><p className="text-white/50 text-[13px] mt-4">No credit card required</p></div></section>
        <section className="bg-[#f9fafb] py-16 text-center px-6"><h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0f0f0f] mb-6">JobExCV Helps You Find A Job Faster</h2><PillButton>Get Started Now</PillButton></section>
      </div>
      <Footer />
    </div>
  );
}
