import React, { useState } from 'react';
import { useI18n } from '@/contexts/I18nContext';

const faqItems = [
  {
    question: "Why do I need tailored job applications? Isn't one general resume enough?",
    answer: `Tailored job applications are crucial in today's competitive job market for several reasons:\n\n1. Stand out from the crowd: Generic resumes often get lost in the sea of applications.\n2. Beat Applicant Tracking Systems (ATS): Many companies use ATS to screen resumes.\n3. Show genuine interest: Customizing your application demonstrates that you've taken the time to understand the role.\n4. Address specific requirements: Each job has unique requirements.\n5. Increase interview chances: Tailored applications are more likely to impress recruiters.\n\nJobExCV AI makes this crucial tailoring process quick and effortless.`,
  },
  {
    question: "Is it cheating? Will my employer know?",
    answer: `No, using JobExCV is not cheating at all. It's a tool to help you present your true skills and experiences in the best possible light.\n\n1. We don't add false information: All content on your resume remains factual.\n2. It's about presentation, not fabrication.\n3. Tailored, not altered: We tailor your existing information to each job application.\n4. Industry-standard practice: Using tools to improve your resume is a common practice.\n\nRemember, JobExCV is about empowering you to showcase your true potential effectively.`,
  },
  {
    question: "Can I use JobExCV for different industries or job types?",
    answer: "Yes, our AI is designed to optimize your resume for various industries and job types. It adapts to the specific requirements of each job description you input, whether you're applying for tech, finance, healthcare, marketing, or any other field.",
  },
  {
    question: "How does JobExCV AI ensure my resume is ATS-friendly?",
    answer: "Our AI optimizes your resume by using industry-standard formatting, appropriate keywords from the job description, and a clean, easy-to-read layout that ATS systems can easily parse.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use bank-level encryption to protect your personal information and do not share it with third parties. Your data is stored securely and you can delete your account and all associated data at any time.",
  },
  {
    question: "Can I import my existing LinkedIn profile instead of uploading a resume?",
    answer: "LinkedIn profile import is coming soon! For now, you can manually input your information or upload a resume.",
  },
  {
    question: "Can I save different versions of my resume for future use?",
    answer: "Yes, JobExCV AI allows you to save multiple versions of your tailored resumes for future use.",
  },
  {
    question: "Can I edit the AI-generated documents?",
    answer: "Absolutely! You have full control to review and edit all generated content before using it.",
  },
  {
    question: "How can I write my own resume?",
    answer: "To write your own resume, start by choosing a clean, professional format. With JobExCV, you can upload your existing resume and our AI will help optimize it for each specific job application.",
  },
  {
    question: "What is the CV meaning?",
    answer: "CV stands for Curriculum Vitae. A CV is a comprehensive document that outlines your academic and professional history, typically more detailed than a resume.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useI18n();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8f7f5] py-[80px] md:py-[120px]">
      <div className="container mx-auto max-w-[1200px] px-6">
        <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-12 text-center">
          {t("Frequently Asked Questions")}
        </h2>
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] border border-[#e5e7eb] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
              >
                <h3 className="text-[17px] md:text-[19px] font-bold text-black pr-8 leading-[1.4]">
                  {t(item.question)}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="text-[15px] md:text-[16px] leading-[1.7] text-[#666666] whitespace-pre-line">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
