import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function BrowserMockup({ children, className = "" }: {children: React.ReactNode;className?: string;}) {
  return (
    <div className={`bg-white rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f6f7f9] border-b border-[#E2E8F0]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded bg-white border border-[#E2E8F0]" />
      </div>
      <div className="p-0">{children}</div>
    </div>);

}

function KanbanBoard() {
  const cols = [
  { title: "Favorites", color: "#f59e0b", cards: [{ company: "Google", role: "Software Engineer", tag: "Remote" }, { company: "Stripe", role: "Frontend Dev", tag: "Hybrid" }] },
  { title: "Applied", color: "#3b82f6", cards: [{ company: "Meta", role: "Product Designer", tag: "On-site" }, { company: "Airbnb", role: "Data Analyst", tag: "Remote" }, { company: "Shopify", role: "Backend Eng", tag: "Remote" }] },
  { title: "Interview", color: "#10b981", cards: [{ company: "Netflix", role: "Senior SWE", tag: "On-site" }] }];

  return (
    <div className="bg-[#fafbfc] p-4 md:p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="text-[13px] font-semibold text-black flex items-center gap-1.5">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
          Board
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {cols.map((col) =>
        <div key={col.title}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: col.color }} />
              <span className="text-[12px] font-bold text-black uppercase tracking-wide">{col.title}</span>
              <span className="ml-auto text-[11px] text-[#555555] font-medium">{col.cards.length}</span>
            </div>
            <div className="space-y-2">
              {col.cards.map((c) =>
            <div key={c.company + c.role} className="bg-white rounded-[8px] border border-[#E2E8F0] p-2.5 shadow-sm">
                  <p className="text-[11px] font-semibold text-black leading-tight">{c.role}</p>
                  <p className="text-[10px] text-[#555555] mt-0.5">{c.company}</p>
                  <span className="inline-block mt-1.5 text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: col.color + "18", color: col.color }}>{c.tag}</span>
                </div>
            )}
            </div>
          </div>
        )}
      </div>
    </div>);

}

const steps = [
{
  title: "Create An Account",
  description:
  "To access the Job Application Tracker, you first need to create an account. Signing up is quick and easy—just enter your details, verify your email, and you're ready to go. Once registered, you'll have full access to organize your job applications efficiently."
},
{
  title: "Add Jobs to Your Board",
  description:
  "Go to your All Matches section and choose the job listings you want to track. Use the 'Add to Board' option to include them in your Job Application Tracker Board. This will help you keep an organized view of your selected opportunities and categorize them later."
},
{
  title: "Categorize Your Job Applications",
  description:
  "Organize the jobs on your Job Application Tracker Board. Mark your favorites, drag applied jobs to Applied, and move those with interviews to Interview. Stay on top of your job search with ease!"
}];


export default function JobTrackerPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-[60px]">
            <h1 className="text-[32px] md:text-[44px] font-extrabold text-black leading-[1.15] mb-5 tracking-[-0.02em]">
              Finally the best job application tracker is here to help you track your applications
            </h1>
            <p className="text-[#555555] text-[18px] max-w-[800px] mx-auto mb-10 leading-[1.6]">
              JobExCV Kanban board is the best job application tracker that allows you to track all your job applications and put structure in your daily job search process. JobExCV helps you manage all the open job opportunities you have, in a single dashboard
            </p>
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90 group">
              Use our job search application for free &nbsp;→
            </a>
          </div>
          <div className="relative w-full max-w-[1000px] mx-auto">
            <BrowserMockup><KanbanBoard /></BrowserMockup>
          </div>
        </div>
        <div className="w-full mt-[-80px] pt-[120px] pb-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-6 max-w-[1000px] mx-auto text-center">
              <h2 className="text-[20px] md:text-[24px] font-bold text-black leading-[1.4] mb-1">
                Check How Job Application Tracker Works
              </h2>
            </div>
          </div>
        </div>
      </section>

      {steps.map((step, i) =>
      <section key={step.title} className="py-[100px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-[30px]`}>
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <BrowserMockup>
                  <div className="bg-[#fafbfc] p-6 min-h-[220px] flex items-center justify-center">
                    <div className="text-center text-[#555555]">
                      <svg className="mx-auto mb-2" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                      <span className="text-[12px] font-medium">Step {i + 1} Preview</span>
                    </div>
                  </div>
                </BrowserMockup>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="max-w-[540px]">
                  <span className="text-[16px] font-medium text-[#555555] underline whitespace-nowrap mb-4 block">0{i + 1}</span>
                  <h2 className="text-[36px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-black mb-4">{step.title}</h2>
                  <p className="text-[18px] leading-[1.6] text-[#555555] mb-8">{step.description}</p>
                  <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">Start today</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-black py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <h2 className="text-white text-[32px] md:text-[42px] font-bold leading-[1.2] max-w-[700px]">Join the JobExCV community. Find your job 3x faster.</h2>
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-[#aab4c4] hover:bg-[#99a5b8] text-black font-semibold text-[16px] px-8 py-[14px] rounded-[8px] transition-all flex-shrink-0">Sign up</a>
          </div>
        </div>
      </section>

      








      <Footer />
    </div>);

}