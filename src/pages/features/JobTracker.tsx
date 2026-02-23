import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.jobexcv.ai" }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="inline-flex items-center bg-[#0f0f0f] text-white px-7 py-[14px] rounded-full font-semibold text-[14px] transition-all duration-200 hover:scale-[1.02]">{children}</a>;
}
function BrowserMockup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (<div className={`bg-white rounded-[16px] shadow-[0_2px_24px_rgba(0,0,0,0.10)] border border-[#e4e4e7] overflow-hidden ${className}`}><div className="flex items-center gap-1.5 px-3 py-2 bg-[#f9fafb] border-b border-[#e4e4e7]"><span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" /><span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" /><span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" /><div className="ml-3 flex-1 h-5 rounded bg-white border border-[#e4e4e7]" /></div><div className="p-0">{children}</div></div>);
}

function KanbanBoard() {
  const cols = [
    { title: "Favorites", color: "#f59e0b", cards: [{ company: "Google", role: "Software Engineer", tag: "Remote" }, { company: "Stripe", role: "Frontend Dev", tag: "Hybrid" }] },
    { title: "Applied", color: "#3b82f6", cards: [{ company: "Meta", role: "Product Designer", tag: "On-site" }, { company: "Airbnb", role: "Data Analyst", tag: "Remote" }, { company: "Shopify", role: "Backend Eng", tag: "Remote" }] },
    { title: "Interview", color: "#10b981", cards: [{ company: "Netflix", role: "Senior SWE", tag: "On-site" }] },
  ];
  return (
    <div className="bg-[#f9fafb] p-4 md:p-6">
      <div className="flex items-center gap-3 mb-5"><div className="text-[13px] font-semibold text-[#0f0f0f] flex items-center gap-1.5"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>Board</div></div>
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {cols.map((col) => (<div key={col.title}><div className="flex items-center gap-2 mb-3"><span className="w-2.5 h-2.5 rounded-full" style={{ background: col.color }} /><span className="text-[12px] font-bold text-[#0f0f0f] uppercase tracking-wide">{col.title}</span><span className="ml-auto text-[11px] text-[#71717a] font-medium">{col.cards.length}</span></div><div className="space-y-2">{col.cards.map((c) => (<div key={c.company+c.role} className="bg-white rounded-[16px] border border-[#e4e4e7] p-2.5 shadow-sm"><p className="text-[11px] font-semibold text-[#0f0f0f] leading-tight">{c.role}</p><p className="text-[10px] text-[#71717a] mt-0.5">{c.company}</p><span className="inline-block mt-1.5 text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: col.color+"18", color: col.color }}>{c.tag}</span></div>))}</div></div>))}
      </div>
    </div>
  );
}

export default function JobTrackerPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <section className="max-w-[780px] mx-auto px-6 text-center pb-6">
          <h1 className="text-[32px] md:text-[48px] font-extrabold text-[#0f0f0f] leading-[1.15] mb-5 tracking-tight">Finally the best job application tracker is here to help you track your applications</h1>
          <p className="text-[#52525b] text-[18px] max-w-[620px] mx-auto mb-7 leading-relaxed">JobExCV Kanban board is the best job application tracker that allows you to track all your job applications and put structure in your daily job search process.</p>
          <PillButton>Use our job search application for free &nbsp;→</PillButton>
        </section>
        <section className="relative mt-4">
          <div className="absolute inset-x-0 bottom-0 h-[55%]"><div className="w-full h-full bg-gradient-to-b from-[#e4e4e7] to-[#d4d4d8] rounded-t-[32px]" /></div>
          <div className="relative max-w-[700px] mx-auto px-6 pb-0"><BrowserMockup><KanbanBoard /></BrowserMockup></div>
          <div className="w-full h-6 bg-[#d4d4d8]" />
        </section>
        <section className="max-w-[1000px] mx-auto px-6 pt-20 pb-4"><h2 className="text-[24px] md:text-[32px] font-extrabold text-[#0f0f0f] text-center">Check How Job Application Tracker Works</h2></section>
        <section className="max-w-[1000px] mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-4 max-w-[380px]"><h3 className="text-[22px] md:text-[26px] font-extrabold text-[#0f0f0f]">Create An Account</h3><p className="text-[#71717a] text-[14px] leading-relaxed">To access the Job Application Tracker, you first need to create an account. Signing up is quick and easy.</p><PillButton>Start today</PillButton></div>
            <div className="flex-1 flex gap-4">
              <BrowserMockup className="flex-1"><div className="bg-white p-5 space-y-3"><h4 className="text-[13px] font-bold text-[#0f0f0f] mb-3">Create your account</h4>{["First name","Last name","Email address","Password"].map(f=>(<div key={f}><label className="text-[10px] text-[#71717a] font-medium block mb-1">{f}</label><div className="h-7 rounded border border-[#e4e4e7] bg-[#f9fafb]"/></div>))}<div className="pt-2"><div className="h-8 rounded-full bg-[#0f0f0f] flex items-center justify-center"><span className="text-white text-[11px] font-semibold">Sign Up</span></div></div></div></BrowserMockup>
              <div className="flex-1 bg-[#dbeafe] rounded-[16px] flex items-center justify-center min-h-[220px]"><svg width="120" height="180" viewBox="0 0 120 180" fill="none"><circle cx="60" cy="40" r="18" fill="#3b82f6"/><rect x="42" y="60" width="36" height="50" rx="8" fill="#3b82f6"/></svg></div>
            </div>
          </div>
        </section>
        <section className="bg-[#f9fafb] py-16 text-center px-6 mt-8">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#0f0f0f] mb-6">JobExCV Helps You Find A Job Faster</h2>
          <PillButton>Get Started Now</PillButton>
        </section>
      </div>
      <Footer />
    </div>
  );
}
