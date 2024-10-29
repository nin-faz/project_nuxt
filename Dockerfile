# Utilise l'image officielle de Node.js
FROM node:18

# Définir le dossier de travail dans le conteneur
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Commande pour lancer l'application en mode développement
CMD ["npm", "run", "dev"]
