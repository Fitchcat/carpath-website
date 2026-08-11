import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

// ── JEU 1 : LA MÉTHODE (Usage exclusif : Écouter, Concevoir, Piloter, Améliorer) ──

export function IconMethodeEcouter({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Écouter"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M20 12 C13 12 10 17 10 22 C10 30 16 33 18 35 C19 36 19 38 17 39" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 12 C26 12 30 17 30 22 C30 27 27 30 24 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M34 16 C36 18 36 22 34 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M37 13 C40 17 40 25 37 29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function IconMethodeConcevoir({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Concevoir"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="12" y="13" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="16" y1="19" x2="28" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="23" x2="24" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 33 L36 27 L38 29 L32 35 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <line x1="30" y1="33" x2="28" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="27" x2="38" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMethodePiloter({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Piloter"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="24" y1="21" x2="24" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26.6" y1="21.5" x2="32.5" y2="15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="21.4" y1="21.5" x2="15.5" y2="15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="27" x2="28" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMethodeAmeliorer({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Améliorer"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M24 12 C31 12 36 17 36 24 C36 31 31 36 24 36 C17 36 12 31 12 24 C12 19 15 15 19 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <polyline points="16,10 19,13 16,16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="17,29 21,25 25,27 31,20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="31" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// ── JEU 2 : CARPATH OPERATING SYSTEM (Usage exclusif : Stratégie, Acquisition, Conversion, Fidélisation, Pilotage et optimisation) ──

export function IconOsStrategie({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Stratégie"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="24" y1="10" x2="24" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="33" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="24" x2="15" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="33" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconOsAcquisition({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Acquisition"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 14 L36 14 L28 24 L28 36 L20 36 L20 24 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <line x1="18" y1="9" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="15,11 18,9 21,11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="24" y1="9" x2="24" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="21,11 24,9 27,11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="30" y1="9" x2="30" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="27,11 30,9 33,11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IconOsConversion({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Conversion"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="13" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="30" y="19" width="10" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="20" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="25,21 28,24 25,27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="32.5,24 34.5,26.5 38,22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IconOsFidelisation({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Fidélisation"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M24 14 C30 14 35 18.5 35 24 C35 29.5 30 34 24 34 C18 34 13 29.5 13 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <polyline points="17,20 13,24 17,28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M24 28 C24 28 19 25 19 21.5 C19 19.5 20.5 18 22 18 C23 18 24 19 24 19 C24 19 25 18 26 18 C27.5 18 29 19.5 29 21.5 C29 25 24 28 24 28 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IconOsPilotage({ size = 32, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-label="Pilotage et optimisation"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="44" height="44" rx="10" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 30 A12 12 0 0 1 36 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <line x1="12" y1="30" x2="14" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="30" x2="34" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="18" x2="24" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="30" x2="31" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="30" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="13" y="34" width="3" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="19" y="31" width="3" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="25" y="33" width="3" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="31" y="29" width="3" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// ── UTILITY ICONS ──

export function IconCheck({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M6 10.5L8.5 13L14 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCross({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M7 7L13 13M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrowRight({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClock({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGift({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="8" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v13M3 12h18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8C12 8 9.5 4.5 7.5 4.5C5.5 4.5 4.5 6 5.5 7.5C6.5 9 12 8 12 8Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8C12 8 14.5 4.5 16.5 4.5C18.5 4.5 19.5 6 18.5 7.5C17.5 9 12 8 12 8Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconLogo({
  className = "",
  iconSize = 32,
  textSize = "text-lg",
}: {
  className?: string;
  iconSize?: number;
  textSize?: string;
}) {
  // Logo CARPATH : 4 carrés arrondis (rx=4) autour d'un cercle central bronze
  return (
    <div className={`inline-flex items-center gap-3 transition-all duration-500 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        aria-label="CARPATH Logo"
        className="transition-all duration-500"
      >
        <rect x="4" y="4" width="14" height="14" rx="4" fill="currentColor" />
        <rect x="22" y="4" width="14" height="14" rx="4" fill="currentColor" />
        <rect x="4" y="22" width="14" height="14" rx="4" fill="currentColor" />
        <rect x="22" y="22" width="14" height="14" rx="4" fill="currentColor" />
        <circle cx="20" cy="20" r="3.5" fill="#C79A3B" />
      </svg>
      <span className={`font-heading font-medium tracking-[0.08em] text-[var(--text-primary)] transition-all duration-500 ${textSize}`}>
        CARPATH
      </span>
    </div>
  );
}
