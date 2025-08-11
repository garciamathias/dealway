# Projet Next.js avec shadcn/ui

Un projet Next.js moderne configuré avec la librairie de composants shadcn/ui.

## 🚀 Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Librairie de composants UI élégants
- **ESLint** - Linting et formatage du code

## 📦 Installation

Le projet est déjà configuré et prêt à l'emploi. Les dépendances sont installées et shadcn/ui est configuré.

## 🏃‍♂️ Démarrage rapide

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

## 🎨 Ajouter des composants shadcn/ui

Pour ajouter de nouveaux composants shadcn/ui :

```bash
# Ajouter un composant spécifique
npx shadcn@latest add button

# Ajouter plusieurs composants
npx shadcn@latest add input textarea select

# Voir tous les composants disponibles
npx shadcn@latest add
```

## 📁 Structure du projet

```
src/
├── app/                 # App Router de Next.js
│   ├── globals.css     # Styles globaux avec Tailwind
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── components/
│   └── ui/             # Composants shadcn/ui
├── lib/
│   └── utils.ts        # Utilitaires (cn function)
└── ...
```

## 🛠️ Commandes disponibles

```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Construire l'application pour la production
npm run start        # Démarrer l'application en mode production
npm run lint         # Vérifier le code avec ESLint
```

## 📚 Ressources utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation shadcn/ui](https://ui.shadcn.com)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)

## 🎯 Prochaines étapes

1. Explorez les composants shadcn/ui disponibles
2. Personnalisez le thème dans `components.json`
3. Ajoutez vos propres composants dans `src/components/`
4. Configurez votre base de données et vos API routes si nécessaire

Bon développement ! 🚀
