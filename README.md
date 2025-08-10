# Landing DealWay

Landing page moderne pour DealWay, plateforme de vente d'entreprises avec intelligence artificielle.

## 🚀 Architecture

Ce projet utilise une architecture frontend simple avec Next.js, sans backend séparé.

## 🛠️ Technologies

- **Frontend** : Next.js 15 avec App Router
- **Styling** : Tailwind CSS
- **UI Components** : shadcn/ui
- **Animations** : Framer Motion
- **TypeScript** : Configuration complète

## 📁 Structure du projet

```
landingdealway/
├── src/
│   ├── app/                 # Pages Next.js (App Router)
│   ├── components/          # Composants React réutilisables
│   └── lib/                 # Utilitaires et configurations
├── public/                  # Assets statiques
└── scripts/                 # Scripts de build et outils
```

## 🚀 Démarrage rapide

1. **Installation des dépendances** :
```bash
npm install
# ou
pnpm install
```

2. **Lancement du serveur de développement** :
```bash
npm run dev
# ou
pnpm dev
```

3. **Ouvrir dans le navigateur** :
Rendez-vous sur [http://localhost:3000](http://localhost:3000)

## 📝 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting du code
```

## 🎨 Composants principaux

- **HeroSection** : Section d'accueil avec vidéo et CTA
- **Features** : Présentation des fonctionnalités clés
- **Timeline** : Processus de vente étape par étape
- **FAQ** : Questions fréquemment posées
- **FinalCTA** : Appel à l'action final

## 🚀 Déploiement

Le projet est optimisé pour un déploiement sur Vercel :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Pour d'autres plateformes, suivez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
