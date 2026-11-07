"use client";

import React from 'react';
import { Header } from './Header';
import { ArrowLeft } from 'lucide-react';
import {Link} from './Link';

interface TeamMember {
  name: string;
  role: string;
  major: string;
  faculty: string;
  university: string;
  bio: string;
  image: string;
  badge: string;
}

const teamMembers: TeamMember[] = [
  {
    "name": "Muhammad Ilham Saripul Milah",
    "role": "Tim Devilline",
    "major": "Teknik Metalurgi",
    "faculty": "FTTM ITB",
    "university": "Institut Teknologi Bandung",
    "bio": "Tim peserta OlympiAR 2026 dalam kajian integrasi geologi, geokimia, dan evaluasi potensi pembentukan asam untuk perencanaan eksplorasi emas Ramba Joring.",
    "image": "./assets/pp_ilham_team.jpg",
    "badge": "ITB • OlympiAR 2026"
  },
  {
    "name": "Ima Alimatusyadiyah",
    "role": "Tim Devilline",
    "major": "Institut Teknologi Bandung",
    "faculty": "OlympiAR 2026",
    "university": "Institut Teknologi Bandung",
    "bio": "Tim peserta OlympiAR 2026 dalam kajian integrasi geologi, geokimia, dan evaluasi potensi pembentukan asam untuk perencanaan eksplorasi emas Ramba Joring.",
    "image": "./assets/ima-placeholder.svg",
    "badge": "ITB • OlympiAR 2026"
  },
  {
    "name": "Dzaky Zahy Rabbani",
    "role": "Tim Devilline",
    "major": "Oseanografi",
    "faculty": "FITB ITB",
    "university": "Institut Teknologi Bandung",
    "bio": "Tim peserta OlympiAR 2026 dalam kajian integrasi geologi, geokimia, dan evaluasi potensi pembentukan asam untuk perencanaan eksplorasi emas Ramba Joring.",
    "image": "./assets/pp_dzaky.jpg",
    "badge": "ITB • OlympiAR 2026"
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
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 right-4 max-w-[88%] px-3 py-1 rounded-full bg-white/95 border border-gray-200 text-[11px] font-mono font-semibold text-emerald-800 shadow-sm truncate">
                  {member.badge}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-amber-700 mb-3">
                    {member.major} • {member.faculty}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>{member.university}</span>
                  <span className="font-mono font-bold text-emerald-700">DEVILLINE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
