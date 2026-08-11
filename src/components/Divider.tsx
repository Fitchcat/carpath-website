import React from "react";

export function Divider({ className = "" }: { className?: string }) {
  return (
    <hr className={`w-full border-t border-[var(--border-subtle)] my-8 ${className}`} />
  );
}

export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] ${className}`}
    >
      {children}
    </span>
  );
}
