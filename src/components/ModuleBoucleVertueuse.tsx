"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonPrimary } from "./Buttons";

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

export function ModuleBoucleVertueuse() {
  const [activeFaceIndex, setActiveFaceIndex] = useState<number>(0);

  // Auto-rotation 3D de la Boucle Vertueuse
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFaceIndex((prev) => (prev + 1) % virtuousLoopFaces.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const activeFace = virtuousLoopFaces[activeFaceIndex];

  return (
    <div className="relative w-full rounded-3xl bg-[#121212]/90 backdrop-blur-xl border border-[#C79A3B]/40 p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden space-y-8">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C79A3B_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Header du module de la boucle */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="text-center sm:text-left">
          <h4 className="font-heading font-extrabold text-xl sm:text-3xl text-white">
            La Boucle Vertueuse du système
          </h4>
        </div>

        {/* Indicateur de l'étape active */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-ping" />
          <span className="text-xs font-semibold text-[#C79A3B]">
            Étape {activeFace.stepNumber} / 05 : {activeFace.title}
          </span>
        </div>
      </div>

      {/* Grid 2 colonnes : Anneau circulaire interactif à gauche + Carte 3D Tournante à droite */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visualisation de l'Anneau Circulaire des 5 Étapes avec "CARPATH OS" au centre */}
        <div className="lg:col-span-5 relative aspect-square max-w-[300px] mx-auto flex items-center justify-center">
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

        {/* CUBE 3D TOURNANT QUI AFFICHE CHACUNE DES FACES */}
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

      {/* Pied de carte avec rappel de la promesse */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs text-gray-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-ping" />
          <span>Chaque étape alimente la suivante pour créer un système de croissance maîtrisé.</span>
        </div>
        <ButtonPrimary href="/audit-gratuit" className="py-3 px-6 text-xs whitespace-nowrap">
          Réserver mon audit gratuit
        </ButtonPrimary>
      </div>
    </div>
  );
}
