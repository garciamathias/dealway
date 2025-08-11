from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

# Création du routeur principal
router = APIRouter(prefix="/api", tags=["api"])

# Modèles de données
class BlogPost(BaseModel):
    id: int
    title: str
    content: str
    excerpt: str
    author: str
    date: str
    published: bool = True

class Client(BaseModel):
    id: int
    name: str
    logo: Optional[str] = None
    description: str
    website: Optional[str] = None

class Meeting(BaseModel):
    id: int
    title: str
    date: str
    time: str
    duration: int  # en minutes
    attendees: List[str]
    description: Optional[str] = None

# Routes Blog
@router.get("/blog/posts", response_model=List[BlogPost])
async def get_all_blog_posts():
    """Récupérer tous les articles de blog"""
    # Exemple de données - remplacez par votre logique de base de données
    return [
        BlogPost(
            id=1,
            title="L'innovation dans le digital",
            content="Contenu complet de l'article...",
            excerpt="L'innovation digitale transforme notre façon de travailler...",
            author="Équipe Arcenal",
            date="2024-01-15"
        ),
        BlogPost(
            id=2,
            title="Stratégies de croissance",
            content="Contenu complet de l'article...",
            excerpt="Comment développer votre entreprise avec les bons outils...",
            author="Équipe Arcenal",
            date="2024-01-10"
        )
    ]

@router.get("/blog/posts/{post_id}", response_model=BlogPost)
async def get_blog_post(post_id: int):
    """Récupérer un article de blog spécifique"""
    if post_id == 1:
        return BlogPost(
            id=1,
            title="L'innovation dans le digital",
            content="Contenu complet de l'article avec tous les détails...",
            excerpt="L'innovation digitale transforme notre façon de travailler...",
            author="Équipe Arcenal",
            date="2024-01-15"
        )
    raise HTTPException(status_code=404, detail="Article non trouvé")

# Routes Clients
@router.get("/clients", response_model=List[Client])
async def get_all_clients():
    """Récupérer tous les clients"""
    return [
        Client(
            id=1,
            name="TechCorp",
            logo="/logos/techcorp.png",
            description="Leader dans la technologie",
            website="https://techcorp.com"
        ),
        Client(
            id=2,
            name="InnovStart",
            logo="/logos/innovstart.png",
            description="Startup innovante",
            website="https://innovstart.com"
        )
    ]

@router.get("/clients/{client_id}", response_model=Client)
async def get_client(client_id: int):
    """Récupérer un client spécifique"""
    if client_id == 1:
        return Client(
            id=1,
            name="TechCorp",
            logo="/logos/techcorp.png",
            description="Leader dans la technologie avec plus de 10 ans d'expérience",
            website="https://techcorp.com"
        )
    raise HTTPException(status_code=404, detail="Client non trouvé")

# Routes Meetings
@router.get("/meetings", response_model=List[Meeting])
async def get_all_meetings():
    """Récupérer tous les rendez-vous"""
    return [
        Meeting(
            id=1,
            title="Réunion de stratégie",
            date="2024-02-01",
            time="14:00",
            duration=60,
            attendees=["John Doe", "Jane Smith"],
            description="Discussion sur la stratégie 2024"
        ),
        Meeting(
            id=2,
            title="Présentation client",
            date="2024-02-03",
            time="10:00",
            duration=90,
            attendees=["Client TechCorp", "Équipe Arcenal"],
            description="Présentation du nouveau projet"
        )
    ]

@router.post("/meetings", response_model=Meeting)
async def create_meeting(meeting: Meeting):
    """Créer un nouveau rendez-vous"""
    # Ici, vous ajouteriez la logique pour sauvegarder en base de données
    return meeting

# Routes utilitaires
@router.get("/stats")
async def get_stats():
    """Récupérer les statistiques générales"""
    return {
        "total_clients": 25,
        "total_projects": 47,
        "total_meetings": 156,
        "success_rate": 98.5
    } 