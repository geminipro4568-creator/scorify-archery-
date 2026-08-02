import React from 'react';
import { Target, Grid, BarChart2, Undo2, Timer, Sun, ArrowLeft } from 'lucide-react';

export const StatisticsScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#09090D] text-white flex flex-col justify-between select-none font-sans overflow-hidden text-xs">
      {/* Top Header Bar */}
      <div className="px-3 py-2 bg-[#12121A] border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300">
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <div>
            <div className="font-bold text-sm leading-tight text-white">Round 08-01 14:02</div>
            <div className="text-[10px] text-gray-400">FITA • 122cm • 6 Ends</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300"><Undo2 className="w-3.5 h-3.5" /></button>
          <button className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300"><Timer className="w-3.5 h-3.5" /></button>
          <button className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-amber-400"><Sun className="w-3.5 h-3.5" /></button>
        </div>
      </div>

      {/* Archer Title */}
      <div className="px-3 py-1.5 bg-[#0E0E14] border-b border-gray-800/60">
        <span className="px-3 py-1 bg-white text-black font-bold rounded-lg text-xs">Default Archer</span>
      </div>

      {/* Main Stats Body */}
      <div className="p-3 flex-1 overflow-y-auto space-y-3">
        {/* Metric Cards Top */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 bg-[#12121A] border border-gray-800 rounded-xl space-y-1">
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">TOTAL SCORE</div>
            <div className="text-2xl font-extrabold text-white">284</div>
            <div className="text-[10px] text-gray-500">logged pts</div>
          </div>
          <div className="p-3 bg-[#12121A] border border-gray-800 rounded-xl space-y-1">
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">AVG PER END</div>
            <div className="text-2xl font-extrabold text-amber-400">47.3</div>
            <div className="text-[10px] text-gray-500">Avg/Shot: 7.88</div>
          </div>
        </div>

        {/* Hit Zone Distribution Box */}
        <div className="p-3 bg-[#12121A] border border-gray-800 rounded-xl space-y-3">
          <div className="font-bold text-xs text-white tracking-wider uppercase border-b border-gray-800/80 pb-2">
            HIT ZONE DISTRIBUTION
          </div>

          {/* Gold Zones */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="flex items-center gap-1.5 font-bold text-amber-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                Gold Zones (X, 10, 9)
              </span>
              <span className="text-gray-400">18 arrow(s) (50%)</span>
            </div>
            <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: '50%' }} />
            </div>
          </div>

          {/* Red Zones */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="flex items-center gap-1.5 font-bold text-red-500">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                Red Zones (8, 7)
              </span>
              <span className="text-gray-400">12 arrow(s) (33.3%)</span>
            </div>
            <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: '33.3%' }} />
            </div>
          </div>

          {/* Blue Zones */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="flex items-center gap-1.5 font-bold text-sky-400">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                Blue Zones (6, 5)
              </span>
              <span className="text-gray-400">4 arrow(s) (11.1%)</span>
            </div>
            <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-sky-400 rounded-full" style={{ width: '11.1%' }} />
            </div>
          </div>

          {/* Black Zones */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="flex items-center gap-1.5 font-bold text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                Black Zones (4, 3)
              </span>
              <span className="text-gray-400">2 arrow(s) (5.6%)</span>
            </div>
            <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-gray-400 rounded-full" style={{ width: '5.6%' }} />
            </div>
          </div>

          {/* White Zones */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="flex items-center gap-1.5 font-bold text-gray-200">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                White Zones (2, 1)
              </span>
              <span className="text-gray-400">0 arrow(s) (0%)</span>
            </div>
            <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: '0%' }} />
            </div>
          </div>

          {/* Misses */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="flex items-center gap-1.5 font-bold text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                Misses (M)
              </span>
              <span className="text-gray-400">0 arrow(s) (0%)</span>
            </div>
            <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full bg-slate-600 rounded-full" style={{ width: '0%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom App Navigation */}
      <div className="grid grid-cols-3 bg-[#09090D] border-t border-gray-800 py-2 text-center text-[10px] font-semibold">
        <div className="flex flex-col items-center text-gray-400">
          <Target className="w-4 h-4 mb-0.5" />
          <span>Scoring</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Grid className="w-4 h-4 mb-0.5" />
          <span>Scorecard</span>
        </div>
        <div className="flex flex-col items-center text-[#8B5CF6]">
          <BarChart2 className="w-4 h-4 mb-0.5" />
          <span>Statistics</span>
        </div>
      </div>
    </div>
  );
};
