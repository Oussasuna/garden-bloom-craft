import React from "react";

/* ── Shared UI ── */
function PillButton({
  children,
  href = "https://app.firstresume.ai",
  variant = "dark",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "dark" | "outline-black" | "outline-white";
}) {
  const base = "inline-flex items-center px-7 py-3 rounded-full font-semibold text-[14px] transition-colors";
  const styles = {
    dark: "bg-[#1a1a1a] text-white hover:bg-[#333]",
    "outline-black": "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white",
    "outline-white": "border border-white text-white hover:bg-white hover:text-[#1a1a1a]",
  };
  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}

function BrowserMockup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-lg shadow-[0_2px_24px_rgba(0,0,0,0.10)] border border-[#e0e4ea] overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f6f7f9] border-b border-[#e5e7eb]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded bg-white border border-[#e0e4ea]" />
      </div>
      <div className="p-0">{children}</div>
    </div>
  );
}

/* ── Edit Loop Settings Panel Mockup ── */
function EditLoopMockup() {
  return (
    <BrowserMockup className="w-full max-w-[680px] mx-auto">
      <div className="flex min-h-[380px]">
        {/* Sidebar */}
        <div className="w-[160px] bg-[#fafbfc] border-r border-[#e5e7eb] py-4 px-3 flex-shrink-0">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded bg-[#1a1a1a]" />
            <span className="text-[11px] font-bold text-[#1a1a1a]">firstresume</span>
          </div>
          {["All Matches", "Board", "Analytics", "Email Templates", "Settings"].map((item, i) => (
            <div
              key={item}
              className={`text-[10px] py-1.5 px-2 rounded mb-0.5 ${i === 4 ? "bg-[#e8edf2] font-semibold text-[#1a1a1a]" : "text-[#64748b]"}`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content - Edit Loop form */}
        <div className="flex-1 p-5 overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-[13px] font-bold text-[#1a1a1a]">Edit Loop</h4>
            <div className="flex gap-2">
              <span className="text-[9px] px-2 py-1 rounded bg-[#e8edf2] text-[#64748b]">All Changes</span>
              <span className="text-[9px] px-2 py-1 rounded bg-[#14b8a6] text-white font-medium">new loop</span>
            </div>
          </div>

          {/* Form fields */}
          <div className="space-y-4">
            <div>
              <label className="text-[10px] text-[#64748b] font-medium block mb-1">
                Do you want to exclude some companies?
              </label>
              <div className="h-7 rounded border border-[#e0e4ea] bg-[#f9fafb] px-2 flex items-center">
                <span className="text-[9px] text-[#94a3b8]">Yes</span>
              </div>
            </div>

            <div>
              <label className="text-[10px] text-[#64748b] font-medium block mb-1">
                Companies to not review
              </label>
              <div className="min-h-[32px] rounded border border-[#e0e4ea] bg-[#f9fafb] px-2 py-1 flex flex-wrap gap-1">
                {["Acme Corp", "OldEmployer Inc"].map((c) => (
                  <span key={c} className="text-[8px] bg-[#e8edf2] text-[#1a1a1a] px-1.5 py-0.5 rounded font-medium">
                    {c} &times;
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] text-[#64748b] font-medium block mb-1">
                Select the keywords that should be present in the job posting
              </label>
              <div className="min-h-[32px] rounded border border-[#e0e4ea] bg-[#f9fafb] px-2 py-1 flex flex-wrap gap-1">
                {["React", "Frontend", "Remote"].map((k) => (
                  <span key={k} className="text-[8px] bg-[#dbeafe] text-[#2563eb] px-1.5 py-0.5 rounded font-medium">
                    {k} &times;
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] text-[#64748b] font-medium block mb-1">
                Keywords
              </label>
              <div className="h-7 rounded border border-[#e0e4ea] bg-[#f9fafb] px-2 flex items-center">
                <span className="text-[9px] text-[#94a3b8]">Type keywords...</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded border border-[#e0e4ea] bg-[#14b8a6] flex items-center justify-center">
                <span className="text-white text-[8px]">&#10003;</span>
              </div>
              <span className="text-[10px] text-[#64748b]">Please choose the kind of job posting you prefer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded border border-[#e0e4ea]" />
              <span className="text-[10px] text-[#64748b]">Include match with your preferences</span>
            </div>

            <div className="pt-2">
              <div className="h-8 w-20 rounded bg-[#22c55e] flex items-center justify-center cursor-pointer">
                <span className="text-white text-[11px] font-semibold">Save</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserMockup>
  );
}

/* ═══════════════════════════════════════════════════════ */

export default function ExcludeCompaniesPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen pt-[100px]">
      {/* ─── Hero (dark blue/navy bg) ─── */}
      <section className="bg-[#1e293b] pt-16 pb-0">
        <div className="max-w-[780px] mx-auto px-6 text-center pb-10">
          <h1 className="text-[32px] md:text-[44px] font-extrabold text-white leading-[1.15] mb-5 tracking-tight">
            Exclude companies from your automated job search
          </h1>
          <p className="text-[#b0bec5] text-[14px] md:text-[15px] max-w-[620px] mx-auto mb-7 leading-relaxed">
            FirstResume is smart enough to not apply by mistake to your previous employees or
            companies that you don&apos;t want to.
          </p>
          <PillButton>
            Let&apos;s Get Started your automatic job applications! &nbsp;&rarr;
          </PillButton>
        </div>

        {/* Screenshot on gradient banner */}
        <div className="relative mt-4">
          <div className="absolute inset-x-0 bottom-0 h-[55%]">
            <div className="w-full h-full bg-gradient-to-b from-[#d2dbe6] to-[#b0becf] rounded-t-[32px]" />
          </div>
          <div className="relative max-w-[700px] mx-auto px-6 pb-0">
            <EditLoopMockup />
          </div>
          <div className="w-full h-6 bg-[#a4b3c4]" />
        </div>
      </section>

      {/* ─── Info Bar ─── */}
      <section className="bg-[#eef0f4] py-5 border-y border-[#dde1e8]">
        <p className="text-center text-[14px] md:text-[15px] text-[#1a1a1a] font-medium max-w-[700px] mx-auto px-6">
          For every job search (Loop) that you create you can exclude one or more companies.
        </p>
      </section>

      {/* ─── Section: text LEFT, card RIGHT ─── */}
      <section className="max-w-[1000px] mx-auto px-6 py-20">
        <p className="text-[12px] text-[#94a3b8] font-medium mb-2 tracking-wide">
          Advanced job search preferences
        </p>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: text + numbered items */}
          <div className="flex-1 max-w-[460px]">
            <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] leading-tight mb-8">
              Elevate Your Workflow With Our LinkedIn Extension.
            </h2>
            <div className="space-y-6 mb-8">
              {[
                {
                  num: "01",
                  text: "Simplify your workflow by automating this time-consuming task effortlessly.",
                },
                {
                  num: "02",
                  text: "View detailed summaries of application attempts for quick review and follow-up.",
                },
                {
                  num: "03",
                  text: "Answer questions interactively, allowing the chrome extension to fill in job application details seamlessly.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <span className="text-[13px] font-bold text-[#c8cdd5] leading-relaxed">
                    {item.num}
                  </span>
                  <p className="text-[14px] text-[#555] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <PillButton variant="outline-black">Start today</PillButton>
          </div>

          {/* Right: card */}
          <div className="flex-1 max-w-[400px]">
            <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 shadow-sm">
              {/* list icon */}
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-3 leading-snug">
                Discover the power of our LinkedIn extension in optimizing your job application
                processes.
              </h3>
              <p className="text-[13px] text-[#666] leading-relaxed">
                From automated form filling to comprehensive summaries and interactive
                questionnaires, our chrome extension empowers you to streamline tasks and achieve
                more with every job application. Revolutionize your workflow and experience
                efficiency like never before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA Banner (dark) ─── */}
      <section className="bg-[#1e293b] py-16 text-center px-6">
        <h2 className="text-[24px] md:text-[32px] font-extrabold text-white mb-4">
          Still Not Convinced? Start With Free Account!
        </h2>
        <p className="text-[#b0bec5] text-[14px] max-w-[560px] mx-auto mb-7 leading-relaxed">
          FirstResume users get in average 50% more interviews and they spend 10 hours less per
          week. Start automating your job search today.
        </p>
        <PillButton variant="outline-white">Start Free Trial</PillButton>
        <p className="text-[#94a3b8] text-[12px] mt-3">No credit card required</p>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="bg-[#eef0f4] py-16 text-center px-6">
        <div className="w-12 h-12 rounded-full bg-[#c8cdd5] flex items-center justify-center mx-auto mb-5">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] mb-6">
          FirstResume Helps You Find A Job Faster
        </h2>
        <PillButton>Get Started Now</PillButton>
      </section>
    </div>
  );
}
