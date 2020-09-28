## Organisation des styles

Dans le dossier `src` créer un dossier `styles` et y créer les 2 fichiers suivants :

- `styles/index.scss`
- `styles/_variables.scss`

Dans le fichier `angular.json`, remplacer les occurences de `"src/styles.scss"` par `"src/styles/index.scss"`, puis supprimer le fichier `"src/styles.scss"`

> Redémarrer le serveur de dev pour prendre en compte ce changement

Dans `index.scss` écrire le CSS suivant :

```
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}
```

Dans le fichier `_variables.scss` écrire le SCSS suivant :

```
$color-st_darkBlue: #03234B;
```
