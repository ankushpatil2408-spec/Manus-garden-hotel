import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Shield, Sparkles, Check, PhoneCall } from 'lucide-react';
import { ROOMS_DATA, HOTEL_DETAILS } from '../data';
import { Room } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export default function BookingModal({ isOpen, onClose, selectedRoomId }: BookingModalProps) {
  const [roomType, setRoomType] = useState<string>(selectedRoomId || ROOMS_DATA[0].id);
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [bookingRef, setBookingRef] = useState<string>('');

  const selectedRoom = ROOMS_DATA.find(r => r.id === roomType) || ROOMS_DATA[0];

  useEffect(() => {
    if (selectedRoomId) {
      setRoomType(selectedRoomId);
    }
  }, [selectedRoomId]);

  // Set default dates (tomorrow and day after)
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);

    setCheckIn(tomorrow.toISOString().split('T')[0]);
    setCheckOut(dayAfter.toISOString().split('T')[0]);
  }, []);

  const calculateNights = (): number => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const nights = calculateNights();
  const subtotal = selectedRoom.price * nights;
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const gst = (subtotal - discount) * 0.12; // 12% luxury hotel GST
  const total = subtotal - discount + gst;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'MANASGOLD' || promoCode.trim().toUpperCase() === 'NATURE10') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try MANASGOLD for 10% off!');
    }
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) {
      alert('Please fill out all required contact fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      const ref = 'MGB-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(ref);
      setIsSubmitting(false);
      setStep(2);
    }, 1800);
  };

  const handleWhatsAppShare = () => {
    const text = `Hello Manas Garden Hotel, I would like to reserve a stay!
*Booking Reference:* ${bookingRef}
*Room:* ${selectedRoom.name}
*Dates:* ${checkIn} to ${checkOut} (${nights} Nights)
*Guests:* ${guests}
*Name:* ${fullName}
*Phone:* ${phone}
*Total Amount:* ₹${total.toLocaleString('en-IN')}`;

    window.open(`https://wa.me/${HOTEL_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-sm bg-zinc-900 border border-[#D4AF37]/30 text-white flex flex-col md:flex-row shadow-2xl"
            id="booking-modal-body"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-sm bg-black/40 hover:bg-[#D4AF37] hover:text-[#0B0F19] text-white transition-colors cursor-pointer"
              id="close-booking-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Room Preview (Hidden on mobile or smaller screens) */}
            <div className="hidden md:flex md:w-5/12 bg-[#0B0F19]/40 p-6 flex-col justify-between border-r border-zinc-800/80">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-mono rounded-sm bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
                  Resort Suite Showcase
                </span>
                <div className="relative rounded-sm overflow-hidden h-44 border border-zinc-800">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-serif text-sm text-[#D4AF37]/90">Price per Night</p>
                    <p className="font-mono text-xl font-bold text-[#D4AF37]">₹{selectedRoom.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#D4AF37]/90">{selectedRoom.name}</h3>
                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">{selectedRoom.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800 text-xs">
                  <div>
                    <span className="text-zinc-500">Room Size:</span>
                    <p className="text-zinc-300 font-medium">{selectedRoom.size}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500">Max Capacity:</span>
                    <p className="text-zinc-300 font-medium">{selectedRoom.capacity}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500">Bed Type:</span>
                    <p className="text-zinc-300 font-medium">{selectedRoom.bed}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500">Scenery:</span>
                    <p className="text-zinc-300 font-medium">{selectedRoom.view}</p>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold">
                  <Shield className="w-4 h-4 flex-shrink-0" />
                  <span>Best Rate Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold">
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>Free Welcome Beverage on Arrival</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="w-full md:w-7/12 p-6 md:p-8 overflow-y-auto max-h-[90vh] flex flex-col justify-between">
              {step === 1 ? (
                <form onSubmit={handleBookSubmit} className="space-y-5">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#D4AF37]">Bespoke Reservation</h2>
                    <p className="text-xs text-zinc-400 mt-1">Book directly for premium benefits and regional delights.</p>
                  </div>

                  {/* Room Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300">Select Suite / Cottage</label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full bg-zinc-800/80 border border-zinc-700 rounded-sm py-2 px-3 text-sm text-zinc-200 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      id="booking-room-select"
                    >
                      {ROOMS_DATA.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name} (₹{room.price}/night)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Check-In and Check-Out Dates */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Check In
                      </label>
                      <input
                        type="date"
                        required
                        value={checkIn}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-zinc-800/80 border border-zinc-700 rounded-sm py-2 px-3 text-sm text-zinc-200 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                        id="booking-check-in"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Check Out
                      </label>
                      <input
                        type="date"
                        required
                        value={checkOut}
                        min={checkIn || new Date().toISOString().split('T')[0]}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-zinc-800/80 border border-zinc-700 rounded-sm py-2 px-3 text-sm text-zinc-200 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                        id="booking-check-out"
                      />
                    </div>
                  </div>

                  {/* Guests Counter */}
                  <div className="flex items-center justify-between bg-zinc-800/40 p-3 rounded-sm border border-zinc-800">
                    <span className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#D4AF37]" /> Accommodating Guests
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-7 h-7 flex items-center justify-center rounded-sm bg-zinc-700 hover:bg-[#D4AF37] hover:text-[#0B0F19] font-bold transition-colors cursor-pointer"
                        id="booking-guests-dec"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm font-mono font-semibold">{guests}</span>
                      <button
                        type="button"
                        onClick={() => setGuests(Math.min(6, guests + 1))}
                        className="w-7 h-7 flex items-center justify-center rounded-sm bg-zinc-700 hover:bg-[#D4AF37] hover:text-[#0B0F19] font-bold transition-colors cursor-pointer"
                        id="booking-guests-inc"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3 pt-2 border-t border-zinc-800/80">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-zinc-800/80 border border-zinc-700 rounded-sm py-2 px-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                        id="booking-fullname"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-300">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-zinc-800/80 border border-zinc-700 rounded-sm py-2 px-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                          id="booking-phone"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-300">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-zinc-800/80 border border-zinc-700 rounded-sm py-2 px-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                          id="booking-email"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Promo Code & Pricing Summary */}
                  <div className="p-4 bg-zinc-800/30 rounded-sm border border-zinc-800/80 space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo Code (MANASGOLD)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-grow bg-zinc-800 border border-zinc-700 rounded-sm py-1.5 px-3 text-xs focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] uppercase font-mono"
                        id="booking-promocode-input"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="px-4 py-1.5 bg-[#D4AF37] hover:bg-[#B8982E] text-[#0B0F19] font-bold rounded-sm text-xs transition-colors cursor-pointer"
                        id="booking-promo-apply-btn"
                      >
                        Apply
                      </button>
                    </div>

                    {promoApplied && (
                      <p className="text-xs text-[#D4AF37] font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> 10% Discount applied successfully!
                      </p>
                    )}

                    {/* Cost Calculations */}
                    <div className="space-y-1.5 text-xs border-t border-zinc-800 pt-2 font-mono">
                      <div className="flex justify-between text-zinc-400">
                        <span>Room Subtotal ({nights} nights):</span>
                        <span>₹{subtotal.toLocaleString('en-IN')}</span>
                      </div>
                      {promoApplied && (
                        <div className="flex justify-between text-[#D4AF37]">
                          <span>Discount (10%):</span>
                          <span>-₹{discount.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-zinc-400">
                        <span>Luxury GST (12%):</span>
                        <span>₹{gst.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-base font-bold text-[#D4AF37] font-serif border-t border-zinc-800/80 pt-2">
                        <span>Estimated Total:</span>
                        <span>₹{total.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#D4AF37] hover:bg-[#B8982E] text-[#0B0F19] font-bold rounded-sm text-sm transition-all duration-300 transform active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-[#D4AF37]/20 flex justify-center items-center gap-2"
                    id="booking-submit-button"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-[#0B0F19]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Securing Rooms...</span>
                      </>
                    ) : (
                      <span>Complete Reservation Request</span>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Screen */
                <div className="flex flex-col items-center justify-center text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-sm flex items-center justify-center text-[#D4AF37]">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-serif text-3xl font-bold text-[#D4AF37]">Reservation Initiated!</h2>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto">
                      Thank you for choosing Manas Garden Hotel, {fullName}. We have provisionally blocked the <span className="text-white font-semibold">{selectedRoom.name}</span> for you.
                    </p>
                  </div>

                  {/* Ref Panel */}
                  <div className="p-4 bg-zinc-800/50 rounded-sm border border-zinc-700/60 max-w-sm w-full font-mono space-y-1">
                    <span className="text-zinc-500 text-xs uppercase tracking-wider">Booking Code</span>
                    <h3 className="text-2xl font-bold text-[#D4AF37] tracking-widest">{bookingRef}</h3>
                    <p className="text-[10px] text-zinc-400 mt-2">A reservations manager will contact you on {phone} shortly.</p>
                  </div>

                  <div className="pt-4 space-y-3 w-full max-w-sm">
                    {/* Instantly book via WhatsApp button */}
                    <button
                      onClick={handleWhatsAppShare}
                      className="w-full py-3 bg-[#D4AF37] hover:bg-[#B8982E] text-[#0B0F19] font-bold rounded-sm text-sm transition-colors cursor-pointer flex justify-center items-center gap-2 shadow-lg"
                      id="booking-whatsapp-share-btn"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm11.951-2.181c1.796-.002 3.548-.483 5.077-1.391l.363-.215 3.78.99-.997-3.693.237-.377c.998-1.59 1.526-3.428 1.523-5.321-.001-5.46-4.444-9.901-9.91-9.901-2.634 0-5.111 1.026-6.974 2.89a9.816 9.816 0 00-2.888 6.985c.003 5.459 4.447 9.9 9.922 9.9zm4.787-6.541c-.263-.131-1.553-.766-1.793-.853-.241-.087-.415-.131-.59.131-.174.262-.676.853-.829 1.028-.153.174-.306.196-.569.065-.262-.131-1.11-.409-2.113-1.302-.781-.697-1.309-1.558-1.462-1.82-.153-.262-.016-.403.116-.533.118-.117.262-.306.393-.459.131-.153.174-.262.262-.437.087-.174.044-.327-.022-.458-.066-.131-.59-1.42-.808-1.944-.213-.513-.447-.442-.613-.45-.16-.007-.343-.008-.526-.008-.183 0-.48.069-.731.343-.252.274-.959.937-.959 2.285 0 1.348.98 2.651 1.117 2.836.137.185 1.928 2.945 4.672 4.13.653.282 1.164.45 1.562.577.656.208 1.253.179 1.724.109.525-.078 1.553-.634 1.771-1.246.219-.613.219-1.139.153-1.246-.066-.109-.241-.174-.503-.306z" />
                      </svg>
                      <span>Instantly Confirm on WhatsApp</span>
                    </button>

                    <button
                      onClick={() => {
                        setStep(1);
                        setFullName('');
                        setPhone('');
                        setEmail('');
                        setPromoApplied(false);
                        setPromoCode('');
                        onClose();
                      }}
                      className="w-full py-3 bg-transparent border border-zinc-700 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] font-bold rounded-sm text-sm transition-colors cursor-pointer"
                      id="booking-success-close-btn"
                    >
                      Return to Website
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
