import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[120px] pb-[80px] text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="text-[#0099ff] text-[14px] font-semibold uppercase tracking-wide mb-4">About Us</p>
          <h1 className="text-[48px] md:text-[60px] font-extrabold text-black mb-6 tracking-[-0.02em]">
            We're making the job hunt fair for everyone.
          </h1>
          <p className="text-[18px] text-[#666666] leading-[1.7]">
            FirstResume was built by a team of engineers, designers, and career experts who believed the job application process was broken. We set out to fix it with AI.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-[60px] bg-[#f8f9fa] border-y border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "562,192", label: "Active Users" },
            { value: "625,000+", label: "Job Applications" },
            { value: "39", label: "Countries" },
            { value: "4.9/5", label: "User Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-[36px] md:text-[42px] font-extrabold text-black mb-1">{stat.value}</div>
              <div className="text-[14px] text-[#666666] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-[80px] md:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <p className="text-[#0099ff] text-[14px] font-semibold uppercase tracking-wide mb-4">Our Mission</p>
              <h2 className="text-[36px] md:text-[42px] font-extrabold text-black mb-6 tracking-[-0.02em]">
                Level the playing field for every job seeker
              </h2>
              <p className="text-[17px] text-[#555555] leading-[1.7] mb-6">
                Job hunting has always favored those with connections, insider knowledge, or the time to craft perfect applications. We're changing that. With FirstResume, every job seeker has access to the same AI-powered tools that give them the best possible chance of success.
              </p>
              <p className="text-[17px] text-[#555555] leading-[1.7]">
                We started with a simple question: why does applying for jobs still feel like a 1990s experience when every other industry has been transformed by technology? FirstResume is our answer.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/67d92b140562f386df7fd462_FR%20Graphics%20(2).avif"
                alt="FirstResume team illustration"
                className="w-full max-w-[400px] mx-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[80px] bg-[#f8f7f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[36px] font-extrabold text-black text-center mb-14">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Authenticity First", description: "We never add false information. Our AI helps you present your real experience in the most compelling way." },
              { icon: "🌍", title: "Global Accessibility", description: "Career opportunities shouldn't depend on where you went to school or who you know. We're building for everyone." },
              { icon: "🔬", title: "Research-Backed", description: "Every feature is grounded in academic research on career development and AI ethics." },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-[20px] p-8 border border-[#e5e7eb]">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-[20px] font-bold text-black mb-3">{v.title}</h3>
                <p className="text-[15px] text-[#666666] leading-[1.6]">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Advisor */}
      <section className="py-[80px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-[#0099ff] text-[14px] font-semibold uppercase tracking-wide mb-4">Academic Support</p>
          <h2 className="text-[36px] font-extrabold text-black mb-8">Backed by Research</h2>
          <div className="bg-[#f9f9f7] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-left border border-[#e5e7eb]">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0 bg-[#e5e5e5]">
              <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/67d92b140562f386df7fd462_FR%20Graphics%20(2).avif" alt="Dr. Sabrina Su" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-[22px] font-extrabold text-black mb-1">Dr. Sabrina Su</h3>
              <p className="text-[14px] text-[#666] mb-3">The Education University of Hong Kong</p>
              <p className="text-[15px] text-[#555] leading-[1.6]">Dr. Sabrina Su holds a PhD in social work and applied psychology, with expertise in career research, generative AI, and youth research. She advises FirstResume on ensuring our approach aligns with contemporary research.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
