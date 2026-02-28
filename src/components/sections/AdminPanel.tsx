import React from 'react';
import { useI18n } from '@/contexts/I18nContext';

export default function AdminPanel() {
  const { t } = useI18n();
  return (
    <section className="bg-white px-6 mt-[80px]">
      <div className="flex items-center justify-center relative p-2 md:p-10">
        <div className="py-6 md:py-10 w-full relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-[#00A3FF] font-bold text-sm mb-4 tracking-tight uppercase lg:normal-case lg:text-[14px]">
                {t("Admin Panel")}
              </p>
              <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.2] text-black mb-6 tracking-tight">
                {t("Manage accounts, view analytics, and add exclusive jobs for students.")}
              </h2>
              <p className="text-[#374151] text-[18px] leading-[1.7] max-w-[600px] mx-auto">
                {t("Your career services team gets a dedicated admin dashboard to manage student accounts, track job application progress, view engagement analytics, and post exclusive job opportunities directly to your students — all in one place.")}
              </p>
            </div>
          </div>
          <div
            className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl mt-8"
          >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl md:p-4">
              <img
                src="/lovable-uploads/admin-panel.jpg"
                alt="Admin Panel Dashboard"
                className="w-full h-full object-cover object-left-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
