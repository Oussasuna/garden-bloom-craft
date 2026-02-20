import React from 'react';

const BlogNewsletter = () => {
  return (
    <section className="py-[80px] bg-white">
      <div className="container max-w-[1240px] mx-auto px-6">
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
