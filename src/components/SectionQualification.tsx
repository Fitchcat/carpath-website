import React from "react";
import { IconCheck, IconCross } from "./icons";
import { BodyLarge } from "./Typography";

interface QualificationItem {
  type: "positive" | "negative";
  text: string;
}

interface SectionQualificationProps {
  items: QualificationItem[];
  className?: string;
}

export function SectionQualification({
  items,
  className = "",
}: SectionQualificationProps) {
  return (
    <div className={`space-y-4 max-w-[720px] mx-auto ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-4 rounded-md border-b border-[var(--border-subtle)] last:border-b-0 transition-colors hover:bg-[var(--bg-surface)]/50"
        >
          <div className="mt-1 flex-shrink-0">
            {item.type === "positive" ? (
              <IconCheck size={22} className="text-[#C79A3B]" />
            ) : (
              <IconCross size={22} className="text-[var(--text-secondary)]" />
            )}
          </div>
          <BodyLarge className="text-sm md:text-base text-[var(--text-primary)]">
            {item.text}
          </BodyLarge>
        </div>
      ))}
    </div>
  );
}
