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
    <div className={`bg-card rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-border overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary border-b border-border">
        <span className="w-[10px] h-[10px] rounded-full bg-[hsl(0,80%,65%)]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[hsl(43,90%,55%)]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[hsl(130,55%,50%)]" />
        <div className="ml-3 flex-1 h-5 rounded bg-card border border-border" />
      </div>
      <div className="p-0">{children}</div>
    </div>
  );
}

function FilteringDashboardMockup() {
  return (
    <div className="bg-secondary p-4 md:p-6">
      <div className="flex gap-4">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-[160px] shrink-0 bg-card rounded-lg border border-border p-3 gap-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded bg-accent/20" />
            <span className="text-[11px] font-semibold text-foreground">JobExCV</span>
          </div>
          {["Overview", "My Loops", "Board", "All Matches", "My Applications", "Questions", "CV Checker", "Inbox"].map((item, i) => (
            <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded text-[11px] ${i === 1 ? "bg-accent/10 text-accent font-medium" : "text-muted-foreground"}`}>
              <div className="w-3 h-3 rounded-sm bg-current opacity-30" />
              {item}
            </div>
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 bg-card rounded-lg border border-border p-4 space-y-4">
          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-medium text-muted-foreground mb-1">Company</p>
              <div className="h-8 rounded border border-border bg-secondary" />
              <p className="text-[9px] text-muted-foreground mt-0.5">Select a company and press enter</p>
            </div>
            <div>
              <p className="text-[10px] font-medium text-foreground mb-1">Select the keywords that should be present in the job posting</p>
              <div className="h-8 rounded border border-border bg-secondary mb-1.5" />
              <div className="flex gap-1.5">
                <span className="px-2 py-0.5 bg-accent/10 text-accent text-[9px] rounded-full">lead generation ×</span>
                <span className="px-2 py-0.5 bg-accent/10 text-accent text-[9px] rounded-full">marketing ×</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-medium text-foreground mb-1">Exclude keywords</p>
              <div className="h-8 rounded border border-border bg-secondary" />
              <p className="text-[9px] text-muted-foreground mt-0.5">You don't have any keywords selected</p>
            </div>
            <div>
              <p className="text-[10px] font-medium text-foreground mb-1">Please choose the level of the job match you prefer</p>
              <p className="text-[9px] text-muted-foreground mb-2">Middle match with your preferences</p>
              <div className="relative h-2 bg-accent/20 rounded-full">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-2 border-card shadow" />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[8px] text-muted-foreground">Low</span>
                <span className="text-[8px] text-muted-foreground">Middle</span>
                <span className="text-[8px] text-muted-foreground">High</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right panel */}
        <div className="hidden lg:block w-[180px] shrink-0 bg-card rounded-lg border border-border p-3">
          <p className="text-[10px] text-muted-foreground mb-2">You don't have any excluded companies selected for this Loop</p>
          <p className="text-[10px] font-medium text-foreground mb-1">Keywords you have chosen</p>
          <div className="flex flex-wrap gap-1">
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[9px] rounded-full">lead generation</span>
            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[9px] rounded-full">marketing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoopCreationMockup() {
  return (
    <div className="bg-secondary p-6">
      <div className="bg-card rounded-lg border border-border p-5 max-w-[400px] mx-auto space-y-4">
        <h4 className="text-[13px] font-semibold text-foreground">Create a New Loop</h4>
        <div className="space-y-3">
          <div>
            <label className="text-[10px] text-muted-foreground mb-1 block">Job Title</label>
            <div className="h-8 rounded border border-border bg-secondary px-2 flex items-center text-[11px] text-muted-foreground">Marketing Manager</div>
          </div>
          <div>
            <label className="text-[10px] text-muted-foreground mb-1 block">Location</label>
            <div className="h-8 rounded border border-border bg-secondary px-2 flex items-center text-[11px] text-muted-foreground">London, UK</div>
          </div>
          <div>
            <label className="text-[10px] text-muted-foreground mb-1 block">Keywords</label>
            <div className="h-8 rounded border border-border bg-secondary px-2 flex items-center gap-1">
              <span className="px-1.5 py-0.5 bg-accent/10 text-accent text-[9px] rounded">digital</span>
              <span className="px-1.5 py-0.5 bg-accent/10 text-accent text-[9px] rounded">B2B</span>
            </div>
          </div>
        </div>
        <div className="h-9 rounded-lg bg-primary flex items-center justify-center text-[11px] font-semibold text-primary-foreground">Create Loop</div>
      </div>
    </div>
  );
}

