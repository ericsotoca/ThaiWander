# 🌴 ThaiWander - Planificateur de Road Trip & Camping en Thaïlande

**ThaiWander** est une application web full-stack moderne (React + Express) conçue pour planifier le road trip de camping idéal en Thaïlande. Elle intègre un itinéraire interactif complet, une carte dynamique et un assistant intelligent connecté à l'IA Gemini.

---

## ✨ Fonctionnalités clés

1. **Itinéraire de Camping de 14 Étapes** : Un trajet pré-configuré complet de Bangkok à Chiang Rai, passant par les plus beaux parcs nationaux thaïlandais.
2. **Carte Interactive Haute Fidélité (Leaflet)** : Visualisation chronologique du parcours avec des marqueurs personnalisés par jour et type d'étape (Camping, Hôtel, Attraction, Restaurant, Activité).
3. **Volet Bureau Collapsible (Rabattable)** : Sur grand écran, repliez le volet Itinéraire de gauche ou l'Assistant IA de droite en un clic pour profiter de la carte en plein écran !
4. **Assistant IA & Expert de Route** : Discutez en direct avec un expert virtuel francophone ou lancez une analyse logistique et rythme du trajet.
5. **Géocodage intelligent** : Ajoutez n'importe quel lieu en Thaïlande, l'IA s'occupe de trouver ses coordonnées GPS et d'ajouter de précieux conseils pratiques.
6. **Persistence locale** : Vos modifications, notes et budgets sont instantanément sauvegardés dans le navigateur (`localStorage`).

---

## 🚀 Comment l'utiliser localement depuis GitHub

Suivez ces étapes simples pour faire fonctionner le projet sur votre machine.

### Préréquis
Assurez-vous d'avoir installé **Node.js** (version 18 ou supérieure) et **npm** sur votre ordinateur.

### 1. Cloner le dépôt
Récupérez le projet sur votre ordinateur :
```bash
git clone <URL_DE_VOTRE_DEPOT_GITHUB>
cd thaiwander
```

### 2. Installer les dépendances
Installez l'ensemble des modules requis pour faire tourner l'application (client et serveur) :
```bash
npm install
```

### 3. Configurer les variables d'environnement
Créez un fichier `.env` à la racine du projet en copiant le modèle fourni :
```bash
cp .env.example .env
```
Ouvrez le fichier `.env` nouvellement créé et renseignez votre clé API Gemini de Google :
```env
GEMINI_API_KEY="votre_cle_api_gemini_ici"
```
*(Vous pouvez obtenir une clé API gratuitement sur [Google AI Studio](https://aistudio.google.com/))*

### 4. Lancer en mode Développement
Démarrez le serveur de développement local :
```bash
npm run dev
```
L'application démarre et est accessible à l'adresse suivante :
**`http://localhost:3000`**

### 5. Compiler et lancer en mode Production
Pour tester l'application dans des conditions réelles de production :
```bash
# 1. Compiler le client Vite et packager le serveur Express
npm run build

# 2. Démarrer le serveur de production
npm run start
```

---

## 🛠️ Architecture technique

- **Frontend** : React 18, Vite, Tailwind CSS pour le style, Lucide-React pour les icônes, et Leaflet pour les cartes géographiques interactives.
- **Backend** : Express.js pour servir l'application et gérer les requêtes d'API de géocodage, de chat, et d'optimisation d'itinéraire.
- **IA** : SDK `@google/genai` officiel avec le modèle **Gemini 3.8 Flash** pour un temps de réponse rapide et de haute qualité.
