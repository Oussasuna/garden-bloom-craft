import React from 'react';
import { motion } from 'framer-motion';
const features = [
  {
    id: 'ai-resume',
    badge: 'Perfect application in seconds',
    badgeColor: '#0099FF',
    title: 'One-click Perfect AI Resume.',
    description: 'Land more interviews with an AI resume tailored for every job that highlights your relevant skills based on your profile.',
    bullets: [
      'Keyword matched to job description',
      'ATS optimised formatting',
      'Save 60 minutes per application',
      'Perfectly formatted professional templates',
    ],
    cta: 'Create Your Perfect Application',
    image: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc8d0ee7cdfc9bb599_20250724_FR_demo_resume_buiilder.png',
    imageAlt: 'AI Resume Builder screenshot',
  },
  {
    id: 'job-tracker',
    badge: 'Stay organized, stay ahead',
    badgeColor: '#FF4D00',
    title: 'Zero-effort AI Job Application Tracker.',
    description: 'Best application tracker on the market that automatically organises key information from the job description with AI.',
    bullets: [
      'No manual data entry with spreadsheets',
      'Action checklists to help you stay ahead',
      'Identifies key skills and requirements',
      'Visual pipeline of all your applications',
    ],
    cta: 'Organize your job search',
    image: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbc7f4e061c68a6911_20250724_FR_demo_application_tracker.png',
    imageAlt: 'Job Application Tracker screenshot',
  },
  {
    id: 'match-analysis',
    badge: 'Analyze, achieve and Advance',
    badgeColor: '#22C55E',
    title: 'Comprehensive AI Job Match Analysis.',
    description: 'Maximise your chance of success with each application by unlocking exclusive insights about yourself and the job.',
    bullets: [
      'Compatibility score for every application',
      'Strengths and weaknesses breakdown',
      'Recommended actions to improve your chances',
      'Skill gap identification',
    ],
    cta: 'Create Your Perfect Application',
    image: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedbbc336acac57068aa_20250724_FR_demo_compatibility.png',
    imageAlt: 'Job Match Analysis screenshot',
  },
  {
    id: 'interview-prep',
    badge: 'Ace your interview with confidence',
    badgeColor: '#0099FF',
    title: 'AI Interview Prep & Company Research.',
    description: 'Impress your interviewer by practicing AI predicted interview questions, concepts with automated company research.',
    bullets: [
      'AI company research that shows motivation',
      'Practice questions with AI sample responses',
      'Recommended questions for you to ask',
      'Key concept explanations for the role',
    ],
    cta: 'Create Your Perfect Application',
    image: 'https://cdn.prod.website-files.com/67065b18171e78a558433e90/6881eedc2d46abe5ce23d39a_20250724_FR_demo_interview.png',
    imageAlt: 'Interview Prep screenshot',
  },
];

export default function FeatureDeepDive() {
  return (
    <section className="py-[80px] md:py-[100px] bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="space-y-20 md:space-y-28">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
                className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
              >
                <div className="flex-1 w-full">
                  <div className="text-[13px] font-bold mb-3 flex items-center gap-2" style={{ color: feature.badgeColor }}>
                    <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: feature.badgeColor }} />
                    {feature.badge}
                  </div>
                  <h3 className="text-[28px] md:text-[32px] font-extrabold text-[#1a1a1a] leading-[1.2] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#666666] text-[17px] leading-[1.6] mb-6">{feature.description}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-[#1a1a1a]">
                        <span className="text-black mt-0.5 flex-shrink-0">✦</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="https://app.jobexcv.ai"
                    className="inline-block bg-black text-white text-[15px] font-semibold px-7 py-3.5 rounded-full hover:opacity-90"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    {feature.cta}
                  </motion.a>
                </div>
                <motion.div
                  className="flex-1 w-full"
                  initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 + 0.2 }}
                >
                  <div className="relative w-full rounded-[16px] overflow-hidden border border-[#e5e5e5] shadow-soft bg-[#f9f9f7]">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
