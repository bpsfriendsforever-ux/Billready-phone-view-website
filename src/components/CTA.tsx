import React, { useState } from 'react';
import { Sparkles, Phone, Lock, CheckCircle, Shield, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface CTAProps {
  currentLang: Language;
}

interface ConfettiItem {
  id: number;
  x: number;
  color: string;
  delay: number;
}

export const CTA: React.FC<CTAProps> = ({ currentLang }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [confetti, setConfetti] = useState<ConfettiItem[]>([]);

  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  const getPlaceholder = () => {
    if (currentLang === 'en') return "Enter your WhatsApp number";
    if (currentLang === 'hi') return "अपना व्हाट्सएप नंबर दर्ज करें";
    return "Apna mobile number daalo";
  };

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(phoneNumber)) {
      setStatus('error');
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([100, 50, 100]); // error pulse
      }
      return;
    }

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(15); // tap feedback
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([30, 50, 30]); // double-pulse success haptic
      }
      // Spawn confetti particles
      const colors = ['#25D366', '#075E54', '#128C7E', '#DCF8C6', '#facc15', '#38bdf8'];
      const newConfetti = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // random percentage across width
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
      }));
      setConfetti(newConfetti);
    }, 1500);
  };

  return (
    <section id="cta" className="relative py-10 sm:py-16 bg-gradient-to-b from-white via-emerald-50/10 to-[#f4fcf8] dark:from-[#111B21] dark:via-[#0b141a]/40 dark:to-[#0f171c] overflow-hidden border-b border-gray-100 dark:border-gray-800">
      
      {/* Falling Confetti Particles overlay */}
      {status === 'success' && (
        <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
          {confetti.map((c) => (
            <div
              key={c.id}
              className="absolute top-0 w-2 h-2 rounded-full animate-bounce opacity-80"
              style={{
                left: `${c.x}%`,
                backgroundColor: c.color,
                animationDuration: `${3 + Math.random() * 2}s`,
                animationDelay: `${c.delay}s`,
                transform: `translateY(${500 + Math.random() * 300}px) rotate(${Math.random() * 360}deg)`,
                transition: 'all 5s ease-out',
              }}
            ></div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-emerald-950 dark:bg-[#182229] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-4 border-emerald-800 dark:border-emerald-900/40 shadow-2xl relative overflow-hidden">
          
          {/* Background overlay decorations */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-emerald-800/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -left-16 -top-16 w-48 h-48 bg-[#25D366]/10 rounded-full blur-xl pointer-events-none"></div>

          {/* Core Content */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            
            <div className="inline-flex items-center space-x-1.5 bg-emerald-900 dark:bg-emerald-950 border border-emerald-800 px-3.5 py-1.5 rounded-full text-[#25D366] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-[#25D366] animate-pulse" />
              <span>{t('plan1-title')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t('cta-title')}
            </h2>

            <p className="text-emerald-200/90 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {t('cta-desc')}
            </p>

            {/* Interactive Form Box */}
            <div className="max-w-md mx-auto pt-4">
              {status === 'success' ? (
                /* Success Redirection Card */
                <div className="bg-white dark:bg-[#202c33] text-gray-900 dark:text-white p-6 rounded-2xl shadow-xl border border-emerald-200 dark:border-emerald-900/30 animate-fade-in space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center text-emerald-800 dark:text-[#25D366] mx-auto">
                    <CheckCircle className="w-6 h-6 text-emerald-700 dark:text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Successfully Connected!</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Click below to open WhatsApp and send your first message to BillReady.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(currentLang === 'hi' ? 'नमस्ते बिलरेडी' : 'Namaste BillReady')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#25D366] hover:bg-[#20ba59] text-emerald-950 font-extrabold text-center py-3 rounded-xl shadow-md transition-colors"
                  >
                    Open WhatsApp Chat 📲
                  </a>
                  <button 
                    onClick={() => { setStatus('idle'); setPhoneNumber(''); }}
                    className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 underline font-semibold focus:outline-none cursor-pointer"
                  >
                    Enter another number
                  </button>
                </div>
              ) : (
                /* Normal Submit Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-stretch gap-3">
                    
                    {/* Input wrapper with country code fixed prefix */}
                    <div className="relative flex-1 rounded-2xl overflow-hidden shadow-sm flex border-2 border-emerald-800/80 dark:border-emerald-900 bg-white dark:bg-[#202c33] text-gray-900 dark:text-white">
                      <div className="bg-gray-100 dark:bg-[#111b21] px-3.5 flex items-center border-r border-gray-200 dark:border-gray-800 select-none">
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300 mr-1.5">🇮🇳</span>
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-200">+91</span>
                      </div>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder={getPlaceholder()}
                        className="w-full px-4 py-3.5 text-sm sm:text-base font-semibold focus:outline-none placeholder-gray-400 bg-transparent text-gray-900 dark:text-white"
                        maxLength={10}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-emerald-950 font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-emerald-950 border-t-transparent rounded-full animate-spin"></div>
                          <span>Wait...</span>
                        </>
                      ) : (
                        <span>{t('cta-btn')}</span>
                      )}
                    </button>

                  </div>

                  {/* Feedback Error Msg */}
                  {status === 'error' && (
                    <div className="text-red-400 text-xs font-semibold flex items-center justify-center space-x-1.5 animate-pulse bg-red-950/40 p-2.5 rounded-xl border border-red-900/50">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      <span>
                        {currentLang === 'hi' 
                          ? 'कृपया एक वैध 10-अंकीय व्हाट्सएप नंबर दर्ज करें।' 
                          : currentLang === 'hinglish' 
                          ? 'Please valid 10-digit mobile number enter karein.' 
                          : 'Please enter a valid 10-digit WhatsApp number.'}
                      </span>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Reassurance list (Stacks on mobile, horizontal row on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-emerald-900/60 text-emerald-200/80 text-xs sm:text-sm font-medium">
              <div className="flex items-center justify-center space-x-2">
                <Lock className="w-4 h-4 text-[#25D366]" />
                <span>{t('cta-trust-1')}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4 text-[#25D366]" />
                <span>{t('cta-trust-2')}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t('cta-trust-3')}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default CTA;
