import React from 'react';
import { Newspaper, Volume2, RefreshCw, Clock, Timer } from 'lucide-react';

export const NewsFeedScreen: React.FC = () => {
  const articles = [
    {
      title: 'Mexico Retains Recurve Men Team Title at World Cup Stage 3',
      date: 'Aug 01, 2026',
      tag: 'NEWS',
      img: 'https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Martin Damsbo Still Proving Masterclass Precision in Compound',
      date: 'Jul 30, 2026',
      tag: 'NEWS',
      img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=300&q=80',
    },
    {
      title: 'Ben Abdelkader Turns Senior World Stage Focus to Paris Field',
      date: 'Jul 27, 2026',
      tag: 'NEWS',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=300&q=80',
    }
  ];

  return (
    <div className="w-full h-full bg-[#0A0A0E] text-white flex flex-col justify-between select-none font-sans overflow-hidden text-xs">
      {/* Top Banner Card */}
      <div className="p-3 bg-[#0A0A0E] border-b border-gray-800 space-y-2">
        <div className="p-3 rounded-xl bg-[#12121A] border border-gray-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-amber-400">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-xs text-white">WORLD ARCHERY FEED</div>
            <div className="text-[10px] text-gray-400">Latest RSS sync, tournament reports & rules.</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="font-bold text-[10px] text-gray-400 uppercase tracking-wider">LATEST ARTICLES</span>
          <button className="flex items-center gap-1 text-[10px] text-gray-300 font-bold hover:text-white">
            <RefreshCw className="w-3 h-3" /> REFRESH
          </button>
        </div>
      </div>

      {/* Article Cards Scroll List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
        {articles.map((art, idx) => (
          <div key={idx} className="p-2.5 bg-[#12121A] border border-gray-800 rounded-xl flex gap-3 items-center">
            <img src={art.img} alt={art.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-gray-800" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="px-1.5 py-0.5 bg-red-950/80 text-red-400 text-[8px] font-bold rounded border border-red-800/40">
                  {art.tag}
                </span>
                <Volume2 className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <div className="font-bold text-xs text-white line-clamp-2 leading-tight">
                {art.title}
              </div>
              <div className="text-[9px] text-gray-500 font-mono">{art.date}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Bottom Tabs */}
      <div className="grid grid-cols-3 bg-[#0E0E14] border-t border-gray-800 py-2 text-center text-[10px] font-semibold">
        <div className="flex flex-col items-center text-gray-400">
          <Clock className="w-4 h-4 mb-0.5" />
          <span>Sessions</span>
        </div>
        <div className="flex flex-col items-center text-[#8B5CF6]">
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
