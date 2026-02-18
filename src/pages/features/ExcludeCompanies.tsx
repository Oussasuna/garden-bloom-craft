import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.firstresume.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark"|"outline-black"|"outline-white" }) {
  const base = "inline-flex items-center px-7 py-3 rounded-full font-semibold text-[14px] transition-colors";
  const styles = { dark: "bg-[#1a1a1a] text-white hover:bg-[#333]", "outline-black": "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white", "outline-white": "border border-white text-white hover:bg-white hover:text-[#1a1a1a]" };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

export default function ExcludeCompaniesPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <section className="bg-[#1e293b] pt-16 pb-0">
          <div className="max-w-[780px] mx-auto px-6 text-center pb-10">
            <h1 className="text-[32px] md:text-[44px] font-extrabold text-white leading-[1.15] mb-5 tracking-tight">Exclude companies from your automated job search</h1>
            <p className="text-[#b0bec5] text-[14px] md:text-[15px] max-w-[620px] mx-auto mb-7 leading-relaxed">FirstResume is smart enough to not apply by mistake to your previous employers or companies that you don't want to.</p>
            <PillButton>Let's Get Started your automatic job applications! &nbsp;→</PillButton>
          </div>
          <div className="relative mt-4">
            <div className="absolute inset-x-0 bottom-0 h-[55%]"><div className="w-full h-full bg-gradient-to-b from-[#d2dbe6] to-[#b0becf] rounded-t-[32px]"/></div>
            <div className="relative max-w-[700px] mx-auto px-6 pb-0">
              <div className="bg-white rounded-lg shadow-[0_2px_24px_rgba(0,0,0,0.10)] border border-[#e0e4ea] overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f6f7f9] border-b border-[#e5e7eb]"><span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]"/><span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]"/><span className="w-[10px] h-[10px] rounded-full bg-[#28c840]"/><div className="ml-3 flex-1 h-5 rounded bg-white border border-[#e0e4ea]"/></div>
                <div className="p-5">
                  <h4 className="text-[13px] font-bold text-[#1a1a1a] mb-5">Edit Loop</h4>
                  <div className="space-y-4">
                    <div><label className="text-[10px] text-[#64748b] font-medium block mb-1">Do you want to exclude some companies?</label><div className="h-7 rounded border border-[#e0e4ea] bg-[#f9fafb] px-2 flex items-center"><span className="text-[9px] text-[#94a3b8]">Yes</span></div></div>
                    <div><label className="text-[10px] text-[#64748b] font-medium block mb-1">Companies to not review</label><div className="min-h-[32px] rounded border border-[#e0e4ea] bg-[#f9fafb] px-2 py-1 flex flex-wrap gap-1">{["Acme Corp","OldEmployer Inc"].map(c=>(<span key={c} className="text-[8px] bg-[#e8edf2] text-[#1a1a1a] px-1.5 py-0.5 rounded font-medium">{c} ×</span>))}</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-6 bg-[#a4b3c4]"/>
          </div>
        </section>
        <section className="bg-[#eef0f4] py-5 border-y border-[#dde1e8]"><p className="text-center text-[14px] md:text-[15px] text-[#1a1a1a] font-medium max-w-[700px] mx-auto px-6">For every job search (Loop) that you create you can exclude one or more companies.</p></section>
        <section className="max-w-[1000px] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 max-w-[460px]">
              <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] leading-tight mb-8">Elevate Your Workflow With Our LinkedIn Extension.</h2>
              <div className="space-y-6 mb-8">
                {[{ num: "01", text: "Simplify your workflow by automating this time-consuming task effortlessly." }, { num: "02", text: "View detailed summaries of application attempts for quick review." }, { num: "03", text: "Answer questions interactively, allowing the extension to fill in details." }].map(item => (<div key={item.num} className="flex gap-4"><span className="text-[13px] font-bold text-[#c8cdd5] leading-relaxed">{item.num}</span><p className="text-[14px] text-[#555] leading-relaxed">{item.text}</p></div>))}
              </div>
              <PillButton variant="outline-black">Start today</PillButton>
            </div>
            <div className="flex-1 max-w-[400px]">
              <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 shadow-sm">
                <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-3">Discover the power of our LinkedIn extension in optimizing your job application processes.</h3>
                <p className="text-[13px] text-[#666] leading-relaxed">From automated form filling to comprehensive summaries, our chrome extension empowers you to streamline tasks.</p>
              </div>
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
