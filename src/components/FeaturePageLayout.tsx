import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

interface HowItWorksStep {
  title: string;
  description: string;
}

interface FeatureDetailSection {
  label: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  bullets?: string[];
  buttonText?: string;
  customContent?: React.ReactNode;
}

interface StatItem {
  value: string;
  label: string;
}

interface FeaturePageProps {
  badge?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroCustomContent?: React.ReactNode;
  howItWorksTitle?: string;
  howItWorksSteps?: HowItWorksStep[];
  featureDetails?: FeatureDetailSection[];
  stats?: StatItem[];
  bottomCtaTitle?: string;
  bottomCtaButtonText?: string;
  /** Extra sections to render before the bottom CTA */
  extraSections?: React.ReactNode;
}

const FeaturePageLayout: React.FC<FeaturePageProps> = ({
  badge = "Feature",
  title,
  subtitle,
  ctaText = "Get Started",
  ctaHref = "https://app.jobexcv.ai",
  secondaryCtaText = "See how it works",
  secondaryCtaHref = "#how-it-works",
  heroImage,
  heroImageAlt = "Feature screenshot",
  heroCustomContent,
  howItWorksTitle = "How It Works",
  howItWorksSteps = [],
  featureDetails = [],
  stats,
  bottomCtaTitle = "Join the JobExCV community. Find your job 3x faster.",
  bottomCtaButtonText = "Sign up",
  extraSections,
}) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-[140px] pb-[60px] bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-[860px] mx-auto mb-12">
            {badge && (
              <span className="inline-block text-[13px] font-semibold text-[#3b82f6] mb-5 px-4 py-1.5 rounded-full bg-[#eff6ff] uppercase tracking-[0.05em]">
                {badge}
              </span>
            )}
            <h1 className="text-[36px] md:text-[48px] font-extrabold leading-[1.1] text-[#0f0f0f] mb-6 tracking-[-0.02em]">
              {title}
            </h1>
            <p className="text-[18px] leading-[1.6] text-[#52525b] max-w-[700px] mb-10">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center bg-[#3b82f6] text-white px-8 py-[14px] rounded-full font-semibold text-[16px] transition-all duration-200 hover:scale-[1.02] hover:bg-[#2563eb] group"
              >
                {ctaText}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
              {secondaryCtaText && (
                <a
                  href={secondaryCtaHref}
                  className="inline-flex items-center text-[#3b82f6] text-[15px] font-medium hover:underline transition-all duration-200"
                >
                  {secondaryCtaText} →
                </a>
              )}
            </div>
          </div>

          {heroImage && (
            <div className="relative w-full max-w-[900px] mx-auto rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-white border border-[#e4e4e7]">
              <img src={heroImage} alt={heroImageAlt} className="w-full h-auto object-cover" />
            </div>
          )}
          {heroCustomContent}
        </div>
      </section>

      {/* HOW IT WORKS */}
      {howItWorksSteps.length > 0 && (
        <section id="how-it-works" className="py-[80px] md:py-[100px] bg-[#f9fafb]">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#0f0f0f] text-center mb-[60px] tracking-[-0.02em]">
              {howItWorksTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#3b82f6] text-white rounded-full flex items-center justify-center font-bold text-[18px] mb-6 shadow-sm">
                    {i + 1}
                  </div>
                  <h3 className="text-[20px] font-bold text-[#0f0f0f] mb-3 leading-[1.3]">{step.title}</h3>
                  <p className="text-[15px] text-[#71717a] leading-[1.6] max-w-[320px]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURE DETAIL SECTIONS (alternating) */}
      {featureDetails.map((section, i) => {
        const isReversed = i % 2 === 1;
        const bgColor = i % 2 === 0 ? "bg-white" : "bg-[#f0f7ff]";
        return (
          <section key={i} className={`py-[80px] md:py-[100px] ${bgColor}`}>
            <div className="max-w-[1100px] mx-auto px-6">
              <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-[80px]`}>
                <div className="flex-1 max-w-[500px]">
                  {section.label && (
                    <span className="inline-block text-[13px] font-semibold text-[#3b82f6] mb-4 uppercase tracking-[0.05em]">
                      {section.label}
                    </span>
                  )}
                  <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f0f0f] leading-[1.2] mb-5 tracking-[-0.01em]">
                    {section.title}
                  </h2>
                  <p className="text-[17px] text-[#71717a] leading-[1.6] mb-8">
                    {section.description}
                  </p>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {section.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <svg className="w-5 h-5 mt-0.5 text-[#3b82f6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[15px] text-[#52525b] leading-[1.5]">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href="https://app.jobexcv.ai"
                    className="inline-flex items-center justify-center px-7 py-[12px] border-2 border-[#3b82f6] rounded-full text-[15px] font-semibold text-[#3b82f6] transition-all duration-200 hover:bg-[#3b82f6] hover:text-white hover:scale-[1.02]"
                  >
                    {section.buttonText || "Start today"}
                  </a>
                </div>
                <div className="flex-1">
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.title}
                      className="w-full h-auto rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#e4e4e7]"
                    />
                  )}
                  {section.customContent}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* EXTRA SECTIONS */}
      {extraSections}

      {/* SOCIAL PROOF STATS BAR */}
      {stats && stats.length > 0 && (
        <section className="py-[60px] bg-[#f9fafb] border-y border-[#e4e4e7]">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className={`grid grid-cols-1 md:grid-cols-${stats.length} gap-8`}>
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[36px] font-extrabold text-[#3b82f6] mb-2">{stat.value}</div>
                  <div className="text-[15px] font-medium text-[#71717a]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA BANNER */}
      <section className="py-[80px] md:py-[100px]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] rounded-[24px] py-[60px] px-8 md:px-16 text-center">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white mb-8 leading-[1.2] max-w-[700px] mx-auto">
              {bottomCtaTitle}
            </h2>
            <a
              href="https://app.jobexcv.ai"
              className="inline-flex items-center justify-center px-8 py-[14px] border-2 border-white rounded-full text-white font-semibold text-[16px] transition-all duration-200 hover:bg-white hover:text-[#1d4ed8] hover:scale-[1.02]"
            >
              {bottomCtaButtonText}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturePageLayout;
