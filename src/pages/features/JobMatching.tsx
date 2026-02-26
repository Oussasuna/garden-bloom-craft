import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

function HeroJobCard() {
  return (
    <BrowserMockup className="w-full max-w-[420px]">
      <div className="p-5 bg-white">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] text-[#555555]">jobexcv.ai/matches</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#16a34a] font-semibold">92% Match</span>
        </div>
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-[8px] bg-[#dbeafe] flex items-center justify-center text-[14px] font-bold text-[#2563eb]">JP</div>
          <div>
            <p className="text-[14px] font-bold text-black">Junior Project Manager</p>
            <p className="text-[10px] text-[#555555]">TechCorp International</p>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-[10px] text-[#555555]"><span>Salary:</span><span className="font-medium">$55,000 - $75,000</span></div>
          <div className="flex items-center gap-2 text-[10px] text-[#555555]"><span>Location:</span><span className="font-medium">London, UK &middot; Hybrid</span></div>
          <div className="flex items-center gap-2 text-[10px] text-[#555555]"><span>Type:</span><span className="font-medium">Full-time</span></div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-8 rounded-[8px] bg-black flex items-center justify-center"><span className="text-white text-[10px] font-semibold">Apply Now</span></div>
          <div className="h-8 w-8 rounded-full border border-[#E2E8F0] flex items-center justify-center"><span className="text-[12px]">&#9825;</span></div>
        </div>
      </div>
    </BrowserMockup>
  );
}

const tabs = [
  { label: "Automatically Apply", active: true },
  { label: "Email Templates", active: false },
  { label: "Personalization", active: false },
  { label: "Job Filtering", active: false },
  { label: "CV Improvement tips", active: false },
  { label: "Multiple job searches in parallel", active: false },
];

const featureSections = [
  {
    title: "Create multiple automated job searches",
    subtitle: "Create a new automated job search",
    description:
      "With JobExCV you can create one or more job searches (loops) that work in the background, applying or sending emails to companies every day on behalf of your customers. You specify the desired job title and you use one of our email templates (or create a new one) in order to send messages and apply to new roles!",
  },
  {
    title: "Find all your matches and applications in a single dashboard",
    subtitle: "",
    description:
      "For every job search (Loop) you can see all the jobs matched, email templates sent, explore details, and directly connect to the original source job boards.",
  },
  {
    title: "Track Progress for Each Job",
    subtitle: "",
    description:
      "See when you were automatically applied to each job, track whether the company opened your email, rate your job matches to improve your search, and view all the key details in one streamlined dashboard.",
  },
  {
    title: "Track All Important Metrics and Improve Your Job Search",
    subtitle: "",
    description:
      "JobExCV uses machine learning to identify issues in your CV and recommend changes, optimizing the chances of scheduling interviews.",
  },
  {
    title: "Organize your job search with the kanban board",
    subtitle: "",
    description:
      "JobExCV's Kanban board helps you organize your job search in a structured, visual way. Each morning, you'll wake up with a clear view of your progress and see exactly where each company stands in the hiring process. You can also add jobs from any website or platform, giving you one central hub instead of juggling multiple Google Sheets or Excel files.",
  },
];

export default function JobMatchingPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-[120px] pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-[60px]">
            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="max-w-[560px]">
                <h1 className="text-[28px] md:text-[40px] font-extrabold text-black leading-[1.15] mb-5 tracking-[-0.02em]">
                  The most advanced Job Matching Platform to help you get a job
                </h1>
                <p className="text-[#555555] text-[18px] max-w-[500px] mb-10 leading-[1.6]">
                  Use JobExCV to accelerate your performance. Export excel sheets with jobs that match your clients' profile, create unique email templates and CVs, A/B test different versions and help your clients get a job faster than ever.
                </p>
                <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">
                  Book a call with us
                </a>
                <a href="#" className="block text-[#555555] text-[14px] mt-3 hover:underline">
                  or Talk to our team
                </a>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 flex items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={slideInRight}
            >
              <HeroJobCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help clients section */}
      <motion.section
        className="py-[100px] bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[36px] md:text-[42px] font-extrabold text-black mb-4 tracking-[-0.02em]">
            Help your clients <span className="text-[#555555]">accelerate their job search</span>
          </h2>
          <p className="text-[#555555] text-[18px] max-w-[800px] mx-auto mb-10 leading-[1.6]">
            With JobExCV Recruiters and Agencies can help individuals accelerate their job search results getting more interviews and optimize their CV. Check below the features that make JobExCV stand out!
          </p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[600px] mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {tabs.map((tab) => (
              <motion.div
                key={tab.label}
                variants={fadeUp}
                className={`rounded-[8px] px-4 py-3 text-[13px] font-medium border transition-colors ${
                  tab.active ? "bg-black text-white border-black" : "bg-white text-[#555555] border-[#E2E8F0] hover:border-black"
                }`}
              >
                {tab.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How it works */}
      <motion.section
        className="py-[100px] bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[42px] font-extrabold text-black text-center mb-10 tracking-[-0.02em]">
            Here Is How JobExCV For Bootcamps Works
          </h2>
          <motion.div
            className="space-y-0 text-black max-w-[800px] mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Identify new companies that are a good match with your existing pool of candidates (We automate the process of collecting jobs, filtering those, matching the job positions with the candidates' CVs and hide the contact details from your client CVs automatically and thus provide a great way for you to prioritise which companies to contact and doing this automatically without having to manually collect jobs and contact companies)",
              "Engage and manage the job search process of your existing pool of candidates (Our platform gives you a streamlined process to leverage all your talent candidates with the possibility to have a white labeled version with your own logo and brand. Feel free to contact us to learn more)",
            ].map((text, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 py-4 border-t border-[#E2E8F0]">
                <span className="text-[16px] font-medium text-[#555555] underline whitespace-nowrap pt-1">0{i + 1}</span>
                <span className="text-[18px] font-medium">{text}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <a href="https://app.jobexcv.ai" className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[18px] transition-all hover:opacity-90">
              Book a call with us
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Feature deep-dive sections */}
      <section className="py-[80px] md:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-24">
            {featureSections.map((feature, i) => (
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
                  {feature.subtitle && (
                    <p className="text-[14px] text-[#555555] mb-2">{feature.subtitle}</p>
                  )}
                  <h3 className="text-[28px] md:text-[32px] font-extrabold text-black mb-4 tracking-[-0.02em]">
                    {feature.title}
                  </h3>
                  <p className="text-[17px] text-[#555555] leading-[1.6] mb-6">
                    {feature.description}
                  </p>
                  <a
                    href="https://app.jobexcv.ai"
                    className="inline-flex items-center justify-center bg-black text-white px-7 py-3.5 rounded-[8px] font-semibold text-[15px] hover:opacity-90 transition-all"
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
                    <div className="bg-[#f9f9f7] p-8 flex items-center justify-center min-h-[220px]">
                      <div className="text-center text-[#aaa] text-sm">
                        <svg className="mx-auto mb-2" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18M9 21V9" />
                        </svg>
                        Dashboard Preview
                      </div>
                    </div>
                  </BrowserMockup>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-[80px] bg-black text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[48px] font-extrabold mb-6">
            JobExCV Helps You find a job faster
          </h2>
          <p className="text-[18px] text-white/70 mb-8">Join the JobExCV community</p>
          <a
            href="https://app.jobexcv.ai"
            className="inline-block bg-white text-black px-8 py-4 rounded-[8px] font-bold text-[16px] hover:opacity-90 transition-all"
          >
            Get Started Free
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
