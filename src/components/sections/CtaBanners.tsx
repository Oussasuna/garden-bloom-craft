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
              {t("Talk to us directly")}
            </div>
            <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#111111] leading-[1.2] mb-4">
              {t("Join us on Discord")}
            </h2>
            <p className="text-[#666666] text-[16px] leading-[1.6] mb-8">
              {t("Discord is where we give updates, offer member exclusive giveaways, and help each other grow on our careers.")}
            </p>
          </div>
          <div className="mt-auto">
            <a
              href="https://discord.gg/FXkNtWPG3B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#111111] text-white font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">

              {t("Join Server")}
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default CtaBanners;