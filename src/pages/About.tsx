import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Check, X, Zap, Settings, TrendingUp, Lightbulb, Eye, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-[40px] font-extrabold text-[#0f0f0f] tracking-tight">
      +{count.toLocaleString()}{suffix}
    </div>
  );
}

/* ─── Data ─── */
const stats = [
  { value: 500000, suffix: "", label: "Daily jobs collected" },
  { value: 3500, suffix: "", label: "Average daily interviews booked" },
  { value: 18000, suffix: "", label: "Average company emails found" },
  { value: 30, suffix: "+", label: "Connected platforms and job boards" },
];

const comparisonRows = [
  "Auto-apply to jobs",
  "AI resume optimization",
  "Interview preparation",
  "Application tracking",
  "Recruiter email finder",
  "Job matching AI",
  "Cover letter generator",
];

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We constantly push the boundaries of AI technology to give job seekers a real edge." },
  { icon: Eye, title: "Simplicity", description: "We make complex job searching simple and accessible for everyone." },
  { icon: Heart, title: "Transparency", description: "No hidden fees, no surprises — just results you can count on." },
  { icon: Target, title: "Impact", description: "Every feature we build helps someone land their dream job faster." },
];

const whyCards = [
  { icon: Zap, title: "Job Matching", description: "Based on your CV and your job search criteria, we identify the jobs that match your profile." },
  { icon: Settings, title: "Flexible Settings", description: "From our dashboard you can configure your job search criteria to fit your needs." },
  { icon: TrendingUp, title: "Great Opportunities", description: "JobExCV brings more opportunities to your table with no effort required." },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ── 1. HERO ── */}
      <section className="pt-[120px] pb-[60px]">
        <div className="max-w-[720px] mx-auto px-6">
          <h1 className="text-[42px] md:text-[52px] font-extrabold text-[#0f0f0f] leading-[1.15] tracking-[-0.02em] mb-8">
            Learn more about JobexCV
          </h1>
          <p className="text-[16px] text-[#71717a] leading-[1.75] mb-5">
            JobexCV is the first AI platform that completely automates the job search.
          </p>
          <p className="text-[16px] text-[#71717a] leading-[1.75] mb-5">
            JobexCV started from our desire to help students and job seekers find jobs without spending hours searching and filling forms. We built our first solution and launched it to help thousands of people land their dream jobs faster.
          </p>
          <p className="text-[16px] text-[#71717a] leading-[1.75]">
            We have a remote-only culture and we share our passion of making the job search simple for everyone.
          </p>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <section className="py-[80px] bg-[#f9fafb]">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-[#e4e4e7] shadow-sm p-8 text-center"
            >
              <AnimatedCounter target={s.value} suffix={s.suffix} />
              <p className="text-[14px] text-[#71717a] mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. WHAT WE DO BEST ── */}
      <section className="py-[80px]">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#71717a] mb-3">What We Do Best</p>
            <h2 className="text-[34px] md:text-[40px] font-extrabold text-[#0f0f0f] leading-[1.2] tracking-[-0.02em]">
              Getting You Closer To Your Dream Job
            </h2>
          </div>
          <div className="flex-1 space-y-5">
            <p className="text-[16px] text-[#71717a] leading-[1.75]">
              The only thing we want to do is bring you closer to your perfect opportunity without you having to spend your full day submitting forms and copy-pasting.
            </p>
            <p className="text-[16px] text-[#71717a] leading-[1.75]">
              We are a new platform that wants to give the opportunity and the power to the job seekers.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. COMPARISON TABLE ── */}
      <section className="py-[80px] bg-[#f9fafb]">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[34px] md:text-[40px] font-extrabold text-[#0f0f0f] text-center mb-12 tracking-[-0.02em]">
            Why JobexCV vs Traditional Job Search
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#e4e4e7] shadow-md">
            <table className="w-full text-left text-[15px]">
              <thead>
                <tr className="bg-[#0f0f0f] text-white">
                  <th className="px-6 py-4 font-semibold rounded-tl-2xl">Feature</th>
                  <th className="px-6 py-4 font-semibold text-center">Traditional Job Search</th>
                  <th className="px-6 py-4 font-semibold text-center rounded-tr-2xl bg-[#0f0f0f]">JobexCV</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}>
                    <td className="px-6 py-4 text-[#0f0f0f] font-medium">{row}</td>
                    <td className="px-6 py-4 text-center"><X size={20} className="inline text-red-500" /></td>
                    <td className="px-6 py-4 text-center bg-green-50/60"><Check size={20} className="inline text-green-600" /></td>
                  </tr>
                ))}
                <tr className="bg-white border-t border-[#e4e4e7]">
                  <td className="px-6 py-4 text-[#0f0f0f] font-medium rounded-bl-2xl">Time spent</td>
                  <td className="px-6 py-4 text-center text-[#71717a] font-semibold">10+ hours/week</td>
                  <td className="px-6 py-4 text-center bg-green-50/60 text-green-700 font-semibold rounded-br-2xl">10 minutes/week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 5. WHY JOBEXCV ── */}
      <section className="py-[80px] bg-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-[34px] md:text-[40px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] mb-12 max-w-[560px]">
            Check Why JobexCV Is The Best AI Job Search Platform In The Market.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                className="bg-[#2a2a2a] rounded-2xl p-8 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5">
                  <c.icon size={20} className="text-white" />
                </div>
                <h3 className="text-[18px] font-bold text-white mb-3">{c.title}</h3>
                <p className="text-[14px] text-[#a1a1aa] leading-[1.6]">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. MISSION ── */}
      <section className="py-[80px]">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[38px] font-extrabold text-[#0f0f0f] leading-[1.2] tracking-[-0.02em] mb-8">
            Automate Your Job Search – Focus On Preparing, Let JobexCV Find The Opportunities
          </h2>
          <p className="text-[16px] text-[#71717a] leading-[1.75] mb-5">
            JobexCV is the first platform that fully automates your job search and application process. It was born from the simple frustration of spending countless hours applying to jobs manually. Since launch, we've been building and improving JobexCV with feedback from real users — starting from a small community to now thousands of job seekers using our service every day.
          </p>
          <p className="text-[16px] text-[#71717a] leading-[1.75]">
            With just a few steps — uploading your CV and setting your job preferences — you can create an automated cycle that searches for relevant job listings, tailors your applications, and submits them daily on your behalf. JobexCV also enables you to send personalized emails to recruiters, track your job applications, and optimize your CV using AI-powered feedback. You stay focused on preparing — JobexCV takes care of the repetitive tasks.
          </p>
        </div>
      </section>

      {/* ── 7. VALUES ── */}
      <section className="py-[80px] bg-[#f9fafb]">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[34px] md:text-[40px] font-extrabold text-[#0f0f0f] text-center mb-12 tracking-[-0.02em]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white rounded-xl border-l-4 border-l-[#0f0f0f] border border-[#e4e4e7] shadow-sm p-7 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <v.icon size={22} className="text-[#0f0f0f]" />
                  <h3 className="text-[18px] font-bold text-[#0f0f0f]">{v.title}</h3>
                </div>
                <p className="text-[15px] text-[#71717a] leading-[1.6]">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. BOTTOM CTA ── */}
      <section className="py-[80px] bg-[#0f0f0f]">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-[34px] md:text-[40px] font-extrabold text-white mb-8 tracking-[-0.02em]">
            JobExCV Helps You Find A Job Faster
          </h2>
          <a
            href="https://app.jobexcv.ai"
            className="inline-block bg-white text-[#0f0f0f] px-8 py-[14px] rounded-full font-semibold text-[16px] hover:opacity-90 transition-all duration-200"
          >
            Join the JobExCV community →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
