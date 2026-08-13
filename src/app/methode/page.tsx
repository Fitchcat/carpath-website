"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeroInterne } from "@/components/SectionHeroInterne";
import { SectionContenu } from "@/components/SectionContenu";
import { SectionCTA } from "@/components/SectionCTA";
import { Heading2, BodyLarge, BodyBase } from "@/components/Typography";
import { CardEtape } from "@/components/CardEtape";
import { ProgressSteps } from "@/components/ProgressSteps";
import { ButtonSecondary } from "@/components/Buttons";

export default function MethodePage() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-hidden bg-[#0D0D0D]">
        {/* HERO PAGE INTERNE */}
        <SectionHeroInterne
          h1={
            <>
              La méthode CARPATH :<br />
              4 étapes pour installer et piloter votre croissance
            </>
          }
          subtitle="Avant de concevoir quoi que ce soit, nous écoutons. Avant de piloter, nous concevons. Chaque étape a un rôle précis."
        />

        {/* INTRO MÉTHODE */}
        <SectionContenu bg="surface" className="py-16 lg:py-24">
          <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="inline-block text-xs font-semibold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-4 py-2 rounded-full border border-[#C79A3B]/40 mb-6">
                  PROCESSUS STRUCTURÉ &amp; ÉPROUVÉ
                </span>
              </div>
              <BodyLarge className="text-xl leading-relaxed">
                La croissance ne s&apos;improvise pas. Elle se construit avec méthode, elle se pilote avec des indicateurs, elle s&apos;améliore en continu. Ce n&apos;est pas une promesse abstraite : c&apos;est un processus structuré, éprouvé, que CARPATH applique à chaque partenariat. Vous n&apos;avez pas à tout réinventer — vous avez à piloter.
              </BodyLarge>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#C79A3B]/40 shadow-2xl group">
                <Image
                  src="/images/hero-mountain-bw.png"
                  alt="Vision et cap méthodique CARPATH"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </SectionContenu>

        {/* 4 ÉTAPES DÉTAILLÉES */}
        <SectionContenu bg="base" className="py-20 lg:py-28">
          <div className="max-w-[840px] mx-auto space-y-12">
            <ProgressSteps currentStep={4} />

            <div className="space-y-10">
              {[
                {
                  id: "ecouter" as const,
                  stepNumber: "01",
                  stepName: "Écouter",
                  title: "Comprendre votre réalité avant de proposer quoi que ce soit",
                  description:
                    "Nous commençons par un audit complet de votre situation : votre marché, vos clients actuels, vos canaux d'acquisition, vos points de friction, vos indicateurs disponibles. Nous posons des questions que personne ne vous a peut-être encore posées. Ce n'est pas une formalité — c'est le fondement de tout ce qui suit. Vous ne repartez pas de cet échange les mains vides : vous avez déjà une lecture plus claire de votre situation.",
                  experience:
                    "Vous êtes entendu, pas vendu. Vous parlez de votre entreprise à quelqu'un qui cherche à comprendre, pas à placer une offre.",
                  isAuditStep: true,
                },
                {
                  id: "concevoir" as const,
                  stepNumber: "02",
                  stepName: "Concevoir",
                  title: "Construire votre système de croissance sur-mesure",
                  description:
                    "À partir de l'audit, nous concevons votre stratégie et l'architecture de votre système de croissance. Quels piliers activer en priorité ? Quels canaux d'acquisition retenir ? Comment structurer votre parcours client ? Chaque décision est argumentée, chaque choix est documenté. Vous validez avant que quoi que ce soit ne soit mis en place.",
                  experience:
                    "Vous voyez pour la première fois un plan cohérent, adapté à votre réalité — pas un modèle générique qu'on vous applique.",
                  isAuditStep: false,
                },
                {
                  id: "piloter" as const,
                  stepNumber: "03",
                  stepName: "Piloter",
                  title: "Mettre le système en marche et suivre les indicateurs",
                  description:
                    "Le système conçu est déployé. Les actions sont mises en place, les outils configurés, les indicateurs définis. Vous disposez d'un tableau de bord simple pour suivre ce qui se passe. Nous pilotons ensemble : vous restez aux commandes, CARPATH suit les performances et vous alerte quand un indicateur mérite attention.",
                  experience:
                    "Vous passez de l'intuition à la lisibilité. Vous savez ce qui fonctionne, ce qui ne fonctionne pas encore, et ce qu'on va ajuster.",
                  isAuditStep: false,
                },
                {
                  id: "ameliorer" as const,
                  stepNumber: "04",
                  stepName: "Améliorer",
                  title: "Affiner en continu ce qui produit des résultats",
                  description:
                    "Un système de croissance n'est jamais figé. Les marchés évoluent, les comportements clients changent, les priorités de votre entreprise bougent. À intervals réguliers, nous analysons les données, identifions ce qui peut être optimisé et proposons des ajustements. Ce n'est pas une remise à zéro — c'est une amélioration continue, ancrée dans les chiffres réels de votre activité.",
                  experience:
                    "Vous avez un partenaire qui ne disparaît pas après le démarrage. La relation s'inscrit dans la durée.",
                  isAuditStep: false,
                },
              ].map((step, idx) => (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                >
                  <CardEtape {...step} detailed={true} />
                </motion.div>
              ))}
            </div>
          </div>
        </SectionContenu>

        {/* TRANSITION VERS LE SYSTÈME */}
        <SectionContenu bg="surface" className="py-20">
          <motion.div
            className="max-w-[640px] mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Heading2 className="mx-auto">
              Et concrètement, qu&apos;est-ce que je reçois ?
            </Heading2>
            <BodyBase className="mx-auto text-base">
              La méthode décrit le chemin. Le CARPATH Operating System décrit ce que vous avez entre les mains à l&apos;arrivée : 5 piliers de croissance installés dans votre entreprise, pilotés en continu.
            </BodyBase>
            <div className="pt-2">
              <ButtonSecondary href="/systeme" className="py-4 px-8 text-base">
                Découvrir le CARPATH Operating System →
              </ButtonSecondary>
            </div>
          </motion.div>
        </SectionContenu>

        {/* CTA FINAL PAGE MÉTHODE */}
        <SectionCTA
          title="L'audit gratuit, c'est l'étape Écouter — appliquée à votre situation."
          subtitle="30 minutes pour comprendre où vous en êtes et ce que votre système de croissance devrait couvrir en priorité — avec un premier bilan à l'oral et l'audit détaillé envoyé par écrit ensuite. Sans engagement."
          buttonText="Réserver mon audit gratuit"
          bg="base"
        />
      </main>
      <Footer />
    </>
  );
}
