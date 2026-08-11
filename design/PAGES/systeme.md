# Design Page — `/systeme`

> Produit par : UI Designer  
> Source : `WIREFRAMES.md` · `content/systeme.md` · `design/TOKENS.md` · `design/COMPONENTS.md`  
> Texte Copywriter : ✅ Complet

---

## Vue d'ensemble

Page dense mais structurée. Le risque est la sur-information : 5 piliers détaillés peuvent fatiguer. Solution : accordéon sur mobile, grille espacée sur desktop. Chaque pilier doit être lisible en 30 secondes isolément.

---

## [HEADER]

Composant : `Header` (état "Le système" actif)

---

## [HERO PAGE INTERNE]

Composant : `SectionHeroInterne`  
Fond : `bg-base`

```
[max-width 640px, centré]

H1 (text-4xl, Poppins Bold, text-primary) :
"Le CARPATH Operating System :
l'architecture de votre croissance"

[space-4]

Sous-titre (BodyLarge, text-secondary) :
"Ce n'est pas une liste de services. C'est un système cohérent,
installé dans votre entreprise, piloté dans la durée."
```

---

## [INTRO SYSTÈME]

Composant : `SectionContenu`  
Fond : `bg-surface`

```
[max-width 720px, centré]

BodyLarge (text-secondary) :
"La plupart des dirigeants de TPE et PME ont déjà essayé des actions
marketing ou commerciales séparées. Un peu de SEO par-ci, une
campagne par-là, un outil CRM jamais vraiment utilisé. Le problème
n'est pas les actions — c'est l'absence de système qui les relie.
Le CARPATH Operating System, c'est cette architecture que vous n'avez
pas encore : 5 piliers interdépendants, conçus ensemble, pilotés en
continu. Chaque pilier renforce les autres. Rien n'est laissé à
l'improvisation."
```

---

## [5 PILIERS DÉTAILLÉS]

Composant : `CardPilier` (version détaillée) + `Accordion` (mobile)  
Fond : `bg-base`

**Layout desktop — grille 1 colonne alternée (texte + exemple) :**

Pour chaque pilier, le layout est :
```
[Icône 48px, accent]  [Numéro pilier — Label, text-secondary]

Heading3 : [Titre bénéfice]
[space-4]
BodyBase : [Paragraphe contenu]
[space-4]
[Encadré exemple — bg-surface, radius-lg, padding space-4, border-left 2px border-subtle]
Label "Exemple :" (accent) + BodyBase italic : [Cas de figure]
```

**Pilier 1 — Stratégie :**
```
os-strategie.svg (48px, accent)  |  "01 / 05" (Label, text-secondary)

Heading3 : "Un cap clair pour que chaque décision soit cohérente"
BodyBase : "Sans stratégie documentée, chaque décision se prend dans le flou..."
[Encadré] Exemple : "une PME de services B2B qui n'a jamais formalisé..."
```

**Pilier 2 — Acquisition :**
```
os-acquisition.svg (48px, accent)  |  "02 / 05"
Heading3 : "Attirer les bons prospects, pas tous les prospects"
...
```

**Pilier 3 — Conversion :**
```
os-conversion.svg (48px, accent)  |  "03 / 05"
Heading3 : "Transformer l'intérêt en décision, sans forcer"
...
```

**Pilier 4 — Fidélisation :**
```
os-fidelisation.svg (48px, accent)  |  "04 / 05"
Heading3 : "Des clients qui restent, qui reviennent, qui recommandent"
...
```

**Pilier 5 — Pilotage et optimisation :**
```
os-pilotage-optimisation.svg (48px, accent)  |  "05 / 05"
Heading3 : "Décider avec des données, pas avec des impressions"
...
```

**Layout mobile — Accordion :**
- Pilier 1 ouvert par défaut
- Les 4 autres fermés
- Titre visible : icône (24px) + nom du pilier (Heading4)
- Chevron : rotation 180° à l'ouverture, transition `duration-slow`
- Contenu ouvert : BodyBase + encadré exemple

---

## [COHÉRENCE DES PILIERS]

Composant : `SectionContenu`  
Fond : `bg-surface`

```
[max-width 720px, centré]

Heading2 : "Les 5 piliers forment un système, pas une liste à cocher"

[space-4]

BodyBase : "Chaque pilier est utile seul. Mais c'est leur interaction
qui produit une croissance durable..."

[space-8]

[Schéma — Espace réservé]
→ Représentation : 5 nœuds disposés en pentagone,
  reliés par des lignes fines (1px, border-subtle),
  nœud central optionnel avec logo ou point accent.
→ Chaque nœud : cercle 48px, icône du pilier 24px, label sous le cercle
→ Fond du schéma : transparent sur bg-surface
→ Dimensions : 400×400px desktop, 280×280px mobile
→ À implémenter en SVG inline ou canvas par le Front-End Engineer.
```

---

## [CTA FINAL PAGE SYSTÈME]

Composant : `SectionCTA`  
Fond : `bg-base`

```
Heading2 : "Quels piliers sont prioritaires pour votre entreprise ?"

[space-4]

BodyBase : "L'audit gratuit permet de répondre à cette question pour
votre situation précise. Chaque diagnostic est différent — aucun
système ne se copie à l'identique d'une entreprise à l'autre."

[space-6]
[ButtonPrimary "Réserver mon audit gratuit" — centré]
```

---

## [FOOTER]

Composant : `Footer` standard.

---

## Points d'attention pour le Front-End Engineer

1. L'accordéon mobile doit s'ouvrir en `height: auto` via Framer Motion (layoutAnimation) — pas de hauteur fixe.
2. Le schéma pentagone des 5 piliers est une décision de rendu (SVG préférable pour la responsivité).
3. Les encadrés "Exemple" sont distincts du corps de texte mais pas des CTA — pas d'état interactif.
