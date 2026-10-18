import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Testimonials() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name').toString().trim();
    const phone = formData.get('phone').toString().trim();
    const service = formData.get('service').toString();
    const message = [
      'Hi Team, I would like to enquire about plant care.',
      `Name: ${name}`,
      `Phone number: ${phone}`,
      `Service needed: ${service}`,
    ].join('\n');

    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <header className="contact-heading">
          <span>We are here to help</span>
          <h2>Contact us</h2>
          <p>Send your details and we will reply on WhatsApp.</p>
        </header>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required />

          <label htmlFor="contact-phone">Phone number</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+() -]{7,}"
            title="Enter a valid phone number"
            required
          />

          <label htmlFor="contact-service">Service needed</label>
          <select id="contact-service" name="service" defaultValue="Free expert visit" required>
            <option>Free expert visit</option>
            <option>Professional mali service</option>
            <option>Monthly subscription plan</option>
            <option>One-time garden setup</option>
            <option>Order plants</option>
          </select>

          <button type="submit">Send on WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
