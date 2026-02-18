import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

interface FeaturePageProps {
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  heroImage?: string;
  heroImageAlt?: string;
  summaryText?: string;
  steps?: { title: string; description: string; image?: string }[];
  benefits?: { icon: string; title: string; description: string }[];
  features?: { number: string; text: string }[];
  featureCardTitle?: string;
  featureCardText?: string;
  relatedFeatures?: { name: string; href: string }[];
}

const FeaturePageLayout: React.FC<FeaturePageProps> = ({
  badge,
  badgeColor = "#0099FF",
  title,
  subtitle,
  ctaText = "Get Started Free",
  heroImage,
  heroImageAlt = "Feature screenshot",
  summaryText,
  steps = [],
  benefits = [],
  features = [],
  featureCardTitle,
  featureCardText,
  relatedFeatures = [],
}) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-[120px] pb-[60px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-[860px] mx-auto mb-12">
            {badge && (
              <span
                className="inline-block text-[13px] font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full"
                style={{ color: badgeColor, backgroundColor: `${badgeColor}15` }}
              >
                {badge}
              </span>
            )}
            <h1 className="text-[40px] md:text-[56px] font-extrabold leading-[1.1] text-black mb-6 tracking-[-0.02em]">
              {title}
            </h1>
            <p className="text-[18px] leading-[1.6] text-[#555555] max-w-[700px] mb-10">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="https://app.firstresume.ai"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-[14px] rounded-[8px] font-semibold text-[16px] transition-all hover:opacity-90 gap-2 group"
              >
                {ctaText}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {heroImage && (
            <div className="relative w-full max-w-[900px] mx-auto rounded-[16px] overflow-hidden border border-[#e2e8f0] shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-[#f9f9f7]">
              <img src={heroImage} alt={heroImageAlt} className="w-full h-auto object-cover" />
            </div>
          )}
        </div>
      </section>

      {/* Summary */}
      {summaryText && (
        <section className="py-10 bg-[#f8f9fa]">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <p className="text-[18px] text-[#555555] leading-[1.7]">{summaryText}</p>
          </div>
        </section>
      )}

      {/* Features list + card */}
      {(features.length > 0 || featureCardTitle) && (
        <section className="py-[80px] md:py-[100px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {features.length > 0 && (
                <div className="w-full lg:w-7/12">
                  <h2 className="text-[36px] md:text-[42px] font-extrabold leading-[1.2] text-black mb-10 tracking-[-0.02em]">
                    Everything you need, in one place
                  </h2>
                  <div className="space-y-0 text-black">
                    {features.map((f, i) => (
                      <div key={i} className="flex items-start gap-4 py-4 border-t border-[#e2e8f0]">
                        <span className="text-[16px] font-medium text-[#555555] underline whitespace-nowrap pt-1">{f.number}</span>
                        <span className="text-[18px] font-medium">{f.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <a
                      href="https://app.firstresume.ai"
                      className="inline-flex items-center justify-center px-8 py-[14px] border border-black rounded-[8px] font-semibold text-black transition-all hover:bg-black hover:text-white text-[16px]"
                    >
                      Start today
                    </a>
                  </div>
                </div>
              )}
              {featureCardTitle && (
                <div className="w-full lg:w-5/12">
                  <div className="bg-white rounded-[12px] p-8 md:p-10 border border-[#e2e8f0] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                    <div className="w-12 h-12 mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${badgeColor}15` }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={badgeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <h3 className="text-[22px] font-bold text-black mb-4">{featureCardTitle}</h3>
                    <p className="text-[16px] text-[#555555] leading-[1.6]">{featureCardText}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="py-[80px] bg-[#f8f9fa]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] md:text-[42px] font-extrabold text-black text-center mb-14 tracking-[-0.02em]">
              Why it works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white rounded-[16px] p-8 border border-[#e2e8f0] shadow-card">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="text-[20px] font-bold text-black mb-3">{b.title}</h3>
                  <p className="text-[15px] text-[#666666] leading-[1.6]">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Steps */}
      {steps.length > 0 && (
        <section className="py-[80px] md:py-[100px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] md:text-[42px] font-extrabold text-black text-center mb-14 tracking-[-0.02em]">
              How it works
            </h2>
            <div className="space-y-20">
              {steps.map((step, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-bold text-[16px] mb-6">
                      {i + 1}
                    </div>
                    <h3 className="text-[28px] md:text-[32px] font-extrabold text-black mb-4">{step.title}</h3>
                    <p className="text-[17px] text-[#555555] leading-[1.6] mb-6">{step.description}</p>
                    <a href="https://app.firstresume.ai" className="inline-flex items-center justify-center bg-black text-white px-7 py-3.5 rounded-[8px] font-semibold text-[15px] hover:opacity-90 transition-all">
                      Try it now
                    </a>
                  </div>
                  {step.image && (
                    <div className="flex-1">
                      <img src={step.image} alt={step.title} className="w-full h-auto rounded-[12px] border border-[#e2e8f0] shadow-[0_10px_30px_rgba(0,0,0,0.05)]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Features */}
      {relatedFeatures.length > 0 && (
        <section className="py-[60px] bg-[#f8f9fa] border-t border-[#e2e8f0]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h3 className="text-[20px] font-bold text-black mb-6">Related Features</h3>
            <div className="flex flex-wrap gap-3">
              {relatedFeatures.map((f, i) => (
                <Link key={i} to={f.href} className="px-5 py-2.5 bg-white border border-[#e2e8f0] rounded-full text-[14px] font-medium text-[#333] hover:border-black hover:text-black transition-all">
                  {f.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-[80px] bg-black text-white text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[48px] font-extrabold mb-6">Your success begins here.</h2>
          <p className="text-[18px] text-white/70 mb-8">Join 562,000+ users who trust FirstResume to automate their job search.</p>
          <a href="https://app.firstresume.ai" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-[16px] hover:opacity-90 transition-all">
            Get Started Free
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturePageLayout;
