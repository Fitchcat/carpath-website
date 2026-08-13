import React from "react";
import type { Metadata } from "next";
import { HeaderMinimal } from "@/components/HeaderMinimal";
import { Footer } from "@/components/Footer";
import { SectionContenu } from "@/components/SectionContenu";
import { Heading1, BodyLarge, Heading3 } from "@/components/Typography";
import { CardReassurance } from "@/components/CardReassurance";
import { TidyCalEmbed } from "@/components/TidyCalEmbed";
import { Accordion, AccordionItem } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Réserver mon audit gratuit | CARPATH — 30 minutes, sans engagement",
  description:
    "Réservez votre audit gratuit avec CARPATH. 30 minutes, un premier bilan à l'oral, puis l'audit détaillé envoyé par écrit. Sans engagement.",
};

export default function AuditGratuitPage() {
  const faqItems: AccordionItem[] = [
    {
      id: "faq-1",
      title: "Est-ce vraiment gratuit ?",
      content:
        "Oui, sans condition. L'audit ne génère aucun frais, aucun abonnement automatique, aucune relance commerciale agressive. C'est un échange, pas un entonnoir de vente dissimulé.",
    },
    {
      id: "faq-2",
      title: "Que se passe-t-il après l'audit ?",
      content:
        "Si l'adéquation est là des deux côtés, nous vous présentons une proposition de partenariat adaptée à votre situation. Si ce n'est pas le bon moment ou le bon contexte, nous le disons clairement.",
    },
    {
      id: "faq-3",
      title: "À qui s'adresse cet audit ?",
      content:
        "Aux dirigeants de TPE et PME en activité, entre 150 000 € et 2 M€ de CA, qui veulent développer leur entreprise avec méthode. Si vous n'êtes pas dans ce profil, la page Pour qui ? vous aidera à en avoir le cœur net.",
    },
    {
      id: "faq-4",
      title: "L'appel se passe comment ?",
      content:
        "En visioconférence, depuis votre bureau. Nous partageons parfois un document ou un schéma en cours d'échange. Aucun logiciel à installer au préalable.",
    },
  ];

  return (
    <>
      <HeaderMinimal />
      <main className="flex-1">
        {/* HERO CONVERSION */}
        <section className="w-full bg-[var(--bg-base)] py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-[var(--border-subtle)]">
          <div className="max-w-[640px] mx-auto space-y-4">
            <Heading1 className="mx-auto text-3xl md:text-4xl">
              Réservez votre audit gratuit
            </Heading1>
            <BodyLarge className="mx-auto text-sm md:text-base">
              En 30 minutes, nous faisons le point sur votre situation : vos freins de croissance, vos priorités, ce qu&apos;un système de croissance pourrait changer pour vous. Vous repartez avec un premier bilan à l'oral, puis l&apos;audit détaillé complet vous est envoyé par écrit dans les jours qui suivent, qu&apos;on travaille ensemble ensuite ou non.
            </BodyLarge>
          </div>
        </section>

        {/* ÉLÉMENTS DE RÉASSURANCE */}
        <SectionContenu bg="surface" className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-site mx-auto">
            <CardReassurance
              iconType="check"
              title="Gratuit, sans condition"
              description="L'audit ne vous engage à rien. C'est un échange, pas un processus de vente. Si notre façon de travailler ne correspond pas à votre situation, on se le dit."
            />
            <CardReassurance
              iconType="clock"
              title="Environ 30 minutes"
              description="Pas plus. Nous respectons votre temps de dirigeant. La session est cadrée, structurée, efficace."
            />
            <CardReassurance
              iconType="gift"
              title="Un premier bilan, puis l'audit complet par écrit"
              description="À la fin de l'échange, vous repartez avec un premier bilan résumé, à l'oral. Dans les jours qui suivent, vous recevez l'audit détaillé complet par écrit, vos principaux freins de croissance et les piliers à activer en priorité. C'est déjà utile, même si vous ne donnez pas suite."
            />
          </div>
        </SectionContenu>

        {/* EMBED TIDYCAL */}
        <SectionContenu bg="base" className="py-12 md:py-16">
          <TidyCalEmbed tidyCalPath="1vqjov3/30-minute-meeting" />
        </SectionContenu>

        {/* FAQ */}
        <SectionContenu bg="surface" className="py-12 md:py-16">
          <div className="max-w-[720px] mx-auto space-y-6">
            <Heading3 className="text-center text-xl md:text-2xl">
              Questions fréquentes
            </Heading3>
            <Accordion items={faqItems} />
          </div>
        </SectionContenu>
      </main>
      <Footer />
    </>
  );
}
