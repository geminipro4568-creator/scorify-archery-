import React from 'react';
import { KeypadScoringScreen } from './AppScreens/KeypadScoringScreen';
import { TargetScoringScreen } from './AppScreens/TargetScoringScreen';
import { SessionsScreen } from './AppScreens/SessionsScreen';
import { StatisticsScreen } from './AppScreens/StatisticsScreen';
import { ScorecardScreen } from './AppScreens/ScorecardScreen';
import { TargetConfigScreen } from './AppScreens/TargetConfigScreen';
import { TimerScreen } from './AppScreens/TimerScreen';
import { NewsFeedScreen } from './AppScreens/NewsFeedScreen';
import { ScreenId } from '../types';

interface PhoneMockupProps {
  activeScreen?: ScreenId;
  className?: string;
  glowColor?: string;
  allowSwitching?: boolean;
  onScreenChange?: (screen: ScreenId) => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  activeScreen = 'keypad-scoring',
  className = '',
  glowColor = 'rgba(139, 92, 246, 0.4)',
  allowSwitching = false,
  onScreenChange,
}) => {
  const renderScreen = () => {
    switch (activeScreen) {
      case 'target-scoring':
        return <TargetScoringScreen />;
      case 'keypad-scoring':
        return <KeypadScoringScreen />;
      case 'sessions':
        return <SessionsScreen />;
      case 'statistics':
        return <StatisticsScreen />;
      case 'scorecard':
        return <ScorecardScreen />;
      case 'round-config':
        return <TargetConfigScreen />;
      case 'timer':
        return <TimerScreen />;
      case 'news-feed':
        return <NewsFeedScreen />;
      default:
        return <KeypadScoringScreen />;
    }
  };

  return (
    <div className={`relative group mx-auto ${className}`}>
      {/* Background Radial Glow */}
      <div
        className="absolute -inset-4 rounded-[50px] opacity-75 blur-2xl transition duration-700 group-hover:opacity-100 group-hover:scale-105 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
      />

      {/* iPhone Frame */}
      <div className="relative w-[280px] sm:w-[310px] md:w-[320px] h-[560px] sm:h-[600px] bg-[#000] rounded-[45px] p-2.5 border-[6px] border-[#1f1f2a] shadow-[0_50px_100px_rgba(0,0,0,0.6)] z-20 flex flex-col justify-between">
        {/* Dynamic Island Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#000] rounded-b-2xl z-30 flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111118]" />
          <div className="w-2 h-2 rounded-full bg-[#1a1a24]" />
        </div>

        {/* Inner Screen Viewport */}
        <div className="w-full h-full bg-[#111118] rounded-[36px] overflow-hidden flex flex-col relative pt-4 pb-2">
          <div className="w-full h-full overflow-hidden flex flex-col justify-between">
            {renderScreen()}
          </div>

          {/* Home Bar Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 w-28 h-1 bg-white/40 rounded-full" />
        </div>

        {/* Reflection Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[45px]" />
      </div>

      {/* Screen Selector Dots */}
      {allowSwitching && onScreenChange && (
        <div className="mt-4 flex justify-center gap-1.5 flex-wrap max-w-[320px] mx-auto z-30 relative">
          {(['target-scoring', 'keypad-scoring', 'scorecard', 'statistics', 'timer', 'sessions'] as ScreenId[]).map(s => (
            <button
              key={s}
              onClick={() => onScreenChange(s)}
              className={`px-2.5 py-1 text-[10px] font-bold rounded-full transition-all ${
                activeScreen === s
                  ? 'bg-[#8B5CF6] text-white shadow-md scale-105'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:text-white'
              }`}
            >
              {s.replace('-', ' ')}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
