"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heading2, BodyLarge, BodyBase } from "./Typography";
import { ButtonPrimary } from "./Buttons";

interface TechBrick {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  iconSvg: React.ReactNode;
}

const bricks: TechBrick[] = [
  {
    id: "acquisition",
    number: "01",
    category: "ACQUISITION",
    title: "Briques d'Attraction & Trafic",
    subtitle: "Site Web Optimisé & Landing Pages Dédiées",
    description: "Des briques conçues pour capter l'attention des bons prospects et maximiser le trafic qualifié vers vos offres.",
    items: [
      "Site web rapide, responsive & SEO-first",
      "Landing pages dédiées par campagne ou offre",
      "Contenus à fort impact et positionnement clair",
    ],
    iconSvg: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
      </svg>
    ),
  },
  {
    id: "conversion",
    number: "02",
    category: "CONVERSION",
    title: "Briques de Capture & Engagement",
    subtitle: "Funnels de Qualif & Intégration TidyCal",
    description: "Des briques interactives qui transforment le simple visiteur en prospect chaud et réservent l'audit direct.",
    items: [
      "Formulaires de qualification intelligents",
      "Funnels de conversion orientés résultats",
      "Module de prise de rendez-vous TidyCal synchronisé",
    ],
    iconSvg: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    id: "crm",
    number: "03",
    category: "FIDÉLISATION & CRM",
    title: "Briques d'Automation & Relance",
    subtitle: "Séquences E-mails & Base Airtable",
    description: "Des briques d'automatisation Make & e-mail nurturing qui accompagnent le lead du premier contact à la fidélisation.",
    items: [
      "Séquences e-mails automatisées personnalisées",
      "Intégration Make.com & CRM Airtable",
      "Relances prospects & nurturing long terme",
    ],
    iconSvg: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "pilotage",
    number: "04",
    category: "PILOTAGE & MESURE",
    title: "Briques d'Arbitrage & Analytics",
    subtitle: "Tableau de Bord KPI & Optimisation",
    description: "Des briques de mesure continue pour suivre le coût d'acquisition, le taux de conversion et piloter la croissance par la donnée.",
    items: [
      "Tableau de bord de pilotage unifié (KPI)",
      "Mesure en temps réel du coût / lead",
      "Boucle d'optimisation continue du système",
    ],
    iconSvg: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export function SectionArchitectureInteractive() {
  const [activeBrickId, setActiveBrickId] = useState<string>("acquisition");

  const activeBrick = bricks.find((b) => b.id === activeBrickId) || bricks[0];

  return (
    <section className="w-full py-20 lg:py-32 bg-[#0D0D0D] text-white relative overflow-hidden border-t border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C79A3B]/10 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header section */}
        <motion.div
          className="text-center max-w-[840px] mx-auto space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-4 py-2 rounded-full border border-[#C79A3B]/40">
            ARCHITECTURE DU SYSTÈME DE CROISSANCE
          </span>
          <Heading2 className="text-3xl sm:text-5xl lg:text-6xl text-white pt-2 leading-[1.15]">
            Un assemblage de briques techniques interconnectées
          </Heading2>
          <BodyLarge className="text-gray-300 text-lg sm:text-xl max-w-[65ch] mx-auto pt-2">
            Du premier point de contact jusqu&apos;à la signature et au suivi, chaque brique (site optimisé, landing pages, séquences e-mails, funnels et CRM) est reliée pour capturer et convertir vos prospects.
          </BodyLarge>
        </motion.div>

        {/* Panoramic 3D Image Showcase with Animated SVG Data Flow */}
        <motion.div
          className="relative w-full aspect-[21/9] min-h-[320px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-[#C79A3B]/40 shadow-2xl shadow-black/90 group"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/architecture-wide.png"
            alt="Vue panoramique de l'architecture de briques techniques interconnectées CARPATH"
            fill
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-103 brightness-95"
            priority
          />
          {/* Dark gradient vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/40 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-transparent to-[#0D0D0D]/80 opacity-70" />

          {/* Interactive animated data flow SVG overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
            {/* Main connecting conduit line */}
            <path
              d="M 120,200 Q 250,150 400,220 T 700,180 T 880,240"
              fill="none"
              stroke="#C79A3B"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              opacity="0.4"
            />

            {/* Glowing moving laser particle */}
            <motion.path
              d="M 120,200 Q 250,150 400,220 T 700,180 T 880,240"
              fill="none"
              stroke="#C79A3B"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{
                pathLength: [0.15, 0.3, 0.15],
                pathOffset: [0, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                filter: "drop-shadow(0px 0px 8px #C79A3B)",
              }}
            />
          </svg>

          {/* Dynamic Top Badge Overlay */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#0D0D0D]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C79A3B]/50 flex items-center gap-3 shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C79A3B] animate-ping" />
            <span className="text-xs font-semibold tracking-wider text-[#C79A3B] uppercase">
              FLUX INTERCONNECTÉ EN TEMPS RÉEL
            </span>
          </div>

          {/* Bottom Lead Flow Callout */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#0D0D0D]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C79A3B]/20 border border-[#C79A3B]/50 flex items-center justify-center text-[#C79A3B] font-bold text-sm">
                ⚡
              </div>
              <div>
                <p className="font-heading font-semibold text-sm sm:text-base text-white">
                  L&apos;objectif du système : Transformer l&apos;attention en rendez-vous qualifié
                </p>
                <p className="text-xs sm:text-sm text-gray-300 font-normal mt-0.5">
                  Trafic qualifié ➔ Landing Page ➔ Formulaire de qualification ➔ Séquence Email & CRM ➔ Client fidèle.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-center">
              <span className="text-xs font-semibold text-[#C79A3B] bg-[#C79A3B]/10 px-3 py-1.5 rounded-full border border-[#C79A3B]/30 whitespace-nowrap">
                Système 100% automatisé
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4 Interactive Modular Bricks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {bricks.map((brick) => {
            const isActive = brick.id === activeBrickId;
            return (
              <motion.div
                key={brick.id}
                onClick={() => setActiveBrickId(brick.id)}
                className={`cursor-pointer group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--bg-surface)] border-[#C79A3B] shadow-[0_10px_30px_-10px_rgba(199,154,59,0.3)] ring-1 ring-[#C79A3B]"
                    : "bg-[#0D0D0D] border-white/10 hover:border-[#C79A3B]/50 hover:bg-[var(--bg-surface)]/60"
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-4">
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-extrabold text-2xl text-[#C79A3B]">
                      {brick.number}
                    </span>
                    <div className={`p-2.5 rounded-xl transition-colors ${isActive ? "bg-[#C79A3B]/20 border border-[#C79A3B]/50" : "bg-white/5 border border-white/10 group-hover:border-[#C79A3B]/30"}`}>
                      {brick.iconSvg}
                    </div>
                  </div>

                  {/* Category Pill */}
                  <span className="inline-block text-[11px] font-semibold text-[#C79A3B] tracking-wider uppercase bg-[#C79A3B]/10 px-2.5 py-1 rounded-md border border-[#C79A3B]/30">
                    {brick.category}
                  </span>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#C79A3B] transition-colors">
                      {brick.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mt-1">
                      {brick.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {brick.description}
                  </p>
                </div>

                {/* Items List */}
                <div className="pt-6 border-t border-white/10 space-y-2.5 mt-4">
                  {brick.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="text-[#C79A3B] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Focus Card for Active Brick */}
        <motion.div
          key={activeBrick.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[var(--bg-surface)] border border-[#C79A3B]/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold text-[#C79A3B] uppercase tracking-wider">
              BRIQUE SÉLECTIONNÉE — {activeBrick.category}
            </span>
            <h4 className="font-heading font-bold text-xl sm:text-2xl text-white">
              {activeBrick.title} ({activeBrick.subtitle})
            </h4>
            <BodyBase className="text-gray-300 text-sm sm:text-base max-w-[65ch]">
              {activeBrick.description} Cette brique est directement intégrée aux autres composants du CARPATH Operating System pour ne laisser aucun lead filer.
            </BodyBase>
          </div>

          <div className="flex-shrink-0">
            <ButtonPrimary href="/audit-gratuit" className="py-3.5 px-7 text-sm whitespace-nowrap">
              Installer ce système chez moi
            </ButtonPrimary>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
