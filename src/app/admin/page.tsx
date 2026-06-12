"use client";

import { useState, useEffect } from "react";

export default function MemberNexus() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-[#2d3436] flex font-sans selection:bg-[#788574]/20">
      {/* ─── SIDEBAR ─────────────────────────────────────── */}
      <aside className="w-80 border-r border-[#788574]/10 flex flex-col p-8 gap-12 bg-white/50 backdrop-blur-xl">
        <div className="flex flex-col gap-2">
           <div className="text-3xl font-serif italic tracking-tighter flex items-center gap-3">
             <div className="w-10 h-10 bg-[#788574] rounded-full flex items-center justify-center text-white not-italic text-sm">S</div>
             Sanctuary <span className="text-[#788574]">Nexus</span>
           </div>
           <div className="text-[9px] uppercase tracking-[0.4em] text-[#788574]/40 font-bold">Wellness OS v5.0</div>
        </div>

        <nav className="flex flex-col gap-2">
          {['Overview', 'Retreats', 'Practitioners', 'Member Profiles', 'The Vault'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`flex items-center gap-4 px-6 py-5 transition-all text-[10px] uppercase tracking-[0.3em] font-bold border rounded-full ${
                activeTab === tab.toLowerCase() ? 'bg-[#788574] text-white border-[#788574]' : 'text-[#788574]/40 border-transparent hover:bg-[#788574]/5 hover:text-[#788574]'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-[#788574]/10 flex items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-[#788574]/10 border border-[#788574]/20 flex items-center justify-center text-[#788574] font-serif italic text-sm">S</div>
           <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2d3436]">Master Guardian</span>
              <span className="text-[8px] uppercase text-[#788574]/60 tracking-widest font-mono">Wellness Authorization</span>
           </div>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ────────────────────────────────── */}
      <main className="flex-1 p-20 overflow-y-auto">
        <header className="flex justify-between items-start mb-24">
          <div>
             <span className="text-[#788574] text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block">Sanctuary Path / {activeTab}</span>
             <h1 className="text-8xl font-serif italic tracking-tighter leading-none nature-gradient">{activeTab}</h1>
          </div>
          <button className="sage-button text-[10px] px-12 py-5 shadow-2xl shadow-[#788574]/10 uppercase tracking-widest font-bold">+ Schedule Retreat</button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
           {[
             { label: 'Sanctuary Status', val: 'SERENE', color: 'text-emerald-600' },
             { label: 'Active Retreats', val: '4', color: 'text-[#2d3436]' },
             { label: 'Wellness Bookings', val: '12', color: 'text-[#788574]' },
             { label: 'Session Health', val: '100%', color: 'text-emerald-600' }
           ].map((stat, i) => (
             <div key={i} className="bg-white border border-[#788574]/10 p-10 relative overflow-hidden group rounded-2xl">
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#788574]/40 mb-6">{stat.label}</div>
                <div className={`text-4xl font-serif italic tracking-tighter ${stat.color}`}>{stat.val}</div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#788574]/20 to-transparent" />
             </div>
           ))}
        </div>

        <div className="bg-white border border-[#788574]/10 p-12 rounded-3xl shadow-sm">
           <div className="flex justify-between items-center mb-12 border-b border-[#788574]/5 pb-8">
              <h3 className="text-2xl font-serif italic tracking-tight text-[#2d3436]">Wellness <span className="text-[#788574]">Journal Feed</span></h3>
              <span className="text-[9px] uppercase tracking-[0.5em] text-[#788574]/40">Awaiting Member Reflections</span>
           </div>
           <div className="h-64 flex flex-col items-center justify-center opacity-20">
              <div className="w-px h-12 bg-[#788574] mb-6" />
              <div className="text-[10px] uppercase tracking-[0.5em] italic">The sanctuary is currently still</div>
           </div>
        </div>
      </main>
    </div>
  );
}
