import React, { useState } from 'react';
import { ScorifyLogo } from './ScorifyLogo';
import { Heart, ShieldCheck, FileText, ArrowUp, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090D] border-t border-white/10 relative z-10 pt-16 pb-12 text-gray-400 text-xs font-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <ScorifyLogo size="md" animate />
            <p className="text-gray-400 font-light leading-relaxed max-w-sm">
              Scorify is a futuristic, dark-themed archery scoring application built for recurve, compound, barebow, and traditional archers worldwide.
            </p>
            <div className="flex items-center gap-2 text-[#C084FC] font-mono text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Android APK Release v2.4.0</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                Navigation
              </div>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#screenshots" className="hover:text-white transition-colors">Screenshots</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                Legal & Support
              </div>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">
                    Terms of Service
                  </button>
                </li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Developer</a></li>
              </ul>
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex md:justify-end items-center">
            <button
              onClick={scrollToTop}
              className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#8B5CF6]/50 transition-all flex items-center gap-2 font-bold text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#8B5CF6]" />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-light">
          <div>
            © 2026 SCORIFY. All rights reserved. Precision Archery Scoring System.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with precision for World Archery & FITA athletes</span>
          </div>
        </div>
      </div>

      {/* Modal for Privacy / Terms */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#111118] backdrop-blur-xl rounded-3xl p-6 border border-white/10 space-y-4 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-heading font-black text-xl text-white tracking-tight">
              {modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>

            <div className="text-xs text-gray-300 space-y-3 leading-relaxed font-light">
              {modalType === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Offline Data Ownership:</strong> Scorify respects your privacy. All archery scores, target impact coordinates, and session logs recorded in the app are stored locally on your device.
                  </p>
                  <p>
                    <strong>2. Cloud Backup:</strong> When enabled by the user, optional cloud synchronization connects directly to your personal Google Drive or Firebase account. No score data is sold to third parties.
                  </p>
                  <p>
                    <strong>3. Permissions:</strong> Scorify requires minimal Android permissions (storage access for exporting PDF scorecards and optional network access for World Archery RSS news feeds).
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. License:</strong> Scorify is provided free of charge for personal practice, club coaching, and official tournament scoring use.
                  </p>
                  <p>
                    <strong>2. Accuracy & Usage:</strong> Scorify provides automated end calculations and group center estimation. Users are advised to double-check official paper scorecards during sanctioned Olympic trials.
                  </p>
                  <p>
                    <strong>3. APK Distribution:</strong> Please download official Scorify Android APK builds only from this official landing website (`scorifyapp.com`).
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => setModalType(null)}
              className="w-full py-3 bg-[#8B5CF6] hover:bg-[#A855F7] text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
