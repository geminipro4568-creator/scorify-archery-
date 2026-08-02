import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/appData';
import { Download, Settings2, Target, CloudCheck, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Download':
        return <Download className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Settings2':
        return <Settings2 className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#8B5CF6]" />;
      case 'CloudCheck':
        return <CloudCheck className="w-6 h-6 text-[#8B5CF6]" />;
      default:
        return <Target className="w-6 h-6 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-bold text-[#C084FC] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
            Streamlined Workflow
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            4 Simple Steps to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#8B5CF6]">Master Your Scoring</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            From downloading the lightweight APK to analyzing your group distribution graphs in real time.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:border-[#8B5CF6]/40 transition-all flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-heading font-black text-3xl text-[#8B5CF6]/40 group-hover:text-[#8B5CF6] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-[#C084FC] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-[#C084FC] font-mono">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
