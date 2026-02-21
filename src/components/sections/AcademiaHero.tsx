import React from 'react';

const AcademiaHero = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px] md:min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6 md:px-[60px] max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[60px]">
            {/* Left column - Text */}
            <div className="md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-[#00A3FF] font-bold text-[14px] md:text-[18px] mb-6 tracking-tight">
                #1 AI&nbsp;Career Tool for Education Institutes
              </p>

              <div className="mb-6">
                <img
                  src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/690b3438daccb1d398a3d62d_Screenshot%202025-11-05%20at%207.25.34%20PM.png"
                  alt="Various student head portraits illustrated in a hand-drawn style"
                  className="w-[311px] h-auto object-contain"
                />
              </div>

              <h1 className="text-[40px] md:text-[64px] font-[800] leading-[1.1] text-black mb-8 max-w-[900px] tracking-[-0.02em]">
                AI&nbsp;Career Platform that Maximises Student Employability.
              </h1>

              <p className="text-[18px] md:text-[20px] text-[#666666] leading-[1.6] max-w-[800px] mb-10">
                Help your students with personalised career planning, global job opportunities, resume writing, job applications and interview preparation while reducing career office workload.
              </p>

              <div>
                <a
                  href="https://forms.gle/iwthRUZE75ZYKdge8"
                  className="bg-[#111111] text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:opacity-90 transition-opacity flex items-center justify-center min-w-[160px]"
                >
                  Contact us
                </a>
              </div>
            </div>

            {/* Right column - GIF */}
            <div className="md:w-[45%] flex justify-center">
              <div
                className="w-full rounded-[24px] overflow-hidden"
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  padding: '2px',
                  background: 'linear-gradient(135deg, hsl(206 100% 70%), hsl(260 80% 70%))',
                }}
              >
                <div className="rounded-[22px] overflow-hidden bg-white">
                  <img
                    src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
                    alt="Career platform demo"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16 md:pb-24 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <span className="text-[14px] font-bold text-[#666666]/60 mb-10 tracking-wider">
              Trusted by education institutions around the world
            </span>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 max-w-[1100px]">
              <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/68de3ca7461dc1e8e2e329b2_HKUBS_Standard_Coloured_Shield_Blue_Text_Logo.webp" alt="HKU Business School" className="h-[32px] w-auto" />
              <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/68de3ca77db09da719256750_CUHK%20MBA%20logo.png" alt="CUHK MBA" className="h-[32px] w-auto" />
              <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068cec734bf960d01b47_1.avif" alt="Imperial College London" className="h-[32px] w-auto" />
              <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/67eba18e4a1c0318c7382bc4_CityU_logo.svg.avif" alt="City University" className="h-[32px] w-auto" />
              <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/67eba18ea4e9cb4e445dec2e_polyu-logo.avif" alt="PolyU" className="h-[32px] w-auto" />
              <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6909babb81d372bcb4e3eab9_GEU.png" alt="University Logo" className="h-[32px] w-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/67d92b140562f386df7fd462_FR%20Graphics%20(2).avif"
                alt="Grid of diverse smiling student faces"
                className="w-[297px] md:w-[400px] h-auto"
              />
            </div>

            <div className="lg:w-1/2 bg-[#F8F7F5] rounded-[24px] p-8 md:p-12 shadow-sm border border-[#E5E7EB]">
              <div className="flex items-start mb-6">
                <img
                  src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6707642926c2f09fcad827ca_8.svg"
                  alt="Sparkle icon"
                  className="w-[35px] h-[35px] mr-4 mt-1"
                />
                <h2 className="text-[24px] md:text-[28px] font-bold text-black leading-tight">
                  AI&nbsp;career partner for your students that perfects that job applications.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 border-t border-gray-200 pt-8">
                <div className="space-y-1 pl-4 border-l-4 border-[#111111]">
                  <h3 className="text-[32px] font-bold text-black tracking-tight">1 click</h3>
                  <p className="text-[#666666] text-[16px]">AI resume builder</p>
                </div>
                <div className="space-y-1 pl-4 border-l-4 border-[#111111]">
                  <h3 className="text-[32px] font-bold text-black tracking-tight">1 minute</h3>
                  <p className="text-[#666666] text-[16px]">per job application</p>
                </div>
                <div className="space-y-1 pl-4 border-l-4 border-[#111111]">
                  <h3 className="text-[32px] font-bold text-black tracking-tight">10X</h3>
                  <p className="text-[#666666] text-[16px]">Interview rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademiaHero;
