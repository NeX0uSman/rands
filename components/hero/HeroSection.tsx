import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Wrench,
  ArrowUpRight,
} from 'lucide-react';
import { HeroVisualCard } from './MechanicIcons';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#09090b] text-neutral-100 overflow-hidden flex flex-col justify-between border-b border-neutral-800">
      {/* Background Ambient Glows & Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-orange-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Top Utility Bar */}
      <div className="relative z-10 border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-neutral-300 font-mono tracking-tight">
              KOMORNIKI, UL. WARSZTATOWA 7
            </span>
            <span className="text-neutral-700 hidden sm:inline">/</span>
            <span className="hidden sm:inline text-neutral-400">
              Otwarty do 21:00 (idealne po pracy)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+48574271030"
              className="font-mono text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>574 271 030</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Core Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-xl mb-6 shadow-inner">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold tracking-wide text-neutral-200">
              4.9 / 5{' '}
              <span className="text-neutral-400 font-normal">
                Na podstawie opinii kierowców
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.05]">
            Bezkompromisowy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
              serwis samochodowy
            </span>{' '}
            <br />
            w&nbsp;Komornikach.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light">
            Zero ściemy, jasna wycena przed demontażem i naprawy robione jak dla
            siebie. Pracujemy codziennie od{' '}
            <strong className="text-white font-medium">8:00 do 21:00</strong> —
            oddaj auto po pracy bez brania urlopu.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="tel:+48790772677"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-base tracking-wide transition-all shadow-lg shadow-orange-500/25 active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span>Zadzwoń: 790 772 677</span>
            </a>

            <a
              href="https://maps.google.com/?q=ul.+Warsztatowa+7,+62-052+Komorniki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 font-semibold text-base transition-all backdrop-blur-md"
            >
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Nawiguj na Warsztatową 7</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          {/* Quick Pillars */}
          <div className="mt-12 pt-8 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Do 21:00 wieczorem
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Wygodne godziny odbioru
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Gwarancja jakości
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Części OE / zamienniki klasy A
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 col-span-2 sm:col-span-1">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Pełna diagnostyka
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Komputer i mechanika
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Service & Logistics Card */}
        <HeroVisualCard />
      </div>
    </section>
  );
}