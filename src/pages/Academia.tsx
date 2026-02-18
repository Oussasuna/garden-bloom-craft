import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import DemoVideo from "@/components/sections/DemoVideo";

const benefits = [
  { icon: "🎓", title: "Career-Ready Graduates", description: "Help your students land jobs faster with AI-powered resume tools and automated job applications." },
  { icon: "📊", title: "Track Student Outcomes", description: "Admin dashboard gives career counselors real-time visibility into student application activity and success rates." },
  { icon: "🌍", title: "Global Job Reach", description: "Students access jobs from 100+ platforms worldwide, expanding opportunities beyond local markets." },
  { icon: "🤖", title: "AI Interview Coaching", description: "Students practice with AI-predicted interview questions specific to their target roles and companies." },
  { icon: "📋", title: "Bulk Licensing", description: "Simple university licensing covers all your students under one agreement at a fraction of individual costs." },
  { icon: "🏆", title: "Improved Rankings", description: "Better graduate employment outcomes improve your university's rankings and reputation." },
];

const universities = [
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068cd5ad4023c3c216e0_8.avif", alt: "Imperial College London" },
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/68de3ca77db09da719256750_CUHK%20MBA%20logo.png", alt: "CUHK MBA" },
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/68de3ca7461dc1e8e2e329b2_HKUBS_Standard_Coloured_Shield_Blue_Text_Logo.webp", alt: "HKU Business School" },
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/67eba18e4a1c0318c7382bc4_CityU_logo.svg.avif", alt: "City University Hong Kong" },
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068cec734bf960d01b47_1.avif", alt: "Lingnan University" },
];

export default function AcademiaPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[120px] pb-[80px] text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <p className="text-[#0099ff] text-[14px] font-semibold uppercase tracking-wide mb-4">For Universities</p>
          <h1 className="text-[42px] md:text-[60px] font-extrabold text-black mb-6 tracking-[-0.02em]">
            Help your students land their dream jobs
          </h1>
          <p className="text-[18px] text-[#666666] leading-[1.6] max-w-[700px] mx-auto mb-10">
            FirstResume for Universities gives your career services team the AI tools to help every student create outstanding applications and land more interviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.firstresume.ai" className="bg-black text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:opacity-90 transition-all">
              Get a Demo
            </a>
            <a href="/contact" className="border border-black text-black px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-black hover:text-white transition-all">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-[40px] bg-[#f8f9fa] border-y border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-center text-[13px] text-[#999] font-medium mb-8 uppercase tracking-wider">Trusted by leading universities worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
            {universities.map((u, i) => (
              <img key={i} src={u.src} alt={u.alt} className="h-[44px] w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <div className="py-[60px]">
        <DemoVideo />
      </div>

      {/* Benefits Grid */}
      <section className="py-[80px] bg-[#f8f7f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[42px] font-extrabold text-black text-center mb-14 tracking-[-0.02em]">
            Everything your career services team needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-[20px] p-8 border border-[#e5e7eb]">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-[20px] font-bold text-black mb-3">{b.title}</h3>
                <p className="text-[15px] text-[#666] leading-[1.6]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-[80px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <blockquote className="text-[22px] md:text-[28px] font-bold text-[#1a1a1a] leading-[1.3] mb-8">
            "We partner with FirstResume because they are the most seamless CV polishing tool in the market empowered by AI"
          </blockquote>
          <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/68de3ca77db09da719256750_CUHK%20MBA%20logo.png" alt="CUHK MBA" className="h-[48px] mx-auto" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] bg-black text-white text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[48px] font-extrabold mb-6">Partner with FirstResume</h2>
          <p className="text-[17px] text-white/70 mb-8">Join leading universities worldwide in giving students the AI tools they need to succeed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold text-[16px] hover:opacity-90 transition-all">
              Get in Touch
            </a>
            <a href="https://app.firstresume.ai" className="border border-white text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-white hover:text-black transition-all">
              Try It Free
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
