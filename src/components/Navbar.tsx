import React, { useState } from 'react';
import { Menu, X, ChevronDown, Check, Globe, Sun, Moon } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';
import Logo from './Logo';

interface NavbarProps {
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, setCurrentLang, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  const languages = [
    { code: 'en' as Language, label: 'English' },
    { code: 'hinglish' as Language, label: 'Hinglish' },
    { code: 'hi' as Language, label: 'हिन्दी' },
  ];

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#113e2c] text-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center group">
              <Logo size="md" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#how-it-works" className="text-gray-200 hover:text-[#25D366] transition-colors text-sm font-medium">
              {t('nav-how-it-works')}
            </a>
            <a href="#features" className="text-gray-200 hover:text-[#25D366] transition-colors text-sm font-medium">
              {t('nav-features')}
            </a>
            <a href="#demo" className="text-gray-200 hover:text-[#25D366] transition-colors text-sm font-medium">
              {t('nav-demo')}
            </a>
            <a href="#testimonials" className="text-gray-200 hover:text-[#25D366] transition-colors text-sm font-medium">
              {t('nav-testimonials')}
            </a>
            <a href="#pricing" className="text-gray-200 hover:text-[#25D366] transition-colors text-sm font-medium">
              {t('nav-pricing')}
            </a>
            <a href="#faq" className="text-gray-200 hover:text-[#25D366] transition-colors text-sm font-medium">
              {t('nav-faq')}
            </a>

            {/* Desktop Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 bg-emerald-950/60 border border-emerald-800 hover:border-emerald-700 px-3 py-1.5 rounded-lg text-sm transition-all text-white font-medium focus:outline-none"
              >
                <Globe className="w-4 h-4 text-[#25D366]" />
                <span>{languages.find((l) => l.code === currentLang)?.label}</span>
                <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl py-1 border border-gray-100 text-gray-800 z-50 overflow-hidden animate-fade-in">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code)}
                      className={`flex items-center justify-between w-full px-4 py-2.5 text-sm text-left hover:bg-emerald-50 transition-colors ${currentLang === lang.code ? 'text-[#075E54] font-semibold bg-emerald-50/50' : 'text-gray-700'}`}
                    >
                      <span>{lang.label}</span>
                      {currentLang === lang.code && <Check className="w-4 h-4 text-[#25D366]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800 hover:border-emerald-700 text-white transition-all focus:outline-none flex items-center justify-center cursor-pointer"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              id="theme-toggle-desktop"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#25D366]" />
              )}
            </button>

            {/* Primary CTA */}
            <a
              href="#cta"
              className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-emerald-950 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all duration-300 text-center"
            >
              {t('nav-cta')}
            </a>
          </div>

          {/* Mobile Right Buttons (Lang switcher + Burger) */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Lang switcher icon/btn */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1.5 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white focus:outline-none"
              >
                <Globe className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{languages.find((l) => l.code === currentLang)?.label}</span>
                <ChevronDown className="w-3 h-3 text-emerald-400" />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-2xl py-1 border border-gray-100 text-gray-800 z-50 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code)}
                      className={`flex items-center justify-between w-full px-4 py-2 text-xs text-left hover:bg-emerald-50 transition-colors ${currentLang === lang.code ? 'text-[#075E54] font-semibold bg-emerald-50' : 'text-gray-700'}`}
                    >
                      <span>{lang.label}</span>
                      {currentLang === lang.code && <Check className="w-3.5 h-3.5 text-[#25D366]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800 text-white transition-all focus:outline-none flex items-center justify-center cursor-pointer shadow-sm"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              id="theme-toggle-mobile"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#25D366]" />
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-emerald-900 focus:outline-none transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#113e2c] border-t border-emerald-900/60 transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-emerald-900 transition-colors"
            >
              {t('nav-how-it-works')}
            </a>
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-emerald-900 transition-colors"
            >
              {t('nav-features')}
            </a>
            <a
              href="#demo"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-emerald-900 transition-colors"
            >
              {t('nav-demo')}
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-emerald-900 transition-colors"
            >
              {t('nav-testimonials')}
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-emerald-900 transition-colors"
            >
              {t('nav-pricing')}
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-200 hover:text-white hover:bg-emerald-900 transition-colors"
            >
              {t('nav-faq')}
            </a>
            <div className="pt-2 px-4">
              <a
                href="#cta"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#25D366] hover:bg-[#20ba59] text-emerald-950 px-4 py-3 rounded-xl font-bold text-base shadow-md transition-all duration-200"
              >
                {t('nav-cta')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
