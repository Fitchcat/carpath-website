# Prompts prêts à coller dans Antigravity

Un prompt par étape du pipeline. Colle-les dans l'ordre, un à la fois. Ne lance pas l'étape N+1 avant d'avoir mergé et vérifié l'étape N — c'est tout l'intérêt du séquençage content-first.

## Étape 0 — Une seule fois, avant le premier prompt

1. Crée le repo GitHub du site (vide ou avec un `create-next-app` de base).
2. Copie tout le contenu de ce dossier (`AGENTS.md`, `context/`, `.agents/`, `design/`) à la racine du repo.
3. Ouvre le repo dans Antigravity.

Une fois fait, passe au Prompt 1.

---

## Prompt 1 — UX Architect

```
Charge l'agent UX Architect défini dans .agents/agents/ux-architect/agent.md et applique-le à la lettre : mission, règles, livrables, critères de qualité.

Avant de commencer, lis context/BRAND_CONTEXT.md en entier.

Produis à la racine du repo :
- SITEMAP.md
- WIREFRAMES.md
- USER_FLOW.md

Le CTA principal du site est fixe : "Réserver mon audit gratuit". N'invente pas d'autre libellé pour cette action.

À la fin, résume en 3 phrases le parcours de conversion choisi et pourquoi.
```

## Prompt 2 — Copywriter (après merge du Prompt 1)

```
Charge l'agent Copywriter défini dans .agents/agents/copywriter/agent.md et applique-le à la lettre.

Avant de commencer, lis context/BRAND_CONTEXT.md, SITEMAP.md, WIREFRAMES.md et USER_FLOW.md.

Produis un fichier content/{nom-page}.md pour chaque page listée dans SITEMAP.md.

Rappels non négociables :
- CTA principal partout : "Réserver mon audit gratuit".
- Section "5 piliers" = le CARPATH Operating System (Stratégie, Acquisition, Conversion, Fidélisation, Pilotage et optimisation), à ne pas confondre avec la méthode en 4 étapes (Écouter, Concevoir, Piloter, Améliorer).
- Aucun mot de la liste interdite dans BRAND_CONTEXT.md.

Signale en tête de réponse toute page du sitemap qui resterait sans contenu.
```

## Prompt 3 — UI Designer (après merge du Prompt 2)

```
Charge l'agent UI Designer défini dans .agents/agents/ui-designer/agent.md et applique-le à la lettre.

Avant de commencer, lis context/BRAND_CONTEXT.md, design/TOKENS.md, WIREFRAMES.md, tous les fichiers content/*.md, et les images context/brand-assets/logo-typo-spec.png et context/brand-assets/brand-board.png.

Complète design/TOKENS.md (échelle d'espacement, rayons, ombres — sans toucher aux couleurs déjà verrouillées).

Produis design/COMPONENTS.md et un fichier design/PAGES/{nom-page}.md par page.

Inclus aussi la production de 9 icônes en SVG inline, style ligne fine cohérent avec le logo (carrés arrondis) :
- 5 icônes pour les piliers du CARPATH Operating System : Stratégie, Acquisition, Conversion, Fidélisation, Pilotage et optimisation.
- 4 icônes pour la méthode : Écouter, Concevoir, Piloter, Améliorer.
Range-les dans design/icons/{nom}.svg. Ces deux jeux d'icônes ne doivent jamais être mélangés ni réutilisés l'un pour l'autre.

Le site est en mode sombre par défaut avec switch vers un mode clair : tous les composants doivent être déclinés dans les deux jeux de tokens.

Signale en tête de réponse toute page où le texte du Copywriter manquerait encore.
```

## Prompt 4 — Front-End Engineer (après merge du Prompt 3)

```
Charge l'agent Front-End Engineer défini dans .agents/agents/frontend-engineer/agent.md et applique-le à la lettre.

Avant de commencer, lis context/BRAND_CONTEXT.md, SITEMAP.md, WIREFRAMES.md, USER_FLOW.md, tous les content/*.md, design/TOKENS.md, design/COMPONENTS.md, design/PAGES/*.md et design/icons/*.svg.

Développe le site en Next.js/Tailwind/Framer Motion. Configure Tailwind directement à partir de design/TOKENS.md (les deux modes sombre/clair). Un composant par entrée de design/COMPONENTS.md, une route par page de SITEMAP.md.

Chaque CTA "Réserver mon audit gratuit" doit pointer vers TidyCal (embed ou lien selon le composant défini par l'UI Designer). N'implémente pas encore le webhook Make → Airtable dans ce prompt, contente-toi du lien/embed TidyCal.

Livre DEPLOY.md avec les instructions de déploiement.

Signale tout écart assumé par rapport aux specs, et tout blocage vers un autre agent.
```

## Prompt 5 — Brand Guardian (à chaque PR, avant merge sur main)

```
Charge l'agent Brand Guardian défini dans .agents/agents/brand-guardian/agent.md.

Review le contenu de cette Pull Request en te basant uniquement sur context/BRAND_CONTEXT.md et la checklist de validation de ton agent.md.

Rends un verdict PASS / PASS AVEC CORRECTIONS MINEURES / BLOCK, suivi des 3 parties attendues dans ton format de réponse.
```

## Prompt 6 — CRO Specialist (en continu, une fois le site en production)

```
Charge l'agent CRO Specialist défini dans .agents/agents/cro-specialist/agent.md et applique-le à la lettre.

Avant de commencer, lis context/BRAND_CONTEXT.md et audite le site en production (comportement réel des pages, pas les specs).

Produis cro/AUDIT.md, cro/BACKLOG.md (priorisé Impact/Confiance/Effort) et cro/FORMS.md.

Rappel : tu ne modifies jamais un texte ou un visuel toi-même. Tout changement de texte est une recommandation adressée au Copywriter, tout changement visuel une recommandation adressée à l'UI Designer. Le CTA "Réserver mon audit gratuit" ne doit jamais être renommé, seulement repositionné.
```
