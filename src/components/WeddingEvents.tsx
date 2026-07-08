import { motion } from 'motion/react';
import { Calendar, Users, Music, Heart, MapPin, Sparkles } from 'lucide-react';
import { IMAGES, HOTEL_DETAILS } from '../data';

export default function WeddingEvents() {
  const eventPackages = [
    {
      title: 'Royal Wedding Celebration',
      description: 'The ultimate royal wedding package covering complete lawn staging, floral altar decoration, entry light archway, dining setups, and accommodation suites for guests.',
      capacity: 'Up to 2,000 Guests',
      lawn: 'Main Grand lawn (1.5 Acres)',
      features: ['Palms Entrance Pathway', 'Shahi Banquet Catering', 'Bridal Suite Lounge Access', 'Dynamic Truss Sound & Light Staging']
    },
    {
      title: 'Grand Evening Reception',
      description: 'Elegant night receptions complete with ambient fairy-light curtains, majestic dining pavilions, a central music stage, and live culinary counters.',
      capacity: '500 - 1,500 Guests',
      lawn: 'Signature Central lawn',
      features: ['High-definition ambient styling', 'Multi-cuisine dessert stations', 'VIP valet parking facility', 'Dedicated stage backdrop design']
    },
    {
      title: 'Boutique Haldi & Mehendi',
      description: 'Sun-drenched botanical garden pocket venues styled with yellow floral drapes, canopy swings, and traditional sitting lounges for pre-wedding functions.',
      capacity: '100 - 300 Guests',
      lawn: 'Palm Grove pocket lawn',
      features: ['Traditional decorative setups', 'Fresh fruit coolers bar', 'Dedicated DJ staging', 'Traditional swing and photo booths']
    }
  ];

  const handleEnquiry = (packageName: string) => {
    const text = `Hello Manas Garden Hotel, I would like to enquire about your event services for the "${packageName}" package. Please share details and pricing.`;
    window.open(`https://wa.me/${HOTEL_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="events" className="relative py-24 bg-[#0F2922] text-white overflow-hidden" aria-label="Weddings and Celebrations">
      {/* Dynamic background lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] rounded-full">
              <Heart className="w-3.5 h-3.5 text-[#D4AF37]" /> Once In A Lifetime
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              A Majestic Stage for Majestic Vows
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] rounded-sm" />
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
              Host your dream celebrations at the most prestigious wedding destination along Burhanpur Road. Spanning over 1.5 acres of perfectly manicured, emerald-green carpet lawns, <span className="font-semibold text-[#D4AF37]">Manas Garden</span> provides an elegant blend of natural beauty and customized event structures.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden aspect-[16/9] border border-[#D4AF37]/20 shadow-2xl bg-zinc-900 group">
              <img
                src={IMAGES.weddingGarden}
                alt="Manas Grand Wedding Setup"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2922]/80 to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {eventPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              id={`event-pkg-${index}`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F2922] transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                    {pkg.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="space-y-2 py-4 border-y border-white/5 font-sans text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Users className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>Capacity: {pkg.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>Venue: {pkg.lawn}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] block font-semibold">Included Services</span>
                  <ul className="space-y-1.5 font-sans text-zinc-300">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => handleEnquiry(pkg.title)}
                className="w-full mt-8 py-3 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-white hover:text-[#0F2922] border border-[#D4AF37]/20 hover:border-transparent rounded-sm text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer flex justify-center items-center gap-2"
                id={`event-pkg-btn-${index}`}
              >
                <Music className="w-3.5 h-3.5" />
                <span>Enquire Date</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
