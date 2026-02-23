import React from "react";
import { List } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function AiQuestionAnsweringPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden bg-white pt-[140px] pb-0">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0f0f0f] mb-6 max-w-[900px] mx-auto">Automate Question answering in job applications using AI.</h1>
          <p className="text-[18px] text-[#52525b] leading-[1.6] max-w-[800px] mx-auto mb-8">Use our ✦ AI question answering feature to automatically generate answers to company's questions based on your resume, past answers and similar questions.</p>
          <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-[#0f0f0f] text-white px-7 py-[14px] rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02] mb-16">Let's Get Started your automatic job applications! →</a>
          <div className="relative flex justify-center w-full">
            <div className="absolute bottom-0 w-full h-[50%] bg-[#f9fafb] -z-10"/>
            <div className="w-full max-w-[900px] px-4">
              <div className="relative rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white">
                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/answering-2.webp" alt="AI question answering dashboard interface" className="w-full h-auto object-cover"/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white border-t border-[#e4e4e7] py-10 mt-0 shadow-sm relative z-20">
          <div className="max-w-[1140px] mx-auto px-4"><h3 className="text-center text-[18px] md:text-[20px] font-bold text-[#0f0f0f]">Not sure how to use our AI answering automation? Contact our team to learn more.</h3></div>
        </div>
      </section>
      <section className="py-[80px] md:py-[100px] bg-[#f9fafb]">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-7/12 mb-12 lg:mb-0 lg:pr-12">
              <h5 className="text-[13px] font-semibold text-[#3b82f6] mb-4 uppercase tracking-[0.05em]">Not sure how to mass-answer job application questions? Check below</h5>
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f0f0f] leading-[1.2] mb-10 tracking-tight">Use Artificial Intelligence To Answer Any Question</h2>
              <ol className="list-none p-0 m-0 space-y-8 mb-10">
                {[{num:"01",text:"1) Click the button that automatically fills the input with our AI generated answer"},{num:"02",text:"2) In the background JobExCV will search your previous questions and answers as well as your CV/Resume"},{num:"03",text:"3) With a single click you can answer the question and submit the job application"}].map(item=>(<li key={item.num} className="flex items-start"><span className="text-[14px] font-bold text-[#3b82f6] border-b border-[#3b82f6] pb-[2px] mr-5 shrink-0">{item.num}</span><span className="text-[17px] text-[#71717a] leading-[1.6]">{item.text}</span></li>))}
              </ol>
              <a href="https://app.jobexcv.ai" className="inline-flex items-center px-7 py-[14px] border border-[#0f0f0f] rounded-full text-[15px] font-semibold text-[#0f0f0f] bg-transparent transition-all duration-200 hover:bg-[#0f0f0f] hover:text-white hover:scale-[1.02]">Start today</a>
            </div>
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px] bg-[#f9fafb] p-8 md:p-10 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#e4e4e7]">
                <div className="mb-6"><List size={32} strokeWidth={2.5} className="text-[#0f0f0f]"/></div>
                <h3 className="text-[22px] font-bold text-[#0f0f0f] mb-4 leading-tight">Tired of answering the same questions?</h3>
                <p className="text-[16px] text-[#71717a] leading-[1.7]">Use our innovative technology to automatically answer questions based on your experience and previous questions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0f0f0f] py-[80px] md:py-[100px] text-center px-6">
        <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-6 leading-[1.2]">Still Not Convinced? Start With Free Account!</h2>
        <p className="text-white/90 text-[18px] max-w-[800px] mx-auto mb-8 leading-[1.6]">JobExCV users get in average 50% more interviews and they spend 10 hours less per week.</p>
        <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-white text-[#0f0f0f] px-7 py-[14px] rounded-full font-semibold text-[16px] transition-all duration-200 hover:scale-[1.02] mb-4">Start Free Trial</a>
        <p className="text-white/70 text-[14px] mt-2">No credit card required</p>
      </section>
      <section className="bg-[#f9fafb] py-[80px] md:py-[100px] text-center px-6">
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f0f0f] mb-8 leading-[1.2]">JobExCV Helps You Find A Job Faster</h2>
        <a href="https://app.jobexcv.ai" className="inline-flex items-center bg-[#0f0f0f] text-white px-7 py-[14px] rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02]">Get Started Now</a>
      </section>
      <Footer />
    </div>
  );
}
