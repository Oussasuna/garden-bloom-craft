import React from 'react';

const features = [
  { title: 'AI auto add job', description: 'Tell AI the job you want to apply to (or search on FirstResume), AI does the rest.', image: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/6909cee02cee4c3dfd8d0d18_Untitled%20presentation%20(2).png' },
  { title: 'Auto job summarisation', description: 'FirstResume automatically extracts all the important information.', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d5264f87b6914e1e9be1_20251104_20Firstresume_20-17.png' },
  { title: 'Compatibility analysis', description: 'Analyzes how compatible you are with the job and how to improve.', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d5265d40fb17708d679d_20251104_20Firstresume_20-18.png' },
  { title: 'AI resume builder', description: 'AI edits your resume with perfect keywords tailored to the job.', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d526fca6afd2195fb75f_20251104_20Firstresume_20-19.png' },
  { title: 'Cover letter generator', description: 'Personalised cover letter based on your profile and the job you are applying to.', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909dc9c3e873d32dae9fd3f_20251104_20Firstresume_20-20.png' },
  { title: 'Outreach email writer', description: 'Outreach and follow up emails for when you apply through email.', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d526c6a52d15e4ccdf95_20251104_20Firstresume_20-21.png' },
  { title: 'AI company research', description: 'The latest news and information about the company that you are applying to.', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d52640f06b58b946bbe1_20251104_20Firstresume_20-22.png' },
  { title: 'Interview prep', description: 'Job specific interview questions that you will likely be asked.', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d52639931bfc5751f988_20251104_20Firstresume_20-23.png' },
  { title: 'Action checklist', description: 'A step-by-step guide for each stage of your job application', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d5262cee4c3dfd8faf40_20251104_20Firstresume_20-24.png' },
  { title: 'Auto application tracker', description: 'All your job applications will be neatly saved in a dashboard.', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d526fbd4396f516f9e83_20251104_20Firstresume_20-25.png' },
  { title: 'Career pathfinder', description: 'Career Pathfinder is here to give you some ideas if you are confused.', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d52657b1e1375f31a292_20251104_20Firstresume_20-26.png' },
  { title: 'Job role explanation', description: 'AI researches details that you need to know about the job position.', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d526a5a17d34fde5dd3c_20251104_20Firstresume_20-27.png' },
];

export default function AcademiaFeaturesGrid() {
  return (
    <section className="bg-white py-[80px] lg:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[64px]">
          <span className="text-[#00A3FF] font-bold text-[14px] leading-[1.4] mb-3 block">
            Features
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-[#000000] mb-6">
            Everything your students need to succeed.
          </h2>
          <p className="text-[#666666] text-[18px] md:text-[20px] leading-[1.6] max-w-[800px]">
            FirstResume supercharges your students' career success with industry know-hows and end-to-end automations for every step on their job hunt journey, from search to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col group">
              <h3 className="text-[18px] font-bold leading-[1.4] text-[#000000] mb-5">
                {feature.title}
              </h3>
              <div className="relative mb-5 overflow-hidden rounded-[16px] border border-[#E5E7EB] shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-cover"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>
              <p className="text-[#666666] text-[16px] leading-[1.5]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://forms.gle/iwthRUZE75ZYKdge8"
            className="inline-flex items-center justify-center bg-[#111111] text-white px-[32px] py-[14px] rounded-full font-semibold text-[16px] transition-opacity hover:opacity-90"
          >
            Give us a call
          </a>
        </div>
      </div>
    </section>
  );
}
