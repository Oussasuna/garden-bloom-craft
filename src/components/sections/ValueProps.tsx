import React from 'react';

const ValueProps = () => {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Illustration Column */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px]">
              <img

                alt="Cartoon-style illustration of diverse smiling faces"
                className="w-full h-auto object-contain" src="/lovable-uploads/693c350f-1920-40da-9b74-f9151d14a73d.png" />

            </div>
          </div>

          {/* Metric Box Column */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#f8f7f5] rounded-[24px] p-8 md:p-12 shadow-sm border border-[#e5e7eb] max-w-[540px]">
              <div className="mb-10">
                <div className="mb-4">
                  <img

                    alt="Sparkle icon"
                    className="h-9 w-auto" src="/lovable-uploads/3a64d26f-f4c2-4810-af1a-c60ded29bf81.png" />

                </div>
                <h2 className="text-[22px] md:text-[28px] font-bold leading-[1.3] text-black tracking-tight">
                  Struggling with job hunt? We use AI maximise your job application success rate and minimise the time and effort you need to spend doing it.
                </h2>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#e5e7eb] pt-8">
                <div className="pl-5 border-l-2 border-[#e5e7eb]">
                  <h3 className="text-[32px] md:text-[36px] font-extrabold text-black leading-none mb-1">1 click</h3>
                  <p className="text-[#666666] text-[14px] md:text-[15px]">AI resume builder</p>
                </div>
                <div className="pl-5 border-l-2 border-[#e5e7eb]">
                  <h3 className="text-[32px] md:text-[36px] font-extrabold text-black leading-none mb-1">1 minute</h3>
                  <p className="text-[#666666] text-[14px] md:text-[15px]">per job application</p>
                </div>
                <div className="pl-5 border-l-2 border-[#e5e7eb]">
                  <h3 className="text-[32px] md:text-[36px] font-extrabold text-black leading-none mb-1">10X</h3>
                  <p className="text-[#666666] text-[14px] md:text-[15px]">your interview rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ValueProps;