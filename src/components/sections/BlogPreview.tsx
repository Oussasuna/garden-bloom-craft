import React from 'react';

const blogPosts = [
  {
    title: "The AI Resume Builder Checklist: Five Features to Look for Beyond ATS Optimization",
    category: "Resume Writing",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d52639931bfc5751f988_20251104_20Firstresume_20-23.png",
    link: "#"
  },
  {
    title: "How to Write a Resume When Your Experience Is Only Freelance or Contract Work",
    category: "Resume Writing",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/6909d5262cee4c3dfd8faf40_20251104_20Firstresume_20-24.png",
    link: "#"
  },
  {
    title: "CES 2026 Highlights: Booth Conversations Reveal Career Insights and Job Search Trends",
    category: "Resume Writing",
    image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6909d52643a6d713c23d0c9f_20251104_Firstresume_-25.png",
    link: "#"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-[80px] md:py-[120px] bg-white">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="text-center mb-12">
          <p className="text-[#00A3FF] text-[14px] font-bold mb-2 tracking-wide">
            While you are here ...
          </p>
          <h2 className="text-[32px] md:text-[42px] font-bold text-black leading-[1.2]">
            Check out our blogs.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="group flex flex-col bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-full"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden p-3 pb-0">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-[#E5E7EB]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 pt-4 flex flex-col flex-grow">
                <span className="text-[#00A3FF] text-[14px] font-bold mb-2">
                  {post.category}
                </span>
                <h3 className="text-[18px] md:text-[20px] font-bold text-black leading-tight group-hover:text-[#333] transition-colors line-clamp-3">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="/blog" className="text-[#00A3FF] text-[16px] font-medium hover:underline transition-all">
            See more
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
