# USER_FLOW — CARPATH Website

> Produit par : UX Architect  
> Objectif : cartographier le chemin du visiteur depuis la source de trafic jusqu'à la réservation de l'audit, identifier les points de sortie et définir comment les limiter.

---

## Principe directeur

Un seul objectif terminal : **la réservation de l'audit gratuit via TidyCal**.  
Tous les chemins doivent converger vers `/audit-gratuit`. Les boucles de contenu (home → méthode → système → home) sont autorisées uniquement si elles font avancer la conviction — pas si elles font tourner en rond sans décision.

---

## Sources de trafic identifiées (v1)

| Source | Type de visiteur probable | Niveau de conscience |
|---|---|---|
| Recherche Google (SEO) | Dirigeant qui cherche une solution active | Moyen à élevé |
| Bouche-à-oreille / recommandation | Dirigeant pré-qualifié par un pair | Élevé |
| LinkedIn (contenu / prospection) | Dirigeant curieux, en mode découverte | Faible à moyen |
| Email sortant / séquence | Dirigeant ciblé par CARPATH | Variable |
| Publicité (v2) | Audience froide | Faible |

---

## Parcours principal — Visiteur de niveau de conscience MOYEN à ÉLEVÉ

> Ce visiteur sait qu'il a un problème de croissance. Il cherche qui peut l'aider.

```
[Source : Google / recommandation]
        ↓
[Home — "/" ]
  ↓ (lit le hero, se reconnaît dans le problème)
[CTA "Réserver mon audit gratuit" — visible sans scroll]
        ↓
[/audit-gratuit]
  ↓ (lit les éléments de réassurance)
[Embed TidyCal — réservation]
        ↓
[✅ CONVERSION — rendez-vous pris]
        ↓
[Email de confirmation automatique]
        ↓
[Ligne créée dans Airtable CARPATH via Make.com]
```

**Nombre de clics : 2 (home → audit-gratuit → réservation)**  
**Durée estimée : 3–8 minutes**

---

## Parcours qualification — Visiteur de niveau de conscience FAIBLE

> Ce visiteur est arrivé sur le site mais ne comprend pas encore ce que CARPATH fait.

```
[Source : LinkedIn / contenu]
        ↓
[Home — "/"]
  ↓ (lit le hero, pas encore convaincu — scroll)
[Bloc MÉTHODE ou SYSTÈME]
  ↓ (clic sur lien secondaire)
[/methode  OU  /systeme]
  ↓ (lit le contenu, comprend le processus / les piliers)
[CTA "Réserver mon audit gratuit" en fin de page]
        ↓
[/audit-gratuit]
  ↓
[Embed TidyCal — réservation]
        ↓
[✅ CONVERSION]
```

**Nombre de clics : 3–4 (home → méthode ou système → audit-gratuit → réservation)**  
**Durée estimée : 8–15 minutes**

---

## Parcours auto-qualification — Visiteur incertain de sa pertinence

> Ce visiteur se demande si CARPATH est fait pour lui avant de prendre un rendez-vous.

```
[Source : Google / bouche-à-oreille]
        ↓
[Home — "/"]
  ↓ (clic sur "Pour qui ?" dans le menu ou le bloc de qualification)
[/pour-qui]
  ↓ (lit le portrait du dirigeant idéal — se reconnaît)
[CTA conditionnel après la section de qualification]
        ↓
[/audit-gratuit]
  ↓
[Embed TidyCal — réservation]
        ↓
[✅ CONVERSION]
```

**Nombre de clics : 3 (home → pour-qui → audit-gratuit → réservation)**  
**Durée estimée : 5–10 minutes**

---

## Points de sortie identifiés et contre-mesures

| Point de sortie | Raison probable | Contre-mesure intégrée dans le design |
|---|---|---|
| **Home — abandon dès le hero** | Accroche insuffisante / visiteur non-cible | Hero centré sur le PROBLÈME du dirigeant avant de nommer CARPATH. Auto-qualification rapide. |
| **Home — scroll sans clic** | Pas de CTA visible sans scroll | CTA "Réserver mon audit gratuit" au-dessus de la ligne de flottaison sur mobile ET desktop. Header sticky avec CTA permanent. |
| **Page /methode ou /systeme — lire sans agir** | Contenu intéressant mais pas de déclencheur | CTA répété à mi-page ET en fin de page. Bloc de transition vers /audit-gratuit avec pont narratif explicite. |
| **Page /pour-qui — sentiment de ne pas correspondre** | Non-cible qui se décourage | Ton bienveillant. Message explicite : "ce n'est pas la bonne étape pour vous" — pas un rejet, une honnêteté. CTA visible APRÈS la section qualification (pas avant). |
| **Page /audit-gratuit — abandon avant réservation** | Objection prix / temps / risque non résolue | 3 blocs de réassurance (gratuit / durée / sans engagement) AVANT l'embed TidyCal. Titre clarifiant ce que le dirigeant repart avec. |
| **Boucle home → méthode → système → home** | Procrastination / sur-information | CTA répété à chaque fin de page. Bloc CTA milieu de home pour intercepter en cours de scroll. |
| **Navigation vers /mentions-legales** | Obligation légale — acceptable | Page hors tunnel, pas de CTA intégré là-dedans. Le footer reste accessible. |

---

## Règles de non-dilution du tunnel

1. **Un seul CTA primaire par section** : "Réserver mon audit gratuit" — jamais deux boutons primaires au même niveau visuel.
2. **Page /audit-gratuit = cul-de-sac volontaire** : navigation simplifiée (logo + lien retour uniquement). Pas de menu complet pour éviter la fuite en dernière étape.
3. **Pas de formulaire de contact alternatif** : tout lead passe par TidyCal — pas d'email exposé, pas de formulaire "contactez-nous" concurrent.
4. **Liens sortants = zéro sur les pages clés** : aucun lien vers LinkedIn ou autre réseau social depuis la home, /methode, /systeme — uniquement depuis le footer.
5. **Pop-up d'exit intent (v2)** : non inclus en v1 — pas au risque de dégrader l'expérience. À tester en v2 si le taux de conversion est insuffisant.

---

## Flux technique de conversion (référence pour le Front-End Engineer)

```
Visiteur clique "Réserver mon audit gratuit"
        ↓
Page /audit-gratuit chargée
        ↓
Visiteur interagit avec l'embed TidyCal
        ↓
TidyCal confirme la réservation
        ↓
Webhook TidyCal (booking.created) déclenché
        ↓
Scénario Make.com reçoit le webhook
        ↓
Make.com crée une ligne dans la base Airtable CARPATH
        ↓
Email de confirmation envoyé au dirigeant (via TidyCal natif)
        ↓
[Optionnel v2] Séquence d'emails de préparation avant le RDV
```

---

## Métriques à suivre post-lancement (pour le CRO Specialist)

| Étape du tunnel | Métrique clé |
|---|---|
| Home | Taux de rebond / Scroll depth / Taux de clic sur CTA hero |
| /methode + /systeme | Temps passé / Taux de clic sur CTA de fin de page |
| /pour-qui | Taux de clic sur CTA conditionnel (après qualification) |
| /audit-gratuit | Taux de complétion du formulaire TidyCal |
| Global | Taux de conversion visiteur → rendez-vous pris |

---

*Version 1.0 — À valider avec le Copywriter (intentions des blocs texte) avant développement. Le CRO Specialist prend le relais post-lancement pour proposer des hypothèses de test.*
