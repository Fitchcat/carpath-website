"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHero } from "@/components/SectionHero";
import { SectionContenu } from "@/components/SectionContenu";
import { SectionCTA } from "@/components/SectionCTA";
import { SectionQualification } from "@/components/SectionQualification";
import { Heading2, BodyLarge, BodyBase } from "@/components/Typography";
import { CardMetric } from "@/components/CardMetric";
import { CardEtape } from "@/components/CardEtape";
import { CardPilier } from "@/components/CardPilier";
import { CardTestimonialAlternative } from "@/components/CardTestimonial";
import { ButtonGhost, ButtonPrimary } from "@/components/Buttons";

export default function HomePage() {
  const problemSymptoms = [
    {
      type: "positive" as const,
      text: "Vous avez des clients, de l'activité, de l'ambition, mais pas de cap clair pour aller plus loin.",
    },
    {
      type: "positive" as const,
      text: "Vous testez des actions marketing sans savoir lesquelles produisent vraiment des résultats.",
    },
    {
      type: "positive" as const,
      text: "Vous manquez de temps pour structurer ce qui fonctionne et arrêter ce qui coûte sans rapport.",
    },
    {
      type: "positive" as const,
      text: "Vous cherchez un partenaire qui comprend votre réalité de dirigeant, pas un prestataire de plus à gérer.",
    },
  ];

  const forWhoItems = [
    {
      type: "positive" as const,
      text: "Votre entreprise est déjà en activité, avec des clients et un chiffre d'affaires établi.",
    },
    {
      type: "positive" as const,
      text: "Vous dirigez une TPE ou une PME entre 150 000 € et 2 M€ de CA annuel.",
    },
    {
      type: "positive" as const,
      text: "Vous cherchez un partenaire de long terme, pas une mission ponctuelle.",
    },
    {
      type: "positive" as const,
      text: "Vous êtes prêt à vous impliquer dans la construction du système, pas seulement à déléguer.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 overflow-hidden bg-[#0D0D0D]">
        {/* HERO - FULL BLEED MOUNTAIN PATH B&W SELECTIVE BRONZE */}
        <SectionHero
          h1="Votre entreprise avance. Votre croissance, elle, piétine."
          subtitle="CARPATH installe et pilote le système de croissance qui manque à votre entreprise, pour que vous décidiez avec clarté, pas à l'instinct."
          primaryCtaText="Réserver mon audit gratuit"
          secondaryCtaText="Découvrir la méthode"
        />

        {/* PREUVE RAPIDE - GLASS CARDS WITH BRONZE GLOW */}
        <SectionContenu bg="surface" className="py-12 border-y border-white/10 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <CardMetric
              value="Un partenariat structuré"
              label="Ce qui change vraiment — pas une mission ponctuelle"
            />
            <CardMetric
              value="150 k€ à 2 M€ de CA"
              label="Notre terrain de jeu — TPE et PME établies"
            />
            <CardMetric
              value="5 piliers interconnectés"
              label="Stratégie, acquisition, conversion, fidélisation, pilotage"
            />
          </div>
        </SectionContenu>

        {/* PROBLÈME DIRIGEANT - ANIMATED SCROLL REVEAL */}
        <SectionContenu bg="base" className="py-20 lg:py-28">
          <motion.div
            className="max-w-[760px] mx-auto space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-semibold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-4 py-2 rounded-full border border-[#C79A3B]/30 mb-6">
                DIAGNOSTIC DIRIGEANT
              </span>
              <Heading2 className="mx-auto text-3xl sm:text-4xl pt-2">
                Vous reconnaissez-vous dans cette situation ?
              </Heading2>
            </div>
            <SectionQualification items={problemSymptoms} />
          </motion.div>
        </SectionContenu>

        {/* POSITIONNEMENT CARPATH - MONOCHROME ARCHITECTURE & BRONZE LINE */}
        <SectionContenu bg="surface" className="py-20 lg:py-28 relative">
          <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-6 space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <div>
                <span className="inline-block text-xs font-semibold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-4 py-2 rounded-full border border-[#C79A3B]/40 mb-6">
                  POSITIONNEMENT & COPILOTAGE
                </span>
                <Heading2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.2] pt-2">
                  CARPATH n&apos;est pas une agence.<br />
                  Ce n&apos;est pas un cabinet.<br />
                  Ce n&apos;est pas un outil.
                </Heading2>
              </div>
              <BodyLarge className="text-lg leading-relaxed pt-2">
                CARPATH est votre copilote de croissance. Nous installons et pilotons un système de croissance sur-mesure, directement dans votre entreprise. Vous restez aux commandes — nous mettons la méthode, les indicateurs et le pilotage. Le résultat : des décisions fondées sur des données, pas sur des intuitions.
              </BodyLarge>
              <div className="pt-4">
                <ButtonPrimary href="/audit-gratuit" className="py-4 px-8 text-base">
                  Réserver mon audit gratuit
                </ButtonPrimary>
              </div>
            </motion.div>

            {/* Visual B&W Architecture Showcase */}
            <motion.div
              className="lg:col-span-6 relative flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#C79A3B]/40 shadow-2xl shadow-black/80 group">
                <Image
                  src="/images/architecture-bw.png"
                  alt="Architecture de système de croissance CARPATH"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 bg-[#0D0D0D]/95 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center justify-between shadow-lg">
                  <div>
                    <p className="font-heading font-semibold text-xs text-[#C79A3B] tracking-wider uppercase">
                      ARCHITECTURE SUR-MESURE
                    </p>
                    <p className="text-xs text-white font-medium mt-0.5">
                      Un système structuré, installé directement dans votre entreprise.
                    </p>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-[#C79A3B] animate-ping" />
                </div>
              </div>
            </motion.div>
          </div>
        </SectionContenu>

        {/* MÉTHODE EN 4 ÉTAPES - WEBFLOW STAGGER CARDS */}
        <SectionContenu bg="base" className="py-20 lg:py-28">
          <div className="space-y-16">
            <motion.div
              className="text-center max-w-[700px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-4 py-2 rounded-full border border-[#C79A3B]/40 mb-6">
                NOTRE MÉTHODE EN 4 ÉTAPES
              </span>
              <Heading2 className="mx-auto text-3xl sm:text-4xl pt-2 mb-4">
                Comment nous travaillons avec vous
              </Heading2>
              <BodyBase className="mx-auto text-base">
                4 étapes clés pour transformer votre croissance en un système maîtrisé et reproductible.
              </BodyBase>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {[
                {
                  id: "ecouter" as const,
                  stepNumber: "01",
                  stepName: "Écouter",
                  title: "Audit & compréhension",
                  description: "Nous commençons par comprendre votre entreprise, vos freins et votre potentiel réel.",
                },
                {
                  id: "concevoir" as const,
                  stepNumber: "02",
                  stepName: "Concevoir",
                  title: "Architecture sur-mesure",
                  description: "Nous construisons votre stratégie et votre système de croissance sur-mesure.",
                },
                {
                  id: "piloter" as const,
                  stepNumber: "03",
                  stepName: "Piloter",
                  title: "Mise en marche & suivi",
                  description: "Nous mettons le système en marche et suivons les indicateurs avec vous.",
                },
                {
                  id: "ameliorer" as const,
                  stepNumber: "04",
                  stepName: "Améliorer",
                  title: "Optimisation continue",
                  description: "Nous affinons en continu ce qui produit des résultats, et ajustons ce qui ne performe pas.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={step.stepNumber}
                  className="h-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                >
                  <CardEtape {...step} />
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-4">
              <ButtonGhost href="/methode" className="text-base font-semibold">
                Voir la méthode en détail →
              </ButtonGhost>
            </div>
          </div>
        </SectionContenu>

        {/* CARPATH OPERATING SYSTEM - B&W BRONZE DASHBOARD SHOWCASE */}
        <SectionContenu bg="surface" className="py-20 lg:py-28">
          <div className="space-y-16">
            <motion.div
              className="text-center max-w-[900px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-4 py-2 rounded-full border border-[#C79A3B]/40 mb-6">
                ARCHITECTURE OPÉRATIONNELLE
              </span>
              <Heading2 className="mx-auto text-3xl sm:text-4xl lg:text-5xl max-w-none pt-2 mb-4">
                Le système de croissance que nous installons chez vous
              </Heading2>
              <BodyBase className="mx-auto text-base sm:text-lg">
                Le CARPATH Operating System repose sur 5 piliers indissociables<br className="hidden sm:inline" />
                {" "}et un tableau de bord de pilotage.
              </BodyBase>
            </motion.div>

            {/* Dashboard Display Banner with CARPATH B&W Bronze Mockup */}
            <motion.div
              className="relative w-full max-w-[960px] mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-[#C79A3B]/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/dashboard-carpath-v2.png"
                alt="Tableau de bord 3D de pilotage CARPATH Operating System en fond N&B strict"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />

              <div className="absolute top-4 left-4 bg-[#0D0D0D]/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C79A3B]/50 text-xs text-white font-semibold tracking-wider shadow-lg">
                <span className="text-[#C79A3B]">CARPATH OPERATING SYSTEM</span> — DASHBOARD
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
              {[
                {
                  id: "strategie" as const,
                  title: "Stratégie",
                  description: "Un cap clair, des priorités définies, des décisions alignées.",
                },
                {
                  id: "acquisition" as const,
                  title: "Acquisition",
                  description: "Des canaux choisis pour attirer les bons prospects, pas tous les prospects.",
                },
                {
                  id: "conversion" as const,
                  title: "Conversion",
                  description: "Un parcours client qui transforme l'intérêt en engagement.",
                },
                {
                  id: "fidelisation" as const,
                  title: "Fidélisation",
                  description: "Des clients qui restent, qui reviennent et qui recommandent.",
                },
                {
                  id: "pilotage" as const,
                  title: "Pilotage et optimisation",
                  description: "Un tableau de bord pour piloter la performance et prendre les bonnes décisions.",
                },
              ].map((pilier, idx) => (
                <motion.div
                  key={pilier.id}
                  className="h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <CardPilier {...pilier} />
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-4">
              <ButtonGhost href="/systeme" className="text-base font-semibold">
                Voir le système en détail →
              </ButtonGhost>
            </div>
          </div>
        </SectionContenu>

        {/* PREUVE SOCIALE */}
        <SectionContenu bg="base" className="py-20">
          <motion.div
            className="max-w-[760px] mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center space-y-3">
              <Heading2 className="mx-auto text-3xl sm:text-4xl">
                Ce que disent les dirigeants qui pilotent leur croissance avec CARPATH
              </Heading2>
            </div>
            <CardTestimonialAlternative />
          </motion.div>
        </SectionContenu>

        {/* CTA MILIEU DE PAGE */}
        <SectionCTA
          title="Vous voulez savoir si CARPATH est fait pour votre situation ?"
          subtitle="L'audit est gratuit. Il dure environ 30 minutes. Vous repartez avec un premier bilan à l'oral, puis l'audit détaillé complet vous est envoyé par écrit dans les jours qui suivent."
          buttonText="Réserver mon audit gratuit"
          bg="surface"
        />

        {/* POUR QUI */}
        <SectionContenu bg="base" className="py-20">
          <motion.div
            className="max-w-[760px] mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center space-y-3">
              <Heading2 className="mx-auto text-3xl sm:text-4xl">
                CARPATH est fait pour vous si…
              </Heading2>
            </div>

            <SectionQualification items={forWhoItems} />

            <div className="text-center pt-4">
              <ButtonGhost href="/pour-qui" className="text-base font-semibold">
                Voir la page complète Pour qui ? →
              </ButtonGhost>
            </div>
          </motion.div>
        </SectionContenu>

        {/* CTA FINAL */}
        <SectionCTA
          title="La croissance se pilote. Commençons par comprendre la vôtre."
          buttonText="Réserver mon audit gratuit"
          mentionText="Audit gratuit · environ 30 minutes · bilan à l'oral + audit détaillé envoyé après · sans engagement"
          bg="surface"
        />
      </main>
      <Footer />
    </>
  );
}
