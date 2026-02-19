import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const discounts = [
  {
    icon: "🎓",
    title: "Student Discount",
    badge: "50% Off",
    badgeColor: "#22C55E",
    description: "Currently enrolled students at any university get 50% off Pro and Enterprise plans. Verify your .edu email to unlock your discount.",
    cta: "Claim Student Discount",
  },
  {
    icon: "🏫",
    title: "University License",
    badge: "Contact for Pricing",
    badgeColor: "#0099FF",
    description: "We partner with universities to give students free or discounted access to JobExCV as part of their career services. Contact us to learn more.",
    cta: "Contact Us",
  },
  {
    icon: "💼",
    title: "Recent Graduate",
    badge: "3 Months Free",
    badgeColor: "#FF4D00",
    description: "Graduated within the last 6 months? Get 3 months of Pro free to help you land your first role. Verify your degree certificate to unlock.",
    cta: "Claim Graduate Offer",
  },
  {
    icon: "🌍",
    title: "Developing Countries",
    badge: "Special Pricing",
    badgeColor: "#B45309",
    description: "We believe career tools should be accessible to everyone. Users from developing countries get special pricing. Contact us to learn more.",
    cta: "Check Eligibility",
  },
];

export default function DiscountsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-[120px] pb-[60px] text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <p className="text-[#0099ff] text-[14px] font-semibold uppercase tracking-wide mb-4">Discounts</p>
          <h1 className="text-[48px] font-extrabold text-black mb-4 tracking-[-0.02em]">
            Career tools should be accessible to everyone
          </h1>
          <p className="text-[17px] text-[#666666]">
            We offer special discounts for students, recent graduates, universities, and more.
          </p>
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {discounts.map((d, i) => (
            <div key={i} className="bg-[#f9f9f7] rounded-[24px] p-8 border border-[#e5e7eb] flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{d.icon}</div>
                <span className="text-[12px] font-bold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: d.badgeColor }}>
                  {d.badge}
                </span>
              </div>
              <h3 className="text-[22px] font-bold text-black mb-3">{d.title}</h3>
              <p className="text-[15px] text-[#666666] leading-[1.6] mb-8 flex-grow">{d.description}</p>
              <a href="https://app.jobexcv.ai" className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold text-[14px] text-center hover:opacity-90 transition-all">
                {d.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[60px] bg-[#f8f7f5] border-t border-[#e5e7eb] text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="text-[28px] font-extrabold text-black mb-4">Don't see your situation?</h2>
          <p className="text-[16px] text-[#666] mb-6">Reach out to us directly. We'll do our best to make JobExCV accessible for you.</p>
          <a href="/contact" className="inline-block border border-black text-black px-6 py-3 rounded-full font-semibold text-[14px] hover:bg-black hover:text-white transition-all">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
