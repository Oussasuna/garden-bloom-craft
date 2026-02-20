import React from 'react';

const features = [
  { title: 'AI-Powered Resume Optimization', description: 'Create tailored, ATS-friendly resumes in seconds', icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/6707642926c2f09fcad827ca_8.svg' },
  { title: 'Automatic Cover Letter Generation', description: 'Craft compelling cover letters with ease', icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/67076429ed07576cd6db828e_9.svg' },
  { title: 'Tailored Outreach Emails', description: 'Generate personalized emails for various situations', icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/6707642933bad5f9eb835c84_10.svg' },
  { title: 'Comprehensive Interview Preparation', description: 'Get custom questions, tips, and sample answers', icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/670764292aeefc910afc69c9_11.svg' },
  { title: 'Job-Specific Concept Explanations', description: 'Understand key terms and requirements quickly', icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/670764291b65c9ab3a7a240f_12.svg' },
  { title: 'Smart Application Tracking', description: 'Organize your job search effortlessly', icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/670764299d45c69ea2c675b9_13.svg' },
  { title: 'Job Information Extraction', description: 'View job details at a glance for easy decision-making', icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/670764296b94f04ca50c2f67_14.svg' },
  { title: 'Profile-Job Match Analysis', description: 'Identify your strengths, weaknesses, and areas for improvement', icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/67076429723ab354cdcd8dad_15.svg' },
  { title: 'ATS Optimized Documents', description: 'Ensure your resume passes Applicant Tracking Systems', icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/67076429e56d6e06e99a9043_16.svg' },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-white py-[80px] lg:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0099ff] text-[14px] font-semibold tracking-wide uppercase mb-3">Features</p>
          <h2 className="text-[32px] md:text-[42px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#1a1a1a] mb-4">
            Everything you need to land your dream job.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start group border-l-2 border-transparent hover:border-[#3b82f6] hover:bg-blue-50 hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-out pl-4 rounded-r-lg">
              <div className="mb-4 h-[40px] flex items-center">
                <img src={feature.icon} alt={feature.title} className="h-[36px] w-auto" />
              </div>
              <h3 className="text-[18px] font-bold leading-[1.3] text-[#1a1a1a] mb-2 transition-transform duration-200 ease-out group-hover:translate-x-[6px]">{feature.title}</h3>
              <p className="text-[#666666] text-[15px] leading-[1.5] mb-4">{feature.description}</p>
              <a href="https://app.jobexcv.ai" className="text-[#0099ff] text-[14px] font-semibold hover:underline">
                Learn more
              </a>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-[#111111] text-white px-8 py-[14px] rounded-full font-semibold text-[16px] transition-opacity hover:opacity-90">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
