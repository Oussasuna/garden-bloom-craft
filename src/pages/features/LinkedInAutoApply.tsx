import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark"|"outline"|"outline-white" }) {
  const base = "inline-flex items-center px-7 py-[14px] rounded-full font-semibold text-[14px] transition-all duration-200 hover:scale-[1.02]";
  const styles = { dark: "bg-[#0f0f0f] text-white", "outline": "border border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-white", "outline-white": "border border-white text-white hover:bg-white hover:text-[#0f0f0f]" };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

export default function LinkedInAutoApplyPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <section className="max-w-[900px] mx-auto px-6 text-center pb-8">
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#0f0f0f] leading-[1.12] mb-6">Automate your job applications on LinkedIn with our new chrome extension.</h1>
          <p className="text-[#52525b] text-[18px] max-w-[680px] mx-auto mb-8 leading-relaxed">Install our chrome extension from the web store, select the jobs you want to apply for, and JobExCV do the rest.</p>
          <PillButton>Let's Get Started your automatic job applications! &nbsp;→</PillButton>
        </section>
        <section className="relative mt-6 mb-0">
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-[#e4e4e7] to-[#d4d4d8]"/>
          <div className="relative max-w-[700px] mx-auto px-6 pb-6">
            <div className="bg-[#f9fafb] rounded-[16px] py-16 px-8 max-w-[600px] mx-auto flex items-center justify-center gap-0 border border-[#e4e4e7]">
              <div className="w-[80px] h-[80px] rounded-full bg-[#0f0f0f] flex items-center justify-center flex-shrink-0"><span className="text-white text-[24px] font-extrabold">JX</span></div>
              <div className="flex-1 max-w-[160px] relative flex items-center justify-center mx-4"><div className="w-full border-t-2 border-dashed border-[#71717a]"/></div>
              <div className="w-[100px] h-[100px] rounded-[16px] bg-[#0077B5] flex items-center justify-center flex-shrink-0"><span className="text-white text-[48px] font-bold leading-none">in</span></div>
            </div>
          </div>
        </section>
        <section className="bg-[#f9fafb] py-5 border-y border-[#e4e4e7]"><p className="text-center text-[14px] md:text-[15px] text-[#0f0f0f] font-medium max-w-[700px] mx-auto px-6">Not sure how to connect our LinkedIn plugin? Contact our team to learn more.</p></section>
        <section className="max-w-[1000px] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 max-w-[460px]">
              <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#0f0f0f] leading-tight mb-8">Elevate Your Workflow With Our LinkedIn Extension.</h2>
              <div className="space-y-6 mb-8">
                {[{num:"01",text:"Simplify your workflow by automating this time-consuming task effortlessly."},{num:"02",text:"View detailed summaries of application attempts for quick review."},{num:"03",text:"Answer questions interactively, allowing the extension to fill in details."}].map(item=>(<div key={item.num} className="flex gap-4"><span className="text-[13px] font-bold text-[#3b82f6] leading-relaxed">{item.num}</span><p className="text-[14px] text-[#71717a] leading-relaxed">{item.text}</p></div>))}
              </div>
              <PillButton variant="outline">Start today</PillButton>
            </div>
            <div className="flex-1 max-w-[400px]">
              <div className="bg-[#f9fafb] border border-[#e4e4e7] rounded-[16px] p-6 shadow-sm">
                <h3 className="text-[16px] font-bold text-[#0f0f0f] mb-3">Discover the power of our LinkedIn extension in optimizing your job application processes.</h3>
                <p className="text-[13px] text-[#71717a] leading-relaxed">From automated form filling to comprehensive summaries, our extension empowers you to streamline tasks.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[900px] mx-auto px-6 text-center pb-14 bg-[#f9fafb] pt-14"><h2 className="text-[28px] md:text-[36px] font-extrabold text-[#0f0f0f]">Getting Started With The JobExCV Extension</h2></section>
        <section className="max-w-[1000px] mx-auto px-6 pb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-4"><h3 className="text-[24px] font-extrabold text-[#0f0f0f]">Filter And Find Extension-Supported Matches</h3><p className="text-[#71717a] text-[15px] leading-relaxed">Head to the All Matches section and apply the 'Matches with pending automation' filter.</p><PillButton>Start today</PillButton></div>
            <div className="flex-1"><div className="bg-[#f9fafb] rounded-[16px] shadow-md border border-[#e4e4e7] p-4 min-h-[200px]"><p className="text-[12px] text-[#71717a] text-center">All Matches — Extension Supported jobs</p></div></div>
          </div>
        </section>
        <section className="bg-[#0f0f0f] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-white mb-4">Still Not Convinced? Start With Free Account!</h2><p className="text-white/70 text-[14px] max-w-[560px] mx-auto mb-7">JobExCV users get in average 50% more interviews.</p><PillButton variant="outline-white">Start Free Trial</PillButton><p className="text-white/50 text-[12px] mt-3">No credit card required</p></section>
        <section className="bg-[#f9fafb] py-16 text-center px-6"><h2 className="text-[24px] md:text-[32px] font-extrabold text-[#0f0f0f] mb-6">JobExCV Helps You Find A Job Faster</h2><PillButton>Get Started Now</PillButton></section>
      </div>
      <Footer />
    </div>
  );
}
