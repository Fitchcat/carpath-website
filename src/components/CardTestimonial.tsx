import React from "react";
import { BodyLarge, Label } from "./Typography";

interface CardTestimonialProps {
  quote: string;
  author: string;
  roleOrSector: string;
  revenue?: string;
}

export function CardTestimonial({
  quote,
  author,
  roleOrSector,
  revenue,
}: CardTestimonialProps) {
  return (
    <div className="bg-[var(--bg-surface)] rounded-lg p-6 md:p-8 space-y-4 shadow-md">
      <span className="text-3xl text-[#C79A3B] font-heading font-bold block">
        “
      </span>
      <BodyLarge className="italic text-[var(--text-primary)]">
        {quote}
      </BodyLarge>
      <div className="pt-2 border-t border-[var(--border-subtle)] flex flex-col">
        <span className="font-heading font-semibold text-sm text-[var(--text-primary)]">
          {author}
        </span>
        <Label className="text-xs">
          {roleOrSector} {revenue && `· CA ${revenue}`}
        </Label>
      </div>
    </div>
  );
}

// Alternative results list component if testimonials are not available
export function CardTestimonialAlternative() {
  const points = [
    "Ils passent de décisions fondées sur l'instinct à des décisions fondées sur des indicateurs.",
    "Ils savent enfin quelles actions marketing produisent des résultats, et lesquelles arrêter.",
    "Ils ont un partenaire qui connaît leur entreprise dans la durée, pas un prestataire qui repart après la mission.",
  ];

  return (
    <div className="bg-[var(--bg-surface)] rounded-lg p-6 md:p-8 space-y-4 shadow-md">
      <h3 className="font-heading font-semibold text-lg text-[#C79A3B] mb-2">
        Ce que vivent les dirigeants qui travaillent avec CARPATH
      </h3>
      <ul className="space-y-3">
        {points.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-3 text-[var(--text-secondary)] text-base">
            <span className="text-[#C79A3B] font-bold text-lg leading-none mt-1">✓</span>
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
