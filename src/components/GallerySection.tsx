import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Eye, Sparkles } from 'lucide-react';
import { GALLERY_DATA } from '../data';

export default function GallerySection() {
  const [filter, setFilter] = useState<'all' | 'rooms' | 'restaurant' | 'garden' | 'wedding' | 'resort'>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === filter);

  const categories = [
    { label: 'All Photos', value: 'all' },
    { label: 'Suites', value: 'rooms' },
    { label: 'Restaurant', value: 'restaurant' },
    { label: 'Botanical Garden', value: 'garden' },
    { label: 'Weddings', value: 'wedding' },
    { label: 'Resort Facade', value: 'resort' },
  ];

  return (
    <section id="gallery" className="relative py-24 bg-[#0B0F19] text-white overflow-hidden" aria-label="Photo Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] rounded-full">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" /> Moments In Nature
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Photo Gallery
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded-sm" />
          <p className="text-zinc-300 text-sm">
            Walk virtually through our lush gardens, fine dining pavilions, romantic wedding alters, and high-end suites.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value as any)}
              className={`px-4.5 py-2 rounded-sm text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                filter === cat.value
                  ? 'bg-[#D4AF37] text-[#0B0F19] font-bold shadow-md'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300'
              }`}
              id={`gallery-tab-${cat.value}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setLightboxImage(item.image)}
                className="group relative aspect-square rounded-sm overflow-hidden bg-zinc-900 border border-[#D4AF37]/20 cursor-pointer shadow-md hover:shadow-xl hover:border-[#D4AF37]/40 transition-all duration-300"
                id={`gallery-item-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Black Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4" />

                {/* Eye Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-sm bg-[#D4AF37] text-[#0B0F19] flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Label on Hover */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-0.5">
                    {item.category}
                  </span>
                  <p className="font-serif text-sm font-bold text-white line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Pop-up */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              id="gallery-lightbox-backdrop"
            />
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-2xl z-10"
              id="gallery-lightbox-container"
            >
              <img
                src={lightboxImage}
                alt="Enlarged Showcase View"
                className="w-full h-full object-contain max-h-[85vh]"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2 rounded-sm bg-black/50 hover:bg-[#D4AF37] hover:text-[#0B0F19] text-white transition-colors cursor-pointer"
                id="gallery-lightbox-close"
              >
                Close ×
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
