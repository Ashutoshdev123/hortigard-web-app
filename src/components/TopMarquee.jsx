import React from "react";
import { Sparkles, MapPin, Phone, Award, Droplets } from "lucide-react";

/* ------------------------------ Data ------------------------------ */

const announcements = [
  { text: "🌱 Welcome to Hortigard - Greener Today, Better Tomorrow!", icon: Sparkles },
  { text: "🎁 Special Offer: Book your First Garden & Balcony Audit Absolutely FREE", icon: Award },
  { text: "📞 Direct Mali Helpline: +91 9205030252 (Noida / Greater Noida West)", icon: Phone },
  { text: "💧 100% Organic Fertilizers", icon: Droplets },
];

const serviceAreas = [
  {
    label: "🌿 Now serving in Noida",
    sectors: ["Sector 35", "Sector 34", "Sector 33", "Sector 23", "Sector 22", "Sector 122", "Sector 120", "Sector 119", "Sector 118"],
  },
  {
    label: "🌿 Greater Noida West",
    sectors: ["Sector 16C", "Sector 16B", "Sector 4", "Sector 3", "Sector 2", "Sector 1"],
  },
];

/* --------------------------- Marquee lane --------------------------- */
/* Renders children twice so the loop resets seamlessly at -50%.        */

function MarqueeLane({ children, duration = 40, reverse = false, label }) {
  return (
    <div className="horti-lane relative overflow-hidden" role="group" aria-label={label}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-emerald-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-emerald-950 to-transparent" />

      <div
        className="horti-track flex w-max items-center whitespace-nowrap"
        style={{
          "--horti-duration": `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="horti-dup flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Pieces ------------------------------ */

function Announcement({ item }) {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-2.5 pr-10">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400/15 ring-1 ring-lime-400/30">
        <Icon className="h-3.5 w-3.5 text-lime-400" />
      </span>
      <span className="tracking-wide text-emerald-50">{item.text}</span>
      <span className="ml-5 text-emerald-600/70">•</span>
    </div>
  );
}

function AreaGroup({ area }) {
  return (
    <div className="flex items-center gap-2 pr-10">
      <MapPin className="h-5 w-5 shrink-0 text-lime-400" />
      <span className="mr-1 font-semibold text-white">{area.label}</span>

      {area.sectors.map((sector) => (
        <span
          key={sector}
          className="rounded-full bg-white/10 px-3 py-1 text-xs text-emerald-50/90 sm:text-sm"
        >
          {sector}
        </span>
      ))}

      <span className="rounded-full border border-dashed border-lime-400/40 px-3 py-1 text-xs text-lime-300 sm:text-sm">
        and more
      </span>
    </div>
  );
}

/* ----------------------------- Component ----------------------------- */

export default function TopMarquee() {
  return (
    <section
      aria-label="Announcements and service areas"
      className="select-none border-b border-emerald-800/60 bg-emerald-950 text-sm font-medium text-emerald-100 sm:text-base"
    >
      {/* Lane 1: announcements */}
      <div className="py-2.5">
        <MarqueeLane label="Announcements" duration={45}>
          {announcements.map((item) => (
            <Announcement key={item.text} item={item} />
          ))}
        </MarqueeLane>
      </div>

      {/* Lane 2: service areas (opposite direction, slower) */}
      <div className="border-t border-white/5 py-2.5">
        <MarqueeLane label="Service areas" duration={60} reverse>
          {serviceAreas.map((area) => (
            <AreaGroup key={area.label} area={area} />
          ))}
        </MarqueeLane>
      </div>

      <style>{`
        @keyframes horti-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .horti-track {
          animation: horti-marquee var(--horti-duration, 40s) linear infinite;
          will-change: transform;
        }
        .horti-lane:hover .horti-track,
        .horti-lane:focus-within .horti-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .horti-track { animation: none; }
          .horti-dup { display: none; }
          .horti-lane { overflow-x: auto; }
        }
      `}</style>
    </section>
  );
}
