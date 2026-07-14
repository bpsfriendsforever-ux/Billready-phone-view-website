import React from 'react';
import { Heart, Instagram } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';
import Logo from './Logo';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  return (
    <footer className="bg-slate-900 text-gray-400 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <Logo size="sm" />
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              {t('footer-disclaimer-1')}
            </p>
            
            <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed max-w-sm">
              {t('footer-disclaimer-2')}
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">
              {t('footer-col1-title')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-[#25D366] transition-colors">{t('footer-col1-link1')}</a></li>
              <li><a href="#" className="hover:text-[#25D366] transition-colors">{t('footer-col1-link2')}</a></li>
              <li><a href="#" className="hover:text-[#25D366] transition-colors">{t('footer-col1-link3')}</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">
              {t('footer-col2-title')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-[#25D366] transition-colors">{t('footer-col2-link1')}</a></li>
              <li><a href="#" className="hover:text-[#25D366] transition-colors">{t('footer-col2-link2')}</a></li>
              <li><a href="#" className="hover:text-[#25D366] transition-colors">{t('footer-col2-link3')}</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">
              {t('footer-col3-title')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#cta" className="hover:text-[#25D366] transition-colors">{t('footer-col3-link1')}</a></li>
              <li className="font-mono text-gray-300">{t('footer-col3-link2')}</li>
              <li><a href="#faq" className="hover:text-[#25D366] transition-colors">{t('footer-col3-link3')}</a></li>
            </ul>
          </div>

        </div>

        {/* Copyrights and Made In India badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-gray-500">
          <p>{t('footer-copyright')}</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Instagram Button */}
            <a 
              href="https://www.instagram.com/billready.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:opacity-90 active:scale-95 text-white font-medium px-4 py-1.5 rounded-full text-[11px] sm:text-xs shadow-md hover:shadow-lg transition-all duration-200"
              id="footer-instagram-btn"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{t('footer-follow-instagram')}</span>
            </a>
            
            <div className="flex items-center space-x-1.5 bg-slate-950 px-3.5 py-1.5 rounded-full border border-slate-800">
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
              <span className="font-semibold text-[10px] sm:text-xs text-gray-400">
                {t('footer-made-in-india')}
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
