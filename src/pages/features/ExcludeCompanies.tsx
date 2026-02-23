import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark" | "outline-white" | "outline-dark" }) {
  const base = "inline-flex items-center px-8 py-3.5 rounded-full font-semibold text-[15px] transition-colors";
  const styles = {
    dark: "bg-[#1a1a1a] text-white hover:bg-[#333]",
    "outline-white": "border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a]",
    "outline-dark": "border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white",
  };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

function BrowserMockup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-[#e0e0e0] overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f0f0f0] border-b border-[#ddd]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 bg-white rounded-md h-6 flex items-center px-3">
          <span className="text-[11px] text-[#999]">app.jobexcv.ai</span>
        </div>
      </div>
      <div className="p-0">{children}</div>
    </div>
  );
}

function EditLoopMockup() {
  return (
    <BrowserMockup className="w-full max-w-[700px] mx-auto">
      <div className="flex min-h-[340px]">
        {/* Sidebar */}
        <div className="w-[150px] bg-[#1a1a2e] py-4 px-3 flex-shrink-0 hidden md:flex flex-col gap-2">
          <div className="h-5 w-20 bg-white/20 rounded mb-3" />
          {["All Matches", "Board", "Analytics", "Email Templates", "Settings"].map((item, i) => (
            <div key={item} className={`text-[11px] py-1.5 px-2 rounded ${i === 4 ? "bg-[#4f8cff]/30 font-semibold text-white" : "text-white/50"}`}>
              {item}
            </div>
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 p-5 bg-[#fafbfc]">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-[14px] font-bold text-[#1a1a1a]">Edit Loop</h4>
            <div className="flex gap-2">
              <span className="text-[10px] px-2.5 py-1 rounded-md bg-[#f0f0f0] text-[#666]">All Changes</span>
              <span className="text-[10px] px-2.5 py-1 rounded-md bg-[#14b8a6] text-white font-medium">new loop</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-[11px] text-[#888] font-medium block mb-1">Do you want to exclude some companies?</label>
              <div className="h-8 rounded-lg border border-[#e0e0e0] bg-white px-3 flex items-center"><span className="text-[11px] text-[#1a1a1a]">Yes</span></div>
            </div>
            <div>
              <label className="text-[11px] text-[#888] font-medium block mb-1">Companies to exclude</label>
              <div className="min-h-[34px] rounded-lg border border-[#e0e0e0] bg-white px-2 py-1.5 flex flex-wrap gap-1.5">
                {["Acme Corp", "OldEmployer Inc"].map((c) => (
                  <span key={c} className="text-[10px] bg-[#f0f0f0] text-[#1a1a1a] px-2 py-0.5 rounded-md font-medium">{c} ×</span>
                ))}
              </div>
            </div>
            <div>
              <label className="text-[11px] text-[#888] font-medium block mb-1">Required keywords in job postings</label>
              <div className="min-h-[34px] rounded-lg border border-[#e0e0e0] bg-white px-2 py-1.5 flex flex-wrap gap-1.5">
                {["React", "Frontend", "Remote"].map((k) => (
                  <span key={k} className="text-[10px] bg-[#e8f4ff] text-[#4f8cff] px-2 py-0.5 rounded-md font-medium">{k} ×</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-[#e0e0e0] bg-[#14b8a6] flex items-center justify-center"><span className="text-white text-[9px]">✓</span></div>
              <span className="text-[11px] text-[#888]">Choose your preferred job posting type</span>
            </div>
            <div className="pt-1">
              <div className="h-8 w-20 rounded-lg bg-[#22c55e] flex items-center justify-center cursor-pointer"><span className="text-white text-[12px] font-semibold">Save</span></div>
            </div>
          </div>
        </div>
      </div>
    </BrowserMockup>
  );
}

export default function ExcludeCompaniesPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        {/* Hero */}
        <section className="bg-[#1a1a1a] pt-16 pb-0">
          <div className="max-w-[900px] mx-auto px-6 text-center pb-10">
            <h1 className="text-[36px] md:text-[48px] font-extrabold text-white leading-[1.12] mb-6">
              Exclude companies from your automated job search
            </h1>
            <p className="text-[#aaa] text-[16px] md:text-[18px] max-w-[720px] mx-auto mb-8 leading-relaxed">
              JobExCV is smart enough to skip your previous employers or any companies you'd rather not apply to—keeping your search focused and professional.
            </p>
            <PillButton>Get Started &nbsp;→</PillButton>
          </div>
          {/* Overlapping screenshot card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-[#F5F7FA]" />
            <div className="relative max-w-[700px] mx-auto px-6 pb-0">
              <EditLoopMockup />
            </div>
          </div>
        </section>

        {/* Value strip */}
        <section className="bg-gradient-to-r from-[#d6dfe8] to-[#b8c5d3] py-6 border-y border-[#c5cdd8]">
          <p className="text-center text-[15px] text-[#333] font-medium max-w-[700px] mx-auto px-6">
            For every job search (Loop) you create, you can exclude one or more companies from your results.
          </p>
        </section>

        {/* Feature section */}
        <section className="max-w-[1100px] mx-auto px-6 py-20">
          <p className="text-[12px] text-[#999] font-medium mb-2 tracking-wider uppercase">Advanced job search preferences</p>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 max-w-[460px]">
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#1a1a1a] leading-tight mb-8">
                Elevate your workflow with our LinkedIn extension.
              </h2>
              <div className="space-y-6 mb-8">
                {[
                  { num: "01", text: "Simplify your workflow by automating time-consuming application tasks effortlessly." },
                  { num: "02", text: "View detailed summaries of every application attempt for quick review and follow-up." },
                  { num: "03", text: "Answer questions interactively and let the extension fill in job application details seamlessly." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <span className="text-[14px] font-bold text-[#ccc] leading-relaxed">{item.num}</span>
                    <p className="text-[15px] text-[#555] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <PillButton variant="outline-dark">Start today</PillButton>
            </div>
            <div className="flex-1 max-w-[440px]">
              <div className="bg-white border border-[#e5e5e5] rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
                    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-[17px] font-bold text-[#1a1a1a] mb-3 leading-snug">
                  Discover the power of our LinkedIn extension in optimizing your job applications.
                </h3>
                <p className="text-[14px] text-[#555] leading-relaxed">
                  From automated form filling to comprehensive summaries and interactive questionnaires, our extension empowers you to streamline tasks and achieve more with every application. Revolutionize your workflow and experience efficiency like never before.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dark CTA */}
        <section className="bg-[#1a1a1a] py-16">
          <div className="max-w-[700px] mx-auto text-center px-6">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-4">
              Still not convinced? Start with a free account.
            </h2>
            <p className="text-[#aaa] text-[15px] mb-8 leading-relaxed">
              JobExCV users get 50% more interviews and save 10+ hours every week. Start automating your job search today.
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
