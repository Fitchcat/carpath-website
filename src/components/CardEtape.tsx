"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconMethodeEcouter,
  IconMethodeConcevoir,
  IconMethodePiloter,
  IconMethodeAmeliorer,
} from "./icons";
import { Heading3, Heading4, BodyBase } from "./Typography";

export type MethodeEtapeId = "ecouter" | "concevoir" | "piloter" | "ameliorer";

interface CardEtapeProps {
  id: MethodeEtapeId;
  stepNumber: string;
  stepName: string;
  title: string;
  description: string;
  experience?: string;
  isAuditStep?: boolean;
  detailed?: boolean;
}

export function CardEtape({
  id,
  stepNumber,
  stepName,
  title,
  description,
  experience,
  isAuditStep = false,
  detailed = false,
}: CardEtapeProps) {
  const getIcon = () => {
    const iconSize = detailed ? 36 : 28;
    const iconClass = "text-[#C79A3B]";
    switch (id) {
      case "ecouter":
        return <IconMethodeEcouter size={iconSize} className={iconClass} />;
      case "concevoir":
        return <IconMethodeConcevoir size={iconSize} className={iconClass} />;
      case "piloter":
        return <IconMethodePiloter size={iconSize} className={iconClass} />;
      case "ameliorer":
        return <IconMethodeAmeliorer size={iconSize} className={iconClass} />;
      default:
        return <IconMethodeEcouter size={iconSize} className={iconClass} />;
    }
  };

  if (detailed) {
    return (
      <motion.div
        whileHover={{ x: 6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative h-full flex flex-col justify-between bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C79A3B]/60 p-6 md:p-8 rounded-2xl border-l-4 border-l-[#C79A3B] space-y-4 shadow-xl hover:shadow-[0_15px_35px_-10px_rgba(199,154,59,0.2)] transition-all duration-300"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-heading font-extrabold text-3xl text-[#C79A3B]">
              {stepNumber}
            </span>
            <div>{getIcon()}</div>
            <span className="font-heading font-semibold text-xl md:text-2xl text-[var(--text-primary)]">
              Étape {stepNumber} — {stepName}
            </span>
          </div>

          <Heading3>{title}</Heading3>
          <BodyBase>{description}</BodyBase>
        </div>

        {experience && (
          <p className="font-body text-sm italic text-[var(--text-secondary)] bg-[var(--bg-base)] p-4 rounded-xl border border-[var(--border-subtle)]">
            <span className="font-semibold not-italic text-[var(--text-primary)]">
              Ce que vous vivez à cette étape :{" "}
            </span>
            {experience}
          </p>
        )}

        {isAuditStep && (
          <div className="mt-3 bg-[#C79A3B]/10 border border-[#C79A3B]/40 rounded-xl p-4 text-sm text-[var(--text-primary)] font-medium flex items-center gap-3">
            <span className="text-xl">💡</span>
            <span>C&apos;est cette étape que vous vivez lors de votre audit gratuit.</span>
          </div>
        )}
      </motion.div>
    );
  }

  // Home compact version
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative h-full flex flex-col justify-between bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C79A3B]/60 p-6 rounded-2xl border-l-4 border-l-[#C79A3B] space-y-3 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(199,154,59,0.2)] transition-all duration-300"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-heading font-extrabold text-2xl text-[#C79A3B]">
            {stepNumber}
          </span>
          <div>{getIcon()}</div>
          <Heading4 className="text-lg">{stepName}</Heading4>
        </div>
        <BodyBase className="text-sm">{description}</BodyBase>
      </div>
    </motion.div>
  );
}
