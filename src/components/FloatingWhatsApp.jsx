import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const handleClick = () => {
      window.open(getWhatsAppUrl('Hi Team! I want to know more about your gardening subscription.'), '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat with Hortigard on WhatsApp"
      type="button"
      className="fixed bottom-6 right-6 z-40 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#20C96B] px-5 py-3 text-white shadow-2xl transition duration-200 hover:scale-105 hover:bg-[#18b95e] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
    >
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16.02 2.67a13.2 13.2 0 0 0-11.3 20.02L3.2 29.33l6.8-1.78a13.2 13.2 0 1 0 6.02-24.88Z" fill="currentColor" />
        <path d="M22.48 19.32c-.35-.17-2.07-1.02-2.39-1.13-.32-.12-.55-.17-.78.17-.23.35-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.17-1.48-.55-2.82-1.75-1.04-.93-1.75-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.15-.15.35-.4.52-.6.17-.2.23-.35.35-.58.11-.23.06-.43-.03-.6-.09-.18-.78-1.88-1.07-2.58-.28-.67-.57-.58-.78-.59h-.66c-.23 0-.6.09-.92.43-.32.35-1.21 1.19-1.21 2.9s1.24 3.36 1.42 3.59c.17.23 2.44 3.73 5.91 5.23.83.36 1.47.58 1.97.74.83.26 1.59.22 2.19.13.67-.1 2.07-.85 2.36-1.67.29-.82.29-1.53.2-1.67-.09-.15-.32-.23-.67-.4Z" fill="#20C96B" />
      </svg>
      <span className="text-sm font-semibold">Chat with us</span>
    </button>
  );
}
