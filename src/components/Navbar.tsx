import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Leaf, Sparkles } from 'lucide-react';
import { HOTEL_DETAILS } from '../data';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
  activeSection: string;
}

export default function Navbar({ onOpenBooking, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Restaurant', href: '#restaurant' },
    { name: 'Events', href: '#events' },
    { name: 'Garden', href: '#garden' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of the navbar
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F2922] py-3 border-b border-[#D4AF37]/30 shadow-lg'
          : 'bg-[#0F2922]/90 backdrop-blur-md py-4 border-b border-[#D4AF37]/15'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
            id="navbar-logo"
          >
            <div className="relative w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/20">
              <Leaf className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <span className="block font-serif text-lg font-bold tracking-widest text-[#D4AF37] group-hover:text-[#B8982E] transition-colors uppercase leading-none">
                Manas Garden
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/80 font-mono leading-none block mt-0.5">
                Luxury Boutique Hotel
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs uppercase tracking-widest font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold border-b border-[#D4AF37]'
                      : 'text-white/80 hover:text-[#D4AF37]'
                  }`}
                  id={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Call & Book Now Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${HOTEL_DETAILS.phone.replace(/\s+/g, '')}`}
              className="text-white/80 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-xs font-mono"
              id="navbar-call-btn"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{HOTEL_DETAILS.phone}</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest bg-[#D4AF37] text-[#0F2922] hover:bg-[#B8982E] transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
              id="navbar-book-now-btn"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={`tel:${HOTEL_DETAILS.phone.replace(/\s+/g, '')}`}
              className="p-2 rounded-sm bg-[#FCFAF7]/10 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#FCFAF7]/20 transition-colors"
              aria-label="Call Now"
              id="navbar-mobile-call-icon"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-sm text-white/80 hover:text-[#D4AF37] hover:bg-[#FCFAF7]/10 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
              id="navbar-toggle-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[64px] z-30 lg:hidden">
          {/* Blur Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="absolute top-0 left-0 right-0 bg-[#0F2922] border-b border-[#D4AF37]/30 py-6 px-4 space-y-4 shadow-2xl flex flex-col items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block text-sm uppercase tracking-widest font-medium py-2 w-full text-center border-b border-white/10 ${
                    isActive ? 'text-[#D4AF37] font-bold' : 'text-white/80'
                  }`}
                  id={`nav-mobile-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              );
            })}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full max-w-sm mt-4 py-3 bg-[#D4AF37] text-[#0F2922] hover:bg-[#B8982E] font-bold uppercase tracking-widest text-xs rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              id="nav-mobile-book-now-btn"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Stay Now</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
