"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heading2, BodyLarge } from "./Typography";
import { ButtonPrimary } from "./Buttons";

interface PuzzleModule {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  details: string[];
  icon: React.ReactNode;
  initialOffset: { x: number; y: number; rotate: number };
}

const puzzleModules: PuzzleModule[] = [
  {
    id: "gbp",
    title: "Google Business & Réputation",
    subtitle: "Visibilité locale & avis clients",
    tag: "ACQUISITION LOCAL",
    details: ["Fiche GBP optimisée", "Gestion & réponse aux avis", "Référencement carte & local"],
    icon: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    initialOffset: { x: -140, y: -90, rotate: -12 },
  },
  {
    id: "website",
    title: "Site Internet & Landing Pages",
    subtitle: "Capture & Conversion",
    tag: "CONVERSION SITE",
    details: ["Site web rapide & SEO", "Landing pages dédiées", "Lead magnets & CTA qualifiants"],
    icon: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    initialOffset: { x: 140, y: -90, rotate: 12 },
  },
  {
    id: "social",
    title: "Réseaux Sociaux & Ads",
    subtitle: "Acquisition & Notoriété",
    tag: "ACQUISITION ADS",
    details: ["Campagnes Meta & Google Ads", "Posts & contenus ciblés", "Attraction de prospects chauds"],
    icon: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    initialOffset: { x: -160, y: 70, rotate: -8 },
  },
  {
    id: "crm",
    title: "CRM & Automations Email / SMS",
    subtitle: "Fidélisation & Suivi Lead",
    tag: "FIDÉLISATION & CRM",
    details: ["Séquences emails & SMS", "Intégration Make & Airtable", "Nurturing & relances récurrentes"],
    icon: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    initialOffset: { x: 160, y: 70, rotate: 8 },
  },
  {
    id: "dashboard",
    title: "Tableau de Bord & Pilotage OS",
    subtitle: "Indicateurs KPI & Arbitrage",
    tag: "PILOTAGE GLOBAL",
    details: ["Suivi en temps réel des leads", "Mesure du coût d'acquisition", "Arbitrage fondé sur les données"],
    icon: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    initialOffset: { x: 0, y: 150, rotate: 0 },
  },
];

