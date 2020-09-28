## Création des routes

Dans `AppRoutingModule` créer les routes suivantes :

| path    | component           |
| ------- | ------------------- |
|         | `HomeComponent`     |
| `about` | `AboutComponent`    |
| `**`    | `NotFoundComponent` |

Dans `ProductsRoutingModule` créer les routes suivantes :

| path                  | component                  |
| --------------------- | -------------------------- |
| `products`            | `ProductsListComponent`    |
| `products/search`     | `ProductsSearchComponent`  |
| `products/compare`    | `ProductsCompareComponent` |
| `products/:productId` | `ProductDetailsComponent`  |

Effacer le contenu de app.component.html sauf `<router-outlet></router-outlet>` puis tester les différentes URLs
