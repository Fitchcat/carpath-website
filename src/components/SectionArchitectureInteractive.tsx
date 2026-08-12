"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heading2, BodyLarge } from "./Typography";
import { ButtonPrimary } from "./Buttons";

export function SectionPositionnement() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[var(--bg-surface)] relative overflow-hidden border-y border-white/10">
      {/* Glow ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C79A3B]/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Grille Positionnement Texte Copywriter & Aperçu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Colonne texte — Copywriting Copywriter 100% original */}
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

          {/* Colonne droite avec badges du système */}
          <motion.div
            className="lg:col-span-6 space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                Un système de croissance interconnecté
              </h3>
              <p className="text-sm text-gray-300 font-normal leading-relaxed">
                Les modules du CARPATH Operating System (Acquisition, Conversion, Fidélisation, Pilotage) sont reliés dans un flux continu pour transformer chaque opportunité en résultat mesurable.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C79A3B]" />
                  <span className="text-xs font-semibold text-white">1. Acquisition</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C79A3B]" />
                  <span className="text-xs font-semibold text-white">2. Conversion</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C79A3B]" />
                  <span className="text-xs font-semibold text-white">3. Fidélisation</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C79A3B]" />
                  <span className="text-xs font-semibold text-white">4. Pilotage</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grand Visuel Panoramique de l'Architecture Interconnectée avec Flux Animé au Scroll */}
        <motion.div
          className="relative w-full aspect-[21/9] min-h-[340px] sm:min-h-[460px] rounded-2xl overflow-hidden border border-[#C79A3B]/40 shadow-2xl shadow-black/90 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/architecture-wide.png"
            alt="Architecture de système de croissance CARPATH"
            fill
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-103 brightness-95"
            priority
          />
          {/* Fondu de vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/40 opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/70 via-transparent to-[#0D0D0D]/70 opacity-60" />

          {/* Ligne SVG de flux lumineux animé passant de module en module */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <path
              d="M 120,210 Q 260,150 420,230 T 720,180 T 880,250"
              fill="none"
              stroke="#C79A3B"
              strokeWidth="2"
              strokeDasharray="6 6"
              opacity="0.35"
            />
            {/* Impulsion lumineuse animée */}
            <motion.path
              d="M 120,210 Q 260,150 420,230 T 720,180 T 880,250"
              fill="none"
              stroke="#C79A3B"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{
                pathLength: [0.15, 0.35, 0.15],
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

          {/* Cartouche supérieur */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#0D0D0D]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C79A3B]/50 flex items-center gap-3 shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C79A3B] animate-ping" />
            <span className="text-xs font-semibold tracking-wider text-[#C79A3B] uppercase">
              FLUX INTERCONNECTÉ DU SYSTÈME
            </span>
          </div>

          {/* Cartouche d'explication Copywriter */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#0D0D0D]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl">
            <div>
              <p className="font-heading font-semibold text-xs text-[#C79A3B] tracking-wider uppercase">
                ARCHITECTURE SUR-MESURE
              </p>
              <p className="text-xs sm:text-sm text-white font-medium mt-0.5">
                Un système structuré, installé directement dans votre entreprise.
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 whitespace-nowrap">
              Méthode CARPATH
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const SectionArchitectureInteractive = SectionPositionnement;
