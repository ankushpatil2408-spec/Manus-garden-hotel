import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Welcome from './components/Welcome';
import Rooms from './components/Rooms';
import Restaurant from './components/Restaurant';
import WeddingEvents from './components/WeddingEvents';
import GardenSection from './components/GardenSection';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('home');

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setBookingOpen(true);
  };

  // ScrollSpy logic to dynamically update active navigation links
  useEffect(() => {
    const sections = ['home', 'about', 'rooms', 'restaurant', 'events', 'garden', 'gallery', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120; // offset for the sticky header
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Initial call
    handleScrollSpy();
    
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-[#D4AF37] selection:text-[#0B0F19] scroll-smooth">
      {/* Header Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} activeSection={activeSection} />

      {/* Hero Slide Banner */}
      <HeroSlider onOpenBooking={handleOpenBooking} />

      {/* Main Core Content Sections */}
      <main className="relative pt-24 md:pt-16">
        {/* Welcome and Highlights (About) */}
        <Welcome />

        {/* Luxury Accommodations (Rooms) */}
        <Rooms onOpenBooking={handleOpenBooking} />

        {/* Garden-side Fine Dining (Restaurant) */}
        <Restaurant />

        {/* Weddings & Celebrations Lawn (Events) */}
        <WeddingEvents />

        {/* Botanical Leisure Groves (Garden) */}
        <GardenSection />

        {/* Photo Gallery Wall (Gallery) */}
        <GallerySection />

        {/* Guest Testimonials & Reviews */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Map Location & Contact Forms */}
        <ContactSection />
      </main>

      {/* Footnote details and floating click triggers */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Multi-step responsive Booking Modal overlay */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedRoomId={selectedRoomId}
      />
    </div>
  );
}
