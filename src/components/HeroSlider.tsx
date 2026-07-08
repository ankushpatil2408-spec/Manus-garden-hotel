import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Search, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, HOTEL_DETAILS, ROOMS_DATA } from '../data';

interface HeroSliderProps {
  onOpenBooking: (roomId?: string) => void;
}

export default function HeroSlider({ onOpenBooking }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS_DATA[0].id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedRoomId);
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden bg-[#0F2922]" aria-label="Welcome Slider">
      {/* Slider Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
            id={`hero-slide-${current}`}
          >
            <img
              src={HERO_SLIDES[current].image}
              alt={HERO_SLIDES[current].title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2922] via-[#0F2922]/40 to-black/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Contents */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6 md:space-y-8 z-10 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
              id={`hero-content-${current}`}
            >
              <span className="inline-flex items-center gap-1 px-4 py-1 text-xs md:text-sm font-mono uppercase tracking-widest bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] rounded-full backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                Raver, Maharashtra
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                {HERO_SLIDES[current].title}
              </h1>
              <p className="font-serif italic text-lg sm:text-2xl text-[#D4AF37]">
                {HERO_SLIDES[current].subtitle}
              </p>
              <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300/90 leading-relaxed font-sans">
                {HERO_SLIDES[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Call to Actions inside Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3 bg-[#D4AF37] text-[#0F2922] hover:bg-[#B8982E] font-bold uppercase tracking-widest text-xs rounded-sm transition-colors shadow-lg cursor-pointer"
              id="hero-reserve-btn"
            >
              Reserve a Suite
            </button>
            <a
              href="#about"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/25 rounded-sm font-bold uppercase tracking-widest text-xs transition-all backdrop-blur-sm"
              id="hero-explore-btn"
            >
              Explore Resort
            </a>
          </motion.div>
        </div>
      </div>

      {/* Manual Slide Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-[#D4AF37] hover:text-[#0F2922] text-white transition-all cursor-pointer hidden md:block"
        id="hero-prev-btn"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-[#D4AF37] hover:text-[#0F2922] text-white transition-all cursor-pointer hidden md:block"
        id="hero-next-btn"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-2.5 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              idx === current ? 'bg-[#D4AF37] w-8' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            id={`hero-indicator-${idx}`}
          />
        ))}
      </div>

      {/* Quick Availability Form (Floating Glassmorphism Bar) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/3 px-4 max-w-6xl mx-auto hidden md:block">
        <form
          onSubmit={handleQuickSearch}
          className="glass-panel p-5 rounded-2xl border border-[#D4AF37]/20 shadow-2xl flex flex-row items-end gap-4 text-white"
          id="quick-check-form"
        >
          {/* Check-In */}
          <div className="flex-1 space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] flex items-center gap-1">
              <Calendar className="w-3 h-3" /> Check In
            </span>
            <input
              type="date"
              value={checkIn}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#0F2922]/80 border border-[#1A2E26] rounded-sm py-2 px-3 text-xs focus:outline-none focus:border-[#D4AF37] text-zinc-100 font-sans"
              id="quick-check-in"
            />
          </div>

          {/* Check-Out */}
          <div className="flex-1 space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] flex items-center gap-1">
              <Calendar className="w-3 h-3" /> Check Out
            </span>
            <input
              type="date"
              value={checkOut}
              min={checkIn || new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#0F2922]/80 border border-[#1A2E26] rounded-sm py-2 px-3 text-xs focus:outline-none focus:border-[#D4AF37] text-zinc-100 font-sans"
              id="quick-check-out"
            />
          </div>

          {/* Room Selection */}
          <div className="flex-grow space-y-1.5 max-w-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] flex items-center gap-1">
              Accommodation Style
            </span>
            <select
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="w-full bg-[#0F2922]/80 border border-[#1A2E26] rounded-sm py-2 px-3 text-xs focus:outline-none focus:border-[#D4AF37] text-zinc-100 font-sans"
              id="quick-room-type"
            >
              {ROOMS_DATA.map((room) => (
                <option key={room.id} value={room.id} className="bg-[#0F2922] text-white">
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {/* Check Availability Button */}
          <button
            type="submit"
            className="py-2.5 px-6 bg-[#D4AF37] text-[#0F2922] hover:bg-[#B8982E] font-bold uppercase tracking-widest text-xs rounded-sm flex items-center gap-2 shadow-lg transition-colors cursor-pointer"
            id="quick-search-btn"
          >
            <Search className="w-4 h-4" />
            <span>Check Rates</span>
          </button>
        </form>
      </div>
    </section>
  );
}
