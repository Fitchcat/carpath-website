import React from "react";
import { Heading2, BodyBase, Micro } from "./Typography";
import { ButtonPrimary } from "./Buttons";

interface SectionCTAProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  mentionText?: string;
  bg?: "base" | "surface";
  className?: string;
}

export function SectionCTA({
  title,
  subtitle,
  buttonText = "Réserver mon audit gratuit",
  mentionText = "Audit gratuit · environ 30 minutes · sans engagement",
  bg = "surface",
  className = "",
}: SectionCTAProps) {
  const bgClass = bg === "surface" ? "bg-[var(--bg-surface)]" : "bg-[var(--bg-base)]";

  return (
    <section className={`w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center ${bgClass} ${className}`}>
      <div className="max-w-[560px] mx-auto space-y-6">
        <Heading2 className="mx-auto text-2xl md:text-3xl">
          {title}
        </Heading2>

        {subtitle && (
          <BodyBase className="mx-auto text-sm md:text-base">
            {subtitle}
          </BodyBase>
        )}

        <div className="pt-2 flex flex-col items-center gap-3">
          <ButtonPrimary href="/audit-gratuit">
            {buttonText}
          </ButtonPrimary>
          {mentionText && <Micro>{mentionText}</Micro>}
        </div>
      </div>
    </section>
  );
}
