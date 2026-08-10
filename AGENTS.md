# CARPATH — Website Squad (Antigravity)

Ce fichier est le registre d'agents pour la construction et l'évolution du site CARPATH. Il est destiné à être placé à la racine du repo GitHub du site. Antigravity le lit pour découvrir les agents disponibles dans `.agents/agents/{nom}/agent.md`.

À copier tel quel (dossier `context/` et `.agents/` inclus) à la racine du repo dès que le projet Next.js est initialisé.

## Squad

| Ordre | Agent | Dossier | Rôle |
|---|---|---|---|
| 1 | UX Architect | `.agents/agents/ux-architect/` | Sitemap, wireframes, user flow |
| 2 | Copywriter | `.agents/agents/copywriter/` | Tous les contenus texte du site |
| 3 | UI Designer | `.agents/agents/ui-designer/` | Design system, maquettes, composants |
| 4 | Front-End Engineer | `.agents/agents/frontend-engineer/` | Développement Next.js/Tailwind/Framer Motion |
| 5 | Brand Guardian | `.agents/agents/brand-guardian/` | Contrôle qualité marque, gate avant merge |
| 6 | CRO Specialist | `.agents/agents/cro-specialist/` | Audit conversion en continu, post-launch |

## Pipeline (content-first)

```
UX Architect
   → produit sitemap + wireframes + user flow
Copywriter
   → écrit le texte final sur la structure de l'UX Architect
UI Designer
   → dessine l'interface autour du texte réel (pas de lorem ipsum)
Front-End Engineer
   → développe le site à partir des specs UI + du texte final
Brand Guardian
   → review obligatoire avant tout merge sur main
CRO Specialist
   → audite le site en production, propose des hypothèses de test
```

Règle de bouclage : si le CRO Specialist propose un changement de texte, ce changement repasse par le Copywriter (jamais de réécriture directe). S'il propose un changement visuel, il repasse par l'UI Designer. Le CRO Specialist priorise et argumente, il n'exécute pas.

## Règle commune à tous les agents

Avant toute production, lire `context/BRAND_CONTEXT.md`. Aucun agent ne peut déroger aux règles non négociables qui y sont listées (mots interdits, pas de promesse garantie, dirigeant = pilote). Le Brand Guardian bloque tout PR qui les enfreint.

## Décisions prises

- CRM de CARPATH (agence) : Airtable. Systeme.io est abandonné pour cet usage. Tout contact qualifié depuis le site atterrit dans la base Airtable CARPATH, via Make.com.
- Cette base Airtable est aussi le prototype du CRM que CARPATH déploiera ensuite chez ses clients (dogfooding).
- Outil de prise de rendez-vous : TidyCal (déjà en possession). Aucun connecteur Make officiel, mais TidyCal expose des webhooks natifs (booking créé / annulé / reprogrammé) : le module Webhooks générique de Make suffit, pas de négociation d'accès nécessaire.
- Flux de conversion verrouillé : CTA du site → embed/lien TidyCal → webhook TidyCal → scénario Make → ligne créée dans la base Airtable CARPATH.
- Design tokens verrouillés dans `design/TOKENS.md`, à partir de la charte existante (`context/brand-assets/`).
- Mode d'affichage : **sombre par défaut**, avec switch vers un mode clair. Les deux jeux de tokens existent dès le premier commit.
- Méthode officielle CARPATH pour le site : **Écouter, Concevoir, Piloter, Améliorer** (version des documents écrits, pas celle du carnet imprimé).
- CTA principal unique sur tout le site : **"Réserver mon audit gratuit"**.

## Ce qui manque encore et bloque le pipeline

- Décision sur l'hébergement/déploiement (Vercel par défaut avec cette stack).
- 9 icônes à produire dans le style du logo : 5 pour les piliers du CARPATH Operating System (Stratégie, Acquisition, Conversion, Fidélisation, Pilotage et optimisation) + 4 pour la méthode (Écouter, Concevoir, Piloter, Améliorer). Le set existant ne peut pas être réutilisé. À produire avant que l'UI Designer finalise `design/COMPONENTS.md` — voir `design/TOKENS.md`.
