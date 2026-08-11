# Design Page — `/mentions-legales`

> Produit par : UI Designer  
> Source : `WIREFRAMES.md` · `content/mentions-legales.md` · `design/TOKENS.md` · `design/COMPONENTS.md`  
> Texte Copywriter : ⚠️ **PARTIEL** — Structure complète, mais les informations entre `[crochets]` doivent être complétées par le dirigeant CARPATH avant mise en ligne (raison sociale, SIRET, adresse, hébergeur, etc.). Page publiable uniquement après remplissage de ces champs.

---

## Vue d'ensemble

Page administrative hors tunnel de conversion. Pas de CTA. Design sobre au maximum : hiérarchie typographique seule, aucun composant de marketing. L'objectif est la lisibilité légale, pas la persuasion.

---

## [HEADER]

Composant : `Header` standard (navigation complète)  
Comportement : transparent → opaque au scroll, identique aux autres pages.

---

## [HERO PAGE INTERNE — simplifié]

Fond : `bg-base`  
Padding vertical : `space-16` desktop, `space-12` mobile

```
[max-width 640px, aligné à gauche dans la colonne de contenu]

H1 (text-4xl, Poppins Bold, text-primary) :
"Mentions légales"

[Pas de sous-titre — H1 est suffisamment direct]
[Pas de ButtonPrimary — page hors conversion]
```

---

## [CONTENU LÉGAL]

Composant : `SectionContenu` unique (fond `bg-base` uniforme sur toute la page — pas d'alternance `bg-surface`)  
Max-width : 720px aligné à gauche  
Padding vertical : `space-12` desktop, `space-8` mobile

### Structure typographique par section

Chaque section du texte légal utilise :
- **Titre de section** : Heading3 (`text-2xl`, Poppins SemiBold, `text-primary`)
- **Champs et valeurs** : BodyBase (`text-base`, Inter Regular, `text-secondary`)
- **Séparateur entre sections** : `Divider` (1px `border-subtle`, margin `space-8`)

```
[Section : Éditeur du site]
Heading3 : "Éditeur du site"
[Divider]
BodyBase :
  Raison sociale : [Nom légal de l'entreprise CARPATH]
  Forme juridique : [ex. SASU, SARL, EI…]
  Capital social : [montant]
  Siège social : [adresse complète]
  SIRET : [numéro SIRET]
  Numéro de TVA intracommunautaire : [numéro TVA]
  Directeur de la publication : [Prénom Nom du dirigeant]
  Contact : [adresse email de contact]
```

```
[Section : Hébergement]
Heading3 : "Hébergement"
[Divider]
BodyBase :
  Hébergeur : [Nom de l'hébergeur — Vercel, OVH, etc.]
  Adresse : [adresse de l'hébergeur]
  Site web : [url de l'hébergeur]
```

```
[Section : Propriété intellectuelle]
Heading3 : "Propriété intellectuelle"
[Divider]
BodyBase : "L'ensemble des contenus présents sur ce site (textes, visuels, logo, structure)
est la propriété exclusive de [Nom légal CARPATH], sauf mention contraire.
Toute reproduction, même partielle, est soumise à autorisation préalable écrite."
```

```
[Section : Données personnelles et RGPD]
Heading3 : "Données personnelles et RGPD"
[Divider]
BodyBase : responsable du traitement, données collectées, finalité,
durée de conservation, droits (cf. content/mentions-legales.md)

  Sous-section :
  Heading4 : "Sous-traitants impliqués"   ← niveau 4, sous-section de RGPD
  BodyBase : liste avec liens hypertextes accent (TidyCal · Make.com · Airtable)
  → target="_blank" rel="noopener noreferrer"
```

```
[Section : Cookies]
Heading3 : "Cookies"
[Divider]
BodyBase : "Ce site utilise des cookies techniques nécessaires à son bon fonctionnement…"
```

```
[Section : Liens hypertextes]
Heading3 : "Liens hypertextes"
[Divider]
BodyBase : "Ce site peut contenir des liens vers des sites tiers…"
```

```
[Section : Droit applicable]
Heading3 : "Droit applicable"
[Divider]
BodyBase : "Le présent site est soumis au droit français…"
```

```
[Pied de contenu]
Micro (text-xs, text-secondary, margin-top space-8) :
"Page mise à jour le : [date de mise en ligne ou dernière mise à jour]"
```

**Notes design :**
- Fond `bg-base` uniforme sur toute la page — pas d'alternance. L'uniformité renforce le caractère documentaire.
- Les liens hypertextes dans le corps légal utilisent `color: accent`, `text-decoration: underline`, hover → `text-primary`.
- Aucun `bg-surface` ni `shadow` sur les blocs de cette page — typographie seule.

---

## [FOOTER]

Composant : `Footer` standard.

---

## Points d'attention pour le Front-End Engineer

1. Cette page ne contient aucun `ButtonPrimary` — pas de CTA de conversion.
2. Les `[crochets]` dans `content/mentions-legales.md` sont des placeholders éditoriaux — les laisser visibles en développement, remplacer avant mise en ligne.
3. Les liens vers les politiques de confidentialité des sous-traitants s'ouvrent en `target="_blank" rel="noopener noreferrer"`.
4. `<title>` : `"Mentions légales | CARPATH"` — aucune optimisation conversion.
5. Cette page est référencée uniquement depuis le `Footer` — pas dans la navigation principale.
