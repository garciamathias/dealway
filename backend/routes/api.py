from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional
from database.firebase_config import get_firestore_client
from routes.auth import get_current_user
from datetime import datetime

router = APIRouter()

class ContactForm(BaseModel):
    nom: str
    prenom: str
    email: str
    telephone: Optional[str] = None
    message: str

class NewsletterSubscription(BaseModel):
    email: str

@router.post("/contact")
async def submit_contact_form(contact: ContactForm):
    """Soumettre le formulaire de contact"""
    db = get_firestore_client()
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    try:
        # Sauvegarder le message de contact
        contact_data = {
            "nom": contact.nom,
            "prenom": contact.prenom,
            "email": contact.email,
            "telephone": contact.telephone,
            "message": contact.message,
            "date_creation": datetime.utcnow(),
            "traite": False
        }
        
        db.collection('contacts').add(contact_data)
        
        return {"message": "Votre message a été envoyé avec succès. Nous vous répondrons bientôt."}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de l'envoi: {str(e)}")

@router.post("/newsletter")
async def subscribe_newsletter(subscription: NewsletterSubscription):
    """S'inscrire à la newsletter"""
    db = get_firestore_client()
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    try:
        # Vérifier si l'email existe déjà
        newsletter_ref = db.collection('newsletter')
        existing = newsletter_ref.where('email', '==', subscription.email).limit(1).stream()
        
        for doc in existing:
            return {"message": "Cet email est déjà inscrit à notre newsletter."}
        
        # Ajouter le nouvel abonné
        newsletter_data = {
            "email": subscription.email,
            "date_inscription": datetime.utcnow(),
            "actif": True
        }
        
        db.collection('newsletter').add(newsletter_data)
        
        return {"message": "Inscription à la newsletter réussie !"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de l'inscription: {str(e)}")

@router.get("/stats")
async def get_platform_stats():
    """Obtenir les statistiques de la plateforme pour la landing page"""
    db = get_firestore_client()
    if db is None:
        # Retourner des statistiques par défaut en cas de problème de connexion
        return {
            "users_count": 0,
            "transactions_count": 0,
            "total_savings": "0€",
            "status": "offline"
        }
    
    try:
        # Compter les utilisateurs
        users_count = len(list(db.collection('users').stream()))
        
        # Compter les messages de contact
        contacts_count = len(list(db.collection('contacts').stream()))
        
        # Compter les inscriptions newsletter
        newsletter_count = len(list(db.collection('newsletter').stream()))
        
        return {
            "users_count": users_count,
            "contacts_count": contacts_count,
            "newsletter_count": newsletter_count,
            "status": "online"
        }
    
    except Exception as e:
        return {
            "users_count": 0,
            "contacts_count": 0,
            "newsletter_count": 0,
            "status": "error",
            "error": str(e)
        }

@router.get("/health-detailed")
async def detailed_health_check():
    """Vérification de santé détaillée"""
    db = get_firestore_client()
    
    health_status = {
        "api": "healthy",
        "database": "unknown",
        "timestamp": datetime.utcnow().isoformat()
    }
    
    if db is None:
        health_status["database"] = "disconnected"
        health_status["overall"] = "degraded"
    else:
        try:
            # Test de connexion à la base de données
            collections = list(db.collections())
            health_status["database"] = "connected"
            health_status["overall"] = "healthy"
        except Exception as e:
            health_status["database"] = "error"
            health_status["database_error"] = str(e)
            health_status["overall"] = "unhealthy"
    
    return health_status 