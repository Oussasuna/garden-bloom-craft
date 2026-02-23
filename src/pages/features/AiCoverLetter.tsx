import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const faqItems = [
  { question: "Is it cheating? Will my employer know?", answer: "No, using JobExCV is not cheating at all. It's a tool to help you present your true skills and experiences in the best possible light. We don't add false information — all content remains factual and based on information you provide." },
  { question: "Can I save different versions of my resume for future use?", answer: "Yes, JobExCV allows you to save multiple versions of your tailored resumes. This feature enables you to quickly access and update previously created resumes for similar job applications in the future." },
];

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 0L11.0206 6.9794L18 9L11.0206 11.0206L9 18L6.9794 11.0206L0 9L6.9794 6.9794L9 0Z" fill="black" />
  </svg>
);

export default function AiCoverLetterPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="relative bg-white pt-[120px] pb-[60px]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
          <span className="text-[14px] font-bold text-[#555555] mb-4">#1 AI Cover Letter Generator for GenZ</span>
          <h1 className="text-[32px] md:text-[56px] font-extrabold text-black leading-[1.1] tracking-[-0.02em] max-w-[900px] mb-6">
            Create personalized cover letter to connect with hiring managers in seconds.
          </h1>
          <p className="text-[18px] text-[#555555] leading-[1.6] max-w-[720px] mb-8">
            The smartest AI cover letter generator that understands both you and the job. JobExCV saves you 45 minutes per cover letter while maintaining your voice.
          </p>
          <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] text-[18px] font-semibold hover:opacity-90 transition-all mb-12">
            Create your cover letter now
          </a>
          <div className="w-full max-w-[1040px] rounded-[12px] overflow-hidden border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/692d73a6faed3c5121cd2ce5_Demo_20graphics_20_wide__-5.jpg" alt="Cover Letter Generator Demo" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="mt-16 max-w-[1200px] mx-auto px-6">
          <p className="text-[14px] font-bold text-[#555555] uppercase tracking-[0.1em] mb-8 text-center opacity-60">Trusted around the world</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-60 grayscale">
            <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068c6a308945356266ed_14.avif" alt="Partner" className="h-[32px] w-auto" />
            <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068cd5ad4023c3c216e0_8.avif" alt="Partner" className="h-[32px] w-auto" />
            <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/67eba18e4a1c0318c7382bc4_CityU_logo.svg.avif" alt="CityU" className="h-[36px] w-auto" />
            <img src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/67eba18ea4e9cb4e445dec2e_polyu-logo.avif" alt="PolyU" className="h-[36px] w-auto" />
          </div>
        </div>
      </section>

      <section className="bg-white py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
          <h5 className="text-[14px] font-medium text-[#555555] mb-4 uppercase">How it works?</h5>
          <h2 className="text-[36px] md:text-[42px] font-bold text-black leading-[1.2] text-center max-w-[800px] mb-[60px] tracking-[-0.02em]">First prepare a resume ... Click, and BAM! There is your cover letter.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-[48px]">
            {[{ icon: "🔍", title: "Step 1:\nFind a job post", desc: "Start searching for jobs anywhere you want and paste the job description in the box in JobExCV." }, { icon: "📄", title: "Step 2:\nPrepare the resume", desc: "Use JobExCV to prepare a tailored resume for the job in one click." }, { icon: "✉️", title: "Step 3:\nClick ... there you go", desc: "One click, and your cover letter is ready. Feel free to manually edit it if needed." }].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="mb-6 text-3xl">{step.icon}</div>
                <h3 className="text-[20px] font-bold text-black mb-4 leading-[1.3] whitespace-pre-line">{step.title}</h3>
                <p className="text-[16px] text-[#555555] leading-[1.6]">{step.desc}</p>
              </div>
            ))}
          </div>
          <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[16px] hover:opacity-90 transition-all">That's it! Give it a go!</a>
        </div>
      </section>

      <section className="bg-black py-[80px] lg:py-[100px] px-6 text-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[14px] font-bold text-white/60 mb-4">What is special about us?</p>
          <h2 className="text-[36px] md:text-[42px] font-bold leading-[1.2] mb-6 max-w-[800px] mx-auto tracking-[-0.02em]">Our AI ensures alignment between your resume and cover letter.</h2>
          <p className="text-[18px] leading-[1.6] text-white/80 max-w-[850px] mx-auto mb-12">While other tools generate standalone letters that might contradict your resume, JobExCV analyzes your actual resume content to create a perfectly matched narrative.</p>
          <div className="flex justify-center">
            <div className="w-full max-w-[600px] rounded-[12px] overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/692d73ee253c128f59ec1fb0_cover_20letter_20generato-13.png" alt="Cover Letter Generator Screenshot" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {[{ title: "Save Hours On Every Application.", desc: "Transform cover letter writing from 45 minutes to 2 minutes, letting you focus on what matters most in your job search.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/692e546ee175581f7f5f5b0d_Demo_20graphics_20_Square-14.jpg", cta: "Create your cover letter", bullets: ["One-click generation saves you hours of writing and editing", "No more staring at blank pages wondering what to write", "Focus on job searching while AI handles the writing"], reverse: false }, { title: "Strengthen Your Job Applications.", desc: "Stand out from other candidates with cover letters that showcase your experience and story in the most impactful way possible.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/692e562f1dada2f69eea882e_Demo_20graphics_20_Square-15.jpg", cta: "Beat your competition", bullets: ["Highlight achievements that best match the job requirements", "Create natural connections with the company's values", "Include relevant keywords that align with the job description"], reverse: true }, { title: "No More Stiff, Generic Cover Letter Templates.", desc: "Say goodbye to stiff, cookie-cutter cover letters. Create natural, conversational writing that actually sounds human.", img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/692e581f848d9b7de0aab630_Demo_20graphics_20_Square-17.jpg", cta: "Personalize today", bullets: ["Fresh, personalized content instead of overused templates", "Natural language that engages hiring managers", "Professional yet conversational tone that stands out"], reverse: false }].map((block, i) => (
        <section key={i} className="py-[100px] bg-white overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className={`flex flex-col ${block.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-[80px]`}>
              <div className="flex-1">
                <h2 className="text-[36px] lg:text-[42px] font-bold text-black leading-[1.2] mb-6 tracking-[-0.02em]">{block.title}</h2>
                <p className="text-[#555555] text-[18px] leading-[1.6] mb-8">{block.desc}</p>
                <ul className="space-y-4 mb-10">
                  {block.bullets.map((text, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0"><StarIcon /></div>
                      <span className="text-black text-[16px] font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] text-[16px] font-semibold hover:opacity-90 transition-all">{block.cta}</a>
              </div>
              <div className="flex-1">
                <img src={block.img} alt={block.title} className="rounded-[12px] border border-[#E2E8F0] w-full h-auto max-w-[500px] mx-auto" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[14px] font-medium text-[#555555] mb-4 uppercase">What our users say</p>
            <h2 className="text-[36px] md:text-[42px] font-bold text-black mb-8 tracking-[-0.02em]">Loved by the community.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[{ num: "562,192", label: "Users" }, { num: "4.9/5", label: "Rating" }, { num: "39", label: "Countries" }, { num: "625,000+", label: "Job applications" }].map((stat, i) => (
              <div key={i} className="bg-[#F0F2F5] p-8 rounded-[12px] text-center border border-[#E2E8F0]">
                <div className="text-[32px] font-bold text-black mb-1">{stat.num}</div>
                <div className="text-[14px] font-bold text-[#555555] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0F2F5] py-[100px]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[42px] font-bold text-black leading-[1.2] tracking-[-0.02em]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-[#F0F2F5] transition-colors">
                  <span className="text-[16px] font-bold text-black pr-4">{item.question}</span>
                  <ChevronDown size={16} className={`flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-[500px]" : "max-h-0"}`}>
                  <div className="border-t border-[#E2E8F0] px-6 py-5 text-[16px] leading-[1.6] text-[#555555]">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0F2F5] py-[100px] text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[42px] font-bold text-black mb-10 leading-tight tracking-[-0.02em]">JobExCV Helps You Find A Job Faster</h2>
          <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[16px] hover:opacity-90 transition-all">Get Started Now</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}