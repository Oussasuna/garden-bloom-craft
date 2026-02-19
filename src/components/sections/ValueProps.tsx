import React from 'react';

const HeroIllustration = () => (
  <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[420px] h-auto drop-shadow-2xl">
    {/* Glow effect */}
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e0e7ff" />
        <stop offset="100%" stopColor="#f5f3ff" />
      </linearGradient>
    </defs>
    <ellipse cx="200" cy="180" rx="160" ry="140" fill="url(#glow)" />

    {/* Person sitting */}
    <circle cx="200" cy="120" r="28" fill="#e0e7ff" stroke="white" strokeWidth="2" />
    <circle cx="192" cy="115" r="2.5" fill="#4f46e5" />
    <circle cx="208" cy="115" r="2.5" fill="#4f46e5" />
    <path d="M194 124c2.5 3 9 3 12 0" stroke="#4f46e5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M185 108c3-6 12-8 18-5" stroke="#4f46e5" strokeWidth="1.5" fill="none" strokeLinecap="round" />

    {/* Body */}
    <path d="M170 260c0-16.6 13.4-30 30-30h0c16.6 0 30 13.4 30 30v20H170v-20z" fill="#c4b5fd" stroke="white" strokeWidth="2" />

    {/* Laptop */}
    <rect x="155" y="245" width="90" height="55" rx="6" fill="white" stroke="#a78bfa" strokeWidth="1.5" />
    <rect x="162" y="252" width="76" height="38" rx="3" fill="#ede9fe" />
    <rect x="170" y="260" width="30" height="3" rx="1.5" fill="#8b5cf6" />
    <rect x="170" y="267" width="50" height="3" rx="1.5" fill="#c4b5fd" />
    <rect x="170" y="274" width="40" height="3" rx="1.5" fill="#c4b5fd" />
    <rect x="140" y="300" width="120" height="6" rx="3" fill="#ddd6fe" />

    {/* Floating resume card - top right */}
    <g className="animate-[float_3s_ease-in-out_infinite]">
      <rect x="290" y="70" width="80" height="100" rx="10" fill="white" stroke="#a78bfa" strokeWidth="1.5" />
      <rect x="302" y="82" width="20" height="20" rx="4" fill="#ede9fe" />
      <rect x="302" y="110" width="56" height="4" rx="2" fill="#c4b5fd" />
      <rect x="302" y="120" width="40" height="4" rx="2" fill="#e0e7ff" />
      <rect x="302" y="130" width="50" height="4" rx="2" fill="#e0e7ff" />
      <rect x="302" y="140" width="30" height="4" rx="2" fill="#e0e7ff" />
    </g>

    {/* Floating checkmark - top left */}
    <g className="animate-[float_3s_ease-in-out_infinite_0.5s]">
      <circle cx="70" cy="100" r="22" fill="white" stroke="#06b6d4" strokeWidth="1.5" />
      <path d="M60 100l7 7 13-14" stroke="#06b6d4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Floating stars - bottom right */}
    <g className="animate-[float_3s_ease-in-out_infinite_1s]">
      <rect x="300" y="210" width="70" height="30" rx="15" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="315" y="230" fill="#f59e0b" fontSize="14" fontWeight="bold">★★★★★</text>
    </g>

    {/* Floating AI badge - left */}
    <g className="animate-[float_3s_ease-in-out_infinite_1.5s]">
      <rect x="40" y="200" width="65" height="28" rx="14" fill="white" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="52" y="219" fill="#8b5cf6" fontSize="12" fontWeight="bold">✦ AI</text>
    </g>
  </svg>
);

const ValueProps = () => {
  return (
    <section className="relative py-24 md:py-[100px] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4]" />

      {/* Animated subtle overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite_1s]" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left - Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <HeroIllustration />
          </div>

          {/* Right - Card */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-white rounded-[24px] p-8 md:p-12 shadow-xl max-w-[540px] overflow-hidden">
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4]" />

              <div className="mb-10">
                <div className="mb-4">
                  <span className="text-3xl bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">✦</span>
                </div>
                <h2 className="text-[24px] md:text-[30px] font-extrabold leading-[1.3] text-gray-900 tracking-tight">
                  Struggling with your job hunt? Our AI maximizes your success rate and minimizes the time you spend applying.
                </h2>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-gray-100">
                {/* Stat 1 */}
                <div className="bg-indigo-50 rounded-2xl p-5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 15l-2 5L9 9l11 4-5 2z" /><path d="M22 22l-5-5" /></svg>
                    <h3 className="text-[28px] md:text-[32px] font-extrabold text-[#6366f1] leading-none">1 click</h3>
                  </div>
                  <p className="text-gray-500 text-[13px] font-medium">AI Resume Builder</p>
                </div>

                {/* Stat 2 */}
                <div className="bg-purple-50 rounded-2xl p-5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    <h3 className="text-[28px] md:text-[32px] font-extrabold text-[#8b5cf6] leading-none">1 min</h3>
                  </div>
                  <p className="text-gray-500 text-[13px] font-medium">Per Job Application</p>
                </div>

                {/* Stat 3 */}
                <div className="bg-cyan-50 rounded-2xl p-5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                    <h3 className="text-[28px] md:text-[32px] font-extrabold text-[#06b6d4] leading-none">10X</h3>
                  </div>
                  <p className="text-gray-500 text-[13px] font-medium">More Interviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default ValueProps;
