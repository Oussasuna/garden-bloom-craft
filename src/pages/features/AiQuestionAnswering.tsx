import React from "react";
import { List } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function AiQuestionAnsweringPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto mb-[60px]">
            <h1 className="text-[32px] md:text-[48px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black mb-6 max-w-[900px]">Automate Question answering in job applications using AI.</h1>
            <p className="text-[18px] text-[#555555] leading-[1.6] max-w-[800px] mb-10">Use our ✦ AI question answering feature to automatically generate answers to company's questions based on your resume, past answers and similar questions.</p>
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">Let's Get Started your automatic job applications! →</a>
          </div>
          <div className="relative w-full max-w-[1000px] mx-auto">
            <div className="relative rounded-[12px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white border border-[#E2E8F0]">
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-loopcv-pro/assets/images/answering-2.webp" alt="AI question answering dashboard interface" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
        <div className="w-full mt-[-80px] pt-[120px] pb-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[12px] py-10 px-6 max-w-[1000px] mx-auto text-center">
              <h3 className="text-[18px] md:text-[20px] font-semibold text-black">Not sure how to use our AI answering automation? Contact our team to learn more.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="w-full lg:w-7/12">
              <div className="max-w-[650px]">
                <h5 className="text-[14px] font-medium text-[#555555] mb-4">Not sure how to mass-answer job application questions? Check below</h5>
                <h2 className="text-[36px] md:text-[42px] font-bold text-black leading-[1.2] mb-10 tracking-[-0.02em]">Use Artificial Intelligence To Answer Any Question</h2>
                <div className="space-y-0 text-black">
                  {["1) Click the button that automatically fills the input with our AI generated answer", "2) In the background JobExCV will search your previous questions and answers as well as your CV/Resume", "3) With a single click you can answer the question and submit the job application"].map((text, i) =>
                  <div key={i} className="flex items-start gap-4 py-4 border-t border-[#E2E8F0]">
                      <span className="text-[16px] font-medium text-[#555555] underline whitespace-nowrap pt-1">0{i + 1}</span>
                      <span className="text-[18px] font-medium">{text}</span>
                    </div>
                  )}
                </div>
                <div className="mt-10">
                  <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center px-8 py-[14px] border border-black rounded-[8px] font-semibold text-black transition-all hover:bg-black hover:text-white text-[16px]">Start today</a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 mt-12 lg:mt-0">
              <div className="bg-white rounded-[12px] p-8 md:p-10 border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] max-w-[450px] mx-auto lg:ml-auto">
                <div className="mb-6"><List size={32} strokeWidth={2.5} className="text-black" /></div>
                <h3 className="text-[22px] font-bold text-black mb-4 leading-tight">Tired of answering the same questions?</h3>
                <p className="text-[16px] text-[#555555] leading-[1.6]">Use our innovative technology to automatically answer questions based on your experience and previous questions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      








      








      <Footer />
    </div>);

}