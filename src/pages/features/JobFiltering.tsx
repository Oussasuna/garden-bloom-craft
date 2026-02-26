import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import type { Variants } from "framer-motion";

const ease: [number, number, number, number] = [0, 0, 0.2, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

function BrowserMockup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E2E8F0] overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f6f7f9] border-b border-[#E2E8F0]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded bg-white border border-[#E2E8F0]" />
      </div>
      <div className="p-0">{children}</div>
    </div>
  );
}

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="bg-[#f9f9f7] p-8 flex items-center justify-center min-h-[220px]">
      <div className="text-center text-[#aaa] text-sm">
        <svg className="mx-auto mb-2" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
        {label}
      </div>
    </div>
  );
}

const features = [
  { number: "01", text: "Add required keywords so you only match relevant roles." },
  { number: "02", text: "Exclude unwanted terms and companies instantly." },
  { number: "03", text: "Edit rules anytime to keep your results accurate." },
];

const steps = [
  {
    title: "Create a New Loop",
    description: "Create a new Loop and set your job title, location, and keywords. Each Loop runs in the background, filtering and matching jobs based on your criteria.",
    screenshot: "Loop Creation",
  },
  {
    title: "Set Up Filters for Precision",
    description: "Refine your search with filters. Exclude specific companies, add must-have keywords, and remove unwanted terms so you only apply to the most relevant opportunities.",
    screenshot: "Filter Settings",
  },
];

export default function JobFilteringPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* 1) HERO */}
      <section className="relative pt-[120px] pb-[60px] overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="flex flex-col items-center text-center max-w-[860px] mx-auto mb-14"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-[36px] md:text-[52px] font-extrabold text-black leading-[1.08] mb-6 tracking-[-0.02em]">
              Use advanced job filters to filter job descriptions
            </h1>
            <p className="text-[#555555] text-[18px] max-w-[700px] mx-auto mb-10 leading-[1.6]">
              JobExCV filters job descriptions using the keywords and rules you set—so you stop seeing irrelevant roles and stay in control across platforms.
            </p>
            <a
              href="https://app.jobexcv.ai"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-full font-semibold text-[18px] transition-all hover:opacity-90"
            >
              Get Started
            </a>
          </motion.div>

          {/* Hero screenshot */}
          <motion.div
            className="max-w-[900px] mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <BrowserMockup>
              <ScreenshotPlaceholder label="Job Filtering Dashboard" />
            </BrowserMockup>
          </motion.div>
        </div>
      </section>

      {/* 2) VALUE STRIP */}
      <section className="py-10 bg-[#F0F2F5]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-[18px] text-[#555555] leading-[1.7] font-medium">
            For every job search (Loop) you create, you can filter by keywords, exclude companies, and set custom rules to keep your results relevant.
          </p>
        </div>
      </section>

      {/* 3) FEATURE SPLIT */}
      <motion.section
        className="py-[80px] md:py-[100px] bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left */}
            <div className="w-full lg:w-7/12">
              <div className="max-w-[600px]">
                <p className="text-[14px] text-[#0099FF] font-semibold uppercase tracking-wide mb-3">
                  Advanced job search preferences
                </p>
                <h2 className="text-[36px] md:text-[42px] font-extrabold leading-[1.2] text-black mb-10 tracking-[-0.02em]">
                  With JobExCV, You Set Your Own Rules
                </h2>
                <div className="space-y-0 text-black">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-t border-[#E2E8F0]">
                      <span className="text-[16px] font-medium text-[#555555] underline whitespace-nowrap pt-1">
                        {f.number}
                      </span>
                      <span className="text-[18px] font-medium">{f.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <a
                    href="https://app.jobexcv.ai"
                    className="inline-flex items-center justify-center px-8 py-[14px] border border-black rounded-full font-semibold text-black transition-all hover:bg-black hover:text-white text-[16px]"
                  >
                    Start today
                  </a>
                </div>
              </div>
            </div>
            {/* Right card */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white rounded-[12px] p-8 md:p-10 border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] max-w-[450px] mx-auto lg:ml-auto">
                <div className="w-12 h-12 mb-6 rounded-full bg-[#0099FF15] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0099FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                </div>
                <h3 className="text-[22px] md:text-[24px] font-bold text-black leading-[1.3] mb-4">
                  Decide what to filter out
                </h3>
                <p className="text-[16px] text-[#555555] leading-[1.6]">
                  We have multiple safeguards to ensure automation only targets the roles you actually want—giving you full control over every application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4) HOW-TO STEPS */}
      <section className="py-[80px] md:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.h2
            className="text-[36px] md:text-[42px] font-extrabold text-black text-center mb-16 tracking-[-0.02em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Find jobs matching your preferences in a few steps:
          </motion.h2>

          <div className="space-y-24">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
              >
                <motion.div
                  className="flex-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={i % 2 === 1 ? slideInRight : slideInLeft}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-bold text-[16px] mb-6">
                    {i + 1}
                  </div>
                  <h3 className="text-[28px] md:text-[32px] font-extrabold text-black mb-4 tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="text-[17px] text-[#555555] leading-[1.6] mb-6">
                    {step.description}
                  </p>
                  <a
                    href="https://app.jobexcv.ai"
                    className="inline-flex items-center justify-center bg-black text-white px-7 py-3.5 rounded-full font-semibold text-[15px] hover:opacity-90 transition-all"
                  >
                    Start today
                  </a>
                </motion.div>
                <motion.div
                  className="flex-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={i % 2 === 1 ? slideInLeft : slideInRight}
                >
                  <BrowserMockup>
                    <ScreenshotPlaceholder label={step.screenshot} />
                  </BrowserMockup>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) DARK CTA BAND */}
      <motion.section
        className="py-[80px] bg-[#1a1f2e] text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[48px] font-extrabold mb-6">
            Still not convinced? Start with a free account!
          </h2>
          <p className="text-[18px] text-white/70 mb-8 leading-[1.6]">
            JobExCV users get 50% more interviews and save 10 hours every week. Start automating your job search today.
          </p>
          <a
            href="https://app.jobexcv.ai"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-[16px] hover:opacity-90 transition-all"
          >
            Start Free Trial
          </a>
          <p className="text-white/50 text-[14px] mt-4">No credit card required</p>
        </div>
      </motion.section>

      {/* 6) BOTTOM CTA */}
      <motion.section
        className="py-[80px] bg-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-black mb-6">
            JobExCV Helps <span className="text-[#0099FF]">You</span> Find A Job Faster
          </h2>
          <a
            href="https://app.jobexcv.ai"
            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-bold text-[16px] hover:opacity-90 transition-all gap-2"
          >
            Join the JobExCV community →
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
