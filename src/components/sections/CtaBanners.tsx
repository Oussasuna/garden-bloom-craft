import React from 'react';
import { useI18n } from '@/contexts/I18nContext';

const CtaBanners: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="py-[80px] px-6 bg-white w-full">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#f8f7f5] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[300px] shadow-sm">
          <div>
            <div className="inline-block px-3 py-1 bg-[#00a3ff] text-white text-[12px] font-bold rounded-full mb-6">
              Get updates and career content
            </div>
            <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#111111] leading-[1.2] mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-[#666666] text-[16px] leading-[1.6] mb-8">
              We frequently write blogs that help our community with their career growth! Don't miss out!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white border border-[#e5e7eb] rounded-[12px] px-4 py-3 text-[16px] text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#00a3ff] transition-all"
            />
            <button className="bg-[#111111] text-white font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        <div className="bg-[#f8f7f5] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[300px] shadow-sm">
          <div>
            <div className="inline-block px-3 py-1 bg-[#00a3ff] text-white text-[12px] font-bold rounded-full mb-6">
              Talk to us directly
            </div>
            <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#111111] leading-[1.2] mb-4">
              Join us on Discord
            </h2>
            <p className="text-[#666666] text-[16px] leading-[1.6] mb-8">
              Discord is where we give updates, offer member exclusive giveaways, and help each other grow on our careers.
            </p>
          </div>
          <div className="mt-auto">
            <a
              href="https://discord.gg/FXkNtWPG3B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#111111] text-white font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              Join Server
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanners;
