import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-white py-[80px] lg:py-[100px]">
      <div className="container mx-auto px-6 max-w-[1248px]">
        <div className="text-center mb-12">
          <p className="text-[#0099ff] text-[14px] font-semibold tracking-wide uppercase mb-3">
            What our users say
          </p>
          <h2 className="text-[36px] lg:text-[42px] font-extrabold text-[#1a1a1a] mb-10">
            Loved by the community.
          </h2>
          <div className="flex justify-center mb-12">
            <img
              src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/6731ded82cf0cde8f25b019e_FirstResume%20glossary%20Graphics%20wide.avif"
              alt="Diverse group of young people reading"
              className="object-contain w-[422px] h-auto" />

          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Main Large Testimonial - Left */}
          <div className="bg-[#f9f9f7] rounded-[12px] p-8 lg:p-10 flex flex-col justify-between min-h-[360px]">
            <div>
              <p className="text-[20px] lg:text-[24px] font-bold text-[#1a1a1a] leading-[1.3] mb-6">
                &quot;We partner with FirstResume because they are the most seamless CV polishing tool in the market empowered by AI&quot;
              </p>
              <a href="#" className="text-[#0099ff] text-[16px] font-semibold hover:underline inline-block mb-6">
                Read more
              </a>
            </div>
            <div className="mt-auto">
              <img
                src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/68de3ca77db09da719256750_CUHK%20MBA%20logo.png"
                alt="CUHK MBA Programme"
                className="h-[40px] w-auto object-contain opacity-80" />

            </div>
          </div>

          {/* Right Column - Two Stacked Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#f9f9f7] rounded-[12px] p-8 flex flex-col justify-between flex-1">
              <p className="text-[16px] lg:text-[18px] text-[#1a1a1a] leading-[1.5] mb-6">
                &quot;Tried chatgpt for weeks and got zero interviews... FirstResume got me 3 callbacks in the first month?? actually sounds like me and takes 2 mins. worth every $$&quot;
              </p>
              <div>
                <div className="text-[16px] font-bold text-[#1a1a1a]">Sarah</div>
                <div className="text-[14px] text-[#666666]">Product Manager @ Google</div>
              </div>
            </div>

            <div className="bg-[#f9f9f7] rounded-[12px] p-8 flex flex-col justify-between flex-1">
              <p className="text-[16px] lg:text-[18px] text-[#1a1a1a] leading-[1.5] mb-6">
                &quot;Been using FirstResume for the past month and wow... applied to 40 jobs already and got 4 interviews! Usually I&apos;d spend forever tweaking each resume but this does it so much better than I could.&quot;
              </p>
              <div>
                <div className="text-[16px] font-bold text-[#1a1a1a]">Michael</div>
                <div className="text-[14px] text-[#666666]">Business Analyst @ PwC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
          { value: '562,192', label: 'Users' },
          { value: '4.9/5', label: 'Rating' },
          { value: '39', label: 'Countries' },
          { value: '625,000+', label: 'Job applications' }].
          map((stat) =>
          <div key={stat.label} className="bg-[#f9f9f7] py-8 rounded-[12px] text-center border border-[#e5e5e5]">
              <div className="text-[32px] font-extrabold text-[#1a1a1a] leading-none mb-1">{stat.value}</div>
              <div className="text-[14px] text-[#666666] font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          


        </div>
      </div>
    </section>);

};

export default Testimonials;