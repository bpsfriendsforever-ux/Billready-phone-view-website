import React from 'react';
import { Check, Info, Sparkles, Star } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface PricingProps {
  currentLang: Language;
}

export const Pricing: React.FC<PricingProps> = ({ currentLang }) => {
  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  return (
    <section id="pricing" className="py-10 sm:py-16 bg-white dark:bg-[#111B21] border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 px-3.5 py-1.5 rounded-full text-[#075E54] dark:text-[#25D366] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <span>{t('pricing-badge')}</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
            dangerouslySetInnerHTML={{ __html: t('pricing-title') }}
          />
        </div>

        {/* 3-Column Pricing Responsive Grid (Stacks vertically on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto mb-8 sm:mb-10">
          
          {/* Plan 1: Basic Plan */}
          <div className="bg-gray-50/60 dark:bg-[#182229] rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-emerald-900/10 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:bg-white hover:dark:bg-[#1f2c34] hover:border-gray-200 dark:hover:border-emerald-800/40">
            <div>
              {/* Header */}
              <div className="space-y-2 mb-6">
                <span className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {t('plan1-badge')}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('plan1-title')}</h3>
                <div className="flex items-baseline space-x-1 pt-2">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">₹0</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">/ {t('plan1-price-suffix')}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200/60 dark:bg-gray-800/60 my-6"></div>

              {/* Feature Checklist */}
              <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t('plan1-feat-1') }} />
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>{t('plan1-feat-2')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>{t('plan1-feat-3')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>{t('plan1-feat-4')}</span>
                </li>
              </ul>
            </div>

            {/* Action Button */}
            <div className="pt-8">
              <a
                href="#cta"
                className="block w-full bg-white dark:bg-[#202c33] hover:bg-gray-50 dark:hover:bg-[#2a3942] border border-gray-200 dark:border-[#2a3942] text-gray-800 dark:text-white font-bold text-center px-4 py-3.5 rounded-2xl shadow-sm transition-all duration-200"
              >
                {t('plan1-btn')}
              </a>
            </div>
          </div>

          {/* Plan 2: Most Popular Plan (Highlighted Card with glowing gradients) */}
          <div className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-[#075E54] text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-emerald-950/20 flex flex-col justify-between border-4 border-[#25D366]/40 transform scale-100 lg:scale-105 z-10 transition-all duration-300">
            
            {/* Absolute Popular Tag */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#25D366] text-emerald-950 text-[10px] sm:text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-md tracking-wider flex items-center space-x-1">
              <Star className="w-3 h-3 fill-emerald-950" />
              <span>{t('plan2-badge')}</span>
            </div>

            <div>
              {/* Header */}
              <div className="space-y-2 mb-6 pt-2">
                <h3 className="text-xl font-bold text-white">{t('plan2-title')}</h3>
                <div className="flex items-baseline space-x-1 pt-2">
                  <span className="text-5xl font-extrabold text-[#25D366]">₹199</span>
                  <span className="text-xs text-emerald-200 font-semibold">/ {t('plan2-price-suffix')}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-emerald-800/80 my-6"></div>

              {/* Feature Checklist */}
              <ul className="space-y-4 text-sm text-emerald-50">
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>{t('plan2-feat-1')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>{t('plan2-feat-2')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>{t('plan2-feat-3')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>{t('plan2-feat-4')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span className="font-bold text-[#25D366]">{t('plan2-vip')}</span>
                </li>
              </ul>
            </div>

            {/* Action Button */}
            <div className="pt-8">
              <a
                href="#cta"
                className="block w-full bg-[#25D366] hover:bg-[#20ba59] hover:shadow-xl active:scale-95 text-emerald-950 font-extrabold text-center px-4 py-4 rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {t('plan2-btn')}
              </a>
            </div>
          </div>

          {/* Plan 3: Enterprise Plan */}
          <div className="bg-gray-50/60 dark:bg-[#182229] rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-emerald-900/10 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:bg-white hover:dark:bg-[#1f2c34] hover:border-gray-200 dark:hover:border-emerald-800/40">
            <div>
              {/* Header */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('plan3-title')}</h3>
                <div className="flex items-baseline space-x-1 pt-2">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">₹499</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">/ {t('plan3-price-suffix')}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200/60 dark:bg-gray-800/60 my-6"></div>

              {/* Feature Checklist */}
              <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t('plan3-feat-1') }} />
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>{t('plan3-feat-2')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>{t('plan3-feat-3')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-4.5 h-4.5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>{t('plan3-feat-4')}</span>
                </li>
              </ul>
            </div>

            {/* Action Button */}
            <div className="pt-8">
              <a
                href="#cta"
                className="block w-full bg-white dark:bg-[#202c33] hover:bg-gray-50 dark:hover:bg-[#2a3942] border border-gray-200 dark:border-[#2a3942] text-gray-800 dark:text-white font-bold text-center px-4 py-3.5 rounded-2xl shadow-sm transition-all duration-200"
              >
                {t('plan3-btn')}
              </a>
            </div>
          </div>

        </div>

        {/* Reassurance text */}
        <div className="text-center max-w-lg mx-auto bg-gray-50 dark:bg-[#182229] border border-gray-100 dark:border-emerald-900/10 p-4 rounded-2xl">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-semibold flex items-center justify-center space-x-1.5">
            <span>{t('pricing-reassurance-text')}</span>
          </p>
        </div>

      </div>
    </section>
  );
};
export default Pricing;
