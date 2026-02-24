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
          const steps = 50;
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

  return <div ref={ref}>+{count.toLocaleString()}{suffix}</div>;
}

/* ─── Section wrapper ─── */
const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);

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
  { icon: Lightbulb, title: "Innovation", description: "We constantly push the boundaries of AI technology to give job seekers a real edge.", num: "01" },
  { icon: Eye, title: "Simplicity", description: "We make complex job searching simple and accessible for everyone.", num: "02" },
  { icon: Heart, title: "Transparency", description: "No hidden fees, no surprises — just results you can count on.", num: "03" },
  { icon: Target, title: "Impact", description: "Every feature we build helps someone land their dream job faster.", num: "04" },
];

const whyCards = [
  { icon: Zap, title: "Job Matching", description: "Based on your CV and your job search criteria, we identify the jobs that match your profile." },
  { icon: Settings, title: "Flexible Settings", description: "From our dashboard you can configure your job search criteria to fit your needs." },
  { icon: TrendingUp, title: "Great Opportunities", description: "JobExCV brings more opportunities to your table with no effort required." },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Navbar />

      {/* ── 1. HERO ── */}
      <section className="relative pt-[140px] pb-[100px]" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0f4ff 40%, #ffffff 100%)" }}>
        {/* Decorative quote */}
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 text-[320px] font-serif text-[#f0f0f0] leading-none select-none pointer-events-none" aria-hidden="true">
          &ldquo;
        </div>
        <div className="relative max-w-[700px] mx-auto px-6 text-center">
          <h1 className="text-[48px] md:text-[64px] font-black text-[#0f0f0f] leading-[1.08] tracking-[-2px] mb-10">
            Learn more about{" "}
            <span className="relative inline-block">
              JobexCV
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] bg-[#0f0f0f] rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              />
            </span>
          </h1>
          <div className="max-w-[600px] mx-auto space-y-5">
            <p className="text-[18px] text-[#71717a] leading-[1.8]">
              JobexCV is the first AI platform that completely automates the job search.
            </p>
            <p className="text-[18px] text-[#71717a] leading-[1.8]">
              JobexCV started from our desire to help students and job seekers find jobs without spending hours searching and filling forms. We built our first solution and launched it to help thousands of people land their dream jobs faster.
            </p>
            <p className="text-[18px] text-[#71717a] leading-[1.8]">
              We have a remote-only culture and we share our passion of making the job search simple for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. STATS ── */}
      <Section className="py-[120px] bg-[#0f0f0f]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={`text-center py-8 px-4 ${i < stats.length - 1 ? "md:border-r md:border-white/10" : ""}`}
              >
                <div className="text-[40px] md:text-[56px] font-black text-white leading-none tracking-tight">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-[13px] md:text-[14px] text-[#9ca3af] mt-4 uppercase tracking-[0.1em]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Divider */}
      <div className="h-px bg-[#e4e4e7]" />

      {/* ── 3. WHAT WE DO BEST ── */}
      <Section className="py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 relative">
          {/* Background number */}
          <div className="absolute top-0 left-6 text-[180px] font-black text-[#f3f4f6] leading-none select-none pointer-events-none" aria-hidden="true">01</div>
          <div className="relative flex flex-col lg:flex-row gap-0">
            <div className="flex-1 pr-0 lg:pr-12">
              <div className="border-l-4 border-[#3b82f6] pl-6">
                <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#71717a] mb-4">What We Do Best</p>
                <h2 className="text-[34px] md:text-[42px] font-extrabold text-[#0f0f0f] leading-[1.15] tracking-[-0.02em]">
                  Getting You Closer To Your Dream Job
                </h2>
              </div>
            </div>
            {/* Vertical divider */}
            <div className="hidden lg:block w-px bg-[#e4e4e7] mx-0" />
            <div className="flex-1 pl-0 lg:pl-12 mt-8 lg:mt-0 space-y-5">
              <p className="text-[16px] text-[#71717a] leading-[1.8]">
                The only thing we want to do is bring you closer to your perfect opportunity without you having to spend your full day submitting forms and copy-pasting.
              </p>
              <p className="text-[16px] text-[#71717a] leading-[1.8]">
                We are a new platform that wants to give the opportunity and the power to the job seekers.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div className="h-px bg-[#e4e4e7]" />

      {/* ── 4. COMPARISON TABLE ── */}
      <Section className="py-[120px] bg-[#f9fafb]">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[34px] md:text-[42px] font-extrabold text-[#0f0f0f] text-center mb-14 tracking-[-0.02em]">
            Why JobexCV vs Traditional Job Search
          </h2>
          <div className="overflow-x-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#e4e4e7]">
            <table className="w-full text-[15px]">
              <thead>
                <tr className="bg-[#0f0f0f]">
                  <th className="px-7 py-5 text-left text-white font-bold rounded-tl-2xl">Feature</th>
                  <th className="px-7 py-5 text-center text-white font-bold">Traditional Job Search</th>
                  <th className="px-7 py-5 text-center text-white font-bold rounded-tr-2xl">JobexCV</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="group hover:bg-[#f0f0f0] transition-colors duration-200 border-b border-[#f0f0f0]">
                    <td className="px-7 py-[18px] text-[#0f0f0f] font-semibold">{row}</td>
                    <td className="px-7 py-[18px] text-center bg-[#fff5f5] group-hover:bg-red-100/60 transition-colors duration-200">
                      <X size={20} className="inline text-red-500" />
                    </td>
                    <td className="px-7 py-[18px] text-center bg-[#f0fdf4] group-hover:bg-green-100/60 transition-colors duration-200">
                      <Check size={20} className="inline text-green-600" />
                    </td>
                  </tr>
                ))}
                <tr className="group hover:bg-[#f0f0f0] transition-colors duration-200">
                  <td className="px-7 py-[18px] text-[#0f0f0f] font-semibold rounded-bl-2xl">Time spent</td>
                  <td className="px-7 py-[18px] text-center bg-[#fff5f5] group-hover:bg-red-100/60 transition-colors duration-200">
                    <span className="font-bold text-red-600">10+ hours/week</span>
                  </td>
                  <td className="px-7 py-[18px] text-center bg-[#f0fdf4] group-hover:bg-green-100/60 transition-colors duration-200 rounded-br-2xl">
                    <span className="font-bold text-green-700">10 minutes/week</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <div className="h-px bg-[#e4e4e7]" />

      {/* ── 5. WHY JOBEXCV CARDS ── */}
      <Section className="py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-[34px] md:text-[42px] font-extrabold text-[#0f0f0f] mb-14 tracking-[-0.02em] max-w-[600px]">
            Check Why JobexCV Is The Best AI Job Search Platform In The Market.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {whyCards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative bg-white rounded-2xl border border-[#e4e4e7] p-8 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              >
                {/* Bottom border fill on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#3b82f6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-12 h-12 rounded-xl bg-[#f4f4f5] flex items-center justify-center mb-6">
                  <c.icon size={24} className="text-[#0f0f0f]" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0f0f0f] mb-3">{c.title}</h3>
                <p className="text-[15px] text-[#71717a] leading-[1.65]">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <div className="h-px bg-[#e4e4e7]" />

      {/* ── 6. MISSION ── */}
      <Section className="py-[120px] relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f3f4f6] blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[900px] mx-auto px-6">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#0f0f0f] leading-[1.18] tracking-[-0.02em] mb-14 text-center max-w-[700px] mx-auto">
            Automate Your Job Search – Focus On Preparing, Let JobexCV Find The Opportunities
          </h2>
          <div className="flex flex-col md:flex-row gap-0">
            <div className="flex-1 pr-0 md:pr-10">
              <p className="text-[16px] text-[#71717a] leading-[1.8]">
                JobexCV is the first platform that fully automates your job search and application process. It was born from the simple frustration of spending countless hours applying to jobs manually. Since launch, we've been building and improving JobexCV with feedback from real users — starting from a small community to now thousands of job seekers using our service every day.
              </p>
            </div>
            {/* Vertical divider */}
            <div className="hidden md:block w-px bg-[#e4e4e7] mx-0" />
            <div className="flex-1 pl-0 md:pl-10 mt-6 md:mt-0">
              <p className="text-[16px] text-[#71717a] leading-[1.8]">
                With just a few steps — uploading your CV and setting your job preferences — you can create an automated cycle that searches for relevant job listings, tailors your applications, and submits them daily on your behalf. JobexCV also enables you to send personalized emails to recruiters, track your job applications, and optimize your CV using AI-powered feedback. You stay focused on preparing — JobexCV takes care of the repetitive tasks.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div className="h-px bg-[#e4e4e7]" />

      {/* ── 7. VALUES ── */}
      <Section className="py-[120px] bg-[#f9fafb]">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="text-[34px] md:text-[42px] font-extrabold text-[#0f0f0f] text-center mb-14 tracking-[-0.02em]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative rounded-xl p-8 border border-[#e4e4e7] border-l-4 border-l-[#0f0f0f] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}
              >
                {/* Corner number */}
                <span className="absolute top-5 right-6 text-[60px] font-black text-[#f0f0f0] leading-none select-none pointer-events-none" aria-hidden="true">
                  {v.num}
                </span>
                <div className="relative">
                  <v.icon size={40} className="text-[#0f0f0f] mb-5" strokeWidth={1.5} />
                  <h3 className="text-[20px] font-bold text-[#0f0f0f] mb-3">{v.title}</h3>
                  <p className="text-[15px] text-[#71717a] leading-[1.65]">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 8. BOTTOM CTA ── */}
      <section className="relative py-[120px] bg-[#0f0f0f] overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-[650px] mx-auto px-6 text-center"
        >
          <h2 className="text-[40px] md:text-[48px] font-black text-white mb-10 tracking-[-0.02em] leading-[1.1]">
            JobExCV Helps You Find A Job Faster
          </h2>
          <a
            href="https://app.jobexcv.ai"
            className="inline-block bg-white text-[#0f0f0f] px-10 py-4 rounded-full font-bold text-[16px] hover:scale-105 transition-transform duration-300"
          >
            Join the JobExCV community →
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
