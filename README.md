# Site Web Officiel de Lucas R. Gobbo (Projet Koda)

Ce dépôt contient le code source du site web officiel de l'auteur Lucas R. Gobbo, développé par [Koda](https://www.example.com). Le site a pour but de présenter ses œuvres, de promouvoir son livre principal et de construire une communauté de lecteurs via une newsletter.

## Table des Matières

- [Aperçu du Projet](#aperçu-du-projet)
- [Stack Technique](#stack-technique)
- [Mise en Route](#mise-en-route)
- [Scripts Disponibles](#scripts-disponibles)
- [Déploiement](#déploiement)
- [Structure du Projet](#structure-du-projet)

## Aperçu du Projet

Le site est conçu comme une plateforme centrale pour la présence en ligne de l'auteur. Les fonctionnalités clés incluent :

- **Promotion du Livre Principal** : Une page de vente dédiée avec des liens directs d'achat vers Amazon.
- **Capture de Leads** : Offre d'histoires courtes gratuites en format PDF en échange de l'inscription à la newsletter.
- **Présentation de l'Auteur** : Une page "À Propos" pour connecter avec les lecteurs.
- **Espace Presse** : Une section avec des ressources téléchargeables pour les médias.
- **Design Moderne et Responsive** : Une expérience utilisateur impeccable sur tous les appareils.

## Stack Technique

Ce projet est construit avec des technologies modernes pour garantir performance, sécurité et une excellente expérience de développement.

- **Framework** : [Next.js](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Linting** : [ESLint](https://eslint.org/)
- **Déploiement** : [Vercel](https://vercel.com/)

## Mise en Route

Suivez ces étapes pour lancer une version locale du projet sur votre machine.

### Prérequis

Assurez-vous d'avoir une version récente de [Node.js](https://nodejs.org/) (v18.x ou supérieure) installée.

### Installation

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/votre-utilisateur/nom-du-repo.git
    ```

2.  **Naviguez vers le dossier du projet :**
    ```bash
    cd nom-du-repo
    ```

3.  **Installez les dépendances :**
    ```bash
    npm install
    ```

4.  **Variables d'environnement :**
    Créez un fichier `.env.local` à la racine du projet en copiant le fichier d'exemple `.env.example`.
    ```bash
    cp .env.example .env.local
    ```
    Ce fichier contiendra les clés d'API et autres secrets (par exemple, pour le service de newsletter).

5.  **Lancez le serveur de développement :**
    ```bash
    npm run dev
    ```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le site en action.

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

- `npm run dev`: Lance l'application en mode développement.
- `npm run build`: Compile l'application pour la production.
- `npm run start`: Démarre un serveur de production local après un `build`.
- `npm run lint`: Analyse le code source pour trouver des erreurs et des problèmes de style.

## Déploiement

Le site est déployé sur **Vercel** et est connecté à la branche `main` de ce dépôt.

Chaque `push` ou `merge` sur la branche `main` déclenche automatiquement un nouveau déploiement en production. Les Pull Requests génèrent des "Preview Deployments" pour tester les changements avant de les fusionner.

## Structure du Projet

La structure des dossiers suit les conventions de Next.js avec le App Router.

```
/
├── public/               # Fichiers statiques (images, polices, etc.)
├── src/
│   ├── app/              # Cœur du App Router (pages, layouts, etc.)
│   │   ├── api/          # Route Handlers pour les fonctions backend
│   │   ├── (pages)/      # Groupes de routes pour l'organisation
│   │   │   ├── a-propos/
│   │   │   └── ...
│   │   ├── globals.css   # Styles globaux
│   │   ├── layout.tsx    # Layout principal de l'application
│   │   └── page.tsx      # Page d'accueil
│   │
│   ├── components/       # Composants React réutilisables (Navbar, Footer, Boutons...)
│   ├── lib/              # Fonctions utilitaires, helpers (ex: connexion API newsletter)
│   └── styles/           # (Optionnel) Fichiers de style non gérés par Tailwind
│
├── .env.local            # Variables d'environnement (ignoré par Git)
├── .eslintrc.json        # Configuration d'ESLint
├── next.config.mjs       # Configuration de Next.js
├── tailwind.config.ts    # Configuration de Tailwind CSS
└── tsconfig.json         # Configuration de TypeScript
```
---
