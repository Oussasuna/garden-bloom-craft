import React from 'react';

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
            href="https://app.firstresume.ai"
            className="bg-[#1a1a1a] text-white px-8 py-[14px] rounded-full font-semibold text-[16px] hover:opacity-90 transition-all"
          >
            Get Started Now
          </a>
        </div>
        <div className="max-w-[1000px] mx-auto overflow-hidden rounded-t-[32px] border-x-[12px] border-t-[12px] border-[#9bc4e8] shadow-soft">
          <img
            src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/679237bfb1d8e6c708170e72_landing%20page%20at%20the%20end.avif"
            alt="FirstResume App Interface"
            className="w-full h-auto block"
          />
        </div>
      </section>

      {/* Main Footer Links */}
      <div className="w-full border-t border-[#e5e5e5] pt-[80px] pb-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="col-span-1">
            <a href="/" className="inline-block mb-8">
              <img
                src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/68b9090815615209acfcecb0_Firstresume%20Logo%20with%20name_border.png"
                alt="FirstResume Logo"
                className="h-[43px] w-auto"
              />
            </a>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#1a1a1a] mb-6">Product</h4>
            <div className="flex flex-col space-y-3">
              {['AI Resume', 'AI Cover Letter', 'AI Outreach Email', 'AI Interview Prep', 'Job Application Tracker', 'AI Job Matching', 'Pricing'].map(item => (
                <a key={item} href="#" className="text-[#666666] text-[14px] hover:text-[#0099ff] transition-colors">{item}</a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#1a1a1a] mb-6">Resources</h4>
            <div className="flex flex-col space-y-3">
              {['About Us', 'Blog', 'Career Glossary', 'Product Roadmap', 'Feedback', 'Terms & Conditions', 'Privacy Policy'].map(item => (
                <a key={item} href="#" className="text-[#666666] text-[14px] hover:text-[#0099ff] transition-colors">{item}</a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#1a1a1a] mb-6">Follow us</h4>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-[#666666] text-[14px] hover:text-[#0099ff] transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-[#e5e5e5] py-6 text-center">
        <p className="text-[#666666] text-[12px]">
          Made by FirstResume with ❤️ | Copyright © 2024 FirstResume
        </p>
      </div>
    </footer>
  );
};

export default Footer;
