#!/bin/bash

# Script pour créer une version inversée de la vidéo

INPUT_VIDEO="public/video/UpdateFade_smaller.mp4"
OUTPUT_VIDEO="public/video/UpdateFade_smaller_reverse.mp4"

# Vérifier si ffmpeg est installé
if ! command -v ffmpeg &> /dev/null; then
    echo "ffmpeg n'est pas installé. Veuillez l'installer avec: brew install ffmpeg"
    exit 1
fi

# Vérifier si le fichier d'entrée existe
if [ ! -f "$INPUT_VIDEO" ]; then
    echo "Fichier vidéo non trouvé: $INPUT_VIDEO"
    exit 1
fi

echo "Création de la vidéo inversée..."

# Créer la vidéo inversée avec ffmpeg
ffmpeg -i "$INPUT_VIDEO" -vf reverse -af areverse "$OUTPUT_VIDEO" -y

if [ $? -eq 0 ]; then
    echo "✅ Vidéo inversée créée avec succès: $OUTPUT_VIDEO"
else
    echo "❌ Erreur lors de la création de la vidéo inversée"
    exit 1
fi