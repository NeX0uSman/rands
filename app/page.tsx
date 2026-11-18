
"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Gauge,
  MapPin,
  Menu,
  Phone,
  Settings2,
  ShieldCheck,
  Wrench,
  Droplets,
  CarFront,
  Star,
  Plus,
} from "lucide-react";

import { Manrope, Barlow_Condensed } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
});

const barlow = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
});


const services = [
  {
    number: "01",
    title: "Diagnostyka",
    description:
      "Precyzyjna diagnostyka komputerowa i identyfikacja usterek. Wiemy, gdzie szukać problemu.",
    icon: Gauge,
  },
  {
    number: "02",
    title: "Serwis samochodowy",
    description:
      "Kompleksowa obsługa samochodu i kontrola najważniejszych podzespołów.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Wymiana oleju",
    description:
      "Regularna wymiana oleju i filtrów. Zadbaj o prawidłową pracę silnika.",
    icon: Droplets,
  },
  {
    number: "04",
    title: "Naprawy mechaniczne",
    description:
      "Profesjonalne podejście do usterek i napraw mechanicznych Twojego samochodu.",
    icon: Wrench,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Home() {
  return (
   <main className={`${manrope.variable} ${barlow.variable} min-h-screen bg-[#090B0D] text-[#E8E5DF] overflow-hidden`}>

      {/* NAVIGATION */}
      
<nav className="fixed top-5 left-1/2 z-50 w-[calc(100%-32px)] max-w-[1350px] -translate-x-1/2">
  <div className="flex items-center justify-between rounded-full border border-white/[0.13] bg-[#15191D]/65 px-5 py-3 shadow-[0_12px_50px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl md:px-8">

    <a href="#" className="flex items-center gap-3">
      <span className="text-3xl font-black tracking-tighter text-[#F1EFEB]">
        R<span className="text-[#D45B50]">&</span>S.
      </span>
      <span className="hidden h-8 w-px bg-white/20 sm:block" />
      <span className="hidden text-[9px] font-bold uppercase tracking-[0.22em] text-white/60 sm:block">
        CAR-SERVIS<br />
        <span className="font-normal text-white/35">KOMORNIKI</span>
      </span>
    </a>

    <div className="hidden items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/65 md:flex">
      <a href="#about" className="transition hover:text-white">O nas</a>
      <a href="#services" className="transition hover:text-white">Usługi</a>
      <a href="#process" className="transition hover:text-white">Jak działamy</a>
      <a href="#contact" className="transition hover:text-white">Kontakt</a>
    </div>

    <a
      href="tel:+48790772677"
      className="flex items-center gap-2 rounded-full border border-[#D45B50]/50 bg-[#D45B50] px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(212,91,80,0.18)] transition hover:bg-[#E16B60]"
    >
      <Phone size={14} />
      <span className="hidden sm:inline">Zadzwoń do nas</span>
      <span className="sm:hidden">Zadzwoń</span>
    </a>

  </div>
</nav>


      {/* HERO */}
      
{/* HERO — LUXURY AUTOMOTIVE STYLE */}
<section className="relative min-h-[760px] overflow-hidden bg-[#050505] pt-24 lg:h-[850px]">

  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=90&w=2400&auto=format&fit=crop"
      alt="Luxury sports car"
      className="h-full w-full object-cover object-center opacity-75"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-transparent to-black/30" />
  </div>

  {/* Red ambient lighting */}
  <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-red-700/10 blur-[150px]" />

  {/* Main content */}
  <div className="relative z-10 mx-auto flex h-full min-h-[760px] max-w-[1440px] flex-col px-6 lg:min-h-[850px] lg:px-12">

    {/* Top heading */}
    <div className="relative z-20 mt-16 flex items-start justify-between gap-6 lg:mt-20">

      <motion.div
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">
          <span className="h-[2px] w-8 bg-red-600" />
          R&S CAR-SERVIS / KOMORNIKI
        </p>

        <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[92px]">
          YOUR CAR.
          <br />
          <span className="italic text-red-600">OUR PASSION.</span>
          <br />
          NO COMPROMISE.
        </h1>

        <p className="mt-7 max-w-md text-sm leading-7 text-neutral-300">
          Profesjonalny serwis samochodowy.
          Diagnostyka, konserwacja i naprawy,
          którym możesz zaufać.
        </p>

        <a
          href="#services"
          className="mt-7 inline-flex items-center gap-4 bg-red-600 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:bg-red-700"
        >
          Poznaj naszą ofertę
          <ArrowUpRight size={16} />
        </a>
      </motion.div>

      {/* Floating contact card */}
      <motion.a
        href="tel:+48790772677"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="hidden w-[205px] border border-white/20 bg-black/75 p-4 backdrop-blur-xl transition hover:border-red-600 lg:block"
      >
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">
            Need assistance?
          </span>
          <Plus size={15} className="text-red-500" />
        </div>

        <div className="mt-6 flex h-20 items-center justify-center bg-[#171717]">
          <Wrench size={34} className="text-red-600" />
        </div>

        <p className="mt-5 text-sm font-bold uppercase">
          Umów serwis
        </p>
        <p className="mt-2 text-[10px] leading-5 text-neutral-400">
          Skontaktuj się z nami i zadbaj o swój samochód.
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-[9px] font-bold uppercase tracking-wider">
            Zadzwoń teraz
          </span>
          <ArrowUpRight size={16} className="text-red-500" />
        </div>
      </motion.a>
    </div>

    {/* Car visual separator */}
    <div className="pointer-events-none absolute bottom-[110px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

    {/* Bottom details */}
    <div className="relative z-20 mt-auto flex items-end justify-between border-t border-white/15 pb-10 pt-6">

      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
          <ArrowDownRight size={17} />
        </div>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em]">
            Discover R&S
          </p>
          <p className="mt-1 text-[9px] text-neutral-500">
            Scroll to explore
          </p>
        </div>
      </div>

      <div className="hidden items-center gap-8 sm:flex">
        <div>
          <p className="text-2xl font-black">4.9<span className="text-red-600">/5</span></p>
          <p className="mt-1 text-[8px] uppercase tracking-widest text-neutral-500">
            Customer rating
          </p>
        </div>

        <div className="h-10 w-px bg-white/20" />

        <div>
          <p className="text-2xl font-black">08—21</p>
          <p className="mt-1 text-[8px] uppercase tracking-widest text-neutral-500">
            Mon — Fri
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-500">
          Automotive excellence
        </p>
        <p className="mt-1 text-[9px] text-neutral-500">
          Komorniki, Poland
        </p>
      </div>

    </div>
  </div>
</section>


      {/* INFO STRIP */}
      <section className="border-y border-white/10 bg-[#101010]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-y divide-white/10 px-6 md:grid-cols-4 md:divide-y-0 lg:px-12">

          {[
            ["4.9/5", "Ocena klientów"],
            ["08:00 – 21:00", "Poniedziałek – Piątek"],
            ["4", "Główne obszary usług"],
            ["Komorniki", "Nasza lokalizacja"],
          ].map(([value, label], i) => (
            <div key={label} className="py-8 md:px-6">
              <p className="text-xl font-black tracking-tight text-white sm:text-2xl">
                {value}
                {i === 0 && <span className="ml-2 text-sm text-red-500">★</span>}
              </p>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[10px]">
                {label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-[1440px] px-6 py-28 lg:px-12 lg:py-36">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-32 w-32 border-l border-t border-red-600/70" />

            <img
              src="https://images.unsplash.com/photo-1613214150384-7b5e9f3d7b91?q=85&w=1000&auto=format&fit=crop"
              alt="Profesjonalny serwis samochodowy"
              className="relative z-10 aspect-[4/5] w-full object-cover grayscale-[20%]"
            />

            <div className="absolute -bottom-8 -right-5 z-20 bg-red-600 p-7 sm:p-9">
              <p className="text-4xl font-black">R&S</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em]">
                Car-Servis
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
              <span className="h-px w-8 bg-red-600" />
              Poznaj nas bliżej
            </p>

            <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              NIE TYLKO
              <br />
              NAPRAWA.
              <br />
              <span className="text-red-600">TO TROSKA</span>
              <br />
              O TWÓJ SAMOCHÓD.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-8 text-neutral-400">
              R&S Car-Servis to warsztat samochodowy w Komornikach.
              Zajmujemy się diagnostyką, serwisem, wymianą oleju
              oraz naprawami mechanicznymi.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-8 text-neutral-400">
              Stawiamy na rzetelne podejście do każdego samochodu
              i dokładność wykonywanych prac.
            </p>

            <div className="mt-10 flex items-center gap-5 border-t border-white/10 pt-8">
              <div className="flex h-12 w-12 items-center justify-center bg-red-600/10 text-red-500">
                <ShieldCheck size={25} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider">
                  Profesjonalne podejście
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Twój samochód w dobrych rękach.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#111111] py-28 lg:py-36">

        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
                <span className="h-px w-8 bg-red-600" />
                Co możemy dla Ciebie zrobić?
              </p>

              <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl">
                NASZE <span className="text-red-600">USŁUGI.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-neutral-500">
              Wszystko, czego potrzebuje Twój samochód, aby pozostać
              w dobrej kondycji.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative overflow-hidden bg-[#111111] p-8 transition duration-500 hover:bg-[#181818] sm:p-12"
                >
                  <div className="absolute -right-8 -top-10 text-[180px] font-black text-white/[0.025] transition group-hover:text-red-600/[0.07]">
                    {service.number}
                  </div>

                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-xs font-bold tracking-widest text-red-600">
                      / {service.number}
                    </span>
                    <Icon size={28} className="text-neutral-500 transition group-hover:text-red-500" />
                  </div>

                  <h3 className="relative z-10 mt-12 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="relative z-10 mt-5 max-w-md text-sm leading-7 text-neutral-500">
                    {service.description}
                  </p>

                  <div className="relative z-10 mt-10 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 transition group-hover:text-red-500">
                    R&S Car-Servis
                    <ArrowUpRight size={15} />
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* VISUAL BREAK */}
      <section className="relative flex min-h-[550px] items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=85&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-24 lg:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
              Jakość, której możesz zaufać
            </p>

            <h2 className="text-5xl font-black uppercase leading-[1.05] tracking-tighter sm:text-7xl">
              TWÓJ SAMOCHÓD
              <br />
              ZASŁUGUJE
              <br />
              <span className="text-red-600">NA WIĘCEJ.</span>
            </h2>

            <a
              href="tel:+48790772677"
              className="mt-10 inline-flex items-center gap-5 bg-red-600 px-8 py-5 text-xs font-bold uppercase tracking-widest transition hover:bg-red-700"
            >
              Porozmawiajmy o Twoim aucie
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-[1440px] px-6 py-28 lg:px-12 lg:py-36">

        <div className="mb-16">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
            <span className="h-px w-8 bg-red-600" />
            Bez zbędnych komplikacji
          </p>

          <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl">
            PROSTO DO <span className="text-red-600">CELU.</span>
          </h2>
        </div>

        <div className="grid gap-12 border-t border-white/10 pt-12 sm:grid-cols-3">

          {[
            {
              n: "01",
              title: "Skontaktuj się",
              text: "Zadzwoń do nas i opowiedz, czego potrzebuje Twój samochód.",
            },
            {
              n: "02",
              title: "Ustalimy szczegóły",
              text: "Porozmawiamy o problemie i ustalimy dalsze działania.",
            },
            {
              n: "03",
              title: "Zadbamy o auto",
              text: "Zajmiemy się diagnostyką, serwisem lub naprawą.",
            },
          ].map((item) => (
            <div key={item.n} className="group">
              <p className="text-5xl font-black text-red-600/30 transition group-hover:text-red-600">
                {item.n}
              </p>
              <h3 className="mt-8 text-xl font-bold uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-7 text-neutral-500">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-y border-white/10 bg-[#111111] py-24">

        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
                Opinie klientów
              </p>

              <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-6xl">
                ZAUFANIE
                <br />
                <span className="text-red-600>">MA ZNACZENIE.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
                Zadowolenie klientów jest dla nas ważne.
                Sprawdź opinie o R&S Car-Servis.
              </p>
            </div>

            <div className="border border-white/10 bg-[#080808] p-8 sm:p-12">

              <div className="flex items-center gap-2 text-red-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={19} fill="currentColor" />
                ))}
              </div>

              <p className="mt-7 text-7xl font-black tracking-tighter">
                4.9<span className="text-red-600">/5</span>
              </p>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Ocena klientów
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/search?q=R%26S+Car-Servis+Komorniki+opinie"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-red-600 px-5 py-4 text-[10px] font-bold uppercase tracking-wider transition hover:bg-red-700"
                >
                  Sprawdź opinie
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://www.facebook.com/search/top?q=R%26S%20Car-Servis"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-white/20 px-5 py-4 text-[10px] font-bold uppercase tracking-wider transition hover:border-white"
                >
                  Facebook
                  <ArrowUpRight size={15} />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1440px] px-6 py-28 lg:px-12 lg:py-36">

        <div className="mb-16">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
            <span className="h-px w-8 bg-red-600" />
            Znajdź nas
          </p>

          <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl">
            POROZMAWIAJMY.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          <div className="space-y-10">

            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-600/10 text-red-500">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  Nasz adres
                </p>
                <p className="mt-3 text-lg font-bold">
                  ul. Warsztatowa 7
                </p>
                <p className="mt-1 text-sm text-neutral-400">
                  62-052 Komorniki, Polska
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R%26S+Car-Servis+ul.+Warsztatowa+7+Komorniki"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-red-500 hover:text-red-400"
                >
                  Wyznacz trasę <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-600/10 text-red-500">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  Zadzwoń do nas
                </p>
                <a href="tel:+48790772677" className="mt-3 block text-xl font-bold hover:text-red-500">
                  +48 790 772 677
                </a>
                <a href="tel:+48574271030" className="mt-2 block text-sm text-neutral-400 hover:text-white">
                  +48 574 271 030
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-600/10 text-red-500">
                <Clock3 size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  Godziny otwarcia
                </p>
                <p className="mt-3 text-lg font-bold">
                  Poniedziałek – Piątek
                </p>
                <p className="mt-1 text-sm text-neutral-400">
                  08:00 – 21:00
                </p>
              </div>
            </div>

          </div>

          <div className="relative min-h-[400px] overflow-hidden border border-white/10 bg-[#111111]">
            <iframe
              title="R&S Car-Servis - lokalizacja"
              src="https://maps.google.com/maps?q=Warsztatowa%207%2C%2062-052%20Komorniki&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="absolute inset-0 h-full w-full grayscale invert-[0.9] contrast-[0.85]"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute bottom-5 left-5 z-10 bg-black/90 p-5 backdrop-blur">
              <p className="text-lg font-black">R&S Car-Servis</p>
              <p className="mt-1 text-xs text-neutral-400">
                Warsztatowa 7, Komorniki
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050505]">

        <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-12">

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">

            <div>
              <p className="text-4xl font-black tracking-tighter">
                R<span className="text-red-600">&</span>S<span className="text-red-600">.</span>
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                CAR-SERVIS / KOMORNIKI
              </p>
            </div>

            <a
              href="tel:+48790772677"
              className="group flex items-center gap-4 text-sm font-bold uppercase tracking-wider transition hover:text-red-500"
            >
              +48 790 772 677
              <span className="flex h-10 w-10 items-center justify-center bg-red-600 text-white transition group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={19} />
              </span>
            </a>

          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-[10px] uppercase tracking-widest text-neutral-600 sm:flex-row">
            <p>© {new Date().getFullYear()} R&S Car-Servis. Wszelkie prawa zastrzeżone.</p>
            <p>Automotive service · Komorniki</p>
          </div>

        </div>
      </footer>

      {/* MOBILE CALL BUTTON */}
      <a
        href="tel:+48790772677"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl shadow-red-600/30 transition hover:scale-110 md:hidden"
        aria-label="Zadzwoń do R&S Car-Servis"
      >
        <Phone size={22} />
      </a>

    </main>
  );
}
