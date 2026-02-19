import React from 'react';

const companyLogos = [
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068cd4eb7cfa9918e11c_21.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068b4638397708f6c5a0_20.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068c54d454dde3645a61_16.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068cd06a7d714fa435ef_19.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068c6660edcb3f6dc1bb_10.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068c6dd97695b9d4e4ed_11.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068bffe98b5b3e0667eb_6.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068c992d152ad6435da8_5.avif", alt: "Company logo" }];


const HeroSection = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="pt-[120px] pb-[40px] md:pt-[140px] md:pb-[60px]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left column - Text */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-[#00A3FF] font-bold text-[14px] mb-6 tracking-tight">
                #1 AI Career Tool for GenZ
              </p>
              <h1 className="text-[36px] md:text-[56px] font-[800] leading-[1.1] text-black mb-6 tracking-[-0.02em]">
                An AI resume builder that also automates entire job applications.
              </h1>
              <p className="text-[16px] md:text-[18px] text-[#666666] leading-[1.6] max-w-[700px] mb-8">
                Built for GenZ. FirstResume automates your entire job hunt with AI from job matching to interview prep.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <a href="https://app.firstresume.ai" className="bg-[#111111] text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:opacity-90 transition-opacity">
                  Land more interviews for free
                </a>
                <a href="#" className="text-[#0099ff] text-[14px] font-medium hover:underline transition-colors">
                  Purchasing for your university? Click here
                </a>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                alt="FirstResume hero graphic showing AI resume builder interface"
                className="w-full max-w-[550px] h-auto rounded-lg"
                src="/lovable-uploads/1e83fb01-ecfc-42ff-8c21-e2f70e3ee278.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company logos bar */}
      <div className="pb-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <span className="text-[13px] font-medium text-[#666666]/60 mb-8 tracking-wider">
              Users landed roles at
            </span>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 opacity-60 grayscale max-w-[900px]">
              {companyLogos.map((logo, i) =>
              <img key={i} src={logo.src} alt={logo.alt} className="h-[28px] w-auto" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;