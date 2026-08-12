"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heading2, BodyLarge } from "./Typography";
import { ButtonPrimary } from "./Buttons";

interface PuzzleModule {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  details: string[];
  initialOffset: { x: number; y: number; rotate: number };
}

const puzzleModules: PuzzleModule[] = [
  {
    id: "gbp",
    number: "01",
    tag: "RÉPUTATION & LOCAL",
    title: "Google Business & Avis",
    subtitle: "Capture de la demande locale & notoriété",
    imageSrc: "/images/puzzle-gbp.png",
    details: [
      "Fiche Google Business Profile optimisée",
      "Collecte & gestion automatisée des avis",
      "Attraction de la demande locale qualifiée",
    ],
    initialOffset: { x: -180, y: -120, rotate: -15 },
  },
  {
    id: "website",
    number: "02",
    tag: "CONVERSION SITE",
    title: "Site Internet & Landing Pages",
    subtitle: "Hub de conversion & Lead Magnets",
    imageSrc: "/images/puzzle-website.png",
    details: [
      "Site web rapide, responsive & SEO-first",
      "Landing pages dédiées par offre",
      "Lead magnets & formulaires qualifiants",
    ],
    initialOffset: { x: 180, y: -120, rotate: 15 },
  },
  {
    id: "social",
    number: "03",
    tag: "ACQUISITION ADS",
    title: "Réseaux Sociaux & Ads",
    subtitle: "Génération de trafic ciblé",
    imageSrc: "/images/puzzle-social.png",
    details: [
      "Campagnes ciblées Meta & Google Ads",
      "Posts & contenus à fort engagement",
      "Acquisition continue de prospects chauds",
    ],
    initialOffset: { x: -220, y: 40, rotate: -10 },
  },
  {
    id: "crm",
    number: "04",
    tag: "FIDÉLISATION & CRM",
    title: "CRM & Automations",
    subtitle: "Séquences Email/SMS & Airtable",
    imageSrc: "/images/puzzle-crm.png",
    details: [
      "Séquences e-mails & SMS automatisées",
      "Scénarios Make.com & CRM Airtable",
      "Nurturing & relances récurrentes",
    ],
    initialOffset: { x: 220, y: 40, rotate: 10 },
  },
  {
    id: "dashboard",
    number: "05",
    tag: "PILOTAGE OS",
    title: "Tableau de Bord & Pilotage",
    subtitle: "Pilotage par les données en temps réel",
    imageSrc: "/images/puzzle-dashboard.png",
    details: [
      "Tableau de bord unifié CARPATH OS",
      "Suivi du coût d'acquisition & taux de conversion",
      "Arbitrage & optimisation continue",
    ],
    initialOffset: { x: 0, y: 180, rotate: 12 },
  },
];

