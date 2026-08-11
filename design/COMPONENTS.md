# COMPONENTS — CARPATH Website Design System

> Produit par : UI Designer  
> Source : `design/TOKENS.md` · `WIREFRAMES.md` · `content/*.md` · `context/BRAND_CONTEXT.md`  
> Principe : sobriété avant créativité. Chaque composant inspire confiance, pas l'admiration esthétique.  
> Tous les composants sont déclinés en mode sombre (défaut) et mode clair.

---

## Conventions de notation

```
### [NOM-COMPOSANT]
États : default | hover | focus | active | disabled
Mode sombre : valeurs des tokens mode sombre
Mode clair  : valeurs des tokens mode clair
```

---

## 1. Navigation

### [HEADER]

Composant sticky en haut de page. Hauteur fixe 64px desktop, 56px mobile.

**Structure :**
```
[Logo CARPATH]     [Nav: La méthode | Le système | Pour qui ?]     [Bouton: Réserver mon audit gratuit]
```

**États & styles :**

| État | Mode sombre | Mode clair |
|---|---|---|
| Default (scroll = 0) | `bg` transparent | `bg` transparent |
| Scrolled (scroll > 0) | `bg` #0D0D0D + `shadow-sm` | `bg` #FFFFFF + `shadow-sm` |
| Nav lien — default | `text-secondary` (#F2F2F2) | `text-secondary` (#3A3A3A) |
| Nav lien — hover | `text-primary` (#FFFFFF) + soulignement `accent` 2px | `text-primary` (#0D0D0D) + soulignement `accent` 2px |
| Nav lien — active (page courante) | `accent` (#C79A3B) | `accent` (#C79A3B) |

**Mobile :**
- Logo + icône burger (3 lignes, `text-primary`)
- Menu déplié : overlay pleine hauteur, `bg-base`, liens en `text-3xl`, CTA primaire en bas
- Transition : slide-in depuis la droite, `duration-slow`

**Accessibilité :**
- `role="navigation"`, `aria-label="Navigation principale"`
- Lien burger : `aria-expanded`, `aria-controls`
- Focus visible : `shadow-accent` sur chaque élément interactif

---

### [HEADER-MINIMAL]

Variante utilisée uniquement sur `/audit-gratuit`. Navigation réduite pour éviter les distractions.

**Structure :**
```
[Logo CARPATH]                    [← Retour au site]
```

- Hauteur 56px
- Fond : `bg-base` (opaque, pas transparent)
- "Retour au site" : `ButtonGhost`, `text-sm`

---

### [FOOTER]

**Structure :**
```
[Logo]  [La méthode | Le système | Pour qui ? | Audit gratuit]
        © 2025 CARPATH — [Mentions légales]
```

- `bg-base`, border-top 1px `border-subtle`
- Padding vertical : `space-12` mobile, `space-16` desktop
- Liens : `text-sm`, `text-secondary`, hover → `text-primary`
- Copyright : `text-xs`, `text-secondary`
- Mobile : logo centré, liens en colonne, copyright centré

---

## 2. Boutons

### [ButtonPrimary]

CTA principal : "Réserver mon audit gratuit". **Un seul par section.**

| État | Mode sombre | Mode clair |
|---|---|---|
| Default | `bg` #C79A3B · `text` #0D0D0D · `radius-md` · padding `space-3` `space-6` | Identique |
| Hover | `bg` #B8893A (légèrement assombri) · `shadow-glow` (mode sombre uniquement) · translateY(-1px) | `bg` #B8893A · `shadow-md` · translateY(-1px) |
| Focus | Outline `shadow-accent` 2px offset 2px | Identique |
| Active | translateY(0) · `bg` #A07830 | Identique |
| Disabled | `opacity: 0.4` · cursor not-allowed | Identique |

- Typographie : Inter SemiBold, `text-base`, pas d'uppercase
- Icône flèche → optionnelle à droite, même couleur (#0D0D0D)
- Transition : `duration-fast` sur couleur, `duration-base` sur transform
- Largeur : auto (fit-content). Mobile : pleine largeur si dans un CTA bloc.

---

### [ButtonSecondary]

Actions secondaires : "Découvrir la méthode", "Voir le système".

| État | Mode sombre | Mode clair |
|---|---|---|
| Default | `bg` #3A3A3A · `text-primary` · border 1px #3A3A3A · `radius-md` | `bg` #F2F2F2 · `text-primary` #0D0D0D · border 1px #F2F2F2 · `radius-md` |
| Hover | border 1px `accent` · `text` `accent` | border 1px `accent` · `text` `accent` |
| Focus | `shadow-accent` | `shadow-accent` |
| Disabled | `opacity: 0.4` | Identique |

- Typographie : Inter Medium, `text-base`
- Padding identique à ButtonPrimary
- Icône → optionnelle à droite

---

### [ButtonGhost]

Actions tertiaires : "En savoir plus →", "Retour au site".

| État | Mode sombre | Mode clair |
|---|---|---|
| Default | `bg` transparent · `text-secondary` | `bg` transparent · `text-secondary` |
| Hover | `text-primary` · soulignement `accent` 1px | `text-primary` · soulignement `accent` 1px |
| Focus | `shadow-accent` | `shadow-accent` |

- Typographie : Inter Regular, `text-sm`
- Pas de padding de bouton — inline avec les textes

---

## 3. Typographie

### [Heading1]

- Poppins ExtraBold, `text-5xl` (48px) desktop / `text-hero-mobile` (32px) mobile
- `text-primary`
- `line-height: 1.1` desktop, `1.15` mobile
- `max-width: 55ch`
- Mobile-first : toujours pleine largeur de colonne

### [Heading2]

- Poppins Bold, `text-3xl` (30px)
- `text-primary`
- `max-width: 55ch`

### [Heading3]

- Poppins SemiBold, `text-2xl` (24px)
- `text-primary`

### [Heading4]

- Inter SemiBold, `text-xl` (20px)
- `text-primary`

### [BodyLarge]

- Inter Regular, `text-lg` (18px), `line-height: 1.6`
- `text-secondary`
- `max-width: 70ch`

### [BodyBase]

- Inter Regular, `text-base` (16px), `line-height: 1.6`
- `text-secondary`
- `max-width: 70ch`

### [Label]

- Inter Medium, `text-sm` (14px)
- `text-secondary`
- Utilisé pour labels de formulaire, captions

### [Micro]

- Inter Regular, `text-xs` (12px)
- `text-secondary`
- Mentions, copyright, durée/format sous les CTA

---

## 4. Cartes et blocs de contenu

### [CardPilier]

Utilisé dans : Home (bloc CARPATH OS) + Page /systeme (5 piliers détaillés).

**Structure :**
```
[Icône SVG 32px — couleur accent]
[Titre pilier — Heading4]
[Description courte — BodyBase]
```

| État | Mode sombre | Mode clair |
|---|---|---|
| Default | `bg` #3A3A3A · `radius-lg` · padding `space-6` · `shadow-md` | `bg` #F2F2F2 · `radius-lg` · padding `space-6` · `shadow-md` |
| Hover | `shadow-lg` · translateY(-2px) | `shadow-lg` · translateY(-2px) |

- Transition : `duration-base`
- Mobile : pleine largeur, empilées verticalement
- Desktop : grille 5 colonnes (OS home version compacte) ou 2–3 colonnes (page /systeme version détaillée)
- Icône : toujours couleur `accent`, jamais `text-primary`

---

### [CardEtape]

Utilisé dans : Home (bloc méthode 4 étapes) + Page /methode (4 étapes détaillées).

**Structure :**
```
[Numéro — text-2xl accent]  [Icône SVG 24px — text-secondary]
[Titre étape — Heading4]
[Description — BodyBase]
[Ce que vous vivez — BodyBase italic, text-secondary]  ← uniquement page /methode
```

| État | Mode sombre | Mode clair |
|---|---|---|
| Default | Pas de fond — bordure gauche 2px `accent` · padding-left `space-4` | Identique |
| Hover | Fond léger `bg-surface` · `radius-lg` | Identique |

- Mobile : liste verticale avec connecteur vertical entre étapes (ligne 1px `border-subtle`)
- Desktop : timeline alternée gauche/droite (décision Front-End Engineer) ou liste verticale

---

### [CardTestimonial]

Utilisé dans : Home (bloc preuve sociale).

**Structure :**
```
[Guillemets décoratifs — accent, text-3xl]
[Texte du témoignage — BodyLarge italic]
[Prénom · Secteur · CA indicatif — Label, text-secondary]
```

| État | Mode sombre | Mode clair |
|---|---|---|
| Default | `bg` #3A3A3A · `radius-lg` · padding `space-6` · `shadow-md` | `bg` #F2F2F2 · `radius-lg` · padding `space-6` · `shadow-md` |

- Mobile : carousel, 1 carte visible, swipe ou boutons prev/next
- Desktop : grille 2 colonnes côte à côte

---

### [CardMetric]

Utilisé dans : Home (bloc preuve rapide, 3 éléments).

**Structure :**
```
[Valeur / fait — Heading2 ou Heading3, accent]
[Label — Label, text-secondary]
```

| État | Mode sombre | Mode clair |
|---|---|---|
| Default | Fond transparent · séparateur vertical 1px `border-subtle` entre métriques | Identique |

- Mobile : empilées verticalement, séparateurs horizontaux
- Desktop : ligne horizontale, 3 éléments équidistants

---

### [CardReassurance]

Utilisé dans : Page /audit-gratuit (3 éléments de réassurance).

**Structure :**
```
[Icône générique 24px — accent]  (icône standard : check, horloge, cadeau — hors des 2 jeux dédiés)
[Titre court — Heading4]
[Texte — BodyBase]
```

| État | Mode sombre | Mode clair |
|---|---|---|
| Default | `bg` #3A3A3A · `radius-lg` · padding `space-6` | `bg` #F2F2F2 · `radius-lg` · padding `space-6` |

- Mobile : liste verticale
- Desktop : grille 3 colonnes

---

## 5. Sections

### [SectionHero]

Page home uniquement. Hauteur : 100vh desktop (min 640px), auto mobile.

**Structure :**
```
[Fond : bg-base + motif graphique discret (dot grid ou ligne ascendante)]
[Heading1]
[BodyLarge — sous-titre]
[gap: space-8]
[ButtonPrimary]  [ButtonSecondary]  ← côte à côte desktop, pile mobile
[space-16 en bas]
```

- Fond : `bg-base` par défaut. Motif graphique : trame de points ou ligne ascendante (voir TOKENS.md), opacité 5–8%, jamais en superposition avec le texte.
- Desktop : contenu centré horizontalement, max-width 720px
- Mobile : padding `space-12` latéral, boutons pleine largeur empilés

---

### [SectionHeroInterne]

Pages /methode, /systeme, /pour-qui. Hauteur : auto, padding vertical `space-20`.

**Structure :**
```
[Heading1]
[BodyLarge — sous-titre]
```

- Fond : `bg-base` (pas de motif graphique sur les pages internes — réservé au hero home)
- Centré, max-width 640px

---

### [SectionContenu]

Sections de contenu standard (intro, transitions, etc.)

- Padding vertical : `space-20` mobile, `space-24` desktop
- Alternance : une section sur deux en `bg-surface` pour rythmer la page
- Max-width contenu : 1280px centré

---

### [SectionCTA]

Bloc CTA pleine largeur. Utilisé : CTA milieu home, CTA fin de chaque page.

**Structure :**
```
[Heading2 — titre invitation]
[BodyBase — sous-titre / mention format]   ← optionnel
[ButtonPrimary — centré]
[Micro — "Gratuit · 45 minutes · sans engagement"]
```

| État | Mode sombre | Mode clair |
|---|---|---|
| Default | `bg` #3A3A3A (section contrastée) | `bg` #F2F2F2 |

- Padding vertical : `space-16` mobile, `space-20` desktop
- Centré horizontalement, max-width 560px
- Le ButtonPrimary est **l'unique élément interactif** de ce bloc — aucun lien secondaire dans ce bloc

---

### [SectionQualification]

Bloc "CARPATH est fait pour vous si…" — Home + page /pour-qui.

**Structure liste :**
```
[Icône check/cross — accent ou text-secondary selon positif/négatif]
[BodyLarge — critère]
```

- Séparateurs 1px `border-subtle` entre chaque critère
- Pas de fond de carte — liste sobre sur `bg-base` ou `bg-surface`

---

## 6. Formulaires

### [InputField]

Utilisé dans : embed TidyCal (géré par TidyCal) — mais documenter pour cohérence si un champ custom est nécessaire.

| État | Mode sombre | Mode clair |
|---|---|---|
| Default | `bg` #3A3A3A · border 1px #3A3A3A · `text-primary` · `radius-sm` | `bg` #F2F2F2 · border 1px #F2F2F2 · `text-primary` #0D0D0D · `radius-sm` |
| Focus | border 1px `accent` · `shadow-accent` | Identique |
| Error | border 1px #E05C5C | Identique |
| Placeholder | `text-secondary` opacity 60% | Identique |

- Hauteur : 48px (target mobile minimum AA)
- Padding : `space-4` horizontal, `space-3` vertical
- Label : au-dessus du champ, `Label`, `text-secondary`

---

## 7. Iconographie (référence)

### Jeu 1 — Méthode (4 icônes)

> **Usage exclusif** : étapes Écouter, Concevoir, Piloter, Améliorer. **Jamais utilisées pour les piliers du CARPATH OS.**

| Fichier | Étape | Description de l'icône |
|---|---|---|
| `design/icons/methode-ecouter.svg` | Écouter | Oreille + ondes sonores dans carré arrondi |
| `design/icons/methode-concevoir.svg` | Concevoir | Feuille de plan + crayon dans carré arrondi |
| `design/icons/methode-piloter.svg` | Piloter | Volant / gouvernail dans carré arrondi |
| `design/icons/methode-ameliorer.svg` | Améliorer | Flèche circulaire + courbe ascendante dans carré arrondi |

### Jeu 2 — CARPATH Operating System (5 icônes)

> **Usage exclusif** : piliers Stratégie, Acquisition, Conversion, Fidélisation, Pilotage et optimisation. **Jamais utilisées pour les étapes de la méthode.**

| Fichier | Pilier | Description de l'icône |
|---|---|---|
| `design/icons/os-strategie.svg` | Stratégie | Cible / viseur avec croix dans carré arrondi |
| `design/icons/os-acquisition.svg` | Acquisition | Entonnoir + flèches entrantes dans carré arrondi |
| `design/icons/os-conversion.svg` | Conversion | Cercle → carré arrondi + coche, flèche transformation |
| `design/icons/os-fidelisation.svg` | Fidélisation | Boucle circulaire + cœur stylisé dans carré arrondi |
| `design/icons/os-pilotage-optimisation.svg` | Pilotage et optimisation | Tableau de bord / jauge + barres d'indicateurs |

**Règles d'usage des icônes :**
- Taille d'affichage recommandée : 32px dans les cartes compactes, 48px dans les sections détaillées
- Couleur : `currentColor` — passer `color: var(--accent)` au parent pour les icônes en bronze, `color: var(--text-secondary)` pour les icônes neutres
- Jamais de remplissage plein (`fill`) sur les icônes — style ligne uniquement, `stroke-width: 1.5`

---

## 8. Composants utilitaires

### [Divider]

Séparateur horizontal.

- Mode sombre : 1px solid #3A3A3A
- Mode clair : 1px solid #F2F2F2
- Margin vertical : `space-8`

### [Badge]

Tag de catégorie ou état.

**Structure :** `[Label]` texte court

| Mode sombre | Mode clair |
|---|---|
| `bg` #3A3A3A · `text-secondary` · `radius-full` · padding `space-2` `space-4` | `bg` #F2F2F2 · `text-secondary` #3A3A3A · `radius-full` |

### [Accordion]

Utilisé dans : Page /systeme (piliers en accordéon mobile).

**Structure :**
```
[Titre pilier — Heading4]  [Icône chevron — tourne à 180° à l'ouverture]
[Contenu — BodyBase — visible uniquement à l'ouverture]
```

| État | Mode sombre | Mode clair |
|---|---|---|
| Fermé | border-bottom 1px `border-subtle` | Identique |
| Ouvert | Fond `bg-surface` · `radius-lg` · padding `space-6` | Identique |

- Transition : `duration-slow` sur la hauteur (height auto → auto via Framer Motion)
- Un seul accordéon ouvert à la fois

### [ThemeSwitch]

Bouton de bascule mode sombre / mode clair.

**Structure :** Icône soleil / lune + texte optionnel

- Placement : dans le footer ou en haut à droite du header
- État dark : icône lune active
- État light : icône soleil active
- Transition : `duration-base` sur les couleurs de page

### [ProgressSteps]

Indicateur de progression des 4 étapes de la méthode. Utilisé uniquement sur /methode.

**Structure :**
```
●—————●—————●—————●
1       2       3       4
```

- Cercles remplis `accent` pour les étapes passées, cercle vide `border-subtle` pour les futures
- Ligne de connexion : 1px `border-subtle`
- Mobile : vertical, côté gauche du contenu

---

## Inventaire d'utilisation — vérification critère 2

| Composant | Pages où utilisé (min 2) |
|---|---|
| Header | Toutes pages sauf audit-gratuit |
| Header-Minimal | audit-gratuit |
| Footer | Toutes pages |
| ButtonPrimary | Home, Methode, Systeme, Pour-qui, Audit-gratuit |
| ButtonSecondary | Home (hero), Methode (transition) |
| ButtonGhost | Header-Minimal (retour), Methode (lien), Systeme (lien) |
| CardPilier | Home (OS bloc) + Systeme |
| CardEtape | Home (méthode bloc) + Methode |
| CardTestimonial | Home (preuve sociale) — 1 seule page, bloc requis |
| CardMetric | Home (preuve rapide) — 1 seule page, bloc requis |
| CardReassurance | Audit-gratuit — 1 seule page, fonctionnelle critique |
| SectionHero | Home uniquement |
| SectionHeroInterne | Methode + Systeme + Pour-qui |
| SectionContenu | Methode + Systeme + Pour-qui + Home |
| SectionCTA | Home (×2) + Methode + Systeme + Pour-qui |
| SectionQualification | Home (qual. rapide) + Pour-qui |
| InputField | Audit-gratuit (embed TidyCal, référence) |
| Accordion | Systeme (mobile) |
| Heading1–4 | Toutes pages |
| BodyBase, BodyLarge | Toutes pages |

> CardTestimonial, CardMetric et CardReassurance sont des composants mono-page mais fonctionnellement critiques — leur unicité est justifiée par leur rôle de preuve ou de conversion.

---

*Version 1.0 — Livré au Front-End Engineer. Aucune décision de couleur, de police ou d'espacement n'est à prendre : tous les tokens sont documentés dans `design/TOKENS.md`.*
