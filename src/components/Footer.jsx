import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-gray-300 pt-16 pb-10 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-emerald-900">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Hortigard Logo" 
                className="w-10 h-10 object-contain rounded-full bg-black"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="text-2xl font-black text-white">
                Horti<span className="text-emerald-400">gard</span>
              </span>
            </div>
            <p className="text-xs text-emerald-400 font-semibold tracking-wider uppercase">
              Greener Today, Better Tomorrow
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              India's tech-enabled urban gardening care and maali service delivering healthy plants to apartments, villas, and terraces.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#services" className="hover:text-emerald-400 transition">Services</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition">Subscription Packages</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition">Why Hortigard</a></li>
              
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Service Locations</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Noida Expressway Sectors</li>
              <li>Greater Noida West (Noida Extension)</li>
              <li>Central Noida (Sec 50, 74, 76, 78)</li>             
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Maali Care</h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 9205030252</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>hortigardprivatelimited0@gmail.com</span>
              </div>
              
            </div>
          </div>

        </div>

        <div className="pt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Hortigard Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
