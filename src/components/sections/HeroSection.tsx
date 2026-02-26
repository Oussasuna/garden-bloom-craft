import React, { useRef, useEffect } from 'react';
import heroVideo from '@/assets/hero-video.mp4';
import { useI18n } from '@/contexts/I18nContext';


const companyLogos = [
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068cd4eb7cfa9918e11c_21.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068b4638397708f6c5a0_20.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068c54d454dde3645a61_16.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068cd06a7d714fa435ef_19.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068c6660edcb3f6dc1bb_10.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068c6dd97695b9d4e4ed_11.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068bffe98b5b3e0667eb_6.avif", alt: "Company logo" },
{ src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068c992d152ad6435da8_5.avif", alt: "Company logo" }];


const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    // Resume on visibility change (tab switch / refresh)
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') playVideo();
    };

    // Resume when scrolled back into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playVideo();
      },
      { threshold: 0.1 }
    );

    document.addEventListener('visibilitychange', handleVisibility);
    observer.observe(video);
    playVideo();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      <div className="pt-[120px] pb-[40px] md:pt-[140px] md:pb-[60px]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left column - Text */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-[#00A3FF] font-bold text-[14px] mb-6 tracking-tight">
                {t("#1 AI-Powered Career Platform")}
              </p>
              <h1 className="text-[36px] md:text-[56px] font-[800] leading-[1.1] text-black mb-6 tracking-[-0.02em]">
                {t("Land your dream job with AI that automates your entire job search.")}
              </h1>
              <p className="text-[16px] md:text-[18px] text-[#666666] leading-[1.6] max-w-[700px] mb-8">
                {t("JobexCV automates your entire job search  from building the perfect resume to applying to top companies worldwide.")}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <a className="bg-[#111111] text-white rounded-full font-semibold text-[16px] hover:opacity-90 transition-opacity py-[18px] px-[10px] my-0 mx-0" href="https://preview--petal-prime.lovable.app/">
                  {t("Start Getting Hired Today")}
                </a>
                <a href="#" className="text-[#0099ff] text-[14px] font-medium hover:underline transition-colors">
                  {t("Looking for university partnerships? Click here")}
                </a>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-full max-w-[550px] overflow-hidden">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover scale-[1.15] origin-center"
                  style={{ border: 'none', outline: 'none', background: 'transparent' }}
                  src={heroVideo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company logos bar */}
      <div className="w-full flex flex-col justify-center items-center text-center pb-12 border-b border-gray-100">
        <p className="text-center text-[13px] font-medium text-[#666666]/60 mb-8 tracking-wider">
          Users landed roles at
        </p>
        <div className="w-full flex justify-center gap-[60px] flex-wrap px-6">
            {companyLogos.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} className="h-[28px] w-auto opacity-80 flex-shrink-0" />
            ))}
        </div>
      </div>
    </section>);

};

export default HeroSection;