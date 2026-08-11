"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { Heading2, Heading3, Heading4, BodyBase, Label } from "./Typography";
import { ButtonPrimary } from "./Buttons";

interface TidyCalEmbedProps {
  tidyCalPath?: string;
}

export function TidyCalEmbed({ tidyCalPath = "1vqjov3/30-minute-meeting" }: TidyCalEmbedProps) {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    // Listen for TidyCal booking confirmation messages if embedded
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data &&
        (event.data === "booking_confirmed" ||
          event.data?.type === "tidycal:booking_confirmed" ||
          event.data?.event === "booking_created")
      ) {
        setBookingConfirmed(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    // Re-initialize TidyCal embed script if script is already present on client navigation
    if (typeof window !== "undefined" && (window as unknown as { TidyCal?: { init?: () => void } }).TidyCal?.init) {
      (window as unknown as { TidyCal: { init: () => void } }).TidyCal.init();
    }
  }, [tidyCalPath]);

  if (bookingConfirmed) {
    return (
      <div className="w-full max-w-[640px] mx-auto bg-[var(--bg-surface)] rounded-2xl p-8 md:p-10 border border-[#C79A3B] space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-[#C79A3B]/20 text-[#C79A3B] rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
          ✓
        </div>

        <Heading2 className="mx-auto text-2xl md:text-3xl text-[#C79A3B]">
          C&apos;est réservé. Voici la suite.
        </Heading2>

        <BodyBase className="mx-auto text-sm md:text-base">
          Vous recevez un email de confirmation dans les prochaines minutes avec le lien de notre échange.
        </BodyBase>

        <div className="bg-[var(--bg-base)] rounded-xl p-6 border border-[var(--border-subtle)] text-left space-y-3">
          <Heading4 className="text-base text-[#C79A3B]">
            Pour préparer notre échange :
          </Heading4>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-[#C79A3B]">•</span>
              <span>Votre chiffre d&apos;affaires actuel et son évolution</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C79A3B]">•</span>
              <span>Vos principales sources de nouveaux clients aujourd&apos;hui</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C79A3B]">•</span>
              <span>Ce qui freine votre développement selon vous</span>
            </li>
          </ul>
        </div>

        <BodyBase className="mx-auto text-sm font-medium text-[var(--text-primary)] pt-2">
          À très bientôt. — L&apos;équipe CARPATH
        </BodyBase>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[840px] mx-auto space-y-6">
      {/* Script TidyCal Officiel */}
      <Script
        src="https://asset-tidycal.b-cdn.net/js/embed.js"
        strategy="afterInteractive"
      />

      <div className="text-center space-y-2">
        <Heading3 className="text-xl md:text-2xl">
          Choisissez un créneau qui vous convient
        </Heading3>
        <BodyBase className="text-sm mx-auto">
          Les créneaux disponibles sont mis à jour en temps réel. Une confirmation vous est envoyée par email immédiatement après la réservation.
        </BodyBase>
      </div>

      {/* Widget Container TidyCal Native Embed */}
      <div className="w-full bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden shadow-xl min-h-[580px] p-4 md:p-6">
        <div className="tidycal-embed" data-path={tidyCalPath} />

        {/* Fallback en cas d'extension bloqueuse de script */}
        <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] w-full text-center">
          <Label className="text-xs block mb-2">
            Le calendrier ne s&apos;affiche pas ?
          </Label>
          <ButtonPrimary
            href={`https://tidycal.com/${tidyCalPath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm py-2.5 px-5"
          >
            Ouvrir la réservation TidyCal ↗
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
