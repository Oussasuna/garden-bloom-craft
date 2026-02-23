import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="inline-flex items-center bg-[#1a1a1a] text-white px-7 py-3 rounded-full font-semibold text-[14px] hover:bg-[#333] transition-colors">
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

function KanbanBoard() {
  const cols = [
    { title: "Favorites", color: "#f59e0b", cards: [{ company: "Google", role: "Software Engineer", tag: "Remote" }, { company: "Stripe", role: "Frontend Dev", tag: "Hybrid" }] },
    { title: "Applied", color: "#3b82f6", cards: [{ company: "Meta", role: "Product Designer", tag: "On-site" }, { company: "Airbnb", role: "Data Analyst", tag: "Remote" }, { company: "Shopify", role: "Backend Eng", tag: "Remote" }] },
    { title: "Interview", color: "#10b981", cards: [{ company: "Netflix", role: "Senior SWE", tag: "On-site" }] },
  ];
  return (
    <div className="bg-[#fafbfc] p-4 md:p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="text-[13px] font-semibold text-[#1a1a1a] flex items-center gap-1.5">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          Board
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {cols.map((col) => (
          <div key={col.title}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: col.color }} />
              <span className="text-[12px] font-bold text-[#1a1a1a] uppercase tracking-wide">{col.title}</span>
              <span className="ml-auto text-[11px] text-[#94a3b8] font-medium">{col.cards.length}</span>
            </div>
            <div className="space-y-2">
              {col.cards.map((c) => (
                <div key={c.company + c.role} className="bg-white rounded-md border border-[#e5e7eb] p-2.5 shadow-sm">
                  <p className="text-[11px] font-semibold text-[#1a1a1a] leading-tight">{c.role}</p>
                  <p className="text-[10px] text-[#64748b] mt-0.5">{c.company}</p>
                  <span className="inline-block mt-1.5 text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: col.color + "18", color: col.color }}>{c.tag}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Create An Account",
    description:
      "To access the Job Application Tracker, you first need to create an account. Signing up is quick and easy—just enter your details, verify your email, and you're ready to go. Once registered, you'll have full access to organize your job applications efficiently.",
  },
  {
    title: "Add Jobs to Your Board",
    description:
      "Go to your All Matches section and choose the job listings you want to track. Use the 'Add to Board' option to include them in your Job Application Tracker Board. This will help you keep an organized view of your selected opportunities and categorize them later.",
  },
  {
    title: "Categorize Your Job Applications",
    description:
      "Organize the jobs on your Job Application Tracker Board. Mark your favorites, drag applied jobs to Applied, and move those with interviews to Interview. Stay on top of your job search with ease!",
  },
];

export default function JobTrackerPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        {/* Hero */}
        <section className="max-w-[780px] mx-auto px-6 text-center pb-6">
          <h1 className="text-[32px] md:text-[44px] font-extrabold text-[#1a1a1a] leading-[1.15] mb-5 tracking-tight">
            Finally the best job application tracker is here to help you track your applications
          </h1>
          <p className="text-[#666] text-[14px] md:text-[15px] max-w-[620px] mx-auto mb-7 leading-relaxed">
            JobExCV Kanban board is the best job application tracker that allows you to track all your job applications and put structure in your daily job search process. JobExCV helps you manage all the open job opportunities you have, in a single dashboard
          </p>
          <PillButton>Use our job search application for free &nbsp;→</PillButton>
        </section>

        {/* Kanban Hero Image */}
        <section className="relative mt-4">
          <div className="absolute inset-x-0 bottom-0 h-[55%]">
            <div className="w-full h-full bg-gradient-to-b from-[#d2dbe6] to-[#b0becf] rounded-t-[32px]" />
          </div>
          <div className="relative max-w-[700px] mx-auto px-6 pb-0">
            <BrowserMockup><KanbanBoard /></BrowserMockup>
          </div>
          <div className="w-full h-6 bg-[#a4b3c4]" />
        </section>

        {/* Section Title */}
        <section className="max-w-[1000px] mx-auto px-6 pt-20 pb-4">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] text-center">
            Check How Job Application Tracker Works
          </h2>
        </section>

        {/* Steps */}
        <section className="max-w-[1000px] mx-auto px-6 py-14 space-y-20">
          {steps.map((step, i) => (
            <div key={step.title} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10`}>
              <div className="flex-1 space-y-4 max-w-[440px]">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a] text-white font-bold text-[16px]">
                  {i + 1}
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold text-[#1a1a1a]">{step.title}</h3>
                <p className="text-[#666] text-[14px] leading-relaxed">{step.description}</p>
                <PillButton>Start today</PillButton>
              </div>
              <div className="flex-1">
                <BrowserMockup>
                  <div className="bg-[#f9fafb] p-6 min-h-[220px] flex items-center justify-center">
                    <div className="text-center text-[#94a3b8]">
                      <svg className="mx-auto mb-2" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                      <span className="text-[12px] font-medium">Step {i + 1} Preview</span>
                    </div>
                  </div>
                </BrowserMockup>
              </div>
            </div>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#eef0f4] py-16 text-center px-6 mt-8">
          <h2 className="text-[24px] md:text-[36px] font-extrabold text-[#1a1a1a] mb-3">
            JobExCV Helps <span className="text-[#0099ff]">You</span> Find A Job Faster
          </h2>
          <p className="text-[#666] text-[15px] mb-8">Join the JobExCV community</p>
          <PillButton>Get Started Now</PillButton>
        </section>
      </div>
      <Footer />
    </div>
  );
}
