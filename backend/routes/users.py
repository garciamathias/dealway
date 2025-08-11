from fastapi import APIRouter, HTTPException, Depends
from typing import List
from schemas.user_schemas import UserResponse, UserUpdate
from database.firebase_config import get_firestore_client
from routes.auth import get_current_user

router = APIRouter()

@router.get("/", response_model=List[UserResponse])
async def get_users(current_user: dict = Depends(get_current_user)):
    """Obtenir la liste des utilisateurs (nécessite une authentification)"""
    db = get_firestore_client()
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    users_ref = db.collection('users')
    users = users_ref.stream()
    
    user_list = []
    for user_doc in users:
        user_data = user_doc.to_dict()
        user_response = UserResponse(
            id=user_doc.id,
            email=user_data["email"],
            nom=user_data["nom"],
            prenom=user_data["prenom"],
            telephone=user_data.get("telephone"),
            date_creation=user_data["date_creation"],
            actif=user_data["actif"]
        )
        user_list.append(user_response)
    
    return user_list

@router.get("/{user_id}", response_model=UserResponse)
async def get_user(user_id: str, current_user: dict = Depends(get_current_user)):
    """Obtenir un utilisateur par son ID"""
    db = get_firestore_client()
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    user_ref = db.collection('users').document(user_id)
    user_doc = user_ref.get()
    
    if not user_doc.exists:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    
    user_data = user_doc.to_dict()
    return UserResponse(
        id=user_doc.id,
        email=user_data["email"],
        nom=user_data["nom"],
        prenom=user_data["prenom"],
        telephone=user_data.get("telephone"),
        date_creation=user_data["date_creation"],
        actif=user_data["actif"]
    )

@router.put("/me", response_model=UserResponse)
async def update_current_user(
    user_update: UserUpdate,
    current_user: dict = Depends(get_current_user)
):
    """Mettre à jour les informations de l'utilisateur connecté"""
    db = get_firestore_client()
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection error")
    
    # Préparer les données à mettre à jour
    update_data = {}
    if user_update.nom is not None:
        update_data["nom"] = user_update.nom
    if user_update.prenom is not None:
        update_data["prenom"] = user_update.prenom
    if user_update.telephone is not None:
        update_data["telephone"] = user_update.telephone
    
    if not update_data:
        raise HTTPException(status_code=400, detail="Aucune donnée à mettre à jour")
    
    # Mettre à jour l'utilisateur
    user_ref = db.collection('users').document(current_user["id"])
    user_ref.update(update_data)
    
    # Récupérer l'utilisateur mis à jour
    updated_user = user_ref.get()
    updated_data = updated_user.to_dict()
    
    return UserResponse(
        id=updated_user.id,
        email=updated_data["email"],
        nom=updated_data["nom"],
        prenom=updated_data["prenom"],
        telephone=updated_data.get("telephone"),
        date_creation=updated_data["date_creation"],
        actif=updated_data["actif"]
    ) 