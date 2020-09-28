## Page Search

Installer les bibliothèque PrimeNG et ag-Grid :
`npm i primeng primeicons`

Dans le fichier `styles/index.scss` importer :

```
@import "~primeicons/primeicons.css";
@import "~primeng/resources/themes/saga-blue/theme.css";
@import "~primeng/resources/primeng.min.css";
```

Dans ProductsModule importer les modules :

- `FormsModule` de `@angular/forms`
- `InputTextModule` de `primeng/inputtext`
- `TriStateCheckboxModule` de `primeng/tristatecheckbox`
- `ListboxModule` de `primeng/listbox`
- `ButtonModule` de `primeng/button``

Dans `ProductService` ajouter la propriété :

```
filters = {
  name: '',
  fmRadio: null,
  availability: []
};
```

Dans `ProductsSearchComponent` ajouter 3 champs :

- name -> pInputText
- fm radio -> p-triStateCheckbox
- availability -> p-listbox (`[options]="[{label: 'T-Mobile', value: 'T-Mobile'}, {label: 'Verizon', value: 'Verizon'}]"`)

Ces champs sont liés à la propriétés `filters` de `ProductService`

Dans la méthode `getAllDocs` ajouter l'opérateur `map((projects) => this.applyFilters(projects))`

Compléter la méthode `applyFilters` pour appliquer les filtres correspondants :

```
applyFilters(products: Product[]) {
  let results = products;

  if (this.filters.name) {
    // result =
  }

  if (this.filters.fmRadio !== null) {
    // result =
  }

  if (this.filters.availability.length) {
    // result =
  }

  return results;
}
```

> Bonus 1 : Afficher le nombre de résultats dans le Bouton de ProductsSearchComponent

> Bonus 2 : Générer les optiosn du filtre `availability` à partir des résultats de la base de données
