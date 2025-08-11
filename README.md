🧠 Espace de Travail Collaboratif 
![Licence: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)      
   
Plateforme web permettant aux membres d’une entreprise ou d'une organisation de collaborer efficacement autour de **projets**, **tâches**, **documents**, **messages** et de **notifications** en temps réel , avec des statistiques représentatives de nos activités et un **calendrier** de tâches pour mieux les visualiser.

## 📚 Table des matières        

- [🎯 Objectif](#objectif)  
- [🛠️ Technologies utilisées](#technologies-utilisées)  
- [⚙️ Installation](#installation)  
- [📦 API](#api)  
- [🔐 Rôles](#rôles)  
- [📦 Dépendances et bibliothèques utilisées](#dépendances-et-bibliothèques-utilisées)  
- [📜 Scripts NPM importants](#scripts-npm-importants)  
- [🧪 Tests](#tests)  
- [✍️ Auteur](#auteur)  
 
---

🎯 Objectif  

Cette application permet de :
- S'inscire et se connecter via l'authentification avec Next-Auth
- Gérer les **projets** par **département**
- Assigner des **membres** avec des **rôles spécifiques** par projet
- Créer et attribuer des **tâches**
- Partager des **documents** et des **messages** aux membres, projets ou départements
- **Notifier** automatiquement les utilisateurs selon les événements

---

🛠️ Technologies utilisées

- **Next.js (App Router)**  
- **TypeScript**  
- **Prisma (ORM)**  
- **PostgreSQL**  
- **pgAdmin 4**  
- **TailwindCSS**

---

⚙️ Installation

1. Cloner le projet
  git clone https://github.com/zorothecoder00/espace-travail.git
  cd espace-travail

2. Installer les dépendances
  npm install

3. Configuration environnementale
  Créer un fichier .env à la racine :
  DATABASE_URL="postgresql://postgres:admin@localhost:5432/espace-travail"
  NEXTAUTH_SECRET=Kz1GLzNRImLwU9utrpTd9LvemaUXZiW8chDXWIT9/po=
  NEXTAUTH_URL=http://localhost:3000

4. Initialiser Prisma
  npx prisma generate
  npx prisma db push

5. Démarrer le serveur
  npm run dev

🧩 Structure de la base de données  
| Modèle            | Description                                   |
|------------------ |-----------------------------------------------|
| `User`            | Utilisateurs de l’application                 |
| `Departement`     | Contient des projets et utilisateurs          |
| `Projet`          | Projets avec un chef de projet et des membres |
| `MembreProjet`    | Table Pivot utilisateur ↔ projet + rôle       |
| `Tache`           | Tâches rattachées à un projet                 |
| `TacheUtilisateur`| Table Pivot utilisateur ↔ tâche               |
| `Document`        | Fichiers partagés                                 | 
| `PartageDocument` | Historique des partages                         |
| `Notification`    | Notifications internes                        |
| `Message`         | Messagerie liée à un projet ou tâche          |

🔌 API           
     
🏢 Départements                  
  .GET /api/departements — Lister les départements  

  .POST /api/departements — Créer un département

  .GET /api/departements/:id — Détails d’un département

  .PUT /api/departements/:id — Modifier un département

  .DELETE /api/departements/:id — Supprimer un département

🧑 Utilisateurs
  .GET /api/utilisateurs — Lister tous les utilisateurs

  .POST /api/utilisateurs — Créer un nouvel utilisateur

  .GET /api/utilisateurs/:id — Récupérer un utilisateur par ID

  .PUT /api/utilisateurs/:id — Modifier un utilisateur

  .DELETE /api/utilisateurs/:id — Supprimer un utilisateur

📁 Projets
  .GET /api/projets — Lister les projets

  .POST /api/projets — Créer un projet  

  .GET /api/projets/:id — Détails d’un projet

  .PUT /api/projets/:id — Mettre à jour un projet   

  .DELETE /api/projets/:id — Supprimer un projet

  .GET /api/projets/:id/assignations — Voir les membres d’un projet

  .POST /api/projets/:id/assignations — Assigner un membre à un projet

  .DELETE /api/projets/:id/assignations — Retirer un membre d’un projet

📌 Tâches
  .GET /api/taches — Lister les tâches  

  .POST /api/taches — Créer une tâche

  .GET /api/taches/:id — Détails d’une tâche

  .PUT /api/taches/:id — Mettre à jour une tâche

  .DELETE /api/taches/:id — Supprimer une tâche        
  
  .GET /api/taches/:id/assignations — Voir les membres assignés

  .POST /api/taches/:id/assignations — Assigner un utilisateur à une tâche

  .DELETE /api/taches/:id/assignations — Retirer un membre d’une tâche

👥 Assignations
  .GET /api/assignations/:id/projet/:id — Voir les projets et les tâches  où un utilisateur est assigné        
     
  
📄 Documents
  .GET /api/documents — Lister les documents

  .POST /api/documents — Ajouter un document

  .GET /api/documents/:id — Détails d’un document

  .PUT /api/documents/:id — Modifier un document  

  .DELETE /api/documents/:id — Supprimer un document

📨 Messages
  .GET /api/messages — Lister tous les messages

  .GET /api/messages/:id — Détails d’un message

  .POST /api/messages — Envoyer un message

  .GET /api/projets/:id/messages — Lister les messages d’un projet

  .GET /api/taches/:id/messages — Lister les messages d’une tâche  

  .DELETE /api/messages/:id — Supprimer un message         
    
🔔 Notifications
  .GET /api/notifications — Lister toutes les notifications de l’utilisateur

  .GET /api/notifications/nonLues — Compter les notifications non lues de l’utilisateur

  .GET /api/notifications/:id — Détails d’une notification  

  .PUT /api/notifications/:id — Marquer comme lue ou modifier

  .DELETE /api/notifications/:id — Supprimer une notification

🗓️ Calendrier
  .GET /api/calendrier — Obtenir les événements calendaires
  .GET /api/calendrier/:id — Obtenir les détails d'un événement 

👤 Mon espace
  .GET /api/mesProjets — Voir mes projets

  .GET /api/mesProjets/:id — Voir un projet  

  🔧 : Mes projets dirigés
   .GET `/api/mesProjetsDiriges` — Voir tous mes projets dirigés  
   .GET `/api/mesProjetsDiriges/:id` — Voir un projet dirigé spécifique  
   .PUT `/api/mesProjetsDiriges/:id/edit` — Modifier un projet dirigé  
   👥 Membres
   .GET `/api/mesProjetsDiriges/:id/membres` — Voir les membres du projet  
   .POST `/api/mesProjetsDiriges/:id/membres` — Ajouter un membre au projet 
   .DELETE `/api/mesProjetsDiriges/:id/membres/:userId` — Supprimer un membre du projet  
   💬 Messages
   .GET `/api/mesProjetsDiriges/:id/messages` — Voir les messages du projet  
   .POST `/api/mesProjetsDiriges/:id/messages` — Envoyer un message au projet  
   🔔 Notifications
   .GET `/api/mesProjetsDiriges/:id/notifications` — Voir les notifications du projet  
   📂 Partages de documents
   .GET `/api/mesProjetsDiriges/:id/partages` — Voir les documents partagés 
   .POST `/api/mesProjetsDiriges/:id/partages` — Partager un document avec le projet  
   ✅ Tâches
   .GET `/api/mesProjetsDiriges/:id/taches` — Voir les tâches du projet  
   .POST `/api/mesProjetsDiriges/:id/taches` — Créer une tâche dans le projet  
   .GET `/api/mesProjetsDiriges/:id/taches/:tacheId` — Voir les détails d'une tâche  
   .PUT `/api/mesProjetsDiriges/:id/taches/:tacheId` — Mettre à jour une tâche  
   .DELETE `/api/mesProjetsDiriges/:id/taches/:tacheId` — Supprimer une tâche  
   .POST `/api/mesProjetsDiriges/:id/taches/:tacheId/assigner` — Assigner une tâche à un membre du projet
  
  .GET /api/mesTaches — Voir mes tâches

  .GET /api/mesTaches/:id — Voir une tâche

  .GET /api/monDepartement — Voir mon département

  .GET /api/monCalendrier — Voir mon calendrier

  .GET /api/mesDocuments — Voir mes documents

  .GET /api/mesMessages — Voir mes messages

📊 Statistiques

  .GET /api/statistiques — Résumé global de l’activité

🔐 Rôles

🧑‍💼 Rôles globaux (application entière)

  SUPER_ADMIN: Accès complet à l’application, y compris gestion des utilisateurs, projets et départements

  ADMIN: Gère les utilisateurs et les projets (ajout, modification, suppression)

  UTILISATEUR: Accès limité : peut uniquement consulter et interagir avec ses projets, tâches et documents

🧱 Rôles dans un projet

  CHEF_EQUIPE: Dirige le projet, gère les membres, valide les tâches

  DEVELOPPEUR: Implémente les fonctionnalités techniques

  QA: Vérifie la qualité, effectue les tests

  DESIGNER: Conçoit l’interface et l’expérience utilisateur (UI/UX)

  COMMUNICANT: Gère la communication interne et la documentation


📦 Dépendances et bibliothèques utilisées

🖥️ Frontend
  Next.js – Framework React pour les applications web modernes (next)

  React & React DOM – Bibliothèque principale d’interface utilisateur (react, react-dom)

  Tailwind CSS – Framework CSS utilitaire (tailwindcss, tailwind-merge)

  Lucide React – Bibliothèque d’icônes SVG modernes (lucide-react)

  clsx & class-variance-authority – Aide à la composition conditionnelle de classes

  Zod – Validation de schémas TypeScript (zod)

  NextAuth.js – Authentification sécurisée et intégrée dans Next.js (next-auth)

  Axios – Client HTTP simple pour interagir avec l’API (axios)

  FullCalendar – Affichage d’un calendrier interactif (@fullcalendar/core, @fullcalendar/daygrid, @fullcalendar/react)

  Chart.js & Recharts – Affichage de graphiques statistiques (chart.js, react-chartjs-2, recharts)


🧱 Backend & Base de données
  Prisma – ORM pour interagir avec PostgreSQL (@prisma/client, prisma)

  PostgreSQL – Base de données relationnelle (utilisée via Prisma)

  Formidable – Gestion de l’upload de fichiers (formidable)

  Bcrypt / Bcryptjs – Hachage des mots de passe (bcrypt, bcryptjs)


⚙️ Développement
  TypeScript – Typage statique robuste (typescript, ts-node)

  ESLint – Linter pour la qualité du code (eslint, eslint-config-next, @eslint/eslintrc)

  Types pour TypeScript – `@types/*` pour avoir l’autocomplétion et le typage fort  

  tw-animate-css – Ajout d’animations utilitaires à Tailwind


📜 Scripts NPM importants

✅ Vérification complète (check)
"check": "npm run lint && tsc --noEmit && next build"             
Ce script fait trois choses cruciales avant un déploiement ou un commit sérieux :           
   
  npm run lint : détecte les erreurs de style ou de code avec ESLint

  tsc --noEmit : vérifie le typage TypeScript sans générer de fichiers

  next build : s’assure que l’application peut être buildée sans erreur

  🧠 Très utile pour prévenir les erreurs de runtime ou de build avant la production.

🧬 Génération Prisma automatique (postinstall)
"postinstall": "prisma generate"

  Ce script se déclenche automatiquement après l’installation des dépendances (npm install) et sert à :

  Générer le client Prisma (@prisma/client) à partir du schéma schema.prisma

  S’assurer que ton ORM est toujours à jour après un git clone ou un déploiement   

  🛠️ Indispensable pour que Prisma fonctionne correctement en local ou sur une plateforme comme Vercel.  

🚀 Déploiement des migrations en production (Neon)
"deploy:prod": "dotenv -e .env.production -- npx prisma migrate deploy"

  💾 Ce script applique les migrations Prisma vers ta base PostgreSQL hébergée (ex: Neon) en utilisant le fichier .env.production.

  Il est utile quand tu veux synchroniser ta base de données distante avec les derniers changements de ton schéma Prisma (schema.prisma).  

🧪 Tests
  Tu peux utiliser Postman pour tester les routes API ou intégrer Jest/Playwright si tu veux automatiser des tests plus tard.

📸 Aperçus (optionnel)
  Ajoute ici des captures d’écran du dashboard, de l’interface projets, ou des notifications.

✍️ Auteur
  Projet développé par AMOUSSOU-GUENOU Awledou
  Encadré par Mr Nelson AKPABI

