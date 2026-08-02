import React from 'react';
import { Target, Grid, BarChart2, Undo2, Timer, Sun, Lightbulb, ArrowLeft } from 'lucide-react';

export const ScorecardScreen: React.FC = () => {
  const scorecardRows = [
    { end: 'E1', arrows: ['X', '10', '9', '9', '8', '7'], tot: 53, cum: 53 },
    { end: 'E2', arrows: ['10', '10', '9', '8', '8', '6'], tot: 51, cum: 104 },
    { end: 'E3', arrows: ['X', '9', '9', '8', '7', '7'], tot: 49, cum: 153 },
    { end: 'E4', arrows: ['10', '9', '8', '8', '7', '6'], tot: 48, cum: 201 },
    { end: 'E5', arrows: ['9', '9', '8', '7', '6', '5'], tot: 44, cum: 245 },
    { end: 'E6', arrows: ['10', '9', '8', '7', '5', '0'], tot: 39, cum: 284 },
  ];

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

      {/* Archer Title & Hint */}
      <div className="p-3 bg-[#0E0E14] border-b border-gray-800/60 space-y-2">
        <span className="px-3 py-1 bg-white text-black font-bold rounded-lg text-xs">Default Archer</span>
        <div className="flex items-center gap-1.5 text-[10px] text-amber-300/90 bg-amber-950/30 px-2.5 py-1.5 rounded-lg border border-amber-500/20">
          <Lightbulb className="w-3.5 h-3.5 flex-shrink-0 text-amber-400" />
          <span>Tap any score cell to edit that arrow on the keypad.</span>
        </div>
      </div>

      {/* Scorecard Table */}
      <div className="p-2 flex-1 overflow-y-auto">
        <div className="w-full border border-gray-800 rounded-xl bg-[#12121A] overflow-hidden">
          <div className="grid grid-cols-10 bg-[#1A1A28] text-gray-400 font-mono text-[10px] font-bold text-center border-b border-gray-800 py-1.5 px-1">
            <span className="col-span-1">End</span>
            <span className="col-span-1">A1</span>
            <span className="col-span-1">A2</span>
            <span className="col-span-1">A3</span>
            <span className="col-span-1">A4</span>
            <span className="col-span-1">A5</span>
            <span className="col-span-1">A6</span>
            <span className="col-span-1 text-amber-400">Tot.</span>
            <span className="col-span-2 text-purple-400">Cum.</span>
          </div>

          {scorecardRows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-10 border-b border-gray-800/60 text-center items-center py-2 px-1 font-mono text-xs hover:bg-gray-800/40">
              <span className="col-span-1 font-bold text-gray-300">{row.end}</span>
              {row.arrows.map((a, i) => (
                <span key={i} className="col-span-1 font-bold bg-gray-900 border border-gray-800 mx-0.5 rounded py-0.5 text-gray-200">
                  {a}
                </span>
              ))}
              <span className="col-span-1 font-bold text-amber-400">{row.tot}</span>
              <span className="col-span-2 font-extrabold text-purple-300">{row.cum}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-3 bg-[#12121A] border-t border-gray-800 flex justify-between items-center">
        <div>
          <div className="text-[10px] text-gray-400 font-bold uppercase">TOTAL SCORE</div>
          <div className="text-xl font-extrabold text-white">284 pts</div>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-amber-400">Avg/End: 47.3</div>
          <div className="text-[10px] text-gray-400">Avg/Arrow: 7.88</div>
        </div>
      </div>

      {/* Bottom App Navigation */}
      <div className="grid grid-cols-3 bg-[#09090D] border-t border-gray-800 py-2 text-center text-[10px] font-semibold">
        <div className="flex flex-col items-center text-gray-400">
          <Target className="w-4 h-4 mb-0.5" />
          <span>Scoring</span>
        </div>
        <div className="flex flex-col items-center text-[#8B5CF6]">
          <Grid className="w-4 h-4 mb-0.5" />
          <span>Scorecard</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <BarChart2 className="w-4 h-4 mb-0.5" />
          <span>Statistics</span>
        </div>
      </div>
    </div>
  );
};
