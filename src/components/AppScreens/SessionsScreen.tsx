import React from 'react';
import { Target, Search, Moon, EyeOff, MoreVertical, Plus, Clock, Newspaper, Timer } from 'lucide-react';

export const SessionsScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0A0A0E] text-white flex flex-col justify-between select-none font-sans overflow-hidden text-xs">
      {/* Top Header */}
      <div className="px-4 py-3 bg-[#0A0A0E] border-b border-gray-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full border border-purple-500/60 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
          </div>
          <span className="font-heading font-extrabold text-base tracking-[0.2em] text-white">SCORIFY</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <Search className="w-4 h-4" />
          <Moon className="w-4 h-4" />
        </div>
      </div>

      {/* Main Scroll Content */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {/* Guest Mode Banner */}
        <div className="p-3.5 rounded-xl bg-pink-950/40 border border-pink-500/30 flex items-start justify-between gap-2">
          <div className="flex gap-2.5">
            <EyeOff className="w-4 h-4 text-pink-300 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-xs text-pink-200">Guest Mode - Local Only</div>
              <div className="text-[10px] text-pink-300/80 mt-1 leading-relaxed">
                Your scores are stored locally. Connect a Google Account to secure your scores to Google Drive and Firebase Console.
              </div>
            </div>
          </div>
          <button className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-[10px] whitespace-nowrap flex-shrink-0 shadow">
            Sync Now
          </button>
        </div>

        {/* Section Heading */}
        <div className="text-[11px] font-bold tracking-wider text-gray-400 uppercase pt-1">
          Recent Sessions
        </div>

        {/* Session Card 1 */}
        <div className="p-3 bg-[#12121A] border border-gray-800/90 rounded-xl space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm text-white">Round 08-01 14:02</div>
            <MoreVertical className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="text-[10px] text-gray-400 font-mono">
            FITA • 122cm • 6 Ends x 6 Arrows
          </div>
          <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 border-t border-gray-800/60">
            <span className="flex items-center gap-1">👤 Default Archer</span>
            <span>Aug 01, 2026</span>
          </div>
        </div>

        {/* Session Card 2 */}
        <div className="p-3 bg-[#12121A] border border-gray-800/90 rounded-xl space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm text-white">pratice</div>
            <MoreVertical className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="text-[10px] text-gray-400 font-mono">
            FITA • 122cm • 6 Ends x 6 Arrows
          </div>
          <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 border-t border-gray-800/60">
            <span className="flex items-center gap-1">👤 vir</span>
            <span>Aug 01, 2026</span>
          </div>
        </div>

        {/* Session Card 3 */}
        <div className="p-3 bg-[#12121A] border border-gray-800/90 rounded-xl space-y-1.5 opacity-80">
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm text-white">Round 07-31 21:22</div>
            <MoreVertical className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="text-[10px] text-gray-400 font-mono">
            FITA • 122cm • 6 Ends x 6 Arrows
          </div>
          <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 border-t border-gray-800/60">
            <span className="flex items-center gap-1">👤 Default Archer</span>
            <span>Jul 31, 2026</span>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="relative px-3 pb-2 flex justify-end">
        <button className="px-4 py-2.5 bg-white text-black font-extrabold rounded-full text-xs shadow-xl flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-transform">
          <Plus className="w-4 h-4 stroke-[3]" /> NEW ROUND
        </button>
      </div>

      {/* Main Bottom Tabs */}
      <div className="grid grid-cols-3 bg-[#0E0E14] border-t border-gray-800 py-2 text-center text-[10px] font-semibold">
        <div className="flex flex-col items-center text-[#8B5CF6]">
          <Clock className="w-4 h-4 mb-0.5" />
          <span>Sessions</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Newspaper className="w-4 h-4 mb-0.5" />
          <span>Archery News</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Timer className="w-4 h-4 mb-0.5" />
          <span>Timers</span>
        </div>
      </div>
    </div>
  );
};
