import React from "react";
import { Heading1, BodyLarge } from "./Typography";

interface SectionHeroInterneProps {
  h1: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export function SectionHeroInterne({
  h1,
  subtitle,
  className = "",
}: SectionHeroInterneProps) {
  return (
    <section className={`w-full bg-[var(--bg-base)] py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center ${className}`}>
      <div className="max-w-[760px] mx-auto space-y-4">
        <Heading1 className="mx-auto text-3xl md:text-4xl lg:text-5xl leading-tight">
          {h1}
        </Heading1>
        {subtitle && (
          <BodyLarge className="mx-auto max-w-[680px]">
            {subtitle}
          </BodyLarge>
        )}
      </div>
    </section>
  );
}
