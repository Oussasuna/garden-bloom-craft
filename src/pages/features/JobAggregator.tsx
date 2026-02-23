import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function JobAggregatorPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-[60px]">
            <h1 className="text-[36px] md:text-[48px] font-extrabold text-black leading-[1.12] mb-6 tracking-[-0.02em]">
              Aggregate Job postings from 20 job boards in one platform
            </h1>
            <p className="text-[#555555] text-[18px] max-w-[800px] mx-auto mb-10 leading-[1.6]">
              JobExCV simplifies your job search by aggregating job postings from 20 top job boards into one powerful platform. No more switching between multiple websites—access all opportunities in one place and apply effortlessly. Whether you're a job seeker or a recruiter, JobExCV streamlines the process, saving you time and effort.
            </p>
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">
              Get Started &nbsp;→
            </a>
          </div>

          <div className="relative w-full max-w-[1000px] mx-auto">
            <div className="bg-white rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#E2E8F0] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f6f7f9] border-b border-[#E2E8F0]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <div className="ml-3 flex-1 bg-white rounded-md h-6 flex items-center px-3">
                  <span className="text-[11px] text-[#555555]">app.jobexcv.ai</span>
                </div>
              </div>
              <div className="p-4 bg-[#fafbfc]">
                <div className="flex gap-3 h-[180px]">
                  <div className="w-[140px] bg-black rounded-[8px] p-3 flex flex-col gap-2 shrink-0">
                    <div className="h-5 w-20 bg-white/20 rounded" />
                    <div className="h-4 w-24 bg-white/10 rounded" />
                    <div className="h-4 w-16 bg-white/10 rounded" />
                    <div className="h-4 w-28 bg-[#4f8cff]/40 rounded" />
                    <div className="h-4 w-20 bg-white/10 rounded" />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="h-7 w-24 bg-[#4f8cff]/20 rounded-md" />
                      <div className="h-7 w-20 bg-[#F0F2F5] rounded-md" />
                      <div className="h-7 w-28 bg-[#F0F2F5] rounded-md" />
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-2">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="bg-white border border-[#E2E8F0] rounded-[8px] p-2 flex flex-col gap-1">
                          <div className="h-3 w-3/4 bg-[#E2E8F0] rounded" />
                          <div className="h-2 w-1/2 bg-[#F0F2F5] rounded" />
                          <div className="h-2 w-2/3 bg-[#F0F2F5] rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-[-80px] pt-[120px] pb-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-6 max-w-[1000px] mx-auto text-center">
              <p className="text-[18px] text-[#555555] max-w-[700px] mx-auto font-medium">
                For every job search (loop) that you create, JobExCV will search in 20 job boards, will aggregate the job results in a single dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-[100px]">
          <h2 className="text-[36px] md:text-[42px] font-bold leading-[1.2] text-black tracking-[-0.02em] max-w-[800px] mx-auto text-center">
            See Where Each Job Comes From: 2 Easy Ways to Identify the Job Board!
          </h2>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`flex flex-col lg:flex-row-reverse items-center gap-[30px]`}>
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="rounded-[12px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] bg-white p-5 min-h-[220px]">
                <div className="flex gap-2 mb-3">
                  <div className="px-3 py-1.5 bg-[#F0F2F5] rounded-[8px] text-[12px] text-[#555555]">All Boards</div>
                  <div className="px-3 py-1.5 bg-[#4f8cff]/15 border border-[#4f8cff]/30 rounded-[8px] text-[12px] text-[#4f8cff] font-medium">LinkedIn</div>
                  <div className="px-3 py-1.5 bg-[#F0F2F5] rounded-[8px] text-[12px] text-[#555555]">Indeed</div>
                  <div className="px-3 py-1.5 bg-[#F0F2F5] rounded-[8px] text-[12px] text-[#555555]">Glassdoor</div>
                </div>
                <div className="border border-dashed border-[#E2E8F0] rounded-[8px] p-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-[#F0F2F5] last:border-0">
                      <div className="w-8 h-8 rounded bg-[#4f8cff]/10 flex items-center justify-center text-[10px] font-bold text-[#4f8cff]">in</div>
                      <div className="flex-1">
                        <div className="h-3 w-3/4 bg-[#E2E8F0] rounded mb-1" />
                        <div className="h-2 w-1/2 bg-[#F0F2F5] rounded" />
                      </div>
                      <div className="px-2 py-1 bg-[#e8f4ff] rounded text-[10px] text-[#4f8cff]">LinkedIn</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="max-w-[540px]">
                <h2 className="text-[36px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-black mb-4">Filter and View Jobs by Job Board</h2>
                <p className="text-[18px] leading-[1.6] text-[#555555] mb-8">
                  In the All Matches tab on your JobExCV dashboard, you can use the filters to see jobs from specific job boards. Simply open the filters, select your preferred job board, and instantly view all matching job opportunities from that source. This helps you focus on the platforms you trust the most!
                </p>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">Start today</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`flex flex-col lg:flex-row items-center gap-[30px]`}>
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="rounded-[12px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] bg-white p-5 min-h-[220px]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-4 w-48 bg-black rounded mb-1.5" />
                      <div className="h-3 w-32 bg-[#E2E8F0] rounded" />
                    </div>
                    <div className="px-3 py-1 bg-[#e8f4ff] rounded-full text-[11px] text-[#4f8cff] font-medium">via Indeed</div>
                  </div>
                  <div className="border-t border-[#F0F2F5] pt-3 space-y-2">
                    <div className="flex gap-4">
                      <span className="text-[11px] text-[#555555] w-20">Company</span>
                      <div className="h-3 w-28 bg-[#F0F2F5] rounded" />
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[11px] text-[#555555] w-20">Location</span>
                      <div className="h-3 w-36 bg-[#F0F2F5] rounded" />
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[11px] text-[#555555] w-20">Job Board</span>
                      <div className="h-3 w-20 bg-[#4f8cff]/20 rounded" />
                    </div>
                  </div>
                  <div className="border-t border-[#F0F2F5] pt-3">
                    <div className="h-2 w-full bg-[#F0F2F5] rounded mb-1.5" />
                    <div className="h-2 w-5/6 bg-[#F0F2F5] rounded mb-1.5" />
                    <div className="h-2 w-3/4 bg-[#F0F2F5] rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="max-w-[540px]">
                <h2 className="text-[36px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-black mb-4">Check the Job Posting Details</h2>
                <p className="text-[18px] leading-[1.6] text-[#555555] mb-8">
                  When you open a job match in JobExCV, you'll see the job board's name directly in the job details. Along with that, you can find all the important information, including the company name, job title, and full job description. This gives you full transparency on where each opportunity comes from and what it offers.
                </p>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">Start today</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-[80px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-white text-[28px] md:text-[36px] font-bold leading-[1.3] mb-6 max-w-[800px]">
            Still not convinced? Start with free account!
          </h2>
          <p className="text-white text-[16px] md:text-[18px] leading-[1.6] mb-10 max-w-[850px] opacity-90">
            JobExCV users get in average 50% more interviews and they spend 10 hours less per week. Start automating your job search today.
          </p>
          <a href="https://app.jobexcv.ai" className="inline-block bg-[#aab4c4] hover:bg-[#99a5b8] text-black font-semibold text-[16px] px-8 py-[14px] rounded-[8px] transition-colors">Start Free Trial</a>
          <p className="text-white text-[14px] opacity-80 mt-6">No credit card required</p>
        </div>
      </section>

      <section className="bg-[#F0F2F5] py-[100px] text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[42px] font-bold text-black mb-10 leading-tight tracking-[-0.02em]">
            JobExCV Helps You Find A Job Faster
          </h2>
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