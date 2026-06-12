import React from 'react';

const RETREATS = [
  { id: 1, title: "Summer Solstice Stillness", dates: "June 21 - 24", price: "850", status: "Filling Fast" },
  { id: 2, title: "Autumn Equinox Awakening", dates: "Sept 20 - 23", price: "920", status: "Available" },
  { id: 3, title: "Winter Silence Sanctuary", dates: "Dec 12 - 15", price: "1200", status: "Coming Soon" },
];

export default function RetreatsPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb] text-[#2d3436] p-12 pt-32">
      <h1 className="text-5xl font-serif italic nature-gradient mb-16 text-center">Seasonal Retreats</h1>
      <div className="max-w-5xl mx-auto space-y-12">
        {RETREATS.map((retreat) => (
          <div key={retreat.id} className="group border-b border-[#788574]/10 pb-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-[#788574] text-xs uppercase tracking-[0.3em] mb-2">{retreat.dates}</p>
              <h3 className="text-3xl font-serif italic text-[#2d3436] group-hover:text-[#788574] transition-colors">{retreat.title}</h3>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <span className="text-lg italic font-serif text-[#788574]">from ${retreat.price}</span>
              <button className="sage-button">Reserve Space</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
