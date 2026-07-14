import React, { useState } from 'react';
import { Play, Sparkles, Check, Clock, Shield, Award } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface VideoSectionProps {
  currentLang: Language;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ currentLang }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  return (
    <section id="video-demo" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full text-[#075E54] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#25D366]" />
            <span>{t('video-badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t('video-title')}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t('video-desc')}
          </p>
        </div>

        {/* Video Player Box - Highly Responsive aspect-ratio box */}
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border-8 border-white bg-slate-950 shadow-2xl aspect-video group mb-16 sm:mb-24">
          
          {isPlaying ? (
            /* Active simulated video player */
            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-slate-950 text-white font-sans animate-fade-in">
              <div className="flex justify-between items-center z-10">
                <span className="text-xs bg-red-600 px-2.5 py-1 rounded-full font-bold animate-pulse uppercase tracking-wider">LIVE</span>
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="text-xs text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors font-semibold"
                >
                  Close Player ✕
                </button>
              </div>

              {/* Simulated Loading/Playing State */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>
                <div className="text-center">
                  <h3 className="font-extrabold text-base tracking-wide">Playing Walkthrough</h3>
                  <p className="text-xs text-gray-400">Loading demo streams & voice recognition logs...</p>
                </div>
              </div>

              {/* Player Timeline Bar Controls */}
              <div className="space-y-2 z-10 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-xl">
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-2/5 bg-[#25D366] rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-semibold">
                  <span>0:48 / 2:15</span>
                  <span className="text-emerald-400">Auto HD 1080p</span>
                </div>
              </div>
            </div>
          ) : (
            /* Video Poster/Thumb Container */
            <div className="absolute inset-0">
              {/* Wallpaper */}
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                alt="BillReady Video Walkthrough" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-75"
                referrerPolicy="no-referrer"
              />
              
              {/* Blur Backlight Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-black/30 flex flex-col justify-between p-6">
                
                {/* HD Badge */}
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-emerald-900/80 border border-emerald-500 text-emerald-300 font-bold px-3 py-1.5 rounded-lg backdrop-blur-md">
                    {t('video-hd-badge')} 1080p
                  </span>
                  <span className="text-xs bg-black/60 text-white font-bold px-3 py-1.5 rounded-lg backdrop-blur-md">
                    2:15 mins
                  </span>
                </div>

                {/* Big Pulsing Centered Play Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#25D366] hover:bg-[#20ba59] active:scale-90 text-emerald-950 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer focus:outline-none"
                    aria-label="Play video walkthrough"
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                    <Play className="w-8 h-8 fill-emerald-950 ml-1 text-emerald-950" />
                  </button>
                </div>

                {/* Video Title Bar */}
                <div className="text-left text-white space-y-1">
                  <h3 className="font-extrabold text-base sm:text-xl tracking-wide">
                    {t('video-overlay-title')}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium">
                    {t('video-embed-later')}
                  </p>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* 3-Column Video Key Highlights Grid (Stacks on mobile screens) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100/60 shadow-sm transition-all hover:shadow-md">
            <h3 className="text-lg font-extrabold text-gray-900 mb-2 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              <span>{t('video-feature-1-title')}</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('video-feature-1-desc')}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100/60 shadow-sm transition-all hover:shadow-md">
            <h3 className="text-lg font-extrabold text-gray-900 mb-2 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              <span>{t('video-feature-2-title')}</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('video-feature-2-desc')}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100/60 shadow-sm transition-all hover:shadow-md">
            <h3 className="text-lg font-extrabold text-gray-900 mb-2 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              <span>{t('video-feature-3-title')}</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('video-feature-3-desc')}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
export default VideoSection;
