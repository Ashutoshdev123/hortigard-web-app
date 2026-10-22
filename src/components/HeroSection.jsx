import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';

const TRUST_POINTS = [
  'Background verified mali',
  'Organic fertilizers included'
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-[#A6E22E]" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0012 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 005.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 01-1.5-5.2c0-5.4 4.4-9.8 9.9-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 012.9 6.9c0 5.4-4.4 9.9-9.8 9.9zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1l-1 1.200c-.2.200-.4.200-.7.100-.3-.1-1.300-.5-2.400-1.500-.9-.8-1.500-1.800-1.700-2.100-.2-.3 0-.5.100-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.200 5.100 4.500.7.3 1.300.5 1.700.6.700.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.300-1.300.2-1.400-.1-.1-.3-.2-.6-.3z" />
    </svg>
  );
}

/* Soft decorative leaf used in the background */
function Leaf({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <path d="M50 4C22 20 10 46 18 82c34-2 66-26 66-72-12-4-24-6-34-6z" />
      <path d="M22 78C38 56 54 38 74 20" stroke="#04170E" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

export default function HeroSection() {
  const whatsappUrl = getWhatsAppUrl('Hi, I want to book a free expert visit');
  const handleBookMali = () => {
    const message = 'Hi team! I would like to book a mali for my garden. Please share your availability and the next steps.';
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#0D3B22] to-[#06210F] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
      {/* Background: forest green gradient + sunlight glow + leaves */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(166,226,46,0.18),_transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[900px] -translate-x-1/2 rounded-full bg-emerald-400 opacity-[0.10] blur-[110px]" />

      <Leaf className="pointer-events-none absolute -left-10 top-10 h-52 w-52 rotate-[-25deg] text-emerald-300 opacity-[0.07] sm:h-72 sm:w-72" />
      <Leaf className="pointer-events-none absolute -right-8 top-1/3 h-44 w-44 rotate-[200deg] text-[#A6E22E] opacity-[0.08] sm:h-64 sm:w-64" />
      <Leaf className="pointer-events-none absolute -bottom-10 left-[8%] hidden h-40 w-40 rotate-[40deg] text-emerald-200 opacity-[0.06] md:block" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Small trust badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#A6E22E]/30 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#D6F2C4] backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A6E22E] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A6E22E]" />
          </span>
          Trusted mali service in Noida &amp; Greater Noida West
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[2.5rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Professional plant care.
          <br />
          Greener living.
          <br />
          <span className="text-[#A6E22E]">Better gardening.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-7 max-w-xl text-base leading-relaxed text-[#D6EBCB] sm:text-lg">
          Trained mali service and expert plant care, delivered to your doorstep.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full max-w-md flex-col gap-3.5 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <button
            onClick={handleBookMali}
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#A6E22E] px-9 text-base font-bold text-[#0B1A00] shadow-[0_10px_30px_-8px_rgba(166,226,46,0.55)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#B5EE40] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#A6E22E]/40 active:scale-[0.98]"
          >
            Book your mali today!
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-9 text-base font-bold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30 active:scale-[0.98]"
          >
            <WhatsAppIcon />
            Book Free Expert Visit
          </a>
        </div>

        <p className="mt-4 text-sm text-[#A9C9B0]">No charges for the first visit</p>

        {/* Trust points */}
        <ul className="mt-14 flex w-full flex-col items-center gap-3 border-t border-white/15 pt-8 sm:flex-row sm:justify-center sm:gap-x-10">
          {TRUST_POINTS.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-medium text-[#E3F2DA]">
              <CheckIcon />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
