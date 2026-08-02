import React, { useState } from 'react';
import { FEATURES } from '../data/appData';
import { Target, BarChart3, FileSpreadsheet, TrendingUp, Zap, Smartphone, ArrowRight, Sparkles } from 'lucide-react';
import { ScreenId } from '../types';
import { PhoneMockup } from './PhoneMockup';

interface FeaturesSectionProps {
  onSelectScreen?: (s: ScreenId) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = () => {
  const [activePreviewScreen, setActivePreviewScreen] = useState<ScreenId>('target-scoring');

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-6 h-6 text-purple-300" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-purple-300" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-purple-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-purple-300" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-purple-300" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-purple-300" />;
      default:
        return <Target className="w-6 h-6 text-purple-300" />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-32 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-bold text-[#C084FC] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
            Core Capability Suite
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Everything You Need To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#8B5CF6]">
              Track Every Arrow
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Engineered from the ground up for archers who demand millimetric accuracy, zero distraction, and real-time shooting analytics.
          </p>
        </div>

        {/* Two Column Layout: Feature Cards on Left, Interactive Phone Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Feature Grid (6 Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map(feat => {
              const isSelected = activePreviewScreen === feat.screenTarget;
              return (
                <div
                  key={feat.id}
                  onClick={() => feat.screenTarget && setActivePreviewScreen(feat.screenTarget)}
                  className={`p-6 rounded-3xl bg-white/5 backdrop-blur-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-4 group relative overflow-hidden ${
                    isSelected
                      ? 'border-[#8B5CF6] bg-white/10 shadow-[0_10px_30px_rgba(139,92,246,0.3)] scale-[1.02]'
                      : 'border-white/10 hover:border-[#8B5CF6]/40 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform">
                      {getFeatureIcon(feat.iconName)}
                    </div>
                    {feat.badge && (
                      <span className="text-[10px] font-bold text-[#C084FC] bg-[#8B5CF6]/10 px-2.5 py-1 rounded-full border border-[#8B5CF6]/20 uppercase tracking-widest">
                        {feat.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-white group-hover:text-[#C084FC] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#8B5CF6] group-hover:translate-x-1 transition-transform">
                    <span>Preview Interface</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Phone Screen Preview */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-[#C084FC] flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Live Interactive Preview
              </span>
              <p className="text-xs text-gray-400">Click any feature card to view its live screen</p>
            </div>

            <PhoneMockup
              activeScreen={activePreviewScreen}
              glowColor="rgba(139, 92, 246, 0.45)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
