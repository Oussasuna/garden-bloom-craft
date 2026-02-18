import React from 'react';

export default function AdminPanel() {
  return (
    <section className="bg-white py-20 px-6 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-24 lg:mb-32">
          <div className="max-w-4xl">
            <p className="text-[#00A3FF] font-bold text-sm mb-4 tracking-tight uppercase lg:normal-case lg:text-[14px]">
              Admin Panel
            </p>
            <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.2] text-black mb-6 tracking-tight">
              Manage accounts, view analytics, and add exclusive jobs for students.
            </h2>
            <p className="text-[#666666] text-lg leading-[1.6] max-w-3xl">
              While students get access to their AI career partner, your career service team gets access to an admin panel to manage admin access, view student job application status and analytics, and even able to send them exclusive jobs that your team has sourced yourself.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="bg-[#F8F7F5] rounded-[24px] p-8 md:p-16 text-center flex flex-col items-center shadow-sm">
            <div className="mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                <path d="M12 2L14.5 9L22 11.5L14.5 14L12 21L9.5 14L2 11.5L9.5 9L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            </div>

            <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.2] text-black mb-6 max-w-2xl text-balance">
              Have a feature in mind that we haven't mentioned? We can customise for you.
            </h2>

            <p className="text-[#666666] text-sm md:text-base leading-[1.6] mb-10 max-w-2xl">
              We totally understand that your university might have a specific use case that you want to address, we offer customised services for our clients at an additional cost to build you the features that fit your students and your team the best.
            </p>

            <a
              href="https://forms.gle/iwthRUZE75ZYKdge8"
              className="bg-[#111111] text-white px-8 py-4 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 inline-flex items-center justify-center min-w-[200px]"
            >
              Let us know how we can help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
