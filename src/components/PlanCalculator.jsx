import React, { useState } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

export default function PlanCalculator({ onOpenBooking }) {
  const [pots, setPots] = useState(25);
  const [areaType, setAreaType] = useState('balcony');

  const calculateEstimate = () => {
    let base = 999;
    if (pots <= 15) base = 1199;
    else if (pots <= 35) base = 1899;
    else if (pots <= 60) base = 2599;
    else base = 3499;

    if (areaType === 'terrace') base += 500;
    if (areaType === 'ground') base += 800;

    return {
      monthlyCost: base,
      visitsPerMonth: pots > 35 ? 4 : 2,
      recommended: pots <= 15 ? 'Starter Bloom' : pots <= 40 ? 'Evergreen Care' : 'Villa Grand'
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="calculator" className="py-20 bg-emerald-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" /> Instant Cost Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Calculate Your Monthly Care Package</h2>
          <p className="text-emerald-200/80 mt-2 text-sm sm:text-base">
            Slide according to the number of pots in your apartment or terrace.
          </p>
        </div>

        <div className="bg-white rounded-3xl text-gray-900 p-8 sm:p-12 shadow-2xl grid md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Number of Pots / Planters</label>
                <span className="text-2xl font-black text-emerald-700">{pots} Pots</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={pots}
                onChange={(e) => setPots(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>5 Pots</span>
                <span>50 Pots</span>
                <span>100+ Pots</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">Garden Setting</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'balcony', label: 'Balcony' },
                  { id: 'terrace', label: 'Terrace Garden' },
                  { id: 'ground', label: 'Villa / Ground' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setAreaType(type.id)}
                    className={`py-3 px-2 text-center text-xs sm:text-sm font-semibold rounded-xl border transition ${
                      areaType === type.id
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-emerald-50 rounded-2xl p-6 sm:p-8 border border-emerald-100 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider">Recommended Plan</span>
              <h3 className="text-2xl font-black text-gray-900 mt-1">{estimate.recommended}</h3>
              <p className="text-xs text-gray-500 mt-1">{estimate.visitsPerMonth} Scheduled Maali visits per month</p>

              <div className="mt-6 pt-6 border-t border-emerald-200/60">
                <span className="text-xs text-gray-500 font-medium">Estimated Pricing</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-black text-emerald-900">₹{estimate.monthlyCost}</span>
                  <span className="text-sm text-gray-600 font-medium">/ month</span>
                </div>
                <p className="text-[11px] text-emerald-700 mt-1">✓ Includes all organic fertilizers & pruning tools</p>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking(`${estimate.recommended} (₹${estimate.monthlyCost})`)}
              className="mt-8 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
            >
              <span>Book For My Space</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}