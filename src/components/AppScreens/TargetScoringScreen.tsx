import React, { useState } from 'react';
import { Target, Grid, BarChart2, Undo2, Timer, Sun, Plus, Minus, Maximize2, Layers } from 'lucide-react';

export const TargetScoringScreen: React.FC = () => {
  const [arrows, setArrows] = useState([
    { x: 50, y: 50, score: 'X' },
    { x: 52, y: 48, score: '10' },
    { x: 47, y: 53, score: '10' },
    { x: 56, y: 44, score: '9' },
    { x: 42, y: 58, score: '9' },
  ]);

  const handleTargetClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setArrows(prev => [...prev, { x, y, score: '10' }]);
  };

  return (
    <div className="w-full h-full bg-[#09090D] text-white flex flex-col justify-between select-none font-sans overflow-hidden text-xs">
      {/* Top Header Bar */}
      <div className="px-3 py-2 bg-[#12121A] border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300">
            <Layers className="w-3.5 h-3.5" />
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

      {/* Target Face View */}
      <div className="relative flex-1 bg-black flex items-center justify-center p-3">
        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-1.5">
          <button className="w-8 h-8 rounded-lg bg-gray-900/90 border border-gray-700 flex items-center justify-center text-purple-400 backdrop-blur">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute bottom-4 right-4 z-10 flex flex-col bg-gray-900/90 border border-gray-700 rounded-lg p-1 gap-1 backdrop-blur">
          <button className="p-1.5 text-gray-200 hover:text-white"><Plus className="w-4 h-4" /></button>
          <div className="w-full h-px bg-gray-800" />
          <button className="p-1.5 text-gray-200 hover:text-white"><Minus className="w-4 h-4" /></button>
        </div>

        {/* Target SVG */}
        <div className="relative w-64 h-64 max-w-full aspect-square">
          <svg
            viewBox="0 0 100 100"
            onClick={handleTargetClick}
            className="w-full h-full cursor-crosshair rounded-full shadow-2xl"
          >
            {/* White ring (1, 2) */}
            <circle cx="50" cy="50" r="49" fill="#FFFFFF" stroke="#000000" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="44" fill="#FFFFFF" stroke="#000000" strokeWidth="0.5" />
            
            {/* Black ring (3, 4) */}
            <circle cx="50" cy="50" r="39" fill="#181824" stroke="#FFFFFF" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="34" fill="#181824" stroke="#FFFFFF" strokeWidth="0.3" />
            
            {/* Blue ring (5, 6) */}
            <circle cx="50" cy="50" r="29" fill="#0284C7" stroke="#000000" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="24" fill="#0284C7" stroke="#000000" strokeWidth="0.3" />
            
            {/* Red ring (7, 8) */}
            <circle cx="50" cy="50" r="19" fill="#DC2626" stroke="#000000" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="14" fill="#DC2626" stroke="#000000" strokeWidth="0.3" />
            
            {/* Gold ring (9, 10, X) */}
            <circle cx="50" cy="50" r="9" fill="#EAB308" stroke="#000000" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="4.5" fill="#EAB308" stroke="#000000" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="2" fill="#EAB308" stroke="#000000" strokeWidth="0.3" />
            
            {/* Center Crosshair */}
            <line x1="48" y1="50" x2="52" y2="50" stroke="#000000" strokeWidth="0.4" />
            <line x1="50" y1="48" x2="50" y2="52" stroke="#000000" strokeWidth="0.4" />

            {/* Plotted Arrow Points */}
            {arrows.map((arr, idx) => (
              <g key={idx} transform={`translate(${arr.x}, ${arr.y})`}>
                <circle r="1.8" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="0.6" className="animate-ping opacity-75" />
                <circle r="1.5" fill="#A855F7" stroke="#FFFFFF" strokeWidth="0.5" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Mini Scoring Grid at bottom */}
      <div className="bg-[#12121A] p-2 border-t border-gray-800">
        <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
          <span>End 1 / 6 • 5 Arrows Plotted</span>
          <span className="text-emerald-400 font-bold">Total: 48 pts</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {arrows.map((a, i) => (
            <div key={i} className="px-2.5 py-1 bg-gray-900 border border-purple-500/30 rounded font-bold text-amber-400 text-xs">
              {a.score}
            </div>
          ))}
          <div className="px-2.5 py-1 bg-gray-900/50 border border-dashed border-gray-700 rounded text-gray-500 text-xs">
            + Tap Target
          </div>
        </div>
      </div>

      {/* Bottom App Navigation */}
      <div className="grid grid-cols-3 bg-[#09090D] border-t border-gray-800 py-2 text-center text-[10px] font-semibold">
        <div className="flex flex-col items-center text-[#8B5CF6]">
          <Target className="w-4 h-4 mb-0.5" />
          <span>Scoring</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
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
