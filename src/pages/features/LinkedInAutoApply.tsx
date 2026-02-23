import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark"|"outline-black"|"outline-white" }) {
  const base = "inline-flex items-center px-7 py-3 rounded-full font-semibold text-[14px] transition-colors";
  const styles = { dark: "bg-[#1a1a1a] text-white hover:bg-[#333]", "outline-black": "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white", "outline-white": "border border-white text-white hover:bg-white hover:text-[#1a1a1a]" };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

export default function LinkedInAutoApplyPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <section className="max-w-[900px] mx-auto px-6 text-center pb-8">
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#1a1a1a] leading-[1.12] mb-6">Automate your job applications on LinkedIn with our new chrome extension.</h1>
          <p className="text-[#555] text-[16px] md:text-[18px] max-w-[680px] mx-auto mb-8 leading-relaxed">Install our chrome extension from the web store, select the jobs you want to apply for, and JobExCV do the rest.</p>
          <PillButton>Let's Get Started your automatic job applications! &nbsp;→</PillButton>
        </section>
        <section className="relative mt-6 mb-0">
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-[#d6dfe8] to-[#b8c5d3]"/>
          <div className="relative max-w-[700px] mx-auto px-6 pb-6">
            <div className="bg-[#f0f2f5] rounded-2xl py-16 px-8 max-w-[600px] mx-auto flex items-center justify-center gap-0">
              <div className="w-[80px] h-[80px] rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0"><span className="text-white text-[24px] font-extrabold">JX</span></div>
              <div className="flex-1 max-w-[160px] relative flex items-center justify-center mx-4"><div className="w-full border-t-2 border-dashed border-[#94a3b8]"/></div>
              <div className="w-[100px] h-[100px] rounded-xl bg-[#0077B5] flex items-center justify-center flex-shrink-0"><span className="text-white text-[48px] font-bold leading-none">in</span></div>
            </div>
          </div>
        </section>
        <section className="bg-[#eef0f4] py-5 border-y border-[#dde1e8]"><p className="text-center text-[14px] md:text-[15px] text-[#1a1a1a] font-medium max-w-[700px] mx-auto px-6">Not sure how to connect our LinkedIn plugin? Contact our team to learn more.</p></section>
        <section className="max-w-[1000px] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 max-w-[460px]">
              <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] leading-tight mb-8">Elevate Your Workflow With Our LinkedIn Extension.</h2>
              <div className="space-y-6 mb-8">
                {[{num:"01",text:"Simplify your workflow by automating this time-consuming task effortlessly."},{num:"02",text:"View detailed summaries of application attempts for quick review."},{num:"03",text:"Answer questions interactively, allowing the extension to fill in details."}].map(item=>(<div key={item.num} className="flex gap-4"><span className="text-[13px] font-bold text-[#c8cdd5] leading-relaxed">{item.num}</span><p className="text-[14px] text-[#555] leading-relaxed">{item.text}</p></div>))}
              </div>
              <PillButton variant="outline-black">Start today</PillButton>
            </div>
            <div className="flex-1 max-w-[400px]">
              <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 shadow-sm">
                <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-3">Discover the power of our LinkedIn extension in optimizing your job application processes.</h3>
                <p className="text-[13px] text-[#666] leading-relaxed">From automated form filling to comprehensive summaries, our extension empowers you to streamline tasks.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[900px] mx-auto px-6 text-center pb-14"><h2 className="text-[28px] md:text-[36px] font-extrabold text-[#1a1a1a]">Getting Started With The JobExCV Extension</h2></section>
        <section className="max-w-[1000px] mx-auto px-6 pb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-4"><h3 className="text-[24px] font-extrabold text-[#1a1a1a]">Filter And Find Extension-Supported Matches</h3><p className="text-[#555] text-[15px] leading-relaxed">Head to the All Matches section and apply the 'Matches with pending automation' filter.</p><PillButton>Start today</PillButton></div>
            <div className="flex-1"><div className="bg-white rounded-lg shadow-md border border-[#e0e4ea] p-4 min-h-[200px]"><p className="text-[12px] text-[#555] text-center">All Matches — Extension Supported jobs</p></div></div>
          </div>
        </section>
        <section className="bg-[#1e293b] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-white mb-4">Still Not Convinced? Start With Free Account!</h2><p className="text-[#b0bec5] text-[14px] max-w-[560px] mx-auto mb-7">JobExCV users get in average 50% more interviews.</p><PillButton variant="outline-white">Start Free Trial</PillButton><p className="text-[#94a3b8] text-[12px] mt-3">No credit card required</p></section>
        <section className="bg-[#eef0f4] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] mb-6">JobExCV Helps You Find A Job Faster</h2><PillButton>Get Started Now</PillButton></section>
      </div>
      <Footer />
    </div>
  );
}
