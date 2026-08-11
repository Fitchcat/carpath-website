import React from "react";
import Link from "next/link";
import { IconLogo } from "./icons";
import { ThemeSwitch } from "./ThemeSwitch";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--bg-base)] border-t border-[var(--border-subtle)] py-12 md:py-16">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/">
            <IconLogo />
          </Link>
          <p className="text-xs text-[var(--text-secondary)] text-center md:text-left max-w-xs">
            CARPATH — Pilotez votre croissance.
            <br />
            Le partenaire du dirigeant de TPE/PME.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--text-secondary)]">
          <Link href="/methode" className="hover:text-[var(--text-primary)] transition-colors">
            La méthode
          </Link>
          <Link href="/systeme" className="hover:text-[var(--text-primary)] transition-colors">
            Le système
          </Link>
          <Link href="/pour-qui" className="hover:text-[var(--text-primary)] transition-colors">
            Pour qui ?
          </Link>
          <Link href="/audit-gratuit" className="hover:text-[var(--text-primary)] transition-colors">
            Audit gratuit
          </Link>
        </div>

        {/* ThemeSwitch + Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <ThemeSwitch />
          <div className="text-xs text-[var(--text-secondary)] text-center md:text-right">
            © 2025 CARPATH —{" "}
            <Link href="/mentions-legales" className="hover:underline hover:text-[var(--text-primary)]">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
