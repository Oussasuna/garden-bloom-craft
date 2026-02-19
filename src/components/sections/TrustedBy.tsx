import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';

const TRUSTED_LOGOS = [
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068c6a308945356266ed_14.avif", alt: "HKSTP logo" },
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068cd5ad4023c3c216e0_8.avif", alt: "Imperial College London logo" },
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/6712068cec734bf960d01b47_1.avif", alt: "Lingnan University logo" },
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/68de3ca7461dc1e8e2e329b2_HKUBS_Standard_Coloured_Shield_Blue_Text_Logo.webp", alt: "HKU Business School logo" },
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/68de3ca77db09da719256750_CUHK%20MBA%20logo.png", alt: "CUHK MBA logo" },
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/68de3ca7b4cfca2e5168a935_images.png", alt: "EdUHK logo" },
  { src: "https://cdn.prod.website-files.com/67065b18171e78a558433e90/67eba18e4a1c0318c7382bc4_CityU_logo.svg.avif", alt: "City University of Hong Kong logo" },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-10 w-full bg-white">
      <p className="text-center text-[14px] text-[#666666] font-medium tracking-[0.05em] mb-6">
        Trusted around the world
      </p>
      <div
        className="overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}
      >
        <InfiniteSlider gap={60} duration={30} durationOnHover={60}>
          {TRUSTED_LOGOS.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-[45px] w-auto flex-shrink-0 object-contain"
            />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default TrustedBy;
