import firebase_admin
from firebase_admin import credentials, firestore, auth
from config.settings import settings
import json
import os
from typing import Optional

# Instance globale de la base de données
db: Optional[firestore.Client] = None

def initialize_firebase():
    """Initialise Firebase avec les credentials"""
    global db
    
    try:
        # Vérifier si Firebase est déjà initialisé
        if firebase_admin._apps:
            print("Firebase déjà initialisé")
            db = firestore.client()
            return db
        
        # Essayer d'initialiser avec un fichier de credentials
        cred_path = os.path.join(os.path.dirname(__file__), 'firebase-credentials.json')
        
        if os.path.exists(cred_path):
            # Utiliser le fichier de credentials
            cred = credentials.Certificate(cred_path)
            firebase_admin.initialize_app(cred)
            print("Firebase initialisé avec le fichier de credentials")
        else:
            # Créer les credentials à partir des variables d'environnement
            if settings.FIREBASE_PROJECT_ID and settings.FIREBASE_PRIVATE_KEY:
                firebase_credentials = {
                    "type": "service_account",
                    "project_id": settings.FIREBASE_PROJECT_ID,
                    "private_key_id": settings.FIREBASE_PRIVATE_KEY_ID,
                    "private_key": settings.FIREBASE_PRIVATE_KEY.replace("\\n", "\n"),
                    "client_email": settings.FIREBASE_CLIENT_EMAIL,
                    "client_id": settings.FIREBASE_CLIENT_ID,
                    "auth_uri": settings.FIREBASE_AUTH_URI,
                    "token_uri": settings.FIREBASE_TOKEN_URI,
                    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                    "client_x509_cert_url": settings.FIREBASE_CLIENT_CERT_URL
                }
                
                cred = credentials.Certificate(firebase_credentials)
                firebase_admin.initialize_app(cred)
                print("Firebase initialisé avec les variables d'environnement")
            else:
                # Mode développement - utiliser les credentials par défaut
                print("⚠️  Mode développement: Firebase non configuré")
                print("   Veuillez configurer Firebase pour utiliser la base de données")
                return None
        
        # Initialiser le client Firestore
        db = firestore.client()
        print("✅ Firestore initialisé avec succès")
        return db
        
    except Exception as e:
        print(f"❌ Erreur lors de l'initialisation de Firebase: {e}")
        return None

def get_firestore_client():
    """Retourne le client Firestore"""
    global db
    if db is None:
        db = initialize_firebase()
    return db

def verify_firebase_connection():
    """Vérifie la connexion à Firebase"""
    try:
        client = get_firestore_client()
        if client is None:
            return False
        
        # Test simple de lecture
        collections = client.collections()
        print("✅ Connexion Firebase vérifiée")
        return True
    except Exception as e:
        print(f"❌ Erreur de connexion Firebase: {e}")
        return False 