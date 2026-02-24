import React from "react";
import { Mail, Star, LayoutDashboard } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function OneClickApplyPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-[60px]">
            <div className="w-full lg:w-1/2">
              <div className="max-w-[560px]">
                <span className="inline-block text-[14px] font-semibold text-[#555555] mb-4 tracking-wide uppercase">For more senior profiles</span>
                <h1 className="text-[40px] md:text-[48px] font-extrabold leading-[1.1] text-black mb-6 tracking-[-0.02em]">Review every job and apply with one click</h1>
                <div className="space-y-4 mb-10">
                  {["On a single platform, you can find all the important details", "You can manually apply with a single click", "You can rate the job matches"].map((text, i) =>
                  <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span className="text-[16px] text-black leading-[1.5]">{text}</span>
                    </div>
                  )}
                </div>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90 group">
                  Get Started
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[110%] h-[60%] bg-[#AAB4C4] opacity-40 rounded-[20px] -z-10" style={{ filter: "blur(2px)" }} />
                <div className="relative shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[12px] overflow-hidden bg-white border border-[#E2E8F0]">
                  <img src="https://www.loopcv.pro/assets/images/screens/manual.webp" alt="One-click apply dashboard showing job details" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px] bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-8 text-center">
            <h3 className="text-[20px] md:text-[24px] font-bold text-black leading-[1.4] mb-1">Find more details for each job in a single dashboard</h3>
            <p className="text-[18px] text-[#555555] leading-[1.6]">Send an email to a company with a single click</p>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[60px]">
            <div className="w-full lg:w-1/2">
              <div className="rounded-[12px] overflow-hidden border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <img src="https://www.loopcv.pro/assets/images/screens/manual.webp" alt="Dashboard showing job application details" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="max-w-[540px]">
                <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.2] text-black mb-6 tracking-[-0.02em]">Screen Every Job And Apply With A Single Click</h2>
                <p className="text-[18px] leading-[1.7] text-[#555555] mb-8">In a single platform you can find all the important details. You can manually apply with a single click. You can rate the job matches.</p>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[16px] transition-all hover:opacity-90">Start today</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            { icon: <Mail size={24} strokeWidth={2} className="text-black" />, title: "Send emails with one click", desc: "JobExCV identifies company emails and with one click you can apply. If you want to spend a little more time reviewing the job, you can do it with the 2-step process." },
            { icon: <Star size={24} strokeWidth={2} className="text-black" />, title: "Rate your job matches", desc: "By rating job postings, you help our search algorithm find you even better matches tailored to your preferences and career goals." },
            { icon: <LayoutDashboard size={24} strokeWidth={2} className="text-black" />, title: "Organize your job search", desc: "All interesting positions from multiple job boards can be saved in our dashboard so you can evaluate them later and stay organized." }].
            map((card, i) =>
            <div key={i} className="bg-white rounded-[12px] p-8 border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-shadow">
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#F0F2F5] rounded-[10px]">{card.icon}</div>
                <h3 className="text-[20px] font-bold text-black leading-[1.3] mb-3">{card.title}</h3>
                <p className="text-[16px] text-[#555555] leading-[1.6]">{card.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-black py-[80px] lg:py-[100px]">
        <div className="max-w-[1140px] mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-white text-[28px] md:text-[36px] font-bold leading-[1.3] mb-6 max-w-[800px]">Still Not Convinced? Start With A Free Account!</h2>
          <p className="text-white text-[16px] md:text-[18px] leading-[1.6] mb-10 max-w-[850px] opacity-90">JobExCV users get on average 50% more interviews and save 10 hours per week.<br className="hidden md:block" />Start automating your job search today.</p>
          <a href="https://app.jobexcv.ai" className="inline-block bg-[#aab4c4] hover:bg-[#99a5b8] text-black font-semibold text-[16px] px-[32px] py-[14px] rounded-[8px] transition-colors duration-200">Start Free Trial</a>
          <p className="text-white text-[14px] opacity-80 mt-6">No credit card required</p>
        </div>
      </section>

      








      <Footer />
    </div>);

}