import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const GetStartedSteps: React.FC = () => {
  return (
    <section className="py-[80px] md:py-[120px] bg-white w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <p className="mb-4 text-[#00a3ff] font-bold text-[14px] tracking-wide">
            How to get started?
          </p>
          <h2 className="text-[#000000] text-[36px] md:text-[42px] font-bold leading-[1.2] tracking-[-0.02em]">
            Interested? Here is how to get started.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-white w-7 h-7" />
              </div>
            </div>
            <h3 className="text-[#000000] text-xl font-bold mb-4">
              Step 1:<br />Confirm the details
            </h3>
            <p className="text-[#666666] text-[16px] leading-[1.5] max-w-[280px]">
              Start by filling the enquiry form, our team will reach out and to understand your needs to determine the best plan.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="currentColor" />
                <path d="M18 5c.5.5 1 1.5 1 2.5" />
              </svg>
            </div>
            <h3 className="text-[#000000] text-xl font-bold mb-4">
              Step 2:<br />Set up in two weeks
            </h3>
            <p className="text-[#666666] text-[16px] leading-[1.5] max-w-[280px]">
              Based on your needs and the scale, we will work with your team and set you up in as fast as 2 weeks.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" fill="currentColor" />
                <path d="M5 3v4" />
                <path d="M3 5h4" />
              </svg>
            </div>
            <h3 className="text-[#000000] text-xl font-bold mb-4">
              Step 3:<br />We provide training
            </h3>
            <p className="text-[#666666] text-[16px] leading-[1.5] max-w-[280px]">
              We provide training for your staff to ensure smooth usage for both your students and your team.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://forms.gle/iwthRUZE75ZYKdge8"
            className="bg-[#111111] text-white px-8 py-3 rounded-full font-bold text-[15px] hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Leave us a message today!
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSteps;
