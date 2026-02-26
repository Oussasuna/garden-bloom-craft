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
    <div className={`bg-card rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-border overflow-hidden ${className}`}>
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

function LinkedInHeroMockup() {
  return (
    <div className="bg-secondary p-6 md:p-10 flex items-center justify-center">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] rounded-full bg-foreground flex items-center justify-center shrink-0">
          <span className="text-background text-[20px] md:text-[24px] font-extrabold">JX</span>
        </div>
        <div className="flex-1 max-w-[120px] md:max-w-[160px] relative flex items-center justify-center">
          <div className="w-full border-t-2 border-dashed border-muted-foreground" />
          <svg className="absolute text-muted-foreground" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-[12px] bg-[hsl(201,100%,35%)] flex items-center justify-center shrink-0">
          <span className="text-white text-[36px] md:text-[48px] font-bold leading-none">in</span>
        </div>
      </div>
    </div>
  );
}

function MatchesDashboardMockup() {
  return (
    <div className="bg-secondary p-4 md:p-6">
      <div className="bg-card rounded-lg border border-border p-4 space-y-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-foreground">All Matches</span>
          <div className="flex items-center gap-2">
            <div className="h-6 px-3 rounded bg-accent/10 text-accent text-[9px] font-medium flex items-center">Extension Supported</div>
            <div className="h-6 px-3 rounded bg-secondary text-muted-foreground text-[9px] flex items-center border border-border">Filter</div>
          </div>
        </div>
        {[
          { company: "TechCorp", role: "Frontend Developer", status: "Ready" },
          { company: "DataFlow", role: "UI Engineer", status: "Ready" },
          { company: "CloudBase", role: "React Developer", status: "Applied" },
        ].map((job, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-secondary/50">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-[10px] font-bold shrink-0">
              {job.company[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-foreground truncate">{job.role}</p>
              <p className="text-[9px] text-muted-foreground">{job.company}</p>
            </div>
            <div className={`h-6 px-3 rounded text-[9px] font-medium flex items-center ${job.status === "Applied" ? "bg-green-100 text-green-700" : "bg-accent/10 text-accent"}`}>
              {job.status === "Applied" ? "✓ Applied" : "Apply"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SetupInstructionsMockup() {
  return (
    <div className="bg-secondary p-4 md:p-6">
      <div className="bg-card rounded-lg border border-border p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <span className="text-[11px] font-semibold text-foreground">Setup Instructions</span>
        </div>
        <div className="space-y-3">
          {["Install the JobExCV Chrome Extension", "Log in to LinkedIn in your browser", "Return to your JobExCV dashboard"].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-accent/10 text-accent text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
              <span className="text-[11px] text-muted-foreground leading-[1.5]">{step}</span>
            </div>
          ))}
        </div>
        <div className="h-8 w-full rounded-lg bg-primary flex items-center justify-center mt-2">
          <span className="text-primary-foreground text-[11px] font-semibold">Continue Setup →</span>
        </div>
      </div>
    </div>
  );
}

function ChromeStoreMockup() {
  return (
    <div className="bg-secondary p-4 md:p-6">
      <div className="bg-card rounded-lg border border-border p-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center shrink-0">
            <span className="text-background text-[14px] font-extrabold">JX</span>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-foreground">JobExCV Extension</p>
            <p className="text-[9px] text-muted-foreground">chrome.google.com/webstore</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(s => (
              <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill={s <= 4 ? "hsl(43,90%,55%)" : "none"} stroke="hsl(43,90%,55%)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ))}
            <span className="text-[9px] text-muted-foreground ml-1">4.8 (200+)</span>
          </div>
        </div>
        <div className="h-9 w-full rounded-lg bg-[hsl(201,100%,35%)] flex items-center justify-center">
          <span className="text-white text-[12px] font-semibold">Add to Chrome</span>
        </div>
      </div>
    </div>
  );
}

function OneClickApplyMockup() {
  return (
    <div className="bg-secondary p-4 md:p-6">
      <div className="bg-card rounded-lg border border-border p-4 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-semibold text-foreground">Selected Jobs (3)</span>
          <div className="ml-auto h-7 px-4 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-[10px] font-semibold">Apply All →</span>
          </div>
        </div>
        {["Frontend Developer at TechCorp", "UI Engineer at DataFlow", "React Dev at CloudBase"].map((job, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg border border-border">
            <div className="w-4 h-4 rounded border-2 border-accent bg-accent/10 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span className="text-[10px] text-foreground">{job}</span>
            <div className="ml-auto">
              <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="hsl(130,55%,40%)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const workflowFeatures = [
  "Simplify your workflow by automating this time-consuming task effortlessly.",
  "View detailed summaries of application attempts for quick review and follow-up.",
  "Answer questions interactively, allowing the extension to fill in job application details seamlessly.",
];

const steps = [
  {
    title: "Filter and find extension-supported matches",
    text: "Head to the All Matches section in your dashboard and apply the 'Matches with Pending Applications' filter. Browse through Extension Supported jobs and click Apply to move forward.",
    mockup: "matches",
  },
  {
    title: "Follow the setup instructions",
    text: "Once you click Apply on an Extension Supported job, a pop-up will guide you through the necessary installations and let you know which platforms you need to be logged into.",
    mockup: "setup",
  },
  {
    title: "Add the extension to Chrome",
    text: "You'll be redirected to the Chrome Web Store. Simply click 'Add to Chrome' to install the JobExCV extension. It only takes a few seconds and sets you up for automated applications.",
    mockup: "chrome",
  },
  {
    title: "Apply with one click",
    text: "Go back to your JobExCV dashboard. With the extension installed and platforms connected, reselect the jobs you want and hit Apply. The extension submits your applications automatically.",
    mockup: "oneclick",
  },
];

export default function LinkedInAutoApplyPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* 1) HERO */}
      <section className="relative pt-[120px] pb-[80px] overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(210 20% 98%) 0%, hsl(0 0% 100%) 100%)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-[40px] md:text-[52px] font-extrabold text-foreground leading-[1.05] mb-6 tracking-[-0.02em]">
              Automate your job applications on LinkedIn with our Chrome extension
            </h1>
            <p className="text-muted-foreground text-[17px] max-w-[640px] mx-auto mb-10 leading-[1.65]">
              Install our Chrome extension from the Web Store, select the jobs you want to apply for, and let JobExCV handle the rest.
            </p>
            <a
              href="https://app.jobexcv.ai"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-[14px] rounded-full font-semibold text-[16px] transition-all hover:opacity-90"
            >
              Get Started
            </a>
          </motion.div>

          <motion.div
            className="max-w-[600px] mx-auto"
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.15 } } }}
          >
            <BrowserMockup>
              <LinkedInHeroMockup />
            </BrowserMockup>
          </motion.div>
        </div>
      </section>

      {/* 2) VALUE STRIP */}
      <section className="py-12 bg-secondary">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-[17px] text-muted-foreground leading-[1.7] font-medium">
            Not sure how to connect our LinkedIn plugin? Contact our team to learn more.
          </p>
        </div>
      </section>

      {/* 3) FEATURE SPLIT — left text + right card */}
      <motion.section
        className="py-[72px] md:py-[100px] bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <motion.div className="w-full lg:w-7/12" variants={slideInLeft}>
              <div className="max-w-[540px]">
                <p className="text-[13px] text-accent font-semibold uppercase tracking-wider mb-3">
                  Advanced job search preferences
                </p>
                <h2 className="text-[32px] md:text-[40px] font-extrabold leading-[1.15] text-foreground mb-10 tracking-[-0.02em]">
                  Elevate your workflow with our LinkedIn extension
                </h2>
                <div className="space-y-0 text-foreground">
                  {workflowFeatures.map((text, i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-t border-border">
                      <span className="text-[15px] font-medium text-muted-foreground underline whitespace-nowrap pt-0.5">
                        0{i + 1}
                      </span>
                      <span className="text-[16px] font-medium leading-[1.5]">{text}</span>
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
            </motion.div>
            <motion.div className="w-full lg:w-5/12" variants={slideInRight}>
              <div className="bg-card rounded-[16px] border border-border shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-6 md:p-8 max-w-[420px] mx-auto lg:ml-auto">
                <div className="w-10 h-10 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-foreground leading-[1.3] mb-3">
                  Discover the power of our LinkedIn extension
                </h3>
                <p className="text-[14px] text-muted-foreground leading-[1.6]">
                  From automated form filling to comprehensive summaries and interactive questionnaires, our Chrome extension empowers you to streamline tasks and achieve more with every job application.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4) STEPS SECTION */}
      <section className="py-[72px] md:py-[100px] bg-background">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.h2
            className="text-[28px] md:text-[36px] font-extrabold text-foreground text-center mb-16 tracking-[-0.02em] leading-[1.15]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            Getting started with the JobExCV extension
          </motion.h2>

          <div className="space-y-20">
            {steps.map((step, i) => {
              const isReversed = i % 2 !== 0;
              const MockupComponent = step.mockup === "matches" ? MatchesDashboardMockup
                : step.mockup === "setup" ? SetupInstructionsMockup
                : step.mockup === "chrome" ? ChromeStoreMockup
                : OneClickApplyMockup;

              return (
                <motion.div
                  key={i}
                  className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                >
                  <motion.div className="w-full lg:w-1/2" variants={isReversed ? slideInRight : slideInLeft}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 text-accent text-[14px] font-bold flex items-center justify-center">
                        {i + 1}
                      </div>
                      <span className="text-[12px] text-muted-foreground font-medium uppercase tracking-wider">Step {i + 1}</span>
                    </div>
                    <h3 className="text-[24px] md:text-[30px] font-extrabold text-foreground leading-[1.2] mb-4 tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <p className="text-[16px] text-muted-foreground leading-[1.65] mb-8">
                      {step.text}
                    </p>
                    <a
                      href="https://app.jobexcv.ai"
                      className="inline-flex items-center justify-center px-7 py-[12px] border border-foreground rounded-full font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground text-[15px]"
                    >
                      Start today
                    </a>
                  </motion.div>
                  <motion.div className="w-full lg:w-1/2" variants={isReversed ? slideInLeft : slideInRight}>
                    <BrowserMockup>
                      <MockupComponent />
                    </BrowserMockup>
                  </motion.div>
                </motion.div>
              );
            })}
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
            JobExCV users get 50% more interviews on average and save 10 hours every week. Start automating your job search today.
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
