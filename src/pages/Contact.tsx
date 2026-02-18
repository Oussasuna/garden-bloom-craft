import React, { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-[120px] pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left */}
            <div className="flex-1">
              <p className="text-[#0099ff] text-[14px] font-semibold uppercase tracking-wide mb-4">Contact Us</p>
              <h1 className="text-[42px] font-extrabold text-black mb-6 tracking-[-0.02em]">Get in touch</h1>
              <p className="text-[17px] text-[#666666] leading-[1.7] mb-10">
                Have a question, feedback, or want to partner with us? We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "📧", label: "Email", value: "hello@firstresume.ai" },
                  { icon: "💬", label: "Discord", value: "discord.gg/FXkNtWPG3B" },
                  { icon: "🐦", label: "Twitter", value: "@firstresumeai" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[12px] text-[#999] uppercase font-semibold tracking-wide">{item.label}</div>
                      <div className="text-[16px] font-medium text-black">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="flex-1 bg-[#f9f9f7] rounded-[24px] p-8 md:p-10 border border-[#e5e7eb]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-[24px] font-bold text-black mb-2">Message sent!</h3>
                  <p className="text-[16px] text-[#666]">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[13px] font-semibold text-black mb-2">First Name</label>
                      <input type="text" required className="w-full border border-[#e5e7eb] rounded-[10px] px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-black transition-all bg-white" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-black mb-2">Last Name</label>
                      <input type="text" required className="w-full border border-[#e5e7eb] rounded-[10px] px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-black transition-all bg-white" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-black mb-2">Email</label>
                    <input type="email" required className="w-full border border-[#e5e7eb] rounded-[10px] px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-black transition-all bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-black mb-2">Subject</label>
                    <select className="w-full border border-[#e5e7eb] rounded-[10px] px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-black transition-all bg-white">
                      <option>General inquiry</option>
                      <option>Technical support</option>
                      <option>Partnership / University</option>
                      <option>Press / Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-black mb-2">Message</label>
                    <textarea required rows={5} className="w-full border border-[#e5e7eb] rounded-[10px] px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-black transition-all bg-white resize-none" placeholder="Tell us how we can help..." />
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-4 rounded-full font-bold text-[16px] hover:opacity-90 transition-all">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
