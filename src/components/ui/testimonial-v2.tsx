import React from 'react';
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "We partner with JobExCV because they are the most seamless CV polishing tool in the market empowered by AI.",
    image: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/68de3ca77db09da719256750_CUHK%20MBA%20logo.png",
    name: "CUHK MBA Programme",
    role: "University Partner",
  },
  {
    text: "Tried chatgpt for weeks and got zero interviews... JobExCV got me 3 callbacks in the first month?? actually sounds like me and takes 2 mins. worth every $$",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah",
    role: "Product Manager @ Google",
  },
  {
    text: "Been using JobExCV for the past month and wow... applied to 40 jobs already and got 4 interviews! Usually I'd spend forever tweaking each resume but this does it so much better than I could.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Michael",
    role: "Business Analyst @ PwC",
  },
  {
    text: "The AI-powered resume tailoring is incredible. Each application feels personal and targeted. Got my dream job within 3 weeks!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Emily Chen",
    role: "Software Engineer @ Meta",
  },
  {
    text: "As a career changer, JobExCV helped me highlight transferable skills I didn't even know I had. Landed 5 interviews in my first week.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "James Wilson",
    role: "Data Analyst @ Deloitte",
  },
  {
    text: "The auto-apply feature saved me 20+ hours a week. I went from applying to 5 jobs a day to 50, with better results.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Priya Sharma",
    role: "Marketing Manager @ HubSpot",
  },
  {
    text: "JobExCV's job matching algorithm is spot on. Every recommendation felt like it was handpicked for my profile.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Lisa Park",
    role: "UX Designer @ Airbnb",
  },
  {
    text: "The cover letter generator alone is worth the subscription. Each letter is unique, professional, and gets responses.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David Martinez",
    role: "Finance Associate @ JPMorgan",
  },
  {
    text: "From resume building to interview prep, JobExCV is the complete package. Couldn't have landed my role without it.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Rachel Thompson",
    role: "Consultant @ McKinsey",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 15,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <motion.div
        initial={{ translateY: '0%' }}
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{ willChange: 'transform' }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={`${index}-${i}`}
                className="bg-[#f9f9f7] rounded-[16px] p-6 shadow-sm border border-[#f0f0ee]"
              >
                <p className="text-[15px] leading-[1.6] text-[#1a1a1a] mb-5">
                  &quot;{text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={image}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[14px] font-bold text-[#1a1a1a]">{name}</p>
                    <p className="text-[13px] text-[#666666]">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-12">
        <p className="text-[#0099ff] text-[14px] font-semibold tracking-wide uppercase mb-3">
          Testimonials
        </p>
        <h2 className="text-[36px] lg:text-[42px] font-extrabold text-[#1a1a1a] mb-4">
          What our users say
        </h2>
        <p className="text-[16px] text-[#666666] max-w-[600px] mx-auto">
          Discover how thousands of job seekers streamline their applications with JobExCV.
        </p>
      </div>

      <div
        className="flex justify-center gap-6 w-full max-h-[750px] overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
        <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
      </div>
    </div>
  );
}

export default TestimonialsSection;
