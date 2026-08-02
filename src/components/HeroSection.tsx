import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { Download, Sparkles, Target, ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';
import { ScreenId } from '../types';

interface HeroSectionProps {
  onDownloadClick: () => void;
  onSelectScreen?: (s: ScreenId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDownloadClick }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#C084FC] font-bold mb-2">
              <span className="flex h-2 w-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span>Built for Archers, Built by Archers</span>
            </div>

            {/* Editorial Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black leading-[0.85] tracking-tighter text-white">
              Score Every <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#8B5CF6]">
                Shot Better.
              </span>
            </h1>

            {/* Editorial Subheadline */}
            <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              Scorify is the elite archery companion. Record scores, analyze arrow groupings, and dominate the range with a stunning, high-performance interface.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onDownloadClick}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] hover:brightness-110 rounded-[18px] font-bold text-sm text-white shadow-[0_10px_30px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-2.5 active:scale-95"
              >
                <span>Download Now</span>
                <Download className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-[18px] font-bold text-sm text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Full Feature Tour</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
            </div>

            {/* Quick Feature Highlights Strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                <span className="text-xs text-gray-300 font-medium">100% Offline</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                <span className="text-xs text-gray-300 font-medium">FITA Geometry</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                <span className="text-xs text-gray-300 font-medium">Zero Input Lag</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Floating Phone Mockup Container */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Animated Glow Rings behind Phone */}
            <div className="absolute w-[400px] sm:w-[480px] h-[400px] sm:h-[480px] border border-[#8B5CF6]/20 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] border border-[#8B5CF6]/10 rounded-full pointer-events-none" />

            {/* Floating Phone Mockup */}
            <div className="animate-float relative z-10">
              <PhoneMockup
                activeScreen="keypad-scoring"
                glowColor="rgba(139, 92, 246, 0.45)"
                allowSwitching
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
