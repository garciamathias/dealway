from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
from config.settings import settings
from routes import auth, users, api
from database.firebase_config import initialize_firebase

# Initialiser Firebase
initialize_firebase()

app = FastAPI(
    title="DealWay API",
    description="API backend pour la plateforme DealWay",
    version="1.0.0",
)

# Configuration CORS pour permettre la communication avec le frontend Next.js
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # Frontend Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes principales
app.include_router(auth.router, prefix="/auth", tags=["authentication"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(api.router, prefix="/api", tags=["api"])

@app.get("/")
async def root():
    """Endpoint de base pour vérifier que l'API fonctionne"""
    return JSONResponse(
        content={
            "message": "Bienvenue sur l'API DealWay",
            "status": "active",
            "version": "1.0.0"
        }
    )

@app.get("/health")
async def health_check():
    """Endpoint de vérification de santé"""
    return JSONResponse(
        content={
            "status": "healthy",
            "message": "L'API fonctionne correctement"
        }
    )

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    ) 