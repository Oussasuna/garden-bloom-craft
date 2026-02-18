import React from 'react';

const blogs = [
  {
    id: 1,
    image: 'https://cdn.prod.website-files.com/6715d1ce26aa295359faca06/69845809eaaa2a7ec856ed7d_The%20AI%20Resume%20Builder%20Checklist%20Five%20Features%20to%20Look%20for%20Beyond%20ATS%20Optimization.png',
    category: 'Resume Writing',
    title: 'The AI Resume Builder Checklist: Five Features to Look for Beyond ATS Optimization',
  },
  {
    id: 2,
    image: 'https://cdn.prod.website-files.com/6715d1ce26aa295359faca06/698455552bcfa657298bb0a0_Gemini_Generated_Image_691hxc691hxc691h.png',
    category: 'Resume Writing',
    title: 'How to Write a Resume When Your Experience Is Only Freelance or Contract Work',
  },
  {
    id: 3,
    image: 'https://cdn.prod.website-files.com/6715d1ce26aa295359faca06/6979abc922e246d913becfdf_6979aaedbd7375f6b717c669_03058d30.png',
    category: 'Resume Writing',
    title: 'CES 2026 Highlights: Booth Conversations Reveal Career Insights and Job Search Trends',
  },
];

const BlogNewsletter = () => {
  return (
    <section className="py-[80px] bg-white">
      <div className="container max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#0099ff] font-semibold text-[14px] mb-2 uppercase tracking-wide">While you are here ...</p>
          <h2 className="text-[42px] font-extrabold text-[#1a1a1a] tracking-tight">Check out our blogs.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blogs.map((blog) => (
            <a key={blog.id} href="#" className="group flex flex-col bg-[#f9f9f7] rounded-[12px] overflow-hidden border border-[#e5e5e5] transition-all duration-300 hover:shadow-soft">
              <div className="relative overflow-hidden" style={{ paddingTop: '62.5%', position: 'relative' }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[#0099ff] text-[12px] font-bold uppercase mb-3">{blog.category}</span>
                <h3 className="text-[20px] font-bold text-[#1a1a1a] leading-[1.3] group-hover:text-[#0099ff] transition-colors">
                  {blog.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mb-24">
          <a href="#" className="text-[#0099ff] font-semibold hover:underline decoration-2 underline-offset-4">See more</a>
        </div>

        {/* Newsletter & Discord Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#f9f9f7] p-10 rounded-[24px] border border-[#e5e5e5] flex flex-col justify-between">
            <div>
              <span className="inline-block bg-[#22C55E] text-white text-[11px] font-bold px-3 py-1 rounded-full mb-4">
                Get updates and career content
              </span>
              <h3 className="text-[36px] font-extrabold text-[#1a1a1a] leading-tight mb-4">Subscribe to our newsletter</h3>
              <p className="text-[#666666] text-[16px] mb-8 max-w-[400px]">
                We frequently write blogs that help our community with their career growth! Don&apos;t miss out!
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 mt-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-white border border-[#e5e5e5] rounded-full px-6 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#0099ff] transition-all"
                required
              />
              <button type="submit" className="bg-[#1a1a1a] text-white font-bold px-8 py-3 rounded-full hover:bg-black transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>

          <div className="bg-[#f9f9f7] p-10 rounded-[24px] border border-[#e5e5e5] flex flex-col justify-between">
            <div>
              <span className="inline-block bg-[#0099ff] text-white text-[11px] font-bold px-3 py-1 rounded-full mb-4">
                Talk to us directly
              </span>
              <h3 className="text-[36px] font-extrabold text-[#1a1a1a] leading-tight mb-4">Join us on Discord</h3>
              <p className="text-[#666666] text-[16px] mb-8 max-w-[400px]">
                Discord is where we give updates, offer member exclusive giveaways, and help each other grow on our careers.
              </p>
            </div>
            <div className="mt-auto">
              <a href="https://discord.gg/FXkNtWPG3B" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1a1a1a] text-white font-bold px-8 py-3 rounded-full hover:bg-black transition-colors">
                Join Server
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
