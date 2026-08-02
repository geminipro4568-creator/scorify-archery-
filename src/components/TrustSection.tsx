import React from 'react';
import { TRUST_ITEMS } from '../data/appData';
import { Award, GraduationCap, Target, Users, CheckCircle2, Trophy, Zap, Timer, Smartphone } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Timer':
        return <Timer className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Medal':
        return <Award className="w-6 h-6 text-[#8B5CF6]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#8B5CF6]" />;
      default:
        return <Target className="w-6 h-6 text-[#8B5CF6]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 relative z-10 border-t border-white/10 bg-[#09090D]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-[10px] font-bold text-[#C084FC] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
            Trusted Precision
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Built for Archers, Built by Archers
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Whether you are shooting Olympic 70m rounds, coaching junior academies, or shooting your first target end.
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:border-[#8B5CF6]/40 transition-all flex flex-col justify-between space-y-4 group relative overflow-hidden"
            >
              {/* Corner Glow Accent */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#8B5CF6]/10 rounded-full blur-xl group-hover:bg-[#8B5CF6]/20 transition-all" />

              <div className="space-y-4">
                <div className="text-[#8B5CF6] mb-3">
                  {getIcon(item.icon)}
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white mb-1 group-hover:text-[#C084FC] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#C084FC]/90">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
