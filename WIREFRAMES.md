# WIREFRAMES — CARPATH Website

> Produit par : UX Architect  
> Format : basse fidélité, bloc par bloc. Aucune décision visuelle (couleur, typo, style) — ces décisions appartiennent à l'UI Designer.  
> Chaque bloc porte une **intention** : le Copywriter sait exactement quoi écrire dessus.  
> Mobile-first : l'ordre des blocs est pensé pour le scroll vertical. Desktop = même ordre, mise en page adaptée.

---

## Conventions de notation

```
[NOM DU BLOC] — Intention
  Contenu : description structurelle
  Mobile : comportement spécifique si différent
```

---

## Page `/` — Home

**Objectif** : Capter l'attention en 3 secondes, identifier le problème du dirigeant, proposer CARPATH comme solution, déclencher le CTA.

---

### [HEADER STICKY] — Navigation et accès rapide au CTA

```
[Logo]  [La méthode]  [Le système]  [Pour qui ?]  [Réserver mon audit gratuit ▶]
```

- Intention : Toujours accessible, le CTA ne disparaît jamais du champ visuel.
- Mobile : Logo + icône burger. Le menu déplié affiche les 3 liens + le CTA en bas, en grand.

---

### [HERO] — Accroche problème + CTA primaire

```
┌─────────────────────────────────────────────────────────────┐
│  [Accroche courte — problème du dirigeant, ~8 mots max]    │
│  [Sous-titre — promesse de la solution, ~20 mots]          │
│                                                              │
│  [Réserver mon audit gratuit ▶]  [Découvrir la méthode]    │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Poser le problème du dirigeant avant de nommer CARPATH. Le visiteur se reconnaît avant de lire la marque.
- Règle : CTA principal au-dessus de la ligne de flottaison sur mobile ET desktop.
- Mobile : Pile verticale — accroche → sous-titre → CTA primaire seul (le secondaire passe en bas du héros).

---

### [PREUVE RAPIDE] — Légitimité immédiate

```
┌──────────────┬──────────────┬──────────────┐
│ Chiffre/fait │ Chiffre/fait │ Chiffre/fait │
│  [label]     │  [label]     │  [label]     │
└──────────────┴──────────────┴──────────────┘
```

- Intention : Donner une preuve tangible avant que le dirigeant ne scrolle. Crédibilise en 2 secondes. (Copywriter : pas de chiffres inventés — utiliser uniquement des faits vérifiables ou remplacer par une promesse qualitative honnête.)
- Mobile : 3 métriques en colonne ou en grille 1×3 compacte.

---

### [PROBLÈME DIRIGEANT] — Empathie + identification

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : "Vous reconnaissez-vous dans cette situation ?"] │
│                                                              │
│  • [Symptôme 1 du dirigeant TPE/PME]                       │
│  • [Symptôme 2]                                             │
│  • [Symptôme 3]                                             │
│  • [Symptôme 4]                                             │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Validation émotionnelle. Le dirigeant doit penser "c'est exactement mon cas". Transition naturelle vers la solution.
- Mobile : Liste verticale à puces, pas de colonnes.

---

### [POSITIONNEMENT CARPATH] — Différenciation

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : ce qu'est CARPATH — ni agence, ni cabinet, ni   │
│   logiciel — formulation positive]                         │
│                                                              │
│  [Paragraphe court : copilote du dirigeant, système de    │
│   croissance, partenariat durable]                         │
│                                                              │
│  [Illustration non-visuelle : espace réservé pour l'UI    │
│   Designer — évoque "pilotage / tableau de bord"]         │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Lever l'objection "c'est encore une agence comme les autres". Définir CARPATH par ce qu'il N'est PAS avant ce qu'il EST.
- Mobile : Texte d'abord, illustration ensuite.

---

### [MÉTHODE EN 4 ÉTAPES] — Confiance dans le processus

```
┌──────────┬──────────┬──────────┬──────────┐
│ Écouter  │Concevoir │  Piloter │Améliorer │
│ [icône]  │ [icône]  │ [icône]  │ [icône]  │
│ [1 ligne │ [1 ligne │ [1 ligne │ [1 ligne │
│  de desc]│  de desc]│  de desc]│  de desc]│
└──────────┴──────────┴──────────┴──────────┘
[Voir la méthode en détail →]
```

- Intention : Répondre à "comment ça se passe concrètement". Séquence visuelle rassurante. Lien vers /methode.
- Mobile : Étapes en colonne verticale, une par une avec flèche de progression.
- Note iconographie : icônes de la méthode — jeu dédié, pas mélangé avec les icônes du CARPATH Operating System.

---

### [CARPATH OPERATING SYSTEM] — Ce que le dirigeant reçoit

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : "Le système de croissance que nous installons"] │
│                                                              │
│  ┌─────────┬──────────┬───────────┬────────────┬─────────┐ │
│  │Stratégie│Acquisition│Conversion│Fidélisation│Pilotage │ │
│  │ [icône] │ [icône]  │  [icône]  │  [icône]  │ [icône] │ │
│  │[1 ligne]│ [1 ligne]│ [1 ligne] │ [1 ligne] │[1 ligne]│ │
│  └─────────┴──────────┴───────────┴────────────┴─────────┘ │
│                                                              │
│  [Voir le système en détail →]                             │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Répondre à "qu'est-ce que je reçois concrètement". 5 piliers lisibles en un coup d'œil. Lien vers /systeme.
- Mobile : Défilement horizontal (carousel) ou liste verticale avec icône + label.
- Note iconographie : icônes du CARPATH OS — jeu dédié, jamais réutilisé pour la méthode.

---

### [PREUVE SOCIALE] — Réassurance par les pairs

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : "Ce que disent les dirigeants qui ont piloté    │
│   leur croissance avec CARPATH"]                           │
│                                                              │
│  ┌─────────────────────┐  ┌─────────────────────────────┐  │
│  │ [Témoignage 1]      │  │ [Témoignage 2]              │  │
│  │ [Prénom, secteur,  │  │ [Prénom, secteur, CA]       │  │
│  │  CA indicatif]     │  │                             │  │
│  └─────────────────────┘  └─────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Bloc objection "ça marche vraiment ?". Preuves humaines concrètes. Le Copywriter n'invente aucun témoignage — si pas de témoignage disponible, remplacer par une preuve alternative (ex. secteurs accompagnés, types de résultats mesurés).
- Mobile : Carousel de témoignages 1 par 1.

---

### [CTA MILIEU DE PAGE] — Rappel de l'action principale

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre court : invitation à passer à l'action]            │
│  [Sous-titre : réassurance sur la gratuité / sans engagement│
│   de l'audit]                                              │
│  [Réserver mon audit gratuit ▶]                            │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Intercepter les visiteurs convaincus avant la fin de page. Ne pas laisser le CTA uniquement en bas.
- Mobile : Bloc pleine largeur, CTA centré.

---

### [POUR QUI] — Qualification rapide

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : "CARPATH est fait pour vous si..."]              │
│                                                              │
│  ✓ [Critère 1 — type d'entreprise]                         │
│  ✓ [Critère 2 — stade de développement]                    │
│  ✓ [Critère 3 — état d'esprit / ambition]                  │
│  ✓ [Critère 4 — taille / CA]                               │
│                                                              │
│  [Voir la page complète Pour qui ? →]                      │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Auto-qualification rapide. Évite que des non-cibles réservent un audit et consomment du temps commercial inutilement.

---

### [CTA FINAL] — Clôture de la page

```
┌─────────────────────────────────────────────────────────────┐
│  [Grand titre : reformulation de la promesse principale]   │
│  [Réserver mon audit gratuit ▶]                            │
│  [Petite mention : durée, format, gratuité]                │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Dernier point de contact avant le footer. Le visiteur qui a scrollé jusqu'ici est chaud — ne pas le laisser repartir sans action.

