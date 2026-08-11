import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeroInterne } from "@/components/SectionHeroInterne";
import { SectionContenu } from "@/components/SectionContenu";
import { Heading3, Heading4, BodyBase, Micro } from "@/components/Typography";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Informations légales du site carpath.fr : éditeur, hébergeur, données personnelles et cookies.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <SectionHeroInterne h1="Mentions légales" />

        {/* CONTENU LÉGAL */}
        <SectionContenu bg="base" className="py-8 md:py-12">
          <div className="max-w-[720px] mx-auto space-y-8 text-left">
            {/* Éditeur */}
            <section className="space-y-3">
              <Heading3>Éditeur du site</Heading3>
              <Divider className="my-3" />
              <div className="space-y-1 text-sm text-[var(--text-secondary)]">
                <p><strong>Raison sociale :</strong> [Nom légal de l&apos;entreprise CARPATH]</p>
                <p><strong>Forme juridique :</strong> [ex. SASU, SARL, EI…]</p>
                <p><strong>Capital social :</strong> [montant]</p>
                <p><strong>Siège social :</strong> [adresse complète]</p>
                <p><strong>SIRET :</strong> [numéro SIRET]</p>
                <p><strong>Numéro de TVA intracommunautaire :</strong> [numéro TVA]</p>
                <p><strong>Directeur de la publication :</strong> [Prénom Nom du dirigeant]</p>
                <p><strong>Contact :</strong> [adresse email de contact]</p>
              </div>
            </section>

            {/* Hébergement */}
            <section className="space-y-3">
              <Heading3>Hébergement</Heading3>
              <Divider className="my-3" />
              <div className="space-y-1 text-sm text-[var(--text-secondary)]">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
                <p>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C79A3B] underline hover:text-[var(--text-primary)]"
                  >
                    https://vercel.com
                  </a>
                </p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="space-y-3">
              <Heading3>Propriété intellectuelle</Heading3>
              <Divider className="my-3" />
              <BodyBase className="text-sm">
                L&apos;ensemble des contenus présents sur ce site (textes, visuels, logo, structure) est la propriété exclusive de [Nom légal CARPATH], sauf mention contraire. Toute reproduction, même partielle, est soumise à autorisation préalable écrite.
              </BodyBase>
            </section>

            {/* Données personnelles et RGPD */}
            <section className="space-y-4">
              <Heading3>Données personnelles et RGPD</Heading3>
              <Divider className="my-3" />
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p><strong>Responsable du traitement :</strong> [Nom légal CARPATH] — [adresse]</p>
                <p>
                  <strong>Données collectées :</strong> Le site collecte les données suivantes lors de la prise de rendez-vous via TidyCal : prénom, nom, adresse email, et informations complémentaires renseignées dans le formulaire de réservation.
                </p>
                <p>
                  <strong>Finalité du traitement :</strong> Les données collectées sont utilisées uniquement pour organiser et suivre les rendez-vous, et pour la gestion de la relation commerciale. Elles sont transmises à notre outil de gestion (Airtable) via un scénario Make.com.
                </p>
                <p>
                  <strong>Durée de conservation :</strong> [à préciser selon politique interne — ex. 3 ans à compter du dernier contact]
                </p>
                <p>
                  <strong>Vos droits :</strong> Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et de portabilité de vos données. Pour exercer ces droits, contactez : [email dédié RGPD ou email de contact].
                </p>

                <div className="pt-2 space-y-2">
                  <Heading4 className="text-base text-[var(--text-primary)]">
                    Sous-traitants impliqués :
                  </Heading4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      TidyCal (prise de rendez-vous) —{" "}
                      <a
                        href="https://tidycal.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C79A3B] underline hover:text-[var(--text-primary)]"
                      >
                        Politique de confidentialité TidyCal
                      </a>
                    </li>
                    <li>
                      Make.com (automatisation) —{" "}
                      <a
                        href="https://www.make.com/en/privacy-notice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C79A3B] underline hover:text-[var(--text-primary)]"
                      >
                        Politique de confidentialité Make
                      </a>
                    </li>
                    <li>
                      Airtable (gestion CRM) —{" "}
                      <a
                        href="https://airtable.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C79A3B] underline hover:text-[var(--text-primary)]"
                      >
                        Politique de confidentialité Airtable
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="space-y-3">
              <Heading3>Cookies</Heading3>
              <Divider className="my-3" />
              <BodyBase className="text-sm">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de pistage tiers n&apos;est déposé sans votre accord.
              </BodyBase>
            </section>

            {/* Liens hypertextes */}
            <section className="space-y-3">
              <Heading3>Liens hypertextes</Heading3>
              <Divider className="my-3" />
              <BodyBase className="text-sm">
                Ce site peut contenir des liens vers des sites tiers. CARPATH ne contrôle pas le contenu de ces sites et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.
              </BodyBase>
            </section>

            {/* Droit applicable */}
            <section className="space-y-3">
              <Heading3>Droit applicable</Heading3>
              <Divider className="my-3" />
              <BodyBase className="text-sm">
                Le présent site est soumis au droit français. Tout litige relatif à son utilisation relève de la compétence des tribunaux compétents.
              </BodyBase>
            </section>

            <div className="pt-6">
              <Micro>Page mise à jour le : 10 août 2026</Micro>
            </div>
          </div>
        </SectionContenu>
      </main>
      <Footer />
    </>
  );
}
