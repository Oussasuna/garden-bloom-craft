import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';

const features = [
{ name: "Auto Apply", href: "/features/auto-apply" },
{ name: "One Click Apply", href: "/features/one-click-apply" },
{ name: "Job Application Tracker", href: "/features/job-application-tracker" },
{ name: "Dynamic Emails", href: "/features/dynamic-emails" },
{ name: "CV Improvements", href: "/features/cv-improvements" },
{ name: "Exclude Companies", href: "/features/exclude-companies" },
{ name: "Job Posting Aggregator", href: "/features/job-posting-aggregator" },
{ name: "Job Matching", href: "/features/job-matching" },
{ name: "Job Filtering", href: "/features/job-filtering" },
{ name: "Email Finder", href: "/features/email-finder" },
{ name: "LinkedIn Apply Extension", href: "/features/linkedin-apply-extension" },
{ name: "AI Question Answering", href: "/features/ai-question-answering" },
{ name: "AI CV Checker", href: "/features/ai-cv-checker" },
{ name: "AI CV Builder", href: "/features/ai-cv-builder" },
{ name: "AI Cover Letter Generator", href: "/features/ai-cover-letter-generator" },
{ name: "AI Mock Interview", href: "/features/ai-mock-interview" }];


const resources = [
{ name: "About", href: "/about" },
{ name: "Blog", href: "/blog" },
{ name: "Contact Us", href: "/contact" }];


const socials = [
{ name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
{ name: "Twitter/X", href: "https://twitter.com", icon: Twitter },
{ name: "Instagram", href: "https://instagram.com", icon: Instagram },
{ name: "YouTube", href: "https://youtube.com", icon: Youtube }];


const Footer = () => {
  return (
    <footer className="w-full bg-white flex flex-col items-center">
      {/* Top CTA Section */}
      <section className="w-full pt-[80px] pb-[40px] px-6 text-center">
        <h2 className="text-[42px] font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
          Your success begins here.
        </h2>
        <div className="flex justify-center mb-12">
          <a
            href="https://app.jobexcv.ai"
            className="bg-[#1a1a1a] text-white px-8 py-[14px] rounded-full font-semibold text-[16px] hover:opacity-90 transition-all">
            Get Started Now
          </a>
        </div>
        





      </section>

      {/* Main Footer Links */}
      <div className="w-full border-t border-[#e5e5e5] pt-[80px] pb-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="col-span-1">
            <a href="/" className="inline-block mb-8">
              <img
                alt="JobExCV Logo"
                className="h-[43px] w-auto" src="/lovable-uploads/efeafb61-03a7-4f01-b0b4-a6768f4b41b7.png" />
            </a>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#1a1a1a] mb-6">Features</h4>
            <div className="flex flex-col space-y-3">
              {features.map((item) =>
              <Link key={item.name} to={item.href} className="text-[#666666] text-[14px] hover:text-[#0099ff] transition-colors">
                  {item.name}
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#1a1a1a] mb-6">Resources</h4>
            <div className="flex flex-col space-y-3">
              {resources.map((item) =>
              <Link key={item.name} to={item.href} className="text-[#666666] text-[14px] hover:text-[#0099ff] transition-colors">
                  {item.name}
                </Link>
              )}
              <span className="text-[#999999] text-[14px] cursor-default">
                JobExCV Ambassador Program (Coming soon)
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#1a1a1a] mb-6">Follow us</h4>
            <div className="flex flex-col space-y-4">
              {socials.map((item) =>
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#666666] text-[14px] hover:text-[#0099ff] transition-colors">
                  <item.icon size={16} />
                  {item.name}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-[#e5e5e5] py-6 text-center">
        <p className="text-[#666666] text-[12px]">
          © 2025 JobexCV. All rights reserved.
        </p>
      </div>
    </footer>);

};

export default Footer;