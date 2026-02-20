import React from 'react';
import { Link } from 'react-router-dom';
import {
  IconRocket,
  IconClick,
  IconListCheck,
  IconMailForward,
  IconFileCheck,
  IconBuildingSkyscraper,
  IconWorldSearch,
  IconTargetArrow,
  IconFilter,
  IconMailSearch,
  IconBrandLinkedin,
  IconMessageChatbot,
  IconFileAnalytics,
  IconFileCv,
  IconWriting,
  IconMicrophone,
} from '@tabler/icons-react';

const features = [
  { title: 'Auto Apply', description: 'Automatically apply to hundreds of jobs with one click', icon: IconRocket, href: '/features/auto-apply' },
  { title: 'One Click Apply', description: 'Apply instantly with perfectly tailored documents', icon: IconClick, href: '/features/one-click-apply' },
  { title: 'Job Application Tracker', description: 'Track all your applications in one place automatically', icon: IconListCheck, href: '/features/job-application-tracker' },
  { title: 'Dynamic Emails', description: 'Send personalized outreach emails to recruiters automatically', icon: IconMailForward, href: '/features/dynamic-emails' },
  { title: 'CV Improvements', description: 'Get AI suggestions to improve your CV for each job', icon: IconFileCheck, href: '/features/cv-improvements' },
  { title: 'Exclude Companies', description: "Filter out companies you don't want to apply to", icon: IconBuildingSkyscraper, href: '/features/exclude-companies' },
  { title: 'Job Posting Aggregator', description: 'Find all job postings from multiple platforms in one place', icon: IconWorldSearch, href: '/features/job-posting-aggregator' },
  { title: 'Job Matching', description: 'AI matches you with the best jobs based on your profile', icon: IconTargetArrow, href: '/features/job-matching' },
  { title: 'Job Filtering', description: 'Filter jobs by salary, location, company size and more', icon: IconFilter, href: '/features/job-filtering' },
  { title: 'Email Finder', description: 'Find recruiter emails and contact them directly', icon: IconMailSearch, href: '/features/email-finder' },
  { title: 'LinkedIn Apply Extension', description: 'Apply to LinkedIn jobs directly with AI assistance', icon: IconBrandLinkedin, href: '/features/linkedin-apply-extension' },
  { title: 'AI Question Answering', description: 'Get AI answers to application questions instantly', icon: IconMessageChatbot, href: '/features/ai-question-answering' },
  { title: 'AI CV Checker', description: 'Check your CV score and get improvement suggestions', icon: IconFileAnalytics, href: '/features/ai-cv-checker' },
  { title: 'AI CV Builder', description: 'Build a professional ATS-optimized CV from scratch', icon: IconFileCv, href: '/features/ai-cv-builder' },
  { title: 'AI Cover Letter Generator', description: 'Generate tailored cover letters for every job', icon: IconWriting, href: '/features/ai-cover-letter-generator' },
  { title: 'AI Mock Interview', description: 'Practice interviews with AI and get instant feedback', icon: IconMicrophone, href: '/features/ai-mock-interview' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start group border-l-2 border-transparent hover:border-[#3b82f6] hover:bg-blue-50 hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-out pl-4 py-4 rounded-r-lg cursor-default"
              >
                <div className="mb-4 h-[40px] flex items-center">
                  <Icon size={32} stroke={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[16px] font-bold leading-[1.3] text-[#1a1a1a] mb-2 transition-transform duration-200 ease-out group-hover:translate-x-[6px]">
                  {feature.title}
                </h3>
                <p className="text-[#666666] text-[14px] leading-[1.5] mb-4">{feature.description}</p>
                <Link to={feature.href} className="text-[#0099ff] text-[13px] font-semibold hover:underline">
                  Learn more
                </Link>
              </div>
            );
          })}
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
