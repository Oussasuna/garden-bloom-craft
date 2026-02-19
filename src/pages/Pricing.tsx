import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for getting started with AI job hunting.",
    cta: "Get Started Free",
    ctaStyle: "border border-black text-black hover:bg-black hover:text-white",
    features: [
      "5 AI resume tailorings per month",
      "5 cover letters per month",
      "Basic job application tracker",
      "Job match score",
      "1 active job search loop",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "19",
    period: "per month",
    description: "For serious job seekers who want to maximise their chances.",
    cta: "Start Pro",
    ctaStyle: "bg-black text-white hover:opacity-90",
    features: [
      "Unlimited AI resume tailorings",
      "Unlimited cover letters",
      "Advanced job application tracker",
      "Full job match analysis",
      "5 active job search loops",
      "AI interview preparation",
      "Dynamic outreach emails",
      "AI question answering",
      "LinkedIn Auto Apply extension",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "49",
    period: "per month",
    description: "For power users and universities who want everything.",
    cta: "Contact Sales",
    ctaStyle: "border border-black text-black hover:bg-black hover:text-white",
    features: [
      "Everything in Pro",
      "Auto Apply (hands-free applications)",
      "Unlimited job search loops",
      "Priority support",
      "Email finder",
      "Advanced analytics",
      "Custom integrations",
      "University / team licenses",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-[120px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-[#0099ff] text-[14px] font-semibold uppercase tracking-wide mb-4">Pricing</p>
          <h1 className="text-[42px] md:text-[56px] font-extrabold text-black mb-6 tracking-[-0.02em]">
            Simple, transparent pricing
          </h1>
          <p className="text-[18px] text-[#666666] mb-16 max-w-[600px] mx-auto">
            Start free, upgrade when you need more. Cancel anytime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[24px] p-8 text-left relative ${
                  plan.highlight
                    ? "bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                    : "bg-[#f9f9f7] border border-[#e5e7eb]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#0099ff] text-white text-[12px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className={`text-[20px] font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-[48px] font-extrabold leading-none ${plan.highlight ? 'text-white' : 'text-black'}`}>${plan.price}</span>
                  <span className={`text-[16px] mb-2 ${plan.highlight ? 'text-white/60' : 'text-[#666]'}`}>/{plan.period}</span>
                </div>
                <p className={`text-[14px] mb-8 ${plan.highlight ? 'text-white/70' : 'text-[#666666]'}`}>{plan.description}</p>
                <a
                  href="https://app.jobexcv.ai"
                  className={`block w-full text-center py-3.5 rounded-full font-semibold text-[15px] transition-all mb-8 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>
                <ul className="space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className={`flex items-start gap-3 text-[14px] ${plan.highlight ? 'text-white/80' : 'text-[#444]'}`}>
                      <span className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-[#4ADE80]' : 'text-[#22C55E]'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[80px] bg-[#f8f7f5]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-[36px] font-extrabold text-black mb-12">Pricing FAQs</h2>
          <div className="space-y-6 text-left">
            {[
              { q: "Can I cancel anytime?", a: "Yes! There are no long-term contracts. Cancel anytime from your account settings." },
              { q: "Is there a free trial for Pro?", a: "We offer a free tier with limited usage. You can upgrade to Pro at any time to unlock unlimited access." },
              { q: "Do you offer student discounts?", a: "Yes! We offer special discounts for students. Visit our Discounts page or contact us for details." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for enterprise accounts." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[16px] p-6 border border-[#e5e7eb]">
                <h4 className="text-[17px] font-bold text-black mb-2">{item.q}</h4>
                <p className="text-[15px] text-[#666666] leading-[1.6]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
