"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconOsStrategie,
  IconOsAcquisition,
  IconOsConversion,
  IconOsFidelisation,
  IconOsPilotage,
} from "./icons";
import { Heading3, Heading4, BodyBase } from "./Typography";

export type OsPilierId = "strategie" | "acquisition" | "conversion" | "fidelisation" | "pilotage";

interface CardPilierProps {
  id: OsPilierId;
  title: string;
  subtitle?: string;
  description: string;
  example?: string;
  detailed?: boolean;
  numberStr?: string;
}

export function CardPilier({
  id,
  title,
  subtitle,
  description,
  example,
  detailed = false,
  numberStr,
}: CardPilierProps) {
  const getIcon = () => {
    const iconSize = detailed ? 48 : 36;
    const iconClass = "text-[#C79A3B]";
    switch (id) {
      case "strategie":
        return <IconOsStrategie size={iconSize} className={iconClass} />;
      case "acquisition":
        return <IconOsAcquisition size={iconSize} className={iconClass} />;
      case "conversion":
        return <IconOsConversion size={iconSize} className={iconClass} />;
      case "fidelisation":
        return <IconOsFidelisation size={iconSize} className={iconClass} />;
      case "pilotage":
        return <IconOsPilotage size={iconSize} className={iconClass} />;
      default:
        return <IconOsStrategie size={iconSize} className={iconClass} />;
    }
  };

  if (detailed) {
    return (
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative h-full flex flex-col justify-between bg-[var(--bg-base)] border border-[var(--border-subtle)] hover:border-[#C79A3B]/60 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(199,154,59,0.2)] transition-all duration-300 overflow-hidden"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>{getIcon()}</div>
            {numberStr && (
              <span className="font-body text-xs font-bold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-3 py-1 rounded-full border border-[#C79A3B]/30">
                {numberStr}
              </span>
            )}
          </div>
          <Heading3>{title}</Heading3>
          {subtitle && <p className="font-heading font-semibold text-lg text-[#C79A3B]">{subtitle}</p>}
          <BodyBase>{description}</BodyBase>
        </div>

        {example && (
          <div className="mt-4 bg-[var(--bg-surface)] rounded-xl p-4 border-l-2 border-[#C79A3B] text-sm text-[var(--text-secondary)] italic">
            <span className="font-semibold text-[#C79A3B] not-italic block mb-1">Exemple :</span>
            {example}
          </div>
        )}
      </motion.div>
    );
  }

  // Home compact version
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative h-full flex flex-col justify-between bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#C79A3B]/60 rounded-2xl p-6 space-y-4 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(199,154,59,0.25)] transition-all duration-300 overflow-hidden"
    >
      <div className="space-y-3">
        <div>{getIcon()}</div>
        <Heading4>{title}</Heading4>
        <BodyBase className="text-sm">{description}</BodyBase>
      </div>
    </motion.div>
  );
}
