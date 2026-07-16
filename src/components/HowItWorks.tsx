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
    <section id="how-it-works" className="py-10 sm:py-16 bg-white dark:bg-[#111B21] border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 px-3.5 py-1.5 rounded-full text-[#075E54] dark:text-[#25D366] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#25D366] animate-pulse" />
            <span>{t('hiw-badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('hiw-title')}
          </h2>
        </div>

        {/* 3-Step Responsive Grid (Stacks on mobile, horizontal on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch mb-8 sm:mb-10">
          
          {/* Step 1 */}
          <div className="flex flex-col bg-emerald-50/40 dark:bg-emerald-950/10 rounded-3xl p-5 sm:p-6 border border-emerald-50 dark:border-emerald-900/20 hover:border-emerald-100/80 hover:dark:border-emerald-800/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#075E54] dark:bg-[#00a884] text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-emerald-950/20">
                1
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {t('step1-title')}
              </h3>
            </div>
            
            <p 
              className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4 flex-1"
              dangerouslySetInnerHTML={{ __html: t('step1-desc') }}
            />

            {/* Step 1 Visual Mockup */}
            <div className="bg-white dark:bg-[#202c33] rounded-2xl p-4 border border-gray-100 dark:border-transparent shadow-sm mt-auto">
              <div className="flex justify-end">
                <div className="bg-[#DCF8C6] dark:bg-[#005c4b] text-gray-800 dark:text-[#e9edef] text-xs py-2.5 px-3 rounded-l-xl rounded-br-xl shadow-sm relative max-w-[90%] font-medium">
                  <p>{t('step1-bubble')}</p>
                  <span className="text-[8px] text-gray-500 dark:text-emerald-200/60 block text-right mt-1">11:42 AM ✓✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col bg-emerald-50/40 dark:bg-emerald-950/10 rounded-3xl p-5 sm:p-6 border border-emerald-50 dark:border-emerald-900/20 hover:border-emerald-100/80 hover:dark:border-emerald-800/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#075E54] dark:bg-[#00a884] text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-emerald-950/20">
                2
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {t('step2-title')}
              </h3>
            </div>

            <p 
              className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4 flex-1"
              dangerouslySetInnerHTML={{ __html: t('step2-desc') }}
            />

            {/* Step 2 Visual Mockup */}
            <div className="bg-white dark:bg-[#202c33] rounded-2xl p-4 border border-gray-100 dark:border-transparent shadow-sm mt-auto">
              <div className="flex items-center space-x-3 text-[#075E54] dark:text-[#25D366]">
                <Cpu className="w-5 h-5 text-[#25D366] animate-spin" />
                <span className="text-xs font-bold font-mono tracking-wider animate-pulse">
                  {t('step2-mockup')}
                </span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col bg-emerald-50/40 dark:bg-emerald-950/10 rounded-3xl p-5 sm:p-6 border border-emerald-50 dark:border-emerald-900/20 hover:border-emerald-100/80 hover:dark:border-emerald-800/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#075E54] dark:bg-[#00a884] text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-emerald-950/20">
                3
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {t('step3-title')}
              </h3>
            </div>

            <p 
              className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4 flex-1"
              dangerouslySetInnerHTML={{ __html: t('step3-desc') }}
            />

            {/* Step 3 Visual Mockup */}
            <div className="bg-white dark:bg-[#202c33] rounded-2xl p-4 border border-gray-100 dark:border-transparent shadow-sm mt-auto">
              <div className="flex items-center space-x-3 bg-emerald-50/50 dark:bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-100/30 dark:border-emerald-900/20">
                <div className="bg-white dark:bg-[#111B21] p-2 rounded-lg text-emerald-800 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200">Sharma_Bill_#1204.pdf</h4>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">48 KB • Document</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Trust Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-5 border-t border-gray-100 dark:border-gray-800">
          
          <div className="flex items-center space-x-3 bg-gray-50/60 dark:bg-emerald-950/10 p-3.5 rounded-xl border border-gray-100 dark:border-emerald-900/20 transition-all hover:bg-white hover:dark:bg-[#202c33]/40 hover:shadow-md">
            <div className="p-2.5 bg-[#DCF8C6]/60 dark:bg-emerald-900/30 rounded-lg">
              <Zap className="w-5 h-5 text-[#075E54] dark:text-[#25D366]" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{t('stat-speed')}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-gray-50/60 dark:bg-emerald-950/10 p-3.5 rounded-xl border border-gray-100 dark:border-emerald-900/20 transition-all hover:bg-white hover:dark:bg-[#202c33]/40 hover:shadow-md">
            <div className="p-2.5 bg-[#DCF8C6]/60 dark:bg-emerald-900/30 rounded-lg">
              <MessageSquare className="w-5 h-5 text-[#075E54] dark:text-[#25D366]" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{t('stat-no-app')}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-gray-50/60 dark:bg-emerald-950/10 p-3.5 rounded-xl border border-gray-100 dark:border-emerald-900/20 transition-all hover:bg-white hover:dark:bg-[#202c33]/40 hover:shadow-md">
            <div className="p-2.5 bg-[#DCF8C6]/60 dark:bg-emerald-900/30 rounded-lg">
              <Award className="w-5 h-5 text-[#075E54] dark:text-[#25D366]" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{t('stat-no-training')}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default HowItWorks;
