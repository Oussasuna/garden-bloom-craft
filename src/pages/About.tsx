import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap, Target, Shield, TrendingUp,
  CheckCircle2, XCircle, ArrowRight,
  Globe, Users, Star, Briefcase
} from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function useCounter(end: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf: number;
    const t0 = performance.now();
    const run = (now: number) => {
      const p = Math.min((now - t0) / 2000, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [end, started]);
  return count;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }
  })
};

function StatCard({ value, label, icon: Icon, suffix = "", started, index }: { value: number; label: string; icon: React.ElementType; suffix?: string; started: boolean; index: number }) {
  const count = useCounter(value, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
    >
      <Icon className="w-5 h-5 text-gray-400 mx-auto mb-3" />
      <div className="text-3xl md:text-4xl font-black text-black">
        +{count.toLocaleString()}{suffix}
      </div>
      <div className="mt-1.5 text-xs text-gray-500 leading-tight">{label}</div>
    </motion.div>
  );
}

export default function AboutPage() {
  const statsRef = useRef(null);
  const statsIn = useInView(statsRef, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  const stats = [
    { value: 500000, label: "Daily jobs collected", icon: Globe },
    { value: 3500, label: "Daily interviews booked", icon: Users },
    { value: 18000, label: "Company emails found", icon: Briefcase },
    { value: 30, label: "Connected platforms", icon: Star, suffix: "+" },
  ];

  const tableRows: [string, boolean | string, boolean | string][] = [
    ["Auto-apply to jobs", false, true],
    ["AI resume optimization", false, true],
    ["Interview preparation", false, true],
    ["Application tracking", false, true],
    ["Recruiter email finder", false, true],
    ["Job matching AI", false, true],
    ["Cover letter generator", false, true],
    ["Time spent", "10+ hrs/week", "10 min/week"],
  ];

  const values = [
    { num: "01", icon: Zap, title: "Innovation", desc: "We constantly push AI boundaries to give job seekers a real edge." },
    { num: "02", icon: Target, title: "Simplicity", desc: "If it takes more than 3 clicks, we redesign it." },
    { num: "03", icon: Shield, title: "Transparency", desc: "No hidden fees, no surprises. Just results you can count on." },
    { num: "04", icon: TrendingUp, title: "Impact", desc: "Every feature we ship helps someone land their dream job." },
  ];

  return (
    <div className="bg-white text-black font-sans antialiased min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible"
          className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
        >
          About Us
        </motion.p>
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6"
        >
          Learn more about JobexCV
        </motion.h1>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="space-y-4 text-gray-500 text-lg leading-relaxed"
        >
          <p>JobexCV is the first AI platform that completely automates the job search.</p>
          <p>
            We started from a simple frustration — spending hours filling forms that lead nowhere.
            So we built a smarter way: upload your CV, set your preferences, and let AI do the rest.
          </p>
          <p>
            Today we help thousands of job seekers worldwide find jobs faster, with less stress
            and more confidence.
          </p>
        </motion.div>
        <motion.a
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          href="https://app.jobexcv.ai"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 mt-10 bg-black text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-gray-900 transition-colors duration-200"
        >
          Get started free <ArrowRight className="w-4 h-4" />
        </motion.a>
      </section>

      <hr className="border-gray-100 max-w-5xl mx-auto" />

      {/* ── STATS ── */}
      <section ref={statsRef} className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} started={statsIn} index={i} />
          ))}
        </div>
      </section>

      <hr className="border-gray-100 max-w-5xl mx-auto" />

      {/* ── WHAT WE DO ── */}
      <section className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What We Do Best</p>
          <h2 className="text-4xl font-black leading-tight tracking-tight">
            Getting You Closer To<br />Your Dream Job
          </h2>
        </motion.div>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          className="space-y-5 text-gray-500 leading-relaxed text-base pt-1"
        >
          <p>
            The only thing we want to do is bring you closer to your perfect opportunity —
            without spending your full day submitting forms and copy-pasting.
          </p>
          <p>
            We give the power back to job seekers. Start from scratch or upload your existing CV
            and let our AI handle the heavy lifting.
          </p>
        </motion.div>
      </section>

      <hr className="border-gray-100 max-w-5xl mx-auto" />

      {/* ── COMPARISON TABLE ── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">The Difference</p>
            <h2 className="text-4xl font-black tracking-tight">JobexCV vs Traditional Search</h2>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
          >
            <div className="grid grid-cols-3 bg-black text-white text-xs font-bold uppercase tracking-wider">
              <div className="px-6 py-4">Feature</div>
              <div className="px-6 py-4 text-center border-l border-white/10 text-gray-400">Traditional</div>
              <div className="px-6 py-4 text-center border-l border-white/10 text-green-400">JobexCV</div>
            </div>
            {tableRows.map(([feat, trad, jobex], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className={`grid grid-cols-3 border-t border-gray-100 transition-colors duration-150 ${hovered === i ? "bg-gray-50" : "bg-white"}`}
              >
                <div className="px-6 py-4 text-sm font-medium text-gray-800">{feat}</div>
                <div className="px-6 py-4 flex justify-center items-center border-l border-gray-100">
                  {typeof trad === "boolean"
                    ? <XCircle className="w-5 h-5 text-red-400" />
                    : <span className="text-xs font-semibold text-red-500 bg-red-50 px-2.5 py-1 rounded-full">{trad}</span>}
                </div>
                <div className="px-6 py-4 flex justify-center items-center border-l border-gray-100 bg-green-50/40">
                  {typeof jobex === "boolean"
                    ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                    : <span className="text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">{jobex}</span>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="border-gray-100 max-w-5xl mx-auto" />

      {/* ── VALUES ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What Drives Us</p>
          <h2 className="text-4xl font-black tracking-tight">Our Values</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {values.map(({ num, icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              variants={fadeUp} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="group flex gap-5 bg-white hover:bg-blue-50 border-l-2 border-l-transparent hover:border-l-[#3b82f6] border border-gray-100 rounded-2xl p-7 transition-all duration-200 ease-out cursor-default hover:shadow-md hover:scale-[1.02]"
            >
              <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-1">{num}</p>
                <h3 className="text-lg font-black text-black mb-1.5 transition-transform duration-200 ease-out group-hover:translate-x-1.5">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-black rounded-3xl px-10 py-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            JobExCV Helps You Find A Job Faster
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Join thousands of job seekers already automating their search with AI.
          </p>
          <motion.a
            href="https://app.jobexcv.ai"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-7 py-3.5 rounded-full text-sm hover:bg-gray-100 transition-colors duration-200"
          >
            Join the community <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
