import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Mic, FileText, Send, HelpCircle, CheckCheck } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface LiveDemoProps {
  currentLang: Language;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'billready';
  text: string;
  time: string;
}

export const LiveDemo: React.FC<LiveDemoProps> = ({ currentLang }) => {
  const t = (key: string) => {
    return translations[key]?.[currentLang] || key;
  };

  const chatEndRef = useRef<HTMLDivElement>(null);
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isInitial = useRef(true);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');

  const scrollToPhone = () => {
    // Only auto-scroll on mobile/tablet screens (width < 1024px) where the phone is stacked vertically below the buttons
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        if (phoneContainerRef.current) {
          phoneContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  };

  // Initial chat history matching the user flow in translations
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'user',
      text: t('chat-msg-1'),
      time: '11:40 AM',
    },
    {
      id: 'init-2',
      sender: 'billready',
      text: t('chat-msg-2'),
      time: '11:40 AM',
    },
    {
      id: 'init-3',
      sender: 'user',
      text: t('chat-msg-3'),
      time: '11:41 AM',
    },
    {
      id: 'init-4',
      sender: 'billready',
      text: t('chat-msg-4'),
      time: '11:41 AM',
    },
    {
      id: 'init-5',
      sender: 'user',
      text: t('chat-msg-5'),
      time: '11:42 AM',
    },
    {
      id: 'init-6',
      sender: 'billready',
      text: t('chat-msg-6'),
      time: '11:42 AM',
    },
  ]);

  // Sync initial conversation language when translation switches
  useEffect(() => {
    setChatHistory([
      {
        id: 'init-1',
        sender: 'user',
        text: t('chat-msg-1'),
        time: '11:40 AM',
      },
      {
        id: 'init-2',
        sender: 'billready',
        text: t('chat-msg-2'),
        time: '11:40 AM',
      },
      {
        id: 'init-3',
        sender: 'user',
        text: t('chat-msg-3'),
        time: '11:41 AM',
      },
      {
        id: 'init-4',
        sender: 'billready',
        text: t('chat-msg-4'),
        time: '11:41 AM',
      },
      {
        id: 'init-5',
        sender: 'user',
        text: t('chat-msg-5'),
        time: '11:42 AM',
      },
      {
        id: 'init-6',
        sender: 'billready',
        text: t('chat-msg-6'),
        time: '11:42 AM',
      },
    ]);
  }, [currentLang]);

  useEffect(() => {
    if (chatContainerRef.current) {
      if (isInitial.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        isInitial.current = false;
      } else {
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [chatHistory, isTyping]);

  // Reply responses in Hindi, Hinglish, and English for the 6 commands
  const getDemoReplies = (chipIndex: number, lang: Language) => {
    const responses: Record<number, Record<Language, string>> = {
      1: {
        en: "📦 <strong>Inventory Report:</strong><br>• Basmati Rice: 12 kg remaining (Low Stock ⚠️)<br>• Mustard Oil: 14 bottles remaining<br>• Toor Dal: 48 kg remaining<br><br>Let me know if you want to place a reorder list.",
        hinglish: "📦 <strong>Stock Report:</strong><br>• Basmati Rice: 12 kg bacha hai (Low Stock warning ⚠️)<br>• Mustard Oil: 14 botal bachi hai<br>• Toor Dal: 48 kg bacha hai<br><br>Kya naya order banana hai?",
        hi: "📦 <strong>स्टॉक रिपोर्ट:</strong><br>• बासमती चावल: 12 किलोग्राम शेष (कम स्टॉक ⚠️)<br>• सरसों का तेल: 14 बोतलें शेष<br>• तूर दाल: 48 किलोग्राम शेष<br><br>क्या नया ऑर्डर बनाना है?"
      },
      2: {
        en: "📊 <strong>Today's Sales Report:</strong><br>• Invoices generated: 8 bills<br>• Gross Sales: ₹24,850<br>• Pending dues: ₹4,200<br><br>Type <em>\"Monthly report\"</em> to see detailed profit margins.",
        hinglish: "📊 <strong>Aaj ki bikri report:</strong><br>• Total bills: 8 banaye hain<br>• Aaj ka dhanda: ₹24,850<br>• Aaj ki udhaari: ₹4,200<br><br>Pura excel sheet download karne ke liye type karein: <em>\"Sales excel\"</em>",
        hi: "📊 <strong>आज की बिक्री रिपोर्ट:</strong><br>• कुल बिल: 8 बनाए गए हैं<br>• आज का कुल व्यापार: ₹24,850<br>• आज की उधारी: ₹4,200<br><br>पूरी एक्सेल शीट डाउनलोड करने के लिए टाइप करें: <em>\"Sales excel\"</em>"
      },
      3: {
        en: "📅 <strong>GST Report Calendar:</strong><br>Your GSTR-1 and GSTR-3B summaries for last month are ready compiled.<br><br>📄 <strong className=\"text-[#128C7E] underline cursor-pointer\">GSTR1_June_Report.xls (42 KB)</strong><br><br>Send this directly to your CA now?",
        hinglish: "📅 <strong>GST Report Notice:</strong><br>Aapka pichle mahine ka GSTR-1 data taiyaar hai.<br><br>📄 <strong className=\"text-[#128C7E] underline cursor-pointer\">GSTR1_June_Report.xls (42 KB)</strong><br><br>Kya ise aapke CA ko bhej doon?",
        hi: "📅 <strong>जीएसटी रिपोर्ट सूचना:</strong><br>आपका पिछले महीने का GSTR-1 डेटा तैयार है।<br><br>📄 <strong className=\"text-[#128C7E] underline cursor-pointer\">GSTR1_June_Report.xls (42 KB)</strong><br><br>क्या इसे आपके सीए को भेज दूँ?"
      },
      4: {
        en: "✅ <strong>Bill created!</strong><br><strong>Verma Traders</strong><br>Items: General Items — ₹4,200<br>GST 5% — ₹210<br><strong>Total — ₹4,410</strong><br>Bill number: #2848<br><br>📤 Share PDF to Verma Ji?",
        hinglish: "✅ <strong>Bill ban gaya!</strong><br><strong>Verma Traders</strong><br>Items: Kiraana Saman — ₹4,200<br>GST 5% — ₹210<br><strong>Total — ₹4,410</strong><br>Bill number: #2848<br><br>📤 Verma ji ko send karu WhatsApp pe?",
        hi: "✅ <strong>बिल बन गया है!</strong><br><strong>वर्मा ट्रेडर्स</strong><br>सामग्री: किराना सामान — ₹4,200<br>जीएसटी 5% — ₹210<br><strong>कुल — ₹4,410</strong><br>बिल संख्या: #2848<br><br>📤 वर्मा जी को भेज दूँ?"
      },
      5: {
        en: "📝 <strong>Quotation #Q-948 created!</strong><br>Client: Gupta Builders<br>Estimated budget: ₹1,20,000<br><br>PDF quotation ready to send to client. Type <em>\"Make invoice\"</em> to lock it as a sales bill.",
        hinglish: "📝 <strong>Quotation #Q-948 taiyaar!</strong><br>Client: Gupta Builders<br>Budget estimate: ₹1,20,000<br><br>Kya ye quotation client ko share karein? Is bill ko lock karne ke liye type karein: <em>\"Quotation to bill\"</em>",
        hi: "📝 <strong>कोटेशन #Q-948 तैयार!</strong><br>ग्राहक: गुप्ता बिल्डर्स<br>अनुमानित बजट: ₹1,20,000<br><br>क्या यह कोटेशन ग्राहक को भेज दूँ? इसे पक्के बिल में बदलने के लिए टाइप करें: <em>\"Quotation to bill\"</em>"
      },
      6: {
        en: "💸 <strong>Expense Logged!</strong><br>Category: Shop Maintenance<br>Amount: ₹1,200<br>Details: Electrician dues.<br><br>Your monthly expense ledger is updated. Total expenses so far: ₹14,800.",
        hinglish: "💸 <strong>Kharcha add ho gaya!</strong><br>Category: Dukaan ka kaam<br>Amount: ₹1,200<br>Details: Electrician ki fees.<br><br>Monthly kharcha book update ho gayi hai. Is mahine ke total kharche: ₹14,800.",
        hi: "💸 <strong>खर्च दर्ज हो गया है!</strong><br>श्रेणी: दुकान रखरखाव<br>राशि: ₹1,200<br>विवरण: इलेक्ट्रीशियन शुल्क।<br><br>आपकी मासिक खर्च बही अपडेट हो गई है। कुल खर्च: ₹14,800।"
      }
    };
    return responses[chipIndex][lang];
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isTyping) return;

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(15); // soft haptic feedback on send message
    }

    scrollToPhone();

    const userText = inputText.trim();
    setInputText('');

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Add user message
    setChatHistory((prev) => [
      ...prev,
      {
        id: `user-input-${Date.now()}`,
        sender: 'user',
        text: userText,
        time: currentTime,
      },
    ]);

    // 2. Play typing indicator
    setIsTyping(true);

    // 3. Generate response based on user keywords after 1200ms
    setTimeout(() => {
      setIsTyping(false);

      const textLower = userText.toLowerCase();
      let replyText = '';

      if (textLower.includes('stock') || textLower.includes('inventory') || textLower.includes('maal')) {
        replyText = getDemoReplies(1, currentLang);
      } else if (textLower.includes('sale') || textLower.includes('bikri') || textLower.includes('dhanda') || textLower.includes('report')) {
        replyText = getDemoReplies(2, currentLang);
      } else if (textLower.includes('gst') || textLower.includes('tax') || textLower.includes('ca')) {
        replyText = getDemoReplies(3, currentLang);
      } else if (textLower.includes('bill') || textLower.includes('invoice') || textLower.includes('verma')) {
        replyText = getDemoReplies(4, currentLang);
      } else if (textLower.includes('quotation') || textLower.includes('estimate') || textLower.includes('gupta')) {
        replyText = getDemoReplies(5, currentLang);
      } else if (textLower.includes('expense') || textLower.includes('kharcha') || textLower.includes('spend')) {
        replyText = getDemoReplies(6, currentLang);
      } else if (textLower.includes('hello') || textLower.includes('hi') || textLower.includes('namaste') || textLower.includes('hey')) {
        replyText = currentLang === 'hi'
          ? "👋 नमस्ते! मैं आपका बिलरेडी व्हाट्सएप सहायक हूँ। आप मुझसे अपने स्टॉक, जीएसटी या बिक्री के बारे में पूछ सकते हैं!"
          : currentLang === 'hinglish'
          ? "👋 Namaste! Main aapka BillReady WhatsApp assistant hoon. Aap mujhse stock, GST ya aaj ki sales ke baare me pooch sakte hain!"
          : "👋 Hello! I am your BillReady WhatsApp assistant. You can ask me about stock, GST, or today's sales!";
      } else {
        replyText = currentLang === 'hi'
          ? `🤖 <strong>बिलरेडी एआई सहायक:</strong><br>मुझे आपका संदेश प्राप्त हुआ: <em>"${userText}"</em><br><br>बिलरेडी व्हाट्सएप पर इन सभी अनुरोधों को स्वचालित रूप से संभाल सकता है! बाईं ओर दिए गए बटनों पर क्लिक करके त्वरित डेमो देखें।`
          : currentLang === 'hinglish'
          ? `🤖 <strong>BillReady AI Assistant:</strong><br>Aapka message mil gaya: <em>"${userText}"</em><br><br>BillReady WhatsApp pe ye sab kaam automatic kar sakta hai! Left side ke buttons click karke ek baar live demo dekh lijiye.`
          : `🤖 <strong>BillReady AI Assistant:</strong><br>I received your message: <em>"${userText}"</em><br><br>BillReady can automatically process all such requests on WhatsApp! Click the buttons on the left to see the instant live demo.`;
      }

      setChatHistory((prev) => [
        ...prev,
        {
          id: `billready-reply-${Date.now()}`,
          sender: 'billready',
          text: replyText,
          time: currentTime,
        },
      ]);
    }, 1200);
  };

  const handleChipClick = (index: number, labelKey: string) => {
    if (isTyping) return;

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(20); // quick haptic vibration on interactive action click
    }

    scrollToPhone();

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsgText = t(labelKey);

    // 1. Add user message
    const userMessageId = `user-demo-${Date.now()}`;
    setChatHistory((prev) => [
      ...prev,
      {
        id: userMessageId,
        sender: 'user',
        text: userMsgText,
        time: currentTime,
      },
    ]);

    // 2. Play typing indicator
    setIsTyping(true);

    // 3. Add billready reply after 1200ms delay
    setTimeout(() => {
      setIsTyping(false);
      const replyText = getDemoReplies(index, currentLang);
      setChatHistory((prev) => [
        ...prev,
        {
          id: `billready-demo-${Date.now()}`,
          sender: 'billready',
          text: replyText,
          time: currentTime,
        },
      ]);
    }, 1200);
  };

  const commandChips = [
    { index: 1, label: 'chat-chip-1', fullCmd: 'demo-cmd-6' },
    { index: 2, label: 'chat-chip-2', fullCmd: 'demo-cmd-3' },
    { index: 3, label: 'chat-chip-3', fullCmd: 'demo-cmd-2' },
    { index: 4, label: 'chat-chip-4', fullCmd: 'demo-cmd-1' },
    { index: 5, label: 'chat-chip-5', fullCmd: 'demo-cmd-4' },
    { index: 6, label: 'chat-chip-6', fullCmd: 'demo-cmd-5' },
  ];

  return (
    <section id="demo" className="py-10 sm:py-16 bg-white dark:bg-[#111B21] border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 px-3.5 py-1.5 rounded-full text-[#075E54] dark:text-[#25D366] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#25D366]" />
            <span>{t('demo-badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('demo-title')}
          </h2>
          <p 
            className="text-gray-500 dark:text-gray-300 text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('demo-desc') }}
          />
        </div>

        {/* Desktop Layout: grid md:grid-cols-12, stacks cleanly on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Command Card Selection Area (On mobile: displays first; stacks on top) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <span>{t('chat-chips-label')}</span>
            </h3>

            {/* Response Chips Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commandChips.map((chip) => (
                <button
                  key={chip.index}
                  onClick={() => handleChipClick(chip.index, chip.fullCmd)}
                  disabled={isTyping}
                  className="bg-gray-50 dark:bg-emerald-950/10 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:border-emerald-200 dark:hover:border-emerald-800/50 border border-gray-200/80 dark:border-emerald-900/20 p-4 sm:p-5 rounded-2xl text-left text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 shadow-sm active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none flex items-center space-x-3 cursor-pointer group"
                >
                  <div className="bg-white dark:bg-[#202c33] p-2 rounded-xl group-hover:bg-[#25D366]/10 text-emerald-950 dark:text-emerald-300 transition-colors">
                    {t(chip.label).split(' ')[0]} {/* Grab the emoji */}
                  </div>
                  <span className="flex-1">{t(chip.fullCmd).replace(/^"|"$/g, '')}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Chat Window Display (Stacks underneath) */}
          <div ref={phoneContainerRef} className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-[#ECE5DD] dark:bg-[#0b141a] border-[10px] border-gray-900 dark:border-gray-800 rounded-[40px] shadow-2xl h-[520px] flex flex-col overflow-hidden">
              
              {/* Top Notch Bar */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-900 rounded-full z-20 flex items-center justify-center">
                <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                <span className="w-10 h-1 bg-gray-800 rounded-full"></span>
              </div>

              {/* Chat Header */}
              <div className="bg-[#075E54] dark:bg-[#202c33] pt-8 pb-3 px-4 flex items-center justify-between text-white shadow-md z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center font-extrabold text-[#075E54] dark:text-[#25D366]">
                    BR
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide">BillReady</h3>
                    <p className="text-[10px] text-emerald-100 dark:text-gray-400">online</p>
                  </div>
                </div>
                <div className="text-emerald-100 text-sm font-bold">⋮</div>
              </div>

              {/* Message Box */}
              <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col pb-6">
                
                {/* Dynamically Map Message Stream */}
                {chatHistory.map((msg) => {
                  const isUser = msg.sender === 'user';
                  return (
                    <div 
                      key={msg.id} 
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                      <div className={`text-gray-800 dark:text-[#e9edef] text-xs py-2 px-3 rounded-xl shadow-sm max-w-[85%] relative border ${isUser ? 'bg-[#DCF8C6] dark:bg-[#005c4b] border-[#DCF8C6] dark:border-transparent' : 'bg-white dark:bg-[#202c33] border-gray-100 dark:border-transparent'}`}>
                        <p dangerouslySetInnerHTML={{ __html: msg.text }} />
                        <span className={`text-[8px] block text-right mt-1 ${isUser ? 'text-gray-500 dark:text-emerald-200/60' : 'text-gray-400 dark:text-gray-500'}`}>
                          {msg.time} {isUser && <span className="text-[#128C7E] dark:text-[#25D366] ml-0.5">✓✓</span>}
                        </span>
                        {/* Triangle Tail */}
                        {isUser ? (
                          <div className="absolute right-[-6px] top-0 w-0 h-0 border-t-[8px] border-t-[#DCF8C6] dark:border-t-[#005c4b] border-r-[8px] border-r-transparent"></div>
                        ) : (
                          <div className="absolute left-[-6px] top-0 w-0 h-0 border-t-[8px] border-t-white dark:border-t-[#202c33] border-l-[8px] border-l-transparent"></div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Self-Destructing Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-[#202c33] text-gray-800 dark:text-[#e9edef] py-2 px-3 rounded-xl shadow-sm border border-gray-100 dark:border-transparent flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                )}
                
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="bg-[#f0f0f0] dark:bg-[#1f2c34] p-2 flex items-center space-x-1.5 border-t border-gray-200 dark:border-transparent">
                <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-full px-3.5 py-1.5 flex items-center justify-between text-xs text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-transparent shadow-inner">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    disabled={isTyping}
                    placeholder={t('whatsapp-msg-placeholder')}
                    className="flex-1 bg-transparent border-none outline-none text-gray-800 dark:text-[#e9edef] text-xs placeholder-gray-400 focus:ring-0"
                  />
                  <button 
                    type="submit"
                    disabled={!inputText.trim() || isTyping}
                    className="text-[#075E54] dark:text-[#00a884] hover:text-[#25D366] disabled:text-gray-300 dark:disabled:text-gray-600 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button 
                  type="button"
                  disabled={isTyping}
                  onClick={() => {
                    setInputText(currentLang === 'hi' ? 'आज की बिक्री दिखाएं' : currentLang === 'hinglish' ? 'Aaj ki bikri dikhao' : "Show me today's sales report");
                    scrollToPhone();
                  }}
                  className="bg-[#075E54] dark:bg-[#00a884] hover:bg-[#0b7468] dark:hover:bg-[#00bfa5] p-2 rounded-full text-white cursor-pointer active:scale-95 transition-transform disabled:opacity-50"
                  title="Voice Command Shortcut"
                >
                  <Mic className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default LiveDemo;