export function SectionPositionnement() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress into assembly factor [0 = disassembled, 1 = assembled]
  const assemblyProgress = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const linesOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const connectionGlow = useTransform(scrollYProgress, [0.5, 0.7], [0.3, 1]);

  return (
    <section
      ref={containerRef}
      className="w-full py-20 lg:py-32 bg-[var(--bg-surface)] relative overflow-hidden border-y border-white/10"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#C79A3B]/10 blur-[180px] rounded-full pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Positionnement - Copywriting Copywriter 100% Strict */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="inline-block text-xs font-semibold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-4 py-2 rounded-full border border-[#C79A3B]/40 mb-6">
                POSITIONNEMENT &amp; COPILOTAGE
              </span>
              <Heading2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.2] pt-2">
                CARPATH n&apos;est pas une agence.<br />
                Ce n&apos;est pas un cabinet.<br />
                Ce n&apos;est pas un outil.
              </Heading2>
            </div>
            <BodyLarge className="text-lg leading-relaxed pt-2">
              CARPATH est votre copilote de croissance. Nous installons et pilotons un système de croissance sur-mesure, directement dans votre entreprise. Vous restez aux commandes — nous mettons la méthode, les indicateurs et le pilotage. Le résultat : des décisions fondées sur des données, pas sur des intuitions.
            </BodyLarge>
            <div className="pt-4">
              <ButtonPrimary href="/audit-gratuit" className="py-4 px-8 text-base">
                Réserver mon audit gratuit
              </ButtonPrimary>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#C79A3B] tracking-wider uppercase bg-[#C79A3B]/10 px-3 py-1 rounded-full border border-[#C79A3B]/30">
                  CARPATH OPERATING SYSTEM
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#C79A3B] animate-ping" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                Un puzzle de briques interconnectées
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Fiche Google, site web, campagnes ads, CRM et tableau de bord : faites défiler la page pour observer l&apos;assemblage dynamique des modules en un système unifié.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#C79A3B] font-semibold">
                <span>↓ Scrollez pour voir l&apos;assemblage en direct</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Scroll-Driven Puzzle Assembly Canvas */}
        <div className="relative w-full rounded-3xl bg-[#0D0D0D] border border-[#C79A3B]/40 p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[640px] flex flex-col justify-between">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#C79A3B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Title bar */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-semibold text-[#C79A3B] uppercase tracking-widest">
                ANIMATION DU SYSTÈME (SCROLL INTERACTIF)
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-1">
                L&apos;assemblage du CARPATH OS en direct
              </h3>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs text-gray-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C79A3B]" />
              <span>Scrollez vers le bas pour assembler / vers le haut pour désassembler</span>
            </div>
          </div>

          {/* SVG Interconnection Laser Flow (Revealed as modules assemble) */}
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            style={{ opacity: linesOpacity }}
          >
            {/* Connecting paths between grid modules */}
            <path d="M 280,160 L 500,160 L 500,320 M 720,160 L 500,160 M 280,360 L 500,360 M 720,360 L 500,360 M 500,360 L 500,500" stroke="#C79A3B" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.5" />

            {/* Continuous laser pulse along central hub */}
            <motion.circle
              r="6"
              fill="#C79A3B"
              animate={{
                cx: [280, 500, 720, 500, 280],
                cy: [160, 160, 360, 500, 160],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ filter: "drop-shadow(0px 0px 10px #C79A3B)" }}
            />
          </motion.svg>

          {/* 5 Puzzle Cards Grid (Scroll Animated Assembly) */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 my-auto">
            {puzzleModules.map((module, index) => {
              // Calculate transform values based on scroll assembly progress
              const xVal = useTransform(assemblyProgress, [0, 1], [module.initialOffset.x, 0]);
              const yVal = useTransform(assemblyProgress, [0, 1], [module.initialOffset.y, 0]);
              const rotateVal = useTransform(assemblyProgress, [0, 1], [module.initialOffset.rotate, 0]);
              const opacityVal = useTransform(assemblyProgress, [0, 1], [0.35, 1]);
              const scaleVal = useTransform(assemblyProgress, [0, 1], [0.88, 1]);

              // Center card spans full row on lg screens if index === 4
              const isCenterCard = index === 4;

              return (
                <motion.div
                  key={module.id}
                  style={{
                    x: xVal,
                    y: yVal,
                    rotate: rotateVal,
                    opacity: opacityVal,
                    scale: scaleVal,
                  }}
                  className={`group relative bg-[var(--bg-surface)] border border-white/15 rounded-2xl p-6 transition-all duration-300 hover:border-[#C79A3B] hover:shadow-[0_0_35px_rgba(199,154,59,0.25)] ${
                    isCenterCard ? "lg:col-span-3 lg:max-w-[620px] lg:mx-auto w-full" : ""
                  }`}
                >
                  {/* Puzzle Notch / Interlocking Edge Graphic Accent */}
                  <div className="absolute -top-3 left-10 px-3 py-0.5 rounded-full bg-[#0D0D0D] border border-[#C79A3B]/60 text-[10px] font-bold text-[#C79A3B] tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3B]" />
                    <span>{module.tag}</span>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Header: Icon & Number */}
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#C79A3B]/50 transition-colors">
                        {module.icon}
                      </div>
                      <span className="font-heading font-extrabold text-xl text-[#C79A3B]">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white group-hover:text-[#C79A3B] transition-colors">
                        {module.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-medium mt-0.5">
                        {module.subtitle}
                      </p>
                    </div>

                    {/* Details checklist */}
                    <ul className="space-y-2 border-t border-white/10 pt-4 text-xs text-gray-300">
                      {module.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <span className="text-[#C79A3B] font-bold">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Assembled Indicator status */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Statut :</span>
                    <motion.span style={{ opacity: linesOpacity }} className="text-[#C79A3B] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3B] animate-pulse" />
                      Module assemblé
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Callout inside canvas */}
          <motion.div
            style={{ opacity: connectionGlow }}
            className="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4"
          >
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-[#C79A3B]/20 border border-[#C79A3B]/50 flex items-center justify-center text-[#C79A3B] font-bold text-base flex-shrink-0">
                ⚙️
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-white">
                  Les 5 pièces sont assemblées et connectées en un système unique.
                </p>
                <p className="text-xs text-gray-300 font-normal mt-0.5">
                  Aucun module n&apos;est isolé : le trafic nourrit la conversion, le CRM relance les prospects et le tableau de bord pilote le tout.
                </p>
              </div>
            </div>
            <ButtonPrimary href="/audit-gratuit" className="py-3 px-6 text-xs whitespace-nowrap">
              Réserver mon audit gratuit
            </ButtonPrimary>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const SectionArchitectureInteractive = SectionPositionnement;
