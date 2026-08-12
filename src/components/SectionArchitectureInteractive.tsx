"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Heading2, BodyLarge } from "./Typography";
import { ButtonPrimary } from "./Buttons";

// 5 Piliers du CARPATH OS
const osPillars = [
  {
    number: "01",
    title: "STRATÉGIE",
    subtitle: "AUDIT & PLAN D'ACTION",
    items: [
      "Audit complet",
      "Analyse marché",
      "Objectifs & priorités",
      "Plan d'action 90 jours",
      "KPIs clés",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.5" fill="#C79A3B" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "ACQUISITION",
    subtitle: "ATTIRER DU TRAFIC",
    items: [
      "Google Business Profile",
      "Réseaux sociaux",
      "Contenus réguliers",
      "Publicités (Ads)",
      "Collecte d'avis",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "CONVERSION",
    subtitle: "TRANSFORMER LES PROSPECTS",
    items: [
      "Site optimisé",
      "Tunnel de conversion",
      "Formulaires & CTA",
      "Scripts commerciaux",
      "Suivi des conversions",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "FIDÉLISATION",
    subtitle: "FAIRE REVENIR VOS CLIENTS",
    items: [
      "CRM & base clients",
      "Emails automatisés",
      "Relances & rappels",
      "Offres promotionnelles",
      "Gestion des avis",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "PILOTAGE",
    subtitle: "MESURER & OPTIMISER",
    items: [
      "Tableau de bord",
      "Suivi des KPI",
      "Analyse des résultats",
      "Recommandations",
      "Optimisations continues",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
];

// 5 Faces de la Boucle Vertueuse circulaire 3D
const virtuousLoopFaces = [
  {
    id: "attirer",
    stepNumber: "01",
    title: "ATTIRER",
    subtitle: "Plus de visibilité, plus de prospects",
    description: "Attraction continue de prospects qualifiés à travers vos canaux d'acquisition.",
    icon: (
      <svg className="w-8 h-8 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: "convertir",
    stepNumber: "02",
    title: "CONVERTIR",
    subtitle: "Plus de contacts, plus de clients",
    description: "Transformation des prospects en rendez-vous qualifiés et en clients engagés.",
    icon: (
      <svg className="w-8 h-8 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    id: "fideliser",
    stepNumber: "03",
    title: "FIDÉLISER",
    subtitle: "Plus de clients fidèles, plus de valeur",
    description: "Accompagnement et réengagement continu de vos clients pour augmenter leur valeur dans le temps.",
    icon: (
      <svg className="w-8 h-8 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: "mesurer",
    stepNumber: "04",
    title: "MESURER",
    subtitle: "Plus de données, plus de performance",
    description: "Analyse précise des indicateurs clés pour comprendre ce qui fonctionne réellement.",
    icon: (
      <svg className="w-8 h-8 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "optimiser",
    stepNumber: "05",
    title: "OPTIMISER",
    subtitle: "Plus d'efficacité, plus de croissance",
    description: "Ajustements ciblés pour relancer la boucle et réinvestir sur les leviers les plus rentables.",
    icon: (
      <svg className="w-8 h-8 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export function SectionPositionnement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFaceIndex, setActiveFaceIndex] = useState<number>(0);

  // Auto-rotation 3D de la Boucle Vertueuse
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFaceIndex((prev) => (prev + 1) % virtuousLoopFaces.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Animation au scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const conduitProgress = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);
  const prismGlow = useTransform(scrollYProgress, [0.35, 0.75], [0.3, 1]);

  const activeFace = virtuousLoopFaces[activeFaceIndex];

  return (
    <section
      ref={containerRef}
      className="w-full py-20 lg:py-32 bg-[#0D0D0D] relative overflow-hidden border-y border-white/10"
    >
      {/* Prism refraction background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-radial from-[#C79A3B]/15 via-transparent to-transparent blur-[170px] rounded-full pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Texte Copywriter — 100% Strict & Officiel */}
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-4 py-2 rounded-full border border-[#C79A3B]/40 mb-6">
              POSITIONNEMENT &amp; COPILOTAGE
            </span>
            <Heading2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.2] pt-2 text-white">
              CARPATH n&apos;est pas une agence.<br />
              Ce n&apos;est pas un cabinet.<br />
              Ce n&apos;est pas un outil.
            </Heading2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <BodyLarge className="text-lg sm:text-xl leading-relaxed max-w-[68ch] mx-auto text-gray-300">
              CARPATH est votre copilote de croissance. Nous installons et pilotons un système de croissance sur-mesure, directement dans votre entreprise. Vous restez aux commandes — nous mettons la méthode, les indicateurs et le pilotage. Le résultat : des décisions fondées sur des données, pas sur des intuitions.
            </BodyLarge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-2"
          >
            <ButtonPrimary href="/audit-gratuit" className="py-4 px-8 text-base">
              Réserver mon audit gratuit
            </ButtonPrimary>
          </motion.div>
        </div>

        {/* Schéma CARPATH OS & Module 3D de la Boucle Vertueuse */}
        <div className="relative w-full rounded-3xl bg-[#121212]/90 backdrop-blur-xl border border-[#C79A3B]/30 p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden space-y-12">
          {/* Subtle background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#C79A3B_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

          {/* En-tête CARPATH OS */}
          <div className="relative z-10 text-center space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs font-bold text-[#C79A3B] tracking-widest uppercase">
              CARPATH OS — LE SYSTÈME DE CROISSANCE COMPLET
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
              Un système, 5 étapes, une boucle vertueuse.
            </h3>
          </div>

          {/* Schéma horizontal des 5 Piliers du système */}
          <div className="relative z-10">
            {/* Conduit SVG fluide */}
            <svg
              className="absolute top-1/2 left-0 w-full h-16 -translate-y-1/2 pointer-events-none hidden lg:block"
              viewBox="0 0 1000 60"
              preserveAspectRatio="none"
            >
              <line x1="70" y1="30" x2="930" y2="30" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
              <motion.line
                x1="70"
                y1="30"
                x2="930"
                y2="30"
                stroke="#C79A3B"
                strokeWidth="3.5"
                strokeDasharray="10 10"
                style={{ opacity: conduitProgress }}
              />
              <motion.circle
                r="7"
                fill="#C79A3B"
                animate={{ cx: [70, 930] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                style={{ filter: "drop-shadow(0px 0px 10px #C79A3B)" }}
              />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-stretch relative z-20">
              {/* ENTRÉE */}
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col justify-center text-center space-y-2 group hover:border-[#C79A3B]/40 transition-colors">
                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                  ENTRÉE ➔
                </span>
                <p className="text-xs text-white font-semibold">Votre activité</p>
                <p className="text-[11px] text-gray-400">Vos objectifs</p>
              </div>

              {/* 5 PILIERS */}
              {osPillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-[#181818]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4 transition-all duration-500 hover:border-[#C79A3B] hover:shadow-[0_15px_40px_rgba(199,154,59,0.25)] hover:-translate-y-1 overflow-hidden"
                >
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-extrabold text-2xl text-[#C79A3B]">
                        {pillar.number}
                      </span>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#C79A3B]/50 transition-colors">
                        {pillar.icon}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider group-hover:text-[#C79A3B] transition-colors">
                        {pillar.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-gray-400 block mt-0.5">
                        {pillar.subtitle}
                      </span>
                    </div>

                    <ul className="space-y-1.5 border-t border-white/10 pt-3 text-[11px] text-gray-300 font-normal">
                      {pillar.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-1.5">
                          <span className="text-[#C79A3B] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {/* SORTIE */}
              <div className="bg-[#C79A3B]/10 backdrop-blur-md border border-[#C79A3B]/40 rounded-2xl p-4 flex flex-col justify-center text-center space-y-2 group hover:border-[#C79A3B] transition-colors shadow-lg">
                <span className="text-[11px] font-bold text-[#C79A3B] tracking-wider uppercase">
                  SORTIE ➔
                </span>
                <p className="text-xs text-white font-bold">Croissance Durable</p>
                <div className="pt-1 flex justify-center">
                  <svg className="w-6 h-6 text-[#C79A3B] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* NOYAU 3D CIRCULAIRE DE LA BOUCLE VERTUEUSE (Cube / Prisme 3D Tournant) */}
          <div className="relative z-10 pt-6">
            <div className="bg-[#181818]/90 backdrop-blur-xl border border-[#C79A3B]/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
              {/* Entête du module de la boucle */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="text-center sm:text-left">
                  <h4 className="font-heading font-extrabold text-xl sm:text-3xl text-white">
                    La Boucle Vertueuse du système
                  </h4>
                </div>

                {/* Indicateur de la phase active sur le cycle */}
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-ping" />
                  <span className="text-xs font-semibold text-[#C79A3B]">
                    Phase {activeFace.stepNumber} / 05 : {activeFace.title}
                  </span>
                </div>
              </div>

              {/* Grid 2 colonnes : Anneau circulaire interactif à gauche + Cube 3D Tournant à droite */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visualisation de l'Anneau Circulaire des 5 Étapes */}
                <div className="lg:col-span-5 relative aspect-square max-w-[320px] mx-auto flex items-center justify-center">
                  {/* SVG Anneau Circulaire Doré */}
                  <svg className="w-full h-full" viewBox="0 0 300 300">
                    <circle
                      cx="150"
                      cy="150"
                      r="120"
                      fill="none"
                      stroke="rgba(199,154,59,0.2)"
                      strokeWidth="2.5"
                      strokeDasharray="6 6"
                    />
                    {/* Anneau lumineux tournant */}
                    <motion.circle
                      cx="150"
                      cy="150"
                      r="120"
                      fill="none"
                      stroke="#C79A3B"
                      strokeWidth="3.5"
                      strokeDasharray="40 300"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "150px 150px" }}
                    />
                  </svg>

                  {/* Boutons des 5 étapes positionnés en cercle sur l'anneau */}
                  {virtuousLoopFaces.map((face, index) => {
                    const angle = (index * (360 / virtuousLoopFaces.length) - 90) * (Math.PI / 180);
                    const radius = 120;
                    const x = 150 + radius * Math.cos(angle) - 24;
                    const y = 150 + radius * Math.sin(angle) - 24;
                    const isActive = index === activeFaceIndex;

                    return (
                      <button
                        key={face.id}
                        onClick={() => setActiveFaceIndex(index)}
                        style={{ left: `${x}px`, top: `${y}px` }}
                        className={`absolute w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center text-xs font-bold shadow-lg ${
                          isActive
                            ? "bg-[#C79A3B] text-[#0D0D0D] border-[#C79A3B] scale-110 shadow-[0_0_20px_rgba(199,154,59,0.6)]"
                            : "bg-[#0D0D0D] text-gray-300 border-white/20 hover:border-[#C79A3B]"
                        }`}
                        title={face.title}
                      >
                        {face.stepNumber}
                      </button>
                    );
                  })}

                  {/* Centre du Cercle : CARPATH OS */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-4">
                    <span className="font-heading font-extrabold text-base sm:text-lg text-[#C79A3B] tracking-wider uppercase">
                      CARPATH OS
                    </span>
                  </div>
                </div>

                {/* PRISME / CUBE 3D TOURNANT QUI AFFICHE CHACUNE DES FACES */}
                <div className="lg:col-span-7 relative min-h-[260px] flex items-center justify-center [perspective:1000px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFace.id}
                      initial={{ rotateX: -70, opacity: 0, scale: 0.9 }}
                      animate={{ rotateX: 0, opacity: 1, scale: 1 }}
                      exit={{ rotateX: 70, opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full bg-[#0D0D0D] border-2 border-[#C79A3B] rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(199,154,59,0.3)] space-y-4 relative overflow-hidden"
                    >
                      {/* Lueur dorée arrière */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C79A3B]/20 rounded-full blur-2xl pointer-events-none" />

                      {/* Header de la face 3D */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-[#C79A3B]/20 border border-[#C79A3B]/50">
                            {activeFace.icon}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#C79A3B] tracking-widest uppercase">
                              ÉTAPE {activeFace.stepNumber} DU CYCLE
                            </span>
                            <h4 className="font-heading font-extrabold text-2xl text-white">
                              {activeFace.title}
                            </h4>
                          </div>
                        </div>
                      </div>

                      {/* Contenu principal de la face */}
                      <div className="space-y-2 pt-1">
                        <p className="font-heading font-bold text-base text-[#C79A3B]">
                          {activeFace.subtitle}
                        </p>
                        <p className="text-sm text-gray-300 leading-relaxed font-normal">
                          {activeFace.description}
                        </p>
                      </div>

                      {/* Navigation manuelle sous la face 3D */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                        <span>Passe à l&apos;étape suivante automatiquement ➔</span>
                        <div className="flex items-center gap-2">
                          {virtuousLoopFaces.map((f, i) => (
                            <span
                              key={f.id}
                              onClick={() => setActiveFaceIndex(i)}
                              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                                i === activeFaceIndex ? "w-6 bg-[#C79A3B]" : "w-2 bg-white/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Pied de carte avec lueur prismatique */}
          <motion.div
            style={{ opacity: prismGlow }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs text-gray-300"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-ping" />
              <span>Chaque étape alimente la suivante pour créer un système de croissance maîtrisé.</span>
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
