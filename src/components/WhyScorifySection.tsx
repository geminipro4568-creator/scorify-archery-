import React from 'react';
import { WHY_CHECKLIST } from '../data/appData';
import { PhoneMockup } from './PhoneMockup';
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export const WhyScorifySection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative z-10 bg-[#09090D]/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Phone Mockup with Statistics Screen */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup
              activeScreen="statistics"
              glowColor="rgba(139, 92, 246, 0.45)"
            />
          </div>

          {/* Right Column: Key Benefits Checklist */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-[#C084FC] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
                The Scorify Advantage
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                Ditch Paper Scorecards. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#8B5CF6]">Focus Purely On Form.</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                Paper scorecards get soaked in the rain, pencil tips break, and calculating total scores manually introduces errors. Scorify automates the math so you can concentrate on your release.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHECKLIST.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-start gap-3 hover:border-[#8B5CF6]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Callout Banner */}
            <div className="p-5 rounded-3xl bg-gradient-to-r from-[#8B5CF6]/20 to-[#C084FC]/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Ready to elevate your scores?</div>
                  <div className="text-gray-300 font-light">Download the Android package in under 15 seconds.</div>
                </div>
              </div>
              <a
                href="#download"
                className="px-5 py-2.5 bg-[#8B5CF6] text-white font-bold text-xs rounded-2xl hover:bg-[#A855F7] transition-colors flex-shrink-0 uppercase tracking-wider"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
