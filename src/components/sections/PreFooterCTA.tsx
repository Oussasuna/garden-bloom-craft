import React from 'react';

const PreFooterCTA = () => {
  return (
    <section className="bg-white pt-[120px] pb-0 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px] flex flex-col items-center">
        <h2 className="text-[32px] md:text-[42px] font-bold text-black text-center mb-8 tracking-tight">
          Your students deserve the best future.
        </h2>

        <div className="mb-16">
          <a
            href="https://app.jobexcv.ai"
            className="inline-flex items-center justify-center bg-[#111111] text-white px-8 py-3 rounded-full font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95 shadow-sm"
          >
            Get Started Now
          </a>
        </div>

        <div className="relative w-full max-w-[1000px] mx-auto">
          <div className="bg-[#a3d0f7] p-2 md:p-4 rounded-t-[32px] md:rounded-t-[48px] shadow-2xl transition-transform duration-700 ease-out hover:translate-y-[-5px]">
            <div className="relative w-full aspect-[1000/600] rounded-t-[20px] md:rounded-t-[32px] overflow-hidden bg-white border border-[#e5e7eb]">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909cee02cee4c3dfd8d0d18_Untitled_20presentation_2-16.png"
                alt="JobExCV Application Dashboard Showcase"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
