import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function BrowserMockup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f6f7f9] border-b border-[#E2E8F0]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded bg-white border border-[#E2E8F0]" />
      </div>
      <div className="p-0">{children}</div>
    </div>
  );
}

function HeroJobCard() {
  return (
    <BrowserMockup className="w-full max-w-[420px]">
      <div className="p-5 bg-white">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] text-[#555555]">jobexcv.ai/matches</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#16a34a] font-semibold">92% Match</span>
        </div>
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-[8px] bg-[#dbeafe] flex items-center justify-center text-[14px] font-bold text-[#2563eb]">JP</div>
          <div>
            <p className="text-[14px] font-bold text-black">Junior Project Manager</p>
            <p className="text-[10px] text-[#555555]">TechCorp International</p>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-[10px] text-[#555555]"><span className="text-[#555555]">Salary:</span><span className="font-medium">$55,000 - $75,000</span></div>
          <div className="flex items-center gap-2 text-[10px] text-[#555555]"><span className="text-[#555555]">Location:</span><span className="font-medium">London, UK &middot; Hybrid</span></div>
          <div className="flex items-center gap-2 text-[10px] text-[#555555]"><span className="text-[#555555]">Type:</span><span className="font-medium">Full-time</span></div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-8 rounded-[8px] bg-black flex items-center justify-center"><span className="text-white text-[10px] font-semibold">Apply Now</span></div>
          <div className="h-8 w-8 rounded-full border border-[#E2E8F0] flex items-center justify-center"><span className="text-[12px]">&#9825;</span></div>
        </div>
      </div>
    </BrowserMockup>
  );
}

export default function JobMatchingPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-[60px]">
            <div className="w-full lg:w-1/2">
              <div className="max-w-[560px]">
                <h1 className="text-[28px] md:text-[40px] font-extrabold text-black leading-[1.15] mb-5 tracking-[-0.02em]">The most advanced Job Matching Platform to help you get a job</h1>
                <p className="text-[#555555] text-[18px] max-w-[500px] mb-10 leading-[1.6]">Use AI to accelerate your job search. Search and apply across all the top job platforms. With Smart job matching and AI, find your dream job. Click the button or call us for more information and pricing.</p>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">Book a call with us</a>
                <a href="#" className="block text-[#555555] text-[14px] mt-3 hover:underline">or Talk to our team</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <HeroJobCard />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[36px] md:text-[42px] font-extrabold text-black mb-4 tracking-[-0.02em]">Help Your Clients Accelerate Their Job Search</h2>
          <p className="text-[#555555] text-[18px] max-w-[800px] mx-auto mb-10 leading-[1.6]">JobExCV helps Agencies for individuals and businesses find the best match. Apply to the best companies with just 30 mins of setup for free, we will even help you. Client show for free</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[600px] mx-auto">
            {[{label:"Automatically Apply",active:true},{label:"Email Templates",active:false},{label:"Resume/Cover",active:false},{label:"Job Filtering",active:false},{label:"CV Improvements tips",active:false},{label:"Multiple job searches in parallel",active:false}].map((tab) => (
              <div key={tab.label} className={`rounded-[8px] px-4 py-3 text-[13px] font-medium border transition-colors ${tab.active ? "bg-black text-white border-black" : "bg-white text-[#555555] border-[#E2E8F0] hover:border-black"}`}>{tab.label}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[42px] font-extrabold text-black text-center mb-10 tracking-[-0.02em]">Here Is How JobExCV For Bootcamps Works</h2>
          <div className="space-y-0 text-black max-w-[800px] mx-auto">
            {["Identify new companies that are a good match with your existing pool of candidates (CVs from your applicants). We match with 1000's of companies. From these matches you can filter and select the best for each candidate.", "Group your dashboard by candidate, CV template, at a company, job search, keyword level. We help you create reports for your clients and track the progress of each candidate."].map((text, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-t border-[#E2E8F0]">
                <span className="text-[16px] font-medium text-[#555555] underline whitespace-nowrap pt-1">0{i + 1}</span>
                <span className="text-[18px] font-medium">{text}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">Book a call with us</a>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F2F5] py-[100px] text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[42px] font-bold text-black mb-10 leading-tight tracking-[-0.02em]">JobExCV Helps You Find A Job Faster</h2>
          <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[16px] transition-all hover:opacity-90 group">
            Get Started Now
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}