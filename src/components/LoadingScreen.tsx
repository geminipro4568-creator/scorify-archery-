import React, { useEffect, useState } from 'react';
import { ScorifyLogo } from './ScorifyLogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 12;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#09090D] flex flex-col items-center justify-center p-4 transition-opacity duration-500">
      <div className="space-y-6 text-center max-w-xs w-full">
        <div className="flex justify-center scale-125">
          <ScorifyLogo size="xl" animate />
        </div>

        <div className="space-y-2 pt-4">
          <div className="text-xs font-mono text-purple-300 tracking-wider">
            INITIALIZING TARGET ENGINE... {progress}%
          </div>
          <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-purple-500/20">
            <div
              className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] transition-all duration-150 rounded-full shadow-lg shadow-purple-500/50"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="text-[11px] text-gray-500 font-mono tracking-widest uppercase">
          Precision Archery Scoring System
        </p>
      </div>
    </div>
  );
};
