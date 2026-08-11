"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";

interface SectionHeroProps {
  h1: React.ReactNode;
  subtitle: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export function SectionHero({
  h1,
  subtitle,
  primaryCtaText = "Réserver mon audit gratuit",
  secondaryCtaText = "Découvrir la méthode",
}: SectionHeroProps) {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-[96vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden bg-[#0D0D0D]">
      {/* FULL BLEED BACKGROUND IMAGE (B&W + Selective Bronze Path) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mountain-bw.png"
          alt="Visualisation du cap et de la trajectoire CARPATH"
          fill
          className="object-cover object-center brightness-90 contrast-110"
          priority
        />
        {/* Dark Vignette and Gradient Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/75 to-[#0D0D0D]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D0D0D]/40 to-[#0D0D0D]" />
      </div>

      {/* Ambient Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C79A3B]/15 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Content Container */}
      <div className="max-w-site mx-auto z-10 w-full text-center space-y-8 lg:space-y-10">
        {/* Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D0D0D]/80 backdrop-blur-md border border-[#C79A3B]/50 text-xs font-semibold text-[#C79A3B] shadow-[0_0_20px_rgba(199,154,59,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-pulse" />
          <span className="tracking-widest uppercase">PARTENAIRE MARKETING & COMMERCIAL TPE / PME</span>
        </motion.div>

        {/* H1 Monumental Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white max-w-[22ch] mx-auto drop-shadow-2xl"
        >
          {h1}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-lg sm:text-xl lg:text-2xl text-gray-200 font-normal max-w-[42ch] mx-auto leading-relaxed drop-shadow-md"
        >
          {subtitle}
        </motion.p>

        {/* CTA Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
        >
          <ButtonPrimary
            href="/audit-gratuit"
            className="w-full sm:w-auto text-lg py-4 px-9 shadow-[0_0_35px_rgba(199,154,59,0.35)] hover:shadow-[0_0_50px_rgba(199,154,59,0.5)] transition-shadow"
          >
            {primaryCtaText}
          </ButtonPrimary>
          <ButtonSecondary
            href="/methode"
            className="w-full sm:w-auto text-lg py-4 px-8 backdrop-blur-md bg-white/10 hover:bg-white/20 !text-white hover:!text-white border-white/30 hover:border-white"
          >
            {secondaryCtaText}
          </ButtonSecondary>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-white font-medium"
        >
          <div className="flex items-center gap-2 bg-[#0D0D0D]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-md">
            <svg className="w-4 h-4 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Système 100% sur-mesure</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0D0D0D]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-md">
            <svg className="w-4 h-4 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Sans engagement</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0D0D0D]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-md">
            <svg className="w-4 h-4 text-[#C79A3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Audit oral + rapport écrit</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
