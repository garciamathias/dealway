#!/bin/bash

# Script de configuration du backend FastAPI

echo "🚀 Configuration du backend FastAPI..."

# Vérifier si Python 3 est installé
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Créer l'environnement virtuel
echo "📦 Création de l'environnement virtuel..."
python3 -m venv venv

# Activer l'environnement virtuel
echo "🔧 Activation de l'environnement virtuel..."
source venv/bin/activate

# Mettre à jour pip
echo "⬆️ Mise à jour de pip..."
pip install --upgrade pip

# Installer les dépendances
echo "📚 Installation des dépendances..."
pip install -r requirements.txt

echo "✅ Configuration terminée !"
echo ""
echo "Pour démarrer le serveur de développement :"
echo "1. Activez l'environnement virtuel : source venv/bin/activate"
echo "2. Lancez le serveur : uvicorn main:app --reload --host 0.0.0.0 --port 8000"
echo ""
echo "Le backend sera disponible sur : http://localhost:8000"
echo "Documentation API : http://localhost:8000/docs" 