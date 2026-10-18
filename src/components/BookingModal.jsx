import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function BookingModal({ isOpen, onClose, preselectedPlan }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    society: '',
    pots: '20'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Hortigard team! 🌿\n\nI want to book a garden visit.\nName: ${form.name}\nPhone: ${form.phone}\nSociety/Area: ${form.society}\nPot Count: ${form.pots}\nSelected Plan: ${preselectedPlan || 'General Free Consultation'}`;
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider">Hortigard Doorstep Visit</span>
          <h3 className="text-2xl font-black text-gray-900 mt-1">Book Your Free Garden Audit</h3>
          <p className="text-xs text-gray-500 mt-1">
            Interest: <span className="font-semibold text-emerald-800">{preselectedPlan || 'General Free Consultation'}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name</label>
            <input
              required
              type="text"
              placeholder="e.g. Ankit Sharma"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">WhatsApp / Phone Number</label>
            <input
              required
              type="tel"
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Society & Sector / City</label>
            <input
              required
              type="text"
              placeholder="e.g. Paras Tierea, Sector 137 Noida"
              value={form.society}
              onChange={(e) => setForm({ ...form, society: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Approximate Number of Pots</label>
            <select
              value={form.pots}
              onChange={(e) => setForm({ ...form, pots: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="Under 15 Pots">Under 15 Pots</option>
              <option value="15 - 35 Pots">15 - 35 Pots</option>
              <option value="35 - 60 Pots">35 - 60 Pots</option>
              <option value="60+ Pots / Terrace Lawn">60+ Pots / Terrace Lawn</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm mt-4"
          >
            <Send className="w-4 h-4" />
            <span>Confirm & Connect via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
