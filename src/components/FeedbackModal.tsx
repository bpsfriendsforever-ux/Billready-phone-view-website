import React, { useState } from 'react';
import { X, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import translations from '../translations';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose, currentLang }) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('Suggestion');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setError(currentLang === 'hi' ? 'कृपया अपना संदेश दर्ज करें' : 'Please enter your message');
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([100, 50, 100]); // error vibration pattern
      }
      return;
    }

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(15); // tiny click
    }

    setError('');

    // Format the WhatsApp message beautifully
    const categoryLabel = translations[`feedback-cat-${category.toLowerCase()}`]?.[currentLang] || category;
    
    let formattedText = `*BillReady Help & Feedback*\n`;
    formattedText += `-----------------------------\n`;
    formattedText += `*Name:* ${name.trim() || 'Anonymous'}\n`;
    if (businessName.trim()) {
      formattedText += `*Business:* ${businessName.trim()}\n`;
    }
    formattedText += `*Category:* ${categoryLabel}\n`;
    formattedText += `*Message:*\n${message.trim()}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/917042276165?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Reset fields and close
    setName('');
    setBusinessName('');
    setCategory('Suggestion');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4" id="feedback-modal-root">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            id="feedback-modal-overlay"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg bg-white dark:bg-[#1f2c34] rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800/80 overflow-hidden z-10"
            id="feedback-modal-container"
          >
            {/* Header branding band */}
            <div className="bg-[#075E54] dark:bg-[#128C7E] px-6 py-4 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                <h3 className="font-bold text-lg">{t('feedback-modal-title')}</h3>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all"
                aria-label="Close modal"
                id="feedback-modal-close-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSend} className="p-6 space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                {t('feedback-modal-desc')}
              </p>

              {/* Name Field */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {t('feedback-name-label')}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={currentLang === 'hi' ? 'आपका नाम दर्ज करें' : 'e.g. Ramesh Kumar'}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#2a3942] border border-gray-200 dark:border-transparent text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] text-sm transition-all"
                  id="feedback-input-name"
                />
              </div>

              {/* Business Name Field */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {t('feedback-business-label')}
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder={currentLang === 'hi' ? 'अपनी दुकान का नाम लिखें' : 'e.g. Balaji Hardware Store'}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#2a3942] border border-gray-200 dark:border-transparent text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] text-sm transition-all"
                  id="feedback-input-business"
                />
              </div>

              {/* Category selector */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {t('feedback-category-label')}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#2a3942] border border-gray-200 dark:border-transparent text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] text-sm transition-all cursor-pointer"
                  id="feedback-input-category"
                >
                  <option value="Suggestion">{t('feedback-cat-suggestion')}</option>
                  <option value="Feature">{t('feedback-cat-feature')}</option>
                  <option value="Question">{t('feedback-cat-question')}</option>
                  <option value="Bug">{t('feedback-cat-bug')}</option>
                  <option value="Other">{t('feedback-cat-other')}</option>
                </select>
              </div>

              {/* Message / Suggestion field */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex justify-between">
                  <span>{t('feedback-message-label')}</span>
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    currentLang === 'hi' 
                      ? 'यहाँ अपने सुझाव या प्रश्न लिखें...' 
                      : 'Share your ideas or issues you are facing...'
                  }
                  rows={4}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#2a3942] border border-gray-200 dark:border-transparent text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] text-sm transition-all resize-none"
                  id="feedback-input-message"
                />
                {error && <p className="text-xs text-red-500 font-semibold mt-1">{error}</p>}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end space-x-3 pt-3 border-t border-gray-100 dark:border-gray-800/80">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer"
                  id="feedback-cancel-btn"
                >
                  {t('feedback-cancel-btn')}
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-emerald-950 font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                  id="feedback-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('feedback-send-btn')}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default FeedbackModal;
