"use client";

import React from 'react';
import { Header } from './Header';
import { ArrowLeft } from 'lucide-react';
import {Link} from './Link';

interface TeamMember {
  name: string;
  image: string;
  imageClassName?: string;
}

const teamMembers: TeamMember[] = [
  {
    "name": "Muhammad Ilham Saripul Milah",
    "image": "./assets/pp_ilham_team.jpg"
  },
  {
    "name": "Ima Alimatusyadiyah",
    "image": "./assets/pp_ima.png",
    "imageClassName": "pt-14"
  },
  {
    "name": "Dzaky Zahy Rabbani",
    "image": "./assets/pp_dzaky.jpg"
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
      <Header />

      <main tabIndex={-1} className="flex-1 max-w-7xl w-full mx-auto px-6 py-12 space-y-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-emerald-700 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Beranda
        </Link>

        {/* Competition & Institution Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-700">
            OLYMPIAR 2026 | OREBODY TO ECOSYSTEM • AGINCOURT RESOURCES
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Profil <span className="text-emerald-700">TIM DEVILLINE</span>
          </h1>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Tim Institut Teknologi Bandung dalam OlympiAR 2026. Kajian kami mengintegrasikan geologi, geokimia, serta evaluasi potensi pembentukan asam untuk perencanaan eksplorasi emas berbasis lingkungan di Ramba Joring, Distrik Martabe.</p>
        </div>

        {/* Core Student Team Cards (3 Members - Ima in Center) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative h-72 w-full bg-white overflow-hidden border-b border-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover object-top ${member.imageClassName ?? ''}`}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-900">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <footer className="border-t border-gray-200 pt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-gray-600">
          <span>Institut Teknologi Bandung</span>
          <span className="font-mono font-bold text-emerald-700">DEVILLINE</span>
        </footer>
      </main>
    </div>
  );
}
