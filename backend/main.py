from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Dict, Any
import uvicorn
import os
from dotenv import load_dotenv

# Charger les variables d'environnement
load_dotenv()

# Configuration de l'application
app = FastAPI(
    title="Arcenal Backend API",
    description="Backend API pour l'application Arcenal",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configuration CORS pour communication avec le frontend
origins = [
    "http://localhost:3000",  # Frontend Next.js en développement
    "http://127.0.0.1:3000",
    "https://localhost:3000",
    os.getenv("FRONTEND_URL", "http://localhost:3000"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Modèles Pydantic pour la validation des données
class HealthResponse(BaseModel):
    status: str
    message: str
    version: str

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# Routes de base
@app.get("/", response_model=Dict[str, str])
async def root():
    """Route racine de l'API"""
    return {
        "message": "Bienvenue sur l'API Arcenal !",
        "docs": "/docs",
        "health": "/health"
    }

@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Vérification de l'état de santé de l'API"""
    return HealthResponse(
        status="healthy",
        message="L'API fonctionne correctement",
        version="1.0.0"
    )

# Routes API
@app.get("/api/test")
async def test_connection():
    """Test de connexion entre frontend et backend"""
    return {
        "success": True,
        "message": "Communication frontend-backend établie !",
        "timestamp": "2024-01-01T00:00:00Z"
    }

@app.post("/api/contact")
async def contact_form(form_data: ContactForm):
    """Traitement du formulaire de contact"""
    # Ici, vous pouvez ajouter la logique pour traiter le formulaire
    # Par exemple : envoi d'email, sauvegarde en base de données, etc.
    
    return {
        "success": True,
        "message": f"Merci {form_data.name}, votre message a été reçu !",
        "data": {
            "name": form_data.name,
            "email": form_data.email,
            "message_preview": form_data.message[:50] + "..." if len(form_data.message) > 50 else form_data.message
        }
    }

@app.get("/api/blog")
async def get_blog_posts():
    """Récupération des articles de blog"""
    # Exemple de données - remplacez par votre logique de base de données
    return {
        "posts": [
            {
                "id": 1,
                "title": "Premier article",
                "excerpt": "Ceci est un exemple d'article de blog...",
                "date": "2024-01-01",
                "author": "Équipe Arcenal"
            },
            {
                "id": 2,
                "title": "Deuxième article",
                "excerpt": "Un autre exemple d'article...",
                "date": "2024-01-02",
                "author": "Équipe Arcenal"
            }
        ]
    }

@app.get("/api/clients")
async def get_clients():
    """Récupération des informations clients"""
    return {
        "clients": [
            {
                "id": 1,
                "name": "Client Example",
                "logo": "/logos/client1.png",
                "description": "Description du client"
            }
        ]
    }

# Gestionnaire d'erreurs global
@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "Erreur interne du serveur",
            "detail": str(exc) if os.getenv("DEBUG", "False").lower() == "true" else "Erreur interne"
        }
    )

if __name__ == "__main__":
    # Configuration pour le développement
    uvicorn.run(
        "main:app",
        host=os.getenv("HOST", "0.0.0.0"),
        port=int(os.getenv("PORT", 8000)),
        reload=True,
        log_level="info"
    ) 