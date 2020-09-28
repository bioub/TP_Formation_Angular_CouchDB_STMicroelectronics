## Page de comparaison

Utiliser notre bouton button-link sur la page ProductList pour comparer les produits.

Le bouton devra afficher Comparer.

Dans `ProductService` ajouter une propriété `selectedProducts` et une méthode `setSelectedProducts` :

```
selectedProducts: Product[] = [];

setSelectedProducts(products: Product[]): void {
  this.selectedProducts = products;
}
```

Dans `ProductsListComponent` ajouter la méthode suivante :

```
handleSelectionChanged(event): void {
  this.productService.setSelectedProducts(event.api.getSelectedRows());
}
```

Appeler cette méthode sur l'événement `selectionChanged` de `<ag-grid-angular>`.

Dans `ProductsCompareComponent` injecter `ProductService` et affecter sa propriété `selectedProducts` à une propriété du composant.

Afficher les éléments côte à côte avec le HTML / CSS de votre choix.

> Bonus 1 : rendre le bouton désactivable avec une option disabled lorsqu'il n'y a pas de sélection

> Bonus 2 : faire que le bouton affiche Comparer x produits (x étant le nombre de produits sélectionnées)

> Bonus 3 : limiter la comparaison à 3 produits
