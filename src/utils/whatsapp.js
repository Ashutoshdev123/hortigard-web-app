const WHATSAPP_BASE_URL = import.meta.env.VITE_WHATSAPP_URL;

/** Build a WhatsApp URL with a per-call, URL-encoded message. */
export function getWhatsAppUrl(message = '') {
  if (!WHATSAPP_BASE_URL) {
    console.error('VITE_WHATSAPP_URL is missing. Add it to the .env file and restart Vite.');
    return '#';
  }

  const url = new URL(WHATSAPP_BASE_URL);
  if (message) url.searchParams.set('text', message);
  return url.toString();
}