function FilterSetupMockup() {
  return (
    <div className="bg-secondary p-6">
      <div className="bg-card rounded-lg border border-border p-5 max-w-[400px] mx-auto space-y-4">
        <h4 className="text-[13px] font-semibold text-foreground">Filter Settings</h4>
        <div className="space-y-3">
          <div>
            <label className="text-[10px] font-medium text-foreground mb-1 block">Include Keywords</label>
            <div className="flex flex-wrap gap-1 mb-1">
              <span className="px-2 py-0.5 bg-[hsl(130,50%,92%)] text-[hsl(130,50%,30%)] text-[9px] rounded-full">lead generation ×</span>
              <span className="px-2 py-0.5 bg-[hsl(130,50%,92%)] text-[hsl(130,50%,30%)] text-[9px] rounded-full">marketing ×</span>
            </div>
            <div className="h-7 rounded border border-border bg-secondary" />
          </div>
          <div>
            <label className="text-[10px] font-medium text-foreground mb-1 block">Exclude Keywords</label>
            <div className="flex flex-wrap gap-1 mb-1">
              <span className="px-2 py-0.5 bg-[hsl(0,70%,93%)] text-[hsl(0,60%,40%)] text-[9px] rounded-full">intern ×</span>
            </div>
            <div className="h-7 rounded border border-border bg-secondary" />
          </div>
          <div>
            <label className="text-[10px] font-medium text-foreground mb-1 block">Excluded Companies</label>
            <div className="flex flex-wrap gap-1 mb-1">
              <span className="px-2 py-0.5 bg-secondary text-muted-foreground text-[9px] rounded-full border border-border">Acme Corp ×</span>
            </div>
            <div className="h-7 rounded border border-border bg-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  { number: "01", text: "Add must-have keywords to match the right roles." },
  { number: "02", text: "Exclude terms and companies you don't want." },
  { number: "03", text: "Adjust rules anytime to keep results accurate." },
];

const steps = [
  {
    title: "Create a New Loop",
    description: "Create a new Loop and set your job title, location, and keywords. Each Loop runs in the background, filtering and matching jobs based on your criteria.",
    mockup: "loop",
  },
  {
    title: "Set Up Filters for Precision",
    description: "Refine your search with filters. Include must-have keywords, exclude unwanted terms, and block specific companies so you only apply to the most relevant opportunities.",
    mockup: "filter",
  },
];

export default function JobFilteringPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* 1) HERO */}
      <section className="relative pt-[120px] pb-[80px] overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(210 20% 98%) 0%, hsl(0 0% 100%) 100%)" }}>
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-[40px] md:text-[52px] font-extrabold text-foreground leading-[1.05] mb-6 tracking-[-0.02em]">
              Use advanced job filters to control job descriptions
            </h1>
            <p className="text-muted-foreground text-[17px] max-w-[640px] mx-auto mb-10 leading-[1.65]">
              JobExCV filters job descriptions using the keywords and rules you set—so you stop seeing irrelevant roles and stay in control across platforms.
            </p>
            <a
              href="https://app.jobexcv.ai"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-[14px] rounded-full font-semibold text-[16px] transition-all hover:opacity-90"
            >
              Get Started
            </a>
          </motion.div>

          <motion.div
            className="max-w-[920px] mx-auto"
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.15 } } }}
          >
            <BrowserMockup>
              <FilteringDashboardMockup />
            </BrowserMockup>
          </motion.div>
        </div>
      </section>

      {/* 2) VALUE STRIP */}
      <section className="py-12 bg-secondary">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-[17px] text-muted-foreground leading-[1.7] font-medium">
            For every Loop you create, you can refine results using filters, keywords, and exclusions.
          </p>
        </div>
      </section>

      {/* 3) FEATURE SPLIT */}
      <motion.section
        className="py-[72px] md:py-[100px] bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left */}
            <div className="w-full lg:w-7/12">
              <div className="max-w-[540px]">
                <p className="text-[13px] text-accent font-semibold uppercase tracking-wider mb-3">
                  Advanced job search preferences
                </p>
                <h2 className="text-[32px] md:text-[40px] font-extrabold leading-[1.15] text-foreground mb-10 tracking-[-0.02em]">
                  With JobExCV, you set your own rules.
                </h2>
                <div className="space-y-0 text-foreground">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-t border-border">
                      <span className="text-[15px] font-medium text-muted-foreground underline whitespace-nowrap pt-0.5">
                        {f.number}
                      </span>
                      <span className="text-[16px] font-medium leading-[1.5]">{f.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <a
                    href="https://app.jobexcv.ai"
                    className="inline-flex items-center justify-center px-7 py-[12px] border border-foreground rounded-full font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground text-[15px]"
                  >
                    Start today
                  </a>
                </div>
              </div>
            </div>
            {/* Right card */}
            <div className="w-full lg:w-5/12">
              <div className="bg-card rounded-[16px] p-8 md:p-10 border border-border shadow-[0_10px_30px_rgba(15,23,42,0.08)] max-w-[420px] mx-auto lg:ml-auto">
                <div className="w-12 h-12 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-foreground leading-[1.3] mb-4">
                  Decide what gets filtered out
                </h3>
                <p className="text-[15px] text-muted-foreground leading-[1.65]">
                  Multiple safeguards ensure automation only targets the roles you actually want—giving you full control over every application sent on your behalf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4) STEPS SECTION */}
      <section className="py-[72px] md:py-[100px] bg-background">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.h2
            className="text-[32px] md:text-[40px] font-extrabold text-foreground text-center mb-16 tracking-[-0.02em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Filter jobs that match your preferences in a few steps
          </motion.h2>

          <div className="space-y-20 md:space-y-28">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-14`}
              >
                <motion.div
                  className="flex-1 w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={i % 2 === 1 ? slideInRight : slideInLeft}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-[15px] mb-6">
                    {i + 1}
                  </div>
                  <h3 className="text-[26px] md:text-[30px] font-extrabold text-foreground mb-4 tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="text-[16px] text-muted-foreground leading-[1.65] mb-6 max-w-[440px]">
                    {step.description}
                  </p>
                  <a
                    href="https://app.jobexcv.ai"
                    className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3 rounded-full font-semibold text-[15px] hover:opacity-90 transition-all"
                  >
                    Start today
                  </a>
                </motion.div>
                <motion.div
                  className="flex-1 w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={i % 2 === 1 ? slideInLeft : slideInRight}
                >
                  <BrowserMockup>
                    {step.mockup === "loop" ? <LoopCreationMockup /> : <FilterSetupMockup />}
                  </BrowserMockup>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) DARK CTA BAND */}
      <motion.section
        className="py-[80px] md:py-[100px] bg-[hsl(220,20%,16%)] text-primary-foreground text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="max-w-[660px] mx-auto px-6">
          <h2 className="text-[34px] md:text-[44px] font-extrabold mb-6 leading-[1.1]">
            Still not convinced? Start with a free account.
          </h2>
          <p className="text-[17px] text-white/65 mb-8 leading-[1.65]">
            JobExCV users get more interviews and save hours every week. Start automating your job search today.
          </p>
          <a
            href="https://app.jobexcv.ai"
            className="inline-block bg-card text-foreground px-8 py-4 rounded-full font-bold text-[15px] hover:opacity-90 transition-all"
          >
            Start Free Trial
          </a>
          <p className="text-white/40 text-[13px] mt-4">No credit card required</p>
        </div>
      </motion.section>

      {/* 6) BOTTOM CTA */}
      <motion.section
        className="py-[80px] bg-background text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="max-w-[660px] mx-auto px-6">
          <h2 className="text-[34px] md:text-[44px] font-extrabold text-foreground mb-6 leading-[1.1]">
            JobExCV Helps <span className="text-accent">You</span> Find A Job Faster
          </h2>
          <a
            href="https://app.jobexcv.ai"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-[15px] hover:opacity-90 transition-all gap-2"
          >
            Join the JobExCV community →
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
