# CARPATH — Design Tokens

Source : `context/brand-assets/logo-typo-spec.png` et `context/brand-assets/brand-board.png`. Ce fichier est pré-rempli à partir de la charte existante — l'UI Designer l'affine mais ne le contredit pas sans validation.

Le site est **en mode sombre par défaut**, avec un **switch vers un mode clair**. Les deux jeux de tokens ci-dessous doivent exister dès le premier commit (pas de mode clair ajouté après-coup).

## Direction premium — correctif retour utilisateur (v1 jugée trop plate)

La v1 a été jugée "basique", pas assez haut de gamme (référence visée : niveau Webflow/Framer showcase). Diagnostic précis, à corriger :

1. **Imagerie interdite : pas de photo de stock générique.** `copilot-human.png` (deux cadres en costume, bureau vitré générique) est à bannir — ce type d'image "stock corporate" lit comme cheap, pas premium. Toute photo de personnes doit être soit supprimée au profit d'un visuel abstrait/produit, soit remplacée par quelque chose de spécifique à CARPATH, jamais un cliché générique de stock photography.
2. **Erreur de marque bloquante :** `dashboard-mockup.png` affiche le logo et le nom "ALPHA CORP" au lieu de CARPATH. À régénérer avec la charte CARPATH exacte (logo carrés arrondis + bronze, wordmark correct) — aucune image avec un autre nom de marque ne doit jamais être utilisée.
3. **Traitement photo obligatoire : "color pop" — noir et blanc avec un ou deux éléments en bronze réel dans l'image.** Ce n'est pas un filtre CSS uniforme (pas de `grayscale(100%)` appliqué bêtement sur toute l'image, pas de duotone global). C'est une photo où l'essentiel est en noir et blanc pur, et où un élément précis et intentionnel de la scène reste en couleur bronze pour attirer l'œil — technique de photographie "selective color". Palette stricte : noir, blanc, bronze uniquement. Jamais d'autre couleur, ni en photo ni en UI.
   Exemple concret pour `mountain-path.png` : régénérer l'image en noir et blanc pur (montagne, ciel, silhouette du randonneur) avec uniquement le chemin lui-même conservé en couleur bronze/or — le chemin doré qui serpente devient le point focal coloré au milieu d'un paysage monochrome. C'est un signature visuel fort et cohérent avec le nom CARPATH (le chemin).
   Ne pas tenter de simuler ça avec un filtre CSS après coup (impossible proprement sans masque manuel) — régénérer directement les images avec cette direction artistique explicite au moment de la génération.
   En complément, le bronze peut aussi apparaître en chrome UI autour des photos (bordure fine, halo diffus, badges) — mais l'accent principal doit venir de l'intérieur de la photo elle-même.
4. **Hero en plein écran, pas en petite carte.** L'image `mountain-path.png` (traitée en duotone) doit être le fond plein-bleed de la section hero, avec un dégradé sombre par-dessus (`from-[#0D0D0D] via-[#0D0D0D]/70 to-transparent`) pour garantir la lisibilité du texte — pas une carte de 480px dans une colonne à droite. Référence de composition : hero cinématographique plein écran, texte en overlay, comme un site Framer haut de gamme.
5. **Animations au scroll partout, pas seulement à l'arrivée sur la page.** Chaque section doit avoir une révélation Framer Motion au scroll (`whileInView`, pas seulement `animate` au montage) : fade + translateY léger. Les cartes et boutons ont des micro-interactions au survol (léger scale ou glow bronze). Pas de site qui semble figé après le premier écran.
6. **Typographie plus dramatique.** Les H1 doivent être significativement plus grands et plus contrastés (poids ExtraBold sur desktop, tracking resserré) pour un effet éditorial fort — la v1 est trop sage sur la hiérarchie typographique.

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

Le brand book définit une unité `x` = hauteur du cercle central du logo, utilisée uniquement comme marge de sécurité autour du logo. Ce n'est pas une échelle d'espacement pour le reste du site.

**Échelle base 4 px** (multiple de 4, paliers doublés à partir de 16 px) :

| Token | Valeur px | Valeur rem | Usage principal |
|---|---|---|---|
| `space-1` | 4px | 0.25rem | Micro-écart interne (icône ↔ texte) |
| `space-2` | 8px | 0.5rem | Padding inline compact (badge, tag) |
| `space-3` | 12px | 0.75rem | Padding vertical bouton |
| `space-4` | 16px | 1rem | Gap standard entre éléments proches |
| `space-6` | 24px | 1.5rem | Gap entre groupes (titre ↔ corps) |
| `space-8` | 32px | 2rem | Gap entre blocs dans une section |
| `space-12` | 48px | 3rem | Padding interne d'une section mobile |
| `space-16` | 64px | 4rem | Padding interne d'une section desktop compact |
| `space-20` | 80px | 5rem | Padding vertical section standard |
| `space-24` | 96px | 6rem | Padding vertical section large (desktop) |
| `space-32` | 128px | 8rem | Padding vertical hero (desktop) |

Note d'implémentation : utiliser `padding-block` / `gap` CSS, pas de margin ad-hoc. La marge de sécurité logo (`x`) est gérée séparément dans les fichiers de composant Logo — elle n'entre pas dans cette échelle.

## Rayons de bordure

| Token | Valeur | Usage |
|---|---|---|
| `radius-sm` | 4px | Champs de formulaire, éléments compacts |
| `radius-md` | 8px | Boutons (ButtonPrimary, ButtonSecondary, ButtonGhost encadré) |
| `radius-lg` | 12px | Cartes (CardPilier, CardTestimonial, CardReassurance, CardEtape hover) |
| `radius-xl` | 16px | Blocs section illustrés (motif graphique anneau) |
| `radius-2xl` | 24px | Éléments visuels larges (illustration anneau segmenté dans Positionnement) |
| `radius-full` | 9999px | Badges, puces, indicateurs circulaires (ProgressSteps nœuds) |

Note : Le motif carrés arrondis du logo utilise `rx="10" ry="10"` (10px) dans ses SVG. Les icônes du jeu méthode et du jeu CARPATH OS utilisent ce même rayon 10px pour leur contour carré — c'est intentionnel pour assurer la cohérence avec l'identité graphique.

## Ombres

Toutes les ombres sont définies pour les deux modes. Mode sombre : ombres plus diffuses (fond sombre masque les ombres noires — utiliser `accent` très dilué ou ombre portée vers le haut). Mode clair : ombres classiques noires à faible opacité.

| Token | Mode sombre | Mode clair | Usage |
|---|---|---|---|
| `shadow-sm` | `0 1px 4px rgba(0,0,0,0.4)` | `0 1px 4px rgba(0,0,0,0.08)` | Header au scroll, séparateurs légers |
| `shadow-md` | `0 4px 16px rgba(0,0,0,0.5)` | `0 4px 16px rgba(0,0,0,0.10)` | Cartes (CardPilier, CardTestimonial, CardReassurance) — état default |
| `shadow-lg` | `0 8px 32px rgba(0,0,0,0.6)` | `0 8px 32px rgba(0,0,0,0.14)` | Cartes en hover (translateY -2px) |
| `shadow-accent` | `0 0 0 2px rgba(199,154,59,0.6)` | `0 0 0 2px rgba(199,154,59,0.4)` | Focus visible sur éléments interactifs (outline AA WCAG) |
| `shadow-glow` | `0 4px 20px rgba(199,154,59,0.25)` | — | ButtonPrimary hover en mode sombre uniquement — évoque l'accent bronze |

Note : `shadow-accent` sert d'outline de focus pour tous les éléments interactifs (boutons, liens, champs). Garantit un rapport de contraste focus ≥ 3:1 (WCAG 2.1 AA, critère 2.4.7).

## Durées et courbes d'animation

| Token | Valeur | Courbe | Usage |
|---|---|---|---|
| `duration-fast` | 100ms | `ease-out` | Couleur au hover (bouton, lien) — quasi-instantané |
| `duration-base` | 200ms | `ease-out` | Transform translateY, opacity, couleur de fond |
| `duration-slow` | 350ms | `ease-in-out` | Accordion height, menu burger overlay, ThemeSwitch |

Règle : aucune animation purement décorative (CARPATH, sobriété avant créativité). Chaque durée a une justification fonctionnelle — confirmer une action (`duration-fast`), guider l'œil (`duration-base`), révéler du contenu (`duration-slow`). `prefers-reduced-motion: reduce` → toutes les transitions à 0ms sauf `duration-slow` → 100ms.

## Typographie — Échelle de tailles

| Token | Valeur px | Usage |
|---|---|---|
| `text-xs` | 12px | Micro — mentions légales, copyright |
| `text-sm` | 14px | Label, liens footer, ButtonGhost |
| `text-base` | 16px | Corps de texte standard, UI, boutons |
| `text-lg` | 18px | BodyLarge — sous-titres, paragraphes longs |
| `text-xl` | 20px | Heading4 |
| `text-2xl` | 24px | Heading3, numéros d'étapes |
| `text-3xl` | 30px | Heading2 |
| `text-4xl` | 36px | H1 pages internes (mobile + desktop) |
| `text-5xl` | 48px | H1 home desktop |
| `text-hero-mobile` | 32px | H1 home mobile uniquement |

Note : `line-height` par défaut 1.6 pour le corps, 1.1–1.15 pour les titres. `font-smoothing: antialiased` sur `<body>`.

---

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