---

### [FOOTER] — Clôture administrative

```
[Logo]  [La méthode]  [Le système]  [Pour qui ?]  [Audit gratuit]
        © 2025 CARPATH  [Mentions légales]
```

---

---

## Page `/methode` — La méthode CARPATH

**Objectif** : Lever l'objection "je ne sais pas dans quoi je m'embarque" en détaillant les 4 étapes de la méthode.

---

### [HERO PAGE INTERNE] — Ancrage + accroche

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre H1 : La méthode CARPATH]                           │
│  [Sous-titre : promesse de la page — "comment ça se passe"]│
└─────────────────────────────────────────────────────────────┘
```

- Intention : Orienter immédiatement le visiteur. Il sait qu'il est sur la bonne page.

---

### [INTRO MÉTHODE] — Pourquoi une méthode ?

```
┌─────────────────────────────────────────────────────────────┐
│  [Paragraphe court : la croissance ne s'improvise pas,    │
│   elle se pilote — la méthode est la garantie que le      │
│   parcours est structuré et reproductible]                 │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Cadrer la valeur de la méthode avant de la détailler. Pas d'outil — un processus.

---

### [4 ÉTAPES DÉTAILLÉES] — Contenu principal de la page

Pour chaque étape (Écouter / Concevoir / Piloter / Améliorer) :

