## Création de ButtonLinkComponent

Dans le fichier `home.component.html` ajouter le code suivant :

```
<st-button-link href="https://www.st.com/">
  ST.com
</st-button-link>

<st-button-link [path]="['products', 'search']">
  Search Products
</st-button-link>
```

> Notre composant est un lien qui s'affiche sous forme d'un bouton. On peut l'utiliser soit avec une propriété `href` (lien externe), soit avec `path` (lien interne)

### Affichage du composant et lien externe

Dans le TypeScript du composant déclarer 2 propriétés :

- `href` (type `string`)
- `path` (type `string[]`)

Utiliser le décorateur d'Angular `@Input()` sur ces 2 propriétés

Dans le template du composant utiliser le code suivant :

```
<a [href]="href">
  <ng-content></ng-content>
</a>
```

Dans le SCSS du composant utiliser le code suivant :

```
:host {
  display: block;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: blue;
}

a {
  text-align: center;
  text-decoration: none;
  display: block;
  cursor: pointer;
  padding: 10px;
  color: white;
}

```

Remplacer la couleur `blue` par la variable `$color_st-darkBlue`

### Lien interne

Le composant fonctionne désormais avec des liens externes mais pas des liens internes (équivalent à `[routerLink]`)

Dans le TypeScript du composant ajouter les logs suivants :

```
constructor() {
  console.log('constructor', this.href);
}

ngOnInit(): void {
  console.log('ngOnInit', this.href);
}
```

> Quelle différence remarquez vous entre le constructeur et la méthode du LifeCycle ngOnInit ?

Dans le constructeur injecter la classe `Router` de `@angular/router`.

Ajouter une propriété `external` (default: `true`) dans la classe.

Modifier la méthode `ngOnInit` comme suit :

```
ngOnInit(): void {
  if (!this.href && this.path?.length) {
    this.external = false;
    this.href = this.router.createUrlTree(this.path)
  }
}
```

Ajouter la méthode suivante :

```
handleClick(event: MouseEvent): void {
  if (this.external) {
    return;
  }
  event.preventDefault();
  this.router.navigateByUrl(this.href);
}
```

Dans le template, appeler la méthode `handleClick` avec le paramètre `$event` au click du lien.

> Bonus : ajouter la classe `external` lorsque que lien est externe modifier le style à votre guise lorsque c'est le cas.

> Bonus 2 : accepter que la propriété `path` puisse être de type `string` (en plus du type `string[]`)
