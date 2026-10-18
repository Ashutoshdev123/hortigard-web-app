import React from 'react';
import TopMarquee from './components/TopMarquee';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import PricingPlans from './components/PricingPlans';
import ServicesGrid from './components/ServicesGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { getWhatsAppUrl } from './utils/whatsapp';

export default function App() {
  const handleOpenBooking = (bookingOption = 'a free expert visit') => {
    const isPreparedMessage = bookingOption.startsWith('Hi, I am interested in');
    const message = isPreparedMessage
      ? bookingOption
      : `Hello Hortigard team! I am interested in ${bookingOption}. Please share your availability and the next steps.`;
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased selection:bg-emerald-200 selection:text-emerald-900">
      {/* 1. Android / Desktop Infinite Marquee Header */}
      <TopMarquee />

      {/* 2. Responsive Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 3. Hero Section with Brand Slogan */}
      <HeroSection />

      {/* 4. Core Features & Guarantees */}
      <WhyChooseUs />

      {/* 4. Simple service journey */}
      <HowItWorks />

      {/* 6. Subscription Pricing Cards */}
      <PricingPlans onOpenBooking={handleOpenBooking} />

      {/* 7. Comprehensive Services Showcase */}
      <ServicesGrid onOpenBooking={handleOpenBooking} />

      {/* 8. Contact form */}
      <Testimonials />

      {/* 10. Footer Section */}
      <Footer />

      {/* 11. WhatsApp Direct Floating Action */}
      <FloatingWhatsApp />
    </div>
  );
}
