import React from "react";

interface SectionContenuProps {
  children: React.ReactNode;
  bg?: "base" | "surface";
  className?: string;
  id?: string;
}

export function SectionContenu({
  children,
  bg = "base",
  className = "",
  id,
}: SectionContenuProps) {
  const bgClass = bg === "surface" ? "bg-[var(--bg-surface)]" : "bg-[var(--bg-base)]";

  return (
    <section
      id={id}
      className={`w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${bgClass} ${className}`}
    >
      <div className="max-w-site mx-auto">{children}</div>
    </section>
  );
}
