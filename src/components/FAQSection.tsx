import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { FAQS_DATA } from '../data';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-[#0F2922] text-white overflow-hidden" aria-label="Frequently Asked Questions">
      {/* Decorative background circle */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header block */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" /> Need Assistance?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded-sm" />
          <p className="text-zinc-300 text-sm">
            Find immediate answers regarding local routes, event hosting limits, catering customization, and lodging rules.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-sm border border-[#D4AF37]/20 overflow-hidden bg-white/5 backdrop-blur-sm transition-colors duration-300"
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left py-4 px-6 flex items-center justify-between gap-4 font-serif font-semibold text-sm sm:text-base text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                  id={`faq-trigger-${faq.id}`}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className="w-6 h-6 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-white/10 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Live Support Box */}
        <div className="mt-12 text-center p-6 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 max-w-lg mx-auto space-y-3">
          <p className="font-serif text-sm font-semibold text-[#D4AF37]">Have a custom requirement or planning a mega event?</p>
          <p className="text-zinc-400 text-xs">Reach out directly to our helpdesk and get custom quotes in under 2 hours.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#D4AF37] hover:bg-[#B8982E] text-[#0F2922] font-bold uppercase tracking-widest text-[10px] rounded-sm transition-colors cursor-pointer"
            id="faq-chat-link"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat with Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
