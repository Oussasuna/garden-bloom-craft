import React from 'react';
import { TestimonialsSection } from '@/components/ui/testimonial-v2';

const Testimonials = () => {
  return (
    <section className="bg-white py-[80px] lg:py-[100px]">
      <div className="container mx-auto px-6 max-w-[1248px]">
        <TestimonialsSection />

        {/* Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { value: '562,192', label: 'Users' },
            { value: '4.9/5', label: 'Rating' },
            { value: '39', label: 'Countries' },
            { value: '625,000+', label: 'Job applications' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#f9f9f7] py-8 rounded-[12px] text-center border border-[#e5e5e5]">
              <div className="text-[32px] font-extrabold text-[#1a1a1a] leading-none mb-1">{stat.value}</div>
              <div className="text-[14px] text-[#666666] font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
