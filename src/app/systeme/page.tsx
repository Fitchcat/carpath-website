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
import { CardPilier } from "@/components/CardPilier";
import { SystemDiagram } from "@/components/SystemDiagram";
import { Accordion, AccordionItem } from "@/components/Accordion";
import {
  IconOsStrategie,
  IconOsAcquisition,
  IconOsConversion,
  IconOsFidelisation,
  IconOsPilotage,
} from "@/components/icons";

export default function SystemePage() {
  const pillarsData = [
    {
      id: "strategie" as const,
      numberStr: "01 / 05",
      title: "Stratégie",
      subtitle: "Un cap clair pour que chaque décision soit cohérente",
      description:
        "Sans stratégie documentée, chaque décision se prend dans le flou. Vous répondez aux urgences plutôt que de construire. Le pilier Stratégie définit votre positionnement, vos priorités de croissance et les indicateurs qui comptent vraiment pour votre activité. Ce travail est le fondement de tous les autres piliers — rien ne peut être construit durablement sans lui.",
      example:
        "Une PME de services B2B qui n'a jamais formalisé sa proposition de valeur ne peut pas aligner ses actions d'acquisition avec ses vraies forces. Le pilier Stratégie règle ce problème à la racine.",
      Icon: IconOsStrategie,
    },
    {
      id: "acquisition" as const,
      numberStr: "02 / 05",
      title: "Acquisition",
      subtitle: "Attirer les bons prospects, pas tous les prospects",
      description:
        "L'acquisition, ce n'est pas faire du bruit sur tous les canaux. C'est choisir les canaux où se trouvent vos clients idéaux, construire une présence cohérente, et générer un flux de prospects qualifiés — des dirigeants ou décideurs qui ont réellement besoin de ce que vous faites. Nous identifions les canaux pertinents pour votre secteur et votre réalité opérationnelle, et nous les activons avec méthode.",
      example:
        "Une entreprise artisanale locale n'a pas les mêmes leviers d'acquisition qu'une PME industrielle qui vend à des donneurs d'ordre nationaux. Le pilier Acquisition est toujours contextualisé à votre terrain.",
      Icon: IconOsAcquisition,
    },
    {
      id: "conversion" as const,
      numberStr: "03 / 05",
      title: "Conversion",
      subtitle: "Transformer l'intérêt en décision, sans forcer",
      description:
        "Attirer des prospects ne suffit pas si votre parcours client ne les aide pas à passer à l'étape suivante. Le pilier Conversion structure chaque point de contact — site, devis, premier échange commercial, relance — pour que le prospect comprenne ce qu'il a à gagner et sache quoi faire. Pas de pression : une clarté suffisante pour que la décision soit naturelle.",
      example:
        "Un artisan qui reçoit des demandes de devis mais ne transforme qu'une sur cinq peut avoir un problème de conversion, pas d'acquisition. Le pilier Conversion identifie et corrige ces points de friction.",
      Icon: IconOsConversion,
    },
    {
      id: "fidelisation" as const,
      numberStr: "04 / 05",
      title: "Fidélisation",
      subtitle: "Des clients qui restent, qui reviennent, qui recommandent",
      description:
        "Acquérir un nouveau client coûte plus cher que de garder un client existant. Le pilier Fidélisation met en place les mécanismes qui entretiennent la relation dans la durée : suivi post-vente, communication régulière, détection des signaux d'insatisfaction, programmes de recommandation. Vos meilleurs clients deviennent vos meilleurs ambassadeurs.",
      example:
        "Une PME de conseil qui ne contacte ses clients qu'à renouvellement de contrat manque des occasions de générer de la valeur — et de la fidélité — entre les missions.",
      Icon: IconOsFidelisation,
    },
    {
      id: "pilotage" as const,
      numberStr: "05 / 05",
      title: "Pilotage et optimisation",
      subtitle: "Décider avec des données, pas avec des impressions",
      description:
        "Les 4 premiers piliers produisent des données. Le pilier Pilotage et optimisation les transforme en décisions. Vous disposez d'un tableau de bord adapté à votre activité — pas un rapport de 40 pages, mais les indicateurs qui comptent, lisibles en 5 minutes. À intervalles réguliers, nous analysons ensemble ce qui fonctionne, ce qui peut être amélioré et ce qu'il faut ajuster. Vous pilotez votre croissance, nous vous donnons la visibilité pour le faire.",
      example:
        "Un dirigeant qui prend ses décisions marketing sur la base de son ressenti — 'cette campagne m'a semblé bien fonctionner' — sans données réelles ne peut pas optimiser. Le pilier Pilotage installe cette lisibilité.",
      Icon: IconOsPilotage,
    },
  ];

  const accordionItems: AccordionItem[] = pillarsData.map((p) => ({
    id: p.id,
    title: `Pilier ${p.numberStr.slice(0, 2)} — ${p.title}`,
    icon: <p.Icon size={24} className="text-[#C79A3B]" />,
    content: `${p.subtitle}\n\n${p.description}\n\nExemple : ${p.example}`,
  }));

  return (
    <>
      <Header />
      <main className="flex-1 overflow-hidden bg-[#0D0D0D]">
        {/* HERO PAGE INTERNE */}
        <SectionHeroInterne
          h1="Le CARPATH Operating System : l'architecture de votre croissance"
          subtitle="Ce n'est pas une liste de services. C'est un système cohérent, installé dans votre entreprise, piloté dans la durée."
        />

        {/* INTRO SYSTÈME WITH MOCKUP BANNER */}
        <SectionContenu bg="surface" className="py-16 lg:py-24">
          <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-6 space-y-4 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold text-[#C79A3B] tracking-widest uppercase bg-[#C79A3B]/10 px-3.5 py-1.5 rounded-full border border-[#C79A3B]/40">
                ARCHITECTURE GLOBALE
              </span>
              <BodyLarge className="text-xl leading-relaxed">
                La plupart des dirigeants de TPE et PME ont déjà essayé des actions marketing ou commerciales séparées. Un peu de SEO par-ci, une campagne par-là, un outil CRM jamais vraiment utilisé. Le problème n&apos;est pas les actions — c&apos;est l&apos;absence de système qui les relie. Le CARPATH Operating System, c&apos;est cette architecture que vous n&apos;avez pas encore : 5 piliers interdépendants, conçus ensemble, pilotés en continu.
              </BodyLarge>
            </motion.div>

            <motion.div
              className="lg:col-span-6 relative flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-[540px] aspect-[16/10] rounded-2xl overflow-hidden border border-[#C79A3B]/40 shadow-2xl group">
                <Image
                  src="/images/dashboard-carpath-strict-bw.png?v=2"
                  alt="Aperçu 3D du tableau de bord CARPATH OS en fond N&B strict"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </SectionContenu>

        {/* 5 PILIERS DÉTAILLÉS */}
        <SectionContenu bg="base" className="py-20 lg:py-28">
          <div className="max-w-[840px] mx-auto space-y-8">
            {/* Desktop Detailed Cards */}
            <div className="hidden md:flex flex-col space-y-8">
              {pillarsData.map((pilier, idx) => (
                <motion.div
                  key={pilier.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                >
                  <CardPilier
                    id={pilier.id}
                    numberStr={pilier.numberStr}
                    title={pilier.title}
                    subtitle={pilier.subtitle}
                    description={pilier.description}
                    example={pilier.example}
                    detailed={true}
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile Accordion */}
            <div className="block md:hidden">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </SectionContenu>

        {/* COHÉRENCE DES PILIERS */}
        <SectionContenu bg="surface" className="py-20">
          <motion.div
            className="max-w-[720px] mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Heading2 className="mx-auto">
              Les 5 piliers forment un système, pas une liste à cocher
            </Heading2>

            <BodyBase className="mx-auto text-base">
              Chaque pilier est utile seul. Mais c&apos;est leur interaction qui produit une croissance durable. Une stratégie sans acquisition reste théorique. Une acquisition sans conversion gaspille des ressources. Une conversion sans fidélisation repart chaque mois de zéro. Et sans pilotage, aucun de ces piliers ne s&apos;améliore dans le temps. CARPATH les active ensemble, dans l&apos;ordre qui convient à votre situation.
            </BodyBase>

            <SystemDiagram />
          </motion.div>
        </SectionContenu>

        {/* CTA FINAL PAGE SYSTÈME */}
        <SectionCTA
          title="Quels piliers sont prioritaires pour votre entreprise ?"
          subtitle="L'audit gratuit permet de répondre à cette question pour votre situation précise. Chaque diagnostic est différent — aucun système ne se copie à l'identique d'une entreprise à l'autre."
          buttonText="Réserver mon audit gratuit"
          bg="base"
        />
      </main>
      <Footer />
    </>
  );
}
