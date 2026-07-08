import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Flame, Coffee, Leaf, Sparkles } from 'lucide-react';
import { DISHES_DATA, IMAGES } from '../data';

export default function Restaurant() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starters' | 'mains' | 'desserts' | 'beverages'>('all');

  const filteredDishes = activeCategory === 'all'
    ? DISHES_DATA
    : DISHES_DATA.filter(dish => dish.category === activeCategory);

  const categories = [
    { label: 'All Delicacies', value: 'all' },
    { label: 'Signature Starters', value: 'starters' },
    { label: 'Main Courses', value: 'mains' },
    { label: 'Royal Desserts', value: 'desserts' },
    { label: 'Botanical Beverages', value: 'beverages' },
  ];

  return (
    <section id="restaurant" className="relative py-24 bg-[#FCFAF7] text-[#1E222F] overflow-hidden" aria-label="Garden Restaurant">
      {/* Background aesthetics */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#0B0F19]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
                Epicurean Oasis
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0B0F19] leading-tight">
                Al Fresco Garden Dining
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] rounded-sm" />
            </div>

            <p className="text-zinc-600 leading-relaxed font-sans text-sm sm:text-base">
              Immerse yourself in a sublime culinary voyage at our signature open-air pavilion. Surrounded by towering tropical palm trees and soft golden string lights, our culinary masters prepare traditional dishes infused with local flair.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-sm bg-[#0B0F19]/5 text-[#0B0F19] border border-[#0B0F19]/10">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#0B0F19] text-sm sm:text-base">Organic, Garden-to-Table</h4>
                  <p className="text-xs text-zinc-500">Vegetables, herbs, and citrus garnishes harvested directly from our botanical beds.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-sm bg-[#0B0F19]/5 text-[#0B0F19] border border-[#0B0F19]/10">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#0B0F19] text-sm sm:text-base">Authentic Clay Tandoor</h4>
                  <p className="text-xs text-zinc-500">Delicately charred naans, seekh kebabs, and paneer tikkas cooked on live red coals.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-sm bg-[#0B0F19]/5 text-[#0B0F19] border border-[#0B0F19]/10">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#0B0F19] text-sm sm:text-base">Burhanpur Traditions</h4>
                  <p className="text-xs text-zinc-500">World-famous warm Mawa Jalebis made fresh in small batches under your eyes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Hero Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-[#D4AF37]/20 aspect-[16/10] bg-zinc-900 group">
              <img
                src={IMAGES.gardenRestaurant}
                alt="Manas Garden Restaurant"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37]">Atmosphere</span>
                  <p className="font-serif text-lg sm:text-xl font-bold">The Palms Dining Pavilion</p>
                </div>
                <div className="flex items-center gap-1 bg-[#D4AF37] text-[#0B0F19] px-3 py-1 rounded-sm text-xs font-bold font-mono shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>4.9 Star Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Showcase Section */}
        <div className="space-y-12 border-t border-zinc-200/60 pt-20">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              Culinary Artistry
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B0F19]">
              The Epicurean Menu Highlights
            </h3>
            <p className="text-zinc-500 text-sm">
              Savor a curated selection of our finest signature dishes, prepared using heirloom recipes and fresh spices.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value as any)}
                className={`px-5 py-2 rounded-sm text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-[#0B0F19] text-[#FCFAF7] font-semibold shadow-md'
                    : 'bg-white border border-zinc-200 hover:bg-[#FCFAF7] text-[#1E222F]'
                }`}
                id={`dish-tab-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredDishes.map((dish, idx) => (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-sm overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  id={`dish-card-${dish.id}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {dish.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-[#0B0F19]/90 backdrop-blur-sm text-white text-[9px] font-semibold uppercase tracking-wider rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-lg font-bold text-[#0B0F19] group-hover:text-[#D4AF37] transition-colors leading-tight">
                          {dish.name}
                        </h4>
                        <span className="font-mono text-sm font-bold text-[#0B0F19] flex-shrink-0 ml-3">
                          ₹{dish.price}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                        {dish.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-zinc-200/60 text-xs">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-sm font-mono font-bold">
                        <Sparkles className="w-3 h-3" /> Chef Recommended
                      </span>
                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-mono font-bold text-zinc-700">{dish.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
