// Initialize Lucide Icons on load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Set default check-in/out dates in the form
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatD = (d) => d.toISOString().split('T')[0];

  const quickIn = document.getElementById('quick-in');
  const quickOut = document.getElementById('quick-out');
  const modalIn = document.getElementById('modal-check-in');
  const modalOut = document.getElementById('modal-check-out');

  if (quickIn) quickIn.value = formatD(tomorrow);
  if (quickOut) quickOut.value = formatD(dayAfter);
  if (modalIn) modalIn.value = formatD(tomorrow);
  if (modalOut) modalOut.value = formatD(dayAfter);
});

// ==================== STICKY NAV TRANSITION ====================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-[#064e3b]', 'py-3', 'border-b', 'border-amber-500/15', 'shadow-lg');
    navbar.classList.remove('bg-gradient-to-b', 'from-black/80', 'py-5');
  } else {
    navbar.classList.remove('bg-[#064e3b]', 'py-3', 'border-b', 'border-amber-500/15', 'shadow-lg');
    navbar.classList.add('bg-gradient-to-b', 'from-black/80', 'py-5');
  }
});

// ==================== MOBILE MENU DRAWER ====================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const burgerIcon = document.getElementById('menu-icon-burger');
  
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    burgerIcon.setAttribute('data-lucide', 'x');
  } else {
    menu.classList.add('hidden');
    burgerIcon.setAttribute('data-lucide', 'menu');
  }
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// ==================== HERO SLIDER CAROUSEL ====================
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('opacity-100', 'scale-100');
      slide.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    } else {
      slide.classList.remove('opacity-100', 'scale-100');
      slide.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('bg-amber-400', 'w-8');
      dot.classList.remove('bg-white/30', 'w-3');
    } else {
      dot.classList.remove('bg-amber-400', 'w-8');
      dot.classList.add('bg-white/30', 'w-3');
    }
  });

  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next >= slides.length) next = 0;
  showSlide(next);
}

function prevSlide() {
  let prev = currentSlide - 1;
  if (prev < 0) prev = slides.length - 1;
  showSlide(prev);
}

function setSlide(index) {
  showSlide(index);
}

// Auto Slide every 6 seconds
setInterval(nextSlide, 6000);

// ==================== BOOKING MODAL HANDLERS ====================
function openBookingModal(roomId = 'luxury-garden') {
  const modal = document.getElementById('booking-modal');
  const roomSelect = document.getElementById('modal-room-select');
  
  if (roomSelect && roomId) {
    roomSelect.value = roomId;
  }
  
  modal.classList.remove('hidden');
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  modal.classList.add('hidden');
}

function triggerQuickBook() {
  const room = document.getElementById('quick-room').value;
  const checkIn = document.getElementById('quick-in').value;
  const checkOut = document.getElementById('quick-out').value;
  
  const modalRoom = document.getElementById('modal-room-select');
  const modalIn = document.getElementById('modal-check-in');
  const modalOut = document.getElementById('modal-check-out');
  
  if (modalRoom) modalRoom.value = room;
  if (modalIn) modalIn.value = checkIn;
  if (modalOut) modalOut.value = checkOut;
  
  openBookingModal(room);
}

function submitBookingForm(e) {
  e.preventDefault();
  
  const room = document.getElementById('modal-room-select').value;
  const checkIn = document.getElementById('modal-check-in').value;
  const checkOut = document.getElementById('modal-check-out').value;
  const name = document.getElementById('modal-fullname').value;
  const phone = document.getElementById('modal-phone').value;
  const email = document.getElementById('modal-email').value;
  
  const roomLabel = document.querySelector(`#modal-room-select option[value="${room}"]`).textContent;
  
  const text = `Hello Manas Garden Hotel, I would like to reserve a stay!
*Room:* ${roomLabel}
*Dates:* ${checkIn} to ${checkOut}
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}`;

  window.open(`https://wa.me/919422775522?text=${encodeURIComponent(text)}`, '_blank');
  closeBookingModal();
}

// ==================== WHATSAPP & SUPPORT TRIGGERS ====================
function triggerWhatsApp() {
  const text = 'Hello Manas Garden Hotel, I would like to ask a question.';
  window.open(`https://wa.me/919422775522?text=${encodeURIComponent(text)}`, '_blank');
}

function triggerEnquiry(packageName) {
  const text = `Hello Manas Garden Hotel, I would like to enquire about availability and rates for your "${packageName}" package.`;
  window.open(`https://wa.me/919422775522?text=${encodeURIComponent(text)}`, '_blank');
}

function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;
  
  alert(`Thank you, ${name}! Your message has been simulated. We will respond shortly.`);
  document.getElementById('contact-name').value = '';
  document.getElementById('contact-email').value = '';
  document.getElementById('contact-message').value = '';
}
