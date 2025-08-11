#!/bin/bash

# Script pour traiter la vidéo hero : couper les 2 dernières secondes et créer la version inversée

INPUT_VIDEO="public/video/UpdateFade_smaller.mp4"
TRIMMED_VIDEO="public/video/UpdateFade_trimmed.mp4"
REVERSED_VIDEO="public/video/UpdateFade_trimmed_reverse.mp4"

# Vérifier si ffmpeg est installé
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg n'est pas installé. Veuillez l'installer avec: brew install ffmpeg"
    exit 1
fi

# Vérifier si le fichier d'entrée existe
if [ ! -f "$INPUT_VIDEO" ]; then
    echo "❌ Fichier vidéo non trouvé: $INPUT_VIDEO"
    exit 1
fi

echo "📹 Traitement de la vidéo hero..."

# Obtenir la durée de la vidéo
DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$INPUT_VIDEO")
echo "Durée originale: ${DURATION}s"

# Calculer la nouvelle durée (moins 2 secondes)
NEW_DURATION=$(echo "$DURATION - 2" | bc)
echo "Nouvelle durée: ${NEW_DURATION}s"

# Étape 1: Couper les 2 dernières secondes
echo "✂️  Suppression des 2 dernières secondes (fondu noir)..."
ffmpeg -i "$INPUT_VIDEO" -t "$NEW_DURATION" -c copy "$TRIMMED_VIDEO" -y

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de la découpe de la vidéo"
    exit 1
fi
echo "✅ Vidéo coupée créée: $TRIMMED_VIDEO"

# Étape 2: Créer la version inversée
echo "🔄 Création de la version inversée..."
ffmpeg -i "$TRIMMED_VIDEO" -vf reverse -af areverse "$REVERSED_VIDEO" -y

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de la création de la vidéo inversée"
    exit 1
fi
echo "✅ Vidéo inversée créée: $REVERSED_VIDEO"

echo ""
echo "🎉 Traitement terminé avec succès!"
echo "Les fichiers suivants ont été créés:"
echo "  - $TRIMMED_VIDEO (vidéo sans fondu noir)"
echo "  - $REVERSED_VIDEO (version inversée)"
echo ""
echo "Le composant HeroSection utilise maintenant ces nouvelles vidéos pour créer une boucle parfaite."