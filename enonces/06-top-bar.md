## Création de la top-bar

Dans `app.component.html` ajouter la balise `<st-top-bar></st-top-bar>` en début de fichier.

Dans le template de la top-bar, ajouter des liens vers les pages : Home, About, ProductsList et ProductsSearch en utilisant la directive `routerLink`

Dans le fichier SCSS de la top-bar importer le fichier `_variables.scss` puis utiliser la variable `$color-st_darkBlue` comme ceci :

```
@import '../../../styles/variables';

:host {
  display: block;
  background-color: $color-st_darkBlue;
  color: white;
}
```

Modifier ensuite le SCSS à votre guise, par exemple en utilisant les FlexBox vues pendant la formation HTML/CSS.

> Bonus : dans le CSS créer une classe à utiliser avec `routerLinkActive` pour faire ressortir le lien associé à la page courante.
