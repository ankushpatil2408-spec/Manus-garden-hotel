import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Check, Map } from 'lucide-react';
import { HOTEL_DETAILS } from '../data';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('lodging');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#FCFAF7] text-[#1A2E26] overflow-hidden" aria-label="Contact and Map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest bg-[#0F2922]/5 border border-[#0F2922]/10 text-[#0F2922] rounded-full">
            <Mail className="w-3.5 h-3.5" /> Reach Out
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0F2922]">
            Contact & Location Details
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded-sm" />
          <p className="text-zinc-500 text-sm">
            Whether you want to hold a grand wedding reception, inquire about room rates, or check restaurant hours, we are happy to assist.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info Side (Col 5) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#0F2922]">Get In Touch</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-sans">
                Our front desk is staffed 24 hours a day, 7 days a week, to assist you with reservations, transport booking, or tourist guidance.
              </p>

              {/* Channels list */}
              <div className="space-y-4 font-sans text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#0F2922]/5 border border-[#0F2922]/10 text-[#0F2922] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#0F2922] text-xs sm:text-sm">Hotel Address</h4>
                    <p className="text-zinc-500 mt-0.5">{HOTEL_DETAILS.location}</p>
                    <a
                      href={HOTEL_DETAILS.gmapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] hover:text-[#B8982E] font-semibold text-xs mt-1.5 inline-flex items-center gap-1.5"
                    >
                      <Map className="w-3.5 h-3.5" /> Open Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#0F2922]/5 border border-[#0F2922]/10 text-[#0F2922] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#0F2922] text-xs sm:text-sm">Call Center</h4>
                    <p className="text-zinc-500 mt-0.5">Reservations / Inquiries:</p>
                    <a
                      href={`tel:${HOTEL_DETAILS.phone.replace(/\s+/g, '')}`}
                      className="text-[#0F2922] hover:text-[#D4AF37] font-semibold text-sm mt-0.5 block font-mono"
                    >
                      {HOTEL_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#0F2922]/5 border border-[#0F2922]/10 text-[#0F2922] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#0F2922] text-xs sm:text-sm">Email Mailbox</h4>
                    <p className="text-zinc-500 mt-0.5">Corporate & Booking Inquiries:</p>
                    <a
                      href={`mailto:${HOTEL_DETAILS.email}`}
                      className="text-[#0F2922] hover:text-[#D4AF37] font-semibold text-sm mt-0.5 block font-mono"
                    >
                      {HOTEL_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#0F2922]/5 border border-[#0F2922]/10 text-[#0F2922] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#0F2922] text-xs sm:text-sm">Working Hours</h4>
                    <p className="text-zinc-500 mt-0.5">Front Office: 24/7 Service</p>
                    <p className="text-zinc-500">Palms Dining Pavilion: 11:00 AM – 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form and Map Side (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {submitted ? (
              <div className="p-8 bg-white rounded-sm border border-zinc-200 text-center space-y-4 flex flex-col items-center justify-center h-full shadow-sm">
                <div className="w-12 h-12 rounded-sm bg-[#0F2922]/5 text-[#0F2922] border border-[#0F2922]/10 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#0F2922]">Message Sent Successfully!</h4>
                <p className="text-zinc-500 text-xs sm:text-sm max-w-sm">
                  We have received your message. Our helpdesk team will review your enquiry and get back to you within the next 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-[#0F2922] hover:bg-[#1A382F] text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                  id="contact-sent-reset-btn"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 bg-white rounded-sm border border-zinc-200 space-y-4 shadow-sm">
                <h4 className="font-serif text-lg font-bold text-[#0F2922]">Send A Direct Message</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-zinc-500 font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-zinc-200 rounded-sm py-2 px-3 text-xs focus:outline-none focus:border-[#0F2922] focus:ring-1 focus:ring-[#0F2922] text-zinc-800 transition-colors"
                      id="contact-name-input"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-zinc-500 font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-zinc-200 rounded-sm py-2 px-3 text-xs focus:outline-none focus:border-[#0F2922] focus:ring-1 focus:ring-[#0F2922] text-zinc-800 transition-colors"
                      id="contact-phone-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-zinc-500 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-zinc-200 rounded-sm py-2 px-3 text-xs focus:outline-none focus:border-[#0F2922] focus:ring-1 focus:ring-[#0F2922] text-zinc-800 transition-colors"
                      id="contact-email-input"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-zinc-500 font-semibold">Enquiry Type</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white border border-zinc-200 rounded-sm py-2 px-3 text-xs focus:outline-none focus:border-[#0F2922] focus:ring-1 focus:ring-[#0F2922] text-zinc-800 transition-colors"
                      id="contact-subject-select"
                    >
                      <option value="lodging">Room Booking & Suites</option>
                      <option value="wedding">Wedding / Lawn Hire</option>
                      <option value="restaurant">Dining / Event Catering</option>
                      <option value="corporate">Corporate Seminars</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-zinc-500 font-semibold">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello, I am planning a wedding reception for approx 800 guests. Please let me know date availability..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-sm py-2 px-3 text-xs focus:outline-none focus:border-[#0F2922] focus:ring-1 focus:ring-[#0F2922] text-zinc-800 transition-colors resize-none"
                    id="contact-message-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-[#0F2922] hover:bg-[#1A382F] text-white font-bold uppercase tracking-widest text-xs rounded-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Google Map Widget */}
            <div className="rounded-sm overflow-hidden border border-zinc-200/60 shadow-inner h-60 relative bg-zinc-100">
              <iframe
                title="Manas Garden Hotel Google Map Location"
                src={HOTEL_DETAILS.gmapEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                id="contact-gmap-iframe"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
