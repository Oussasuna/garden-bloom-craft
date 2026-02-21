import React from 'react';

export default function AcademiaTestimonial() {
  return (
    <section className="relative w-full py-[80px] md:py-[120px] px-4 md:px-10 flex flex-col items-center overflow-hidden">
      <div className="relative w-full max-w-[1200px] min-h-[500px] md:min-h-[600px] rounded-[24px] overflow-hidden flex flex-col justify-center items-center text-center p-8 md:p-20 shadow-lg">
        <div className="absolute inset-0 z-0">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6718cca0376447dc5a6284a9_FirstResume_pricing_graph-14.avif"
            alt="CUHK MBA Programme Testimonial Background"
            className="w-full h-full object-cover" />

          
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-[900px]">
          <p className="text-[#00A3FF] font-bold text-[14px] uppercase tracking-wider mb-8 md:mb-12">
            University Testimonial
          </p>

          <h2 className="text-white font-bold text-[30px] md:text-[42px] leading-[1.2] mb-12 md:mb-16 text-balance">
            "We partner with JobExCV because they are the most seamless CV polishing tool in the market empowered by AI."
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0">
              <img
                src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6718cca0376447dc5a6284a9_FirstResume_pricing_graphic_2.avif"
                alt="CUHK MBA Programme"
                className="w-12 h-12 object-cover" />

            </div>
            <h3 className="text-white text-[18px] md:text-[20px] font-bold">
              CUHK MBA Programme
            </h3>
          </div>
        </div>
      </div>
    </section>);

}