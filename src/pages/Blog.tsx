import React, { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const blogPosts = [
  {
    id: 1,
    image: "https://cdn.prod.website-files.com/6715d1ce26aa295359faca06/69845809eaaa2a7ec856ed7d_The%20AI%20Resume%20Builder%20Checklist%20Five%20Features%20to%20Look%20for%20Beyond%20ATS%20Optimization.png",
    category: "Resume Writing",
    title: "The AI Resume Builder Checklist: Five Features to Look for Beyond ATS Optimization",
    date: "Jan 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    image: "https://cdn.prod.website-files.com/6715d1ce26aa295359faca06/698455552bcfa657298bb0a0_Gemini_Generated_Image_691hxc691hxc691h.png",
    category: "Resume Writing",
    title: "How to Write a Resume When Your Experience Is Only Freelance or Contract Work",
    date: "Jan 8, 2026",
    readTime: "7 min read",
  },
  {
    id: 3,
    image: "https://cdn.prod.website-files.com/6715d1ce26aa295359faca06/6979abc922e246d913becfdf_6979aaedbd7375f6b717c669_03058d30.png",
    category: "Career Tips",
    title: "CES 2026 Highlights: Booth Conversations Reveal Career Insights and Job Search Trends",
    date: "Jan 2, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6731ded82cf0cde8f25b019e_FirstResume%20glossary%20Graphics%20wide.avif",
    category: "Interview Prep",
    title: "Top 20 Behavioral Interview Questions and How to Answer Them with AI",
    date: "Dec 20, 2025",
    readTime: "10 min read",
  },
  {
    id: 5,
    image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/67d92b140562f386df7fd462_FR%20Graphics%20(2).avif",
    category: "Job Search",
    title: "How to Job Hunt Efficiently: The Complete Guide for 2026",
    date: "Dec 12, 2025",
    readTime: "12 min read",
  },
  {
    id: 6,
    image: "https://cdn.prod.website-files.com/6715d1ce26aa295359faca06/69845809eaaa2a7ec856ed7d_The%20AI%20Resume%20Builder%20Checklist%20Five%20Features%20to%20Look%20for%20Beyond%20ATS%20Optimization.png",
    category: "Career Tips",
    title: "Why Networking Still Matters in the Age of AI Job Applications",
    date: "Dec 5, 2025",
    readTime: "8 min read",
  },
];

const categories = ["All", "Resume Writing", "Career Tips", "Interview Prep", "Job Search"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-[120px] pb-[60px] text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <p className="text-[#0099ff] text-[14px] font-semibold uppercase tracking-wide mb-4">Blog</p>
          <h1 className="text-[48px] font-extrabold text-black mb-4 tracking-[-0.02em]">Career insights & tips</h1>
          <p className="text-[17px] text-[#666666]">Practical advice to help you land your dream job faster.</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-[40px]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all border ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-[#333] border-[#e5e7eb] hover:border-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <a key={post.id} href="#" className="group flex flex-col bg-[#f9f9f7] rounded-[16px] overflow-hidden border border-[#e5e5e5] hover:shadow-soft transition-all duration-300">
              <div className="relative overflow-hidden" style={{ paddingTop: "60%" }}>
                <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#0099ff] text-[12px] font-bold uppercase">{post.category}</span>
                  <span className="text-[#999] text-[12px]">·</span>
                  <span className="text-[#999] text-[12px]">{post.readTime}</span>
                </div>
                <h3 className="text-[18px] font-bold text-[#1a1a1a] leading-[1.3] group-hover:text-[#0099ff] transition-colors mb-3">{post.title}</h3>
                <p className="text-[13px] text-[#999] mt-auto">{post.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
