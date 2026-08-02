import React, { useState } from 'react';
import { APP_SCREENS } from '../data/appData';
import { PhoneMockup } from './PhoneMockup';
import { ScreenId } from '../types';
import { Sparkles, CheckCircle2, ChevronRight, Smartphone } from 'lucide-react';

export const AppShowcaseSection: React.FC = () => {
  const [selectedScreenId, setSelectedScreenId] = useState<ScreenId>('keypad-scoring');

  const currentScreen = APP_SCREENS.find(s => s.id === selectedScreenId) || APP_SCREENS[0];

  return (
    <section id="screenshots" className="py-20 md:py-32 relative z-10 bg-[#09090D]/80 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[10px] font-bold text-[#C084FC] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
            Interface Showcase
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Designed For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#8B5CF6]">Pure Performance</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Explore every corner of Scorify. From rapid color keypad scoring to FITA target face plotting and tournament timers.
          </p>
        </div>

        {/* Tab Pills Bar */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {APP_SCREENS.map(sc => {
            const active = sc.id === selectedScreenId;
            return (
              <button
                key={sc.id}
                onClick={() => setSelectedScreenId(sc.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                  active
                    ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/40 scale-105'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:border-[#8B5CF6]/30'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>{sc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Screen Spotlight View */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <PhoneMockup
              activeScreen={selectedScreenId}
              glowColor="rgba(139, 92, 246, 0.45)"
            />
          </div>

          {/* Right Side: Detailed Module Breakdown */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#C084FC] text-[10px] uppercase tracking-[0.2em] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentScreen.badge}</span>
            </div>

            <div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                {currentScreen.title}
              </h3>
              <div className="text-sm font-semibold text-[#C084FC] mt-1">
                {currentScreen.subtitle}
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
              {currentScreen.tagline}
            </p>

            <div className="p-4 bg-black/40 border border-white/10 rounded-2xl text-xs text-gray-300 space-y-2">
              <div className="font-bold text-white uppercase text-[10px] tracking-widest text-[#C084FC]">
                Key Architecture & Function
              </div>
              <p className="leading-relaxed font-light">{currentScreen.description}</p>
            </div>

            {/* Feature Checklist Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Sub-Second Response</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>OLED Daylight Mode</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Full Offline Sync</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Export PDF & CSV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
