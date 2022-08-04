## Utilisation de RxJS

Dans `AppRoutingModule` et `ProductsRoutingModule` ajouter une clé `data.title` pour chaque route comme dans l'exemple ci dessous :

```
{
  path: 'products',
  component: ProductsListComponent,
  data: {
    title: 'Products List'
  }
}
```

> Les data créés au niveau de la route sont disponibles via l'Observable `activatedRoute.data`. Pour éviter de relire cet observable dans chaque composant, nous allons centraliser le code dans `AppComponent`.

Dans `AppComponent` créer un constructeur et une méthode `ngOnInit` (en implémentant l'interface `OnInit`).

Injecter les services `Router`, `ActivatedRouter` de `@angular/router` et `Title` de `@angular/platform-browser` via le constructeur

Dans `ngOnInit` souscrire à l'Observable `router.events` comme ceci :

```
ngOnInit(): void {
  this.router.events.subscribe((event) => {
    console.log(event);
  });
}
```

Changer de page et observer les logs. Lorsque l'événement `NavigationEnd` se produit c'est le composant s'est afficher, il sera alors temps de modifier le titre de la page.

En utilisant l'opérateur `filter` de RxJS, ne souscrire qu'aux événéments de type `NavigationEnd`. Vous pouvez utiliser l'opérateur JavaScript `instanceof` pour tester le type de l'objet `event`.

Dans la méthode subscribe ajouter ensuite la ligne suivante pour mettre à jour la balise `<title>` au changement de page :

```
this.title.setTitle(this.activatedRoute.firstChild.snapshot.data.title);
```

> Bonus 1 : utiliser l'opérateur `map` pour que la méthode subscribe fournisse directement le titre

> Bonus 2 : utiliser l'opérateur `switchMap` pour utiliser `this.activatedRoute.firstChild.data` qui est également un observable plutôt que le snapshot
