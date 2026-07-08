import { motion } from 'motion/react';
import { Leaf, Sun, Compass, Trees, Flower2, Heart } from 'lucide-react';

export default function GardenSection() {
  const gardenFeatures = [
    {
      icon: Trees,
      title: 'Botanical Palm Groves',
      description: 'Lined with towering royal palms and tropical foliage, offering cool, shaded walkways even in peak Maharashtrian summer.'
    },
    {
      icon: Flower2,
      title: 'Heirloom Flower Beds',
      description: 'Carefully curated seasonal blossoms framing our pathways, diffusing delicate aromas and vibrant natural colors.'
    },
    {
      icon: Sun,
      title: 'Sunset Leisure Gazebos',
      description: 'Elegant wooden gazebos surrounded by green foliage, perfect for early morning meditation, yoga, or private evening high tea.'
    },
    {
      icon: Compass,
      title: 'Satpura Mountain Views',
      description: 'Breathtaking open views of the distant majestic Satpura mountain range, providing a perfect natural backdrop for portraits.'
    }
  ];

  return (
    <section id="garden" className="relative py-24 bg-[#FCFAF7] text-[#1E222F] overflow-hidden" aria-label="Our Botanical Gardens">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-sm overflow-hidden aspect-square bg-zinc-100 border border-[#D4AF37]/20 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80"
                  alt="Manas Garden Flowers"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-sm overflow-hidden aspect-[4/5] bg-zinc-100 border border-[#D4AF37]/20 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1546412414-e1885261b951?auto=format&fit=crop&w=600&q=80"
                  alt="Garden Canopy Walk"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-sm overflow-hidden aspect-[4/5] bg-zinc-100 border border-[#D4AF37]/20 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
                  alt="Evening Lawn Pathways"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-sm overflow-hidden aspect-square bg-zinc-100 border border-[#D4AF37]/20 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80"
                  alt="Resort Canopy Trees"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Description and features */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
                The Sanctuary of Serenity
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0B0F19] leading-tight">
                An Oasis of Calm and Fresh Air
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] rounded-sm" />
            </div>

            <p className="text-zinc-600 leading-relaxed font-sans text-sm sm:text-base">
              The very core of the <span className="font-semibold text-[#0B0F19]">Manas Garden</span> experience lies in our deep respect for nature. Carefully planted with species of palms, botanical shrubs, and aromatic blossom beds, our property produces an air-purified microclimate that refreshes you from the moment you step in.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {gardenFeatures.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                    id={`garden-feat-${index}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-sm bg-[#0B0F19]/5 text-[#0B0F19] border border-[#0B0F19]/10 flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <h4 className="font-serif font-bold text-[#0B0F19] text-sm sm:text-base">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed pl-10 font-sans">
                      {feat.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA panel inside Garden Section */}
            <div className="p-5 rounded-sm bg-white border border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <Leaf className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#0B0F19]">Seeking Peace?</h4>
                  <p className="text-xs text-zinc-500">Plan a weekend retreat under Satpura valleys.</p>
                </div>
              </div>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-[#0B0F19] hover:bg-[#1C2538] text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
                id="garden-explore-link"
              >
                Plan Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
