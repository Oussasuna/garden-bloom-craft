import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqItems = [
  { question: "What is the AI Mock Interview?", answer: "The AI Mock Interview is a FirstResume feature available for every job match you receive. Whenever you find a position that matches your profile, you can start a mock interview tailored to that specific role and get instant feedback to improve your performance." },
  { question: "How does it work?", answer: "For every job match in your dashboard, you'll see an option to launch a mock interview. You answer role-specific and behavioral questions, and the AI provides feedback on your responses." },
  { question: "Can I choose different roles or positions?", answer: "Yes! The AI Mock Interview is tailored to each job match in your dashboard. Every interview simulation is customized based on the specific role, company, and job requirements." },
  { question: "Do I get feedback instantly?", answer: "Yes, you receive instant feedback after each answer. The AI evaluates your responses and provides suggestions to help you improve your interview performance." },
  { question: "How can I start an AI Mock Interview?", answer: "Log in to your FirstResume dashboard, find a job match that interests you, and click the Mock Interview button. It's that simple — you can practice as many times as you need." },
];

export default function AiMockInterviewPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white min-h-screen">
      <section className="relative w-full overflow-hidden bg-white pt-[120px] pb-[80px] md:pt-[140px] md:pb-[140px]">
        <div className="max-w-[1200px] mx-auto px-6 relative text-center">
          <div className="absolute right-[10%] top-[5%] hidden md:block">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none"><path d="M0 10C5 10 5 0 10 0C15 0 15 10 20 10C25 10 25 0 30 0C35 0 35 10 40 10" stroke="#4A90E2" strokeWidth="3" strokeLinecap="round" /></svg>
          </div>
          <div className="absolute left-[15%] top-[10%] hidden md:block h-6 w-6 rounded-full bg-[#4A90E2] opacity-80" />
          <div className="absolute right-[12%] bottom-[10%] hidden md:block">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none"><path d="M5 35C15 5 25 5 30 20C35 35 45 35 55 5" stroke="#FF6B9E" strokeWidth="6" strokeLinecap="round" /></svg>
          </div>
          <div className="relative z-10 mx-auto max-w-[900px]">
            <div className="mb-6 flex justify-center">
              <span className="inline-block bg-[#4A90E2] text-white text-[12px] font-bold px-4 py-2 rounded-full uppercase tracking-wide">Coming Soon</span>
            </div>
            <h1 className="mb-6 text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.2] tracking-tight text-black">AI Mock Interview</h1>
            <p className="mx-auto mb-10 max-w-[800px] text-[16px] md:text-[18px] leading-[1.6] text-[#555]">
              Enhance your Interview preparation with the AI Mock Interview, available directly in your FirstResume dashboard. For every job match, you can instantly launch a simulated interview tailored to the role you are applying for. Answer role-specific and behavioral questions, practice as many times as you need, and receive instant feedback to refine your skills.
            </p>
            <a href="https://app.firstresume.ai" className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg font-semibold text-[16px] hover:opacity-85 transition-opacity">Start today</a>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fa] py-[80px] md:py-[100px] text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] md:text-[36px] font-bold text-black mb-4">How It Works</h2>
          <p className="text-[16px] md:text-[18px] text-[#555] max-w-[560px] mx-auto mb-16 leading-[1.6]">Follow these simple steps to start your AI Mock Interview and get instant feedback tailored to your job matches.</p>
          <div className="relative mb-12">
            <div className="hidden md:block absolute top-[20px] left-[15%] right-[15%] h-[1px] bg-[#e1e8ed] z-0" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              {[{ num: 1, text: "Log in to your FirstResume account to access your dashboard" }, { num: 2, text: "Find the job match that interests you" }, { num: 3, text: "Start your AI Mock Interview and practice for success" }].map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-[#4A90E2] text-white rounded-full flex items-center justify-center font-bold text-[16px] mb-6 shadow-sm">{step.num}</div>
                  <p className="text-[15px] font-medium leading-[1.6] text-black px-4 max-w-[280px]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
          <a href="https://app.firstresume.ai" className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg font-semibold text-[16px] hover:opacity-85 transition-opacity">Start today</a>
        </div>
      </section>

      <section className="bg-white py-[80px] md:py-[100px]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-[28px] md:text-[36px] font-bold text-black mb-4">Have questions?</h2>
            <p className="text-[16px] md:text-[18px] text-[#555] leading-[1.6]">We've got answers.</p>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-[10px] border border-[#e1e8ed] bg-white transition-all">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center px-5 py-5 text-left hover:bg-[#f4f7fa] transition-colors">
                  <span className={`mr-3 transform transition-transform duration-200 ${openFaq === i ? "rotate-90" : ""}`}><ChevronRight size={16} strokeWidth={3} className="text-black" /></span>
                  <span className="text-[16px] font-bold text-black">{item.question}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-[500px]" : "max-h-0"}`}>
                  <div className="border-t border-[#e1e8ed] px-5 py-5 text-[16px] leading-[1.6] text-[#555]">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fa] py-[80px] md:py-[100px] text-center px-6">
        <div className="w-[45px] h-[45px] rounded-full bg-[#97a3b3] flex items-center justify-center mx-auto mb-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
        </div>
        <h2 className="text-[28px] md:text-[36px] font-bold text-black mb-8 leading-[1.2]">FirstResume Helps You Find A Job Faster</h2>
        <a href="https://app.firstresume.ai" className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg font-semibold text-[16px] hover:opacity-85 transition-opacity">Get Started Now</a>
      </section>
    </div>
  );
}
