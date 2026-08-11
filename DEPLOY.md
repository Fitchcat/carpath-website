# Instructions de déploiement — Site CARPATH

Ce document décrit la procédure officielle pour déployer le site web de CARPATH en production.

---

## 1. Stack & Prérequis

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Runtime recommandé** : Node.js 20.x LTS ou supérieur
- **Hébergement préconisé** : Vercel (plateforme native Next.js)

---

## 2. Déploiement rapide sur Vercel (Recommandé)

### Option A : Déploiement automatique via GitHub (Production continuous integration)

1. **Pousser le repo sur GitHub** :
   ```bash
   git add .
   git commit -m "feat: site carpath v1 complet"
   git push origin main
   ```

2. **Connecter le repository sur Vercel** :
   - Rendez-vous sur [vercel.com/new](https://vercel.com/new)
   - Sélectionnez le dépôt GitHub `CARPATH/apps/website`
   - Framework Preset : **Next.js** (détecté automatiquement)
   - Root Directory : `./` (ou `apps/website` selon la structure du mono-repository)
   - Build Command : `npm run build`
   - Output Directory : `.next`

3. **Cliquer sur Deploy** :
   Le build s'exécute automatiquement en ~30 secondes.

---

### Option B : Déploiement via CLI Vercel

```bash
# Installation de Vercel CLI
npm install -g vercel

# Connexion à votre compte Vercel
vercel login

# Déploiement en pré-production / preview
vercel

# Déploiement en production
vercel --prod
```

---

## 3. Variables d'environnement (Optionnelles en v1)

Le site fonctionne nativement sans variable d'environnement obligatoire en v1. Si vous souhaitez personnaliser l'URL TidyCal ou activer des intégrations futures :

| Variable | Usage | Valeur par défaut |
|---|---|---|
| `NEXT_PUBLIC_TIDYCAL_PATH` | Chemin du widget TidyCal | `1vqjov3/30-minute-meeting` |
| `NEXT_PUBLIC_SITE_URL` | URL canonique du site | `https://carpath.fr` |

---

## 4. Intégration TidyCal & Make.com (Post-déploiement)

Une fois le site en production :

1. **Configurer TidyCal** :
   - Vérifiez que le lien `https://tidycal.com/1vqjov3/30-minute-meeting` est actif.
   - Ajoutez le domaine `https://carpath.fr` dans les domaines autorisés pour les embeds TidyCal.

2. **Connecter le Webhook TidyCal vers Make.com** :
   - Dans TidyCal > Integrations > Webhooks : ajoutez l'URL du webhook Make.com.
   - Événements à intercepter : `booking.created`, `booking.canceled`.
   - Dans Make.com : connectez le module Webhook générique au scénario d'écriture dans la base Airtable CARPATH.

---

## 5. Vérifications post-déploiement (Checklist Qualité)

- [x] `npm run build` valide sans aucune erreur TypeScript
- [x] Toutes les routes (`/`, `/methode`, `/systeme`, `/pour-qui`, `/audit-gratuit`, `/mentions-legales`) sont accessibles
- [x] Le bouton ThemeSwitch permet de basculer du mode sombre au mode clair
- [x] Les CTA "Réserver mon audit gratuit" redirigent correctement vers `/audit-gratuit` et l'embed TidyCal
- [x] Accessibilité clavier et balises sémantiques `aria-` validées

---

*Document produit par le Front-End Engineer — CARPATH Website Squad.*
