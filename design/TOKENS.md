# CARPATH — Design Tokens

Source : `context/brand-assets/logo-typo-spec.png` et `context/brand-assets/brand-board.png`. Ce fichier est pré-rempli à partir de la charte existante — l'UI Designer l'affine mais ne le contredit pas sans validation.

Le site est **en mode sombre par défaut**, avec un **switch vers un mode clair**. Les deux jeux de tokens ci-dessous doivent exister dès le premier commit (pas de mode clair ajouté après-coup).

## Couleurs de marque (fixes, identiques dans les deux modes)

| Nom | Hex | Usage |
|---|---|---|
| `color-accent` (Bronze Mat) | `#C79A3B` | CTA principal, icônes, liens actifs, highlights. Accent uniquement — jamais en aplat de fond large (règle de marque : ~5% de la surface visuelle max). |
| `color-black` (Noir) | `#0D0D0D` | Texte / fond selon le mode, voir tableaux ci-dessous. |
| `color-white` (Blanc) | `#FFFFFF` | Texte / fond selon le mode, voir tableaux ci-dessous. |
| `color-gray-light` (Gris clair) | `#F2F2F2` | Texte / fond selon le mode. |
| `color-gray-dark` (Gris foncé) | `#3A3A3A` | Texte / fond selon le mode. |

## Mode sombre (par défaut)

| Token sémantique | Valeur | Usage |
|---|---|---|
| `bg-base` | `#0D0D0D` | Fond de page, dominant. |
| `bg-surface` | `#3A3A3A` | Cartes, blocs élevés, sections alternées. |
| `text-primary` | `#FFFFFF` | Titres, texte à forte emphase. |
| `text-secondary` | `#F2F2F2` | Corps de texte, moins de contraste que le titre. |
| `border-subtle` | `#3A3A3A` | Séparateurs, contours de champs. |
| `accent` | `#C79A3B` | CTA, icônes, liens, highlights. |

## Mode clair (switchable)

| Token sémantique | Valeur | Usage |
|---|---|---|
| `bg-base` | `#FFFFFF` | Fond de page, dominant (règle 75% blanc de la charte). |
| `bg-surface` | `#F2F2F2` | Cartes, blocs élevés, sections alternées. |
| `text-primary` | `#0D0D0D` | Titres, texte à forte emphase. |
| `text-secondary` | `#3A3A3A` | Corps de texte, moins de contraste que le titre. |
| `border-subtle` | `#F2F2F2` | Séparateurs, contours de champs. |
| `accent` | `#C79A3B` | CTA, icônes, liens, highlights — identique aux deux modes. |

Note pour le Front-End Engineer : implémenter le switch via une classe/attribut sur `<html>` (ex. `data-theme="dark"` / `data-theme="light"`) et des variables CSS, pas via deux jeux de composants dupliqués. Mode sombre actif par défaut au premier chargement (pas de dépendance à la préférence système en v1, sauf décision contraire).

## Typographie

- **Titres (H1–H4, éléments principaux)** : Poppins — SemiBold / Bold / ExtraBold.
- **Corps de texte, UI, boutons, labels** : Inter — Regular / Medium / SemiBold.
- **Logotype "CARPATH"** : Poppins Medium, majuscules, tracking +80 (~3% de la taille de police). Ce traitement est réservé au logo lui-même, il ne doit jamais être appliqué à un H1 ou à un titre de section — c'est une signature graphique, pas un style de titre réutilisable.

## Espacement

Le brand book définit une unité `x` = hauteur du cercle central du logo, utilisée uniquement comme marge de sécurité autour du logo. Ce n'est pas une échelle d'espacement pour le reste du site. L'UI Designer doit définir une échelle de spacing classique (ex. base 4px ou 8px, paliers 4/8/16/24/32/48/64) et documenter tout écart dans ce fichier une fois fixée — rien n'est imposé par la charte sur ce point.

## Boutons

| Variante | Fond | Texte | Bordure | Usage |
|---|---|---|---|---|
| Primaire | `accent` (#C79A3B) | `#0D0D0D` (noir, pas blanc — contraste validé sur le bronze) | aucune | CTA principal : "Réserver mon audit gratuit". Un seul bouton primaire visible par section. |
| Secondaire | `bg-surface` | `text-primary` | 1px `border-subtle` | Actions secondaires : "Découvrir notre méthode". |
| Tertiaire / ghost | transparent | `text-primary` | aucune ou soulignement au hover | Actions basses priorité : "En savoir plus". |

CTA de référence unique sur tout le site : **"Réserver mon audit gratuit"**. Aucun autre libellé ne doit être utilisé pour l'action de prise de rendez-vous (pas de "Prendre rendez-vous", pas de "Contactez-nous" en CTA principal).

## Iconographie

Style de référence, à conserver pour toute nouvelle icône : ligne fine, cohérente avec le motif du logo (carrés arrondis). Le set existant (cible, 4-carrés, jauge, graphique en barres, bouclier) sert de référence stylistique mais **n'est pas réutilisé tel quel** — deux jeux d'icônes dédiés sont à produire, un par structure (voir `context/BRAND_CONTEXT.md`), jamais mélangés ni réaffectés d'un jeu à l'autre :

1. **Icônes de la méthode** (4, une par étape) : Écouter, Concevoir, Piloter, Améliorer.
2. **Icônes du CARPATH Operating System** (5, une par pilier) : Stratégie, Acquisition, Conversion, Fidélisation, Pilotage et optimisation.

Aucune de ces 9 icônes n'existe encore dans le style final — à produire par l'UI Designer (ou en génération d'image dédiée) dans le style ligne fine du logo, pas en repartant d'une librairie générique (Lucide, Font Awesome) sans adaptation du trait.

## Motifs graphiques (à utiliser avec parcimonie)

- Anneau circulaire fin en `accent`, décoratif.
- Graphique en anneau segmenté (noir / gris / bronze) — évoque la répartition/pilotage, utilisable en illustration data-viz.
- Trame de points (dot grid) — fond de section, très discret.
- Ligne de tendance ascendante — évoque la croissance, utilisable en fond de hero ou de bloc résultats.

Ces motifs illustrent le thème "pilotage / tableau de bord", cohérent avec l'univers visuel de marque (montagne, chemin, boussole, dashboard sombre). Ne pas en abuser : un motif par section maximum, jamais en superposition avec du texte à faible contraste.

## Incohérences connues à trancher séparément (hors scope tokens)

- Nomenclature des 5 piliers : tranchée. Version officielle = **Stratégie, Acquisition, Conversion, Fidélisation, Pilotage et optimisation** (CARPATH Operating System), voir `context/BRAND_CONTEXT.md`. Les libellés "Organisation/Croissance/Confiance" et "Clarté/Structure" vus sur d'anciens supports sont obsolètes. Reste ouvert : 9 icônes à produire (5 piliers + 4 étapes de méthode), aucune ne peut être reprise du set existant, voir section Iconographie ci-dessus.
- Le carnet imprimé affiche la méthode "Comprendre, Structurer, Automatiser, Piloter" ; la version officielle retenue pour le site est **Écouter, Concevoir, Piloter, Améliorer** (confirmé). Les supports imprimés existants sont donc désynchronisés — hors scope du Website Squad, à corriger séparément si besoin.
