import React from 'react';

const BenefitsGrid = () => {
  const benefits = [
    {
      title: "Save time & reduce stress",
      description: "Transform hours of application work into minutes, letting AI handle the heavy lifting.",
    },
    {
      title: "Higher quality job applications",
      description: "Get perfectly tailored applications that showcase your true potential to employers.",
    },
    {
      title: "Improve graduate employment",
      description: "Help more students land better jobs with applications that improve university reputation.",
    },
    {
      title: "Scalable support for students",
      description: "Provide personalised career guidance to every student without stretching resources thin.",
    },
  ];

  return (
    <section className="bg-white py-[80px] md:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col justify-start">
            <p className="text-[#00a3ff] text-[14px] font-bold mb-4 tracking-normal">
              Why use FirstResume?
            </p>
            <h2 className="text-[32px] md:text-[42px] leading-[1.2] font-bold text-black mb-6 max-w-[500px]">
              Maximise student employability. Minimise career service workload.
            </h2>
            <p className="text-[#666666] text-[16px] md:text-[18px] leading-[1.6] max-w-[540px] mb-10">
              With how competitive the job market is nowadays, landing a job is no longer just about who you are, but also how you apply. FirstResume assists your career service team by providing high quality opportunities and applications automations for students 24/7.
            </p>
            <div className="hidden lg:block pt-4">
              <a
                href="https://forms.gle/iwthRUZE75ZYKdge8"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#111111] text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-[16px]"
              >
                Boost results today
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col group">
                <div className="w-[48px] h-[48px] mb-6 rounded-[12px] flex items-center justify-center bg-[#f8f7f5]">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/67d94440bbab7951ad321189_checked-29.avif"
                    alt=""
                    className="w-6 h-6 opacity-80"
                  />
                </div>
                <h3 className="text-[20px] font-bold text-black mb-3 leading-[1.3]">
                  {benefit.title}
                </h3>
                <p className="text-[#666666] text-[15px] leading-[1.6]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:hidden mt-8">
            <a
              href="https://forms.gle/iwthRUZE75ZYKdge8"
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#111111] text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-[16px]"
            >
              Boost results today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
