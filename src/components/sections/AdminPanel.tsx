import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

export default function AdminPanel() {
  return (
    <section className="bg-white px-6 mt-[80px]">
      <ContainerScroll
        titleComponent={
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#00A3FF] font-bold text-sm mb-4 tracking-tight uppercase lg:normal-case lg:text-[14px]">
              Admin Panel
            </p>
            <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.2] text-black mb-6 tracking-tight">
              Manage accounts, view analytics, and add exclusive jobs for students.
            </h2>
            <p className="text-[#374151] text-[18px] leading-[1.7] max-w-[600px] mx-auto">
              Your career services team gets a dedicated admin dashboard to manage student accounts, track job application progress, view engagement analytics, and post exclusive job opportunities directly to your students — all in one place.
            </p>
          </div>
        }
      >
        <img
          src="/lovable-uploads/admin-panel.jpg"
          alt="Admin Panel Dashboard"
          className="w-full h-full object-cover object-left-top"
          loading="lazy"
        />
      </ContainerScroll>
    </section>
  );
}
