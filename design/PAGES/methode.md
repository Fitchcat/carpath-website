# Design Page — `/methode`

> Produit par : UI Designer  
> Source : `WIREFRAMES.md` · `content/methode.md` · `design/TOKENS.md` · `design/COMPONENTS.md`  
> Texte Copywriter : ✅ Complet

---

## Vue d'ensemble

Page de contenu structurée. 5 sections + header + footer. L'objectif est de rendre la méthode tangible et rassurante : le visiteur doit se projeter dans chaque étape. Ton sobre, hiérarchie claire, pas d'ornementation inutile.

---

## [HEADER]

Composant : `Header` (état "La méthode" actif — lien en couleur `accent`)  
Comportement identique à la home (transparent → opaque au scroll).

---

## [HERO PAGE INTERNE]

Composant : `SectionHeroInterne`  
Fond : `bg-base`  
Padding vertical : `space-20` desktop, `space-16` mobile

```
[max-width 640px, centré]

H1 (text-4xl, Poppins Bold, text-primary) :
"La méthode CARPATH : 4 étapes pour installer
et piloter votre croissance"

[space-4]

Sous-titre (BodyLarge, text-secondary) :
"Avant de concevoir quoi que ce soit, nous écoutons. Avant de
piloter, nous concevons. Chaque étape a un rôle précis — et
vous savez toujours où vous en êtes."
```

Pas de CTA dans ce bloc — le hero interne oriente, il ne convertit pas encore.

---

## [INTRO MÉTHODE]

Composant : `SectionContenu`  
Fond : `bg-surface` (alternance)  
Max-width : 720px centré

```
BodyLarge (text-secondary) :
"La croissance ne s'improvise pas. Elle se construit avec méthode,
elle se pilote avec des indicateurs, elle s'améliore en continu.
Ce n'est pas une promesse abstraite : c'est un processus structuré,
éprouvé, que CARPATH applique à chaque partenariat. Vous n'avez pas
à tout réinventer — vous avez à piloter."
```

Aucun titre dans ce bloc — le texte est la réponse directe au H1. Pas de CTA ici.

---

## [4 ÉTAPES DÉTAILLÉES]

Composant : `CardEtape` × 4 (version détaillée) dans `SectionContenu`  
Fond : `bg-base`

**Indicateur de progression (ProgressSteps) :**
```
Desktop : horizontal, en haut des 4 étapes
●——————●——————●——————●
01      02      03      04
Écouter  Concevoir  Piloter  Améliorer
```
- Cercles : 12px diamètre, `bg-surface` border 1px `border-subtle`
- Actif : `bg-accent`, pas de texte dans le cercle
- Ligne de connexion : 1px `border-subtle`
- Mobile : vertical, côté gauche, reste visible lors du scroll

**Chaque étape — layout desktop (alternance gauche/droite) :**

**Étape 1 — Écouter :**
```
[Gauche]
Numéro "01" (Heading3, accent) + icône methode-ecouter.svg (32px, text-secondary)
Heading3 : "Comprendre votre réalité avant de proposer quoi que ce soit"
BodyBase : "Nous commençons par un audit complet..."
BodyBase italic : "Ce que vous vivez : Vous êtes entendu, pas vendu..."

[Encadré spécial — bg-surface, radius-lg, padding space-4, border-left 2px accent]
BodyBase : "💡 C'est cette étape que vous vivez lors de votre audit gratuit."
```

**Étape 2 — Concevoir :**
```
[Droite — même structure]
"02" + icône methode-concevoir.svg
Heading3 : "Construire votre système de croissance sur-mesure"
BodyBase : paragraphe + "Ce que vous vivez"
```

**Étape 3 — Piloter :**
```
[Gauche]
"03" + icône methode-piloter.svg
Heading3 : "Mettre le système en marche et suivre les indicateurs"
...
```

**Étape 4 — Améliorer :**
```
[Droite]
"04" + icône methode-ameliorer.svg
Heading3 : "Affiner en continu ce qui produit des résultats"
...
```

**Mobile :** liste verticale, ligne de progression gauche 1px `accent`, numéro à gauche, contenu à droite.

---

## [TRANSITION VERS LE SYSTÈME]

Composant : `SectionContenu`  
Fond : `bg-surface`

```
[max-width 640px, centré]

Heading2 : "Et concrètement, qu'est-ce que je reçois ?"

[space-4]

BodyBase : "La méthode décrit le chemin. Le CARPATH Operating System
décrit ce que vous avez entre les mains à l'arrivée : 5 piliers de
croissance installés dans votre entreprise, pilotés en continu."

[space-6]

ButtonSecondary : "Découvrir le CARPATH Operating System →"
```

---

## [CTA FINAL PAGE MÉTHODE]

Composant : `SectionCTA`  
Fond : `bg-base`

```
Heading2 : "L'audit gratuit, c'est l'étape Écouter —
appliquée à votre situation."

[space-4]

BodyBase : "45 minutes pour comprendre où vous en êtes et ce que votre
système de croissance devrait couvrir en priorité. Sans engagement."

[space-6]

[ButtonPrimary "Réserver mon audit gratuit" — centré]
```

---

## [FOOTER]

Composant : `Footer` standard.

---

## Points d'attention pour le Front-End Engineer

1. L'indicateur `ProgressSteps` est informatif uniquement — pas interactif (pas de scroll-to-step au clic en v1).
2. L'alternance gauche/droite des étapes est desktop uniquement — mobile = liste verticale pure.
3. L'encadré "💡 audit gratuit = étape Écouter" doit être visuellement distinct (fond `bg-surface` + bordure `accent`) sans être un bouton.
