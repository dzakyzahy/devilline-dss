"use client";

import React from 'react';
import {Link} from './Link';
import { Header } from './Header';
import HeroSlideshow from './HeroSlideshow';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
      <Header />

      {/* HERO SECTION:
          Layer 1 (z-0): Map and Report Slideshow + White Right-Side Fade
          Layer 2 (z-10): Animated Colorful Snaking Ribbons
          Layer 3 (z-20): Invisible Compartment Aligned Top-Right on Laptop (2-Line Title & 5-Line Description) + Dedicated Centered Mobile Layout
      */}
      <section className="relative isolate w-full min-h-0 lg:min-h-[85vh] flex items-start justify-center lg:justify-end overflow-hidden bg-white border-b border-gray-200">
        <HeroSlideshow />
        {/* Fade the gallery behind the introduction while keeping the left side visible. */}
        <div className="absolute inset-0 z-0 bg-white/75 sm:bg-white/70 lg:bg-transparent lg:bg-[linear-gradient(to_right,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_28%,rgba(255,255,255,0.88)_53%,rgba(255,255,255,0.98)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-16 z-0 bg-gradient-to-t from-white to-transparent" />

        {/* LAYER 2 (MIDDLE): Full-Canvas Snaking Ribbons */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 w-full h-full overflow-hidden"
        >
          <svg
            viewBox="0 0 1600 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover opacity-55 lg:opacity-100"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Gradient 1: Royal Blue -> Gold -> Teal -> Deep Emerald */}
              <linearGradient id="gcRibbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d4ed8">
                  <animate
                    attributeName="stop-color"
                    values="#1d4ed8;#047857;#eab308;#1d4ed8"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="35%" stopColor="#eab308">
                  <animate
                    attributeName="stop-color"
                    values="#eab308;#1d4ed8;#0d9488;#eab308"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="70%" stopColor="#0d9488">
                  <animate
                    attributeName="stop-color"
                    values="#0d9488;#eab308;#1d4ed8;#0d9488"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#047857">
                  <animate
                    attributeName="stop-color"
                    values="#047857;#0d9488;#047857;#047857"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>

              {/* Gradient 2: Deep Emerald -> Gold -> Royal Blue -> Teal */}
              <linearGradient id="gcRibbonGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#047857">
                  <animate
                    attributeName="stop-color"
                    values="#047857;#2563eb;#d97706;#047857"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="45%" stopColor="#f59e0b">
                  <animate
                    attributeName="stop-color"
                    values="#f59e0b;#0d9488;#1d4ed8;#f59e0b"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#1d4ed8">
                  <animate
                    attributeName="stop-color"
                    values="#1d4ed8;#eab308;#047857;#1d4ed8"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            {/* Subtle Full Track Guide 1 */}
            <path
              d="M -80 180 C 220 -30, 480 340, 820 170 C 1140 10, 1010 520, 1340 470 C 1560 440, 1410 770, 1680 860"
              stroke="url(#gcRibbonGrad1)"
              strokeWidth="68"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.14"
            />

            {/* Subtle Full Track Guide 2 */}
            <path
              d="M 1520 -60 C 1220 120, 1520 350, 1140 430 C 780 510, 620 250, 310 470 C 110 610, 220 820, -80 870"
              stroke="url(#gcRibbonGrad2)"
              strokeWidth="62"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.14"
            />

            {/* Animated Ribbon 1 */}
            <path
              d="M -80 180 C 220 -30, 480 340, 820 170 C 1140 10, 1010 520, 1340 470 C 1560 440, 1410 770, 1680 860"
              stroke="url(#gcRibbonGrad1)"
              strokeWidth="68"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="gc-snake-ribbon-main"
            />

            {/* Animated Ribbon 2 */}
            <path
              d="M 1520 -60 C 1220 120, 1520 350, 1140 430 C 780 510, 620 250, 310 470 C 110 610, 220 820, -80 870"
              stroke="url(#gcRibbonGrad2)"
              strokeWidth="62"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="gc-snake-ribbon-cross"
            />
          </svg>
        </div>

        {/* LAYER 3 (TOP): Centered Responsive Mobile Layout (< lg) | Top-Right Invisible Compartment on Laptop (lg:) */}
        <div className="relative z-20 w-full max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-14 pt-7 pb-24 sm:pt-9 sm:pb-24 lg:pt-10 lg:pb-16 flex flex-col items-center text-center lg:items-end lg:text-right">
          {/* Invisible bounding wrapper */}
          <div className="w-full max-w-xl lg:max-w-[780px] flex flex-col items-center lg:items-end space-y-4">
            {/* Competition Pill Badge */}
            <span className="inline-block max-w-full rounded-full bg-emerald-50/95 border border-emerald-300 px-3.5 py-1.5 sm:px-4 text-[10px] sm:text-xs lg:text-sm font-bold text-emerald-900 tracking-wide shadow-2xs">
              OLYMPIAR 2026 | OREBODY TO ECOSYSTEM • AGINCOURT RESOURCES
            </span>

            {/* Title: Strictly 2 Lines on Laptop, Balanced Responsive Wrapping on Mobile */}
            <h2 className="text-[28px] sm:text-4xl lg:text-[44px] xl:text-[48px] font-black tracking-tight text-gray-900 leading-[1.14] lg:leading-[1.12]" style={{paintOrder:'stroke fill',WebkitTextStroke:'1.1px #000000',textShadow:'0 2px 12px rgba(255,255,255,.9)'}}>
              <span className="block lg:whitespace-nowrap">DEVILLINE &amp; <span className="text-emerald-600" style={{paintOrder:'stroke fill',WebkitTextStroke:'1.3px #000000'}}>RAMBA JORING</span></span>
              <span className="block lg:whitespace-nowrap">Decision Support System</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-[18.5px] xl:text-[19.5px] text-gray-800 font-semibold leading-relaxed max-w-md sm:max-w-lg lg:max-w-[640px]" style={{paintOrder:'stroke fill',WebkitTextStroke:'.35px #000000',textShadow:'0 1px 10px rgba(255,255,255,.92)'}}>
              <span className="lg:block">Integrasi <strong>geologi, geokimia, dan lingkungan</strong></span>{' '}
              <span className="lg:block">untuk perencanaan eksplorasi emas Ramba Joring.</span>{' '}
              <span className="lg:block">Telusuri <strong className="text-emerald-700">19 lubang bor</strong>, <strong>2.476 interval assay</strong>,</span>{' '}
              <span className="lg:block">bukti permukaan, dan relief <strong className="text-emerald-700">DEMNAS tiga dimensi</strong></span>{' '}
              <span className="lg:block">dalam pengujian target berdasarkan <strong>Laporan Devilline</strong>.</span>
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="relative z-30 w-full max-w-md sm:max-w-xl pt-2 flex flex-col items-center lg:items-end gap-3">
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="/simulation"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 py-3.5 sm:py-4 px-5 text-base font-bold text-white shadow-md transition-all"
                >
                  Mulai Eksplorasi DSS
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/terrain"
                  className="flex w-full items-center justify-center rounded-xl border-2 border-emerald-700 bg-white/95 hover:bg-emerald-50 py-3.5 sm:py-4 px-5 text-base font-bold text-emerald-800 shadow-sm transition-all"
                >
                  Jelajahi Terrain 3D
                </Link>
              </div>

              <div className="grid w-full grid-cols-3 gap-2.5">
                <Link
                  href="/about"
                  className="flex items-center justify-center rounded-lg border border-gray-300 bg-white/95 hover:bg-gray-100 py-2.5 px-3 text-xs sm:text-sm font-semibold text-gray-800 transition-colors"
                >
                  Metodologi
                </Link>
                <Link
                  href="/documentation"
                  className="flex items-center justify-center rounded-lg border border-gray-300 bg-white/95 hover:bg-gray-100 py-2.5 px-3 text-xs sm:text-sm font-semibold text-gray-800 transition-colors"
                >
                  Dokumentasi
                </Link>
                <Link
                  href="/team"
                  className="flex items-center justify-center rounded-lg border border-gray-300 bg-white/95 hover:bg-gray-100 py-2.5 px-3 text-xs sm:text-sm font-semibold text-gray-800 transition-colors"
                >
                  Tim Devilline
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main tabIndex={-1} className="flex-1 max-w-7xl w-full mx-auto px-6 py-16 space-y-16">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ['Cakupan Pengeboran','19','lubang bor','3.100,9 m total kedalaman · UTM WGS 84 zona 47N'],
            ['Assay Bawah Permukaan','2.476','interval','2.466 nilai Au tersedia · interval asli dipertahankan'],
            ['Geokimia Permukaan','382 + 188','batuan + tanah','Subset Ramba Joring · media sampel dibedakan'],
            ['Screening Lingkungan','106','hasil NAG','Seluruh pengujian berasal dari satu lubang: RJDH012']
          ].map(([label,value,unit,note])=><div key={label} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"><span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">{label}</span><div className="text-3xl font-extrabold font-mono text-gray-900">{value} <span className="text-sm font-normal text-gray-500">{unit}</span></div><p className="text-xs text-gray-600 mt-2 font-medium">{note}</p></div>)}
        </section>
        <section className="space-y-8">
          <div className="max-w-3xl"><span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">Geologi, Geokimia, Lingkungan &amp; Perencanaan Eksplorasi</span><h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Dari dukungan pengamatan menuju pengujian target</h3></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              ['Program Verifikasi Permukaan','C-N & S-1 · 98 stasiun pada delapan lintasan','report-program.png','Rancangan konseptual'],
              ['Telaah Geometri Bawah Permukaan','Penampang C-N · hubungan target dan lintasan bor','report-section.png','Laporan Devilline']
            ].map(([label,title,img,badge])=><div key={label} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col"><div className="p-5 border-b border-gray-100 flex flex-wrap gap-3 items-center justify-between"><div><span className="text-xs font-mono text-emerald-700 font-bold uppercase">{label}</span><h4 className="text-base font-bold text-gray-900">{title}</h4></div><span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">{badge}</span></div><a href={'./assets/'+img} target="_blank" rel="noreferrer" className="p-4 flex-1 flex items-center justify-center bg-white"><img src={'./assets/'+img} alt={title} className="w-full h-auto rounded-lg object-contain border border-gray-200 bg-white"/></a></div>)}
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ['01 • Geologi','Core, kontak & geometri','Telaah litologi, alterasi, mineralisasi dan oksidasi bersama interval assay. A dan B diarahkan pada pengujian korelasi kontak terhadap lensa atau koridor alterasi.','Tidak menetapkan tubuh menerus'],
            ['02 • Geokimia','Dukungan target & sensitivitas','Pisahkan soil, outcrop/channel dan float. Bandingkan median per catatan dengan median per lokasi, serta perubahan dukungan pada radius target yang berbeda.','C-N & S-1: verifikasi permukaan'],
            ['03 • Lingkungan','Screening pembentukan asam','Sebanyak 69 dari 106 hasil NAG mempunyai pH di bawah 4,5. Cakupan satu lubang memerlukan verifikasi domain, ANC dan sulfur sebelum keputusan lapangan.','NAGpH ≥4,5 belum menetapkan NAF'],
            ['04 • Eksplorasi','Program kerja bersyarat','Rancang pengujian ulang sumber dan pengulangan anomali. Satu lubang C-N 140 m dipertimbangkan setelah prasyarat; CN-E dan CN-N saling menggantikan.','98 stasiun • 2.400 m lintasan']
          ].map(([label,title,body,note])=><div key={label} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between"><div><span className="text-xs font-mono font-bold text-emerald-700 block mb-2">MODUL {label}</span><h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4><p className="text-gray-600 text-sm leading-relaxed">{body}</p></div><div className="mt-5 pt-3 border-t border-gray-100 text-xs text-emerald-700 font-mono font-semibold">{note}</div></div>)}
        </section>
      </main>
      <footer className="py-8 px-6 text-gray-600 text-xs border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4"><img src="./assets/itb.png" alt="ITB" className="h-8 w-auto object-contain"/><img src="./assets/olympiar.png" alt="OlympiAR 2026" className="h-8 w-auto object-contain"/><img src="./assets/agincourt.png" alt="Agincourt Resources" className="h-8 w-auto object-contain"/><span className="font-bold text-gray-800">TIM DEVILLINE · ITB</span></div>
          <p className="text-gray-500">© 2026 Devilline Decision Support System · OlympiAR 2026.</p>
        </div>
        <section aria-labelledby="usage-disclaimer" className="max-w-7xl mx-auto mt-6 pt-6 border-t border-gray-200 leading-relaxed">
          <h2 id="usage-disclaimer" className="font-semibold text-gray-800 mb-2">Batas penggunaan</h2>
          <p>Website DSS dan data yang disajikan hanya untuk keperluan OlympiAR 2026 serta pengujian dalam lingkungan yang telah memperoleh izin. Penggunaan, pengunduhan, dan penyebarluasan di luar lingkup tersebut memerlukan persetujuan pemilik data dan pihak yang berwenang. Hasil analisis dan visualisasi merupakan bahan kajian kompetisi dan tidak menjadi dasar tunggal keputusan operasional di lapangan.</p>
        </section>
      </footer>
    </div>
  );
}
