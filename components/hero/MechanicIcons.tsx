'use client';

import React, { useState } from 'react';
import { Clock, MapPin, Phone, Activity, Wrench, Droplets, CheckCircle2 } from 'lucide-react';

const ISSUES = [
  {
    id: 'diag',
    label: 'Błąd / Check Engine',
    icon: Activity,
    time: '30–45 min',
    details: 'Pełny odczyt sterowników, analiza parametrów bieżących (live data) i konkretna diagnoza usterki bez zgadywania.',
  },
  {
    id: 'oil',
    label: 'Olej i filtry',
    icon: Droplets,
    time: 'ok. 1 godz.',
    details: 'Wymiana oleju, filtrów (oleju, powietrza, kabinowego, paliwa) + kasowanie inspekcji serwisowej i kontrola wycieków.',
  },
  {
    id: 'mech',
    label: 'Hamulce / Zawieszenie',
    icon: Wrench,
    time: 'Wycena przed pracą',
    details: 'Klocki, tarcze, wahacze, łożyska i układ kierowniczy. Dzwonimy z dokładnym kosztem części przed montażem.',
  },
];

export function HeroVisualCard() {
  const [selected, setSelected] = useState(ISSUES[0]);

  return (
    <div className="lg:col-span-5 flex flex-col gap-4">
      {/* Interactive Diagnostic / Service Selector Card */}
      <div className="relative p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold">
            Szybka ścieżka serwisu
          </span>
          <span className="text-xs font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
            Czas: <strong className="text-white">{selected.time}</strong>
          </span>
        </div>

        <p className="text-sm text-neutral-300 mb-3 font-medium">
          Z czym przyjeżdżasz? Wybierz temat:
        </p>

        {/* Interactive Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {ISSUES.map((issue) => {
            const Icon = issue.icon;
            const isActive = selected.id === issue.id;
            return (
              <button
                key={issue.id}
                type="button"
                onClick={() => setSelected(issue)}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-orange-500/15 border-orange-500/60 text-white shadow-sm'
                    : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                }`}
              >
                <Icon className={`w-4 h-4 mb-2 ${isActive ? 'text-orange-400' : 'text-neutral-500'}`} />
                <span className="text-xs font-semibold leading-tight">{issue.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Output Box */}
        <div className="p-4 rounded-xl bg-neutral-950/90 border border-neutral-800/90">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {selected.details}
            </p>
          </div>
        </div>
      </div>

      {/* Compact Logistics Strip (No Redundant Phone Clutter) */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-orange-400 mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Pon – Pt</span>
          </div>
          <div>
            <div className="text-xl font-extrabold text-white font-mono">8:00 – 21:00</div>
            <p className="text-[11px] text-neutral-400 mt-0.5">Odbiór auta po pracy</p>
          </div>
        </div>

        <a
          href="tel:+48574271030"
          className="group p-4 rounded-2xl bg-neutral-900/70 hover:bg-neutral-800/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Druga linia</span>
            <Phone className="w-3.5 h-3.5 text-orange-500 group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <div className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors font-mono">
              574 271 030
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-neutral-500" /> ul. Warsztatowa 7
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}