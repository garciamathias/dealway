export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "transformation-digitale-entreprises",
    title: "La transformation digitale : un levier de croissance pour les entreprises",
    excerpt: "Découvrez comment la transformation digitale peut révolutionner votre entreprise et créer de nouvelles opportunités de croissance.",
    content: `
# La transformation digitale : un levier de croissance pour les entreprises

La transformation digitale n'est plus une option, mais une nécessité pour les entreprises qui souhaitent rester compétitives dans un monde en constante évolution.

## L'importance de la transformation digitale

Dans un contexte économique de plus en plus digitalisé, les entreprises doivent repenser leurs modèles d'affaires, leurs processus et leur relation client. La transformation digitale offre de nombreux avantages :

- **Amélioration de l'efficacité opérationnelle**
- **Meilleure expérience client**
- **Nouvelles opportunités de revenus**
- **Prise de décision basée sur les données**

## Les étapes clés d'une transformation réussie

### 1. Évaluation de l'état actuel
Il est essentiel de faire un audit complet de vos systèmes existants et d'identifier les domaines d'amélioration.

### 2. Définition de la stratégie
Élaborez une feuille de route claire avec des objectifs mesurables et des étapes définies.

### 3. Formation des équipes
Investissez dans la formation de vos collaborateurs pour qu'ils puissent s'adapter aux nouveaux outils et processus.

### 4. Mise en œuvre progressive
Adoptez une approche itérative pour minimiser les risques et permettre des ajustements en cours de route.

## Conclusion

La transformation digitale est un voyage, pas une destination. Les entreprises qui l'embrassent aujourd'hui seront mieux positionnées pour prospérer demain.
`,
    author: {
      name: "Pierre-Marie Fevelat",
      role: "CEO - Dealway",
      avatar: "https://alt.tailus.io/images/team/member-one.webp"
    },
    publishedAt: "2025-01-15",
    readingTime: "5 min",
    category: "Transformation digitale",
    tags: ["digitalisation", "stratégie", "innovation"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
  },
  {
    id: "optimisation-processus-automatisation",
    title: "Optimisation des processus : comment l'automatisation transforme votre entreprise",
    excerpt: "L'automatisation des processus peut considérablement améliorer l'efficacité de votre entreprise. Découvrez les meilleures pratiques.",
    content: `
# Optimisation des processus : comment l'automatisation transforme votre entreprise

L'automatisation des processus métier représente l'une des opportunités les plus significatives pour améliorer l'efficacité opérationnelle et réduire les coûts.

## Les bénéfices de l'automatisation

L'automatisation apporte de nombreux avantages :

- **Réduction des erreurs humaines**
- **Gain de temps considérable**
- **Amélioration de la traçabilité**
- **Libération des ressources pour des tâches à valeur ajoutée**

## Identifier les processus à automatiser

### Critères de sélection
- Processus répétitifs et règlementés
- Volume de transactions élevé
- Processus chronophages
- Tâches sujettes aux erreurs

### Domaines d'application
- Comptabilité et finance
- Ressources humaines
- Service client
- Gestion des stocks

## Technologies d'automatisation

### RPA (Robotic Process Automation)
Les robots logiciels peuvent reproduire les actions humaines sur les interfaces utilisateur.

### Workflows automatisés
Création de flux de travail intelligents qui routent automatiquement les tâches.

### Intelligence artificielle
Intégration de l'IA pour automatiser des processus décisionnels complexes.

## Mise en œuvre réussie

Pour réussir votre projet d'automatisation :

1. **Commencez petit** avec des processus simples
2. **Impliquez les utilisateurs** dès le début
3. **Mesurez les résultats** avec des KPIs clairs
4. **Itérez et améliorez** continuellement

La transformation par l'automatisation est un investissement stratégique qui porte ses fruits sur le long terme.
`,
    author: {
      name: "Alexandre Dubois",
      role: "CTO - Dealway",
      avatar: "https://alt.tailus.io/images/team/member-two.webp"
    },
    publishedAt: "2025-01-10",
    readingTime: "7 min",
    category: "Automatisation",
    tags: ["processus", "automatisation", "efficacité"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
  },
  {
    id: "intelligence-artificielle-business",
    title: "L'intelligence artificielle au service du business : opportunités et défis",
    excerpt: "Comment l'IA peut transformer votre modèle d'affaires et quels sont les défis à anticiper pour une adoption réussie.",
    content: `
# L'intelligence artificielle au service du business : opportunités et défis

L'intelligence artificielle (IA) révolutionne la façon dont les entreprises opèrent, créent de la valeur et interagissent avec leurs clients.

## Les opportunités de l'IA en entreprise

### Amélioration de la prise de décision
L'IA permet d'analyser de grandes quantités de données pour identifier des tendances et prédire des résultats futurs.

### Personnalisation de l'expérience client
- Recommandations personnalisées
- Chatbots intelligents
- Analyse des sentiments clients

### Optimisation opérationnelle
- Maintenance prédictive
- Optimisation de la chaîne d'approvisionnement
- Gestion intelligente des ressources

## Les défis à relever

### Défis techniques
- Qualité et disponibilité des données
- Intégration avec les systèmes existants
- Évolutivité des solutions

### Défis organisationnels
- Formation des équipes
- Changement culturel
- Gouvernance des données

### Défis éthiques et légaux
- Protection de la vie privée
- Biais algorithmiques
- Conformité réglementaire

## Stratégies d'adoption

### 1. Définir une vision claire
Identifiez les cas d'usage prioritaires et les objectifs business.

### 2. Commencer par des projets pilotes
Testez l'IA sur des projets à impact limité avant de généraliser.

### 3. Investir dans les compétences
Formez vos équipes ou recrutez les talents nécessaires.

### 4. Établir une gouvernance solide
Mettez en place des processus pour gérer les données et les modèles IA.

## Conclusion

L'IA représente une opportunité transformatrice pour les entreprises prêtes à investir dans cette technologie. Le succès dépend d'une approche structurée et d'une vision long terme.
`,
    author: {
      name: "Pierre-Marie Fevelat",
      role: "CEO - Dealway",
      avatar: "https://alt.tailus.io/images/team/member-one.webp"
    },
    publishedAt: "2025-01-05",
    readingTime: "8 min",
    category: "Intelligence artificielle",
    tags: ["IA", "innovation", "stratégie"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
  },
  {
    id: "cybersecurite-entreprise",
    title: "Cybersécurité en entreprise : protéger ses données à l'ère numérique",
    excerpt: "Les enjeux de la cybersécurité pour les entreprises modernes et les meilleures stratégies de protection.",
    content: `
# Cybersécurité en entreprise : protéger ses données à l'ère numérique

La cybersécurité est devenue un enjeu majeur pour toutes les entreprises, quelle que soit leur taille.

## Les menaces actuelles

Les cyberattaques se multiplient et se sophistiquent :

- **Ransomwares** : Chiffrement des données contre rançon
- **Phishing** : Vol d'informations par tromperie
- **Attaques par déni de service** : Paralysie des systèmes
- **Vol de données** : Compromission des informations sensibles

## Stratégies de protection

### Formation des employés
La sensibilisation du personnel est la première ligne de défense.

### Mise à jour des systèmes
Maintenir tous les logiciels et systèmes à jour.

### Sauvegarde régulière
Stratégie de sauvegarde 3-2-1 recommandée.

## Conclusion

La cybersécurité nécessite une approche globale et continue pour protéger efficacement l'entreprise.
`,
    author: {
      name: "Alexandre Dubois",
      role: "CTO - Dealway",
      avatar: "https://alt.tailus.io/images/team/member-two.webp"
    },
    publishedAt: "2025-01-12",
    readingTime: "6 min",
    category: "Cybersécurité",
    tags: ["sécurité", "protection", "données"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=400&fit=crop"
  },
  {
    id: "cloud-computing-migration",
    title: "Migration vers le cloud : guide complet pour les entreprises",
    excerpt: "Tout ce qu'il faut savoir pour réussir sa migration vers le cloud computing en toute sécurité.",
    content: `
# Migration vers le cloud : guide complet pour les entreprises

Le cloud computing offre de nombreux avantages aux entreprises modernes.

## Avantages du cloud

- **Réduction des coûts** d'infrastructure
- **Scalabilité** selon les besoins
- **Accessibilité** depuis n'importe où
- **Maintenance** assurée par le fournisseur

## Types de cloud

### Cloud public
Services partagés sur internet.

### Cloud privé
Infrastructure dédiée à une organisation.

### Cloud hybride
Combinaison des deux approches.

## Étapes de migration

1. **Audit** de l'existant
2. **Planification** de la migration
3. **Test** en environnement isolé
4. **Migration** progressive
5. **Optimisation** continue

La migration vers le cloud est un projet stratégique qui nécessite une préparation minutieuse.
`,
    author: {
      name: "Pierre-Marie Fevelat",
      role: "CEO - Dealway",
      avatar: "https://alt.tailus.io/images/team/member-one.webp"
    },
    publishedAt: "2025-01-08",
    readingTime: "7 min",
    category: "Cloud Computing",
    tags: ["cloud", "migration", "infrastructure"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
  },
  {
    id: "data-analytics-decisions",
    title: "Data Analytics : transformer les données en décisions stratégiques",
    excerpt: "Comment exploiter vos données pour prendre des décisions éclairées et améliorer vos performances.",
    content: `
# Data Analytics : transformer les données en décisions stratégiques

Les données sont le nouvel or des entreprises modernes.

## Importance des données

### Prise de décision éclairée
Les données permettent de prendre des décisions basées sur des faits.

### Identification des tendances
Anticiper les évolutions du marché.

### Optimisation des performances
Améliorer l'efficacité opérationnelle.

## Types d'analytics

- **Descriptive** : Que s'est-il passé ?
- **Diagnostique** : Pourquoi cela s'est-il passé ?
- **Prédictive** : Que va-t-il se passer ?
- **Prescriptive** : Que devrait-on faire ?

## Outils et technologies

### Business Intelligence
Tableaux de bord et reporting.

### Machine Learning
Algorithmes d'apprentissage automatique.

### Visualisation de données
Graphiques et représentations visuelles.

L'analytics transforme les données brutes en insights actionables pour l'entreprise.
`,
    author: {
      name: "Alexandre Dubois",
      role: "CTO - Dealway",
      avatar: "https://alt.tailus.io/images/team/member-two.webp"
    },
    publishedAt: "2025-01-03",
    readingTime: "6 min",
    category: "Data Analytics",
    tags: ["données", "analytics", "décision"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
  }
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getCategories(): string[] {
  return [...new Set(blogPosts.map(post => post.category))];
}

export function searchBlogPosts(query: string): BlogPost[] {
  if (!query.trim()) return getAllBlogPosts();
  
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.category.toLowerCase().includes(lowercaseQuery)
  ).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function filterAndSearchBlogPosts(category: string | null, searchQuery: string): BlogPost[] {
  let posts = getAllBlogPosts();
  
  // Filter by category
  if (category) {
    posts = posts.filter(post => post.category === category);
  }
  
  // Filter by search query
  if (searchQuery.trim()) {
    const lowercaseQuery = searchQuery.toLowerCase();
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }
  
  return posts;
}

export function paginatePosts(posts: BlogPost[], page: number, postsPerPage: number = 6) {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  
  return {
    posts: paginatedPosts,
    totalPages: Math.ceil(posts.length / postsPerPage),
    totalPosts: posts.length,
    hasMore: endIndex < posts.length
  };
} 