export function SectionPositionnement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<string>("gbp");

  // Track scroll progress inside this section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth progress calculation: 0 = disassembled, 1 = snapped together
  const assemblyProgress = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const linesOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const glowIntensity = useTransform(scrollYProgress, [0.5, 0.75], [0.3, 1]);

  const activeModule = puzzleModules.find((m) => m.id === selectedModuleId) || puzzleModules[0];

  return (
    <section
      ref={containerRef}
      className="w-full py-20 lg:py-32 bg-[var(--bg-surface)] relative overflow-hidden border-y border-white/10"
    >
      {/* Glow ambient */}
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
                Un système de 5 pièces 3D interconnectées
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Faîtes défiler la page pour observer les 5 pièces de verre isométriques s&apos;assembler au scroll pour former le puzzle complet du CARPATH OS. Remontez pour les voir se séparer.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#C79A3B] font-semibold">
                <span className="animate-bounce">↓</span>
                <span>Scrollez vers le bas pour assembler / vers le haut pour séparer</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic 3D Puzzle Assembly Canvas */}
        <div className="relative w-full rounded-3xl bg-[#0D0D0D] border border-[#C79A3B]/40 p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[720px] flex flex-col justify-between">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#C79A3B_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

          {/* Canvas Header */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-semibold text-[#C79A3B] uppercase tracking-widest">
                ASSEMBLAGE 3D INTERACTIF AU SCROLL
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-1">
                Le puzzle du CARPATH OS s&apos;interconnecte au scroll
              </h3>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs text-gray-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-pulse" />
              <span>5 pièces 3D en verre fumé &amp; contour or</span>
            </div>
          </div>

          {/* SVG Interconnection Laser Conduit */}
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
            viewBox="0 0 1000 650"
            preserveAspectRatio="none"
            style={{ opacity: linesOpacity }}
          >
            <path
              d="M 250,220 L 500,220 L 750,220 M 250,420 L 500,420 L 750,420 M 500,220 L 500,560"
              stroke="#C79A3B"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
              opacity="0.5"
            />
            <motion.circle
              r="7"
              fill="#C79A3B"
              animate={{
                cx: [250, 500, 750, 500, 500],
                cy: [220, 220, 420, 420, 560],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ filter: "drop-shadow(0px 0px 10px #C79A3B)" }}
            />
          </motion.svg>

          {/* 5 Real 3D Glass Puzzle Pieces Grid */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-8 my-auto items-center">
            {puzzleModules.map((module, index) => {
              const isSelected = module.id === selectedModuleId;

              // Transform scroll progress to 3D offsets & rotations
              const xVal = useTransform(assemblyProgress, [0, 1], [module.initialOffset.x, 0]);
              const yVal = useTransform(assemblyProgress, [0, 1], [module.initialOffset.y, 0]);
              const rotateVal = useTransform(assemblyProgress, [0, 1], [module.initialOffset.rotate, 0]);
              const scaleVal = useTransform(assemblyProgress, [0, 1], [0.82, 1]);
              const opacityVal = useTransform(assemblyProgress, [0, 1], [0.3, 1]);

              const isCenterCard = index === 4;

              return (
                <motion.div
                  key={module.id}
                  onClick={() => setSelectedModuleId(module.id)}
                  style={{
                    x: xVal,
                    y: yVal,
                    rotate: rotateVal,
                    scale: scaleVal,
                    opacity: opacityVal,
                  }}
                  className={`cursor-pointer group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl transition-all duration-300 ${
                    isCenterCard ? "lg:col-span-3 lg:max-w-[480px] lg:mx-auto w-full" : ""
                  }`}
                >
                  {/* Real 3D Glass Puzzle Piece Rendered Asset Container */}
                  <div
                    className={`relative w-full aspect-square max-w-[260px] sm:max-w-[280px] rounded-2xl overflow-hidden transition-all duration-300 ${
                      isSelected
                        ? "ring-2 ring-[#C79A3B] shadow-[0_0_40px_rgba(199,154,59,0.45)] scale-103"
                        : "group-hover:ring-1 group-hover:ring-[#C79A3B]/60 group-hover:shadow-[0_0_25px_rgba(199,154,59,0.2)]"
                    }`}
                  >
                    <Image
                      src={module.imageSrc}
                      alt={module.title}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      priority
                    />

                    {/* Number Badge */}
                    <div className="absolute top-3 left-3 bg-[#0D0D0D]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#C79A3B]/50 font-heading font-extrabold text-xs text-[#C79A3B]">
                      {module.number}
                    </div>

                    {/* Category Tag */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#0D0D0D]/90 backdrop-blur-md p-2 rounded-xl border border-white/20 text-center">
                      <span className="text-[11px] font-bold text-[#C79A3B] tracking-wider uppercase block">
                        {module.tag}
                      </span>
                      <span className="text-xs text-white font-medium block truncate mt-0.5">
                        {module.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Piece Detail Banner */}
          <motion.div
            style={{ opacity: glowIntensity }}
            className="relative z-20 bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-pulse" />
                <span className="text-xs font-semibold text-[#C79A3B] uppercase tracking-wider">
                  DÉTAILS DU MODULE SÉLECTIONNÉ — {activeModule.tag}
                </span>
              </div>
              <h4 className="font-heading font-bold text-lg text-white">
                {activeModule.title} ({activeModule.subtitle})
              </h4>
              <div className="flex flex-wrap gap-3 pt-2">
                {activeModule.details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5"
                  >
                    <span className="text-[#C79A3B] font-bold">✓</span>
                    {detail}
                  </span>
                ))}
              </div>
            </div>

            <ButtonPrimary href="/audit-gratuit" className="py-3 px-6 text-xs whitespace-nowrap self-stretch md:self-center">
              Réserver mon audit gratuit
            </ButtonPrimary>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const SectionArchitectureInteractive = SectionPositionnement;
