import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function PillButton({ children, href = "https://app.firstresume.ai", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark"|"outline-white" }) {
  const base = "inline-flex items-center px-7 py-3 rounded-full font-semibold text-[14px] transition-colors";
  const styles = { dark: "bg-[#1a1a1a] text-white hover:bg-[#333]", "outline-white": "border border-white text-white hover:bg-white hover:text-[#1a1a1a]" };
  return <a href={href} className={`${base} ${styles[variant]}`}>{children}</a>;
}

export default function JobMatchingPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <Navbar />
      <section className="flex flex-col md:flex-row min-h-[480px]">
        <div className="flex-1 bg-[#1e293b] px-8 md:px-14 py-16 flex flex-col justify-center">
          <h1 className="text-[28px] md:text-[40px] font-extrabold text-white leading-[1.15] mb-5 tracking-tight max-w-[480px]">The most advanced Job Matching Platform to help you get a job</h1>
          <p className="text-[#b0bec5] text-[14px] md:text-[15px] max-w-[440px] mb-7 leading-relaxed">Use AI to accelerate your job search. Search and apply across all the top job platforms. With Smart job matching and AI, find your dream job.</p>
          <div className="flex items-center gap-4 flex-wrap"><PillButton>Book a call with us</PillButton></div>
        </div>
        <div className="flex-1 bg-white px-8 py-16 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-[0_2px_24px_rgba(0,0,0,0.10)] border border-[#e0e4ea] overflow-hidden w-full max-w-[420px] p-5">
            <div className="flex items-center justify-between mb-3"><span className="text-[9px] text-[#94a3b8]">firstresume.ai/matches</span><span className="text-[9px] px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#16a34a] font-semibold">92% Match</span></div>
            <div className="flex items-start gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-[#dbeafe] flex items-center justify-center text-[14px] font-bold text-[#2563eb]">JP</div><div><p className="text-[14px] font-bold text-[#1a1a1a]">Junior Project Manager</p><p className="text-[10px] text-[#94a3b8]">TechCorp International</p></div></div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-[10px] text-[#555]"><span className="text-[#94a3b8]">Salary:</span><span className="font-medium">$55,000 - $75,000</span></div>
              <div className="flex items-center gap-2 text-[10px] text-[#555]"><span className="text-[#94a3b8]">Location:</span><span className="font-medium">London, UK · Hybrid</span></div>
            </div>
            <div className="flex gap-2"><div className="flex-1 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center"><span className="text-white text-[10px] font-semibold">Apply Now</span></div></div>
          </div>
        </div>
      </section>
      <section className="max-w-[900px] mx-auto px-6 py-20 text-center">
        <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] mb-4">Help Your Clients Accelerate Their Job Search</h2>
        <p className="text-[#666] text-[14px] max-w-[620px] mx-auto mb-10 leading-relaxed">We help Agencies for individuals and businesses find the best match. Apply to the best companies with just 30 mins of setup for free.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[600px] mx-auto">
          {["Automatically Apply","Email Templates","Resume/Cover","Job Filtering","CV Improvements tips","Multiple job searches"].map((tab, i)=>(<div key={tab} className={`rounded-lg px-4 py-3 text-[13px] font-medium border transition-colors ${i===0?"bg-[#1e293b] text-white border-[#1e293b]":"bg-white text-[#555] border-[#e5e7eb]"}`}>{tab}</div>))}
        </div>
      </section>
      <section className="max-w-[800px] mx-auto px-6 py-16">
        <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] text-center mb-10">Here Is How FirstResume For Bootcamps Works</h2>
        <div className="space-y-6 mb-10">
          <div className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f0f1f3] flex items-center justify-center text-[13px] font-bold text-[#1a1a1a]">1</span><p className="text-[14px] text-[#555] leading-relaxed">Identify new companies that are a good match with your existing pool of candidates. We match with 1000's of companies.</p></div>
          <div className="flex gap-4"><span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f0f1f3] flex items-center justify-center text-[13px] font-bold text-[#1a1a1a]">2</span><p className="text-[14px] text-[#555] leading-relaxed">Group your dashboard by candidate, CV template, at a company, job search, keyword level.</p></div>
        </div>
        <div className="text-center"><PillButton>Book a call with us</PillButton></div>
      </section>
      <section className="bg-[#eef0f4] py-16 text-center px-6 mt-8">
        <div className="w-12 h-12 rounded-full bg-[#1e293b] flex items-center justify-center mx-auto mb-5"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#1a1a1a] mb-6">FirstResume Helps You Find A Job Faster</h2>
        <PillButton>Get Started Now</PillButton>
      </section>
      <Footer />
    </div>
  );
}
