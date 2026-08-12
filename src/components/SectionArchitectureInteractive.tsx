"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heading2, BodyLarge } from "./Typography";
import { ButtonPrimary } from "./Buttons";

export function SectionPositionnement() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="w-full py-20 lg:py-32 bg-[#0D0D0D] relative overflow-hidden border-y border-white/10"
    >
      {/* Prism refraction background aura (Refero / Vivid+Co Style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-radial from-[#C79A3B]/15 via-transparent to-transparent blur-[170px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#C79A3B]/10 blur-[140px] rounded-full pointer-events-none z-0" />

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

        {/* Visuel d'Architecture Sur-Mesure Initial (Frame Verre Obscur Refero) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-[1040px] mx-auto rounded-3xl bg-[#121212]/90 backdrop-blur-xl border border-[#C79A3B]/40 p-3 sm:p-4 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden group"
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/architecture-wide.png"
              alt="Visualisation de l'architecture de solutions techniques sur-mesure CARPATH"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-102"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 bg-[#0D0D0D]/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C79A3B]/50 text-xs text-white font-semibold tracking-wider shadow-lg">
              <span className="text-[#C79A3B]">CARPATH OS</span> — ARCHITECTURE SUR-MESURE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const SectionArchitectureInteractive = SectionPositionnement;
