# Design Page — `/audit-gratuit`

> Produit par : UI Designer  
> Source : `WIREFRAMES.md` · `content/audit-gratuit.md` · `design/TOKENS.md` · `design/COMPONENTS.md`  
> Texte Copywriter : ✅ Complet

---

## Vue d'ensemble

Page de conversion maximale. Navigation réduite au minimum. Aucune distraction. L'objectif unique est la complétion du widget TidyCal. Le design doit lever les dernières objections en haut de page avant que le visiteur n'atteigne le widget.

---

## [HEADER-MINIMAL]

Composant : `Header-Minimal`

```
[Logo CARPATH — gauche]              [ButtonGhost "← Retour au site" — droite]
```

- Fond : `bg-base` opaque (pas transparent)
- Hauteur : 56px
- Pas de menu, pas de liens de navigation, pas de CTA secondaire

---

## [HERO CONVERSION]

Fond : `bg-base`  
Padding vertical : `space-16` desktop, `space-12` mobile

```
[max-width 640px, centré]

H1 (text-4xl, Poppins Bold, text-primary) :
"Réservez votre audit gratuit"

[space-4]

Sous-titre (BodyLarge, text-secondary) :
"En 45 minutes, nous faisons le point sur votre situation : vos
freins de croissance, vos priorités, ce qu'un système de croissance
pourrait changer pour vous. Vous repartez avec une lecture claire —
qu'on travaille ensemble ensuite ou non."
```

Pas de ButtonPrimary dans ce hero — le widget TidyCal est l'action, pas un bouton.

---

## [ÉLÉMENTS DE RÉASSURANCE]

Composant : `CardReassurance` × 3  
Fond : `bg-surface`  
Padding vertical : `space-12`

```
[Grid 3 colonnes desktop, liste verticale mobile]

Card 1 :
[Icône check 24px, accent]
Heading4 : "Gratuit, sans condition"
BodyBase : "L'audit ne vous engage à rien. C'est un échange, pas
un processus de vente. Si notre façon de travailler ne correspond pas
à votre situation, on se le dit."

Card 2 :
[Icône horloge 24px, accent]
Heading4 : "Environ 45 minutes"
BodyBase : "Pas plus. Nous respectons votre temps de dirigeant. La
session est cadrée, structurée, efficace."

Card 3 :
[Icône cadeau/livraison 24px, accent]
Heading4 : "Une lecture claire de votre situation"
BodyBase : "À la fin de l'échange, vous avez identifié vos principaux
freins de croissance et les piliers à activer en priorité. C'est déjà
utile, même si vous ne donnez pas suite."
```

> Note iconographie : les 3 icônes de réassurance (check, horloge, cadeau) sont des icônes utilitaires standard, **hors des deux jeux dédiés** (méthode / CARPATH OS). Style ligne fine cohérent.

**Mobile :** 3 cartes empilées, icône + titre + texte.

---

## [EMBED TIDYCAL]

Composant : technique (iframe ou widget JS)  
Fond : `bg-base`  
Padding vertical : `space-12`

```
[max-width 800px, centré]

Heading3 (centré) : "Choisissez un créneau qui vous convient"

[space-2]

BodyBase (centré, text-secondary) :
"Les créneaux disponibles sont mis à jour en temps réel.
Une confirmation vous est envoyée par email immédiatement après
la réservation."

[space-6]

[Widget TidyCal — embed pleine largeur, radius-lg, shadow-md]
→ Hauteur suggérée : 500–700px selon le widget TidyCal
→ Fond du widget : idéalement customisé pour correspondre à bg-surface
→ Si customisation impossible : encadrement radius-lg, shadow-md, border 1px border-subtle
```

**Mode clair / mode sombre :** Le widget TidyCal a ses propres styles. Documenter au Front-End Engineer qu'il faut tester les deux modes et appliquer une customisation CSS au widget si TidyCal le permet.

---

## [POST-CONVERSION]

Composant : état de la page post-réservation (remplace le contenu ci-dessus une fois TidyCal confirmé)  
Fond : `bg-base`

```
[Icône coche large — 48px, accent, animée (scale 0→1, duration-base)]
Heading2 (centré) : "C'est réservé. Voici la suite."

[space-6]

BodyBase (centré, max-width 560px) :
"Vous recevez un email de confirmation dans les prochaines minutes..."

[space-8]

[bg-surface, radius-lg, padding space-6, max-width 560px, centré]
Heading4 : "Pour préparer notre échange :"
Liste 3 items (puces accent) :
• Votre CA actuel et son évolution sur 12 mois
• Vos principales sources de nouveaux clients aujourd'hui
• Ce qui freine votre développement selon vous
Label italic : "Pas d'obligation — c'est simplement ce qui nous
permet d'aller plus vite à l'essentiel."

[space-6]
BodyBase centré : "À très bientôt. — L'équipe CARPATH"
```

**Déclenchement :** cet état est affiché après l'événement `booking_confirmed` de TidyCal (via JS ou route de callback). Implémentation : scroll automatique vers le haut + swap du contenu.

---

## [FAQ]

Composant : liste accordéon dans `SectionContenu`  
Fond : `bg-surface`

```
Heading3 : "Questions fréquentes"

[Accordion × 4]

Q : Est-ce vraiment gratuit ?
Q : Que se passe-t-il après l'audit ?
Q : À qui s'adresse cet audit ?
Q : L'appel se passe comment ?
```

- Accordéon style `Accordion` component
- Questions : Heading4
- Réponses : BodyBase
- Un seul ouvert à la fois

---

## [FOOTER]

Composant : `Footer` standard (réintégré en bas de la page pour les mentions légales).

---

## Points d'attention pour le Front-End Engineer

1. Cette page n'a pas de menu complet — `Header-Minimal` uniquement.
2. Le `<title>` de la page peut être adapté post-réservation pour éviter un "retour arrière" confus.
3. Le widget TidyCal est l'élément central — sa customisation CSS doit être testée en priorité.
4. L'état post-conversion est géré par TidyCal (event ou redirect). À documenter dans le webhook Make → vérifier que la confirmation est bien reçue avant d'afficher l'état de succès.