```
┌─────────────────────────────────────────────────────────────┐
│  [Numéro + Icône + Nom de l'étape]                        │
│                                                              │
│  [Titre de l'étape : bénéfice dirigeant en ~6 mots]       │
│  [Paragraphe : 3–5 lignes — ce qui se passe concrètement]  │
│  [Ce que le dirigeant vit / ressent à cette étape]         │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Rendre le processus tangible et rassurant. Le dirigeant doit se projeter dans chaque étape.
- Mobile : Blocs empilés, numérotés, ligne de progression verticale entre chaque étape.
- Desktop : Alternance gauche-droite ou disposition en timeline horizontale (décision UI Designer).

---

### [TRANSITION VERS LE SYSTÈME] — Pont vers /systeme

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : "Et concrètement, qu'est-ce que je reçois ?"]   │
│  [Phrase pont : la méthode est le chemin, le CARPATH OS   │
│   est la destination]                                      │
│  [Découvrir le système →]                                  │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Éviter un cul-de-sac. Le visiteur intéressé par la méthode est prêt à comprendre le système.

---

### [CTA FINAL PAGE MÉTHODE] — Conversion

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : invitation à agir]                               │
│  [Réserver mon audit gratuit ▶]                            │
│  [Mention : l'audit est la première étape — Écouter]       │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Relier le CTA à la méthode — l'audit gratuit EST l'étape Écouter. Cohérence totale.

---

---

## Page `/systeme` — Le CARPATH Operating System

**Objectif** : Montrer les 5 piliers du système de croissance pour que le dirigeant comprenne ce qu'il reçoit concrètement.

---

### [HERO PAGE INTERNE] — Ancrage

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre H1 : Le CARPATH Operating System]                  │
│  [Sous-titre : "L'architecture de votre croissance"]       │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Positionner le concept d'emblée. "Operating System" évoque quelque chose de structuré et de piloté.

---

### [INTRO SYSTÈME] — Qu'est-ce que le CARPATH OS ?

```
┌─────────────────────────────────────────────────────────────┐
│  [Paragraphe court : le système = ce qu'on installe chez  │
│   vous, pas une liste de services mais une architecture   │
│   cohérente et pilotée en continu]                        │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Distinguer clairement le système d'une liste de prestations à la carte.

---

### [5 PILIERS DÉTAILLÉS] — Contenu principal

Pour chaque pilier (Stratégie / Acquisition / Conversion / Fidélisation / Pilotage et optimisation) :

```
┌─────────────────────────────────────────────────────────────┐
│  [Icône + Nom du pilier]                                   │
│                                                              │
│  [Titre : bénéfice dirigeant en ~6 mots]                  │
│  [Paragraphe : 3–4 lignes — ce que ce pilier couvre       │
│   concrètement, comment il s'intègre dans le système]     │
│  [Exemple concret ou cas de figure non-chiffré]            │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Rendre chaque pilier compréhensible par un dirigeant non-technique en 30 secondes max.
- Mobile : Piliers en accordéon (un seul développé à la fois) pour limiter la longueur de scroll.
- Desktop : Grille 2–3 colonnes ou liste alternée (décision UI Designer).

---

### [COHÉRENCE DES PILIERS] — Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────┐
│  [Schéma ou représentation structurelle des 5 piliers     │
│   comme un système interconnecté — pas une liste]         │
│  [Espace réservé : l'UI Designer produit la visualisation]│
└─────────────────────────────────────────────────────────────┘
```

- Intention : Montrer que les piliers forment un système, pas 5 services séparés achetables à la carte.

---

### [CTA FINAL PAGE SYSTÈME]

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : invitation à découvrir le système pour son      │
│   propre contexte]                                         │
│  [Réserver mon audit gratuit ▶]                            │
│  [Mention : l'audit identifie les piliers prioritaires    │
│   pour votre situation]                                    │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Personnaliser le CTA — l'audit n'est pas générique, il s'adapte à la situation du dirigeant.

---

---

## Page `/pour-qui` — Pour qui est CARPATH ?

**Objectif** : Qualifier le visiteur. Faire en sorte que seuls les prospects pertinents cliquent sur le CTA.

---

### [HERO PAGE INTERNE]

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre H1 : "CARPATH est fait pour vous si..."]          │
│  [Sous-titre : ton direct, sans filtre — on cherche une   │
│   adéquation, pas à vendre à tout le monde]               │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Assumer la sélectivité dès l'entrée. Ça rassure les bons prospects ET filtre les autres.

---

