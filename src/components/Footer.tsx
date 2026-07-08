import React from 'react';
import { Leaf, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { HOTEL_DETAILS } from '../data';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleWhatsApp = () => {
    const text = 'Hello Manas Garden Hotel, I am visiting your website and would like to ask a question.';
    window.open(`https://wa.me/${HOTEL_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <footer className="relative bg-[#0F2922] text-white border-t border-[#D4AF37]/20 pt-16 pb-8" aria-label="Footer and Fast Contact Floats">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="flex items-center gap-2 group cursor-pointer"
              id="footer-logo"
            >
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center">
                <Leaf className="w-4.5 h-4.5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="block font-serif text-base font-bold tracking-wider uppercase leading-none text-white">
                  Manas Garden
                </span>
                <span className="text-[8px] uppercase tracking-widest text-[#D4AF37]/80 font-mono leading-none">
                  L u x u r y  H o t e l
                </span>
              </div>
            </a>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
              Nestled on Burhanpur Road in Raver, Maharashtra, we are committed to providing you with premium rooms, bespoke dining, and grand garden events.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-[#D4AF37] uppercase tracking-widest">Explore Resort</h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-400 font-sans">
              <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-[#D4AF37] transition-colors">About Us</a>
              <a href="#rooms" onClick={(e) => handleScrollTo(e, '#rooms')} className="hover:text-[#D4AF37] transition-colors">Our Suites</a>
              <a href="#restaurant" onClick={(e) => handleScrollTo(e, '#restaurant')} className="hover:text-[#D4AF37] transition-colors">Restaurant</a>
              <a href="#events" onClick={(e) => handleScrollTo(e, '#events')} className="hover:text-[#D4AF37] transition-colors">Weddings</a>
              <a href="#garden" onClick={(e) => handleScrollTo(e, '#garden')} className="hover:text-[#D4AF37] transition-colors">The Garden</a>
              <a href="#gallery" onClick={(e) => handleScrollTo(e, '#gallery')} className="hover:text-[#D4AF37] transition-colors">Photo Grid</a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-[#D4AF37] transition-colors">Reach Us</a>
              <button onClick={() => onOpenBooking()} className="text-left hover:text-[#D4AF37] transition-colors font-bold text-[#D4AF37] cursor-pointer">Book Now</button>
            </div>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-400 font-sans">
            <h4 className="font-serif text-sm font-bold text-[#D4AF37] uppercase tracking-widest">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>{HOTEL_DETAILS.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`tel:${HOTEL_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{HOTEL_DETAILS.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`mailto:${HOTEL_DETAILS.email}`} className="hover:text-white transition-colors">{HOTEL_DETAILS.email}</a>
              </div>
            </div>
          </div>

          {/* Column 4: Location Hours */}
          <div className="space-y-4 text-xs sm:text-sm text-zinc-400 font-sans">
            <h4 className="font-serif text-sm font-bold text-[#D4AF37] uppercase tracking-widest">Operating Hours</h4>
            <ul className="space-y-1.5">
              <li>Lodging: <span className="text-white">24 Hours / 7 Days</span></li>
              <li>Restaurant: <span className="text-white">11:00 AM - 11:00 PM</span></li>
              <li>Lawn Event Bookings: <span className="text-white">09:00 AM - 08:00 PM</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-[10px] sm:text-xs font-mono">
          <p>© {new Date().getFullYear()} Manas Garden Hotel, Raver. All Rights Reserved.</p>
          <p>Designed with Luxury & Nature Accents</p>
        </div>
      </div>

      {/* GLOBAL FLOATING FAST-CONTACT CHANNELS */}

      {/* 1. Floating WhatsApp Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-30 group" id="whatsapp-floater-group">
        {/* Hover Tooltip */}
        <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#0F2922] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg border border-[#D4AF37]/30 font-mono whitespace-nowrap">
          Chat with Hotel
        </div>
        {/* Trigger */}
        <button
          onClick={handleWhatsApp}
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer animate-bounce border-2 border-white"
          aria-label="Contact Hotel on WhatsApp"
          id="whatsapp-floating-trigger"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm11.951-2.181c1.796-.002 3.548-.483 5.077-1.391l.363-.215 3.78.99-.997-3.693.237-.377c.998-1.59 1.526-3.428 1.523-5.321-.001-5.46-4.444-9.901-9.91-9.901-2.634 0-5.111 1.026-6.974 2.89a9.816 9.816 0 00-2.888 6.985c.003 5.459 4.447 9.9 9.922 9.9zm4.787-6.541c-.263-.131-1.553-.766-1.793-.853-.241-.087-.415-.131-.59.131-.174.262-.676.853-.829 1.028-.153.174-.306.196-.569.065-.262-.131-1.11-.409-2.113-1.302-.781-.697-1.309-1.558-1.462-1.82-.153-.262-.016-.403.116-.533.118-.117.262-.306.393-.459.131-.153.174-.262.262-.437.087-.174.044-.327-.022-.458-.066-.131-.59-1.42-.808-1.944-.213-.513-.447-.442-.613-.45-.16-.007-.343-.008-.526-.008-.183 0-.48.069-.731.343-.252.274-.959.937-.959 2.285 0 1.348.98 2.651 1.117 2.836.137.185 1.928 2.945 4.672 4.13.653.282 1.164.45 1.562.577.656.208 1.253.179 1.724.109.525-.078 1.553-.634 1.771-1.246.219-.613.219-1.139.153-1.246-.066-.109-.241-.174-.503-.306z" />
          </svg>
        </button>
      </div>

      {/* 2. Floating Call Now Button (Bottom-Left - Mobile only) */}
      <div className="fixed bottom-6 left-6 z-30 group sm:hidden" id="call-floater-group">
        <a
          href={`tel:${HOTEL_DETAILS.phone.replace(/\s+/g, '')}`}
          className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#0F2922] flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white animate-pulse"
          aria-label="Call Hotel Helpdesk"
          id="call-floating-trigger"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>
      </div>
    </footer>
  );
}
