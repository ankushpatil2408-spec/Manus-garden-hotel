import { motion } from 'motion/react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { REVIEWS_DATA } from '../data';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#FCFAF7] text-[#1A2E26] overflow-hidden" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#0F2922]/5 border border-[#0F2922]/10 text-[#0F2922] rounded-full">
            <MessageSquare className="w-3.5 h-3.5" /> Guest Diaries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0F2922]">
            What Our Guests Cherish
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded-sm" />
          <p className="text-zinc-500 text-sm">
            Read through real, heartwarming logs written by patrons who celebrated milestones and discovered luxury stays at our resort.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-sm border border-zinc-200 shadow-sm relative flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
              id={`review-card-${review.id}`}
            >
              {/* Quote icon overlay */}
              <Quote className="w-8 h-8 text-[#D4AF37]/10 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1 text-[#D4AF37]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-600 font-sans text-xs sm:text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-200/60 mt-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-sm object-cover border border-[#D4AF37]/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#0F2922]">{review.name}</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 mt-0.5">
                    <span className="font-semibold text-[#D4AF37]">{review.location}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
