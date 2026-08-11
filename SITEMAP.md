# SITEMAP — CARPATH Website

> Produit par : UX Architect  
> Source : `context/BRAND_CONTEXT.md` + `design/TOKENS.md`  
> Règle de structure : 2 clics maximum depuis la home vers toute page clé. Chaque page a un objectif de conversion unique.

---

## Principe directeur

Le site n'est pas une brochure. C'est le premier maillon du tunnel d'acquisition. Chaque page doit faire avancer le visiteur vers **"Réserver mon audit gratuit"** ou éliminer une objection qui l'en empêche.

---

## Arborescence

```
/ (Home)
├── /methode
├── /systeme
├── /pour-qui
├── /audit-gratuit          ← page de destination du CTA principal
└── /mentions-legales       ← obligation légale, hors tunnel
```

---

## Pages — Objectifs de conversion

### `/` — Home

**Objectif unique** : Faire comprendre en moins de 90 secondes ce qu'est CARPATH et déclencher un premier clic vers "Réserver mon audit gratuit" ou vers une page de qualification.

- Profondeur : niveau 0 (racine)
- CTA principal visible : **"Réserver mon audit gratuit"** (au-dessus de la ligne de flottaison)
- Navigation sortante : /methode · /systeme · /pour-qui · /audit-gratuit

---

### `/methode` — La méthode CARPATH

**Objectif unique** : Montrer au dirigeant *comment* CARPATH travaille concrètement (Écouter → Concevoir → Piloter → Améliorer) pour lever l'objection « je ne sais pas ce que je vais recevoir ».

- Profondeur : 1 clic depuis la home
- CTA principal : **"Réserver mon audit gratuit"**
- Navigation sortante : /systeme · /audit-gratuit

---

### `/systeme` — Le CARPATH Operating System

**Objectif unique** : Détailler les 5 piliers du système de croissance (Stratégie, Acquisition, Conversion, Fidélisation, Pilotage et optimisation) pour que le dirigeant comprenne *ce qu'il reçoit concrètement*.

- Profondeur : 1 clic depuis la home
- CTA principal : **"Réserver mon audit gratuit"**
- Navigation sortante : /methode · /audit-gratuit

---

### `/pour-qui` — Pour qui est CARPATH ?

**Objectif unique** : Qualifier le visiteur (TPE/PME, 150k–2M€ de CA, déjà en activité, prêt à investir dans un partenariat durable) et éliminer les non-cibles sans les froisser, pour ne diriger vers le CTA que les prospects pertinents.

- Profondeur : 1 clic depuis la home
- CTA principal : **"Réserver mon audit gratuit"** (conditionnel : visible après la section de qualification)
- Navigation sortante : /audit-gratuit · /methode

---

### `/audit-gratuit` — Réserver mon audit gratuit

**Objectif unique** : Convertir le visiteur en rendez-vous pris — c'est la page de destination unique de tous les CTA du site. Embed TidyCal + éléments de réassurance.

- Profondeur : 1 clic depuis n'importe quelle page
- CTA final : action de réservation dans le widget TidyCal (embed)
- Navigation sortante : aucune — page cul-de-sac volontaire (focus maximal sur la conversion)

---

### `/mentions-legales`

**Objectif unique** : Répondre aux obligations légales (RGPD, éditeur, hébergeur). Page hors tunnel.

- Profondeur : 1 clic depuis le footer
- CTA principal : aucun
- Navigation sortante : retour home

---

## Pages exclues (justification)

| Page envisageable | Raison d'exclusion |
|---|---|
| `/blog` | Volume de production inconnu en v1 — ne pas créer un cimetière de contenus. À ajouter en v2 si fréquence éditoriale établie. |
| `/tarifs` | CARPATH est un partenariat sur-mesure : publier un tarif fixe crée une objection prix prématurée. L'audit gratuit qualifie ET initie la discussion sur le budget. |
| `/equipe` | TPE seule fondatrice — page "Équipe" surdimensionnée. Intégrer le dirigeant comme preuve humaine directement dans la Home et la page /pour-qui. |
| `/cas-clients` | Pas disponible en v1. Intégrer les preuves sociales en blocs dans chaque page plutôt qu'en page dédiée. |
| `/contact` | Redondant avec /audit-gratuit. Un seul point d'entrée, un seul formulaire — évite la dispersion. |

---

## Navigation globale (header)

```
[Logo CARPATH]    [La méthode]  [Le système]  [Pour qui ?]    [Réserver mon audit gratuit ▶]
```

- 3 liens texte + 1 bouton CTA primaire (bronze)
- Mobile : menu burger → liste verticale avec CTA en bas, bien visible
- Pas de sous-menus, pas de mega-menu : le dirigeant est pressé

## Footer

```
[Logo CARPATH]    [La méthode]  [Le système]  [Pour qui ?]  [Audit gratuit]
                  © 2025 CARPATH — [Mentions légales]
```

---

*Version 1.0 — À valider avec le Copywriter et l'UI Designer avant développement.*
