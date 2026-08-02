import React, { useState } from 'react';
import { Target, Grid, BarChart2, Undo2, Timer, Sun, Moon, Lock, Search, RefreshCw, Layers } from 'lucide-react';

export const KeypadScoringScreen: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<{ end: number; arrow: number }>({ end: 1, arrow: 1 });
  const [scores, setScores] = useState<Record<string, string>>({
    '1-1': 'X',
    '1-2': '10',
    '1-3': '9',
    '1-4': '9',
    '1-5': '8',
    '1-6': '7',
  });

  const handleKeyPress = (val: string) => {
    const key = `${selectedCell.end}-${selectedCell.arrow}`;
    setScores(prev => ({ ...prev, [key]: val }));
    // Move to next arrow
    if (selectedCell.arrow < 6) {
      setSelectedCell(prev => ({ ...prev, arrow: prev.arrow + 1 }));
    } else if (selectedCell.end < 6) {
      setSelectedCell({ end: selectedCell.end + 1, arrow: 1 });
    }
  };

  return (
    <div className="w-full h-full bg-[#0A0A0E] text-white flex flex-col justify-between select-none font-sans overflow-hidden text-xs">
      {/* Top Header Bar */}
      <div className="px-3 py-2 bg-[#12121A] border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300">
            <Layers className="w-3.5 h-3.5" />
          </button>
          <div>
            <div className="font-bold text-sm leading-tight text-white flex items-center gap-1.5">
              Round 08-01 14:02
            </div>
            <div className="text-[10px] text-gray-400">FITA • 122cm • 6 Ends</div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300">
            <Undo2 className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300">
            <Timer className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-amber-400">
            <Sun className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Archer Title & End Controls */}
      <div className="px-3 py-1.5 bg-[#0E0E14] flex items-center justify-between border-b border-gray-800/60">
        <div className="font-semibold text-xs text-gray-200">Default Archer</div>
        <div className="flex items-center gap-2">
          <div className="flex bg-gray-800 p-0.5 rounded-md">
            <button className="p-1 rounded bg-[#8B5CF6] text-white">
              <Target className="w-3 h-3" />
            </button>
            <button className="p-1 rounded text-gray-400">
              <Grid className="w-3 h-3" />
            </button>
          </div>
          <div className="text-[10px] text-gray-300 font-mono">E1/6 &gt;</div>
        </div>
      </div>

      {/* Scoring Grid Table */}
      <div className="px-2 py-1 flex-1 overflow-auto">
        <div className="w-full border border-gray-800 rounded bg-black">
          <div className="grid grid-cols-8 bg-[#161622] text-gray-400 font-mono text-[10px] text-center border-b border-gray-800 py-1">
            <span>End</span>
            <span>A1</span>
            <span>A2</span>
            <span>A3</span>
            <span>A4</span>
            <span>A5</span>
            <span>A6</span>
            <span>Tot</span>
          </div>
          {[1, 2, 3, 4, 5, 6].map(endNum => (
            <div key={endNum} className="grid grid-cols-8 border-b border-gray-900 text-center items-center py-1 font-mono text-xs">
              <span className="text-gray-400 font-semibold">{endNum}</span>
              {[1, 2, 3, 4, 5, 6].map(arrowNum => {
                const key = `${endNum}-${arrowNum}`;
                const val = scores[key] || '';
                const isSelected = selectedCell.end === endNum && selectedCell.arrow === arrowNum;
                return (
                  <button
                    key={arrowNum}
                    onClick={() => setSelectedCell({ end: endNum, arrow: arrowNum })}
                    className={`h-6 mx-0.5 rounded flex items-center justify-center font-bold text-[11px] transition-all ${
                      isSelected ? 'border-2 border-red-500 bg-red-950/40' : 'bg-gray-900 text-gray-200'
                    }`}
                  >
                    {val}
                  </button>
                );
              })}
              <span className="text-amber-400 font-bold">
                {[1, 2, 3, 4, 5, 6].reduce((acc, a) => {
                  const v = scores[`${endNum}-${a}`];
                  if (v === 'X' || v === '10') return acc + 10;
                  if (v === 'M') return acc;
                  return acc + (parseInt(v) || 0);
                }, 0)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Color-Coded Tactile Keypad */}
      <div className="p-2 bg-[#0E0E14] border-t border-gray-800 grid grid-cols-4 gap-1.5">
        <button onClick={() => handleKeyPress('X')} className="h-10 bg-amber-400 text-black font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">X</button>
        <button onClick={() => handleKeyPress('10')} className="h-10 bg-amber-400 text-black font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">10</button>
        <button onClick={() => handleKeyPress('9')} className="h-10 bg-amber-400 text-black font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">9</button>
        <button onClick={() => handleKeyPress('8')} className="h-10 bg-red-600 text-white font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">8</button>

        <button onClick={() => handleKeyPress('7')} className="h-10 bg-red-600 text-white font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">7</button>
        <button onClick={() => handleKeyPress('6')} className="h-10 bg-sky-500 text-white font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">6</button>
        <button onClick={() => handleKeyPress('5')} className="h-10 bg-sky-500 text-white font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">5</button>
        <button onClick={() => handleKeyPress('4')} className="h-10 bg-gray-800 text-white font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">4</button>

        <button onClick={() => handleKeyPress('3')} className="h-10 bg-gray-900 border border-gray-700 text-white font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">3</button>
        <button onClick={() => handleKeyPress('2')} className="h-10 bg-gray-100 text-black font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">2</button>
        <button onClick={() => handleKeyPress('1')} className="h-10 bg-gray-100 text-black font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">1</button>
        <button onClick={() => handleKeyPress('M')} className="h-10 bg-slate-700 text-gray-200 font-extrabold text-base rounded hover:brightness-110 active:scale-95 transition-all shadow">M</button>
      </div>

      {/* Details Bar */}
      <div className="px-3 py-1 bg-[#12121A] flex items-center justify-between border-t border-gray-800">
        <div className="flex items-center gap-3">
          <Lock className="w-3.5 h-3.5 text-gray-400" />
          <button className="px-3 py-1 bg-white text-black font-bold rounded-full text-[10px]">DETAILS</button>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-red-400 font-bold text-xs">✕</button>
          <Search className="w-3.5 h-3.5 text-gray-400" />
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
