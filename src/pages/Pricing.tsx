import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Check, Star } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { motion } from "framer-motion";

const MONTHLY_PRICE = 35;
const QUARTERLY_DISCOUNT = 0.15;
const QUARTERLY_TOTAL = parseFloat((MONTHLY_PRICE * 3 * (1 - QUARTERLY_DISCOUNT)).toFixed(2));
const QUARTERLY_MONTHLY_EQ = parseFloat((QUARTERLY_TOTAL / 3).toFixed(2));

const basicFeatures = [
  "Up to 1 job search loop per month",
  "Up to 10 applications or emails per month",
  "3 job sites included",
  "Low priority applications",
  "Chrome extension access",
  "Up to 2 AI CV checks",
];

const proFeatures = [
  "Unlimited AI resume tailorings",
  "Unlimited cover letters",
  "Advanced job application tracker",
  "Full job match analysis",
  "5 active job search loops",
  "AI interview preparation",
  "Dynamic outreach emails",
  "AI question answering",
  "LinkedIn Auto Apply extension",
  "Email finder",
  "Priority support",
  "Advanced analytics",
];

const enterpriseFeatures = [
  "Everything in Pro",
  "Unlimited job search loops",
  "Dedicated account manager",
  "Custom integrations",
  "Team management dashboard",
  "Custom analytics & reports",
  "API access",
  "Onboarding & training",
];

