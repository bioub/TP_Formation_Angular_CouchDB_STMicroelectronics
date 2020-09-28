## Utilisation de ag-Grid

Nous allons utiliser la bibliothèque [ag-Grid](https://www.ag-grid.com/) pour afficher les produits dans `ProductListComponent`.

Installer la bibliothèque :

`npm i ag-grid-community ag-grid-angular`

Dans le fichier `src/styles/index.scss` importer les styles de la bibliothèque :

```
@import "~ag-grid-community/dist/styles/ag-grid.css";
@import "~ag-grid-community/dist/styles/ag-theme-balham.css";
```

> `~` fait référence au répertoire `node_modules`

En vous inspirant de l'exemple :
https://stackblitz.com/edit/ag-grid-angular-hello-world

Afficher une grille avec les colonnes :

- `_id`
- `name`
- `additionalFeatures`

> Attention le thème à utiliser est `ag-theme-balham`

> Les clés possible d'une définition de colonne sont disponible dans l'interface `ColDef` de `ag-grid-community`

Ajouter les fonctionnalités suivantes à partir de la [docs de ag-Grid sur les colonnes](https://www.ag-grid.com/javascript-grid-column-properties/) :

- toutes les colonnes doivent être triables
- toutes les colonnes doivent être redimensionnables
- en utilisant les flexbox, la colonne `additionalFeatures` doit prendre initialement `3/5e` de l'espace disponible, les autres `1/5e`
- la colonne `_id` doit être `pinned` à gauche, ne pas pouvoir être déplacée et contenir une checkbox

> Bonus : utiliser defaultColDef pour les valeurs communes

En suivant la docs sur les options de la grille (pouvant être passées en `@Input` à `<ag-grid-angular>`), ajouter les fonctionnalités suivantes :

- désactiver la sélection des cellules
- la sélection des lignes doit pouvoir être multiple : https://www.ag-grid.com/javascript-grid-selection/

> Bonus 1 : la hauteur et la largeur de la grille doivent être celles disponibles sur la page.

> Bonus 2 : utiliser le pipe `async` de Angular pour passer les produits à la grille

> Bonus 3 : En vous inspirant de l'exemple https://www.ag-grid.com/javascript-grid-cell-rendering-components/#example-rendering-using-more-complex-angular-components afficher les colonnes `availability` et `hardware` en utilisant un composant externe via l'option cellRendererFramework
