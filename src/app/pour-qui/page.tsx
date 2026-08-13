"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeroInterne } from "@/components/SectionHeroInterne";
import { SectionContenu } from "@/components/SectionContenu";
import { SectionCTA } from "@/components/SectionCTA";
import { SectionQualification } from "@/components/SectionQualification";
import { Heading2, BodyBase } from "@/components/Typography";

export default function PourQuiPage() {
  const idealDirigeantItems = [
    {
      type: "positive" as const,
      text: "Votre entreprise est déjà en activité, avec des clients, un chiffre d'affaires, une réputation à défendre. Vous n'avez pas besoin qu'on vous explique votre métier, vous avez besoin qu'on vous aide à le faire croître avec méthode.",
    },
    {
      type: "positive" as const,
      text: "Vous cherchez un partenaire durable, pas une prestation unique. Vous avez peut-être déjà essayé des missions ponctuelles, une refonte de site, une campagne publicitaire, un consultant six semaines. Vous savez que ça ne suffit pas. Ce que vous voulez, c'est quelqu'un qui reste, qui suit les indicateurs et qui s'ajuste avec vous dans le temps.",
    },
    {
      type: "positive" as const,
      text: "Vous avez identifié un potentiel de développement, mais vous manquez de méthode, de visibilité ou de ressources pour l'activer seul. Vous n'avez pas besoin d'être convaincu que la croissance est possible, vous avez besoin d'un chemin pour y aller.",
    },
    {
      type: "positive" as const,
      text: "Vous êtes prêt à vous impliquer. Un système de croissance se construit avec vous, pas pour vous. Vous aurez des décisions à prendre, des retours à donner, des ajustements à valider. Si vous cherchez à déléguer en mode 'faites et revenez dans six mois', ce n'est pas le bon modèle de travail.",
    },
  ];

  const nonTargetItems = [
    {
      type: "negative" as const,
      text: "Vous démarrez votre activité. CARPATH travaille avec des entreprises déjà en activité. Si vous êtes en phase de création ou de lancement, ce n'est pas la bonne étape, revenez quand vous avez vos premiers clients et une base réelle à développer.",
    },
    {
      type: "negative" as const,
      text: "Vous cherchez une prestation ponctuelle. Un logo, un site, une campagne : ce sont des livrables, pas un système. Si votre besoin est un projet délimité dans le temps, il existe d'autres prestataires mieux adaptés à cette demande.",
    },
    {
      type: "negative" as const,
      text: "Vous voulez des résultats sans vous y impliquer. La croissance d'une entreprise est toujours co-construite avec son dirigeant. CARPATH apporte la méthode et le pilotage. Vous apportez la connaissance de votre marché.",
    },
  ];

  const contexts = [
    "Entreprises de services B2B (conseil, formation, ingénierie, IT) qui cherchent à structurer leur acquisition",
    "Commerces et artisans qui veulent aller au-delà de leur zone de chalandise locale",
    "TPE familiales en phase de transmission ou de montée en charge",
    "PME industrielles ou de distribution qui ne disposent pas de direction marketing interne",
    "Dirigeants fondateurs qui assurent seuls le développement commercial et cherchent à le systématiser",
  ];

  return (
    <>
      <Header />
      <main className="flex-1 overflow-hidden bg-[#0D0D0D]">
        {/* HERO PAGE INTERNE */}
        <SectionHeroInterne
          h1="CARPATH est fait pour vous si…"
          subtitle={
            <>
              Nous cherchons les dirigeants avec qui un partenariat de croissance a du sens pour eux comme pour nous.<br />
              Voici comment vérifier si CARPATH est adapté à votre situation.
            </>
          }
        />

        {/* PORTRAIT DU DIRIGEANT IDÉAL */}
        <SectionContenu bg="surface" className="py-16 lg:py-24">
          <motion.div
            className="max-w-[760px] mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center space-y-3">
              <Heading2 className="mx-auto text-3xl sm:text-4xl">
                Vous êtes probablement la bonne personne si…
              </Heading2>
            </div>

            <SectionQualification items={idealDirigeantItems} />
          </motion.div>
        </SectionContenu>

        {/* ARCHITECTURE SHOWCASE */}
        <SectionContenu bg="base" className="py-20">
          <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-6 relative flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#C79A3B]/40 shadow-2xl group">
                <Image
                  src="/images/architecture-bw.png"
                  alt="Architecture et vision CARPATH"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div>
                <span className="inline-block text-xs font-semibold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-4 py-2 rounded-full border border-[#C79A3B]/40 mb-6">
                  EXIGENCE &amp; PARTENARIAT
                </span>
              </div>
              <Heading2 className="text-3xl sm:text-4xl">
                CARPATH n&apos;est pas pour tout le monde, et c&apos;est intentionnel.
              </Heading2>
              <BodyBase className="text-base leading-relaxed">
                Nous nous engageons aux côtés de dirigeants avec qui nous partageons une même exigence : celle de construire une croissance saine, rentable et maîtrisée dans le temps.
              </BodyBase>
            </motion.div>
          </div>
        </SectionContenu>

        {/* CE QUE CARPATH N'EST PAS */}
        <SectionContenu bg="surface" className="py-20">
          <motion.div
            className="max-w-[760px] mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center space-y-3">
              <Heading2 className="mx-auto text-3xl sm:text-4xl">
                CARPATH n&apos;est probablement pas pour vous si…
              </Heading2>
            </div>

            <SectionQualification items={nonTargetItems} />

            <div className="bg-[#0D0D0D] rounded-xl p-5 border-l-4 border-l-[#C79A3B] text-sm text-[var(--text-secondary)] italic max-w-[760px] mx-auto border border-white/5">
              Ce n&apos;est pas un rejet, c&apos;est une honnêteté. Travailler ensemble sans que les conditions soient réunies ne rendrait service à personne.
            </div>
          </motion.div>
        </SectionContenu>

        {/* SECTEURS & CONTEXTES */}
        <SectionContenu bg="base" className="py-20">
          <motion.div
            className="max-w-[760px] mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="space-y-3 text-center md:text-left">
              <Heading2 className="text-3xl sm:text-4xl">
                Les contextes dans lesquels nous intervenons
              </Heading2>
              <BodyBase className="text-base">
                Il n&apos;y a pas de secteur exclusif. Ce qui compte, c&apos;est le stade de développement et l&apos;intention du dirigeant. Voici les types de situations où nous intervenons le plus souvent :
              </BodyBase>
            </div>

            <ul className="space-y-4 pt-2">
              {contexts.map((ctx, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base text-[var(--text-primary)] bg-[var(--bg-surface)]/60 backdrop-blur-md p-4 rounded-xl border border-white/5">
                  <span className="text-[#C79A3B] font-bold text-lg leading-none mt-1">•</span>
                  <span>{ctx}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </SectionContenu>

        {/* CTA CONDITIONNEL */}
        <SectionCTA
          title="Votre situation correspond à ces critères ?"
          subtitle="Si vous vous reconnaissez dans ce portrait, réservons 45 minutes pour analyser votre situation et vérifier si CARPATH est le bon copilote pour vous."
          buttonText="Réserver mon audit gratuit"
          bg="surface"
        />
      </main>
      <Footer />
    </>
  );
}
