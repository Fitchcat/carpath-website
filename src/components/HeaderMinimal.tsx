import React from "react";
import Link from "next/link";
import { IconLogo } from "./icons";
import { ButtonGhost } from "./Buttons";
import { ThemeSwitch } from "./ThemeSwitch";

export function HeaderMinimal() {
  return (
    <header className="w-full bg-[var(--bg-base)] border-b border-[var(--border-subtle)] h-14 flex items-center">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#C79A3B] rounded-sm">
          <IconLogo />
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeSwitch />
          <ButtonGhost href="/" showArrow={false}>
            ← Retour au site
          </ButtonGhost>
        </div>
      </div>
    </header>
  );
}
