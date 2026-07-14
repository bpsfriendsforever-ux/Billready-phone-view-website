import React, { useState } from 'react';
import { 
  FileText, Mic, QrCode, Palette, Printer, AlertCircle, 
  TrendingUp, RefreshCw, Coins, BarChart3, BookOpen, ShieldCheck, HelpCircle, X
} from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface FeaturesProps {
  currentLang: Language;
}

export const Features: React.FC<FeaturesProps> = ({ currentLang }) => {
  const [isITCTooltipOpen, setIsITCTooltipOpen] = useState(false);

  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  // List of features
  const featuresList = [
    {
      id: 'feat1',
      icon: <FileText className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat1-title',
      descKey: 'feat1-desc',
    },
    {
      id: 'feat2',
      icon: <Mic className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat2-title',
      descKey: 'feat2-desc',
    },
    {
      id: 'feat-upi',
      icon: <QrCode className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat-upi-title',
      descKey: 'feat-upi-desc',
    },
    {
      id: 'feat-themes',
      icon: <Palette className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat-themes-title',
      descKey: 'feat-themes-desc',
    },
    {
      id: 'feat-thermal',
      icon: <Printer className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat-thermal-title',
      descKey: 'feat-thermal-desc',
    },
    {
      id: 'feat-lowstock',
      icon: <AlertCircle className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat-lowstock-title',
      descKey: 'feat-lowstock-desc',
    },
    {
      id: 'feat-gstreports',
      icon: <TrendingUp className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat-gstreports-title',
      descKey: 'feat-gstreports-desc',
    },
    {
      id: 'feat-convert',
      icon: <RefreshCw className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat-convert-title',
      descKey: 'feat-convert-desc',
    },
    {
      id: 'feat-payments',
      icon: <Coins className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat-payments-title',
      descKey: 'feat-payments-desc',
    },
    {
      id: 'feat-bizreports',
      icon: <BarChart3 className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat-bizreports-title',
      descKey: 'feat-bizreports-desc',
    },
    {
      id: 'feat8',
      icon: <BookOpen className="w-6 h-6 text-[#075E54]" />,
      titleKey: 'feat8-title',
      descKey: 'feat8-desc',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full text-[#075E54] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <span>{t('features-badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t('features-title')}
          </h2>
        </div>

        {/* Bento Grid: 12 beautiful responsive feature cards (stacking to 1 column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Loop standard features */}
          {featuresList.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100/80 shadow-sm hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row: Icon and Decorative Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100/30">
                    {feature.icon}
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 leading-snug">
                  {t(feature.titleKey)}
                </h3>

                {/* Card Desc */}
                <p 
                  className="text-gray-600 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t(feature.descKey) }}
                />
              </div>
            </div>
          ))}

          {/* Feature 12: Special ITC Save Card with Custom Interactive Tooltip */}
          <div 
            className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100/80 shadow-sm hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-visible"
          >
            <div>
              {/* Header Row: Icon and Toggling Help Widget */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100/30">
                  <ShieldCheck className="w-6 h-6 text-[#075E54]" />
                </div>
                
                {/* Tooltip Trigger Button */}
                <div className="relative">
                  <button 
                    onClick={() => setIsITCTooltipOpen(!isITCTooltipOpen)}
                    onMouseEnter={() => setIsITCTooltipOpen(true)}
                    onMouseLeave={() => setIsITCTooltipOpen(false)}
                    className="p-1.5 rounded-full bg-emerald-50 text-[#075E54] hover:bg-[#25D366] hover:text-white transition-colors duration-200 focus:outline-none"
                    aria-label="Learn about ITC"
                  >
                    <HelpCircle className="w-4 h-4" />
                  </button>

                  {/* Tooltip Content Popover (Responsive styling for mobile and desktop sizing) */}
                  {isITCTooltipOpen && (
                    <div className="absolute right-0 bottom-full mb-3 w-64 bg-slate-900 text-white rounded-2xl p-4 shadow-2xl z-40 border border-slate-800 text-xs leading-relaxed animate-fade-in">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-amber-400">ITC (Input Tax Credit)</span>
                        <button 
                          onClick={() => setIsITCTooltipOpen(false)}
                          className="sm:hidden text-slate-400 hover:text-white"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: t('feat5-tooltip') }} />
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 leading-snug flex items-center space-x-2">
                <span>{t('feat5-title')}</span>
                <span className="text-xs bg-[#25D366]/20 text-[#075E54] font-bold px-2 py-0.5 rounded-full">Save Tax</span>
              </h3>

              {/* Desc */}
              <p 
                className="text-gray-600 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('feat5-desc') }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Features;
