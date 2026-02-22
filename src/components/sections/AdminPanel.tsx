import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

export default function AdminPanel() {
  return (
    <section className="bg-white px-6">
      <ContainerScroll
        titleComponent={
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#00A3FF] font-bold text-sm mb-4 tracking-tight uppercase lg:normal-case lg:text-[14px]">
              Admin Panel
            </p>
            <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.2] text-black mb-6 tracking-tight">
              Manage accounts, view analytics, and add exclusive jobs for students.
            </h2>
            <p className="text-[#666666] text-lg leading-[1.6] max-w-3xl mx-auto">
              While students get access to their AI career partner, your career service team gets access to an admin panel to manage admin access, view student job application status and analytics, and even able to send them exclusive jobs that your team has sourced yourself.
            </p>
          </div>
        }
      >
        <img
          src="/lovable-uploads/d903d7b9-d7f5-4ae1-a604-4d61e806d388.png"
          alt="Admin Panel Dashboard"
          className="w-full h-full object-cover object-left-top"
          loading="lazy"
        />
      </ContainerScroll>
    </section>
  );
}
