import React from 'react';

export default function AcademicResearchSection() {
  return (
    <section className="py-[80px] md:py-[100px] bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-12">
          <p className="text-[14px] font-semibold text-[#0099FF] uppercase tracking-wide mb-3">Academic support</p>
          <h2 className="text-[42px] font-extrabold text-[#1A1A1A] leading-[1.2] tracking-tight mb-6">
            Backed by research. Built for youth.
          </h2>
          <p className="text-[18px] text-[#666666] leading-[1.6] max-w-[800px]">
            FirstResume makes sure its AI-driven approach to career development aligns with contemporary research on professional advancement and educational technology, with every feature designed with youth development in mind.
          </p>
        </div>

        <div className="bg-[#f9f9f7] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-start gap-8 shadow-sm">
          <div className="flex-shrink-0">
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-white shadow-sm bg-[#e5e5e5]">
              <img
                src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/67d92b140562f386df7fd462_FR%20Graphics%20(2).avif"
                alt="Dr. Sabrina Su illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-[24px] font-extrabold text-[#1A1A1A]">Dr. Sabrina Su</h3>
            </div>
            <p className="text-[16px] font-medium text-[#666666] mb-6">The Education University of Hong Kong</p>
            <div className="text-[16px] leading-[1.6] text-[#1A1A1A]">
              <p>
                Dr. Sabrina Su holds a PhD in social work and applied psychology, with expertise in career research and practice, generative AI and youth research, and workplace well-being. She currently is an assistant professor in the Department of Social Sciences and Policy Studies in The Education University of Hong Kong.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
