import React from 'react';
import { MessageSquare, Cpu, FileText, Zap, Sparkles, Award } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface HowItWorksProps {
  currentLang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang }) => {
  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full text-[#075E54] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#25D366] animate-pulse" />
            <span>{t('hiw-badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t('hiw-title')}
          </h2>
        </div>

        {/* 3-Step Responsive Grid (Stacks on mobile, horizontal on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch mb-16 sm:mb-24">
          
          {/* Step 1 */}
          <div className="flex flex-col bg-emerald-50/40 rounded-3xl p-6 sm:p-8 border border-emerald-50 hover:border-emerald-100/80 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#075E54] text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-emerald-950/20">
                1
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                {t('step1-title')}
              </h3>
            </div>
            
            <p 
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-1"
              dangerouslySetInnerHTML={{ __html: t('step1-desc') }}
            />

            {/* Step 1 Visual Mockup */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mt-auto">
              <div className="flex justify-end">
                <div className="bg-[#DCF8C6] text-gray-800 text-xs py-2.5 px-3 rounded-l-xl rounded-br-xl shadow-sm relative max-w-[90%] font-medium">
                  <p>{t('step1-bubble')}</p>
                  <span className="text-[8px] text-gray-500 block text-right mt-1">11:42 AM ✓✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col bg-emerald-50/40 rounded-3xl p-6 sm:p-8 border border-emerald-50 hover:border-emerald-100/80 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#075E54] text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-emerald-950/20">
                2
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                {t('step2-title')}
              </h3>
            </div>

            <p 
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-1"
              dangerouslySetInnerHTML={{ __html: t('step2-desc') }}
            />

            {/* Step 2 Visual Mockup */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mt-auto">
              <div className="flex items-center space-x-3 text-[#075E54]">
                <Cpu className="w-5 h-5 text-[#25D366] animate-spin" />
                <span className="text-xs font-bold font-mono tracking-wider animate-pulse">
                  {t('step2-mockup')}
                </span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col bg-emerald-50/40 rounded-3xl p-6 sm:p-8 border border-emerald-50 hover:border-emerald-100/80 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#075E54] text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-emerald-950/20">
                3
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                {t('step3-title')}
              </h3>
            </div>

            <p 
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-1"
              dangerouslySetInnerHTML={{ __html: t('step3-desc') }}
            />

            {/* Step 3 Visual Mockup */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mt-auto">
              <div className="flex items-center space-x-3 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/30">
                <div className="bg-white p-2 rounded-lg text-emerald-800 border border-emerald-100 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800">Sharma_Bill_#1204.pdf</h4>
                  <p className="text-[10px] text-gray-400 font-medium">48 KB • Document</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Trust Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-gray-100">
          
          <div className="flex items-center space-x-4 bg-gray-50/60 p-5 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
            <div className="p-3 bg-[#DCF8C6]/60 rounded-xl text-emerald-900">
              <Zap className="w-6 h-6 text-[#075E54]" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-gray-900">{t('stat-speed')}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-50/60 p-5 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
            <div className="p-3 bg-[#DCF8C6]/60 rounded-xl text-emerald-900">
              <MessageSquare className="w-6 h-6 text-[#075E54]" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-gray-900">{t('stat-no-app')}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-50/60 p-5 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
            <div className="p-3 bg-[#DCF8C6]/60 rounded-xl text-emerald-900">
              <Award className="w-6 h-6 text-[#075E54]" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-gray-900">{t('stat-no-training')}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default HowItWorks;
