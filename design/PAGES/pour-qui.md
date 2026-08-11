# Design Page — `/pour-qui`

> Produit par : UI Designer  
> Source : `WIREFRAMES.md` · `content/pour-qui.md` · `design/TOKENS.md` · `design/COMPONENTS.md`  
> Texte Copywriter : ✅ Complet  
> ✅ Le CA est harmonisé sur tout le site : "150 000 € à 2 M€" (confirmé par le dirigeant).

---

## Vue d'ensemble

Page de qualification. Ton direct et honnête. Le design doit renforcer la crédibilité de la sélectivité : montrer qu'on choisit ses clients est un signal de confiance, pas d'arrogance. Le CTA n'apparaît qu'après les sections de qualification.

---

## [HEADER]

Composant : `Header` (état "Pour qui ?" actif)

---

## [HERO PAGE INTERNE]

Composant : `SectionHeroInterne`  
Fond : `bg-base`

```
[max-width 580px, centré]

H1 (text-4xl, Poppins Bold, text-primary) :
"CARPATH est fait pour vous si…"

[space-4]

Sous-titre (BodyLarge, text-secondary) :
"Nous ne cherchons pas à travailler avec tout le monde. Nous
cherchons les dirigeants avec qui un partenariat de croissance a du
sens — pour eux comme pour nous. Voici comment vérifier."
```

---

## [PORTRAIT DU DIRIGEANT IDÉAL]

Composant : `SectionQualification` dans `SectionContenu`  
Fond : `bg-surface`

**Titre :**
```
Heading2 : "Vous êtes probablement la bonne personne si…"
```

**Liste 5 critères positifs (✓) :**

```
[Chaque item :]
[Icône check — 20px, accent]  [Texte — BodyLarge]
[Séparateur 1px border-subtle]

✓ Votre entreprise est déjà en activité, avec des clients, un
  chiffre d'affaires, une réputation à défendre...

✓ Votre CA annuel se situe entre 150 000 € et 2 M€...

✓ Vous cherchez un partenaire durable, pas une prestation unique...

✓ Vous avez identifié un potentiel de développement...

✓ Vous êtes prêt à vous impliquer...
```

Design de l'icône ✓ : cercle 20px `bg-surface`/`bg-base` alterné, coche stroke `accent` 1.5px.  
**Pas de cartes** — liste sobre sur fond `bg-surface`. La sobriété renforce la crédibilité.

---

## [CE QUE CARPATH N'EST PAS]

Composant : `SectionQualification` dans `SectionContenu`  
Fond : `bg-base`

**Titre :**
```
Heading2 : "CARPATH n'est probablement pas pour vous si…"
```

**Liste 3 critères négatifs (✗) :**

```
[Icône X — 20px, text-secondary (pas accent — signal neutre, pas alarme)]

✗ Vous démarrez votre activité...

✗ Vous cherchez une prestation ponctuelle...

✗ Vous voulez des résultats sans vous y impliquer...
```

**Encadré bienveillant :**
```
[bg-surface, radius-lg, padding space-4, border-left 2px border-subtle]
BodyBase italic, text-secondary :
"Ce n'est pas un rejet — c'est une honnêteté. Travailler ensemble
sans que les conditions soient réunies ne rendrait service à personne."
```

Design : icônes ✗ en `text-secondary` (gris, pas rouge) — signal de clarté, pas de rejet agressif.

---

## [SECTEURS & CONTEXTES]

Composant : `SectionContenu`  
Fond : `bg-surface`

```
Heading2 : "Les contextes dans lesquels nous intervenons"

[space-4]

BodyBase : "Il n'y a pas de secteur exclusif. Ce qui compte, c'est
le stade de développement et l'intention du dirigeant. Voici les
types de situations où nous intervenons le plus souvent :"

[space-6]

[Liste 5 items — style simple, pas de cartes]
• Entreprises de services B2B...
• Commerces et artisans...
• TPE familiales en phase de transmission...
• PME industrielles ou de distribution...
• Dirigeants fondateurs...
```

Mobile : liste verticale pleine largeur, puces `accent`.  
Desktop : liste sur 2 colonnes si l'espace le permet.

> ⚠️ Note : si des cas concrets ou secteurs spécifiques sont ajoutés par le dirigeant, la liste peut évoluer en grille de badges (`Badge` component) dans une v2.

---

## [CTA CONDITIONNEL]

Composant : `SectionCTA`  
Fond : `bg-base`

```
Heading2 : "Vous vous reconnaissez ?
C'est le moment de vérifier ensemble."

[space-4]

BodyBase : "L'audit gratuit, c'est 45 minutes pour regarder votre
situation sans filtre — vos freins, votre potentiel, ce qu'un
système de croissance pourrait changer pour vous. Sans engagement
de votre part."

[space-6]

[ButtonPrimary "Réserver mon audit gratuit" — centré]

[space-2]
Micro : "Gratuit · environ 45 minutes · aucun engagement"
```

Position : ce CTA est visible uniquement après avoir scrollé les 4 sections précédentes. Pas de CTA dans le hero ni dans les sections de qualification — le visiteur doit d'abord lire.

---

## [FOOTER]

Composant : `Footer` standard.

---

## Points d'attention pour le Front-End Engineer

1. Aucun CTA primaire visible dans le hero ou les blocs de qualification — il n'apparaît qu'en `SectionCTA` finale.
2. Les icônes ✓ et ✗ sont des micro-SVG inline (coche et croix), **hors des deux jeux d'icônes dédiés** (méthode / CARPATH OS).
3. L'incohérence de CA (home vs pour-qui) doit être résolue avant codage.
