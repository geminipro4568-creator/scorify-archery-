import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Settings, Sun, Clock, Newspaper, Timer as TimerIcon } from 'lucide-react';

export const TimerScreen: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [phase, setPhase] = useState<'PREPARATION' | 'SHOOTING'>('PREPARATION');

  useEffect(() => {
    let timer: any;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      if (phase === 'PREPARATION') {
        setPhase('SHOOTING');
        setTimeLeft(120);
      } else {
        setIsRunning(false);
        setPhase('PREPARATION');
        setTimeLeft(10);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, phase]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setPhase('PREPARATION');
    setTimeLeft(10);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="w-full h-full bg-[#0A0A0E] text-white flex flex-col justify-between select-none font-sans overflow-hidden text-xs">
      {/* Top Header Bar */}
      <div className="px-4 py-2.5 bg-[#0A0A0E] border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          </div>
          <span className="font-heading font-extrabold text-sm tracking-widest text-white">SCORIFY</span>
        </div>
        <Sun className="w-4 h-4 text-gray-400" />
      </div>

      {/* Main Timer Display */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="text-[11px] font-bold text-gray-400 tracking-[0.25em] uppercase mb-4">
          SCORIFY SPORT TIMER
        </div>

        {/* Circular Ring Timer */}
        <div className="relative w-48 h-48 rounded-full border-4 border-white flex items-center justify-center my-2 shadow-2xl shadow-purple-900/30 bg-black">
          <div className="text-4xl font-extrabold tracking-tight font-mono text-white">
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="mt-4 font-heading font-extrabold text-xl tracking-widest uppercase text-white">
          {phase}
        </div>
        <div className="text-[10px] text-gray-400 mt-1">
          {isRunning ? 'Sequence in progress...' : 'Press START to begin sequence'}
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button className="w-10 h-10 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center text-gray-300 hover:text-white">
            <Settings className="w-4 h-4" />
          </button>

          <button
            onClick={toggleTimer}
            className="px-6 py-2.5 bg-white text-black font-extrabold rounded-full text-xs flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            {isRunning ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isRunning ? 'PAUSE' : 'START'}</span>
          </button>

          <button
            onClick={resetTimer}
            className="w-10 h-10 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center text-gray-300 hover:text-white"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Bottom Tabs */}
      <div className="grid grid-cols-3 bg-[#0E0E14] border-t border-gray-800 py-2 text-center text-[10px] font-semibold">
        <div className="flex flex-col items-center text-gray-400">
          <Clock className="w-4 h-4 mb-0.5" />
          <span>Sessions</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Newspaper className="w-4 h-4 mb-0.5" />
          <span>Archery News</span>
        </div>
        <div className="flex flex-col items-center text-[#8B5CF6]">
          <TimerIcon className="w-4 h-4 mb-0.5" />
          <span>Timers</span>
        </div>
      </div>
    </div>
  );
};