### [PORTRAIT DU DIRIGEANT IDÉAL] — Identification

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : "Vous êtes probablement la bonne personne si"]  │
│                                                              │
│  ✓ [Critère entreprise : TPE/PME, activité établie]       │
│  ✓ [Critère CA : fourchette 150k–2M€]                   │
│  ✓ [Critère mindset : cherche un partenaire durable]      │
│  ✓ [Critère situation : potentiel identifié, méthode      │
│     manquante]                                             │
│  ✓ [Critère attitude : prêt à s'impliquer, pas à         │
│     sous-traiter en mode "faites pour moi et partez"]     │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Miroir positif. Le bon prospect se reconnaît et se sent compris, pas jugé.

---

### [CE QUE CARPATH N'EST PAS] — Objection inversée

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : "CARPATH n'est probablement pas pour vous si"]  │
│                                                              │
│  ✗ [Non-cible 1 : cherche une prestation ponctuelle]      │
│  ✗ [Non-cible 2 : veut des résultats sans s'impliquer]    │
│  ✗ [Non-cible 3 : activité en phase de démarrage / 0 CA]  │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Honnêteté radicale. Filtre les prospects non-qualifiés, renforce la crédibilité auprès des bons.
- Ton : bienveillant, pas condescendant — "ce n'est pas la bonne étape pour vous" plutôt que "vous ne méritez pas".

---

### [SECTEURS & CONTEXTES] — Exemples de terrain

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : types d'entreprises accompagnées]               │
│  [Liste ou grille de secteurs / contextes — pas de logos  │
│   clients sans autorisation]                               │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Aider le visiteur à se projeter dans des cas similaires au sien.
- Mobile : Liste simple, pas de tableau.

---

### [CTA CONDITIONNEL] — Après qualification

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre : "Vous vous reconnaissez ? C'est le moment       │
│   de vérifier ensemble."]                                  │
│  [Réserver mon audit gratuit ▶]                            │
│  [Mention : format, durée, gratuité, sans engagement]      │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Le CTA n'apparaît qu'après la section de qualification — le visiteur a passé le test mental avant de cliquer.

---

---

## Page `/audit-gratuit` — Réserver mon audit gratuit

**Objectif** : Convertir. Page cul-de-sac dédiée. Aucune distraction, une seule action possible.

---

### [HEADER SIMPLIFIÉ] — Navigation réduite

```
[Logo CARPATH]                          [← Retour au site]
```

- Intention : Supprimer les distractions. Le visiteur est en mode "décision". Pas de menu complet.
- Mobile : Logo centré, lien retour discret en haut.

---

### [HERO CONVERSION] — Réassurance finale

```
┌─────────────────────────────────────────────────────────────┐
│  [Titre H1 : "Réservez votre audit gratuit"]              │
│  [Sous-titre : ce qui se passe pendant l'audit, format,   │
│   durée, ce que le dirigeant repart avec]                 │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Clarifier les attentes avant l'action. Lever l'angoisse du "et après, on me vend quelque chose ?"

---

### [ÉLÉMENTS DE RÉASSURANCE] — Objections finales

```
┌──────────────────┬──────────────────┬──────────────────┐
│ [Gratuit et sans │ [Durée : ~45 min]│ [Ce que vous     │
│  engagement]     │                  │  repartez avec]  │
└──────────────────┴──────────────────┴──────────────────┘
```

- Intention : Bloc objection prix / temps / risque. 3 réponses visuellement simples avant l'embed calendrier.
- Mobile : 3 éléments empilés verticalement.

---

### [EMBED TIDYCAL] — Action principale

```
┌─────────────────────────────────────────────────────────────┐
│  [Widget de réservation TidyCal — embed direct]            │
│  [Créneaux disponibles, formulaire de contact intégré]     │
└─────────────────────────────────────────────────────────────┘
```

- Intention : L'action est ici. Rien d'autre à faire — un clic, une date, c'est pris.
- Note technique : embed TidyCal (iframe ou widget JS). Flux : réservation → webhook TidyCal → Make.com → Airtable CARPATH.

---

### [POST-CONVERSION] — Confirmation et attente

```
┌─────────────────────────────────────────────────────────────┐
│  [Message post-réservation : confirmation + ce qui        │
│   se passe ensuite — email de confirmation automatique,   │
│   préparation suggérée]                                    │
└─────────────────────────────────────────────────────────────┘
```

- Intention : Réduire l'anxiété post-action. Le dirigeant sait exactement ce qui l'attend.
- Visible uniquement après réservation (état de la page après succès TidyCal).

---

*Version 1.0 — À valider avec le Copywriter (intentions des blocs) et l'UI Designer (réalisation visuelle) avant développement.*
