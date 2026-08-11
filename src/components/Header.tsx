"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconLogo } from "./icons";
import { ButtonPrimary } from "./Buttons";
import { ThemeSwitch } from "./ThemeSwitch";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/methode", label: "La méthode" },
    { href: "/systeme", label: "Le système" },
    { href: "/pour-qui", label: "Pour qui ?" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[var(--bg-base)]/95 backdrop-blur-md shadow-lg border-b border-[var(--border-subtle)] py-2"
          : "bg-transparent py-5 md:py-6"
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500">
        {/* Logo avec mise en avant forte à l'ouverture et réduction au scroll */}
        <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#C79A3B] rounded-sm group">
          <IconLogo
            iconSize={scrolled ? 32 : 52}
            textSize={scrolled ? "text-lg font-semibold" : "text-2xl sm:text-3xl font-extrabold"}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--text-primary)] hover:border-b-2 hover:border-[#C79A3B] pb-1 ${
                  isActive
                    ? "text-[#C79A3B] border-b-2 border-[#C79A3B]"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeSwitch />
          <ButtonPrimary href="/audit-gratuit">
            Réserver mon audit gratuit
          </ButtonPrimary>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeSwitch />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[var(--text-primary)] hover:bg-[var(--bg-surface)] focus:outline-none focus:ring-2 focus:ring-[#C79A3B]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-[var(--bg-base)] z-40 px-6 py-8 flex flex-col justify-between border-t border-[var(--border-subtle)] overflow-y-auto animate-in slide-in-from-top-4 duration-300"
        >
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-heading font-semibold transition-colors ${
                    isActive ? "text-[#C79A3B]" : "text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 pb-4">
            <ButtonPrimary
              href="/audit-gratuit"
              className="w-full text-center text-lg py-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Réserver mon audit gratuit
            </ButtonPrimary>
          </div>
        </div>
      )}
    </header>
  );
}
