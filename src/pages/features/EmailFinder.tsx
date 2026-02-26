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

function EmailTemplateMockup() {
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
            <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded text-[11px] ${i === 7 ? "bg-accent/10 text-accent font-medium" : "text-muted-foreground"}`}>
              <div className="w-3 h-3 rounded-sm bg-current opacity-30" />
              {item}
            </div>
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 bg-card rounded-lg border border-border p-4 space-y-4">
          <div>
            <label className="text-[10px] text-muted-foreground font-medium block mb-1">Email subject</label>
            <div className="h-8 rounded border border-border bg-secondary px-3 flex items-center">
              <span className="text-[11px] text-foreground">Application for {"{{JOB_TITLE}}"} position</span>
            </div>
          </div>
          <div>
            <label className="text-[10px] text-muted-foreground font-medium block mb-1">Email body</label>
            <div className="rounded border border-border bg-secondary p-3 min-h-[160px]">
              <p className="text-[10px] text-muted-foreground leading-[1.7] whitespace-pre-wrap">{`Hello,

I checked your website and came across your job posting regarding the {{JOB_TITLE}} at {{JOB_LOCATION}}.

I am interested in applying at {{COMPANY_NAME}}.

Thanks,
{{USER_FIRSTNAME}} {{USER_LASTNAME}}`}</p>
            </div>
          </div>
          <div className="h-8 w-16 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-[11px] font-semibold">Save</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailResponseMockup() {
  return (
    <div className="bg-secondary p-6">
      <div className="bg-card rounded-lg border border-border p-5 max-w-[420px] mx-auto space-y-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-[11px] font-bold">HR</div>
          <div>
            <p className="text-[11px] font-semibold text-foreground">Hiring Manager</p>
            <p className="text-[9px] text-muted-foreground">recruiting@company.com</p>
          </div>
          <span className="ml-auto text-[9px] text-muted-foreground">2 min ago</span>
        </div>
        <div className="border-t border-border pt-3">
          <p className="text-[10px] font-medium text-foreground mb-1">Re: Application for Marketing Manager position</p>
          <p className="text-[10px] text-muted-foreground leading-[1.6]">
            Hi there, thank you for reaching out! We reviewed your CV and would love to schedule an interview. Are you available this Thursday at 2 PM?
          </p>
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-7 px-3 rounded bg-accent/10 text-accent text-[9px] font-medium flex items-center">Reply</div>
          <div className="h-7 px-3 rounded bg-secondary text-muted-foreground text-[9px] font-medium flex items-center border border-border">Forward</div>
        </div>
      </div>
    </div>
  );
}

const templateFeatures = [
  "Using pre-made and tested templates, you start getting responses from companies right away.",
  "Send fully personalised emails using variables like {{ JOB_TITLE }} and {{ COMPANY_NAME }}.",
  "Track email open rates in your dashboard and optimise your outreach over time.",
];

const benefitCards = [
  {
    title: "Send daily emails",
    description: "JobExCV collects jobs and finds the email of the company automatically. Then, using your own email template, it sends your email with your CV attached.",
    large: true,
  },
  {
    title: "Stand out between candidates",
    description: "Reach hiring managers directly with personalised outreach that gets noticed before traditional applications.",
    large: false,
  },
  {
    title: "Write unique emails",
    description: "Fully optimise your writing by testing various email templates and A/B testing them for better results.",
    large: false,
  },
];

export default function EmailFinderPage() {
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
              Find the best email to contact a company for a specific job
            </h1>
            <p className="text-muted-foreground text-[17px] max-w-[640px] mx-auto mb-10 leading-[1.65]">
              Trying to find the email of a recruiter for a job? For every job that matches your profile, JobExCV will find the best email to contact.
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
              <EmailTemplateMockup />
            </BrowserMockup>
          </motion.div>
        </div>
      </section>

      {/* 2) VALUE STRIP */}
      <section className="py-12 bg-secondary">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="text-[17px] text-muted-foreground leading-[1.7] font-medium">
            Use variables to create fully personalised emails—approaching every company with a different, tailored message.
          </p>
        </div>
      </section>

      {/* 3) SOCIAL PROOF / RESPONSE PREVIEW */}
      <motion.section
        className="py-[72px] md:py-[100px] bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-[16px] mb-2">Here's a response one of our users received recently 🎉</p>
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-foreground tracking-[-0.02em]">Our users have super powers!</h2>
          </div>
          <div className="max-w-[520px] mx-auto">
            <BrowserMockup>
              <EmailResponseMockup />
            </BrowserMockup>
          </div>
        </div>
      </motion.section>

      {/* 4) FEATURE SPLIT — left text + right cards */}
      <motion.section
        className="py-[72px] md:py-[100px] bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left */}
            <motion.div className="w-full lg:w-7/12" variants={slideInLeft}>
              <div className="max-w-[540px]">
                <p className="text-[13px] text-accent font-semibold uppercase tracking-wider mb-3">
                  Email enrichment
                </p>
                <h2 className="text-[32px] md:text-[40px] font-extrabold leading-[1.15] text-foreground mb-10 tracking-[-0.02em]">
                  How email templates can help you get closer to your dream job
                </h2>
                <div className="space-y-0 text-foreground">
                  {templateFeatures.map((text, i) => (
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
            {/* Right — benefit cards */}
            <motion.div className="w-full lg:w-5/12" variants={slideInRight}>
              <div className="space-y-4 max-w-[420px] mx-auto lg:ml-auto">
                {benefitCards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-[16px] border border-border shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-6 md:p-8"
                  >
                    <div className="w-10 h-10 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>}
                        {i === 1 && <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>}
                        {i === 2 && <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></>}
                      </svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-foreground leading-[1.3] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.6]">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