export default function PricingPage() {
  const { t } = useI18n();
  const sectionRef = useRef(null);

  const [isQuarterly, setIsQuarterly] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const billing = params.get("billing");
      if (billing === "3months") return true;
      if (billing === "monthly") return false;
      return localStorage.getItem("pricing_billing_period") === "3months";
    }
    return false;
  });

  useEffect(() => {
    const value = isQuarterly ? "3months" : "monthly";
    localStorage.setItem("pricing_billing_period", value);
    const url = new URL(window.location.href);
    url.searchParams.set("billing", value);
    window.history.replaceState({}, "", url.toString());
  }, [isQuarterly]);

  const currentPrice = isQuarterly ? `$${QUARTERLY_TOTAL.toFixed(2)}` : `$${MONTHLY_PRICE}`;
  const currentPeriod = isQuarterly ? `/ ${t("3 months")}` : `/${t("mo")}`;
  const originalPrice = isQuarterly ? `$${(MONTHLY_PRICE * 3).toFixed(0)}` : "$70";
  const discount = isQuarterly ? `15% ${t("OFF")}` : `50% ${t("OFF")}`;
  const checkoutUrl = isQuarterly ? "https://app.jobexcv.ai?billing=3months" : "https://app.jobexcv.ai";

  const testimonials = [
    {
      name: "Sarah K.",
      role: t("Recent Graduate"),
      content: t("JobExCV helped me land my first job in just 2 weeks! The free plan was more than enough to get started."),
      avatar: "",
      initials: "SK",
    },
    {
      name: "Michael",
      role: `${t("Business Analyst")} · PwC`,
      content: t("Been using JobExCV for the past month and wow... applied to 40 jobs already and got 4 interviews! Usually I'd spend forever tweaking each resume but this does it so much better."),
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      initials: "M",
    },
    {
      name: "Emily Chen",
      role: `${t("Software Engineer")} · Meta`,
      content: t("The AI-powered resume tailoring is incredible. Each application feels personal and targeted. Got my dream job within 3 weeks!"),
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      initials: "EC",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <section ref={sectionRef} className="pt-[120px] pb-[80px]" style={{ backgroundColor: "#fafafa" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[40px] md:text-[52px] font-extrabold text-foreground mb-4 tracking-[-0.03em] leading-[1.1]">
              {t("One plan, endless possibilities")}
            </h1>
            <p className="text-[16px] text-muted-foreground max-w-[480px] mx-auto leading-relaxed">
              {t("Everything you need to land your dream job with AI-powered tools")}
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-1 mt-10">
              <div className="inline-flex items-center rounded-full p-1" style={{ backgroundColor: "#f0f0f0" }}>
                <button
                  onClick={() => setIsQuarterly(false)}
                  className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 cursor-pointer ${
                    !isQuarterly
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t("Monthly")}
                </button>
                <button
                  onClick={() => setIsQuarterly(true)}
                  className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 cursor-pointer ${
                    isQuarterly
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t("3 Months")}
                </button>
              </div>
              <span className="ml-2 inline-flex items-center rounded-full bg-green-500 text-white text-[12px] font-semibold px-3 py-1">
                {t("Save 15%")}
              </span>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* BASIC PLAN */}
            <motion.div
              className="group rounded-2xl p-8 flex flex-col bg-white border transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              style={{ borderColor: "#e4e4e7" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                {t("Basic Plan")}
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-[56px] font-black tracking-tight text-foreground leading-none">$0</span>
                <span className="text-[16px] text-muted-foreground">/{t("mo")}</span>
              </div>
              <p className="text-[14px] text-muted-foreground mt-2 mb-6">
                {t("Perfect to get started and explore JobExCV")}
              </p>
              <div className="h-px w-full mb-6" style={{ backgroundColor: "#e4e4e7" }} />
              <div className="space-y-3 flex-1">
                {basicFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] text-foreground/80">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {t(f)}
                  </div>
                ))}
              </div>
              <a
                href="https://app.jobexcv.ai?plan=basic"
                className="mt-8 block w-full text-center rounded-full py-3.5 text-[14px] font-semibold border border-foreground text-foreground bg-white transition-colors duration-200 hover:bg-foreground hover:text-background"
              >
                {t("Get Started Free")}
              </a>
            </motion.div>

            {/* PRO PLAN */}
            <motion.div
              className="group rounded-2xl p-8 flex flex-col bg-foreground text-background shadow-xl transition-all duration-200 hover:shadow-2xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {/* Most Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background border border-background/20 px-4 py-1.5 text-[12px] font-semibold shadow-lg">
                  <span>✦</span> {t("Most Popular")}
                </span>
              </div>

              <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-background/60 mt-2">
                {t("Pro Plan")}
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-[56px] font-black tracking-tight text-background leading-none">{currentPrice}</span>
                <span className="text-[16px] text-background/60">{currentPeriod}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[13px] text-background/40 line-through">{originalPrice}</span>
                <span className="inline-flex items-center rounded-full bg-green-500 text-white text-[11px] font-semibold px-2 py-0.5">
                  {discount}
                </span>
              </div>
              <p className="text-[14px] text-background/60 mt-2 mb-6">
                {t("For serious job seekers who want to maximise their chances.")}
              </p>
              <div className="h-px w-full mb-6 bg-background/10" />
              <div className="space-y-3 flex-1">
                {proFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] text-background/80">
                    <Check className="h-4 w-4 text-background flex-shrink-0" />
                    {t(f)}
                  </div>
                ))}
              </div>
              <a
                href={checkoutUrl}
                className="mt-8 block w-full text-center rounded-full py-3.5 text-[14px] font-semibold bg-background text-foreground transition-colors duration-200 hover:bg-background/90"
              >
                {t("Get Started Now")}
              </a>
            </motion.div>

            {/* ENTERPRISE / FULL ACCESS */}
            <div className="group rounded-2xl p-8 flex flex-col bg-white border transition-all duration-200 hover:shadow-lg hover:-translate-y-1" style={{ borderColor: "#e4e4e7" }}>
              <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                {t("Enterprise")}
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-[56px] font-black tracking-tight text-foreground leading-none">{t("Custom")}</span>
              </div>
              <p className="text-[14px] text-muted-foreground mt-2 mb-6">
                {t("For teams and organizations who need advanced features.")}
              </p>
              <div className="h-px w-full mb-6" style={{ backgroundColor: "#e4e4e7" }} />
              <div className="space-y-3 flex-1">
                {enterpriseFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px] text-foreground/80">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {t(f)}
                  </div>
                ))}
              </div>
              <a
                href="https://app.jobexcv.ai/contact"
                className="mt-8 block w-full text-center rounded-full py-3.5 text-[14px] font-semibold bg-foreground text-background transition-colors duration-200 hover:bg-foreground/90"
              >
                {t("Contact Sales")}
              </a>
            </div>
          </div>

          {/* Testimonials Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((t_item, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#f0f0f0" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {t_item.avatar ? (
                    <img
                      src={t_item.avatar}
                      alt={t_item.name}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-9 w-9 rounded-full bg-foreground/10 flex items-center justify-center text-[12px] font-bold text-foreground">
                      {t_item.initials}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-foreground truncate">{t_item.name}</p>
                    <p className="text-[11px] text-muted-foreground truncate">{t_item.role}</p>
                  </div>
                  <div className="flex gap-0.5 flex-shrink-0">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {t_item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[80px] bg-background">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-[32px] font-extrabold text-foreground mb-10">{t("Pricing FAQs")}</h2>
          <div className="space-y-4 text-left">
            {[
              { q: t("Can I cancel anytime?"), a: t("Yes! There are no long-term contracts. Cancel anytime from your account settings.") },
              { q: t("Is there a free trial for Pro?"), a: t("We offer a free tier with limited usage. You can upgrade to Pro at any time to unlock unlimited access.") },
              { q: t("Do you offer student discounts?"), a: t("Yes! We offer special discounts for students. Visit our Discounts page or contact us for details.") },
              { q: t("What payment methods do you accept?"), a: t("We accept all major credit cards, PayPal, and bank transfers for enterprise accounts.") },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-6 border border-border bg-card">
                <h4 className="text-[15px] font-bold text-foreground mb-1.5">{item.q}</h4>
                <p className="text-[14px] text-muted-foreground leading-[1.6]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
