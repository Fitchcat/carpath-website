"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heading2, BodyLarge } from "./Typography";
import { ButtonPrimary } from "./Buttons";

// 5 Piliers officiels du CARPATH OS issus de l'infographie officielle
const osPillars = [
  {
    number: "01",
    title: "STRATÉGIE",
    subtitle: "AUDIT & PLAN D'ACTION",
    badge: "1. STRATÉGIE",
    items: [
      "Audit complet",
      "Analyse marché",
      "Objectifs & priorités",
      "Plan d'action 90 jours",
      "KPIs clés",
    ],
    icon: (
      <svg className="w-7 h-7 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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
    badge: "2. ACQUISITION",
    items: [
      "Google Business Profile",
      "Réseaux sociaux",
      "Contenus réguliers",
      "Publicités (Ads)",
      "Collecte d'avis",
    ],
    icon: (
      <svg className="w-7 h-7 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "CONVERSION",
    subtitle: "TRANSFORMER LES PROSPECTS",
    badge: "3. CONVERSION",
    items: [
      "Site optimisé",
      "Tunnel de conversion",
      "Formulaires & CTA",
      "Scripts commerciaux",
      "Suivi des conversions",
    ],
    icon: (
      <svg className="w-7 h-7 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "FIDÉLISATION",
    subtitle: "FAIRE REVENIR VOS CLIENTS",
    badge: "4. FIDÉLISATION",
    items: [
      "CRM & base clients",
      "Emails automatisés",
      "Relances & rappels",
      "Offres promotionnelles",
      "Gestion des avis",
    ],
    icon: (
      <svg className="w-7 h-7 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "PILOTAGE",
    subtitle: "MESURER & OPTIMISER",
    badge: "5. PILOTAGE",
    items: [
      "Tableau de bord",
      "Suivi des KPI",
      "Analyse des résultats",
      "Recommandations",
      "Optimisations continues",
    ],
    icon: (
      <svg className="w-7 h-7 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
];

// Boucle vertueuse
const virtuousLoopSteps = [
  { step: "ATTIRER", label: "Plus de visibilité, plus de prospects" },
  { step: "CONVERTIR", label: "Plus de contacts, plus de clients" },
  { step: "FIDÉLISER", label: "Plus de clients fidèles, plus de valeur" },
  { step: "MESURER", label: "Plus de données, plus de performance" },
  { step: "OPTIMISER", label: "Plus d'efficacité, plus de croissance" },
];

export function SectionPositionnement() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation au scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const conduitProgress = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0.2, 1]);
  const loopOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0.3, 1]);

  return (
    <section
      ref={containerRef}
      className="w-full py-20 lg:py-32 bg-[var(--bg-surface)] relative overflow-hidden border-y border-white/10"
    >
      {/* Halo lumineux bronze */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#C79A3B]/10 blur-[180px] rounded-full pointer-events-none z-0" />

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
            <Heading2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.2] pt-2">
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
            <BodyLarge className="text-lg sm:text-xl leading-relaxed max-w-[68ch] mx-auto">
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

        {/* Schéma Interactif CARPATH OS — Animation du Cycle Vertueux au Scroll */}
        <div className="relative w-full rounded-3xl bg-[#0D0D0D] border border-[#C79A3B]/40 p-6 sm:p-10 shadow-2xl overflow-hidden space-y-10">
          {/* Grille de fond subtile */}
          <div className="absolute inset-0 bg-[radial-gradient(#C79A3B_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

          {/* En-tête du schéma CARPATH OS */}
          <div className="relative z-10 text-center space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs font-bold text-[#C79A3B] tracking-widest uppercase">
              CARPATH OS — LE SYSTÈME DE CROISSANCE COMPLET
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Un système, 5 étapes, une boucle vertueuse.
            </h3>
          </div>

          {/* Pipeline d'interconnexion principal : ENTRÉE ➔ 01 ➔ 02 ➔ 03 ➔ 04 ➔ 05 ➔ SORTIE */}
          <div className="relative z-10">
            {/* Ligne SVG de tuyau d'interconnexion avec impulsion au scroll */}
            <svg
              className="absolute top-1/2 left-0 w-full h-12 -translate-y-1/2 pointer-events-none hidden lg:block"
              viewBox="0 0 1000 60"
              preserveAspectRatio="none"
            >
              {/* Tuyau de base */}
              <line x1="80" y1="30" x2="920" y2="30" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
              {/* Conduit d'énergie dorée activé au scroll */}
              <motion.line
                x1="80"
                y1="30"
                x2="920"
                y2="30"
                stroke="#C79A3B"
                strokeWidth="4"
                strokeDasharray="12 12"
                style={{ opacity: conduitProgress }}
              />
              {/* Particule fluide qui voyage */}
              <motion.circle
                r="6"
                fill="#C79A3B"
                animate={{ cx: [80, 920] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ filter: "drop-shadow(0px 0px 8px #C79A3B)" }}
              />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-stretch relative z-20">
              {/* ENTRÉE */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-center text-center space-y-2">
                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                  ENTRÉE ➔
                </span>
                <p className="text-xs text-white font-semibold">Votre activité</p>
                <p className="text-[11px] text-gray-400">Vos objectifs</p>
              </div>

              {/* LES 5 PILIERS DU SYSTÈME */}
              {osPillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group bg-[var(--bg-surface)] border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-[#C79A3B] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(199,154,59,0.2)]"
                >
                  <div className="space-y-3">
                    {/* Numéro & Icône */}
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-extrabold text-xl text-[#C79A3B]">
                        {pillar.number}
                      </span>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#C79A3B]/50 transition-colors">
                        {pillar.icon}
                      </div>
                    </div>

                    {/* Titre & Sous-titre */}
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider group-hover:text-[#C79A3B] transition-colors">
                        {pillar.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-gray-400 block mt-0.5">
                        {pillar.subtitle}
                      </span>
                    </div>

                    {/* Liste des éléments du pilier */}
                    <ul className="space-y-1.5 border-t border-white/10 pt-3 text-[11px] text-gray-300">
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
              <div className="bg-[#C79A3B]/10 border border-[#C79A3B]/40 rounded-2xl p-4 flex flex-col justify-center text-center space-y-2">
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

          {/* Bandeau de la BOUCLE VERTUEUSE (Attirer ➔ Convertir ➔ Fidéliser ➔ Mesurer ➔ Optimiser) */}
          <motion.div
            style={{ opacity: loopOpacity }}
            className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl"
          >
            <div className="text-center mb-4">
              <span className="text-xs font-semibold text-[#C79A3B] uppercase tracking-widest">
                LA BOUCLE VERTUEUSE DU SYSTÈME
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
              {virtuousLoopSteps.map((stepItem, idx) => (
                <div
                  key={stepItem.step}
                  className="bg-[#0D0D0D] border border-white/10 rounded-xl p-3 text-center space-y-1 relative"
                >
                  <span className="text-xs font-bold text-[#C79A3B] block uppercase tracking-wider">
                    {stepItem.step}
                  </span>
                  <p className="text-[11px] text-gray-300 font-normal">
                    {stepItem.label}
                  </p>
                  {idx < virtuousLoopSteps.length - 1 && (
                    <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#C79A3B] z-10 font-bold text-xs">
                      ➔
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pied de carte avec rappel de la promesse */}
          <motion.div
            style={{ opacity: glowOpacity }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs text-gray-300"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C79A3B]" />
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
