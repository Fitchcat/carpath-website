import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Heading1({ children, className = "", id }: TypographyProps) {
  return (
    <h1
      id={id}
      className={`font-heading font-extrabold text-[32px] md:text-[48px] leading-[1.15] md:leading-[1.1] text-[var(--text-primary)] max-w-[55ch] ${className}`}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className = "", id }: TypographyProps) {
  return (
    <h2
      id={id}
      className={`font-heading font-bold text-[24px] md:text-[30px] leading-[1.15] text-[var(--text-primary)] max-w-[55ch] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className = "", id }: TypographyProps) {
  return (
    <h3
      id={id}
      className={`font-heading font-semibold text-[20px] md:text-[24px] leading-[1.2] text-[var(--text-primary)] ${className}`}
    >
      {children}
    </h3>
  );
}

export function Heading4({ children, className = "", id }: TypographyProps) {
  return (
    <h4
      id={id}
      className={`font-body font-semibold text-[18px] md:text-[20px] leading-[1.3] text-[var(--text-primary)] ${className}`}
    >
      {children}
    </h4>
  );
}

export function BodyLarge({ children, className = "" }: TypographyProps) {
  return (
    <p className={`font-body font-normal text-[18px] leading-[1.6] text-[var(--text-secondary)] max-w-[70ch] ${className}`}>
      {children}
    </p>
  );
}

export function BodyBase({ children, className = "" }: TypographyProps) {
  return (
    <p className={`font-body font-normal text-[16px] leading-[1.6] text-[var(--text-secondary)] max-w-[70ch] ${className}`}>
      {children}
    </p>
  );
}

export function Label({ children, className = "" }: TypographyProps) {
  return (
    <span className={`font-body font-medium text-[14px] leading-[1.6] text-[var(--text-secondary)] ${className}`}>
      {children}
    </span>
  );
}

export function Micro({ children, className = "" }: TypographyProps) {
  return (
    <span className={`font-body font-normal text-[12px] leading-[1.6] text-[var(--text-secondary)] opacity-80 ${className}`}>
      {children}
    </span>
  );
}
