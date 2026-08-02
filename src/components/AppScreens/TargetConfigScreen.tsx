import React, { useState } from 'react';
import { X, CheckCircle2, Plus, Minus, Target } from 'lucide-react';

export const TargetConfigScreen: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useState('122cm');
  const [ends, setEnds] = useState(6);
  const [shots, setShots] = useState(6);

  return (
    <div className="w-full h-full bg-[#09090D] text-white flex flex-col justify-between select-none font-sans overflow-hidden p-3 text-xs">
      {/* Modal Header */}
      <div className="flex items-center justify-between border-b border-gray-800 pb-2">
        <div className="font-heading font-extrabold text-sm text-white tracking-wider">
          ROUND CONFIGURATION
        </div>
        <button className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Target Options Scroll List */}
      <div className="flex-1 overflow-y-auto my-2 space-y-2 pr-1">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Target Face & Geometry
        </div>

        {/* Target Card 1: Standard 122cm */}
        <div
          onClick={() => setSelectedTarget('122cm')}
          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
            selectedTarget === '122cm'
              ? 'bg-purple-950/50 border-purple-500 shadow-lg shadow-purple-900/20'
              : 'bg-[#12121A] border-gray-800 hover:border-gray-700'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
              selectedTarget === '122cm' ? 'border-purple-400 bg-purple-500' : 'border-gray-600'
            }`}>
              {selectedTarget === '122cm' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
            </div>
            <div>
              <div className="font-bold text-xs text-white">Standard 122cm (10-Ring)</div>
              <div className="text-[10px] text-gray-400">10 Rings • Limit: 1 - 10</div>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center bg-black">
            <Target className="w-5 h-5 text-amber-400" />
          </div>
        </div>

        {/* Target Card 2: Standard 80cm */}
        <div
          onClick={() => setSelectedTarget('80cm')}
          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
            selectedTarget === '80cm'
              ? 'bg-purple-950/50 border-purple-500 shadow-lg shadow-purple-900/20'
              : 'bg-[#12121A] border-gray-800 hover:border-gray-700'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
              selectedTarget === '80cm' ? 'border-purple-400 bg-purple-500' : 'border-gray-600'
            }`}>
              {selectedTarget === '80cm' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
            </div>
            <div>
              <div className="font-bold text-xs text-white">Standard 80cm (10-Ring)</div>
              <div className="text-[10px] text-gray-400">10 Rings • Limit: 1 - 10</div>
            </div>
          </div>
        </div>

        {/* Target Card 3: Compound 80cm 6-Ring */}
        <div
          onClick={() => setSelectedTarget('compound')}
          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
            selectedTarget === 'compound'
              ? 'bg-purple-950/50 border-purple-500 shadow-lg shadow-purple-900/20'
              : 'bg-[#12121A] border-gray-800 hover:border-gray-700'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
              selectedTarget === 'compound' ? 'border-purple-400 bg-purple-500' : 'border-gray-600'
            }`}>
              {selectedTarget === 'compound' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
            </div>
            <div>
              <div className="font-bold text-xs text-white">Compound 80cm (6-Ring)</div>
              <div className="text-[10px] text-gray-400">6 Rings • Limit: 5 - 10 (Compound X)</div>
            </div>
          </div>
        </div>

        {/* Counters: Ends & Shots */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-2.5 bg-[#12121A] border border-gray-800 rounded-xl space-y-1">
            <div className="text-[10px] text-gray-400 font-bold">Number of Ends</div>
            <div className="flex items-center justify-between bg-black p-1 rounded-lg border border-gray-800">
              <button onClick={() => setEnds(Math.max(1, ends - 1))} className="p-1 text-gray-400 hover:text-white"><Minus className="w-3.5 h-3.5" /></button>
              <span className="font-bold text-white text-sm">{ends}</span>
              <button onClick={() => setEnds(ends + 1)} className="p-1 text-gray-400 hover:text-white"><Plus className="w-3.5 h-3.5" /></button>
            </div>
          </div>

          <div className="p-2.5 bg-[#12121A] border border-gray-800 rounded-xl space-y-1">
            <div className="text-[10px] text-gray-400 font-bold">Shots in End</div>
            <div className="flex items-center justify-between bg-black p-1 rounded-lg border border-gray-800">
              <button onClick={() => setShots(Math.max(1, shots - 1))} className="p-1 text-gray-400 hover:text-white"><Minus className="w-3.5 h-3.5" /></button>
              <span className="font-bold text-white text-sm">{shots}</span>
              <button onClick={() => setShots(shots + 1)} className="p-1 text-gray-400 hover:text-white"><Plus className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Actions */}
      <div className="pt-2 border-t border-gray-800 flex items-center justify-between gap-2">
        <button className="px-4 py-2 border border-gray-700 text-gray-300 font-bold rounded-xl text-xs">
          CANCEL
        </button>
        <button className="px-5 py-2 bg-white text-black font-extrabold rounded-full text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all">
          START ROUND
        </button>
      </div>
    </div>
  );
};
