from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
from typing import Optional

from schemas.user_schemas import UserCreate, UserLogin, Token, TokenData, UserResponse
from database.firebase_config import get_firestore_client
from config.settings import settings

router = APIRouter()

# Configuration de la sécurité
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")

def verify_password(plain_password, hashed_password):
    """Vérifier le mot de passe"""
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    """Hasher le mot de passe"""
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    """Créer un token JWT"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    """Obtenir l'utilisateur actuel à partir du token"""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except JWTError:
        raise credentials_exception
    
    # Récupérer l'utilisateur depuis Firebase
    db = get_firestore_client()
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    users_ref = db.collection('users')
    user_query = users_ref.where('email', '==', token_data.email).limit(1)
    user_docs = user_query.stream()
    
    user_doc = None
    for doc in user_docs:
        user_doc = doc
        break
    
    if user_doc is None:
        raise credentials_exception
    
    user_data = user_doc.to_dict()
    user_data['id'] = user_doc.id
    return user_data

@router.post("/register", response_model=UserResponse)
async def register(user: UserCreate):
    """Inscription d'un nouvel utilisateur"""
    db = get_firestore_client()
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    # Vérifier si l'utilisateur existe déjà
    users_ref = db.collection('users')
    existing_user = users_ref.where('email', '==', user.email).limit(1).stream()
    
    for doc in existing_user:
        raise HTTPException(
            status_code=400,
            detail="Un utilisateur avec cet email existe déjà"
        )
    
    # Hasher le mot de passe
    hashed_password = get_password_hash(user.password)
    
    # Créer l'utilisateur
    user_data = {
        "email": user.email,
        "nom": user.nom,
        "prenom": user.prenom,
        "telephone": user.telephone,
        "password_hash": hashed_password,
        "date_creation": datetime.utcnow(),
        "actif": True
    }
    
    # Sauvegarder dans Firebase
    doc_ref = users_ref.add(user_data)
    user_id = doc_ref[1].id
    
    # Retourner l'utilisateur créé
    return UserResponse(
        id=user_id,
        email=user.email,
        nom=user.nom,
        prenom=user.prenom,
        telephone=user.telephone,
        date_creation=user_data["date_creation"],
        actif=True
    )

@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    """Connexion et génération de token"""
    db = get_firestore_client()
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    # Rechercher l'utilisateur
    users_ref = db.collection('users')
    user_query = users_ref.where('email', '==', form_data.username).limit(1)
    user_docs = user_query.stream()
    
    user_doc = None
    for doc in user_docs:
        user_doc = doc
        break
    
    if user_doc is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    user_data = user_doc.to_dict()
    
    # Vérifier le mot de passe
    if not verify_password(form_data.password, user_data["password_hash"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Créer le token
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user_data["email"]}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me", response_model=UserResponse)
async def read_users_me(current_user: dict = Depends(get_current_user)):
    """Obtenir les informations de l'utilisateur connecté"""
    return UserResponse(
        id=current_user["id"],
        email=current_user["email"],
        nom=current_user["nom"],
        prenom=current_user["prenom"],
        telephone=current_user.get("telephone"),
        date_creation=current_user["date_creation"],
        actif=current_user["actif"]
    ) 