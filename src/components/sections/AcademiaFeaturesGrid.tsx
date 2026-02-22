import React from 'react';

const features = [
  { title: 'Auto Apply', description: 'Tell AI the jobs you want to apply to, AI does the rest automatically.', color: 'bg-blue-50 border-blue-100' },
  { title: 'One Click Apply', description: 'Apply instantly to any job with a perfectly tailored application in seconds.', color: 'bg-green-50 border-green-100' },
  { title: 'Job Application Tracker', description: "All your students' job applications saved neatly in one dashboard.", color: 'bg-purple-50 border-purple-100' },
  { title: 'Dynamic Emails', description: 'Outreach and follow-up emails personalized for every job application.', color: 'bg-yellow-50 border-yellow-100' },
  { title: 'CV Improvements', description: 'AI edits the resume with perfect keywords tailored to each job.', color: 'bg-blue-50 border-blue-100' },
  { title: 'Compatibility Analysis', description: 'Analyzes how compatible the student is with the job and how to improve.', color: 'bg-green-50 border-green-100' },
  { title: 'Job Posting Aggregator', description: 'Find all job postings from multiple platforms aggregated in one place.', color: 'bg-purple-50 border-purple-100' },
  { title: 'Job Matching', description: 'AI matches students with the best opportunities based on their profile.', color: 'bg-yellow-50 border-yellow-100' },
  { title: 'Job Filtering', description: 'Filter jobs by salary, location, company size and requirements.', color: 'bg-blue-50 border-blue-100' },
  { title: 'AI CV Builder', description: 'Build a professional ATS-optimized CV from scratch in one click.', color: 'bg-green-50 border-green-100' },
  { title: 'AI Cover Letter Generator', description: 'Personalised cover letter based on student profile and the job posting.', color: 'bg-purple-50 border-purple-100' },
  { title: 'AI Mock Interview', description: 'Job-specific interview questions that students are likely to be asked.', color: 'bg-yellow-50 border-yellow-100' },
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
            JobExCV supercharges your students' career success with industry know-hows and end-to-end automations for every step on their job hunt journey, from search to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col group">
              <h3 className="text-[18px] font-bold leading-[1.4] text-[#000000] mb-5">
                {feature.title}
              </h3>
              <div className={`relative mb-5 overflow-hidden rounded-[16px] border shadow-sm transition-transform duration-300 hover:scale-[1.02] ${feature.color} flex items-center justify-center aspect-[4/3]`}>
                <span className="text-[48px] opacity-30">📊</span>
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
