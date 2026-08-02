import React from 'react';
import { Download, ShieldCheck, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScorifyLogo } from './ScorifyLogo';

interface DownloadSectionProps {
  onDownloadClick: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onDownloadClick }) => {
  return (
    <section id="download" className="py-20 md:py-32 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative rounded-[36px] overflow-hidden p-8 sm:p-12 md:p-16 border border-white/10 bg-white/5 backdrop-blur-2xl text-center space-y-8">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#8B5CF6]/10 via-[#4C1D95]/10 to-transparent pointer-events-none" />

          {/* Logo */}
          <div className="flex justify-center scale-110">
            <ScorifyLogo size="lg" animate />
          </div>

          {/* Heading */}
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Ready to Upgrade Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#8B5CF6]">Archery Practice?</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-light">
              Download the official Scorify APK directly to your Android device and start logging arrows with millimetric precision.
            </p>
          </div>

          {/* Download Action Box */}
          <div className="max-w-md mx-auto space-y-4 relative z-10">
            <button
              onClick={onDownloadClick}
              className="w-full py-5 rounded-[18px] bg-[#8B5CF6] hover:bg-[#A855F7] text-white font-bold text-base tracking-wide flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(139,92,246,0.4)] transition-all"
            >
              <Download className="w-5 h-5 stroke-[2.5]" />
              <span>Download Scorify APK</span>
            </button>

            {/* Spec Details Pill */}
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400 font-mono pt-1">
              <span className="flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-[#C084FC]" /> Version 2.4.0
              </span>
              <span>•</span>
              <span>Size: 11.8 MB</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" /> Safe Download
              </span>
            </div>
          </div>

          {/* Guarantees row */}
          <div className="pt-6 border-t border-white/10 max-w-xl mx-auto grid grid-cols-3 gap-2 text-xs text-gray-400">
            <div className="flex items-center justify-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
              <span>No Forced Ads</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
              <span>Offline Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
