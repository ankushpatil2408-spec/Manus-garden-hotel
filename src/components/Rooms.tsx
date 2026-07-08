import { useState } from 'react';
import { motion } from 'motion/react';
import { Bed, Users, Expand, Trees, CheckCircle, Sparkles } from 'lucide-react';
import { ROOMS_DATA } from '../data';

interface RoomsProps {
  onOpenBooking: (roomId?: string) => void;
}

export default function Rooms({ onOpenBooking }: RoomsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'deluxe' | 'luxury' | 'suite'>('all');

  const filteredRooms = activeTab === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter(room => room.type === activeTab);

  const tabItems = [
    { label: 'All Sanctuaries', value: 'all' },
    { label: 'Deluxe Rooms', value: 'deluxe' },
    { label: 'Luxury Suites', value: 'luxury' },
    { label: 'Royal Suites', value: 'suite' },
  ];

  return (
    <section id="rooms" className="relative py-24 bg-[#0F2922] text-white overflow-hidden" aria-label="Our Accommodations">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Luxury Sanctuaries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Suites & Private Cottages
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded-sm" />
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Crafted for ultimate recovery, our guest rooms pair nature-inspired organic materials with state-of-the-art climate control, glass facades, and sweeping views of Raver's majestic landscape.
          </p>
        </div>

        {/* Tab Selection Filter */}
        <div className="flex justify-center flex-wrap gap-2 mt-12 mb-16">
          {tabItems.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === tab.value
                  ? 'bg-[#D4AF37] text-[#0F2922] font-bold shadow-md'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300'
              }`}
              id={`room-tab-${tab.value}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="space-y-16">
          {filteredRooms.map((room, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
                id={`room-item-row-${room.id}`}
              >
                {/* Room Image Container */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative rounded-sm overflow-hidden aspect-[16/10] bg-zinc-900 border border-[#D4AF37]/20 shadow-2xl">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    {/* Price Tag badge inside image */}
                    <div className="absolute bottom-5 left-5 glass-panel py-2 px-4 rounded-sm border border-[#D4AF37]/30">
                      <span className="block text-[10px] text-[#D4AF37] uppercase font-mono tracking-wider">Prices from</span>
                      <p className="font-mono text-xl font-bold text-white">
                        ₹{room.price.toLocaleString('en-IN')}<span className="text-xs text-zinc-300 font-sans"> / Night</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Room Text Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
                      {room.type === 'suite' ? 'Emperor Class' : room.type === 'luxury' ? 'Premium Suite' : 'Deluxe Leisure'}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {room.name}
                    </h3>
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                    {room.description}
                  </p>

                  {/* Room Quick specifications Grid */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 font-sans text-xs sm:text-sm text-zinc-300">
                    <div className="flex items-center gap-2.5">
                      <Expand className="w-4.5 h-4.5 text-[#D4AF37]" />
                      <span>{room.size} Space</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Users className="w-4.5 h-4.5 text-[#D4AF37]" />
                      <span>Accommodates {room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Bed className="w-4.5 h-4.5 text-[#D4AF37]" />
                      <span>{room.bed}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Trees className="w-4.5 h-4.5 text-[#D4AF37]" />
                      <span>Scenic {room.view}</span>
                    </div>
                  </div>

                  {/* High Value Amenities Chips */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-widest font-mono text-[#D4AF37] font-semibold">Included Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.slice(0, 4).map((amenity) => (
                        <span
                          key={amenity}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-xs text-zinc-300 flex items-center gap-1.5"
                        >
                          <CheckCircle className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                          <span>{amenity}</span>
                        </span>
                      ))}
                      {room.amenities.length > 4 && (
                        <span className="px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] rounded-sm text-xs font-semibold">
                          +{room.amenities.length - 4} More
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Book button */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest bg-[#D4AF37] text-[#0F2922] hover:bg-[#B8982E] transition-colors text-center cursor-pointer shadow-md"
                      id={`room-book-btn-${room.id}`}
                    >
                      Instant Booking
                    </button>
                    <a
                      href="#contact"
                      className="px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/15 hover:bg-white/10 transition-colors text-center text-zinc-300"
                      id={`room-enquire-btn-${room.id}`}
                    >
                      Enquire Details
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
