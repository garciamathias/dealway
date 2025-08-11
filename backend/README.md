# Backend Arcenal - FastAPI

Backend FastAPI pour l'application Arcenal avec communication optimisée avec le frontend Next.js.

## 🚀 Installation rapide

1. **Configurer l'environnement virtuel et installer les dépendances :**
   ```bash
   cd backend
   chmod +x setup.sh
   ./setup.sh
   ```

2. **Activer l'environnement virtuel :**
   ```bash
   source venv/bin/activate
   ```

3. **Démarrer le serveur de développement :**
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

## 📁 Structure du projet

```
backend/
├── main.py              # Point d'entrée principal
├── api/
│   ├── __init__.py
│   └── routes.py        # Routes organisées
├── requirements.txt     # Dépendances Python
├── .env.example        # Variables d'environnement exemple
├── .gitignore          # Fichiers à ignorer
├── setup.sh            # Script de configuration
└── README.md           # Cette documentation
```

## 🔧 Configuration

### Variables d'environnement

Copiez `.env.example` vers `.env` et adaptez les valeurs :

```bash
cp .env.example .env
```

### CORS

Le backend est configuré pour communiquer avec le frontend Next.js sur `http://localhost:3000`. Les CORS sont configurés automatiquement.

## 📚 API Documentation

Une fois le serveur démarré, accédez à :

- **Documentation interactive :** http://localhost:8000/docs
- **Documentation alternative :** http://localhost:8000/redoc
- **Test de connexion :** http://localhost:8000/api/test

## 🛠 Endpoints disponibles

### Routes principales
- `GET /` - Accueil de l'API
- `GET /health` - Vérification de santé
- `GET /api/test` - Test de communication frontend-backend

### Routes métier
- `GET /api/blog` - Articles de blog
- `GET /api/clients` - Liste des clients
- `POST /api/contact` - Formulaire de contact
- `GET /api/meetings` - Rendez-vous
- `GET /api/stats` - Statistiques

## 🔄 Communication avec le frontend

Le backend est configuré pour communiquer parfaitement avec le frontend Next.js :

1. **CORS configuré** pour `localhost:3000`
2. **JSON responses** compatibles avec React
3. **Validation automatique** avec Pydantic
4. **Gestion d'erreurs** standardisée

### Exemple d'utilisation côté frontend

```typescript
// Dans votre composant React/Next.js
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/test');
    const data = await response.json();
    console.log(data); // { success: true, message: "Communication frontend-backend établie !" }
  } catch (error) {
    console.error('Erreur de communication:', error);
  }
};
```

## 🔧 Développement

### Commandes utiles

```bash
# Démarrer en mode développement avec rechargement automatique
uvicorn main:app --reload

# Démarrer avec host et port spécifiques
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Installer une nouvelle dépendance
pip install nouvelle-dependance
pip freeze > requirements.txt
```

### Ajouter de nouvelles routes

1. Modifiez `api/routes.py` pour ajouter vos endpoints
2. Importez le routeur dans `main.py` si nécessaire
3. La documentation sera automatiquement mise à jour

## 🚨 Production

Pour la production, n'oubliez pas de :

1. Changer les clés secrètes dans `.env`
2. Configurer une base de données robuste
3. Utiliser un serveur WSGI comme Gunicorn
4. Configurer HTTPS
5. Mettre à jour les URLs CORS

## 🤝 Support

La configuration garantit une communication parfaite entre le frontend et le backend. En cas de problème :

1. Vérifiez que les deux serveurs sont démarrés
2. Contrôlez les logs pour les erreurs CORS
3. Testez la route `/api/test` depuis le frontend 