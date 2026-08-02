import React, { useState } from 'react';
import { FAQS } from '../data/appData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('free');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 relative z-10 bg-[#09090D]/60 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] font-bold text-[#C084FC] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
            Got Questions?
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#8B5CF6]">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Everything you need to know about downloading, installing, and scoring with Scorify.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white/10 border-[#8B5CF6]/40 shadow-[0_10px_30px_rgba(139,92,246,0.2)]'
                    : 'bg-white/5 border-white/10 hover:border-[#8B5CF6]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-white"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 border-[#8B5CF6] text-[#C084FC]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-white/10 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
