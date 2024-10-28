# myBooks

### **Projet 6 : Application de gestion de bibliothèque personnelle**

- **Description** : application où les utilisateurs peuvent répertorier leurs livres, ajouter des commentaires, et suivre les livres qu'ils ont lus, qu'ils sont en train de lire, ou qu'ils souhaitent lire.

### Présentation projet

- Rédiger un document de présentation du projet (une page récapitulative des fonctionnalités, architecture choisie, technologies et packages utilisés).

### Guide utilisateur

- Rédiger un guide utilisateur pour expliquer comment utiliser l'application.

### Installation

- Fournir un guide d’installation pour exécuter l’application en local (pré-requis, installation, etc). (dans le README)

```bash
git clone https://github.com/sartek430/myBooks
cd myBooks
npm run start
```

### Feuille de route

- Installer les gestures et reanimated etc
- Installer les icons ✅
- Installer les fonts ✅
- Load les fonts
- Importer les couleurs ✅
- Voir tamagui pour les couleurs et le theming
- Installer expo router
- Incorporer firebase

### Features

auth et stockage en temps réel firebase

- Inscription et connexion sur la plateforme.
- Recherche générale (titre, auteur) de livre. (barre de recherche, titre ou author. renvoie sous forme tableau les résultats. clique pour afficher détail)
- Ajout de livre à ma collection de livre.
- Ajout de commentaire sur mes livres.
- Ajout d'un état de lecture sur un livre (à lire, en cours de lecture, lecture terminée. (état de livre : à lire, en cours, fini))
- Modification information de compte + suppression de compte (avatar sur app bar pour modification information compte)

### Navigation

Utilisation de expo router car bien plus simple pour la navigation. pas besoin de spécifier toutes les interfaces de react navigation. File bases routing, group folder etc

Bottom tabs navigation + stack navigation
exemple de tab avec stack, chaque tab prend un stack navigator
https://reactnavigation.org/docs/tab-based-navigation/#a-stack-navigator-for-each-tab

- Tabs
- - Home page (stack navigation)
- - - Search page : affichage des livres selon la recherche. Clique sur un livre pour afficher son détail.
- - - Detail page : détail d'un livre, ajout à ma collection.

- - Library page (stack navigation)
- - - List page : Mes livres présent dans ma collection, clique sur un livre pour afficher un détail moins poussé.
- - - Detail page : détail d'un livre, suivi d'état de lecture.

### Techno

- Expo Blank TS
- Package Google Fonts (@expo-google-fonts/)
- Icons (@expo/vector-icons)
- React Native Router (Expo Router ?) (@react-navigation)

# Branch name convention

### Category

- **feature**: is for adding, refactoring or removing a feature
- **bugfix**: is for fixing a bug
- **hotfix**: is for changing code with a temporary solution and/or without following the usual process (usually because of an emergency)
- **test**: is for experimenting outside of an issue/ticket
- **docs**: is for writing, updating, or fixing documentation

### Description

After the category, there should be a "/" followed by a description which sums up the purpose of this specific branch. This description should be short and "kebab-cased".

### Examples:

- You need to add, refactor or remove a feature: **`git branch feature/create-new-button-component`**
- You need to fix a bug: **`git branch bugfix/button-overlap-form-on-mobile`**
- You need to fix a bug really fast (possibly with a temporary solution): **`git branch hotfix/registration-form-not-working`**
- You need to experiment outside of an issue/ticket: **`git branch test/refactor-components-with-atomic-design`**
- You need to update documentations **`git branch docs/update-readme`**

# Commit name convention

### Category

- **feat**: is for adding a new feature
- **fix**: is for fixing a bug
- **refactor**: is for changing code for peformance or convenience purpose (e.g. readibility)
- **chore**: is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)

After the category, there should be a ":" announcing the commit description.

### Description

After the colon, the commit description should consist in short statements describing the changes.

Each statement should start with a verb conjugated in an imperative way. Statements should be seperated from themselves with a ";".

### Examples:

- **`git commit -m 'feat: add new button component; add new button components to templates'`**
- **`git commit -m 'fix: add the stop directive to button component to prevent propagation'`**
- **`git commit -m 'refactor: rewrite button component in TypeScript'`**
- **`git commit -m 'chore: write button documentation'`**

### Sources :

- [dev.to](https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4)
- [medium.com](https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534)
