# Design Page — `/` (Home)

> Produit par : UI Designer  
> Source : `WIREFRAMES.md` · `content/home.md` · `design/TOKENS.md` · `design/COMPONENTS.md`  
> Texte Copywriter : ✅ Complet (modif. dirigeant : CA "150k€ à 2M€" en home.md ligne 50 — à appliquer)

---

## Vue d'ensemble

Page la plus longue du site. 9 sections + header + footer. Ordre mobile-first (identique au scroll desktop). L'œil est guidé de l'accroche → preuve → problème → solution → méthode → système → réassurance → CTA → qualification → CTA final.

---

## [HEADER]

Composant : `Header`  
Comportement : transparent au chargement, opaque + `shadow-sm` après 10px de scroll.

- Logo : variante horizontale (logo + texte "CARPATH"), hauteur 32px
- Liens : La méthode · Le système · Pour qui ?
- CTA : `ButtonPrimary` "Réserver mon audit gratuit"
- Mobile : burger, overlay slide-in droite

---

## [HERO]

Composant : `SectionHero`  
Hauteur : 100vh desktop (min-height 640px), auto mobile  
Fond : `bg-base` (#0D0D0D dark / #FFFFFF light) + trame de points (dot grid) opacité 6%, couleur `accent`

**Layout desktop :**
```
[Centré horizontalement, max-width 720px]

H1 (text-5xl, Poppins ExtraBold, text-primary) :
"Votre entreprise avance. Votre croissance, elle, piétine."

[space-6]

Sous-titre (BodyLarge, text-secondary) :
"CARPATH installe et pilote le système de croissance qui manque
à votre entreprise — pour que vous décidiez avec clarté,
pas à l'instinct."

[space-8]

[ButtonPrimary "Réserver mon audit gratuit"]  [space-4]  [ButtonSecondary "Découvrir la méthode"]

[space-12 en bas avant la prochaine section]
```

**Layout mobile :**
```
[text-hero-mobile (32px)]
"Votre entreprise avance.
Votre croissance, elle, piétine."

[space-4]
Sous-titre (BodyBase — réduit de text-lg à text-base mobile)

[space-6]
[ButtonPrimary — pleine largeur]
[space-3]
[ButtonSecondary — pleine largeur]
```

**Accent typographique :**  
Le mot "piétine" peut être mis en `text-secondary` pour créer un contraste. Le mot "clarté" peut recevoir `color: accent` si validé. Pas de décision définitive — à valider avec le dirigeant.

---

## [PREUVE RAPIDE]

Composant : `CardMetric` × 3 dans `SectionContenu` (bg-surface)  
Fond de section : `bg-surface` (#3A3A3A dark / #F2F2F2 light)

**Layout desktop :**
```
[Grid 3 colonnes, séparateurs verticaux 1px border-subtle]

Col 1 :
Valeur : "Un partenariat structuré" (Heading3, accent)
Label : "Ce qui change vraiment" (Label, text-secondary)

Col 2 :
Valeur : "150k€ → 2M€ de CA" (Heading3, accent)
Label : "Notre terrain de jeu" (Label, text-secondary)

Col 3 :
Valeur : "5 piliers" (Heading3, accent)
Label : "Les 5 piliers du système" (Label, text-secondary)
```

**Layout mobile :** 3 métriques empilées, séparateurs horizontaux.

> Note : bloc marqué ⚠️ dans content/home.md — à remplacer par vrais chiffres dès disponibles.

---

## [PROBLÈME DIRIGEANT]

Composant : `SectionContenu` standard  
Fond : `bg-base`

**Layout desktop :**
```
[max-width 720px, centré]

Heading2 : "Vous reconnaissez-vous dans cette situation ?"

[space-8]

[SectionQualification — liste 4 items]
• Vous avez des clients, de l'activité, de l'ambition — mais pas de cap clair...
• Vous testez des actions marketing sans savoir lesquelles...
• Vous manquez de temps pour structurer ce qui fonctionne...
• Vous cherchez un partenaire qui comprend votre réalité...
```

Chaque item : icône losange/point `accent` 6px + `BodyLarge` text-secondary. Séparateurs 1px `border-subtle`.

**Mobile :** liste verticale pleine largeur, même structure.

---

## [POSITIONNEMENT CARPATH]

Composant : `SectionContenu` (fond `bg-surface` pour alternance)

**Layout desktop :**
```
[Grid 2 colonnes — 60% texte / 40% illustration]

Colonne texte :
Heading2 : "CARPATH n'est pas une agence. Ce n'est pas un cabinet.
Ce n'est pas un outil."

[space-4]

BodyLarge : "CARPATH est votre copilote de croissance..."

Colonne illustration :
[Espace réservé — motif graphique évoquant tableau de bord]
→ Utiliser le motif "graphique en anneau segmenté" (noir/gris/bronze)
→ Opacité 80%, `radius-2xl`, centré dans la colonne
→ Dimensions suggérées : 280×280px
```

**Mobile :** texte d'abord (pleine largeur), illustration ensuite (centrée, 240×240px max).

---

## [MÉTHODE EN 4 ÉTAPES]

Composant : `CardEtape` × 4 dans `SectionContenu`  
Fond : `bg-base`

**Layout desktop :**
```
Heading2 (centré) : "Comment nous travaillons avec vous"

[space-8]

[Grid 4 colonnes — compacte, version home]

CardEtape 1 : "01 · icône-ecouter" / "Écouter" / 1 ligne desc
CardEtape 2 : "02 · icône-concevoir" / "Concevoir" / 1 ligne desc
CardEtape 3 : "03 · icône-piloter" / "Piloter" / 1 ligne desc
CardEtape 4 : "04 · icône-ameliorer" / "Améliorer" / 1 ligne desc

[space-6]
ButtonGhost centré : "Voir la méthode en détail →"
```

- Numéros : Heading3, `accent`
- Icônes : jeu méthode, 24px, `color: text-secondary`
- Version home = compacte (1 ligne de desc). Version détaillée = page /methode.

**Mobile :** 4 cartes empilées verticalement, ligne de connexion gauche 1px `accent`.

---

## [CARPATH OPERATING SYSTEM]

Composant : `CardPilier` × 5 dans `SectionContenu`  
Fond : `bg-surface` (alternance)

**Layout desktop :**
```
Heading2 (centré) : "Le système de croissance que nous installons chez vous"

[space-8]

[Grid 5 colonnes — compacte]

CardPilier : icône-strategie (32px, accent) / "Stratégie" / 1 ligne
CardPilier : icône-acquisition / "Acquisition" / 1 ligne
CardPilier : icône-conversion / "Conversion" / 1 ligne
CardPilier : icône-fidelisation / "Fidélisation" / 1 ligne
CardPilier : icône-pilotage / "Pilotage et optimisation" / 1 ligne

[space-6]
ButtonGhost centré : "Voir le système en détail →"
```

**Mobile :** carousel horizontal, 1,5 carte visible (indique qu'il y en a d'autres), navigation par swipe.

---

## [PREUVE SOCIALE]

Composant : `CardTestimonial` × 2 dans `SectionContenu`  
Fond : `bg-base`

**Layout desktop :**
```
Heading2 (centré) : "Ce que disent les dirigeants qui pilotent leur
croissance avec CARPATH"

[space-8]

[Grid 2 colonnes]
CardTestimonial 1  |  CardTestimonial 2
```

**Bloc alternatif (si pas de témoignages au lancement) :**
```
Heading2 : "Ce que vivent les dirigeants qui travaillent avec CARPATH"

[Liste 3 items avec icône coche accent]
• Ils passent de décisions fondées sur l'instinct...
• Ils savent enfin quelles actions marketing...
• Ils ont un partenaire qui connaît leur entreprise...
```

**Mobile :** carousel 1 carte, navigation points en bas.

---

## [CTA MILIEU DE PAGE]

Composant : `SectionCTA`  
Fond : `bg-surface` (contraste avec la section précédente)

```
Heading2 : "Vous voulez savoir si CARPATH est fait
pour votre situation ?"

[space-4]

BodyBase : "L'audit est gratuit. Il dure environ 45 minutes. Vous
repartez avec une lecture claire de vos freins de croissance —
qu'on travaille ensemble ensuite ou non."

[space-6]
[ButtonPrimary "Réserver mon audit gratuit" — centré]
```

---

## [POUR QUI]

Composant : `SectionQualification` dans `SectionContenu`  
Fond : `bg-base`

```
Heading2 : "CARPATH est fait pour vous si…"

[space-6]

Liste 4 items (icône ✓ accent) :
✓ Votre entreprise est déjà en activité...
✓ Vous dirigez une TPE ou une PME entre 150 000 € et 2 M€ de CA annuel.
✓ Vous cherchez un partenaire de long terme...
✓ Vous êtes prêt à vous impliquer...

[space-4]
ButtonGhost : "Voir la page complète Pour qui ? →"
```

> ✅ Le CA est harmonisé sur tout le site : "150k€ à 2M€" (confirmé par le dirigeant).

**Mobile :** liste verticale, icônes côté gauche.

---

## [CTA FINAL]

Composant : `SectionCTA`  
Fond : `bg-surface`

```
Heading2 : "La croissance se pilote.
Commençons par comprendre la vôtre."

[space-6]
[ButtonPrimary "Réserver mon audit gratuit" — centré]

[space-2]
Micro : "Audit gratuit · environ 45 minutes · sans engagement"
```

---

## [FOOTER]

Composant : `Footer` standard.

---

## Points d'attention pour le Front-End Engineer

1. Le hero doit détecter la position de scroll pour basculer l'opacité du header.
2. Le carousel des piliers OS (mobile) doit indiquer qu'il y a d'autres éléments (1,5 visible).
3. L'alternance `bg-base` / `bg-surface` entre sections doit être cohérente avec le mode actif.
4. L'incohérence de CA (150k€-2M€ vs 200k€-1,5M€) est à trancher avant le développement.
