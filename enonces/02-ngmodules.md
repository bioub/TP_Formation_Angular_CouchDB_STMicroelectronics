## Création des modules

Créer un module `ProductsModule` **avec le routing (trouver l'option associée)** qui contiendra les classes liées aux produits (services, composants, pipes, directives...)

Créer un module `SharedModule` pour les composants, pipes et directives qui seront réutilisés entre les modules

Créer un dossier `core` qui contiendra les services globaux (singletons dans toute l'app) et les composants, pipes, directives qui ne seront utilisé que par les composants de `AppModule`

Dans `AppModule`, importer `SharedModule`, `BrowserModule`, `ProductsModule`, `AppRoutingModule` dans cet ordre.

Dans `SharedModule`, exporter `CommonModule`

Dans `ProductsModule`, remplacer l'import de `CommonModule` par `SharedModule`

> Pour créer un module on utilise la commande `ng generate module`, vous pouvez afficher l'aide avec l'option `--help`, vous pouvez lancer la commande "à blanc" avec l'option `--dry-run`.
