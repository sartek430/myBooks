# myBooks

### **Projet 6 : Application de gestion de bibliothèque personnelle**

- **Description** : application où les utilisateurs peuvent répertorier leurs livres, ajouter des commentaires, et suivre les livres qu'ils ont lus, qu'ils sont en train de lire, ou qu'ils souhaitent lire.

### Présentation projet

My books est un projet mobile de bibliothèque personnelle. Il est réalisé par Clément JAUNAY et Hugo VAYR et ses principales fonctionnalités sont :
- La gestion de compte utilisateur (inscription, connexion, déconnexion)
-	La recherche de livre depuis une barre de recherche, en fonction d’un titre, d’un nom d’auteur, d’une date ou d’un mot clé
-	L’affichage des livres trouvés après la recherche avec ses informations (titre, auteur, date de parution et note)
-	L’ajout de livre choisie dans une liste personnel
-	L’ajout de commentaire sur les livres de notre liste
-	L’affichage des livres inscrits dans la liste
-	L’affichage des commentaires 

### Guide utilisateur

Quand vous lancez l’application, le premier écran qui vous sera affiché, sera la page d’inscription et de connexion. 
Il se compose de deux formulaires, l’un pour la connexion et l’autre pour l’inscription. Vous pouvez naviguez entre les deux formulaires via un bouton. Une fois que vous vous êtes connecté, vous obtenez l’accès à l’application.\
Vous apercevez alors une barre de navigation en bas qui vous amène vers les pages disponibles du projet à savoir la page de recherche de livre, la liste de livre enregistrés dans votre bibliothèque personnelle, la page d’informations de votre compte et celle affichant vos commentaires sur vos livres de votre bibliothèque. La page de recherche comporte une barre de recherche.\
Une fois la recherche faite, des cartes vont s’afficher pour chaque livre trouvé. Elles montrent le nom du livre, la première de couverture, la note globale via des étoiles et la première date de parution. En haut à droite, se trouve une icône « plus » qui vous indique que vous pouvez ajouter le livre à votre bibliothèque. Il y apparaitra dans la page « My book list ».\
Cette page se compose également de carte, représentant un livre, avec ces mêmes infos. La seule différence se trouve aussi en haut à droite car l’icône « plus » s’est transformée en icone « bulle ». Si vous appuyez dessus, un formulaire apparaitra, vous permettant d’ajouter un commentaire sur ce livre. Ces derniers vous seront affichés dans la page « My comments ».


### Installation

```bash
git clone https://github.com/sartek430/myBooks
cd myBooks
npm install
npm run start
```

### Architecture

Notre projet comporte une architecture de dossier étudiée pour avoir la meilleure expérience de développement possible. Nos dossiers sont choisis pour faciliter la navigation, par le développeur, des fichiers du projet. Les fichiers sont tous rangés dans les dossiers leurs correspondants et ont leurs responsabilités qui leurs sont propres.\
Voici comment se compose cette architecture : 
- App (contient les pages du projet)
- 	Assets (les images)
-	Components (les composants réutilisé)
-	Contexts (les contextes)
-	Dto (les Data transfert Object. Pour insérer des données en base) 
-	Models (des types d’objets)
-	Services(les services qui gèrent les appels backend)
-	Utils(couleurs, constantes, configurations)

### Technologies

- React native avec expo
- React
- Firebase (authentication et firestore)
- Expo router
- Typescript
- Google font

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
