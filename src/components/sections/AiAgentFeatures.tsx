import React from 'react';
import { motion } from 'framer-motion';

const tags = [
  { label: 'AI Resume Builder', bg: '#E8F4FD', color: '#0099FF', border: '#B8DFFB' },
  { label: 'Cover Letter Generator', bg: '#FDE8E8', color: '#DC2626', border: '#FBBBB8' },
  { label: 'Interview Preparation', bg: '#F3F4F6', color: '#6B7280', border: '#D1D5DB' },
  { label: 'Compatibility Analysis', bg: '#FEF9E7', color: '#B45309', border: '#FDE68A' },
  { label: 'AI Job Application Tracker', bg: '#E8F4FD', color: '#0099FF', border: '#B8DFFB' },
  { label: 'and more ...', bg: '#F3F4F6', color: '#6B7280', border: '#D1D5DB' },
];

const AiAgentFeatures = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="container mx-auto max-w-[1200px] px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-[#0099FF] text-[14px] font-semibold mb-4 tracking-tight">Simply brilliant.</p>
          <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#1A1A1A] leading-[1.2] mb-6 max-w-[800px]">
            More than a resume builder. <br className="hidden md:block" />
            An AI Job Hunt Agent.
          </h2>
          <p className="text-[#666666] text-[18px] leading-[1.6] max-w-[700px]">
            JobExCV is the most intelligent AI in the market that automates every step of your application while giving you personalised insights to maximise your chances with minimal effort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Main Large Card */}
          <motion.div
            className="bg-[#F9F9F7] rounded-[12px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div>
              <div className="mb-8">
                <h3 className="text-[24px] font-bold text-[#1A1A1A] mb-4">End-to-End Solution.</h3>
                <p className="text-[#666666] text-[18px] leading-[1.6] mb-8">
                  Prepares everything you possibly need with your job application in a one-click streamline experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 rounded-full text-[13px] font-semibold"
                      style={{ backgroundColor: tag.bg, color: tag.color, borderWidth: 1, borderColor: tag.border }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 + i * 0.1 }}
                    >
                      {tag.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <motion.div
              className="bg-white border border-[#E5E5E5] rounded-[12px] p-8 hover:shadow-soft transition-all duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-[22px] font-bold text-[#1A1A1A] mb-3">As Thoughtful As A Human.</h3>
              <p className="text-[#666666] text-[16px] leading-[1.6]">
                JobExCV gives you human-level analysis and feedback, and guide that catches what you missed for perfect applications.
              </p>
            </motion.div>
            <motion.div
              className="bg-white border border-[#E5E5E5] rounded-[12px] p-8 hover:shadow-soft transition-all duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            >
              <h3 className="text-[22px] font-bold text-[#1A1A1A] mb-3">Perfectly Tailored, Every Time.</h3>
              <p className="text-[#666666] text-[16px] leading-[1.6]">
                Analyzes each job and highlights your most relevant experiences that perfectly match what employers want.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAgentFeatures;
