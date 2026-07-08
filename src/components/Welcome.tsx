import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { HIGHLIGHTS, HOTEL_DETAILS } from '../data';

export default function Welcome() {
  return (
    <section id="about" className="relative py-24 bg-[#FCFAF7] text-[#1A2E26] overflow-hidden" aria-label="About the Hotel">
      {/* Decorative nature icons background */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 opacity-5 pointer-events-none flex justify-between px-10">
        <Icons.Leaf className="w-96 h-96 text-[#0F2922] rotate-45" />
        <Icons.TreePine className="w-96 h-96 text-[#0F2922] -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Welcome Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Welcome Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold block">
                Welcome to Sublime Retreat
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0F2922]">
                Manas Garden Hotel
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] rounded-sm" />
            </div>

            <p className="text-zinc-600 leading-relaxed font-sans text-sm sm:text-base">
              Nestled along the scenic <span className="font-semibold text-[#0F2922]">Burhanpur Road in Raver, Maharashtra</span>, Manas Garden Hotel is a premium nature-focused resort designed for travelers seeking refined elegance and serene quietude. Surrounded by sprawling manicured botanical groves, our hotel seamlessly fuses luxury modern glass architectures with beautiful regional culture.
            </p>

            <p className="text-zinc-600 leading-relaxed font-sans text-sm sm:text-base">
              Whether you are here to relax in our state-of-the-art garden suites, relish authentic regional delicacies (including our famous local <span className="font-semibold italic text-[#D4AF37]">Mawa Jalebi</span>) at our open-air restaurant, or celebrate once-in-a-lifetime marital milestones on our vast green lawns, we promise an impeccable experience gilded with warm, gold-standard Indian hospitality.
            </p>

            {/* Micro Stats or Highlights Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 text-center border-t border-zinc-200">
              <div className="p-3 bg-white rounded-sm border border-zinc-200">
                <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F2922]">2.5k+</p>
                <p className="text-[10px] text-[#1A2E26]/60 uppercase tracking-wider font-semibold mt-1">Happy Guests</p>
              </div>
              <div className="p-3 bg-white rounded-sm border border-zinc-200">
                <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F2922]">1.5 Acre</p>
                <p className="text-[10px] text-[#1A2E26]/60 uppercase tracking-wider font-semibold mt-1">Lush Lawns</p>
              </div>
              <div className="p-3 bg-white rounded-sm border border-zinc-200">
                <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F2922]">24/7</p>
                <p className="text-[10px] text-[#1A2E26]/60 uppercase tracking-wider font-semibold mt-1">Full Service</p>
              </div>
            </div>
          </div>

          {/* Welcome Interactive Showcase Images */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-[#D4AF37]/30 aspect-[4/5] bg-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
                alt="Manas Garden Walks"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2922]/60 to-transparent" />
              {/* Glass Floating Location Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-sm shadow-md border border-[#D4AF37]/20">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold">Resort Location</p>
                <p className="text-xs text-[#1A2E26] font-sans mt-0.5 font-medium">
                  {HOTEL_DETAILS.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-28 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              Unrivaled Indulgences
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F2922]">
              The Gold Standard of Hospitality
            </h3>
            <p className="text-zinc-500 text-sm">
              We focus on the minute details to craft a completely stress-free and luxurious environment for our esteemed guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((highlight, index) => {
              const IconComp = (Icons as any)[highlight.icon] || Icons.HelpCircle;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white hover:bg-[#0F2922] p-6 rounded-sm border border-zinc-200 hover:border-[#D4AF37]/30 shadow-sm hover:shadow-xl transition-all duration-300"
                  id={`highlight-card-${index}`}
                >
                  <div className="w-12 h-12 rounded-sm bg-[#0F2922]/5 text-[#0F2922] group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center border border-[#0F2922]/10 group-hover:border-[#D4AF37]/30 transition-colors mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#0F2922] group-hover:text-[#D4AF37] transition-colors mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-zinc-500 group-hover:text-[#FCFAF7]/90 text-xs sm:text-sm leading-relaxed transition-colors">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
