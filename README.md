# My GPX — version GitHub Pages

Ce dossier contient la version statique complète du site My GPX.

## Publication

1. Décompressez l’archive.
2. Déposez tout le contenu du dossier à la racine du dépôt GitHub.
3. Vérifiez que `index.html` est bien à la racine.
4. Dans GitHub, ouvrez **Settings > Pages**.
5. Dans **Build and deployment**, choisissez **Deploy from a branch**.
6. Sélectionnez la branche `main` et le dossier `/ (root)`, puis enregistrez.

## Formulaire de devis

GitHub Pages ne traite pas les formulaires côté serveur. Le formulaire ouvre donc un e-mail prérempli à destination de `my.gpx13@gmail.com`. Les pièces jointes doivent être ajoutées manuellement dans l'e-mail.

## Activer ou désactiver la maintenance

Un seul fichier commande le mode maintenance : `assets/maintenance-config.js`.

Pour l'activer depuis GitHub :

1. Ouvrez `assets`, puis `maintenance-config.js`.
2. Cliquez sur l'icône crayon.
3. Remplacez `false` par `true` sur la ligne :

   `window.MYGPX_MAINTENANCE = false;`

4. Cliquez sur **Commit changes**. La page de maintenance apparaîtra après la republication de GitHub Pages.

Pour remettre le site en ligne, effectuez la même opération en remplaçant `true` par `false`.

## Contenu

- 6 pages HTML principales et une page de maintenance
- feuilles de styles complètes
- 19 images WebP
- navigation et galerie filtrable
- formulaire de devis adapté à un hébergement statique
- interrupteur de maintenance commun à toutes les pages
