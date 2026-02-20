import React from 'react';

const AiAgentFeatures = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="mb-12">
          <p className="text-[#0099FF] text-[14px] font-semibold mb-4 tracking-tight">Simply brilliant.</p>
          <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#1A1A1A] leading-[1.2] mb-6 max-w-[800px]">
            More than a resume builder. <br className="hidden md:block" />
            An AI Job Hunt Agent.
          </h2>
          <p className="text-[#666666] text-[18px] leading-[1.6] max-w-[700px]">
            JobExCV is the most intelligent AI in the market that automates every step of your application while giving you personalised insights to maximise your chances with minimal effort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Main Large Card */}
          <div className="bg-[#F9F9F7] rounded-[12px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="mb-8">
                <h3 className="text-[24px] font-bold text-[#1A1A1A] mb-4">End-to-End Solution.</h3>
                <p className="text-[#666666] text-[18px] leading-[1.6] mb-8">
                  Prepares everything you possibly need with your job application in a one-click streamline experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[#E8F4FD] text-[#0099FF] border border-[#B8DFFB]">AI Resume Builder</span>
                  <span className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[#FDE8E8] text-[#DC2626] border border-[#FBBBB8]">Cover Letter Generator</span>
                  <span className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[#F3F4F6] text-[#6B7280] border border-[#D1D5DB]">Interview Preparation</span>
                  <span className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[#FEF9E7] text-[#B45309] border border-[#FDE68A]">Compatibility Analysis</span>
                  <span className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[#E8F4FD] text-[#0099FF] border border-[#B8DFFB]">AI Job Application Tracker</span>
                  <span className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[#F3F4F6] text-[#6B7280] border border-[#D1D5DB]">and more ...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <div className="bg-white border border-[#E5E5E5] rounded-[12px] p-8 hover:shadow-soft transition-all duration-300">
              <h3 className="text-[22px] font-bold text-[#1A1A1A] mb-3">As Thoughtful As A Human.</h3>
              <p className="text-[#666666] text-[16px] leading-[1.6]">
                JobExCV gives you human-level analysis and feedback, and guide that catches what you missed for perfect applications.
              </p>
            </div>
            <div className="bg-white border border-[#E5E5E5] rounded-[12px] p-8 hover:shadow-soft transition-all duration-300">
              <h3 className="text-[22px] font-bold text-[#1A1A1A] mb-3">Perfectly Tailored, Every Time.</h3>
              <p className="text-[#666666] text-[16px] leading-[1.6]">
                Analyzes each job and highlights your most relevant experiences that perfectly match what employers want.
              </p>
            </div>
          </div>
        </div>

        









      </div>
    </section>);

};

export default AiAgentFeatures;