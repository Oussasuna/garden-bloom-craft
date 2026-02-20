import React from 'react';

const steps = [
{
  id: 'step-1',
  number: 'Step 1:',
  title: 'Create a profile',
  description: 'Create your profile by uploading an existing resume or create one from scratch using our resume builder.',
  icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/67076694d34ec132a9171b98_icons.svg'
},
{
  id: 'step-2',
  number: 'Step 2:',
  title: 'Find a job post',
  description: 'Start searching for jobs anywhere you want and paste the job description in the box in JobExCV.',
  icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/67076429ed07576cd6db828e_9.svg'
},
{
  id: 'step-3',
  number: 'Step 3:',
  title: 'One click .. and done',
  description: 'One click, and we will track your job with AI, analyse your compatibility, create your perfect resume and more, ready to apply.',
  icon: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/6707642926c2f09fcad827ca_8.svg'
}];


const HowItWorks = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="container mx-auto px-6 max-w-[1200px] flex flex-col items-center">
        <div className="text-center mb-12">
          <p className="text-[#0099ff] text-[14px] font-semibold tracking-wide uppercase mb-2">
            How it works?
          </p>
          <h2 className="text-[#1a1a1a] text-[42px] font-bold leading-[1.2] tracking-[-0.02em]">
            Perfect applications in one click.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
          {steps.map((step) =>
          <div key={step.id} className="flex flex-col items-center text-center p-4">
              <div className="mb-6 h-[48px] flex items-center justify-center">
                <img src={step.icon} alt={step.title} className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-[#1a1a1a] text-[24px] font-bold leading-[1.2] mb-4">
                {step.number} <br /> {step.title}
              </h3>
              <p className="text-[#666666] text-[18px] font-normal leading-[1.6]">
                {step.description}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <a

            className="bg-black text-white text-[16px] font-semibold px-8 py-4 rounded-full transition-transform duration-200 hover:scale-[1.05] active:scale-[0.98]" href="https://preview--petal-prime.lovable.app/">

            That&apos;s it! Give it a go!
          </a>
        </div>
      </div>
    </section>);

};

export default HowItWorks;