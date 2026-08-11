import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  showArrow?: boolean;
  target?: string;
  rel?: string;
}

export function ButtonPrimary({
  children,
  href,
  className = "",
  showArrow = false,
  target,
  rel,
  ...props
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      )}
    </>
  );

  const baseStyles =
    "group inline-flex items-center justify-center gap-2 font-body font-semibold text-base px-6 py-3 rounded-md bg-[#C79A3B] text-[#0D0D0D] transition-all duration-base ease-out hover:bg-[#B8893A] hover:-translate-y-[1px] active:translate-y-0 active:bg-[#A07830] focus:outline-none focus:ring-2 focus:ring-[#C79A3B] focus:ring-offset-2 focus:ring-offset-[var(--bg-base)] dark:hover:shadow-[0_4px_20px_rgba(199,154,59,0.25)] disabled:opacity-40 disabled:pointer-events-none";

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={`${baseStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {content}
    </button>
  );
}

export function ButtonSecondary({
  children,
  href,
  className = "",
  showArrow = false,
  target,
  rel,
  ...props
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      )}
    </>
  );

  const baseStyles =
    "group inline-flex items-center justify-center gap-2 font-body font-medium text-base px-6 py-3 rounded-md bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all duration-base ease-out hover:border-[#C79A3B] hover:text-[#C79A3B] focus:outline-none focus:ring-2 focus:ring-[#C79A3B] focus:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none";

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={`${baseStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {content}
    </button>
  );
}

export function ButtonGhost({
  children,
  href,
  className = "",
  showArrow = true,
  target,
  rel,
  ...props
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      )}
    </>
  );

  const baseStyles =
    "group inline-flex items-center gap-1.5 font-body font-normal text-sm text-[var(--text-secondary)] transition-colors duration-fast hover:text-[var(--text-primary)] hover:underline hover:decoration-[#C79A3B] focus:outline-none focus:ring-2 focus:ring-[#C79A3B]";

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={`${baseStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {content}
    </button>
  );
}
