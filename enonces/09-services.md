## Création d'un service ProductService

Utiliser la commande ng generate pour créer un service `ProductService` dans le dossier `products`.

Importer le module `HttpClientModule` de `@angular/common/http` dans `AppModule``

Injecter la classe `HttpClient` dans `ProductService`

Dans `ProductService` créer une méthode `getAllDocs` avec le code suivant :

```
getAllDocs(): Observable<any> {
  return this.httpClient.get<any>('https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/_all_docs?include_docs=true');
}
```

Dans `ProductsListComponent` injecter le service `ProductService` et appeler sa méthode getAllDocs, ex :

```
ngOnInit(): void {
  this.productService.getAllDocs().subscribe((data) => {
    console.log(data);
  });
}
```

La réponse du serveur est de la forme :

```
{
  "total_rows": 20,
  "offset": 0,
  "rows": [
    { "id": "dell-streak-7" },
    { "id": "dell-venue" },
    { "id": "droid-2-global-by-motorola" },
    { "id": "droid-pro-by-motorola" },
    { "id": "lg-axis" },
    { "id": "motorola-atrix-4g" },
    { "id": "motorola-bravo-with-motoblur" },
    { "id": "motorola-charm-with-motoblur" },
    { "id": "motorola-defy-with-motoblur" },
    { "id": "motorola-xoom" },
    { "id": "motorola-xoom-with-wi-fi" },
    { "id": "nexus-s" },
    { "id": "samsung-galaxy-tab" },
    { "id": "samsung-gem" },
    { "id": "samsung-mesmerize-a-galaxy-s-phone" },
    { "id": "samsung-showcase-a-galaxy-s-phone" },
    { "id": "samsung-transform" },
    { "id": "sanyo-zio" },
    { "id": "t-mobile-g2" },
    { "id": "t-mobile-mytouch-4g" }
  ]
}
```

En utilisant l'opérateur `map` de RxJS, transformer la réponse dans getAllDocs pour que le retour soit de la forme :

```
[
  { "id": "dell-streak-7" },
  { "id": "dell-venue" },
  { "id": "droid-2-global-by-motorola" },
  { "id": "droid-pro-by-motorola" },
  { "id": "lg-axis" },
  { "id": "motorola-atrix-4g" },
  { "id": "motorola-bravo-with-motoblur" },
  { "id": "motorola-charm-with-motoblur" },
  { "id": "motorola-defy-with-motoblur" },
  { "id": "motorola-xoom" },
  { "id": "motorola-xoom-with-wi-fi" },
  { "id": "nexus-s" },
  { "id": "samsung-galaxy-tab" },
  { "id": "samsung-gem" },
  { "id": "samsung-mesmerize-a-galaxy-s-phone" },
  { "id": "samsung-showcase-a-galaxy-s-phone" },
  { "id": "samsung-transform" },
  { "id": "sanyo-zio" },
  { "id": "t-mobile-g2" },
  { "id": "t-mobile-mytouch-4g" }
]
```

Appeler également la méthode `map` du type array pour transformer chaque object du tableau en sa clé `"doc"`.

Modifier ensuite le callback au niveau du subscribe de ProductsListComponent pour créer une propriété `products` à partir des données fournies par l'observable.

> Bonus : En utilisant la méthode `omit` de `lodash-es` [https://lodash.com/docs/4.17.15#omit](https://lodash.com/docs/4.17.15#omit), supprimer les clés `"_rev"` des produits.
