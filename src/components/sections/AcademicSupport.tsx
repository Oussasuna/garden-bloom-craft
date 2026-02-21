import React from 'react';

const AcademicSupport: React.FC = () => {
  return (
    <section className="bg-white py-[80px] md:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="text-[#00A3FF] font-bold text-[14px] uppercase tracking-wider mb-4">ACADEMIC UPPORT

          </p>
          <h2 className="text-[36px] md:text-[42px] font-bold text-black leading-[1.2] mb-6 tracking-tight">
            Built alongside an academic researcher.
          </h2>
          <p className="text-[#666666] text-[18px] md:text-[20px] leading-[1.6] max-w-[800px]">
            JobExCV makes sure its AI-driven approach to career development aligns with contemporary research on professional advancement and educational technology, with every feature designed with youth development in mind.
          </p>
        </div>

        <div className="bg-[#F8F7F5] border border-[#E5E7EB] rounded-[24px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-sm bg-white">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6718cca0073e157a4b183ea5_FirstResume_pricing_graph-15.avif"
                  alt="Dr. Sabrina Su"
                  className="w-full h-full object-cover" />

              </div>
            </div>

            <div className="flex-grow text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <h3 className="text-[24px] font-bold text-black">Dr. Sabrina Su</h3>
                <a href="https://eduhk.hk/ssps/sabrinasu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/icons/68b56c74137b14fb2c3149d3_link-1.png"
                    alt="Profile Link"
                    className="w-3.5 h-3.5 opacity-60 hover:opacity-100 transition-opacity" />

                </a>
              </div>

              <div className="mb-6">
                <p className="text-[#00A3FF] font-semibold text-[16px]">
                  The Education University of Hong Kong
                </p>
              </div>

              <div className="bg-white/50 rounded-xl p-6 border border-white/40">
                <p className="text-[#666666] text-[16px] leading-[1.6]">
                  Dr. Sabrina Su holds a PhD in social work and applied psychology, with expertise in career research and practice, generative AI and youth research, and workplace well-being. She currently is an assistant professor in the Department of Social Sciences and Policy Studies in The Education University of Hong Kong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AcademicSupport;